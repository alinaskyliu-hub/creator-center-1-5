/* Account view: index.html. The persistent shell owns the background. */
window.AccountApp.register("/login", {
  title: "Studio",
  authenticated: false,
  styles: ``,
  markup: `    <section class="welcome-modal" role="dialog" aria-labelledby="login-title" aria-describedby="login-description" tabindex="-1">
      <header class="modal-header">
        <div class="modal-heading">
          <h2 class="modal-title" id="login-title">登录</h2>
          <p class="modal-description" id="login-description">使用扫码、密码或短信验证码登录创作者工作台</p>
        </div>
      </header>
      <div class="modal-body">
        <div class="login-methods" aria-label="选择登录方式"><button class="spec-btn secondary large login-method" type="button" data-login-method="qr"><svg class="login-method-icon" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-560v-240q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v240q0 17-11.5 28.5T400-520H160q-17 0-28.5-11.5T120-560Zm80-40h160v-160H200v160Zm-80 440v-240q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400v240q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-40h160v-160H200v160Zm320-360v-240q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v240q0 17-11.5 28.5T800-520H560q-17 0-28.5-11.5T520-560Zm80-40h160v-160H600v160Zm160 480v-80h80v80h-80ZM520-360v-80h80v80h-80Zm80 80v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm80 80v-80h80v80h-80Zm80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80 80v-80h80v80h-80Z"/></svg><span>扫码登录</span></button>
<button class="spec-btn secondary large login-method" type="button" data-login-method="password"><svg class="login-method-icon" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm296.5-143.5Q560-327 560-360t-23.5-56.5Q513-440 480-440t-56.5 23.5Q400-393 400-360t23.5 56.5Q447-280 480-280t56.5-23.5ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg><span>密码登录</span></button>
<button class="spec-btn secondary large login-method" type="button" data-login-method="sms"><svg class="login-method-icon" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120v-720 720Zm400 0v-80 80Zm-80-240h200v-120H600v120Zm240 80H600l-46 46q-5 5-11 5.5t-11-1.5q-5-2-8.5-6.5T520-248v-272q0-17 11.5-28.5T560-560h280q17 0 28.5 11.5T880-520v200q0 17-11.5 28.5T840-280ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160q0 17-11.5 28.5T720-640q-17 0-28.5-11.5T680-680v-160H280v720h400v-40q0-17 11.5-28.5T720-200q17 0 28.5 11.5T760-160v40q0 33-23.5 56.5T680-40H280Zm228.5-691.5Q520-743 520-760t-11.5-28.5Q497-800 480-800t-28.5 11.5Q440-777 440-760t11.5 28.5Q463-720 480-720t28.5-11.5ZM600-360v-120 120Z"/></svg><span>短信登录</span></button></div>
        <div class="login-support">
          <p class="register-copy">没有账号？<a class="action-link" href="#/register" data-link-target="register">注册</a></p>
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
      const destinations = { qr: 'login-qr.html', password: 'login-password.html', sms: 'login-sms.html' };
      document.querySelectorAll('[data-login-method]').forEach((button) => {
        button.addEventListener('click', () => {
          if (!consent.checked) {
            error.hidden = false;
            consent.setAttribute('aria-invalid', 'true');
            consent.setAttribute('aria-describedby', 'consent-error');
            consent.focus({ preventScroll: true });
            return;
          }
          scope.navigate(destinations[button.dataset.loginMethod]);
        });
      });
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
