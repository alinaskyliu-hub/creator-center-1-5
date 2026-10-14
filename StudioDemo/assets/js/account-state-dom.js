// Runs after the shared markup, before each page's translations and event wiring.
(() => {
  const { linked, href } = window.StudioAccount;
  if (linked) {
    document.querySelectorAll('link[data-unlinked-only]').forEach(link => { link.disabled = true; });
    const account = document.querySelector('.sidebar .main-site-account');
    if (account) {
      account.dataset.accountState = 'linked';
      account.title = 'Main-site account: Linked';
      account.dataset.i18nTitle = 'mainSiteAccountLinked';
      const status = account.querySelector('.main-site-account-status');
      status.dataset.i18n = 'linkedStatus';
      status.textContent = 'Linked';
      const name = account.querySelector('.main-site-account-name');
      name.dataset.i18n = 'mainSiteAccountName';
      name.textContent = 'User00260922';
      account.querySelector('img').src = 'assets/images/main-site-linked-avatar.png';
    }
  }
  document.querySelectorAll('a[href]').forEach(link => {
    const original = link.getAttribute('href');
    if (!original.startsWith('#')) link.setAttribute('href', href(original));
  });
})();
