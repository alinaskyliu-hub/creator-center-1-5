/* Mounted once; theme, account controls and branding survive every route change. */
(() => {
  const root = document.documentElement;
  const themeSwitch = document.querySelector('.theme-switch');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeTooltip = document.querySelector('[data-theme-tooltip]');
  const accountEntry = document.querySelector('.account-entry');
  const accountTrigger = document.querySelector('.account-trigger');
  const accountTooltip = document.querySelector('.account-tooltip');
  const accountMenu = document.querySelector('.account-menu');
  const guestIcon = accountTrigger.innerHTML;
  const profileAvatar = document.querySelector('.account-profile-avatar-wrap');
  const guestProfile = profileAvatar.innerHTML;
  let authenticated = false;
  let renderedAccountState = null;

  const labels = { accountTooltip: '账号', userName: 'Mia Studio', iqId: 'IQ ID：1461926038', accountSetting: '账号设置', settings: '设置', signOut: '退出登录' };
  document.querySelectorAll('[data-i18n]').forEach(node => {
    if (labels[node.dataset.i18n]) node.textContent = labels[node.dataset.i18n];
  });
  accountMenu.setAttribute('aria-label', '账号');

  function setTheme(theme, persist = true) {
    root.dataset.theme = root.dataset.colorMode = theme;
    root.style.colorScheme = theme;
    const label = theme === 'dark' ? '浅色模式' : '夜间模式';
    themeToggle.setAttribute('aria-label', label);
    themeTooltip.textContent = label;
    if (persist) {
      try { localStorage.setItem('studio-theme', theme); } catch (_) {}
    }
  }
  themeToggle.addEventListener('click', () => {
    themeSwitch.classList.add('suppress-tooltip');
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    themeToggle.blur();
  });
  setTheme(root.dataset.theme === 'light' ? 'light' : 'dark', false);

  const tooltipContainers = [themeSwitch, accountEntry];
  tooltipContainers.forEach(container => {
    const activate = () => tooltipContainers.forEach(item => item.classList.toggle('tooltip-muted', item !== container));
    const clear = () => {
      container.classList.remove('suppress-tooltip');
      if (!tooltipContainers.some(item => item.matches(':hover') || item.contains(document.activeElement))) {
        tooltipContainers.forEach(item => item.classList.remove('tooltip-muted'));
      }
    };
    container.addEventListener('pointerenter', activate);
    container.addEventListener('focusin', activate);
    container.addEventListener('pointerleave', clear);
    container.addEventListener('focusout', clear);
  });

  function closeMenu() {
    accountMenu.hidden = true;
    accountEntry.classList.remove('is-open');
    if (authenticated) accountTrigger.setAttribute('aria-expanded', 'false');
    else accountTrigger.removeAttribute('aria-expanded');
  }
  accountTrigger.addEventListener('click', () => {
    if (!authenticated) return;
    const open = accountMenu.hidden;
    accountMenu.hidden = !open;
    accountEntry.classList.toggle('is-open', open);
    accountTrigger.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', event => {
    if (!accountEntry.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !accountMenu.hidden) {
      closeMenu();
      accountTrigger.focus();
    }
  });
  document.querySelector('.sign-out').addEventListener('click', () => {
    closeMenu();
    window.AccountApp.navigate('login-return.html');
  });
  window.AccountShell = {
    setAuthenticated(value) {
      authenticated = Boolean(value);
      closeMenu();
      if (renderedAccountState === authenticated) return;
      renderedAccountState = authenticated;
      accountTrigger.classList.toggle('guest-avatar', !authenticated);
      accountTrigger.classList.toggle('avatar-button', authenticated);
      accountTrigger.innerHTML = authenticated ? '<img class="avatar" src="assets/images/profile-default-avatar.png" alt="" />' : guestIcon;
      accountTrigger.setAttribute('aria-label', authenticated ? '账号' : '未登录');
      accountTooltip.textContent = authenticated ? '账号' : '未登录';
      if (authenticated) accountTrigger.setAttribute('aria-haspopup', 'menu');
      else accountTrigger.removeAttribute('aria-haspopup');
      profileAvatar.innerHTML = authenticated ? '<img class="account-profile-avatar" src="assets/images/profile-default-avatar.png" alt="" />' : guestProfile;
    }
  };
})();
