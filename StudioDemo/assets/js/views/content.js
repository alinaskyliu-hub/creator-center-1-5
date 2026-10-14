// Bound content uses the source presentation; unbound onboarding stays unchanged.
const useSourceContent = window.StudioAccount.linked;
const messages = {
        en: {
          studio: useSourceContent ? "创作者工作台" : "Studio",
          languageTooltip: "Language",
          switchLanguage: "Switch language",
          switchToDarkMode: "Dark mode",
          switchToLightMode: "Light mode",
          accountTooltip: "Account",
          accountSetting: useSourceContent ? "账号设置" : "Account Setting",
          signOut: "Sign Out",
          userName: useSourceContent ? "米娅工作室" : "Mia Studio",
          iqId: useSourceContent ? "爱奇艺账号：1461926038" : "IQ ID: 1461926038",
          upload: "Upload",
          mainSiteAccount: "Main-site account",
          mainSiteAccountUnlinked: "Main-site account: Unlinked",
          mainSiteAccountLinked: "Main-site account: Linked",
          mainSiteAccountName: useSourceContent ? "用户00260922" : "User00260922",
          linkedStatus: "Linked",
          linkAccount: "Link Account",
          unlinkedStatus: "Unlinked",
          content: "Content Management",
          analytics: "Analytics",
          subtitles: "Subtitles",
          settings: "Settings",
          pageTitle: useSourceContent ? "Content - 创作者工作台" : "Content - Studio",
          contentMenuAria: "Content menu",
          contentFiltersAria: "Content filters",
          all: "All",
          short: "Short",
          comicDrama: "ComicDrama",
          drama: "Drama",
          anime: "Anime",
          freePaid: "Free/Paid",
          publication: "Publication",
          dateRange: "Updated",
          selectDateRange: "Select date range",
          clearDateRange: "Clear",
          visibility: "Visibility",
          free: "Free",
          paid: "Paid",
          online: "Online",
          publishing: "Publishing",
          offline: "Offline",
          draft: "Draft",
          reviewPending: "Under review",
          reviewRejected: "Review rejected",
          reviewApproved: "Review approved",
          reviewRejectedReason: "Subtitle format does not meet the standard",
          public: "Public",
          private: "Private",
          searchPlaceholder: "Search title or Content ID",
          clearSearch: "Clear search",
          clearFilter: "Clear filter",
          video: "Content name",
          freePaidStatus: "Free/Paid Status",
          publicationStatus: "Publication Status",
          updated: "Updated",
          firstOnline: "First published",
          sortUpdated: "Sort by updated date",
          sortFirstOnline: "Sort by first published date",
          action: "Action",
          pagination: "Pagination",
          previousPage: "Previous page",
          nextPage: "Next page",
          rowsPerPage: "Rows per page",
          rowsTotal: (total) => `${total} items`,
          rowsPerPageLabel: (size) => `${size} / page`,
          pageLabel: (page) => `Page ${page}`,
          noContentYet: "No content yet",
          linkAccountFirst: "Link your account first",
          linkAccountDescription: "Link your main-site iQIYI account to view and manage content synced to your overseas account.",
          linkAccountAction: "Link account",
          edit: "Edit",
          requestOffline: "Offline",
          confirmRequestOffline: "Confirm offline",
          republish: "Republish",
          republishUnavailable: "This content is offline on the main site",
          offlineSuccess: "Content taken offline successfully",
          republishSuccess: "Content republished successfully",
          offlineModalTitle: "Please confirm",
          confirmOffline: (title) => `After “${title}” is taken offline, viewers will no longer be able to access it. Continue?`,
          confirmRepublish: (title) => `Republish “${title}”? Viewers will be able to access it again after it is online.`,
          closeModal: useSourceContent ? "关闭弹窗" : "Close dialog",
          back: "Back",
          continueAction: "Continue",
          today: "Today",
          yesterday: "Yesterday"
        },
        zh: {
          studio: useSourceContent ? "创作者工作台" : "Studio",
          languageTooltip: "语言",
          switchLanguage: "切换语言",
          switchToDarkMode: "夜间模式",
          switchToLightMode: "浅色模式",
          accountTooltip: "账号",
          accountSetting: "账号设置",
          signOut: "退出登录",
          userName: useSourceContent ? "米娅工作室" : "Mia Studio",
          iqId: useSourceContent ? "爱奇艺账号：1461926038" : "IQ ID：1461926038",
          upload: "上传",
          mainSiteAccount: "主站账户",
          mainSiteAccountUnlinked: "主站账户：未绑定",
          mainSiteAccountLinked: "主站账户：已绑定",
          mainSiteAccountName: useSourceContent ? "用户00260922" : "User00260922",
          linkedStatus: "已绑定",
          linkAccount: "去绑定",
          unlinkedStatus: "未绑定",
          content: "内容管理",
          analytics: "数据分析",
          subtitles: "字幕",
          settings: "设置",
          pageTitle: useSourceContent ? "内容 - 创作者工作台" : "内容 - Studio",
          contentMenuAria: "内容菜单",
          contentFiltersAria: "内容筛选",
          all: "全部",
          short: "短剧",
          comicDrama: "漫剧",
          drama: "电视剧",
          anime: "动漫",
          freePaid: "免费/付费",
          publication: "发布状态",
          dateRange: "更新时间",
          selectDateRange: "选择日期范围",
          clearDateRange: "清除",
          visibility: "可见性",
          free: "免费",
          paid: "付费",
          online: "已上线",
          publishing: "发布中",
          offline: "已下线",
          draft: "草稿",
          reviewPending: "审核中",
          reviewRejected: "审核不通过",
          reviewApproved: "审核成功",
          reviewRejectedReason: "字幕格式不符合标准",
          public: "公开",
          private: "私密",
          searchPlaceholder: useSourceContent ? "搜索标题或内容编号" : "搜索标题或 Content ID",
          clearSearch: "清除搜索",
          clearFilter: "清除筛选",
          video: "内容名称",
          freePaidStatus: "免费/付费状态",
          publicationStatus: "发布状态",
          updated: "更新时间",
          firstOnline: "首次上线时间",
          sortUpdated: "按更新时间排序",
          sortFirstOnline: "按首次上线时间排序",
          action: "操作",
          pagination: "分页",
          previousPage: "上一页",
          nextPage: "下一页",
          rowsPerPage: "每页条数",
          rowsTotal: (total) => `共 ${total} 条`,
          rowsPerPageLabel: (size) => `${size} 条 / 页`,
          pageLabel: (page) => `第 ${page} 页`,
          noContentYet: "暂无内容",
          linkAccountFirst: "请先绑定账户",
          linkAccountDescription: "绑定你的爱奇艺主站账户，即可查看和管理同步至海外账户的内容。",
          linkAccountAction: "去绑定",
          edit: "编辑",
          requestOffline: "下线",
          confirmRequestOffline: "确认下线",
          republish: "重新上线",
          republishUnavailable: "该内容在主站已下线",
          offlineSuccess: "内容已成功下线",
          republishSuccess: "内容已成功重新上线",
          offlineModalTitle: "请确认信息",
          confirmOffline: (title) => `《${title}》下线后用户将无法访问，是否继续？`,
          confirmRepublish: (title) => `是否确认重新上线《${title}》？上线后用户将可再次访问。`,
          closeModal: "关闭弹窗",
          back: "返回",
          continueAction: "继续",
          today: "今天",
          yesterday: "昨天"
        }
      };

      const themeSwitch = document.querySelector(".theme-switch");
      const accountEntry = document.querySelector(".account-entry");
      const accountTrigger = document.querySelector(".account-trigger");
      const accountMenu = document.querySelector(".account-menu");
      const themeToggle = document.querySelector("[data-theme-toggle]");
      const themeTooltip = document.querySelector("[data-theme-tooltip]");
      const contentMenu = document.querySelector(".content-menu");
      const contentTabs = Array.from(document.querySelectorAll("[data-content-tab]"));
      const videoSortButtons = Array.from(document.querySelectorAll("[data-video-sort]"));
      const workspace = document.querySelector(".workspace");
      const contentView = document.querySelector(".content-view");
      const contentToolbar = document.querySelector(".content-toolbar-frame");
      const contentPanel = document.querySelector("#content-panel");
      const videoListCard = document.querySelector(".video-list-card");
      const videoListHeaderScroll = document.querySelector("[data-video-list-header-scroll]");
      const videoListScroll = document.querySelector("[data-video-list-scroll]");
      const contentList = document.querySelector("[data-video-list]");
      const videoTitleTooltip = document.querySelector("[data-video-title-tooltip]");
      const searchInput = document.querySelector("[data-search-input]");
      const searchClear = document.querySelector("[data-search-clear]");
      const filterTriggers = Array.from(document.querySelectorAll("[data-filter-trigger]"));
      const filterOptions = Array.from(document.querySelectorAll("[data-filter-option]"));
      const filterClears = Array.from(document.querySelectorAll("[data-filter-clear]"));
      const dateRangePicker = document.querySelector("[data-date-range-picker]");
      const dateRangeTrigger = document.querySelector("[data-date-range-trigger]");
      const dateRangeDropdown = document.querySelector("[data-date-range-dropdown]");
      const dateRangeCalendars = document.querySelector("[data-date-range-calendars]");
      const dateRangeValue = document.querySelector("[data-date-range-value]");
      const dateRangeClear = document.querySelector("[data-date-range-clear]");
      const pageSizeSelect = document.querySelector("[data-page-size]");
      const pageSizeTrigger = document.querySelector("[data-page-size-trigger]");
      const pageSizeLabel = document.querySelector("[data-page-size-label]");
      const pageSizeMenu = document.querySelector("[data-page-size-menu]");
      const pageSizeOptions = Array.from(document.querySelectorAll("[data-page-size-option]"));
      const paginationRange = document.querySelector("[data-pagination-range]");
      const pagination = paginationRange.closest(".pagination");
      const pageNumbers = document.querySelector("[data-page-numbers]");
      const prevPageButton = document.querySelector("[data-page-prev]");
      const nextPageButton = document.querySelector("[data-page-next]");
      const offlineModalLayer = document.querySelector("[data-offline-modal]");
      const offlineModalDialog = document.querySelector("[data-offline-modal-dialog]");
      const offlineModalTitle = document.querySelector("[data-offline-modal-title]");
      const offlineModalDescription = document.querySelector("[data-offline-modal-description]");
      const offlineModalClose = document.querySelector("[data-offline-modal-close]");
      const offlineModalCancel = document.querySelector("[data-offline-modal-cancel]");
      const offlineModalConfirm = document.querySelector("[data-offline-modal-confirm]");
      const messagePortal = document.querySelector("[data-message-portal]");
      let currentContentView = "all";
      let currentLanguage = useSourceContent ? "zh" : "en";
      let currentPage = 1;
      let currentSortKey = null;
      let currentSortDirection = null;
      let pageSize = Number(pageSizeTrigger.dataset.pageSizeValue);
      let pendingOfflineItem = null;
      let pendingPublicationStatus = "Offline";
      let offlineModalTrigger = null;
      let dateRangeView = new Date(2026, 7, 1);
      let dateRangeStart = null;
      let dateRangeEnd = null;
      let dateRangeHover = null;
      let committedDateRangeStart = null;
      let committedDateRangeEnd = null;
      const loadingPublicationIds = new Set();
      const activeFilters = {
        freePaidStatus: "",
        publicationStatus: ""
      };
      const videoItems = [
        {
          type: "short",
          title: useSourceContent ? "宇宙派送来的他" : "The Extraordinary Adventures of Our Summer Studio Launch",
          id: "VID-2408-0192",
          duration: "00:42",
          episodes: 12,
          format: "1080x1920",
          freePaidStatus: "Free",
          publicationStatus: "Publishing",
          publicationNote: "ReviewApproved",
          visibilityStatus: "Public",
          updated: "Today 14:26:35"
        },
        {
          type: "short",
          title: useSourceContent ? "岁岁寻常，幸而有你" : "Behind the Scene",
          id: "VID-2408-0164",
          duration: "00:28",
          episodes: 8,
          format: "1080x1920",
          freePaidStatus: "Paid",
          publicationStatus: "Online",
          publicationNote: "ReviewRejected",
          visibilityStatus: "Private",
          updated: "Aug 10, 2026 10:18:42"
        },
        {
          type: "short",
          title: useSourceContent ? "惊月怀景" : "Creator Challenge",
          id: "VID-2408-0142",
          duration: "00:36",
          episodes: 16,
          format: "1080x1920",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          publicationNote: "ReviewPending",
          visibilityStatus: "Public",
          updated: "Aug 7, 2026 16:05:27"
        },
        {
          type: "short",
          title: useSourceContent ? "我养出末世伪救世主" : "Weekend Recap",
          id: "VID-2408-0128",
          duration: "00:51",
          episodes: 10,
          format: "1080x1920",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 5, 2026 09:42:16"
        },
        {
          type: "comic-drama",
          title: useSourceContent ? "丢失的国宝" : "Moonlit Bistro",
          id: "VID-2408-0187",
          duration: "03:18",
          episodes: 6,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Online",
          publicationNote: "ReviewPending",
          visibilityStatus: "Private",
          updated: "Yesterday 18:40:21"
        },
        {
          type: "comic-drama",
          title: useSourceContent ? "半生落魄装疯癫，只为红颜动刀剑" : "Roommate Contract: The Unexpected Rules of Living Together Under One Roof",
          id: "VID-2408-0179",
          duration: "02:44",
          episodes: 8,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Offline",
          visibilityStatus: "Public",
          republishDisabled: true,
          updated: "Aug 13, 2026 11:32:08"
        },
        {
          type: "comic-drama",
          title: useSourceContent ? "炮灰回档仙途" : "Office Crush",
          id: "VID-2408-0168",
          duration: "03:05",
          episodes: 10,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 11, 2026 15:47:33"
        },
        {
          type: "comic-drama",
          title: useSourceContent ? "男扮女的侯府千金" : "Delivery Mix-up",
          id: "VID-2408-0147",
          duration: "02:58",
          episodes: 12,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Offline",
          visibilityStatus: "Public",
          updated: "Aug 8, 2026 08:26:54"
        },
        {
          type: "short",
          title: useSourceContent ? "晚风知意，竹马情深" : "Character Moment",
          id: "VID-2408-0158",
          duration: "02:06",
          episodes: 18,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          publicationNote: "ReviewPending",
          visibilityStatus: "Public",
          updated: "Aug 9, 2026 17:14:06"
        },
        {
          type: "short",
          title: useSourceContent ? "百日昏迷：梦获传承，醒来绝世高手第二季" : "Second Chance",
          id: "VID-2408-0151",
          duration: "07:36",
          episodes: 24,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Online",
          publicationNote: "ReviewRejected",
          visibilityStatus: "Private",
          updated: "Aug 7, 2026 13:38:45"
        },
        {
          type: "short",
          title: useSourceContent ? "重生慈母硬家规" : "Evidence Board",
          id: "VID-2408-0136",
          duration: "09:12",
          episodes: 16,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          visibilityStatus: "Public",
          updated: "Aug 4, 2026 19:03:12"
        },
        {
          type: "short",
          title: useSourceContent ? "静破贪局" : "Rainy Street",
          id: "VID-2408-0124",
          duration: "08:48",
          episodes: 20,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 2, 2026 12:51:39"
        },
        {
          type: "comic-drama",
          title: useSourceContent ? "禁忌之王" : "Harbor Lights",
          id: "VID-2408-0181",
          duration: "28:14",
          episodes: 32,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Online",
          publicationNote: "ReviewRejected",
          visibilityStatus: "Private",
          updated: "Aug 11, 2026 20:16:24"
        },
        {
          type: "comic-drama",
          title: useSourceContent ? "被裁回村后，我靠一颗番茄封神" : "Silent Witness",
          id: "VID-2408-0162",
          duration: "31:08",
          episodes: 40,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Offline",
          visibilityStatus: "Public",
          updated: "Aug 6, 2026 14:29:51"
        },
        {
          type: "comic-drama",
          title: useSourceContent ? "重生后，弥补二十年暗恋" : "Northern Promise",
          id: "VID-2408-0144",
          duration: "26:52",
          episodes: 36,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 3, 2026 10:44:18"
        },
        {
          type: "comic-drama",
          title: useSourceContent ? "重生逆转：十五载错位人生" : "Glass City",
          id: "VID-2408-0121",
          duration: "33:19",
          episodes: 28,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          visibilityStatus: "Public",
          updated: "Jul 30, 2026 16:37:02"
        }
      ];

      const shortCoverById = {
        "VID-2408-0192": "assets/images/cover/短剧/宇宙派送来的他-横图.jpg",
        "VID-2408-0164": "assets/images/cover/短剧/岁岁寻常，幸而有你-横图.jpg",
        "VID-2408-0142": "assets/images/cover/短剧/惊月怀景-横图.jpg",
        "VID-2408-0128": "assets/images/cover/短剧/我养出末世伪救世主-横图.jpg",
        "VID-2408-0158": "assets/images/cover/短剧/晚风知意，竹马情深-横图.jpg",
        "VID-2408-0151": "assets/images/cover/短剧/百日昏迷：梦获传承，醒来绝世高手第二季-横图.jpg",
        "VID-2408-0136": "assets/images/cover/短剧/重生慈母硬家规-横图.jpg",
        "VID-2408-0124": "assets/images/cover/短剧/静破贪局-横图.jpg"
      };

      const comicDramaCoverById = {
        "VID-2408-0187": "assets/images/cover/漫剧/丢失的国宝-横版.jpg",
        "VID-2408-0179": "assets/images/cover/漫剧/半生落魄装疯癫，只为红颜动刀剑-横图.jpg",
        "VID-2408-0168": "assets/images/cover/漫剧/炮灰回档仙途-横图.jpg",
        "VID-2408-0147": "assets/images/cover/漫剧/男扮女的侯府千金-横图.jpg",
        "VID-2408-0181": "assets/images/cover/漫剧/禁忌之王-横图.jpg",
        "VID-2408-0162": "assets/images/cover/漫剧/被裁回村后，我靠一颗番茄封神-横图.jpg",
        "VID-2408-0144": "assets/images/cover/漫剧/重生后，弥补二十年暗恋-横图.jpg",
        "VID-2408-0121": "assets/images/cover/漫剧/重生逆转：十五载错位人生-横图.jpg"
      };

      const firstOnlineTimes = {
        "VID-2408-0192": "Aug 14, 2026 09:12:18",
        "VID-2408-0164": "Aug 8, 2026 14:36:42",
        "VID-2408-0142": "Aug 3, 2026 10:08:25",
        "VID-2408-0128": "Aug 1, 2026 16:22:51",
        "VID-2408-0187": "Aug 12, 2026 11:45:06",
        "VID-2408-0179": "Aug 9, 2026 08:30:14",
        "VID-2408-0168": "Aug 7, 2026 15:17:39",
        "VID-2408-0147": "Aug 4, 2026 12:52:28",
        "VID-2408-0158": "Aug 5, 2026 09:41:33",
        "VID-2408-0151": "Aug 3, 2026 18:06:47",
        "VID-2408-0136": "Jul 31, 2026 13:24:10",
        "VID-2408-0124": "Jul 29, 2026 17:38:56",
        "VID-2408-0181": "Aug 7, 2026 10:15:22",
        "VID-2408-0162": "Aug 2, 2026 14:49:31",
        "VID-2408-0144": "Jul 30, 2026 08:57:44",
        "VID-2408-0121": "Jul 26, 2026 16:33:19"
      };

      const firstCreatedTimes = {
        "VID-2408-0192": "Aug 14, 2026 08:40:00",
        "VID-2408-0187": "Aug 12, 2026 09:20:00",
        "VID-2408-0181": "Aug 10, 2026 16:10:00",
        "VID-2408-0179": "Aug 9, 2026 07:55:00",
        "VID-2408-0168": "Aug 7, 2026 13:40:00",
        "VID-2408-0164": "Aug 7, 2026 10:25:00",
        "VID-2408-0162": "Aug 6, 2026 18:05:00",
        "VID-2408-0158": "Aug 5, 2026 08:12:00",
        "VID-2408-0151": "Aug 3, 2026 16:45:00",
        "VID-2408-0147": "Aug 3, 2026 11:30:00",
        "VID-2408-0144": "Aug 2, 2026 15:20:00",
        "VID-2408-0142": "Aug 2, 2026 09:10:00",
        "VID-2408-0136": "Jul 31, 2026 11:05:00",
        "VID-2408-0128": "Jul 30, 2026 17:40:00",
        "VID-2408-0124": "Jul 28, 2026 14:15:00",
        "VID-2408-0121": "Jul 25, 2026 12:50:00"
      };

      function t(key, ...args) {
        const message = messages[currentLanguage][key] ?? messages.en[key] ?? key;
        return typeof message === "function" ? message(...args) : message;
      }

      function setTheme(theme, persist = true) {
        const nextTheme = theme === "dark" ? "dark" : "light";
        document.documentElement.dataset.theme = nextTheme;
        document.documentElement.style.colorScheme = nextTheme;
        if (themeToggle) {
          const label = nextTheme === "dark" ? t("switchToLightMode") : t("switchToDarkMode");
          themeToggle.setAttribute("aria-label", label);
          if (themeTooltip) {
            themeTooltip.textContent = label;
          }
        }
        if (persist) {
          try {
            localStorage.setItem("studio-theme", nextTheme);
          } catch (error) {}
        }
      }

      function syncThemePreference() {
        const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
        setTheme(currentTheme, false);
      }

      themeToggle?.addEventListener("click", () => {
        themeSwitch?.classList.add("suppress-tooltip");
        if (themeSwitch) setActiveTooltipContainer(themeSwitch);
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        themeToggle.blur();
      });

      function getTypeLabel(type) {
        const typeKeys = {
          short: "short",
          "comic-drama": "comicDrama",
          drama: "drama",
          anime: "anime"
        };
        return t(typeKeys[type] || type);
      }

      function getStatusKey(value) {
        const statusKeys = {
          Free: "free",
          Paid: "paid",
          Online: "online",
          Publishing: "publishing",
          Offline: "offline",
          Draft: "draft",
          ReviewPending: "reviewPending",
          ReviewRejected: "reviewRejected",
          ReviewApproved: "reviewApproved",
          Public: "public",
          Private: "private",
          免费: "free",
          付费: "paid",
          上线: "online",
          已上线: "online",
          在线: "online",
          发布中: "publishing",
          已下线: "offline",
          下线: "offline",
          草稿: "draft",
          审核中: "reviewPending",
          审核不通过: "reviewRejected",
          审核成功: "reviewApproved",
          公开: "public",
          私密: "private"
        };
        return statusKeys[value] || value;
      }

      function getStatusLabel(value) {
        return t(getStatusKey(value));
      }

      function getPublicationClass(value) {
        const statusKey = getStatusKey(value);
        if (statusKey === "online") return "publish";
        if (statusKey === "publishing") return "publishing";
        return statusKey === "offline" ? "offline" : "draft";
      }

      function getPublicationIcon(value) {
        const statusKey = getStatusKey(value);
        if (["online", "publishing", "offline"].includes(statusKey)) return "";
        return `
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <path d="M14 3v6h6" />
            <path d="M8 15h4" />
          </svg>
        `;
      }

      function renderPublicationPill(value) {
        return `<span class="status-pill ${getPublicationClass(value)}">${getPublicationIcon(value)}<span>${getStatusLabel(value)}</span></span>`;
      }

      function getPublicationNoteMeta(note) {
        const noteKey = getStatusKey(note);
        const noteMeta = {
          reviewPending: {
            className: "review-pending",
            icon: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>'
          },
          reviewRejected: {
            className: "review-rejected",
            icon: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m9 9 6 6M15 9l-6 6" /></svg>'
          },
          reviewApproved: {
            className: "review-approved",
            icon: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></svg>'
          }
        };
        return noteMeta[noteKey] || { className: "", icon: "" };
      }

      function renderPublicationStatus(value, note) {
        const noteMeta = getPublicationNoteMeta(note);
        const isRejected = getStatusKey(note) === "reviewRejected";
        const tooltip = isRejected ? `<span class="review-status-tooltip" role="tooltip">${t("reviewRejectedReason")}</span>` : "";
        const tooltipAttributes = isRejected ? ` tabindex="0" aria-label="${getStatusLabel(note)}：${t("reviewRejectedReason")}"` : "";
        const noteLabel = note ? `<span class="publication-status-note ${noteMeta.className}${isRejected ? " has-tooltip" : ""}"${tooltipAttributes}>${noteMeta.icon}<span>${getStatusLabel(note)}</span>${tooltip}</span>` : "";
        return `<div class="publication-status">${renderPublicationPill(value)}${noteLabel}</div>`;
      }

      function getThumbBadgeLabel(item) {
        return useSourceContent ? `${item.episodes} 集` : `${item.episodes} Episodes`;
      }

      function getUpdatedLabel(updated) {
        if (updated.startsWith("Today")) {
          return t("today");
        }
        if (updated.startsWith("Yesterday")) {
          return t("yesterday");
        }
        const timestamp = Date.parse(updated);
        if (Number.isNaN(timestamp)) {
          return updated;
        }
        const locale = currentLanguage === "zh" ? "zh-CN" : "en-US";
        const dateLabel = new Intl.DateTimeFormat(locale, {
          year: "numeric",
          month: currentLanguage === "zh" ? "numeric" : "short",
          day: "numeric"
        }).format(timestamp);
        return `<span class="date-line">${dateLabel}</span>`;
      }

      function syncFilterLabels() {
        filterTriggers.forEach((filterTrigger) => {
          const field = filterTrigger.dataset.filterField;
          const selectedValue = activeFilters[field];
          const valueNode = filterTrigger.querySelector("[data-filter-value]");
          const hasValue = Boolean(selectedValue);
          filterTrigger.classList.toggle("has-value", hasValue);
          valueNode.hidden = false;
          if (field === "publicationStatus" && selectedValue) {
            valueNode.innerHTML = renderPublicationPill(selectedValue);
          } else {
            valueNode.textContent = selectedValue
              ? getStatusLabel(selectedValue)
              : t(field === "freePaidStatus" ? "freePaid" : "publication");
          }
        });
      }

      function syncFilterOptionLabels() {
        filterOptions.forEach((option) => {
          const value = option.dataset.filterValue;
          if (option.dataset.filterField === "publicationStatus" && value) {
            option.innerHTML = renderPublicationPill(value);
          } else if (value) {
            option.textContent = getStatusLabel(value);
          } else {
            option.textContent = t("all");
          }
        });
      }

      function syncPageSizeLabels() {
        pageSizeLabel.textContent = t("rowsPerPageLabel", pageSize);
        pageSizeOptions.forEach((option) => {
          option.textContent = t("rowsPerPageLabel", Number(option.dataset.pageSizeOption));
        });
      }

      function setLanguage(lang) {
        const nextLang = useSourceContent ? "zh" : (messages[lang] ? lang : "en");
        currentLanguage = nextLang;
        document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
        document.title = t("pageTitle");
        document.querySelectorAll("[data-i18n]").forEach((node) => {
          const key = node.dataset.i18n;
          node.textContent = t(key);
        });
        document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
          node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
        });
        document.querySelectorAll("[data-i18n-title]").forEach((node) => {
          node.setAttribute("title", t(node.dataset.i18nTitle));
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
          node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
        });
        syncFilterLabels();
        syncFilterOptionLabels();
        syncDateRangeValue();
        renderDateRangeCalendars();
        syncPageSizeLabels();
        renderVideoList(currentContentView);
        syncContentMenuIndicator();
        syncOfflineModalText();
        syncThemePreference();
        window.dispatchEvent(new CustomEvent("studio:languagechange", { detail: { language: nextLang } }));
        localStorage.setItem("studio-language", nextLang);
      }

      function suppressTooltipIfHidden(container, tooltipSelector) {
        const tooltip = container.querySelector(tooltipSelector);
        const tooltipOpacity = tooltip ? parseFloat(getComputedStyle(tooltip).opacity) : 0;
        if (tooltipOpacity < 0.95) {
          container.classList.add("suppress-tooltip");
        }
      }

      const tooltipContainers = [themeSwitch, accountEntry].filter(Boolean);

      function setActiveTooltipContainer(activeContainer) {
        tooltipContainers.forEach((container) => {
          container.classList.toggle("tooltip-muted", container !== activeContainer);
        });
      }

      function clearTooltipContainerMutes() {
        tooltipContainers.forEach((container) => {
          container.classList.remove("tooltip-muted");
        });
      }

      tooltipContainers.forEach((container) => {
        container.addEventListener("pointerenter", () => {
          setActiveTooltipContainer(container);
        });
        container.addEventListener("focusin", () => {
          setActiveTooltipContainer(container);
        });
        container.addEventListener("pointerleave", () => {
          container.classList.remove("suppress-tooltip");
          if (!tooltipContainers.some((item) => item.matches(":hover"))) {
            clearTooltipContainerMutes();
          }
        });
        container.addEventListener("focusout", (event) => {
          if (!container.contains(event.relatedTarget)) {
            container.classList.remove("suppress-tooltip");
            if (!tooltipContainers.some((item) => item.contains(event.relatedTarget))) {
              clearTooltipContainerMutes();
            }
          }
        });
      });

      function closeFilterMenus(options = {}) {
        filterTriggers.forEach((filterTrigger) => {
          filterTrigger.setAttribute("aria-expanded", "false");
          filterTrigger.closest(".filter-group").querySelector(".filter-menu").hidden = true;
        });
        if (options.restoreDateRange !== false && dateRangeStart && !dateRangeEnd) {
          dateRangeStart = committedDateRangeStart ? new Date(committedDateRangeStart) : null;
          dateRangeEnd = committedDateRangeEnd ? new Date(committedDateRangeEnd) : null;
          dateRangeHover = null;
          syncDateRangeValue();
          renderDateRangeCalendars();
        }
        dateRangeTrigger.setAttribute("aria-expanded", "false");
        dateRangeTrigger.classList.remove("open");
        dateRangeDropdown.hidden = true;
      }

      function toDateKey(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      }

      function fromDateKey(value) {
        const [year, month, day] = value.split("-").map(Number);
        return new Date(year, month - 1, day);
      }

      function syncDateRangeValue() {
        if (!dateRangeStart) {
          dateRangeValue.textContent = t("dateRange");
          dateRangeValue.classList.add("date-range-placeholder");
          dateRangeTrigger.classList.remove("has-value");
          return;
        }
        dateRangeValue.textContent = dateRangeEnd
          ? `${toDateKey(dateRangeStart)} ~ ${toDateKey(dateRangeEnd)}`
          : `${toDateKey(dateRangeStart)} ~`;
        dateRangeValue.classList.remove("date-range-placeholder");
        dateRangeTrigger.classList.toggle("has-value", Boolean(dateRangeEnd));
      }

      function renderDateRangeCalendars() {
        const locale = currentLanguage === "zh" ? "zh-CN" : "en-US";
        const weekdays = currentLanguage === "zh"
          ? ["日", "一", "二", "三", "四", "五", "六"]
          : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        const previewStart = dateRangeStart && !dateRangeEnd && dateRangeHover
          ? (dateRangeStart <= dateRangeHover ? dateRangeStart : dateRangeHover)
          : null;
        const previewEnd = dateRangeStart && !dateRangeEnd && dateRangeHover
          ? (dateRangeStart <= dateRangeHover ? dateRangeHover : dateRangeStart)
          : null;
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        Array.from(dateRangeCalendars.querySelectorAll(".date-calendar")).forEach((calendar) => {
          const offset = Number(calendar.dataset.datePanelOffset || 0);
          const monthDate = new Date(dateRangeView.getFullYear(), dateRangeView.getMonth() + offset, 1);
          const year = monthDate.getFullYear();
          const month = monthDate.getMonth();
          const leading = monthDate.getDay();
          const daysInMonth = new Date(year, month + 1, 0).getDate();
          const previousMonthDays = new Date(year, month, 0).getDate();
          const totalCells = Math.ceil((leading + daysInMonth) / 7) * 7;
          calendar.querySelector(".date-panel-title").textContent = currentLanguage === "zh"
            ? `${year} 年 ${month + 1} 月`
            : new Intl.DateTimeFormat(locale, { year: "numeric", month: "long" }).format(monthDate);
          calendar.querySelector(".date-weekdays").innerHTML = weekdays.map((day) => `<span class="date-weekday">${day}</span>`).join("");
          calendar.querySelector(".date-days").innerHTML = Array.from({ length: totalCells }, (_, index) => {
            const dayIndex = index - leading + 1;
            const date = dayIndex < 1
              ? new Date(year, month - 1, previousMonthDays + dayIndex)
              : dayIndex > daysInMonth
                ? new Date(year, month + 1, dayIndex - daysInMonth)
                : new Date(year, month, dayIndex);
            const isCurrentMonth = date.getMonth() === month;
            const isEdge = (dateRangeStart && toDateKey(date) === toDateKey(dateRangeStart)) || (dateRangeEnd && toDateKey(date) === toDateKey(dateRangeEnd));
            const inRange = dateRangeStart && dateRangeEnd && date > dateRangeStart && date < dateRangeEnd;
            const isPreviewEdge = dateRangeStart && !dateRangeEnd && dateRangeHover && (toDateKey(date) === toDateKey(dateRangeStart) || toDateKey(date) === toDateKey(dateRangeHover));
            const inPreview = previewStart && previewEnd && date > previewStart && date < previewEnd;
            const isFuture = date > today;
            const classes = ["date-cell"];
            if (!isCurrentMonth) classes.push("muted");
            if (toDateKey(date) === toDateKey(today)) classes.push("today");
            if (isEdge) classes.push("range-edge");
            if (inRange) classes.push("in-range");
            if (isPreviewEdge) classes.push("range-preview-edge");
            if (inPreview) classes.push("range-preview");
            if (isFuture) classes.push("disabled");
            return `<button class="${classes.join(" ")}" type="button" data-date-value="${toDateKey(date)}" aria-label="${new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date)}"${isFuture ? ' disabled aria-disabled="true"' : ""}>${date.getDate()}</button>`;
          }).join("");
        });
      }

      function closePageSizeMenu() {
        pageSizeSelect.classList.remove("open");
        pageSizeTrigger.setAttribute("aria-expanded", "false");
        pageSizeMenu.hidden = true;
      }

      function syncSearchClear() {
        searchClear.hidden = !searchInput.value;
      }

      searchInput.addEventListener("input", () => {
        syncSearchClear();
        currentPage = 1;
        renderVideoList(currentContentView);
        syncStickyDivider();
      });

      searchClear.addEventListener("click", (event) => {
        event.preventDefault();
        searchInput.value = "";
        syncSearchClear();
        currentPage = 1;
        renderVideoList(currentContentView);
        syncStickyDivider();
        searchInput.focus();
      });

      filterTriggers.forEach((filterTrigger) => {
        filterTrigger.addEventListener("click", (event) => {
          event.stopPropagation();
          const group = filterTrigger.closest(".filter-group");
          const filterMenu = group.querySelector(".filter-menu");
          const shouldOpen = filterMenu.hidden;
          closeFilterMenus();
          filterMenu.hidden = !shouldOpen;
          filterTrigger.setAttribute("aria-expanded", String(shouldOpen));
          closePageSizeMenu();
          accountMenu.hidden = true;
          accountEntry.classList.remove("is-open");
          accountTrigger.setAttribute("aria-expanded", "false");
        });
      });

      dateRangeTrigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const shouldOpen = dateRangeDropdown.hidden;
        closeFilterMenus();
        if (shouldOpen) {
          renderDateRangeCalendars();
          dateRangeDropdown.hidden = false;
          dateRangeTrigger.setAttribute("aria-expanded", "true");
          dateRangeTrigger.classList.add("open");
        }
        closePageSizeMenu();
      });

      dateRangeCalendars.addEventListener("click", (event) => {
        event.stopPropagation();
        const previous = event.target.closest(".date-nav-btn.prev");
        const next = event.target.closest(".date-nav-btn.next");
        if (previous || next) {
          dateRangeView = new Date(dateRangeView.getFullYear(), dateRangeView.getMonth() + (next ? 1 : -1), 1);
          renderDateRangeCalendars();
          return;
        }
        const day = event.target.closest("[data-date-value]");
        if (!day || day.disabled || day.classList.contains("disabled")) return;
        const selectedDate = fromDateKey(day.dataset.dateValue);
        if (!dateRangeStart || dateRangeEnd) {
          dateRangeStart = selectedDate;
          dateRangeEnd = null;
          dateRangeHover = null;
          syncDateRangeValue();
          renderDateRangeCalendars();
          return;
        } else if (selectedDate < dateRangeStart) {
          dateRangeEnd = dateRangeStart;
          dateRangeStart = selectedDate;
        } else {
          dateRangeEnd = selectedDate;
        }
        dateRangeHover = null;
        committedDateRangeStart = new Date(dateRangeStart);
        committedDateRangeEnd = new Date(dateRangeEnd);
        syncDateRangeValue();
        renderDateRangeCalendars();
        closeFilterMenus({ restoreDateRange: false });
        currentPage = 1;
        renderVideoList(currentContentView);
      });

      dateRangeCalendars.addEventListener("mouseover", (event) => {
        if (!dateRangeStart || dateRangeEnd) return;
        const day = event.target.closest("[data-date-value]");
        if (!day || day.disabled || day.classList.contains("disabled") || dateRangeHover && toDateKey(dateRangeHover) === day.dataset.dateValue) return;
        dateRangeHover = fromDateKey(day.dataset.dateValue);
        renderDateRangeCalendars();
      });

      dateRangeCalendars.addEventListener("mouseleave", () => {
        if (!dateRangeHover || dateRangeEnd) return;
        dateRangeHover = null;
        renderDateRangeCalendars();
      });

      dateRangeClear.addEventListener("click", (event) => {
        event.stopPropagation();
        dateRangeStart = null;
        dateRangeEnd = null;
        dateRangeHover = null;
        committedDateRangeStart = null;
        committedDateRangeEnd = null;
        syncDateRangeValue();
        renderDateRangeCalendars();
        closeFilterMenus({ restoreDateRange: false });
        currentPage = 1;
        renderVideoList(currentContentView);
      });

      filterOptions.forEach((filterOption) => {
        filterOption.addEventListener("click", (event) => {
          event.stopPropagation();
          const field = filterOption.dataset.filterField;
          activeFilters[field] = filterOption.dataset.filterValue;
          filterOptions
            .filter((option) => option.dataset.filterField === field)
            .forEach((option) => {
              option.setAttribute("aria-selected", String(option === filterOption));
            });
          const group = filterOption.closest(".filter-group");
          syncFilterLabels();
          closeFilterMenus();
          currentPage = 1;
          renderVideoList(currentContentView);
          syncStickyDivider();
        });
      });

      filterClears.forEach((filterClear) => {
        filterClear.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          const filterTrigger = filterClear.closest("[data-filter-trigger]");
          const field = filterTrigger.dataset.filterField;
          activeFilters[field] = "";
          filterOptions
            .filter((option) => option.dataset.filterField === field)
            .forEach((option) => option.setAttribute("aria-selected", "false"));
          syncFilterLabels();
          currentPage = 1;
          renderVideoList(currentContentView);
          syncStickyDivider();
        });
      });

      document.addEventListener("click", (event) => {
        if (!event.target.closest(".account-entry")) {
          accountMenu.hidden = true;
          accountEntry.classList.remove("is-open");
          accountTrigger.setAttribute("aria-expanded", "false");
        }
        if (!event.target.closest(".content-filters")) {
          closeFilterMenus();
        } else if (!event.target.closest("[data-date-range-picker]") && !dateRangeDropdown.hidden) {
          closeFilterMenus();
        }
      });

      accountTrigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = !accountMenu.hidden;
        accountEntry.classList.add("suppress-tooltip");
        setActiveTooltipContainer(accountEntry);
        if (!isOpen) {
          suppressTooltipIfHidden(accountEntry, ".account-tooltip");
        }
        accountMenu.hidden = isOpen;
        accountEntry.classList.toggle("is-open", !isOpen);
        accountTrigger.setAttribute("aria-expanded", String(!isOpen));
        closeFilterMenus();
      });

      function getUpdatedTimeValue(updated) {
        if (updated.startsWith("Today")) {
          return Date.parse(`2026-08-14T${updated.split(" ")[1] || "00:00:00"}`);
        }
        if (updated.startsWith("Yesterday")) {
          return Date.parse(`2026-08-13T${updated.split(" ")[1] || "00:00:00"}`);
        }
        return Date.parse(updated);
      }

      function getCreatedOrderValue(item) {
        return Date.parse(firstCreatedTimes[item.id]) || 0;
      }

      function syncVideoSortControls() {
        videoSortButtons.forEach((button) => {
          const direction = button.dataset.videoSort === currentSortKey ? currentSortDirection : null;
          const mark = button.querySelector(".table-sort-mark");
          button.classList.toggle("active", Boolean(direction));
          button.setAttribute("aria-pressed", String(Boolean(direction)));
          mark.classList.toggle("asc", direction === "asc");
          mark.classList.toggle("desc", direction === "desc");
        });
      }

      function getVideoRows(view) {
        if (!window.studioSync.completed) return [];
        const searchQuery = searchInput.value.trim().toLocaleLowerCase();
        const rows = (view === "all" ? [...videoItems] : videoItems.filter((item) => item.type === view))
          .filter((item) => {
            if (!searchQuery) return true;
            return [item.title, item.id].some((value) => String(value).toLocaleLowerCase().includes(searchQuery));
          })
          .filter((item) =>
          Object.entries(activeFilters).every(([field, value]) => {
            if (!value) return true;
            if (["freePaidStatus", "publicationStatus", "visibilityStatus"].includes(field)) {
              return getStatusKey(item[field]) === getStatusKey(value);
            }
            return item[field] === value;
          })
        ).filter((item) => {
          if (!dateRangeStart || !dateRangeEnd) return true;
          const updatedTime = getUpdatedTimeValue(item.updated);
          const startTime = new Date(dateRangeStart.getFullYear(), dateRangeStart.getMonth(), dateRangeStart.getDate()).getTime();
          const endTime = new Date(dateRangeEnd.getFullYear(), dateRangeEnd.getMonth(), dateRangeEnd.getDate(), 23, 59, 59, 999).getTime();
          return updatedTime >= startTime && updatedTime <= endTime;
        });
        const getSortValue = currentSortKey === "updated"
          ? (item) => getUpdatedTimeValue(item.updated)
          : currentSortKey === "firstOnline"
            ? (item) => getUpdatedTimeValue(firstOnlineTimes[item.id])
            : getCreatedOrderValue;
        const direction = currentSortDirection === "asc" ? 1 : -1;
        return rows.sort((a, b) => (getSortValue(a) - getSortValue(b)) * direction);
      }

      function updatePagination(totalRows) {
        const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
        currentPage = Math.min(currentPage, totalPages);
        pagination.hidden = totalRows === 0;
        paginationRange.textContent = t("rowsTotal", totalRows);
        if (!totalRows) {
          pageNumbers.innerHTML = "";
          prevPageButton.disabled = true;
          nextPageButton.disabled = true;
          return;
        }
        pageNumbers.innerHTML = Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return `<button class="pagination-button${page === currentPage ? " current" : ""}" type="button" aria-label="${t("pageLabel", page)}"${page === currentPage ? ' aria-current="page"' : ""} data-page-number="${page}">${page}</button>`;
        }).join("");
        prevPageButton.disabled = currentPage <= 1;
        nextPageButton.disabled = currentPage >= totalPages;
      }

      window.studioSync.count = videoItems.length;
      window.addEventListener('studio:syncchange', () => renderVideoList(currentContentView));

      function renderVideoList(view) {
        syncVideoSortControls();
        if (window.studioSync.pending) {
          updatePagination(0);
          contentList.innerHTML = '<div class="video-empty-state" role="status" aria-label="正在同步内容" aria-busy="true"><span class="studio-sync-loading-ring" aria-hidden="true"></span></div>';
          return;
        }
        const rows = getVideoRows(view);
        updatePagination(rows.length);
        const visibleRows = rows.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        if (!visibleRows.length && !window.StudioAccount.linked && window.studioSync.completed) {
          contentList.innerHTML = `<div class="video-empty-state" role="status"><span class="video-empty-title">${t("noContentYet")}</span></div>`;
          return;
        }
        if (!visibleRows.length) {
          contentList.innerHTML = `
            <div class="video-empty-state" role="status">
              <div class="video-empty-visual" aria-hidden="true">
                <svg viewBox="0 0 80 80" focusable="false">
                  <circle cx="40" cy="40" r="32" fill="currentColor" opacity="0.09"></circle>
                  <rect x="21" y="18" width="38" height="44" rx="4" fill="currentColor" opacity="0.64"></rect>
                  <rect x="29" y="28" width="22" height="4" rx="1" fill="var(--color-bg-container)"></rect>
                  <rect x="29" y="38" width="16" height="4" rx="1" fill="var(--color-bg-container)"></rect>
                  <circle cx="58" cy="57" r="10" fill="currentColor"></circle>
                  <rect x="53" y="55.5" width="10" height="3" rx="1" fill="var(--color-bg-container)"></rect>
                </svg>
              </div>
              <div class="video-empty-copy">
                ${window.StudioAccount.linked
                  ? `<span class="video-empty-title">${t("noContentYet")}</span>`
                  : `<h2 class="video-empty-title">${t("linkAccountFirst")}</h2><p class="video-empty-description">${t("linkAccountDescription")}</p>`}
              </div>
              ${window.StudioAccount.linked ? '' : `<button class="spec-btn primary video-empty-action" type="button" data-link-account>${t("linkAccountAction")}</button>`}
            </div>`;
          return;
        }
        contentList.innerHTML = visibleRows
          .map((item) => {
            const isDraft = getStatusKey(item.publicationStatus) === "draft";
            const isOffline = getStatusKey(item.publicationStatus) === "offline";
            const isLoading = loadingPublicationIds.has(item.id);
            const isRepublishDisabled = isOffline && item.republishDisabled;
            const publicationActionLabel = t(isOffline ? "republish" : "requestOffline");
            const publicationAction = isRepublishDisabled
              ? `<span class="row-action-tooltip-wrap" tabindex="0"><button class="row-action" type="button" disabled>${publicationActionLabel}</button><span class="row-action-tooltip" role="tooltip">${t("republishUnavailable")}</span></span>`
              : `<button class="row-action" type="button" data-toggle-publication="${item.id}"${isLoading ? " disabled aria-busy=\"true\"" : ""}>${isLoading ? '<span class="row-action-spinner" aria-hidden="true"></span>' : ""}${publicationActionLabel}</button>`;
            const videoTitle = `<div class="video-title-tooltip-wrap"><p class="video-title">${item.title}</p></div>`;
            return `
              <article class="video-row${isDraft ? " is-draft" : ""}">
                <div class="video-main">
                  <div class="video-thumb-stack${Number(item.episodes) > 1 ? " has-multiple" : ""}">
                    <div class="video-thumb ${item.type}${isDraft ? " draft" : ""}">
                      ${shortCoverById[item.id] || comicDramaCoverById[item.id] ? `<img class="video-thumb-image" src="${shortCoverById[item.id] || comicDramaCoverById[item.id]}" alt="" loading="lazy">` : ""}
                      <span class="video-duration">${getThumbBadgeLabel(item)}</span>
                    </div>
                  </div>
                  <div class="video-copy">
                    ${videoTitle}
                    <div class="video-tags">
                      <span class="type-tag ${item.type}">${getTypeLabel(item.type)}</span>
                    </div>
                  </div>
                </div>
                <span class="status-text">${isDraft ? "-" : getStatusLabel(item.freePaidStatus)}</span>
                ${renderPublicationStatus(item.publicationStatus, item.publicationNote)}
                <div>
                  <p class="updated-time">${getUpdatedLabel(item.updated)}</p>
                </div>
                <div>
                  <p class="updated-time">${getUpdatedLabel(firstOnlineTimes[item.id])}</p>
                </div>
                <div class="row-actions">
                  <a class="row-action" href="edit.html?${window.StudioAccount.linked ? 'linked=1&' : ''}contentId=${encodeURIComponent(item.id)}&type=${encodeURIComponent(item.type)}&publicationStatus=${encodeURIComponent(item.publicationStatus || "")}&reviewStatus=${encodeURIComponent(item.publicationNote || "")}&updated=${encodeURIComponent(item.updated || "")}&firstPublished=${encodeURIComponent(firstOnlineTimes[item.id] || "")}&tab=details">${t("edit")}</a>
                  ${publicationAction}
                </div>
              </article>
            `;
          })
          .join("");
        window.requestAnimationFrame(syncVideoTitleOverflow);
      }

      function syncVideoTitleOverflow() {
        contentList.querySelectorAll(".video-title-tooltip-wrap").forEach((wrapper) => {
          const title = wrapper.querySelector(".video-title");
          const hasOverflow = title.scrollWidth > title.clientWidth;
          wrapper.classList.toggle("has-overflow", hasOverflow);
          wrapper.tabIndex = hasOverflow ? 0 : -1;
          if (hasOverflow) {
            wrapper.setAttribute("aria-label", title.textContent);
          } else {
            wrapper.removeAttribute("aria-label");
          }
          if (!wrapper.dataset.tooltipBound) {
            wrapper.dataset.tooltipBound = "true";
            wrapper.addEventListener("pointerenter", () => showVideoTitleTooltip(wrapper));
            wrapper.addEventListener("pointerleave", hideVideoTitleTooltip);
            wrapper.addEventListener("focusin", () => showVideoTitleTooltip(wrapper));
            wrapper.addEventListener("focusout", hideVideoTitleTooltip);
          }
        });
      }

      function showVideoTitleTooltip(wrapper) {
        if (!wrapper.classList.contains("has-overflow")) return;
        const title = wrapper.querySelector(".video-title");
        const anchorRect = title.getBoundingClientRect();
        videoTitleTooltip.textContent = title.textContent;
        videoTitleTooltip.classList.add("is-visible");
        const tooltipRect = videoTitleTooltip.getBoundingClientRect();
        const left = Math.min(Math.max(8, anchorRect.left), window.innerWidth - tooltipRect.width - 8);
        const top = Math.max(8, anchorRect.top - tooltipRect.height - 8);
        videoTitleTooltip.style.left = `${left}px`;
        videoTitleTooltip.style.top = `${top}px`;
      }

      function hideVideoTitleTooltip() {
        videoTitleTooltip.classList.remove("is-visible");
      }

      function syncOfflineModalText() {
        if (!offlineModalLayer) return;
        offlineModalTitle.textContent = t("offlineModalTitle");
        const confirmKey = pendingPublicationStatus === "Online" ? "confirmRepublish" : "confirmOffline";
        offlineModalDescription.textContent = pendingOfflineItem ? t(confirmKey, pendingOfflineItem.title) : "";
        offlineModalClose.setAttribute("aria-label", t("closeModal"));
        offlineModalCancel.textContent = t("back");
        offlineModalConfirm.textContent = t(pendingPublicationStatus === "Online" ? "republish" : "confirmRequestOffline");
      }

      function openOfflineModal(item, triggerButton, nextStatus = "Offline") {
        pendingOfflineItem = item;
        pendingPublicationStatus = nextStatus;
        offlineModalTrigger = triggerButton;
        syncOfflineModalText();
        offlineModalLayer.hidden = false;
        window.requestAnimationFrame(() => offlineModalCancel.focus());
      }

      function closeOfflineModal(restoreFocus = true) {
        if (offlineModalLayer.hidden) return;
        offlineModalLayer.hidden = true;
        pendingOfflineItem = null;
        pendingPublicationStatus = "Offline";
        if (restoreFocus) offlineModalTrigger?.focus();
        offlineModalTrigger = null;
      }

      function showGlobalMessage(message) {
        if (!messagePortal || !message) return;
        while (messagePortal.children.length >= 3) {
          messagePortal.lastElementChild.remove();
        }
        const messageElement = document.createElement("div");
        messageElement.className = "feedback-message success";
        messageElement.setAttribute("role", "status");
        messageElement.innerHTML = `
          <span class="message-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle class="message-icon-bg" cx="12" cy="12" r="10"></circle>
              <path class="message-icon-line" d="M8 12.5l2.5 2.5L16.5 9"></path>
            </svg>
          </span>
          <span></span>`;
        messageElement.lastElementChild.textContent = message;
        messagePortal.prepend(messageElement);
        window.setTimeout(() => {
          if (!messageElement.isConnected) return;
          messageElement.classList.add("is-leaving");
          messageElement.addEventListener("animationend", () => messageElement.remove(), { once: true });
        }, 3000);
      }

      function updatePublicationStatus(item, nextStatus) {
        if (loadingPublicationIds.has(item.id)) return;
        loadingPublicationIds.add(item.id);
        renderVideoList(currentContentView);
        window.setTimeout(() => {
          item.publicationStatus = nextStatus;
          item.publicationNote = "";
          loadingPublicationIds.delete(item.id);
          renderVideoList(currentContentView);
          showGlobalMessage(t(nextStatus === "Offline" ? "offlineSuccess" : "republishSuccess"));
        }, 800);
      }

      contentList.addEventListener("click", (event) => {
        const requestButton = event.target.closest("[data-toggle-publication]");
        if (!requestButton || requestButton.disabled) return;
        const item = videoItems.find((video) => video.id === requestButton.dataset.togglePublication);
        if (!item) return;
        if (getStatusKey(item.publicationStatus) === "offline") {
          openOfflineModal(item, requestButton, "Online");
          return;
        }
        openOfflineModal(item, requestButton, "Offline");
      });

      offlineModalLayer.addEventListener("click", (event) => {
        if (event.target.closest("[data-offline-modal-close], [data-offline-modal-cancel], [data-offline-modal-dismiss]")) {
          closeOfflineModal();
        }
      });

      offlineModalConfirm.addEventListener("click", () => {
        if (!pendingOfflineItem) return;
        const item = pendingOfflineItem;
        const nextStatus = pendingPublicationStatus;
        closeOfflineModal(false);
        updatePublicationStatus(item, nextStatus);
      });

      offlineModalDialog.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          closeOfflineModal();
          return;
        }
        if (event.key !== "Tab") return;
        const focusable = [offlineModalClose, offlineModalCancel, offlineModalConfirm];
        const currentIndex = focusable.indexOf(document.activeElement);
        const nextIndex = event.shiftKey
          ? (currentIndex - 1 + focusable.length) % focusable.length
          : (currentIndex + 1) % focusable.length;
        event.preventDefault();
        focusable[nextIndex].focus();
      });

      function setContentView(nextView) {
        currentContentView = nextView;
        currentPage = 1;
        const selectedTab = contentTabs.find((tab) => tab.dataset.contentTab === nextView) || contentTabs[0];
        contentTabs.forEach((tab) => {
          const isSelected = tab.dataset.contentTab === nextView;
          tab.setAttribute("aria-selected", String(isSelected));
          tab.tabIndex = isSelected ? 0 : -1;
        });
        contentPanel.setAttribute("aria-labelledby", selectedTab.id);
        syncContentMenuIndicator(selectedTab);
        renderVideoList(nextView);
        syncStickyDivider();
      }

      function syncContentMenuIndicator(selectedTab = contentTabs.find((tab) => tab.getAttribute("aria-selected") === "true")) {
        if (!contentMenu || !selectedTab) return;
        const menuRect = contentMenu.getBoundingClientRect();
        const tabRect = selectedTab.getBoundingClientRect();
        const indicatorX = tabRect.left - menuRect.left + contentMenu.scrollLeft;
        contentMenu.style.setProperty("--content-indicator-x", `${indicatorX}px`);
        contentMenu.style.setProperty("--content-indicator-width", `${tabRect.width}px`);
      }

      function isElementRendered(node) {
        return Boolean(node && (node.offsetWidth || node.offsetHeight || node.getClientRects().length));
      }

      let stickyDividerFrame = 0;
      let stickyDividerScrolled = false;
      let stickyDividerAtEnd = false;
      let stickyDividerScrollLeft = -1;
      let resizeSettledTimer = 0;

      function syncStickyDivider() {
        if (!isElementRendered(videoListScroll)) return;
        const nextScrollLeft = videoListScroll.scrollLeft;
        const nextScrolled = nextScrollLeft > 0;
        const nextAtEnd = nextScrollLeft + videoListScroll.clientWidth >= videoListScroll.scrollWidth - 1;
        const cardRect = videoListCard.getBoundingClientRect();
        const headerRect = videoListHeaderScroll.getBoundingClientRect();
        const firstHeaderCell = videoListHeaderScroll.querySelector(".video-list-header > :first-child");
        const lastHeaderCell = videoListHeaderScroll.querySelector(".video-list-header > :last-child");
        const shadowTop = Math.max(0, headerRect.top - cardRect.top);
        videoListCard.style.setProperty("--sticky-shadow-top", `${shadowTop}px`);
        if (firstHeaderCell && lastHeaderCell) {
          const firstEdge = firstHeaderCell.getBoundingClientRect().right - cardRect.left;
          const lastEdge = lastHeaderCell.getBoundingClientRect().left - cardRect.left;
          videoListCard.style.setProperty("--sticky-first-edge", `${firstEdge}px`);
          videoListCard.style.setProperty("--sticky-last-edge", `${lastEdge}px`);
        }
        if (nextScrolled !== stickyDividerScrolled) {
          stickyDividerScrolled = nextScrolled;
          videoListCard.classList.toggle("is-scrolled-x", nextScrolled);
        }
        if (nextAtEnd !== stickyDividerAtEnd) {
          stickyDividerAtEnd = nextAtEnd;
          videoListCard.classList.toggle("is-scroll-end", nextAtEnd);
        }
        if (nextScrollLeft !== stickyDividerScrollLeft) {
          stickyDividerScrollLeft = nextScrollLeft;
          videoListHeaderScroll.scrollLeft = nextScrollLeft;
        }
      }

      function scheduleStickyDividerSync() {
        if (stickyDividerFrame) return;
        stickyDividerFrame = window.requestAnimationFrame(() => {
          stickyDividerFrame = 0;
          syncStickyDivider();
        });
      }

      function handleResponsiveResize() {
        hideVideoTitleTooltip();
        document.documentElement.classList.add("is-resizing");
        window.clearTimeout(resizeSettledTimer);
        resizeSettledTimer = window.setTimeout(() => {
          document.documentElement.classList.remove("is-resizing");
        }, 140);
        syncContentMenuIndicator();
        scheduleStickyDividerSync();
        window.requestAnimationFrame(syncVideoTitleOverflow);
      }

      function scrollContentListToTop() {
        const toolbarHeight = Math.ceil(contentToolbar.getBoundingClientRect().height);
        if (workspace && workspace.scrollHeight > workspace.clientHeight) {
          const targetTop = Math.max(
            0,
            workspace.scrollTop + contentPanel.getBoundingClientRect().top - workspace.getBoundingClientRect().top - toolbarHeight
          );
          workspace.scrollTo({ top: targetTop, left: workspace.scrollLeft });
          return;
        }
        window.scrollTo({
          top: Math.max(0, window.scrollY + contentPanel.getBoundingClientRect().top - toolbarHeight),
          left: window.scrollX
        });
      }

      videoListScroll.addEventListener("scroll", () => {
        hideVideoTitleTooltip();
        scheduleStickyDividerSync();
      }, { passive: true });
      workspace?.addEventListener("scroll", () => {
        hideVideoTitleTooltip();
        scheduleStickyDividerSync();
      }, { passive: true });
      window.addEventListener("scroll", () => {
        hideVideoTitleTooltip();
        scheduleStickyDividerSync();
      }, { passive: true });
      window.addEventListener("resize", handleResponsiveResize);

      pageSizeTrigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const shouldOpen = pageSizeMenu.hidden;
        closeFilterMenus();
        pageSizeSelect.classList.toggle("open", shouldOpen);
        pageSizeTrigger.setAttribute("aria-expanded", String(shouldOpen));
        pageSizeMenu.hidden = !shouldOpen;
      });

      pageSizeOptions.forEach((option) => {
        option.addEventListener("click", (event) => {
          event.stopPropagation();
          pageSize = Number(option.dataset.pageSizeOption);
          pageSizeTrigger.dataset.pageSizeValue = option.dataset.pageSizeOption;
          pageSizeOptions.forEach((item) => {
            const isSelected = item === option;
            item.classList.toggle("selected", isSelected);
            item.setAttribute("aria-checked", String(isSelected));
          });
          syncPageSizeLabels();
          currentPage = 1;
          renderVideoList(currentContentView);
          scrollContentListToTop();
          syncStickyDivider();
          closePageSizeMenu();
        });
      });

      pageNumbers.addEventListener("click", (event) => {
        const pageButton = event.target.closest("[data-page-number]");
        if (!pageButton) return;
        currentPage = Number(pageButton.dataset.pageNumber);
        renderVideoList(currentContentView);
        scrollContentListToTop();
        syncStickyDivider();
      });

      pageSizeSelect.addEventListener("click", (event) => {
        event.stopPropagation();
      });

      document.addEventListener("click", closePageSizeMenu);

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closePageSizeMenu();
        }
      });

      pageSizeTrigger.addEventListener("keydown", (event) => {
        if (!["Enter", " "].includes(event.key)) return;
        event.preventDefault();
        pageSizeTrigger.click();
      });

      pageSizeOptions.forEach((option) => {
        option.addEventListener("keydown", (event) => {
          if (!["Enter", " "].includes(event.key)) return;
          event.preventDefault();
          option.click();
        });
      });

      prevPageButton.addEventListener("click", () => {
        currentPage = Math.max(1, currentPage - 1);
        renderVideoList(currentContentView);
        scrollContentListToTop();
        syncStickyDivider();
      });

      nextPageButton.addEventListener("click", () => {
        const totalPages = Math.max(1, Math.ceil(getVideoRows(currentContentView).length / pageSize));
        currentPage = Math.min(totalPages, currentPage + 1);
        renderVideoList(currentContentView);
        scrollContentListToTop();
        syncStickyDivider();
      });

      contentTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          setContentView(tab.dataset.contentTab);
        });
        tab.addEventListener("keydown", (event) => {
          if (!["ArrowLeft", "ArrowRight"].includes(event.key)) {
            return;
          }
          event.preventDefault();
          const offset = event.key === "ArrowRight" ? 1 : -1;
          const nextIndex = (index + offset + contentTabs.length) % contentTabs.length;
          contentTabs[nextIndex].focus();
          setContentView(contentTabs[nextIndex].dataset.contentTab);
        });
      });

      videoSortButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const nextKey = button.dataset.videoSort;
          if (currentSortKey !== nextKey) {
            currentSortKey = nextKey;
            currentSortDirection = "asc";
          } else if (currentSortDirection === "asc") {
            currentSortDirection = "desc";
          } else {
            currentSortKey = null;
            currentSortDirection = null;
          }
          currentPage = 1;
          renderVideoList(currentContentView);
          syncStickyDivider();
        });
      });

      if (useSourceContent) {
        const brand = document.querySelector(".brand");
        const logo = brand.querySelector(".brand-logo");
        brand.setAttribute("aria-label", "爱奇艺创作者工作台");
        logo.src = "assets/images/logo-zh.svg";
        logo.alt = "爱奇艺创作者工作台";
      }
      syncSearchClear();
      setContentView("all");
      syncThemePreference();
      setLanguage(localStorage.getItem("studio-language") || "en");
    

      // Carry the originating view in the edit link, including file:// and new-tab visits.
      contentList.addEventListener("click", rememberContentReturn);
      contentList.addEventListener("auxclick", rememberContentReturn);
      function rememberContentReturn(event) {
        const link = event.target.closest('a[href^="edit.html"]');
        if (!link) return;
        const state = {
          view: currentContentView, page: currentPage, size: pageSize,
          sort: currentSortKey, direction: currentSortDirection,
          search: searchInput.value, filters: { ...activeFilters },
          start: committedDateRangeStart, end: committedDateRangeEnd,
          scroll: [window.scrollX, window.scrollY, workspace.scrollLeft, workspace.scrollTop,
            videoListScroll.scrollLeft, videoListScroll.scrollTop]
        };
        const destination = new URL(location.href);
        destination.searchParams.set("contentReturn", JSON.stringify(state));
        const edit = new URL(link.href);
        edit.searchParams.set("returnTo", destination.pathname.split("/").pop() + destination.search + destination.hash);
        link.href = edit.href;
      }

      function restoreContentReturn() {
        const encoded = new URL(location.href).searchParams.get("contentReturn");
        if (!encoded) return;
        try {
          const state = JSON.parse(encoded);
          if (!state || !["all", "short", "comic-drama"].includes(state.view)) return;
          if (![10, 20, 50, 100].includes(state.size)) return;
          if (!Number.isInteger(state.page) || state.page < 1) return;
          const parseDate = value => value && Number.isFinite(new Date(value).getTime()) ? new Date(value) : null;
          searchInput.value = typeof state.search === "string" ? state.search : "";
          for (const field of Object.keys(activeFilters)) {
            const value = state.filters?.[field];
            activeFilters[field] = filterOptions.some(option => option.dataset.filterField === field && option.dataset.filterValue === value) ? value : "";
          }
          filterOptions.forEach(option => option.setAttribute("aria-selected",
            String(activeFilters[option.dataset.filterField] === option.dataset.filterValue)));
          currentSortKey = ["updated", "firstOnline"].includes(state.sort) ? state.sort : null;
          currentSortDirection = ["asc", "desc"].includes(state.direction) ? state.direction : null;
          dateRangeStart = committedDateRangeStart = parseDate(state.start);
          dateRangeEnd = committedDateRangeEnd = parseDate(state.end);
          if (dateRangeStart) dateRangeView = new Date(dateRangeStart.getFullYear(), dateRangeStart.getMonth(), 1);
          pageSize = state.size;
          pageSizeTrigger.dataset.pageSizeValue = String(pageSize);
          pageSizeOptions.forEach(option => {
            const selected = Number(option.dataset.pageSizeOption) === pageSize;
            option.classList.toggle("selected", selected);
            option.setAttribute("aria-checked", String(selected));
          });
          setContentView(state.view);
          currentPage = state.page;
          setLanguage(currentLanguage);
          syncSearchClear();
          const offsets = Array.isArray(state.scroll) ? state.scroll.map(value => Number.isFinite(value) ? Math.max(0, value) : 0) : [];
          const restoreScroll = () => {
            window.scrollTo(offsets[0] || 0, offsets[1] || 0);
            workspace.scrollTo(offsets[2] || 0, offsets[3] || 0);
            videoListScroll.scrollTo(offsets[4] || 0, offsets[5] || 0);
            syncStickyDivider();
          };
          requestAnimationFrame(() => requestAnimationFrame(restoreScroll));
          window.addEventListener("load", restoreScroll, { once: true });
        } catch (_) {
          // Direct links with an invalid return state keep the ordinary list view.
        }
      }
      restoreContentReturn();
