const messages = {
        en: {
          studio: "创作者工作台",
          languageTooltip: "Language",
          switchLanguage: "Switch language",
          switchToDarkMode: "Dark mode",
          switchToLightMode: "Light mode",
          accountTooltip: "Account",
          accountSetting: "账号设置",
          signOut: "Sign Out",
          userName: "米娅工作室",
          iqId: "爱奇艺账号：1461926038",
          upload: "Upload",
          mainSiteAccount: "Main-site account",
          mainSiteAccountUnlinked: "Main-site account: Unlinked",
          mainSiteAccountLinked: "Main-site account: Linked",
          mainSiteAccountName: "用户00260922",
          linkedStatus: "Linked",
          linkAccount: "Link Account",
          unlinkedStatus: "Unlinked",
          content: "Content Management",
          analytics: "Analytics",
          subtitles: "Subtitles",
          settings: "Settings",
          pageTitle: "Edit Album details - 创作者工作台",
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
          publishing: "Publishing",
          offline: "Offline",
          draft: "Draft",
          reviewPending: "Under review",
          reviewRejected: "Review rejected",
          reviewApproved: "Review passed",
          public: "Public",
          private: "Private",
          searchPlaceholder: "Search title or Content ID",
          clearSearch: "Clear search",
          clearFilter: "Clear filter",
          video: "Content name",
          freePaidStatus: "Free/Paid Status",
          publicationStatus: "Publication Status",
          updated: "Updated",
          firstPublished: "First published",
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
          featureFilm: "Feature film",
          episodeLabel: (number) => `Episode ${number}`,
          episodeEditLink: "Edit this episode",
          platformGenerated: "Platform generated",
          modified: "Modified",
          complete: "Done",
          titleRequired: "Please enter a title",
          coverRequired: "Please upload a cover",
          coverUploadGuidance: "Cover upload guidance",
          coverFormatRequirement: "Cover image requirements: We recommend uploading at least one landscape and one portrait image. You can select multiple images at once. Each image must be no larger than 5 MB and must be in jpg / png format.",
          coverRecommendation: "Cover image recommendations: Upload high-resolution images and avoid cropped faces or obscured title text. High-quality covers can help your content reach more distribution placements.",
          coverTitleConsistency: "The title in the cover image must match the content title.",
          paidStatusRequired: "Please select a Free/Paid status",
          paidStatusLockedHint: "Consistent with the domestic iQIYI account; changes are currently unavailable.",
          ratingRequired: "Please select a rating",
          regionsRequired: "Please select at least one launch region",
          fixRequiredFields: "Please complete the required fields before submitting",
          saveSuccess: "Saved",
          publishSuccess: "Published",
          publishingSubmission: "Submitting for publication",
          publishReviewSuccess: "Submitted successfully. Please wait for review.",
          editAlbumDetails: "Album details",
          backToContentManagement: "Back to Content Management",
          watchOnIq: "View on iq.com",
          episodeCountShort: (count) => `${count} eps`,
          viewEpisodes: "Episode details",
          episodeName: "Episode name",
          editSubtitles: "Edit subtitles",
          batchEditSubtitles: "Batch edit subtitles",
          subtitleFileNameHint: "The language code in the file name will be matched automatically, e.g. episode01.zh-CN.srt",
          subtitleFormatNote: "Only .srt, .vtt, .ass and .ssa formats are supported",
          batchUploadSubtitles: "Batch upload subtitles",
          batchUploadNamingHint: "The system identifies the language from the file name. Please follow the naming convention.",
          subtitleLanguage: "Language",
          subtitleFile: "Subtitle file",
          fileSource: "File source",
          uploadStatus: "Upload status",
          aiGenerated: "AI generated",
          manualLabel: "Manual",
          sourceAiGenerated: "Source: AI generated",
          sourceManual: "Source: Manual",
          uploaded: "Uploaded",
          uploading: "Uploading",
          invalidSubtitleFormat: "Upload failed. Only .srt, .vtt, .ass and .ssa files are supported.",
          uploadFailedRetry: "Upload failed. Please try again.",
          subtitleUploadEffectiveAfterPublish: "Uploaded. Changes take effect after publishing.",
          saving: "Saving",
          deleteSubtitleTitle: "Delete subtitle?",
          deleteSubtitleDescription: "The subtitle file will be removed after saving.",
          unsavedSubtitleTitle: "Save changes before closing?",
          unsavedSubtitleDescription: "If you exit, all changes made this time will be discarded.",
          confirmExit: "Exit without saving",
          saveChanges: "Save changes",
          unpublishedChangesTitle: "You have unpublished changes. Publish them?",
          unpublishedChangesDescription: "Publishing will apply the changes before returning to Content Management.",
          discardChanges: "Don't save",
          saveAndClose: "Save and close",
          modify: "Modify",
          simplifiedChinese: "Simplified Chinese",
          english: "英文",
          traditionalChinese: "繁体中文",
          thai: "泰语",
          malay: "马来语",
          indonesian: "印尼语",
          vietnamese: "越南语",
          korean: "韩语",
          japanese: "日语",
          spanish: "西班牙语",
          episodePreview: "Episode preview",
          subtitlePreview: "Subtitle preview",
          playEpisodePreview: "Play episode preview",
          editNavigation: "Edit navigation",
          editSections: "Edit sections",
          save: "Save",
          publish: "Publish",
          republish: "Republish",
          undoChanges: "Undo Changes",
          moreActions: "More actions",
          editContentDetails: "Edit content details",
          basicInformation: "Basic information",
          title: "Title",
          oneLineDescription: "One-line description",
          description: "Description",
          cover: "Cover",
          multilingual: "Multilingual",
          reupload: "Re-upload",
          titleWrap: "Title wrap",
          coverLandscape: "16:9 Landscape",
          coverPortrait: "3:4 Portrait",
          coverLandscapeInfo: "Landscape cover upload requirements",
          coverPortraitInfo: "Portrait cover upload requirements",
          coverLandscapeTooltip: "PNG only, up to 500 KB, maximum dimensions 1920 × 1080 px",
          coverPortraitTooltip: "PNG only, up to 500 KB, maximum dimensions 1920 × 2560 px",
          publishingEditDisabled: "This content is currently being published and cannot be edited.",
          reviewPendingEditDisabled: "This content is currently under review and cannot be edited.",
          reviewRejectedMessage: "This content did not pass review: 1. The cover does not match the title (Simplified Chinese/English); 2. The subtitles and dialogue are out of sync in episodes 1–3 (English/Thai/Malay).",
          coverReviewRejectedMismatch: "Review failed: Cover and title mismatch",
          coverMismatchGuidance: "The cover and title do not match in Simplified Chinese/English. Please replace the cover.",
          titleReviewReason: "Cover and title mismatch (Simplified Chinese/English)",
          coverReviewReason: "Cover and title mismatch (Simplified Chinese/English)",
          subtitleReviewRejectedSync: "Review failed: Subtitles and dialogue are out of sync",
          subtitleSyncGuidance: "The subtitles and dialogue are out of sync in English/Thai/Malay. Please edit the subtitles.",
          coverSquare: "1:1 Square",
          cancel: "Cancel",
          restoreDefault: "Restore default",
          applyAll: "Apply to all",
          applyCurrent: "Apply current",
          tags: "Tags",
          selectTags: "Select tags",
          distributionSettings: "Distribution settings",
          freePaidStatusLabel: "Free/Paid status",
          ratingInformation: "Rating information",
          allAges: "All ages",
          launchRegions: "Launch regions",
          selectAll: "Select all",
          contentPreview: "内容预览",
          playPreview: "Play preview",
          copyVideoLink: "Copy video link",
          fileName: "File Name",
          videoId: "Video ID",
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
          close: "Close"
        },
        zh: {
          studio: "创作者工作台",
          languageTooltip: "语言",
          switchLanguage: "切换语言",
          switchToDarkMode: "夜间模式",
          switchToLightMode: "浅色模式",
          accountTooltip: "账号",
          accountSetting: "账号设置",
          signOut: "退出登录",
          userName: "米娅工作室",
          iqId: "爱奇艺账号：1461926038",
          upload: "上传",
          mainSiteAccount: "主站账户",
          mainSiteAccountUnlinked: "主站账户：未绑定",
          mainSiteAccountLinked: "主站账户：已绑定",
          mainSiteAccountName: "用户00260922",
          linkedStatus: "已绑定",
          linkAccount: "去绑定",
          unlinkedStatus: "未绑定",
          content: "内容管理",
          analytics: "数据分析",
          subtitles: "字幕",
          settings: "设置",
          pageTitle: "编辑专辑详情 - 创作者工作台",
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
          online: "已上线",
          publishing: "发布中",
          offline: "已下线",
          draft: "草稿",
          reviewPending: "审核中",
          reviewRejected: "审核不通过",
          reviewApproved: "审核通过",
          public: "公开",
          private: "私密",
          searchPlaceholder: "搜索标题或内容编号",
          clearSearch: "清除搜索",
          clearFilter: "清除筛选",
          video: "内容名称",
          freePaidStatus: "免费/付费状态",
          publicationStatus: "发布状态",
          updated: "更新时间",
          firstPublished: "首次发布时间",
          action: "操作",
          pagination: "分页",
          previousPage: "上一页",
          nextPage: "下一页",
          rowsPerPage: "每页条数",
          rowsTotal: (total) => `共 ${total} 条`,
          rowsPerPageLabel: (size) => `${size} 条 / 页`,
          pageLabel: (page) => `第 ${page} 页`,
          noContentYet: "暂无内容",
          edit: "编辑",
          delete: "删除",
          today: "今天",
          yesterday: "昨天",
          movieDetails: "编辑电影详情",
          featureFilm: "电影正片",
          episodeLabel: (number) => `第 ${number} 集`,
          episodeEditLink: "进入本集编辑",
          platformGenerated: "平台生成",
          modified: "已修改",
          complete: "完成",
          titleRequired: "请输入标题",
          coverRequired: "请上传封面",
          coverUploadGuidance: "封面图上传说明",
          coverFormatRequirement: "封面图格式要求：建议横图、竖图各至少一张，可同时选择多张图上传，每张图不超过5兆字节，支持常见图片格式。",
          coverRecommendation: "封面图建议：上传高清封面图、同时避免出现人脸裁切、剧名文字遮挡等问题，优质封面图会给作品带来更多场景分发",
          coverTitleConsistency: "封面图内标题须与标题一致",
          paidStatusRequired: "请选择免费/付费状态",
          paidStatusLockedHint: "同国内爱奇艺号保持一致，暂不支持修改",
          ratingRequired: "请选择分级信息",
          regionsRequired: "请至少选择一个上线地区",
          fixRequiredFields: "请完善必填项后再提交",
          saveSuccess: "保存成功",
          publishSuccess: "发布成功",
          publishingSubmission: "提交发布中",
          publishReviewSuccess: "提交发布成功，请等待审核",
          editAlbumDetails: "专辑详情",
          backToContentManagement: "返回内容管理",
          watchOnIq: "前往爱奇艺查看",
          episodeCountShort: (count) => `${count}集`,
          viewEpisodes: "剧集详情",
          episodeName: "剧集名称",
          editSubtitles: "修改字幕",
          batchEditSubtitles: "批量修改字幕",
          subtitleFileNameHint: "文件名中的语种码将自动匹配，例如 episode01.zh-CN.srt",
          subtitleFormatNote: "仅支持 .srt、.vtt、.ass、.ssa 格式",
          batchUploadSubtitles: "批量上传字幕",
          batchUploadNamingHint: "系统根据命名规则自动识别对应语种，请规范命名",
          subtitleLanguage: "语种",
          subtitleFile: "字幕文件",
          fileSource: "文件来源",
          uploadStatus: "上传状态",
          aiGenerated: "智能生成",
          manualLabel: "人工",
          sourceAiGenerated: "来源：智能生成",
          sourceManual: "来源：人工",
          uploaded: "已上传",
          uploading: "上传中",
          invalidSubtitleFormat: "上传失败，仅支持 .srt、.vtt、.ass、.ssa 格式文件",
          uploadFailedRetry: "上传失败，请重试",
          subtitleUploadEffectiveAfterPublish: "上传成功，发布后生效",
          saving: "保存中",
          deleteSubtitleTitle: "确认删除字幕？",
          deleteSubtitleDescription: "保存后将移除该字幕文件。",
          unsavedSubtitleTitle: "关闭前保存更改？",
          unsavedSubtitleDescription: "退出后，本次所有修改将不会保存。",
          confirmExit: "确认退出",
          saveChanges: "保存修改",
          unpublishedChangesTitle: "您有修改的内容未发布，是否发布",
          unpublishedChangesDescription: "发布后将应用本次修改并返回内容管理。",
          discardChanges: "不保存",
          saveAndClose: "保存并关闭",
          modify: "修改",
          simplifiedChinese: "简体中文",
          english: "英语",
          traditionalChinese: "繁体中文",
          thai: "泰文",
          malay: "马来语",
          indonesian: "印尼语",
          vietnamese: "越南语",
          korean: "韩语",
          japanese: "日语",
          spanish: "西班牙语",
          episodePreview: "剧集预览",
          subtitlePreview: "字幕预览",
          playEpisodePreview: "播放剧集预览",
          editNavigation: "编辑导航",
          editSections: "编辑分区",
          save: "保存",
          publish: "发布",
          republish: "重新发布",
          undoChanges: "撤销更改",
          moreActions: "更多操作",
          editContentDetails: "编辑内容详情",
          basicInformation: "基本信息",
          title: "标题",
          oneLineDescription: "一句话推荐",
          description: "描述",
          cover: "封面",
          multilingual: "多语言",
          reupload: "重新上传",
          titleWrap: "标题折行",
          coverLandscape: "16:9 横版",
          coverPortrait: "3:4 竖版",
          coverLandscapeInfo: "横版封面上传要求",
          coverPortraitInfo: "竖版封面上传要求",
          coverLandscapeTooltip: "支持无损位图格式，大小不超过500千字节，尺寸不超过1920×1080像素",
          coverPortraitTooltip: "支持无损位图格式，大小不超过500千字节，尺寸不超过1920×2560像素",
          publishingEditDisabled: "当前内容正在发布中，暂不支持编辑",
          reviewPendingEditDisabled: "当前内容正在审核中，暂不支持编辑",
          reviewRejectedMessage: "当前内容审核未通过：1. 封面与标题不一致（简体中文、英文）；2. 1-3集字幕音话不同步（英语/泰语/马来语）。",
          coverReviewRejectedMismatch: "审核未通过：封面与标题不一致",
          coverMismatchGuidance: "英文/中文下的封面与标题不一致，请替换新封面。",
          titleReviewReason: "封面与标题不一致（简体中文、英文）",
          coverReviewReason: "封面与标题不一致（简体中文、英文）",
          subtitleReviewRejectedSync: "审核未通过：字幕音话不同步",
          subtitleSyncGuidance: "英语/泰语/马来语下的字幕音话不同步，请修改字幕。",
          coverSquare: "1:1 方图",
          cancel: "取消",
          restoreDefault: "恢复默认",
          applyAll: "修改所有",
          applyCurrent: "修改当前",
          tags: "标签",
          selectTags: "选择标签",
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
          videoId: "视频编号",
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
          close: "关闭"
        }
      };

      const themeSwitch = document.querySelector(".theme-switch");
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
      const pagination = paginationRange.closest(".pagination");
      const pageNumbers = document.querySelector("[data-page-numbers]");
      const prevPageButton = document.querySelector("[data-page-prev]");
      const nextPageButton = document.querySelector("[data-page-next]");
      let currentContentView = "all";
      let currentLanguage = "zh";
      let currentPage = 1;
      let pageSize = Number(pageSizeTrigger.dataset.pageSizeValue);
      const activeFilters = {
        freePaidStatus: "",
        publicationStatus: ""
      };
      const videoItems = [
        {
          type: "short",
          title: "宇宙派送来的他",
          id: "VID-2408-0192",
          duration: "00:42",
          episodes: 12,
          format: "1080x1920",
          freePaidStatus: "Free",
          publicationStatus: "Publishing",
          visibilityStatus: "Public",
          updated: "Today 14:26"
        },
        {
          type: "short",
          title: "岁岁寻常，幸而有你",
          id: "VID-2408-0164",
          duration: "00:28",
          episodes: 8,
          format: "1080x1920",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 10, 2026"
        },
        {
          type: "short",
          title: "惊月怀景",
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
          title: "我养出末世伪救世主",
          id: "VID-2408-0128",
          duration: "00:51",
          episodes: 10,
          format: "1080x1920",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 5, 2026"
        },
        {
          type: "comic-drama",
          title: "丢失的国宝",
          id: "VID-2408-0187",
          duration: "03:18",
          episodes: 6,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Online",
          publicationNote: "ReviewPending",
          visibilityStatus: "Private",
          updated: "Yesterday 18:40"
        },
        {
          type: "comic-drama",
          title: "半生落魄装疯癫，只为红颜动刀剑",
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
          title: "炮灰回档仙途",
          id: "VID-2408-0168",
          duration: "03:05",
          episodes: 10,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 11, 2026"
        },
        {
          type: "comic-drama",
          title: "男扮女的侯府千金",
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
          type: "short",
          title: "晚风知意，竹马情深",
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
          type: "short",
          title: "百日昏迷：梦获传承，醒来绝世高手第二季",
          id: "VID-2408-0151",
          duration: "07:36",
          episodes: 24,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 7, 2026"
        },
        {
          type: "short",
          title: "重生慈母硬家规",
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
          type: "short",
          title: "静破贪局",
          id: "VID-2408-0124",
          duration: "08:48",
          episodes: 20,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 2, 2026"
        },
        {
          type: "comic-drama",
          title: "禁忌之王",
          id: "VID-2408-0181",
          duration: "28:14",
          episodes: 32,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 11, 2026"
        },
        {
          type: "comic-drama",
          title: "被裁回村后，我靠一颗番茄封神",
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
          type: "comic-drama",
          title: "重生后，弥补二十年暗恋",
          id: "VID-2408-0144",
          duration: "26:52",
          episodes: 36,
          format: "",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 3, 2026"
        },
        {
          type: "comic-drama",
          title: "重生逆转：十五载错位人生",
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
          title: "首映红毯",
          id: "VID-2408-0155",
          duration: "02:08:16",
          format: "4K",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 9, 2026"
        },
        {
          type: "movie",
          title: "动作场面",
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
          title: "导演解说",
          id: "VID-2408-0119",
          duration: "02:14:05",
          format: "4K",
          freePaidStatus: "Paid",
          publicationStatus: "Offline",
          visibilityStatus: "Private",
          updated: "Aug 1, 2026"
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

      const shortEpisodeCovers = [
        "assets/images/cover/短剧/宇宙派送来的他-横图.jpg",
        "assets/images/cover/短剧/岁岁寻常，幸而有你-横图.jpg",
        "assets/images/cover/短剧/惊月怀景-横图.jpg",
        "assets/images/cover/短剧/我养出末世伪救世主-横图.jpg",
        "assets/images/cover/短剧/晚风知意，竹马情深-横图.jpg",
        "assets/images/cover/短剧/百日昏迷：梦获传承，醒来绝世高手第二季-横图.jpg",
        "assets/images/cover/短剧/重生慈母硬家规-横图.jpg",
        "assets/images/cover/短剧/静破贪局-横图.jpg"
      ];

      const comicDramaCovers = [
        "assets/images/cover/漫剧/丢失的国宝-横版.jpg",
        "assets/images/cover/漫剧/半生落魄装疯癫，只为红颜动刀剑-横图.jpg",
        "assets/images/cover/漫剧/炮灰回档仙途-横图.jpg",
        "assets/images/cover/漫剧/男扮女的侯府千金-横图.jpg",
        "assets/images/cover/漫剧/禁忌之王-横图.jpg",
        "assets/images/cover/漫剧/被裁回村后，我靠一颗番茄封神-横图.jpg",
        "assets/images/cover/漫剧/重生后，弥补二十年暗恋-横图.jpg",
        "assets/images/cover/漫剧/重生逆转：十五载错位人生-横图.jpg"
      ];

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
          Publishing: "publishing",
          Offline: "offline",
          Draft: "offline",
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
          已下线: "offline",
          下线: "offline",
          草稿: "offline",
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
        return statusKey === "online" ? "publish" : statusKey === "publishing" ? "publishing" : statusKey === "offline" ? "offline" : "draft";
      }

      function getPublicationIcon(value) {
        const statusKey = getStatusKey(value);
        if (statusKey === "online") {
          return "";
        }
        if (statusKey === "offline") {
          return "";
        }
        if (statusKey === "publishing") {
          return "";
        }
        return `
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <path d="M14 3v6h6" />
            <path d="M8 15h4" />
          </svg>
        `;
      }

      function renderPublicationStatus(value, note) {
        if (!note) {
          return `<span class="status-pill ${getPublicationClass(value)}">${getPublicationIcon(value)}<span>${getStatusLabel(value)}</span></span>`;
        }
        const noteKey = note ? getStatusKey(note) : "";
        const noteClass = noteKey ? noteKey.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`) : "";
        const noteIcon = noteKey === "reviewPending"
          ? '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
          : noteKey === "reviewRejected"
            ? '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg>'
            : noteKey === "reviewApproved"
              ? '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>'
              : "";
        const noteMarkup = noteKey ? `<span class="publication-status-note ${noteClass}">${noteIcon}<span>${t(noteKey)}</span></span>` : "";
        return `<span class="publication-status"><span class="status-pill ${getPublicationClass(value)}">${getPublicationIcon(value)}<span>${getStatusLabel(value)}</span></span>${noteMarkup}</span>`;
      }

      function syncPublicationNode(node, value, note = "") {
        if (!node) return;
        const noteKey = note ? getStatusKey(note) : "";
        const noteClass = noteKey ? noteKey.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`) : "";
        node.className = "preview-publication-status";
        node.innerHTML = `<span class="status-pill ${getPublicationClass(value)}">${getPublicationIcon(value)}<span>${getStatusLabel(value)}</span></span>${note ? `<span class="publication-status-note ${noteClass}">(${getStatusLabel(note)})</span>` : ""}`;
      }

      function getThumbBadgeLabel(item) {
        return item.type === "movie" ? item.duration : `${item.episodes} 集`;
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
        return new Intl.DateTimeFormat(currentLanguage === "zh" ? "zh-CN" : "en-US", {
          year: "numeric",
          month: currentLanguage === "zh" ? "numeric" : "short",
          day: "numeric"
        }).format(timestamp);
      }

      function getPreciseDateTimeLabel(value) {
        const relativeMatch = value.match(/^(Today|Yesterday)(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
        if (relativeMatch) {
          const [, relativeDay, hour = "00", minute = "00", second = "00"] = relativeMatch;
          return `${t(relativeDay.toLowerCase())} ${hour.padStart(2, "0")}:${minute}:${second}`;
        }
        const timestamp = Date.parse(value);
        if (Number.isNaN(timestamp)) {
          return value;
        }
        return new Intl.DateTimeFormat(currentLanguage === "zh" ? "zh-CN" : "en-US", {
          year: "numeric",
          month: currentLanguage === "zh" ? "numeric" : "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hourCycle: "h23"
        }).format(timestamp);
      }

      function renderEpisodeDateTime(value) {
        return `<p class="episode-time"><span>${getUpdatedLabel(value)}</span></p>`;
      }

      function syncFilterLabels() {
        filterTriggers.forEach((filterTrigger) => {
          const field = filterTrigger.dataset.filterField;
          const selectedValue = activeFilters[field];
          const valueNode = filterTrigger.querySelector("[data-filter-value]");
          filterTrigger.classList.toggle("has-value", Boolean(selectedValue));
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
        const nextLang = "zh";
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
        document.querySelectorAll("[data-subtitle-preview]").forEach((node) => {
          node.setAttribute("aria-label", t("subtitlePreview"));
        });
        syncFilterLabels();
        syncFilterOptionLabels();
        syncPageSizeLabels();
        renderVideoList(currentContentView);
        syncThemePreference();
        window.dispatchEvent(new CustomEvent("studio:languagechange", { detail: { language: nextLang } }));
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

      document.addEventListener("click", (event) => {
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
                <span class="video-empty-title">${t("noContentYet")}</span>
              </div>
            </div>`;
          return;
        }
        contentList.innerHTML = visibleRows
          .map((item) => {
            const isDraft = getStatusKey(item.publicationStatus) === "draft";
            return `
              <article class="video-row">
                <div class="video-main">
                  <div class="video-thumb ${item.type}${isDraft ? " draft" : ""}">
                    ${shortCoverById[item.id] || comicDramaCoverById[item.id] ? `<img class="video-thumb-image" src="${shortCoverById[item.id] || comicDramaCoverById[item.id]}" alt="" loading="lazy">` : ""}
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
      setLanguage("zh");
    
