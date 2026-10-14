/* Account view: register.html. The persistent shell owns the background. */
window.AccountApp.register("/register", {
  title: "注册 · Studio",
  authenticated: false,
  styles: ``,
  markup: `    <section class="welcome-modal" role="dialog" aria-labelledby="register-title" aria-describedby="register-description" tabindex="-1">
      <header class="modal-header password-header qr-header">
        <a class="modal-back" href="#/login" aria-label="返回选择登录方式"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg></a>
        <div class="modal-heading">
          <h2 class="modal-title" id="register-title">注册</h2>
          <p class="modal-description" id="register-description">创建账号后，可在多端同步观看记录与创作资产。</p>
        </div>
      </header>
      <div class="modal-body">
        <div class="login-methods" aria-label="选择注册方式"><button class="spec-btn secondary large login-method" type="button" data-register-method="email"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" class="login-method-icon" aria-hidden="true" focusable="false"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z"/></svg><span>邮箱注册</span></button>
<button class="spec-btn secondary large login-method" type="button" data-register-method="phone"><svg class="login-method-icon" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120v-720 720Zm400 0v-80 80Zm-80-240h200v-120H600v120Zm240 80H600l-46 46q-5 5-11 5.5t-11-1.5q-5-2-8.5-6.5T520-248v-272q0-17 11.5-28.5T560-560h280q17 0 28.5 11.5T880-520v200q0 17-11.5 28.5T840-280ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160q0 17-11.5 28.5T720-640q-17 0-28.5-11.5T680-680v-160H280v720h400v-40q0-17 11.5-28.5T720-200q17 0 28.5 11.5T760-160v40q0 33-23.5 56.5T680-40H280Zm228.5-691.5Q520-743 520-760t-11.5-28.5Q497-800 480-800t-28.5 11.5Q440-777 440-760t11.5 28.5Q463-720 480-720t28.5-11.5ZM600-360v-120 120Z"/></svg><span>短信注册</span></button></div>
        <div class="login-support">
          <p class="register-copy">已有账号？<a class="action-link" href="#/login">登录</a></p>
          <div class="login-consent">
            <div class="consent-tooltip" id="consent-error" role="alert" hidden>请先阅读并同意相关协议，并确认已满 18 周岁</div>
            <label class="spec-checkbox consent-checkbox">
              <input id="login-consent" type="checkbox" checked aria-labelledby="consent-copy" />
              <span class="login-legal" id="consent-copy">点击登录即表示你已阅读并同意 <a class="legal-link" href="#creator-agreement" data-link-target="creator-agreement">创作者服务协议</a> 和 <a class="legal-link" href="#privacy-policy" data-link-target="privacy-policy">隐私政策</a> ，并确认已满 18 周岁。</span>
            </label>
          </div>
        </div>
      </div>
    </section>`,
  mount(scope) {

    (() => {
      const consent = document.getElementById('login-consent');
      const error = document.getElementById('consent-error');
      document.querySelectorAll('[data-register-method]').forEach((method) => method.addEventListener('click', () => {
        if (!consent.checked) {
          error.hidden = false;
          consent.setAttribute('aria-invalid', 'true');
          consent.setAttribute('aria-describedby', 'consent-error');
          consent.focus({ preventScroll: true });
          return;
        }
        scope.navigate(method.dataset.registerMethod === 'email' ? 'register-email.html' : 'register-sms.html');
      }));
      consent.addEventListener('change', () => {
        if (consent.checked) {
          error.hidden = true;
          consent.removeAttribute('aria-invalid');
          consent.removeAttribute('aria-describedby');
        }
      });
    })();
  
  }
});
