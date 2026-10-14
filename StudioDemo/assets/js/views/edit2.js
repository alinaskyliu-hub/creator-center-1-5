const messages = {
        en: {
          studio: "Studio",
          languageTooltip: "Language",
          switchLanguage: "Switch language",
          switchToDarkMode: "Dark mode",
          switchToLightMode: "Light mode",
          accountTooltip: "Account",
          accountSetting: "Account Setting",
          signOut: "Sign Out",
          userName: "Mia Studio",
          iqId: "IQ ID: 1461926038",
          upload: "Upload",
          mainSiteAccount: "Main-site account",
          mainSiteAccountUnlinked: "Main-site account: Unlinked",
          mainSiteAccountLinked: "Main-site account: Linked",
          mainSiteAccountName: "User00260922",
          linkedStatus: "Linked",
          linkAccount: "Link Account",
          unlinkedStatus: "Unlinked",
          content: "Content Management",
          analytics: "Analytics",
          subtitles: "Subtitles",
          settings: "Settings",
          pageTitle: "Edit Episode 01 details - Studio",
          contentMenuAria: "Content menu",
          contentFiltersAria: "Content filters",
          all: "All",
          short: "Short",
          comicDrama: "ComicDrama",
          movie: "Movie",
          drama: "Drama",
          anime: "Anime",
          freePaid: "Free/Paid",
          publication: "Publication",
          visibility: "Visibility",
          free: "Free",
          paid: "Paid",
          online: "Online",
          offline: "Offline",
          draft: "Draft",
          public: "Public",
          private: "Private",
          searchPlaceholder: "Search title or Content ID",
          clearSearch: "Clear search",
          video: "Content name",
          freePaidStatus: "Free/Paid Status",
          publicationStatus: "Publication Status",
          updated: "Updated",
          action: "Action",
          pagination: "Pagination",
          previousPage: "Previous page",
          nextPage: "Next page",
          rowsPerPage: "Rows per page",
          rowsTotal: (total) => `${total} items`,
          rowsPerPageLabel: (size) => `${size} / page`,
          pageLabel: (page) => `Page ${page}`,
          noContentYet: "No content yet",
          edit: "Edit",
          delete: "Delete",
          today: "Today",
          yesterday: "Yesterday",
          movieDetails: "Edit Movie details",
          feature: "Feature",
          featureFilm: "Feature film",
          episodeLabel: (number) => `Episode ${String(number).padStart(2, "0")}`,
          editEpisodeTitle: (number) => `Edit Episode ${String(number).padStart(2, "0")} details`,
          episodeEditLink: "Edit this episode",
          episodesCount: (count) => `${count} Episodes`,
          platformGenerated: "Platform generated",
          selfWritten: "Self-written",
          modified: "Modified",
          complete: "Done",
          confirm: "Confirm",
          traditionalChineseSubtitle: "Traditional Chinese subtitles",
          indonesianSubtitle: "Indonesian subtitles",
          thaiSubtitle: "Thai subtitles",
          vietnameseSubtitle: "Vietnamese subtitles",
          titleRequired: "Please enter a title",
          coverRequired: "Please upload a cover",
          paidStatusRequired: "Please select a Free/Paid status",
          ratingRequired: "Please select a rating",
          regionsRequired: "Please select at least one launch region",
          fixRequiredFields: "Please complete the required fields before submitting",
          saveSuccess: "Saved",
          publishSuccess: "Published",
          editAlbumDetails: "Edit Album details",
          editEpisodeDetails: "Edit Episode 01 details",
          save: "Save",
          publish: "Publish",
          republish: "Republish",
          undoChanges: "Undo Changes",
          moreActions: "More actions",
          editContentDetails: "Edit content details",
          basicInformation: "Basic information",
          title: "Title",
          description: "Description",
          cover: "Cover",
          multilingual: "Multilingual",
          reupload: "Re-upload",
          titleWrap: "Title wrap",
          coverLandscape: "16:9 Landscape",
          coverPortrait: "3:4 Portrait",
          coverSquare: "1:1 Square",
          cancel: "Cancel",
          restoreDefault: "Restore default",
          applyAll: "Apply to all",
          applyCurrent: "Apply current",
          distributionSettings: "Distribution settings",
          freePaidStatusLabel: "Free/Paid status",
          ratingInformation: "Rating information",
          allAges: "All ages",
          launchRegions: "Launch regions",
          selectAll: "Select all",
          contentPreview: "Content preview",
          playPreview: "Play preview",
          copyVideoLink: "Copy video link",
          fileName: "File Name",
          episodeInformation: "Episode information",
          ready: "Ready",
          expand: "Expand",
          collapse: "Collapse",
          totalEpisodes: (count) => `${count} total episodes`,
          moreEpisodes: (count) => `${count} more`,
          editEpisodeLabel: (label) => `Edit ${label}`,
          generatedContentEditable: "Platform generated content can be edited again",
          posterMultilingualTitle: "Poster multilingual editing",
          posterMultilingualSubtitle: "Adjust poster images for each language",
          titleMultilingualTitle: "Title multilingual editing",
          descriptionMultilingualTitle: "Description multilingual editing",
          coverTitlePanelTitle: (label) => `${label} title wrap`,
          requiredError: (label) => `${label} is required`,
          maxLengthError: (label, max) => `${label} can be up to ${max} characters`,
          copySuccess: "Copied",
          copyFailed: "Copy failed",
          changeSuccess: "Saved",
          addSubtitle: "Add subtitle",
          uploadSubtitle: "Upload subtitle",
          uploadedSubtitleList: "Uploaded subtitle list",
          generatedSubtitles: "Generated subtitles",
          englishSubtitle: "English subtitles",
          chineseSubtitle: "Chinese subtitles",
          platformGenerated: "Platform generated",
          subtitleAddModalTitle: "Add subtitle",
          subtitleEditModalTitle: "Edit subtitle model",
          videoPreview: "Video preview",
          subtitleEditor: "Subtitle editor",
          subtitleUploadProgress: (value) => `Uploading ${value}`,
          subtitleUploadSuccess: "Upload complete",
          subtitleUploadFailed: "Upload failed",
          retry: "Retry",
          deleteFile: (name) => `Delete ${name}`,
          add: "Add",
          added: "Added",
          videoTooShort: "The sample video is shorter than 20 seconds",
          videoLoadFailed: "Video failed to load. Please check the network and try again",
          close: "Close"
        },
        zh: {
          studio: "Studio",
          languageTooltip: "语言",
          switchLanguage: "切换语言",
          switchToDarkMode: "夜间模式",
          switchToLightMode: "浅色模式",
          accountTooltip: "账号",
          accountSetting: "账号设置",
          signOut: "退出登录",
          userName: "Mia Studio",
          iqId: "IQ ID：1461926038",
          upload: "上传",
          mainSiteAccount: "主站账户",
          mainSiteAccountUnlinked: "主站账户：未绑定",
          mainSiteAccountLinked: "主站账户：已绑定",
          mainSiteAccountName: "User00260922",
          linkedStatus: "已绑定",
          linkAccount: "去绑定",
          unlinkedStatus: "未绑定",
          content: "内容管理",
          analytics: "数据分析",
          subtitles: "字幕",
          settings: "设置",
          pageTitle: "编辑第 01 集详情 - Studio",
          contentMenuAria: "内容菜单",
          contentFiltersAria: "内容筛选",
          all: "全部",
          short: "短剧",
          comicDrama: "漫剧",
          movie: "电影",
          drama: "电视剧",
          anime: "动漫",
          freePaid: "免费/付费",
          publication: "发布状态",
          visibility: "可见性",
          free: "免费",
          paid: "付费",
          online: "上线",
          offline: "已下线",
          draft: "草稿",
          public: "公开",
          private: "私密",
          searchPlaceholder: "搜索标题或 Content ID",
          clearSearch: "清除搜索",
          video: "内容名称",
          freePaidStatus: "免费/付费状态",
          publicationStatus: "发布状态",
          updated: "更新时间",
          action: "操作",
          pagination: "分页",
          previousPage: "上一页",
          nextPage: "下一页",
          rowsPerPage: "每页条数",
          rowsTotal: (total) => `共 ${total} 条`,
          rowsPerPageLabel: (size) => `${size} 条/页`,
          pageLabel: (page) => `第 ${page} 页`,
          noContentYet: "暂无内容",
          edit: "编辑",
          delete: "删除",
          today: "今天",
          yesterday: "昨天",
          movieDetails: "编辑电影详情",
          feature: "正片",
          featureFilm: "电影正片",
          episodeLabel: (number) => `第 ${String(number).padStart(2, "0")} 集`,
          editEpisodeTitle: (number) => `编辑第 ${String(number).padStart(2, "0")} 集详情`,
          episodeEditLink: "进入本集编辑",
          episodesCount: (count) => `${count} 集`,
          platformGenerated: "平台生成",
          selfWritten: "自行撰写",
          modified: "已修改",
          complete: "完成",
          confirm: "确认",
          traditionalChineseSubtitle: "繁体中文字幕",
          indonesianSubtitle: "印尼语字幕",
          thaiSubtitle: "泰语字幕",
          vietnameseSubtitle: "越南语字幕",
          titleRequired: "请输入标题",
          coverRequired: "请上传封面",
          paidStatusRequired: "请选择免费/付费状态",
          ratingRequired: "请选择分级信息",
          regionsRequired: "请至少选择一个上线地区",
          fixRequiredFields: "请完善必填项后再提交",
          saveSuccess: "保存成功",
          publishSuccess: "发布成功",
          editAlbumDetails: "编辑专辑详情",
          editEpisodeDetails: "编辑第 01 集详情",
          save: "保存",
          publish: "发布",
          republish: "重新发布",
          undoChanges: "撤销更改",
          moreActions: "更多操作",
          editContentDetails: "编辑内容详情",
          basicInformation: "基本信息",
          title: "标题",
          description: "描述",
          cover: "封面",
          multilingual: "多语言",
          reupload: "重新上传",
          titleWrap: "标题折行",
          coverLandscape: "16:9 横版",
          coverPortrait: "3:4 竖版",
          coverSquare: "1:1 方图",
          cancel: "取消",
          restoreDefault: "恢复默认",
          applyAll: "修改所有",
          applyCurrent: "修改当前",
          distributionSettings: "分发设置",
          freePaidStatusLabel: "免费/付费状态",
          ratingInformation: "评级信息",
          allAges: "全年龄",
          launchRegions: "上线地区",
          selectAll: "全选",
          contentPreview: "内容预览",
          playPreview: "播放预览",
          copyVideoLink: "复制视频链接",
          fileName: "文件名",
          episodeInformation: "剧集信息",
          ready: "就绪",
          expand: "展开",
          collapse: "收起",
          totalEpisodes: (count) => `共 ${count} 集`,
          moreEpisodes: (count) => `还有 ${count} 集`,
          editEpisodeLabel: (label) => `编辑${label}`,
          generatedContentEditable: "平台生成内容可重新编辑",
          posterMultilingualTitle: "海报图多语言调整",
          posterMultilingualSubtitle: "按语言调整对应海报图",
          titleMultilingualTitle: "标题多语言编辑",
          descriptionMultilingualTitle: "描述多语言编辑",
          coverTitlePanelTitle: (label) => `${label} 标题折行`,
          requiredError: (label) => `${label}为必填项`,
          maxLengthError: (label, max) => `${label}最长${max}个字`,
          copySuccess: "复制成功",
          copyFailed: "复制失败",
          changeSuccess: "修改成功",
          addSubtitle: "添加字幕",
          uploadSubtitle: "上传字幕",
          uploadedSubtitleList: "已上传字幕列表",
          generatedSubtitles: "生成字幕",
          englishSubtitle: "英文字幕",
          chineseSubtitle: "中文字幕",
          platformGenerated: "平台生成",
          subtitleAddModalTitle: "添加字幕",
          subtitleEditModalTitle: "编辑字幕模型",
          videoPreview: "视频预览",
          subtitleEditor: "字幕编辑器",
          subtitleUploadProgress: (value) => `上传中 ${value}`,
          subtitleUploadSuccess: "上传完成",
          subtitleUploadFailed: "上传失败",
          retry: "点击重试",
          deleteFile: (name) => `删除 ${name}`,
          add: "添加",
          added: "已添加",
          videoTooShort: "视频案例不足20s，请检查视频源",
          videoLoadFailed: "视频加载失败，请检查网络后重试",
          close: "关闭"
        }
      };

      const trigger = document.querySelector(".language-trigger");
      const languageSwitch = document.querySelector(".language-switch");
      const themeSwitch = document.querySelector(".theme-switch");
      const menu = document.querySelector(".language-menu");
      const options = document.querySelectorAll(".language-option");
      const accountEntry = document.querySelector(".account-entry");
      const accountTrigger = document.querySelector(".account-trigger");
      const accountMenu = document.querySelector(".account-menu");
      const themeToggle = document.querySelector("[data-theme-toggle]");
      const themeTooltip = document.querySelector("[data-theme-tooltip]");
      const contentTabs = Array.from(document.querySelectorAll("[data-content-tab]"));
      const workspace = document.querySelector(".workspace");
      const contentView = document.querySelector(".content-view");
      const contentToolbar = document.querySelector(".content-toolbar-frame");
      const contentPanel = document.querySelector("#content-panel");
      const videoListCard = document.querySelector(".video-list-card");
      const videoListHeaderScroll = document.querySelector("[data-video-list-header-scroll]");
      const videoListScroll = document.querySelector("[data-video-list-scroll]");
      const contentList = document.querySelector("[data-video-list]");
      const searchInput = document.querySelector("[data-search-input]");
      const searchClear = document.querySelector("[data-search-clear]");
      const filterTriggers = Array.from(document.querySelectorAll("[data-filter-trigger]"));
      const filterOptions = Array.from(document.querySelectorAll("[data-filter-option]"));
      const pageSizeSelect = document.querySelector("[data-page-size]");
      const pageSizeTrigger = document.querySelector("[data-page-size-trigger]");
      const pageSizeLabel = document.querySelector("[data-page-size-label]");
      const pageSizeMenu = document.querySelector("[data-page-size-menu]");
      const pageSizeOptions = Array.from(document.querySelectorAll("[data-page-size-option]"));
      const paginationRange = document.querySelector("[data-pagination-range]");
      const pageNumbers = document.querySelector("[data-page-numbers]");
      const prevPageButton = document.querySelector("[data-page-prev]");
      const nextPageButton = document.querySelector("[data-page-next]");
      let currentContentView = "all";
      let currentLanguage = "en";
      let currentPage = 1;
      let pageSize = Number(pageSizeTrigger.dataset.pageSizeValue);
      const activeFilters = {
        freePaidStatus: "",
        publicationStatus: ""
      };
      const videoItems = [
        {
          type: "short",
          title: "Launch Teaser",
          id: "VID-2408-0192",
          duration: "00:42",
          episodes: 12,
          format: "1080x1920",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          visibilityStatus: "Public",
          updated: "Today 14:26"
        },
        {
          type: "short",
          title: "Behind the Scene",
          id: "VID-2408-0164",
          duration: "00:28",
          episodes: 8,
          format: "1080x1920",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Aug 10, 2026"
        },
        {
          type: "short",
          title: "Creator Challenge",
          id: "VID-2408-0142",
          duration: "00:36",
          episodes: 16,
          format: "1080x1920",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          visibilityStatus: "Public",
          updated: "Aug 7, 2026"
        },
        {
          type: "short",
          title: "Weekend Recap",
          id: "VID-2408-0128",
          duration: "00:51",
          episodes: 10,
          format: "1080x1920",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Aug 5, 2026"
        },
        {
          type: "comic-drama",
          title: "Moonlit Bistro",
          id: "VID-2408-0187",
          duration: "03:18",
          episodes: 6,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Yesterday 18:40"
        },
        {
          type: "comic-drama",
          title: "Roommate Contract",
          id: "VID-2408-0179",
          duration: "02:44",
          episodes: 8,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Offline",
          visibilityStatus: "Public",
          updated: "Aug 13, 2026"
        },
        {
          type: "comic-drama",
          title: "Office Crush",
          id: "VID-2408-0168",
          duration: "03:05",
          episodes: 10,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Aug 11, 2026"
        },
        {
          type: "comic-drama",
          title: "Delivery Mix-up",
          id: "VID-2408-0147",
          duration: "02:58",
          episodes: 12,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Offline",
          visibilityStatus: "Public",
          updated: "Aug 8, 2026"
        },
        {
          type: "drama",
          title: "Character Moment",
          id: "VID-2408-0158",
          duration: "02:06",
          episodes: 18,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          visibilityStatus: "Public",
          updated: "Aug 9, 2026"
        },
        {
          type: "drama",
          title: "Second Chance",
          id: "VID-2408-0151",
          duration: "07:36",
          episodes: 24,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Aug 7, 2026"
        },
        {
          type: "drama",
          title: "Evidence Board",
          id: "VID-2408-0136",
          duration: "09:12",
          episodes: 16,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          visibilityStatus: "Public",
          updated: "Aug 4, 2026"
        },
        {
          type: "drama",
          title: "Rainy Street",
          id: "VID-2408-0124",
          duration: "08:48",
          episodes: 20,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Aug 2, 2026"
        },
        {
          type: "anime",
          title: "Harbor Lights",
          id: "VID-2408-0181",
          duration: "28:14",
          episodes: 32,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Aug 11, 2026"
        },
        {
          type: "anime",
          title: "Silent Witness",
          id: "VID-2408-0162",
          duration: "31:08",
          episodes: 40,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Offline",
          visibilityStatus: "Public",
          updated: "Aug 6, 2026"
        },
        {
          type: "anime",
          title: "Northern Promise",
          id: "VID-2408-0144",
          duration: "26:52",
          episodes: 36,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Aug 3, 2026"
        },
        {
          type: "anime",
          title: "Glass City",
          id: "VID-2408-0121",
          duration: "33:19",
          episodes: 28,
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          visibilityStatus: "Public",
          updated: "Jul 30, 2026"
        },
        {
          type: "movie",
          title: "Festival",
          id: "VID-2408-0173",
          duration: "01:57:50",
          format: "4K",
          freePaidStatus: "Free",
          publicationStatus: "Online",
          visibilityStatus: "Public",
          updated: "Aug 12, 2026"
        },
        {
          type: "movie",
          title: "Premiere Red Carpet",
          id: "VID-2408-0155",
          duration: "02:08:16",
          format: "4K",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Aug 9, 2026"
        },
        {
          type: "movie",
          title: "Action Set Piece",
          id: "VID-2408-0133",
          duration: "01:46:38",
          format: "",
          freePaidStatus: "Free",
          publicationStatus: "Offline",
          visibilityStatus: "Public",
          updated: "Aug 4, 2026"
        },
        {
          type: "movie",
          title: "Director Commentary",
          id: "VID-2408-0119",
          duration: "02:14:05",
          format: "4K",
          freePaidStatus: "Paid",
          publicationStatus: "Draft",
          visibilityStatus: "Private",
          updated: "Aug 1, 2026"
        }
      ];

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
          movie: "movie",
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
          Offline: "offline",
          Draft: "draft",
          Public: "public",
          Private: "private",
          免费: "free",
          付费: "paid",
          上线: "online",
          已上线: "online",
          在线: "online",
          已下线: "offline",
          下线: "offline",
          草稿: "draft",
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
        return statusKey === "online" ? "publish" : statusKey === "offline" ? "offline" : "draft";
      }

      function getPublicationIcon(value) {
        const statusKey = getStatusKey(value);
        if (statusKey === "online") {
          return `
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
            </svg>
          `;
        }
        if (statusKey === "offline") {
          return `
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 12h10" />
            </svg>
          `;
        }
        return `
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <path d="M14 3v6h6" />
            <path d="M8 15h4" />
          </svg>
        `;
      }

      function renderPublicationStatus(value) {
        return `<span class="status-pill ${getPublicationClass(value)}">${getPublicationIcon(value)}<span>${getStatusLabel(value)}</span></span>`;
      }

      function syncPublicationNode(node, value) {
        if (!node) return;
        node.className = `status-pill ${getPublicationClass(value)}`;
        node.innerHTML = `${getPublicationIcon(value)}<span>${getStatusLabel(value)}</span>`;
      }

      function getThumbBadgeLabel(item) {
        return item.type === "movie" ? item.duration : `${item.episodes} Episodes`;
      }

      function getUpdatedLabel(updated) {
        if (updated.startsWith("Today")) {
          return updated.replace("Today", t("today"));
        }
        if (updated.startsWith("Yesterday")) {
          return updated.replace("Yesterday", t("yesterday"));
        }
        const timestamp = Date.parse(updated);
        if (Number.isNaN(timestamp)) {
          return updated;
        }
        return new Intl.DateTimeFormat(currentLanguage === "zh" ? "zh-CN" : "en-US", {
          year: "numeric",
          month: currentLanguage === "zh" ? "numeric" : "short",
          day: "numeric"
        }).format(timestamp);
      }

      function syncFilterLabels() {
        filterTriggers.forEach((filterTrigger) => {
          const field = filterTrigger.dataset.filterField;
          const selectedValue = activeFilters[field];
          const valueNode = filterTrigger.querySelector("[data-filter-value]");
          if (field === "publicationStatus" && selectedValue) {
            valueNode.innerHTML = renderPublicationStatus(selectedValue);
          } else {
            valueNode.textContent = selectedValue ? getStatusLabel(selectedValue) : t("all");
          }
        });
      }

      function syncFilterOptionLabels() {
        filterOptions.forEach((option) => {
          const value = option.dataset.filterValue;
          if (option.dataset.filterField === "publicationStatus" && value) {
            option.innerHTML = renderPublicationStatus(value);
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
        const nextLang = messages[lang] ? lang : "en";
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
        options.forEach((option) => {
          option.setAttribute("aria-selected", String(option.dataset.lang === nextLang));
        });
        syncFilterLabels();
        syncFilterOptionLabels();
        syncPageSizeLabels();
        renderVideoList(currentContentView);
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

      const tooltipContainers = [languageSwitch, themeSwitch, accountEntry].filter(Boolean);

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

      function closeFilterMenus() {
        filterTriggers.forEach((filterTrigger) => {
          filterTrigger.setAttribute("aria-expanded", "false");
          filterTrigger.closest(".filter-group").querySelector(".filter-menu").hidden = true;
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

      searchInput.addEventListener("input", syncSearchClear);

      searchClear.addEventListener("click", (event) => {
        event.preventDefault();
        searchInput.value = "";
        syncSearchClear();
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
          menu.hidden = true;
          languageSwitch.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          accountMenu.hidden = true;
          accountEntry.classList.remove("is-open");
          accountTrigger.setAttribute("aria-expanded", "false");
        });
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

      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = !menu.hidden;
        languageSwitch.classList.add("suppress-tooltip");
        setActiveTooltipContainer(languageSwitch);
        if (!isOpen) {
          suppressTooltipIfHidden(languageSwitch, ".language-tooltip");
        }
        menu.hidden = isOpen;
        languageSwitch.classList.toggle("is-open", !isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
        accountMenu.hidden = true;
        accountEntry.classList.remove("is-open");
        accountTrigger.setAttribute("aria-expanded", "false");
        closeFilterMenus();
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          languageSwitch.classList.add("suppress-tooltip");
          setLanguage(option.dataset.lang);
          menu.hidden = true;
          languageSwitch.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          trigger.blur();
          option.blur();
        });
      });

      document.addEventListener("click", (event) => {
        if (!event.target.closest(".language-switch")) {
          menu.hidden = true;
          languageSwitch.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
        }
        if (!event.target.closest(".account-entry")) {
          accountMenu.hidden = true;
          accountEntry.classList.remove("is-open");
          accountTrigger.setAttribute("aria-expanded", "false");
        }
        if (!event.target.closest(".content-filters")) {
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
        menu.hidden = true;
        languageSwitch.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        closeFilterMenus();
      });

      function getUpdatedTimeValue(updated) {
        if (updated.startsWith("Today")) {
          return Date.parse(`2026-08-14T${updated.split(" ")[1] || "00:00"}:00`);
        }
        if (updated.startsWith("Yesterday")) {
          return Date.parse(`2026-08-13T${updated.split(" ")[1] || "00:00"}:00`);
        }
        return Date.parse(updated);
      }

      function getVideoRows(view) {
        return (
          view === "all"
            ? [...videoItems].sort((a, b) => getUpdatedTimeValue(b.updated) - getUpdatedTimeValue(a.updated))
            : videoItems.filter((item) => item.type === view)
        ).filter((item) =>
          Object.entries(activeFilters).every(([field, value]) => {
            if (!value) return true;
            if (["freePaidStatus", "publicationStatus", "visibilityStatus"].includes(field)) {
              return getStatusKey(item[field]) === getStatusKey(value);
            }
            return item[field] === value;
          })
        );
      }

      function updatePagination(totalRows) {
        const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
        currentPage = Math.min(currentPage, totalPages);
        paginationRange.textContent = t("rowsTotal", totalRows);
        if (!totalRows) {
          pageNumbers.innerHTML = "";
          prevPageButton.disabled = true;
          nextPageButton.disabled = true;
          return;
        }
        pageNumbers.innerHTML = Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return `<button class="pagination-button${page === currentPage ? " current" : ""}" type="button" aria-label="${t("pageLabel", page)}" data-page-number="${page}">${page}</button>`;
        }).join("");
        prevPageButton.disabled = currentPage <= 1;
        nextPageButton.disabled = currentPage >= totalPages;
      }

      function renderVideoList(view) {
        const rows = getVideoRows(view);
        updatePagination(rows.length);
        const visibleRows = rows.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        if (!visibleRows.length) {
          contentList.innerHTML = `<div class="video-empty-state">${t("noContentYet")}</div>`;
          return;
        }
        contentList.innerHTML = visibleRows
          .map((item) => {
            const isDraft = getStatusKey(item.publicationStatus) === "draft";
            return `
              <article class="video-row">
                <div class="video-main">
                  <div class="video-thumb ${item.type}${isDraft ? " draft" : ""}">
                    <span class="video-duration">${getThumbBadgeLabel(item)}</span>
                  </div>
                  <div class="video-copy">
                    <p class="video-title">${item.title}</p>
                    <p class="video-subtitle">${item.id}</p>
                    <div class="video-tags">
                      <span class="type-tag ${item.type}">${getTypeLabel(item.type)}</span>
                    </div>
                  </div>
                </div>
                <span class="status-text">${isDraft ? "-" : getStatusLabel(item.freePaidStatus)}</span>
                ${renderPublicationStatus(item.publicationStatus)}
                <div>
                  <p class="updated-time">${getUpdatedLabel(item.updated)}</p>
                </div>
                <div class="row-actions">
                  <a class="row-action" href="edit.html?${window.StudioAccount.linked ? 'linked=1&' : ''}contentId=${encodeURIComponent(item.id)}&type=${encodeURIComponent(item.type)}">${t("edit")}</a>
                  <button class="row-action icon-only" type="button" aria-label="${t("delete")}">
                    <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M3 6h18" />
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                    </svg>
                  </button>
                </div>
              </article>
            `;
          })
          .join("");
      }

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
        renderVideoList(nextView);
        syncStickyDivider();
      }

      function isElementRendered(node) {
        return Boolean(node && (node.offsetWidth || node.offsetHeight || node.getClientRects().length));
      }

      let stickyDividerFrame = 0;
      let stickyDividerScrolled = false;
      let stickyDividerScrollLeft = -1;
      let resizeSettledTimer = 0;

      function syncStickyDivider() {
        if (!isElementRendered(videoListScroll)) return;
        const nextScrollLeft = videoListScroll.scrollLeft;
        const nextScrolled = nextScrollLeft > 0;
        if (nextScrolled !== stickyDividerScrolled) {
          stickyDividerScrolled = nextScrolled;
          videoListCard.classList.toggle("is-scrolled-x", nextScrolled);
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
        document.documentElement.classList.add("is-resizing");
        window.clearTimeout(resizeSettledTimer);
        resizeSettledTimer = window.setTimeout(() => {
          document.documentElement.classList.remove("is-resizing");
        }, 140);
        scheduleStickyDividerSync();
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

      videoListScroll.addEventListener("scroll", scheduleStickyDividerSync, { passive: true });
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
          pageSizeOptions.forEach((item) => item.classList.toggle("selected", item === option));
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

      syncSearchClear();
      setContentView("all");
      syncThemePreference();
      setLanguage(localStorage.getItem("studio-language") || "en");
    