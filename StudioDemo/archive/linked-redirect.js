// Legacy bookmarks preserve their complete query/hash while selecting linked mode.
(() => {
  const target = new URL(location.href);
  target.pathname = new URL('../' + target.pathname.split('/').pop().replace(/-linked\.html$/, '.html'), target).pathname;
  target.searchParams.set('linked', '1');
  location.replace(target.href);
})();
