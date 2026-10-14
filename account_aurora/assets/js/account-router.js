/* Classic-script view modules also work when index.html is opened via file://. */
(() => {
  const views = new Map();
  let currentRoute = null;
  let currentScope = null;
  let started = false;
  let host;
  let viewStyle;

  function routeForURL(target) {
    const url = new URL(target, document.baseURI);
    const base = new URL('.', document.baseURI);
    if (url.origin !== base.origin || new URL('.', url).href !== base.href) return null;
    const file = url.pathname.split('/').pop();
    if (file === 'index.html' || file === '') {
      if (url.hash.startsWith('#/')) return url.hash.slice(1);
      return url.hash ? null : '/login';
    }
    const route = '/' + file.replace(/\.html$/, '').replaceAll('-', '/');
    return file.endsWith('.html') && views.has(route) ? route : null;
  }

  function navigate(target) {
    const route = routeForURL(target);
    if (route) {
      if (location.hash !== '#' + route) location.hash = route;
      else if (currentRoute !== route) render();
    } else {
      // The existing handoff to StudioDemo remains a full application navigation.
      location.assign(target);
    }
  }

  function createScope() {
    let active = true;
    const listeners = [];
    const portals = new Set();
    const intervals = new Set();
    const timeouts = new Set();
    const pageShows = [];
    const pageHides = [];
    return {
      get active() { return active; },
      navigate,
      listen(target, type, handler, options) {
        target.addEventListener(type, handler, options);
        listeners.push(() => target.removeEventListener(type, handler, options));
        // Run these page lifecycle hooks for view changes without emitting global
        // events that would reset the persistent Aurora or cursor canvas.
        if (target === window && type === 'pageshow') pageShows.push(handler);
        if (target === window && type === 'pagehide') pageHides.push(handler);
      },
      portal(node) {
        document.body.append(node);
        portals.add(node);
      },
      setInterval(callback, delay) {
        const id = window.setInterval(() => { if (active) callback(); }, delay);
        intervals.add(id);
        return id;
      },
      clearInterval(id) { window.clearInterval(id); intervals.delete(id); },
      setTimeout(callback, delay) {
        const id = window.setTimeout(() => {
          timeouts.delete(id);
          if (active) callback();
        }, delay);
        timeouts.add(id);
        return id;
      },
      clearTimeout(id) { window.clearTimeout(id); timeouts.delete(id); },
      activate() { pageShows.forEach(handler => handler(new Event('pageshow'))); },
      dispose() {
        if (!active) return;
        active = false;
        pageHides.forEach(handler => handler(new Event('pagehide')));
        listeners.forEach(remove => remove());
        intervals.forEach(id => window.clearInterval(id));
        timeouts.forEach(id => window.clearTimeout(id));
        portals.forEach(node => node.remove());
        intervals.clear();
        timeouts.clear();
        portals.clear();
      }
    };
  }

  function render() {
    // Legal placeholder anchors are not account routes; keep the current view.
    if (location.hash && !location.hash.startsWith('#/') && currentRoute) return;
    let route = location.hash.slice(1) || '/login';
    if (!views.has(route)) route = '/login';
    if (location.hash !== '#' + route) {
      history.replaceState(null, '', location.pathname + location.search + '#' + route);
    }
    if (currentRoute === route) {
      window.AccountTransitions?.cancel();
      return;
    }
    const commit = () => mountRoute(route);
    if (window.AccountTransitions) window.AccountTransitions.run(commit);
    else commit();
  }

  function mountRoute(route) {
    currentScope?.dispose();
    const view = views.get(route);
    viewStyle.textContent = view.styles || '';
    // Only this subtree changes. Canvas nodes, contexts, animation clocks and
    // the shell controls remain mounted for the entire account flow.
    host.innerHTML = view.markup;
    host.dataset.route = route;
    currentRoute = route;
    currentScope = createScope();
    document.title = view.title;
    window.AccountShell.setAuthenticated(view.authenticated);
    document.querySelector('main.welcome').scrollTop = 0;
    try {
      view.mount(currentScope);
      currentScope.activate();
      if (!host.contains(document.activeElement)) {
        host.querySelector('.welcome-modal')?.focus({ preventScroll: true });
      }
    } catch (error) {
      currentScope.dispose();
      console.error('Account view failed to initialize:', route, error);
      const message = document.createElement('p');
      message.setAttribute('role', 'alert');
      message.textContent = '页面暂时无法加载，请刷新后重试。';
      host.replaceChildren(message);
    }
  }

  window.AccountApp = {
    register(route, view) {
      if (views.has(route)) throw new Error('Duplicate account route: ' + route);
      views.set(route, view);
    },
    getView(route) { return views.get(route); },
    navigate,
    get route() { return currentRoute; },
    start() {
      if (started) return;
      started = true;
      host = document.getElementById('account-view');
      viewStyle = document.createElement('style');
      viewStyle.id = 'account-view-style';
      document.querySelector('link[href^="assets/css/welcome-slogan.css"]').before(viewStyle);
      document.addEventListener('click', event => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = event.target.closest('a[href]');
        if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
        if (!routeForURL(link.href)) return;
        event.preventDefault();
        navigate(link.href);
      });
      window.addEventListener('hashchange', render);
      window.addEventListener('pagehide', event => {
        if (!event.persisted) currentScope?.dispose();
      });
      render();
    }
  };
})();
