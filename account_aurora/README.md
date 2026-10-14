# Account 单入口原型

打开 `index.html`。页面采用原生 JavaScript 和 hash 路由，不需要安装依赖或执行构建。

- `index.html`：常驻页面外壳，包含 Aurora、鼠标光晕、Logo、标题和右上角按钮。
- `assets/js/account-router.js`：路由和步骤生命周期；仅替换 `#account-view`，不重建背景。
- `assets/js/account-shell.js`：主题切换和账号按钮状态。
- `assets/js/account-transitions.js`：切换时淡出旧内容，再以 500ms、ease-in-out 平滑调整弹窗高度和整体居中位置，并同步淡入新内容；支持连续切换和减少动态效果偏好。
- `assets/js/views/*.js`：独立步骤模块，分别包含静态模板、局部样式和初始化逻辑。
- `login-forgot.html`：找回密码流程的统一入口；输入邮箱或手机号、账号验证、设置新密码由 `assets/js/views/login-recovery.js` 使用内部路由切换，无需独立步骤 HTML。
- 除 `index.html` 外的 HTML 为功能入口，自动跳转到对应的 `index.html#/…` 地址。

## 九个功能入口

| 入口 | 功能及内部步骤 |
| --- | --- |
| `index.html` | 登录方式选择与公共外壳 |
| `login-qr.html` | 扫码登录 |
| `login-password.html` | 密码登录 |
| `login-sms.html` | 输入手机号 → 安全验证 → 手机号验证 |
| `register.html` | 注册方式选择 |
| `register-email.html` | 邮箱注册 |
| `register-sms.html` | 输入手机号 → 安全验证 → 手机号验证 |
| `login-forgot.html` | 输入邮箱或手机号 → 账号验证 → 设置新密码 |
| `login-return.html` | 已记录账号重新登录 |

安全验证、验证码和设置新密码仅保留内部步骤路由，不再提供独立 HTML。未使用的资料完善页已移除；登录、注册完成后直接进入 StudioDemo。

路由包括 `/login`、`/login/password`、`/login/qr`、`/login/sms`、`/login/security`、`/login/verification`、`/login/return`、`/login/forgot`、`/login/recovery/verification`、`/login/reset/password`，以及 `/register`、`/register/email`、`/register/sms`、`/register/security`、`/register/verification`。

模块使用普通 deferred script 注册，兼容本地文件打开，避免 `file://` 下 fetch 和 ES module 的跨域限制。浏览器前进、后退和刷新均根据 hash 恢复当前步骤。手动刷新、首次访问旧 HTML 入口，以及最终跳转 StudioDemo 会加载新文档；账号流程内切换不会。

## 修改步骤

直接编辑对应的 `assets/js/views/*.js`，不要再修改旧 HTML 跳转页。页面内导航调用 `scope.navigate()` 或使用 `#/…` 链接；跳转 StudioDemo 的原有目标保持不变。

全局事件监听使用 `scope.listen()`，定时器使用 `scope.setInterval()` / `scope.setTimeout()`，挂载到 body 的下拉菜单使用 `scope.portal()`。离开步骤时会统一清理，避免重复监听、倒计时和残留浮层。局部元素自己的监听随节点移除而释放。

## 检查

在此文件夹运行：

```sh
node --test assets/tests/*.test.cjs
```

测试覆盖路由切换、外部跳转、文件 URL 路由解析、模块资源引用，以及监听器、定时器和浮层的卸载。

此项目保留原有本地登录／注册演示逻辑，未新增后端认证服务。
