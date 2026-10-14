// Binding is explicit in the URL; independent tabs can show either demo state.
(() => {
  const current = new URL(location.href);
  const linked = current.searchParams.get('linked') === '1';
  const directory = new URL('.', current).href;
  function href(target, state = linked) {
    const url = new URL(target, current);
    if (new URL('.', url).href !== directory ||
        !/\/(index|content|analytics|account-setting|edit|edit2)(?:-linked)?\.html$/.test(url.pathname)) return target;
    url.pathname = url.pathname.replace(/-linked\.html$/, '.html');
    if (state) url.searchParams.set('linked', '1');
    else url.searchParams.delete('linked');
    return url.pathname.split('/').pop() + url.search + url.hash;
  }
  window.StudioAccount = { linked, href };
  document.documentElement.dataset.accountState = linked ? 'linked' : 'unlinked';
})();
