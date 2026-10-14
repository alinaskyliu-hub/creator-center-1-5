/* Account view: login-sms.html. The persistent shell owns the background. */
window.AccountApp.register("/login/sms", {
  title: "短信登录 · Studio",
  authenticated: false,
  styles: ``,
  markup: `    <section class="welcome-modal" role="dialog" aria-labelledby="login-title" tabindex="-1">
      <header class="modal-header password-header">
        <a class="modal-back" href="#/login" aria-label="返回选择登录方式"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g id="arrow-left">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </g>
</svg>
</a>
        <h2 class="modal-title" id="login-title">短信登录</h2>
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
          <p class="register-copy">没有账号？<a class="action-link" href="#/register" data-link-target="register">注册</a></p>
        </div>
      </div>
    </section>`,
  mount(scope, options = {}) {

(() => {
  const form = document.querySelector('.sms-form');
  const select = form.elements.region;
  const phone = form.elements.phone;
  const error = document.getElementById('phone-error');
  function clearFeedback() {
    phone.removeAttribute('aria-invalid');
    error.hidden = true;
  }
  const phoneControls = window.createPhoneControls(scope, {
    select,
    trigger: document.getElementById('login-dial-code'),
    dropdown: document.querySelector('.dial-code-dropdown'),
    clearFeedback
  });
  phone.addEventListener('input', clearFeedback);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearFeedback();
    const value = phone.value.trim();
    const digits = value.replace(/[\s()-]/g, '');
    const code = phoneControls.code;
    const valid = phoneControls.isValid(digits);
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
      sessionStorage.setItem(options.storageKey || 'studio-sms-verification', JSON.stringify({
        phone: `+${code} ${maskedPhone}`,
        resendAt: options.resendImmediately ? Date.now() + 60000 : 0
      }));
      scope.navigate(options.next || '#/login/security');
    } catch (_) {
      error.textContent = '请允许浏览器使用会话存储后重试';
      error.hidden = false;
    }
  });
})();
  
  }
});
