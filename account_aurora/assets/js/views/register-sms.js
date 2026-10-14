/* Account view: register-sms.html. The persistent shell owns the background. */
window.AccountApp.register("/register/sms", {
  title: "短信注册 · Studio",
  authenticated: false,
  styles: ``,
  markup: `    <section class="welcome-modal" role="dialog" aria-labelledby="login-title" tabindex="-1">
      <header class="modal-header password-header">
        <a class="modal-back" href="#/register" aria-label="返回选择注册方式"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g id="arrow-left">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </g>
</svg>
</a>
        <h2 class="modal-title" id="login-title">短信注册</h2>
      </header>
      <div class="modal-body">
        <form class="sms-form" novalidate>
          <div class="login-field">
            <label class="field-label" for="login-phone">手机号</label>
            <div class="phone-controls">
              <div class="dial-code-wrap">
                <input type="hidden" name="region" />
                <button class="spec-select select-control" id="login-dial-code" type="button" aria-label="国际区号" aria-haspopup="listbox" aria-expanded="false" aria-controls="dial-code-options"><span class="select-value"></span><span class="select-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></button>
                <div class="select-dropdown dial-code-dropdown" hidden>
                  <ul class="select-option-list" id="dial-code-options" role="listbox" aria-label="国际区号"></ul>
                </div>
              </div>
              <input class="login-input" id="login-phone" name="phone" type="tel" inputmode="tel" placeholder="请输入手机号" autocomplete="tel-national" aria-describedby="phone-error" required />
            </div>
            <p class="field-error" id="phone-error" hidden></p>
          </div>
          <button class="spec-btn primary large password-submit" type="submit">下一步</button>

        </form>
        <div class="login-support">
          <p class="register-copy">已有账号？<a class="action-link" href="#/login">登录</a></p>
        </div>
      </div>
    </section>`,
  mount(scope) {

(() => {
  const regions = [
    ['CN', '86', '中国大陆'], ['HK', '852', '中国香港'], ['MO', '853', '中国澳门'],
    ['TW', '886', '中国台湾'], ['SG', '65', '新加坡'], ['MY', '60', '马来西亚'],
    ['TH', '66', '泰国'], ['ID', '62', '印度尼西亚'], ['PH', '63', '菲律宾'],
    ['VN', '84', '越南'], ['JP', '81', '日本'], ['KR', '82', '韩国'],
    ['IN', '91', '印度'], ['US', '1', '美国'], ['CA', '1', '加拿大'],
    ['GB', '44', '英国'], ['AU', '61', '澳大利亚'], ['NZ', '64', '新西兰'],
    ['FR', '33', '法国'], ['DE', '49', '德国'], ['IT', '39', '意大利'],
    ['ES', '34', '西班牙'], ['BR', '55', '巴西'], ['MX', '52', '墨西哥'],
    ['AE', '971', '阿联酋'], ['SA', '966', '沙特阿拉伯'], ['ZA', '27', '南非']
  ];
  const form = document.querySelector('.sms-form');
  const select = form.elements.region;
  const phone = form.elements.phone;
  const error = document.getElementById('phone-error');
  const timezoneRegions = {
    'Asia/Shanghai': 'CN', 'Asia/Chongqing': 'CN', 'Asia/Urumqi': 'CN',
    'Asia/Hong_Kong': 'HK', 'Asia/Macau': 'MO', 'Asia/Taipei': 'TW',
    'Asia/Singapore': 'SG', 'Asia/Kuala_Lumpur': 'MY', 'Asia/Bangkok': 'TH',
    'Asia/Jakarta': 'ID', 'Asia/Manila': 'PH', 'Asia/Ho_Chi_Minh': 'VN',
    'Asia/Tokyo': 'JP', 'Asia/Seoul': 'KR', 'Asia/Kolkata': 'IN',
    'Europe/London': 'GB', 'Europe/Paris': 'FR', 'Europe/Berlin': 'DE',
    'America/New_York': 'US', 'America/Los_Angeles': 'US', 'America/Chicago': 'US',
    'America/Toronto': 'CA', 'America/Vancouver': 'CA',
    'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU', 'Australia/Perth': 'AU',
    'Pacific/Auckland': 'NZ'
  };
  // Infer the local region from the device timezone, then browser locale.
  let localRegion;
  try { localRegion = timezoneRegions[Intl.DateTimeFormat().resolvedOptions().timeZone]; } catch (_) {}
  if (!localRegion) {
    for (const language of navigator.languages || [navigator.language]) {
      try {
        const region = new Intl.Locale(language).region;
        if (regions.some(([code]) => code === region)) { localRegion = region; break; }
      } catch (_) {}
    }
  }
  const trigger = document.getElementById('login-dial-code');
  const dropdown = document.querySelector('.dial-code-dropdown');
  const list = dropdown.querySelector('.select-option-list');
  // Render outside the scrolling modal so the popup is not clipped.
  scope.portal(dropdown);
  let scrollbarTimer;
  const scrollbarHideDelay = parseFloat(getComputedStyle(dropdown).getPropertyValue('--dropdown-scrollbar-hide-delay')) || 650;
  scope.listen(dropdown, 'scroll', () => {
    if (dropdown.hidden) return;
    dropdown.classList.add('is-scrolling');
    scope.clearTimeout(scrollbarTimer);
    scrollbarTimer = scope.setTimeout(() => dropdown.classList.remove('is-scrolling'), scrollbarHideDelay);
  }, { passive: true });
  regions.forEach(([region, code, name]) => {
    const option = document.createElement('li');
    option.className = 'select-option';
    option.setAttribute('role', 'option');
    option.dataset.region = region;
    option.tabIndex = -1;
    const label = document.createElement('span');
    label.textContent = `${name} +${code}`;
    const check = document.createElement('span');
    check.className = 'select-option-check';
    check.setAttribute('aria-hidden', 'true');
    option.append(label, check);
    option.addEventListener('click', () => {
      select.value = region;
      syncSelection();
      clearFeedback();
      closeDropdown(true);
    });
    list.append(option);
  });
  select.value = localRegion || 'CN';
  function syncSelection() {
    const [, code, name] = regions.find(([region]) => region === select.value);
    trigger.querySelector('.select-value').textContent = `+${code}`;
    trigger.setAttribute('aria-label', `国际区号：${name} +${code}`);
    for (const option of list.children) {
      const selected = option.dataset.region === select.value;
      option.classList.toggle('active', selected);
      option.setAttribute('aria-selected', String(selected));
      option.querySelector('.select-option-check').style.visibility = selected ? 'visible' : 'hidden';
    }
  }
  function positionDropdown() {
    if (dropdown.hidden) return;
    const rect = trigger.getBoundingClientRect();
    const availableBelow = window.innerHeight - rect.bottom - 16;
    const availableAbove = rect.top - 16;
    const above = availableBelow < 180 && availableAbove > availableBelow;
    dropdown.style.maxHeight = `${Math.max(46, Math.min(240, (above ? availableAbove : availableBelow) - 8))}px`;
    dropdown.style.left = `${Math.max(8, Math.min(rect.left, window.innerWidth - dropdown.offsetWidth - 8))}px`;
    dropdown.style.top = `${above ? Math.max(8, rect.top - dropdown.offsetHeight - 8) : rect.bottom + 8}px`;
  }
  function closeDropdown(restoreFocus = false) {
    dropdown.hidden = true;
    scope.clearTimeout(scrollbarTimer);
    dropdown.classList.remove('is-scrolling');
    trigger.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger.focus();
  }
  function openDropdown() {
    dropdown.hidden = false;
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    positionDropdown();
    const selected = list.querySelector('[aria-selected="true"]');
    selected.focus({ preventScroll: true });
    selected.scrollIntoView({ block: 'nearest' });
  }
  trigger.addEventListener('click', () => dropdown.hidden ? openDropdown() : closeDropdown());
  trigger.addEventListener('keydown', (event) => {
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); openDropdown(); }
  });
  list.addEventListener('keydown', (event) => {
    const items = [...list.children];
    const index = items.indexOf(document.activeElement);
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % items.length;
    if (event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = items.length - 1;
    if (next !== undefined) { event.preventDefault(); items[next].focus(); }
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); items[index]?.click(); }
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); closeDropdown(true); }
    if (event.key === 'Tab') closeDropdown(true);
  });
  scope.listen(document, 'pointerdown', (event) => {
    if (!dropdown.contains(event.target) && !trigger.contains(event.target)) closeDropdown();
  });
  scope.listen(document, 'focusin', (event) => {
    if (!dropdown.contains(event.target) && !trigger.contains(event.target)) closeDropdown();
  });
  scope.listen(window, 'resize', positionDropdown);
  scope.listen(document, 'scroll', positionDropdown, true);
  function clearFeedback() {
    phone.removeAttribute('aria-invalid');
    error.hidden = true;
  }
  syncSelection();
  select.addEventListener('change', () => { syncSelection(); clearFeedback(); });
  phone.addEventListener('input', clearFeedback);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearFeedback();
    const value = phone.value.trim();
    const digits = value.replace(/[\s()-]/g, '');
    const code = regions.find(([region]) => region === select.value)[1];
    const valid = /^\d{4,14}$/.test(digits) && code.length + digits.length <= 15
      && (select.value !== 'CN' || /^1[3-9]\d{9}$/.test(digits));
    if (!valid) {
      error.textContent = value ? '请输入有效的手机号' : '请输入手机号';
      error.hidden = false;
      phone.setAttribute('aria-invalid', 'true');
      phone.focus();
      return;
    }
    const visible = digits.length > 8 ? 4 : 1;
    const maskedPhone = digits.slice(0, visible) + '*'.repeat(digits.length - visible * 2) + digits.slice(-visible);
    try {
      // Only the masked display value is passed between these prototype pages.
      sessionStorage.setItem('studio-register-sms-verification', JSON.stringify({
        phone: `+${code} ${maskedPhone}`,
        resendAt: 0
      }));
      scope.navigate('#/register/security');
    } catch (_) {
      error.textContent = '请允许浏览器使用会话存储后重试';
      error.hidden = false;
    }
  });
})();
  
  }
});
