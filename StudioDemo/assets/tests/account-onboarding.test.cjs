const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '../js/account-profile.js'), 'utf8');

function setup(query = '', linked = false, ready = true) {
  class Element extends EventTarget {
    constructor() {
      super();
      this.dataset = { maxlength: '1000' };
      this.style = { setProperty() {} };
      this.classList = { add() {}, remove() {}, toggle() {} };
      this.value = '';
      this.open = false;
    }
    setAttribute() {}
    removeAttribute() {}
    append() {}
    focus() {}
    scrollTo() {}
    querySelectorAll() { return []; }
    querySelector() { return new Element(); }
    showModal() { this.open = true; }
    close() { this.open = false; this.dispatchEvent(new Event('close')); }
  }
  const nodes = new Map();
  const document = new EventTarget();
  document.getElementById = id => {
    if (id === 'studio-link-modal' && !ready) return null;
    if (!nodes.has(id)) nodes.set(id, new Element());
    return nodes.get(id);
  };
  document.querySelector = () => null;
  document.querySelectorAll = () => [];
  document.createElement = () => new Element();
  const href = 'file:///demo/StudioDemo/content.html' + query;
  const location = new URL(href);
  let prompts = 0;
  let saved;
  const timers = [];
  document.addEventListener('studio:linkprompt', () => { prompts++; });
  const window = new EventTarget();
  window.StudioAccount = { linked };
  window.matchMedia = () => ({ matches: true });
  window.studioProfile = {
    read: () => saved,
    save(profile) { saved = profile; return true; }
  };
  vm.runInNewContext(source, {
    window, document, location, URL, URLSearchParams, Event,
    history: { state: null, replaceState(_, __, url) { location.href = url; } },
    ResizeObserver: class { observe() {} },
    requestAnimationFrame: callback => callback(),
    setTimeout: callback => { timers.push(callback); return timers.length; },
    clearTimeout() {}
  });
  return {
    nodes, location, get prompts() { return prompts; },
    flush() { while (timers.length) timers.shift()(); },
    ready() { ready = true; document.dispatchEvent(new Event('DOMContentLoaded')); }
  };
}

test('registration shows profile first and prompts once after cancel or Escape', () => {
  const page = setup('?registered=1');
  const dialog = page.nodes.get('profile-dialog');
  assert.equal(dialog.open, true);
  assert.equal(page.prompts, 0);
  dialog.dispatchEvent(new Event('cancel', { cancelable: true }));
  page.flush();
  assert.equal(page.prompts, 1);
  dialog.showModal();
  dialog.close();
  assert.equal(page.prompts, 1);
  assert.equal(page.location.search, '');
});

test('valid registration save continues to binding; invalid save keeps profile open', async () => {
  const page = setup('?registered=1');
  const form = page.nodes.get('profile-form');
  const nickname = page.nodes.get('profile-nickname');
  nickname.value = '';
  form.dispatchEvent(new Event('submit', { cancelable: true }));
  page.flush();
  assert.equal(page.nodes.get('profile-dialog').open, true);
  assert.equal(page.prompts, 0);
  nickname.value = 'New Creator';
  form.dispatchEvent(new Event('submit', { cancelable: true }));
  page.flush();
  await Promise.resolve();
  assert.equal(page.nodes.get('profile-dialog').open, false);
  assert.equal(page.prompts, 1);
});

test('login waits for binding dialog initialization, including deferred script timing', () => {
  for (const marker of ['?loggedIn=1', '#loggedIn=1']) {
    const page = setup(marker, false, false);
    assert.equal(page.nodes.get('profile-dialog').open, false);
    assert.equal(page.prompts, 0);
    page.ready();
    assert.equal(page.prompts, 1);
    assert.equal(page.location.search + page.location.hash, '');
  }
});

test('ordinary visits and linked logins do not prompt', () => {
  assert.equal(setup().prompts, 0);
  assert.equal(setup('?linked=1#loggedIn=1', true).prompts, 0);
});
