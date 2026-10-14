// Synchronization survives page navigation independently of account binding.
(() => {
  const key = 'studio-content-sync-v1';
  let state;
  try { state = JSON.parse(sessionStorage.getItem(key)); } catch (_) {}
  if (!state) state = { completed: window.StudioAccount.linked, pendingUntil: 0 };
  let timer;
  function save() {
    try { sessionStorage.setItem(key, JSON.stringify(state)); } catch (_) {}
  }
  function finish() {
    if (!state.pendingUntil) return;
    if (Date.now() < state.pendingUntil) { schedule(); return; }
    state.completed = true;
    state.pendingUntil = 0;
    save();
    window.dispatchEvent(new Event('studio:syncchange'));
    const portal = document.createElement('div');
    portal.className = 'subtitle-message-portal';
    portal.setAttribute('role', 'status');
    portal.setAttribute('aria-live', 'polite');
    portal.innerHTML = `<div class="subtitle-feedback-message success"><span class="message-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m4 12 5 5L20 6" /></svg></span><span>国内账号下的节目列表已成功同步至海外账号，共${window.studioSync.count}条内容。</span></div>`;
    document.body.append(portal);
    if (portal.showPopover) { portal.setAttribute('popover', 'manual'); portal.showPopover(); }
    setTimeout(() => portal.remove(), 3200);
  }
  function schedule() {
    clearTimeout(timer);
    if (state.pendingUntil) timer = setTimeout(finish, Math.max(0, state.pendingUntil - Date.now()));
  }
  window.studioSync = {
    count: 16,
    get pending() { return Boolean(state.pendingUntil); },
    get completed() { return state.completed; },
    start() {
      state.pendingUntil = Date.now() + 1500;
      save();
      schedule();
      window.dispatchEvent(new Event('studio:syncchange'));
    },
    cancel() {
      clearTimeout(timer);
      state.pendingUntil = 0;
      save();
      window.dispatchEvent(new Event('studio:syncchange'));
    }
  };
  document.addEventListener('DOMContentLoaded', schedule);
  window.addEventListener('pagehide', () => clearTimeout(timer));
  window.addEventListener('pageshow', () => {
    try { state = JSON.parse(sessionStorage.getItem(key)) || state; } catch (_) {}
    window.dispatchEvent(new Event('studio:syncchange'));
    schedule();
  });
})();

