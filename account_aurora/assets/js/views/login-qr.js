/* Account view: login-qr.html. The persistent shell owns the background. */
window.AccountApp.register("/login/qr", {
  title: "扫描登录 · Studio",
  authenticated: false,
  styles: ``,
  markup: `    <section class="welcome-modal" role="dialog" aria-labelledby="login-title" aria-describedby="login-description" tabindex="-1">
      <header class="modal-header password-header qr-header">
        <a class="modal-back" href="#/login" aria-label="返回选择登录方式"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g id="arrow-left">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </g>
</svg>
</a>
        <div class="modal-heading">
          <h2 class="modal-title" id="login-title">扫描登录</h2>
          <p class="modal-description" id="login-description">请使用爱奇艺 App 扫描二维码</p>
        </div>
      </header>
      <div class="modal-body">
        <div class="qr-code-wrap">
          <!-- Demo QR only. Replace with a server-issued login challenge when authentication is connected. -->
          <img class="qr-code" src="assets/images/login-qr.svg" width="200" height="200" alt="扫描登录演示二维码" />
        </div>
        <div class="login-support">
          <p class="register-copy">没有账号？<a class="action-link" href="#/register" data-link-target="register">注册</a></p>
        </div>
      </div>
    </section>`,
  mount(scope) {

  }
});
