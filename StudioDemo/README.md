# StudioDemo 创作者工作台

仓库：https://github.com/monica137142/creator-center

网站：https://monica137142.github.io/creator-center/

打开 `index.html` 进入内容管理页。使用普通 HTML、CSS 和 JavaScript，可通过本地文件或 HTTP 预览，无需构建。

## 目录

- 根目录 `*.html`：页面结构和入口，原地址保留。
- `assets/css/`：公共样式及对应页面样式。
- `assets/js/`：账号导航、资料编辑、主题初始化、入场动画等公共功能。
- `assets/js/views/`：各页面交互脚本；`*-init.js` 负责编辑页参数初始化。
- `assets/images/`：Logo、头像、封面及占位图片；`icons/` 保存图标。
- `assets/tests/`：资源引用检查，不参与页面运行。
- `archive/`：旧 linked 入口的归档，不参与正常页面导航。
- `DESIGN.md`：设计说明。

页面中的脚本保留原有加载顺序；原内嵌样式已移至同名 CSS。JS 中的图片和页面跳转地址相对于 HTML 入口，CSS 中的 `url()` 相对于 CSS 文件。

## 页面

- `index.html`：保留查询参数和 hash，跳转 `content.html`。
- `content.html`：内容管理。
- `analytics.html`：数据分析。
- `edit.html`：专辑编辑。
- `edit2.html`：单集编辑。
- `account-setting.html`：账号设置。

每种页面只维护一套 HTML、CSS 和 JS。不带 `linked=1` 表示未绑定，带 `?linked=1` 表示已绑定，例如 `content.html?linked=1`。绑定状态通过链接传递，刷新、前进后退均可恢复，不写入跨标签页缓存。内容同步记录仍沿用原有 sessionStorage 逻辑，解绑后已同步内容的保留行为不变。

原来的六个 `*-linked.html` 文件已移动到 `archive/`，根目录旧地址不再可用。打开归档文件仍会转到对应页面并携带 `linked=1`，保留其他查询参数及 hash。`assets/js/account-state.js` 负责状态和链接，`account-state-dom.js` 应用绑定区展示，`archive/linked-redirect.js` 处理归档入口。仍采用多 HTML 页面结构。

编辑页未保存确认、绑定/解绑确认和原加载时长保留：已绑定专辑页为 5000ms，其余编辑页为 1500ms。

从 `account_aurora` 登录／注册成功进入时，`account-entry.js` 播放 1000ms、ease-in-out 的模糊渐显；退出登录回到 `../account_aurora/index.html#/login`。

## 检查

在本目录执行：

```sh
node --test assets/tests/*.test.cjs
```

覆盖资源引用、两种绑定状态、HTTP/file URL 路径、旧入口跳转及编辑参数保留。

## 2026-10-14 内容与编辑页合并

`index.html` 继续保留查询参数与 hash 并跳转到 `content.html`。未绑定内容页保留本项目原有展示、登录／注册和绑定引导；`linked=1` 的内容页采用 Project/StudioDemo 的中文文案、剧名、Logo 和列表样式。共用一套内容页交互脚本，差异按 URL 绑定状态选择。

专辑编辑页采用 Project/StudioDemo 的 HTML、样式、编辑脚本和封面映射资源；公共账号流程继续使用本项目版本。默认名称随上述页面展示切换，用户保存的自定义昵称仍优先使用。单集编辑、数据分析和账号设置页不作整体迁移。