// Both account states share the same modal layout and motion on every Studio page.
document.addEventListener('DOMContentLoaded', () => {
  const url = new URL(window.location.href);
  if (url.searchParams.has('accountLinked')) {
    url.searchParams.delete('accountLinked');
    try { history.replaceState(history.state, '', url); } catch (_) {}
  }
  const account = document.querySelector('.sidebar .main-site-account[data-account-state]');
  if (!account) return;
  const isLinked = account.dataset.accountState === 'linked';
  const sourceEdit = /\/edit\.html$/.test(location.pathname);
  account.setAttribute('role', 'button');
  account.tabIndex = 0;
  account.setAttribute('aria-haspopup', 'dialog');
  account.setAttribute('aria-controls', 'studio-link-modal');

  const dialog = document.createElement('dialog');
  dialog.id = 'studio-link-modal';
  dialog.className = `feedback-modal studio-link-modal${isLinked ? ' success' : ''}`;
  dialog.lang = isLinked ? 'zh-CN' : 'en';
  dialog.setAttribute('aria-labelledby', 'studio-link-title');
  dialog.setAttribute('aria-describedby', 'studio-link-description');
  dialog.innerHTML = `
    <header class="feedback-modal-header">
      <span class="feedback-modal-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="${isLinked ? 'm7 12 3 3 7-7' : 'M12 7v7M12 17h.01'}" /></svg>
      </span>
      <h2 class="feedback-modal-title" id="studio-link-title">${isLinked ? '已关联主站爱奇艺号' : (sourceEdit ? '绑定爱奇艺主站账号' : 'Link your main-site iQIYI account')}</h2>
      <button class="feedback-modal-close" type="button" aria-label="${isLinked || sourceEdit ? '关闭弹窗' : 'Close dialog'}" data-link-dismiss${isLinked ? ' autofocus' : ''}>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
    </header>
    <div class="feedback-modal-body">
      <p class="studio-link-modal-description" id="studio-link-description">${isLinked ? '主站账号下的节目列表将同步至海外账号' : (sourceEdit ? '绑定主站账号后，已在国内发布的节目列表将自动同步到海外平台。立即绑定即可开始同步。' : 'Once you link your main-site account, your list of programs published in China will automatically sync to the overseas platform. Link now to start syncing.')}</p>
      <div data-link-block></div>
      ${isLinked ? '<div class="main-site-account studio-link-sync"><span>同步时间</span><time datetime="2026-10-01">2026-10-01</time></div>' : ''}
    </div>
    ${isLinked ? '' : `<footer class="feedback-modal-footer">
      <button class="feedback-modal-action secondary" type="button" data-link-dismiss autofocus>${sourceEdit ? '暂不绑定' : 'Maybe later'}</button>
      <button class="feedback-modal-action primary" type="button" data-link-confirm>${sourceEdit ? '立即绑定' : 'Link now'}</button>
    </footer>`}`;
  document.body.append(dialog);

  const unlinkDialog = document.createElement('dialog');
  if (isLinked) {
    unlinkDialog.className = 'feedback-modal studio-link-modal studio-unlink-modal title-case';
    unlinkDialog.lang = 'zh-CN';
    unlinkDialog.setAttribute('aria-labelledby', 'studio-unlink-title');
    unlinkDialog.setAttribute('aria-describedby', 'studio-unlink-description');
    unlinkDialog.innerHTML = `
      <div class="modal-header feedback-modal-header">
        <div class="modal-heading">
          <div class="modal-title-row">
            <span class="modal-title-icon warning feedback-modal-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 7v7M12 17h.01" /></svg></span>
            <strong class="modal-title feedback-modal-title" id="studio-unlink-title">提示</strong>
          </div>
        </div>
        <button class="close-btn feedback-modal-close" type="button" aria-label="关闭弹窗" data-unlink-dismiss>
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      </div>
      <div class="modal-body feedback-modal-body" id="studio-unlink-description">确定要解除与主站爱奇艺号的绑定吗？解除后，主站节目列表将停止同步至海外账号。</div>
      <div class="modal-footer feedback-modal-footer">
        <button class="feedback-modal-action secondary" type="button" data-unlink-dismiss autofocus>取消</button>
        <button class="feedback-modal-action danger" type="button" data-unlink-confirm>确定解绑</button>
      </div>`;
    document.body.append(unlinkDialog);
  }

  let closingPromise = null;
  function closeDialog(target = dialog) {
    if (!target.open) return Promise.resolve();
    if (closingPromise) return closingPromise;
    target.classList.remove('is-visible');
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300;
    closingPromise = new Promise(resolve => {
      setTimeout(() => {
        target.close();
        closingPromise = null;
        resolve();
      }, duration);
    });
    return closingPromise;
  }
  function showDialog(target) {
    target.classList.remove('is-visible');
    target.showModal();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (target.open && !closingPromise) target.classList.add('is-visible');
      });
    });
  }
  function openDialog() {
    if (dialog.open || unlinkDialog.open || closingPromise) return;
    const block = account.cloneNode(true);
    ['id', 'role', 'tabindex', 'aria-haspopup', 'aria-controls', 'aria-labelledby', 'title', 'data-i18n-title'].forEach(name => block.removeAttribute(name));
    block.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));
    const row = block.querySelector('.main-site-account-row');
    const name = block.querySelector('.main-site-account-name');
    if (!isLinked) name.textContent = sourceEdit ? '主站账号' : 'Main-site account';
    name.removeAttribute('data-i18n');
    name.title = name.textContent;
    const status = block.querySelector('.main-site-account-status');
    status.textContent = isLinked ? '已关联' : (sourceEdit ? '未绑定' : 'Unlinked');
    status.removeAttribute('data-i18n');
    if (isLinked) {
      const title = block.querySelector('.main-site-account-title');
      title.textContent = '主站账号';
      title.removeAttribute('data-i18n');
    } else {
      row.append(status);
      block.querySelector('.main-site-account-header').remove();
    }
    block.querySelector('.main-site-account-arrow').remove();
    dialog.querySelector('[data-link-block]').replaceChildren(block);
    if (isLinked) {
      const overseas = block.cloneNode(true);
      overseas.querySelector('.main-site-account-title').textContent = '海外账号';
      overseas.querySelector('.main-site-account-status').remove();
      const profile = document.querySelector('.sidebar-profile');
      const avatar = overseas.querySelector('img');
      avatar.src = profile.querySelector('.sidebar-profile-avatar').src;
      const overseasName = overseas.querySelector('.main-site-account-name');
      overseasName.textContent = profile.querySelector('.sidebar-profile-name').textContent;
      overseasName.title = overseasName.textContent;
      dialog.querySelector('[data-link-block]').prepend(overseas);
    }
    showDialog(dialog);
  }
  document.addEventListener('click', event => {
    if (account.contains(event.target) || event.target.closest('[data-link-account]')) openDialog();
  });
  document.addEventListener('studio:linkprompt', () => {
    if (!isLinked) openDialog();
  });
  account.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDialog();
    }
  });
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(); });
  dialog.addEventListener('close', () => dialog.classList.remove('is-visible'));
  dialog.addEventListener('click', async event => {
    if (closingPromise) return;
    if (event.target.closest('[data-link-dismiss]')) closeDialog();
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
    }
    // Unlinking requires a separate confirmation before changing pages.
    if (event.target.closest('[data-link-confirm]')) {
      if (isLinked) {
        if (!unlinkDialog.open) showDialog(unlinkDialog);
        return;
      }
      const destination = new URL(window.location.href);
      destination.searchParams.set('linked', '1');
      window.studioSync.start();
      destination.searchParams.set('accountLinked', '1');
      await closeDialog();
      window.location.assign(destination.href);
    }
  });
  unlinkDialog.addEventListener('cancel', event => {
    event.preventDefault();
    closeDialog(unlinkDialog);
  });
  unlinkDialog.addEventListener('close', () => unlinkDialog.classList.remove('is-visible'));
  unlinkDialog.addEventListener('click', async event => {
    if (closingPromise) return;
    if (event.target.closest('[data-unlink-dismiss]')) closeDialog(unlinkDialog);
    if (event.target === unlinkDialog) {
      const rect = unlinkDialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(unlinkDialog);
    }
    if (event.target.closest('[data-unlink-confirm]')) {
      const destination = new URL(window.location.href);
      destination.searchParams.delete('linked');
      destination.searchParams.delete('accountLinked');
      window.studioSync.cancel();
      await closeDialog(unlinkDialog);
      window.location.assign(destination.href);
    }
  });
});

