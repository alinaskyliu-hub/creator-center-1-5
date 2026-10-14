(() => {
  if (window.StudioAccount?.linked && /\/content\.html$/.test(location.pathname)) return;
  if (!document.getElementById('profile-dialog')) {
    document.body.insertAdjacentHTML('beforeend', `
    <dialog class="profile-dialog" id="profile-dialog" aria-labelledby="profile-title">
      <header class="modal-header">
        <div class="modal-heading">
          <h2 class="modal-title" id="profile-title" tabindex="-1" autofocus>Personal information</h2>
        </div>
        <button class="close-btn spec-btn icon-only icon-plain" type="button" data-profile-close aria-label="Close personal information"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
      </header>
      <div class="modal-body">
        <form class="profile-form" id="profile-form" novalidate>
          <div class="profile-avatar-field">
            <button class="profile-avatar-button" type="button" id="profile-avatar-button" aria-label="Upload avatar" aria-describedby="profile-avatar-error">
              <img id="profile-avatar-preview" src="assets/images/profile-default-avatar.png" alt="Avatar preview" />
              <span class="profile-avatar-overlay" aria-hidden="true"><img class="profile-camera-icon" src="assets/images/profile-camera.svg" alt="" /></span>
            </button>
            <input id="profile-avatar-file" type="file" accept="image/jpeg,image/png,image/webp" hidden />
            <p class="field-error" id="profile-avatar-error" role="alert" hidden></p>
          </div>
          <div class="login-field">
            <label class="field-label required" for="profile-nickname">Nickname</label>
            <input class="login-input" id="profile-nickname" autocomplete="nickname" required aria-describedby="profile-nickname-hint" />
            <p class="field-hint" id="profile-nickname-hint"><span id="profile-nickname-length-hint">Up to 30 characters (each Chinese character counts as 2).</span><br /><span id="profile-nickname-content-hint">Avoid special characters or sensitive words. Example: 靓姐说电影.</span></p>
          </div>
          <div class="login-field">
            <label class="field-label" for="profile-bio">Bio <span class="profile-optional">(optional)</span></label>
            <div class="bio-tabs profile-bio-tabs">
              <div class="tabs-bar">
                <div class="tabs-list" id="profile-language-tabs" role="tablist" aria-label="Bio language"></div>
              </div>
              <div class="profile-bio-panel" id="profile-bio-panel" role="tabpanel">
                <div class="count-textarea-wrap">
                  <textarea class="login-input profile-bio" id="profile-bio" placeholder="Please keep your bio relevant to your content as a creator. It will be displayed on your public profile." data-maxlength="1000" aria-describedby="profile-bio-count profile-bio-error"></textarea>
                  <span class="input-count" id="profile-bio-count">0 / 1000</span>
                </div>
                <p class="field-error" id="profile-bio-error" role="alert" hidden>Bio must be within 1000 characters.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <footer class="modal-footer">
        <button class="spec-btn secondary" type="button" data-profile-close>Cancel</button>
        <button class="spec-btn primary" id="profile-save" type="submit" form="profile-form">Save</button>
      </footer>
    </dialog>
    <div class="subtitle-message-portal" id="profile-message" role="status" aria-live="polite" aria-atomic="true" hidden></div>
`);
  }
  const registrationSuccess = new URLSearchParams(location.search).get('registered') === '1';
  const loginSuccess = new URLSearchParams(location.hash.slice(1)).get('loggedIn') === '1'
    || new URLSearchParams(location.search).get('loggedIn') === '1';
  let promptAfterProfile = registrationSuccess && !window.StudioAccount?.linked;
  function promptLinkAccount() {
    if (window.StudioAccount?.linked) return;
    const prompt = () => document.dispatchEvent(new Event('studio:linkprompt'));
    // The shared binding dialog is initialized at DOMContentLoaded.
    if (!document.getElementById('studio-link-modal')) {
      document.addEventListener('DOMContentLoaded', prompt, { once: true });
    } else {
      prompt();
    }
  }
  const dialog = document.getElementById('profile-dialog');
  const form = document.getElementById('profile-form');
  const edit = document.querySelector('[data-profile-edit]');
  const nickname = document.getElementById('profile-nickname');
  const nicknameLengthHint = document.getElementById('profile-nickname-length-hint');
  const nicknameContentHint = document.getElementById('profile-nickname-content-hint');
  const bio = document.getElementById('profile-bio');
  const bioError = document.getElementById('profile-bio-error');
  const bioLimit = Number(bio.dataset.maxlength);
  const languageTabs = document.getElementById('profile-language-tabs');
  const bioPanel = document.getElementById('profile-bio-panel');
  let activeLanguage = 'en';
  const counter = document.getElementById('profile-bio-count');
  const fileInput = document.getElementById('profile-avatar-file');
  const preview = document.getElementById('profile-avatar-preview');
  const avatarError = document.getElementById('profile-avatar-error');
  const save = document.getElementById('profile-save');
  const message = document.getElementById('profile-message');
  const panels = Array.from(document.querySelectorAll('main .bio-tabs [role="tabpanel"]'));
  const tabs = Array.from(document.querySelectorAll('main .bio-tabs [role="tab"]'));
  function nicknameLength(value) {
    return Array.from(value).reduce((total, character) => total + (/\p{Script=Han}/u.test(character) ? 2 : 1), 0);
  }
  // Prototype-only sample vocabulary; production moderation needs a maintained service.
  const sensitiveChineseWords = ['色情', '赌博', '賭博', '诈骗', '詐騙', '傻逼', '操你妈', '操你媽'];
  const sensitiveEnglishWords = /\b(?:fuck|shit|bitch|porn|casino|scam)\b/i;
  function nicknameValidation(value) {
    const name = value.trim();
    const errors = [];
    if (!name || nicknameLength(name) > 30) errors.push('length');
    const normalized = name.normalize('NFKC').toLowerCase();
    const compact = normalized.replace(/\s/g, '');
    const invalidCharacters = name && !/^[\p{L}\p{M}\p{N} ]+$/u.test(name);
    const restrictedWords = sensitiveChineseWords.some(word => compact.includes(word)) || sensitiveEnglishWords.test(normalized);
    if (invalidCharacters || restrictedWords) errors.push('content');
    return errors.join(' ');
  }
  function validateNickname() {
    const error = nicknameValidation(nickname.value);
    nicknameLengthHint.classList.toggle('is-invalid', error.includes('length'));
    nicknameContentHint.classList.toggle('is-invalid', error.includes('content'));
    nickname.setAttribute('aria-invalid', String(Boolean(error)));
    return !error;
  }
  const languages = panels.length ? panels.map(panel => ({ lang: panel.lang, label: tabs.find(tab => tab.getAttribute('aria-controls') === panel.id).textContent.trim() })) : [
    ['en', 'English'], ['zh-Hant', 'Traditional Chinese'], ['th', 'Thai'], ['ms', 'Malay'],
    ['id', 'Indonesian'], ['vi', 'Vietnamese'], ['ko', 'Korean'], ['ja', 'Japanese'], ['es', 'Spanish']
  ].map(([lang, label]) => ({ lang, label }));
  const defaults = {
    nickname: 'Mia Studio',
    avatar: 'assets/images/profile-default-avatar.png',
    bios: Object.fromEntries(panels.map(panel => [panel.lang, panel.textContent.trim()]))
  };
  let profile = { ...defaults, bios: { ...defaults.bios } };
  let draft;
  let uploadVersion = 0;
  let toastTimer;

  const editorTabs = languages.map((panel, index) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'tab-item';
    tab.id = `profile-language-${panel.lang}`;
    tab.textContent = panel.label;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', 'profile-bio-panel');
    tab.dataset.language = panel.lang;
    tab.addEventListener('click', () => selectLanguage(panel.lang));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % languages.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + languages.length) % languages.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = languages.length - 1;
      else return;
      event.preventDefault();
      editorTabs[next].focus();
      selectLanguage(languages[next].lang);
    });
    languageTabs.append(tab);
    return tab;
  });
  function syncLanguageIndicator() {
    const selected = editorTabs.find(tab => tab.dataset.language === activeLanguage);
    if (!selected || !dialog.open) return;
    languageTabs.style.setProperty('--bio-tab-indicator-x', `${selected.offsetLeft}px`);
    languageTabs.style.setProperty('--bio-tab-indicator-width', `${selected.offsetWidth}px`);
  }
  function selectLanguage(nextLanguage) {
    if (!draft) return;
    draft.bios[activeLanguage] = bio.value;
    activeLanguage = nextLanguage;
    showBio();
    syncLanguageIndicator();
    const selected = editorTabs.find(tab => tab.dataset.language === activeLanguage);
    languageTabs.scrollTo({ left: selected.offsetLeft - (languageTabs.clientWidth - selected.offsetWidth) / 2, behavior: 'auto' });
  }
  new ResizeObserver(syncLanguageIndicator).observe(languageTabs);

  function renderProfile() {
    document.querySelectorAll('[data-profile-nickname]').forEach(node => { node.textContent = profile.nickname; });
    panels.forEach(panel => {
      const value = profile.bios[panel.lang] || '';
      const isEmpty = !value.trim();
      panel.textContent = isEmpty ? 'Not provided' : value;
      panel.classList.toggle('is-empty', isEmpty);
    });
  }

  function restoreProfile() {
    profile = { ...defaults, bios: { ...defaults.bios } };
    const saved = window.studioProfile.read();
    if (saved && !nicknameValidation(saved.nickname)) {
      profile.nickname = saved.nickname;
      profile.avatar = saved.avatar;
      languages.forEach(panel => {
        const value = saved.bios?.[panel.lang];
        if (typeof value === 'string' && value.length <= bioLimit) profile.bios[panel.lang] = value;
      });
    }
    renderProfile();
  }
  restoreProfile();
  window.addEventListener('studio:profilechange', restoreProfile);
  window.addEventListener('studio:languagechange', renderProfile);

  function updateCounter() {
    const overLimit = bio.value.length > bioLimit;
    counter.textContent = `${bio.value.length} / ${bioLimit}`;
    counter.classList.toggle('over-limit', overLimit);
    bio.setAttribute('aria-invalid', String(overLimit));
    bioError.hidden = !overLimit;
    bioError.textContent = `Bio must be within ${bioLimit} characters.`;
  }
  function showBio() {
    bio.value = draft.bios[activeLanguage] || '';
    bio.lang = activeLanguage;
    editorTabs.forEach(tab => {
      const selected = tab.dataset.language === activeLanguage;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) bioPanel.setAttribute('aria-labelledby', tab.id);
    });
    updateCounter();
  }
  let closingPromise = null;
  function closeDialog() {
    if (!dialog.open) return Promise.resolve();
    if (closingPromise) return closingPromise;
    ++uploadVersion;
    save.disabled = true;
    dialog.classList.remove('is-visible');
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300;
    closingPromise = new Promise(resolve => {
      // Keep the native dialog and its backdrop mounted until both transitions finish.
      setTimeout(() => {
        dialog.close();
        closingPromise = null;
        resolve();
      }, duration);
    });
    return closingPromise;
  }
  function openDialog() {
    if (dialog.open || closingPromise) return;
    draft = { ...profile, bios: { ...profile.bios } };
    ++uploadVersion;
    save.disabled = false;
    nickname.value = draft.nickname;
    nickname.removeAttribute('aria-invalid');
    nicknameLengthHint.classList.remove('is-invalid');
    nicknameContentHint.classList.remove('is-invalid');
    avatarError.hidden = true;
    fileInput.value = '';
    preview.src = draft.avatar;
    const selected = tabs.find(tab => tab.getAttribute('aria-selected') === 'true');
    activeLanguage = panels.find(panel => panel.id === selected?.getAttribute('aria-controls'))?.lang || 'en';
    showBio();
    message.hidden = true;
    dialog.classList.remove('is-visible');
    dialog.showModal();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (dialog.open && !closingPromise) dialog.classList.add('is-visible');
      });
      syncLanguageIndicator();
      const selected = editorTabs.find(tab => tab.dataset.language === activeLanguage);
      languageTabs.scrollTo({ left: selected.offsetLeft - (languageTabs.clientWidth - selected.offsetWidth) / 2, behavior: 'auto' });
    });
    document.getElementById('profile-title').focus();
  }
  edit?.addEventListener('click', () => openDialog());
  dialog.querySelectorAll('[data-profile-close]').forEach(button => button.addEventListener('click', closeDialog));
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(); });
  dialog.addEventListener('close', () => {
    dialog.classList.remove('is-visible');
    ++uploadVersion;
    draft = null;
    (edit || document.querySelector('.account-trigger'))?.focus();
    if (promptAfterProfile) {
      promptAfterProfile = false;
      promptLinkAccount();
    }
  });
  // Native dialog keeps the background inert. Only explicit close actions dismiss it;
  // selecting text and releasing over the backdrop must never close the dialog.
  nickname.addEventListener('input', event => { if (!event.isComposing) validateNickname(); });
  nickname.addEventListener('compositionend', validateNickname);
  nickname.addEventListener('blur', validateNickname);
  nickname.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.isComposing) event.preventDefault();
  });
  bio.addEventListener('input', () => { draft.bios[activeLanguage] = bio.value; updateCounter(); });
  document.getElementById('profile-avatar-button').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;
    const version = ++uploadVersion;
    avatarError.hidden = true;
    save.disabled = false;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
      avatarError.textContent = 'Choose a JPG, PNG or WebP image no larger than 5 MB.';
      avatarError.hidden = false;
      fileInput.value = '';
      return;
    }
    save.disabled = true;
    const reader = new FileReader();
    function fail() {
      if (version !== uploadVersion || !dialog.open) return;
      avatarError.textContent = 'Unable to read this image. Please choose another file.';
      avatarError.hidden = false;
      save.disabled = false;
      fileInput.value = '';
    }
    reader.onerror = fail;
    reader.onload = () => {
      const image = new Image();
      image.onerror = fail;
      image.onload = () => {
        if (version !== uploadVersion || !dialog.open) return;
        try {
          const canvas = document.createElement('canvas');
          canvas.width = canvas.height = 256;
          const size = Math.min(image.width, image.height);
          canvas.getContext('2d').drawImage(image, (image.width - size) / 2, (image.height - size) / 2, size, size, 0, 0, 256, 256);
          draft.avatar = canvas.toDataURL('image/png');
          preview.src = draft.avatar;
          save.disabled = false;
          fileInput.value = '';
        } catch (_) { fail(); }
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (save.disabled || !draft) return;
    const name = nickname.value.trim();
    if (!validateNickname()) {
      nickname.focus();
      return;
    }
    draft.nickname = name;
    draft.bios[activeLanguage] = bio.value;
    const invalidBio = languages.find(panel => (draft.bios[panel.lang] || '').length > bioLimit);
    if (invalidBio) {
      selectLanguage(invalidBio.lang);
      bio.focus();
      return;
    }
    profile = { ...draft, bios: { ...draft.bios } };
    const persisted = window.studioProfile.save(profile);
    renderProfile();
    // Show the language just edited so the saved bio is immediately visible.
    tabs.find(tab => tab.getAttribute('aria-controls') === panels.find(panel => panel.lang === activeLanguage)?.id)?.click();
    await closeDialog();
    showSuccess(persisted ? 'Saved successfully' : 'Saved for this page. Browser storage is unavailable.');
  });

  function showSuccess(text) {
    clearTimeout(toastTimer);
    message.innerHTML = '<div class="subtitle-feedback-message success"><span class="message-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m4 12 5 5L20 6" /></svg></span><span></span></div>';
    message.querySelector('.subtitle-feedback-message > span:last-child').textContent = text;
    message.hidden = false;
    // Place the toast above the native modal and its backdrop.
    if (message.showPopover) {
      message.setAttribute('popover', 'manual');
      message.showPopover();
    }
    toastTimer = setTimeout(() => {
      if (message.hidePopover) message.hidePopover();
      message.hidden = true;
    }, 3200);
  }
  if (registrationSuccess || loginSuccess) {
    const url = new URL(location.href);
    url.searchParams.delete('registered');
    url.searchParams.delete('loggedIn');
    if (new URLSearchParams(url.hash.slice(1)).get('loggedIn') === '1') url.hash = '';
    // file:// pages may reject query changes; feedback must still be shown.
    try { history.replaceState(history.state, '', url); } catch (_) {}
  }
  if (registrationSuccess) {
    // Initialize the new account before opening its editor so the page and
    // dialog share the same default identity, even after an earlier demo edit.
    window.studioProfile.save({
      nickname: defaults.nickname,
      avatar: defaults.avatar,
      bios: Object.fromEntries(languages.map(({ lang }) => [lang, '']))
    });
    openDialog();
    showSuccess('注册成功');
  } else if (loginSuccess) {
    showSuccess('登录成功');
    promptLinkAccount();
  }
})();
