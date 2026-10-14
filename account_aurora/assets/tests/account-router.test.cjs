const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, readdirSync, existsSync } = require('node:fs');
const { join } = require('node:path');
const vm = require('node:vm');
const root = join(__dirname, '../..');
const routerSource = readFileSync(join(root, 'assets/js/account-router.js'), 'utf8');

function setup(url = 'http://localhost/account/index.html') {
  const window = new EventTarget();
  const document = new EventTarget();
  let currentURL = new URL(url);
  const redirects = [];
  const portals = new Set();
  const intervals = new Map();
  const timeouts = new Map();
  let timerId = 0;
  const canvas = { persistent: true };
  const modal = { focus() {} };
  const host = { innerHTML: '', dataset: {}, contains() { return false; }, querySelector() { return modal; }, replaceChildren() {} };
  const main = { scrollTop: 0 };
  document.baseURI = currentURL.href;
  document.querySelector = selector => {
    if (selector === 'main.welcome') return main;
    if (selector.startsWith('link[')) return { before() {} };
    if (selector === 'canvas') return canvas;
    throw new Error('Router must not mutate shell nodes: ' + selector);
  };
  document.getElementById = id => { assert.equal(id, 'account-view'); return host; };
  document.createElement = () => ({ textContent: '', setAttribute() {} });
  document.body = { append(node) { portals.add(node); } };
  const location = {
    get pathname() { return currentURL.pathname; },
    get search() { return currentURL.search; },
    get hash() { return currentURL.hash; },
    set hash(value) { currentURL.hash = value; queueMicrotask(() => window.dispatchEvent(new Event('hashchange'))); },
    assign(value) { redirects.push(value); }
  };
  const history = { replaceState(_state, _title, target) { currentURL = new URL(target, currentURL); } };
  window.AccountShell = { setAuthenticated() {} };
  window.setInterval = callback => { intervals.set(++timerId, callback); return timerId; };
  window.clearInterval = id => intervals.delete(id);
  window.setTimeout = callback => { timeouts.set(++timerId, callback); return timerId; };
  window.clearTimeout = id => timeouts.delete(id);
  const context = vm.createContext({ window, document, location, history, URL, Event, console });
  vm.runInContext(routerSource, context);
  return { window, document, location, host, canvas, intervals, timeouts, portals, redirects, app: window.AccountApp, context };
}
const flush = () => new Promise(resolve => setImmediate(resolve));

test('routes replace only the view; canvases remain mounted and repeated routes do not remount', async () => {
  const env = setup(); let mounts = 0;
  env.app.register('/login', { title: 'Login', markup: 'login', mount() { mounts++; } });
  env.app.register('/login/password', { title: 'Password', markup: 'password', mount() { mounts++; } });
  env.app.start();
  const canvas = env.document.querySelector('canvas');
  env.app.navigate('login-password.html'); await flush();
  assert.equal(env.host.innerHTML, 'password');
  assert.equal(env.location.hash, '#/login/password');
  assert.equal(env.document.querySelector('canvas'), canvas);
  env.app.navigate('#/login/password'); await flush();
  assert.equal(mounts, 2);
  assert.deepEqual(env.redirects, []);
});

test('unmount clears global listeners, timers and portalled dropdowns', async () => {
  const env = setup(); let hits = 0; let hides = 0; let shows = 0; let oldScope;
  env.app.register('/login', { title: 'Login', markup: 'login', mount(scope) {
    oldScope = scope;
    scope.listen(env.window, 'resize', () => hits++);
    scope.listen(env.document, 'click', () => hits++);
    scope.listen(env.window, 'pageshow', () => shows++);
    scope.listen(env.window, 'pagehide', () => hides++);
    scope.setInterval(() => {}, 1000);
    scope.setTimeout(() => {}, 1000);
    const node = { remove() { env.portals.delete(node); } };
    scope.portal(node);
  } });
  env.app.register('/register', { title: 'Register', markup: 'register', mount() {} });
  env.app.start();
  assert.equal(shows, 1);
  env.window.dispatchEvent(new Event('resize')); assert.equal(hits, 1);
  env.app.navigate('register.html'); await flush();
  env.window.dispatchEvent(new Event('resize'));
  assert.equal(hits, 1);
  assert.equal(hides, 1);
  assert.equal(oldScope.active, false);
  assert.equal(env.intervals.size, 0);
  assert.equal(env.timeouts.size, 0);
  assert.equal(env.portals.size, 0);
});

test('file URL route resolution, initial deep link, legal fragment and invalid-route fallback', async () => {
  const env = setup('file:///local/account/index.html#/register');
  env.app.register('/login', { title: 'Login', markup: 'login', mount() {} });
  env.app.register('/register', { title: 'Register', markup: 'register', mount() {} });
  env.app.start(); assert.equal(env.host.innerHTML, 'register');
  env.location.hash = '#privacy-policy'; await flush();
  assert.equal(env.host.innerHTML, 'register');
  env.app.navigate('index.html'); await flush();
  assert.equal(env.host.innerHTML, 'login');
  env.location.hash = '#/unknown'; await flush();
  assert.equal(env.location.hash, '#/login');
  env.app.navigate('../StudioDemo/content.html#loggedIn=1');
  assert.deepEqual(env.redirects, ['../StudioDemo/content.html#loggedIn=1']);
});

test('every view registers valid standalone markup; internal hrefs and assets resolve', () => {
  const registered = new Map();
  const context = vm.createContext({ window: { AccountApp: { register(route, view) {
    assert.ok(!registered.has(route)); registered.set(route, view);
  }, getView(route) { return registered.get(route); } } } });
  // Match the entry point's script order so shared views load before their consumers.
  const entry = readFileSync(join(root, 'index.html'), 'utf8');
  const viewScripts = [...entry.matchAll(/src="(assets\/js\/views\/[^"?]+)(?:\?[^" ]*)?"/g)].map(match => match[1]);
  assert.equal(viewScripts.length, readdirSync(join(root, 'assets/js/views')).filter(name => name.endsWith('.js')).length);
  for (const file of viewScripts) {
    vm.runInContext(readFileSync(join(root, file), 'utf8'), context);
  }
  assert.equal(registered.size, 15);
  assert.deepEqual(readdirSync(root).filter(name => name.endsWith('.html')).sort(), [
    'index.html', 'login-forgot.html', 'login-password.html', 'login-qr.html',
    'login-return.html', 'login-sms.html', 'register-email.html', 'register-sms.html', 'register.html'
  ].sort());
  // Every literal navigation target must remain valid after removing step HTML files.
  for (const file of viewScripts) {
    const source = readFileSync(join(root, file), 'utf8');
    for (const [, target] of source.matchAll(/['"]([^'"\s]+\.html(?:[?#][^'"\s]*)?)['"]/g)) {
      assert.ok(existsSync(join(root, target.split(/[?#]/)[0])), target);
    }
  }
  for (const [route, view] of registered) {
    assert.ok(view.markup.includes('welcome-modal'), route);
    assert.ok(!view.markup.includes('aurora-canvas'), route);
    assert.ok(!view.markup.includes('<script'), route);
    for (const match of view.markup.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const ref = match[1];
      if (ref.startsWith('#/')) assert.ok(registered.has(ref.slice(1)), ref);
      else if (!ref.startsWith('#')) assert.ok(existsSync(join(root, ref.split('?')[0])), ref);
    }
    assert.ok(!view.mount.toString().includes('window.location.href'), route);
  }
});