// Shared demo profile: normal navigation preserves it; an explicit reload resets it.
(() => {
  // Start a fresh demo profile; earlier saved avatars must not override the new default.
  const storageKey = 'studio-account-profile-v2';
  const sourcePresentation = /\/edit\.html$/.test(location.pathname) ||
    (window.StudioAccount.linked && /\/content\.html$/.test(location.pathname));
  const defaults = { nickname: sourcePresentation ? '米娅工作室' : 'Mia Studio', avatar: 'assets/images/profile-default-avatar.png' };
  let memoryProfile = null;
  const navigation = performance.getEntriesByType('navigation')[0];
  const isReload = navigation ? navigation.type === 'reload' : performance.navigation?.type === 1;
  if (isReload) {
    try { localStorage.removeItem(storageKey); } catch (_) {}
  }

  function readProfile() {
    let saved = memoryProfile;
    if (!saved) {
      try { saved = JSON.parse(localStorage.getItem(storageKey)); } catch (_) {}
    }
    if (!saved || typeof saved.nickname !== 'string' || !saved.nickname.trim()) return null;
    const avatar = typeof saved.avatar === 'string' && /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(saved.avatar)
      ? saved.avatar : defaults.avatar;
    return { nickname: saved.nickname.trim(), avatar, bios: saved.bios && typeof saved.bios === 'object' ? { ...saved.bios } : {} };
  }

  function renderProfile() {
    const profile = readProfile() || defaults;
    document.querySelectorAll('[data-i18n="userName"], [data-profile-nickname]').forEach(node => { if (node.textContent !== profile.nickname) node.textContent = profile.nickname; });
    document.querySelectorAll('.topbar .avatar, .account-profile-avatar, .sidebar-profile-avatar, .account-photo').forEach(image => {
      if (image.getAttribute('src') !== profile.avatar) image.src = profile.avatar;
    });
    const photo = document.querySelector('.account-photo');
    if (photo) photo.alt = sourcePresentation ? `${profile.nickname}的头像` : `${profile.nickname} avatar`;
  }

  function announceProfile() {
    renderProfile();
    window.dispatchEvent(new CustomEvent('studio:profilechange'));
  }

  window.studioProfile = {
    read: readProfile,
    clear() {
      memoryProfile = null;
      try { localStorage.removeItem(storageKey); } catch (_) {}
    },
    save(profile) {
      memoryProfile = { ...profile, bios: { ...profile.bios } };
      let persisted = true;
      try { localStorage.setItem(storageKey, JSON.stringify(memoryProfile)); } catch (_) { persisted = false; }
      announceProfile();
      return persisted;
    }
  };
  window.addEventListener('studio:languagechange', renderProfile);
  // Start loading the actual avatar in <head>, without hiding the profile region.
  const avatarPreload = document.createElement('link');
  avatarPreload.rel = 'preload';
  avatarPreload.as = 'image';
  avatarPreload.href = (readProfile() || defaults).avatar;
  document.head.append(avatarPreload);
  // Hydrate parser-created nodes before paint, including saved custom profiles.
  // Stop observing after parsing so normal page interactions incur no observer work.
  if (document.readyState === 'loading') {
    const observer = new MutationObserver(renderProfile);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    document.addEventListener('DOMContentLoaded', () => {
      observer.disconnect();
      renderProfile();
    }, { once: true });
  } else {
    renderProfile();
  }
  window.addEventListener('pageshow', event => {
    if (event.persisted) memoryProfile = null;
    announceProfile();
  });
  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) {
      memoryProfile = null;
      announceProfile();
    }
  });
  renderProfile();
})();

