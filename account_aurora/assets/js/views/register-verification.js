/* Internal account step: /register/verification. The persistent shell owns the background. */
window.AccountApp.register("/register/verification", {
  title: "手机号验证 · Studio",
  authenticated: false,
  styles: ``,
  markup: `    <section class="welcome-modal" role="dialog" aria-labelledby="login-title" tabindex="-1">
      <header class="modal-header password-header">
        <a class="modal-back" href="#/register/sms" aria-label="返回短信注册"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g id="arrow-left">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </g>
</svg>
</a>
        <h2 class="modal-title" id="login-title">手机号验证</h2>
      </header>
      <div class="modal-body">
        <form class="verification-form" novalidate>
          <div class="verification-recipient">
            <p class="verification-description field-label">验证码已发送至</p>
            <p class="verification-phone" id="verification-phone">+86 1326***5332</p>
          </div>
          <div class="login-field">
            <label class="field-label" for="verification-code">验证码</label>
            <div class="verification-code-inputs" role="group" aria-label="6位验证码">
              <input class="login-input verification-code-digit" id="verification-code" type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]" maxlength="6" aria-label="验证码第1位" aria-describedby="code-error" required />
              <input class="login-input verification-code-digit" id="verification-code-2" type="text" inputmode="numeric" autocomplete="off" pattern="[0-9]" maxlength="6" aria-label="验证码第2位" aria-describedby="code-error" required />
              <input class="login-input verification-code-digit" id="verification-code-3" type="text" inputmode="numeric" autocomplete="off" pattern="[0-9]" maxlength="6" aria-label="验证码第3位" aria-describedby="code-error" required />
              <input class="login-input verification-code-digit" id="verification-code-4" type="text" inputmode="numeric" autocomplete="off" pattern="[0-9]" maxlength="6" aria-label="验证码第4位" aria-describedby="code-error" required />
              <input class="login-input verification-code-digit" id="verification-code-5" type="text" inputmode="numeric" autocomplete="off" pattern="[0-9]" maxlength="6" aria-label="验证码第5位" aria-describedby="code-error" required />
              <input class="login-input verification-code-digit" id="verification-code-6" type="text" inputmode="numeric" autocomplete="off" pattern="[0-9]" maxlength="6" aria-label="验证码第6位" aria-describedby="code-error" required />
            </div>
            <input name="code" type="hidden" />
            <p class="field-error" id="code-error" role="alert" hidden></p>
          </div>
          <button class="spec-btn primary large password-submit" type="submit" disabled>验证</button>
          <p class="verification-resend"><span class="resend-countdown">等待 <span class="resend-seconds"><span class="resend-value">60</span>s</span> 后可再次获取验证码</span><button class="action-link resend-button" type="button" hidden>重新获取验证码</button></p>
        </form>
      </div>
    </section>`,
  mount(scope) {

(() => {
  const storageKey = 'studio-register-sms-verification';
  let state;
  try { state = JSON.parse(sessionStorage.getItem(storageKey)); } catch (_) {}
  if (!state || typeof state.phone !== 'string' || !/^\+\d{1,3} [\d*]+$/.test(state.phone) || !Number.isFinite(state.resendAt)) {
    state = { phone: '+86 1326***5332', resendAt: Date.now() + 60000 }; 
  }
  const verificationForm = document.querySelector('.verification-form');
  const codeInput = verificationForm.elements.code;
  const codeDigits = [...verificationForm.querySelectorAll('.verification-code-digit')];
  const codeError = document.getElementById('code-error');
  const verifyButton = verificationForm.querySelector('[type="submit"]');
  const countdown = document.querySelector('.resend-countdown');
  const seconds = document.querySelector('.resend-value');
  const resend = document.querySelector('.resend-button');
  document.getElementById('verification-phone').textContent = state.phone;
  let resendAt = state.resendAt;
  let timer;
  function updateCountdown() {
    const remaining = Math.max(0, Math.ceil((resendAt - Date.now()) / 1000));
    seconds.textContent = remaining;
    countdown.hidden = remaining === 0;
    resend.hidden = remaining > 0;
    if (!remaining) scope.clearInterval(timer);
  }
  function startCountdown() {
    scope.clearInterval(timer);
    resendAt = Date.now() + 60000;
    state.resendAt = resendAt;
    try { sessionStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) {}
    updateCountdown();
    timer = scope.setInterval(updateCountdown, 1000);
  }
  function clearCodeError() {
    codeError.hidden = true;
    codeDigits.forEach((input) => input.removeAttribute('aria-invalid'));
  }
  function syncCode() {
    codeInput.value = codeDigits.map((input) => input.value).join('');
    clearCodeError();
    verifyButton.disabled = !codeDigits.every((input) => /^[0-9]$/.test(input.value));
  }
  function fillCode(index, value) {
    const digits = value.replace(/[^0-9]/g, '').slice(0, codeDigits.length - index);
    codeDigits[index].value = '';
    [...digits].forEach((digit, offset) => { codeDigits[index + offset].value = digit; });
    syncCode();
    if (digits.length) codeDigits[Math.min(index + digits.length, codeDigits.length - 1)].focus();
  }
  codeDigits.forEach((input, index) => {
    input.addEventListener('focus', () => input.select());
    input.addEventListener('input', () => fillCode(index, input.value));
    input.addEventListener('paste', (event) => {
      event.preventDefault();
      const value = event.clipboardData.getData('text');
      if (/[0-9]/.test(value)) fillCode(index, value);
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace' && !input.value && index > 0) {
        event.preventDefault();
        codeDigits[index - 1].value = '';
        codeDigits[index - 1].focus();
        syncCode();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        codeDigits[Math.max(0, Math.min(index + (event.key === 'ArrowLeft' ? -1 : 1), codeDigits.length - 1))].focus();
      }
    });
  });
  resend.addEventListener('click', () => {
    if (Date.now() < resendAt) return;
    codeInput.value = '';
    codeDigits.forEach((input) => { input.value = ''; });
    verifyButton.disabled = true;
    clearCodeError();
    startCountdown();
    codeDigits[0].focus();
  });
  verificationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!/^[0-9]{6}$/.test(codeInput.value)) {
      codeError.textContent = '请输入6位验证码';
      codeDigits.forEach((input) => input.setAttribute('aria-invalid', 'true'));
    } else if (codeInput.value === '000000') {
      // Fixed verification code for this local registration prototype.
      clearCodeError();
      scope.clearInterval(timer);
      scope.navigate('../StudioDemo/content.html?registered=1&accountEntry=1');
      return;
    } else {
      codeError.textContent = '验证码错误，请重新输入';
      codeDigits.forEach((input) => input.setAttribute('aria-invalid', 'true'));
    }
    codeError.hidden = false;
    codeDigits[0].focus();
  });
  scope.listen(window, 'pagehide', () => scope.clearInterval(timer));
  scope.listen(window, 'pageshow', () => {
    scope.clearInterval(timer);
    try {
      const saved = JSON.parse(sessionStorage.getItem(storageKey));
      if (saved?.phone === state.phone && Number.isFinite(saved.resendAt)) resendAt = saved.resendAt;
    } catch (_) {}
    updateCountdown();
    if (resendAt > Date.now()) timer = scope.setInterval(updateCountdown, 1000);
  });
  updateCountdown();
  codeDigits[0].focus();
})();
  
  }
});