// Close the transient menu before same-tab navigation; keep native link behavior.
document.addEventListener("click", (event) => {
  const signOut = event.target.closest('.topbar .account-menu .sign-out');
  if (signOut) {
    event.preventDefault();
    // Capture the visible profile before leaving the signed-in prototype.
    const avatar = document.querySelector('.topbar .avatar, .sidebar-profile-avatar');
    try {
      const identifier = localStorage.getItem('studio-login-identifier');
      const email = identifier && identifier.includes('@') ? identifier : '1461926038@iqiyi.com';
      localStorage.setItem('studio-returning-account', JSON.stringify({ email, avatar: avatar?.src || new URL('assets/images/profile-default-avatar.png', location.href).href }));
    } catch (_) {}
    try { localStorage.removeItem('studio-profile-draft'); } catch (_) {}
    try {
      sessionStorage.removeItem('studio-sms-verification');
      sessionStorage.removeItem('studio-register-sms-verification');
    } catch (_) {}
    const entry = signOut.closest('.account-entry');
    entry.querySelector('.account-menu').hidden = true;
    entry.classList.remove('is-open');
    entry.querySelector('.account-trigger')?.setAttribute('aria-expanded', 'false');
    window.location.replace(new URL('../account_aurora/login-return.html', window.location.href).href);
    return;
  }
  const link = event.target.closest(".account-menu a.account-option");
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const entry = link.closest(".account-entry");
  const menu = entry?.querySelector(".account-menu");
  if (menu) menu.hidden = true;
  entry?.classList.remove("is-open");
  entry?.querySelector(".account-trigger")?.setAttribute("aria-expanded", "false");
  // Choosing Account Setting while already there should not reload the page.
  if (new URL(link.href).pathname === window.location.pathname) {
    event.preventDefault();
    entry?.querySelector(".account-trigger")?.focus();
  }
});
