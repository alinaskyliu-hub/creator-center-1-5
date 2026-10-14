(() => {
        const params = new URLSearchParams(window.location.search);
        const contentId = params.get("contentId");
        const urlType = params.get("type");
        const initialEditTab = params.get("tab");
        const item = videoItems.find((video) => video.id === contentId) || videoItems.find((video) => video.type === urlType) || videoItems[4];
        if (!item) return;
        const entryPublicationStatus = params.get("publicationStatus") || item.publicationStatus;
        const entryPublicationNote = params.get("reviewStatus") || item.publicationNote || "";
        const entryUpdated = params.get("updated") || item.updated;
        const entryFirstPublished = params.get("firstPublished") || item.firstPublished || item.updated;
        const isPublishing = getStatusKey(entryPublicationStatus) === "publishing";
        const reviewStatusKey = getStatusKey(entryPublicationNote);
        const isReviewPending = reviewStatusKey === "reviewPending";
        const isReviewRejected = reviewStatusKey === "reviewRejected";
        const isEditLocked = isPublishing || isReviewPending;

        const editPageTitleNodes = document.querySelectorAll("[data-edit-page-title]");
        const publishingWarning = document.querySelector("[data-publishing-warning]");
        const publishingWarningTitle = publishingWarning?.querySelector(".publishing-warning-title");
        const publishingError = document.querySelector("[data-publishing-error]");
        const titleReviewIndicator = document.querySelector("[data-title-review-indicator]");
        const coverReviewIndicator = document.querySelector("[data-cover-review-indicator]");
        const editTitleTabs = document.querySelector(".edit-title-tabs");
        const titleInput = document.querySelector("[data-edit-title-input]");
        const taglineInput = document.querySelector("[data-edit-tagline-input]");
        const descriptionInput = document.querySelector("[data-edit-description-input]");
        const contentLanguageFilter = document.querySelector("[data-content-language-filter]");
        const contentLanguageTrigger = document.querySelector("[data-content-language-trigger]");
        const contentLanguageValue = document.querySelector("[data-content-language-value]");
        const contentLanguageMenu = document.querySelector("[data-content-language-menu]");
        const contentLanguageOptions = Array.from(document.querySelectorAll("[data-content-language-option]"));
        const titleSourceTag = document.querySelector('[data-source-tag="title"]');
        const taglineSourceTag = document.querySelector('[data-source-tag="tagline"]');
        const descriptionSourceTag = document.querySelector('[data-source-tag="description"]');
        const coverSourceTag = document.querySelector('[data-source-tag="cover"]');
        const previewTitle = document.querySelector("[data-edit-preview-title]");
        const previewCard = document.querySelector("[data-edit-preview-card]");
        const videoPlayer = document.querySelector("[data-edit-video-player]");
        const category = document.querySelector("[data-edit-category]");
        const durationNodes = document.querySelectorAll("[data-edit-duration], [data-edit-player-duration]");
        const formatNode = document.querySelector("[data-edit-format]");
        const playerExternalLink = document.querySelector("[data-edit-player-link]");
        const publicationNode = document.querySelector("[data-edit-publication]");
        const videoLinkNode = document.querySelector("[data-edit-video-link]");
        const fileNameNode = document.querySelector("[data-edit-file-name]");
        const fileNameRow = document.querySelector("[data-edit-file-name-row]");
        const videoIdNode = document.querySelector("[data-edit-video-id]");
        const copyVideoLinkButton = document.querySelector("[data-copy-video-link]");
        const copyTooltip = document.querySelector("[data-copy-tooltip]");
        const updatedNode = document.querySelector("[data-edit-updated]");
        const firstPublishedNode = document.querySelector("[data-edit-first-published]");
        const episodeCard = document.querySelector("[data-edit-episode-card]");
        const episodeList = document.querySelector("[data-edit-episode-list]");
        const episodeTableScroll = document.querySelector(".episode-table-scroll");
        const episodePagination = document.querySelector("[data-edit-episode-pagination]");
        const episodePaginationRange = document.querySelector("[data-episode-pagination-range]");
        const episodePageNumbers = document.querySelector("[data-episode-page-numbers]");
        const episodePrevPageButton = document.querySelector("[data-episode-page-prev]");
        const episodeNextPageButton = document.querySelector("[data-episode-page-next]");
        const episodePageSizeSelect = document.querySelector("[data-episode-page-size]");
        const episodePageSizeTrigger = document.querySelector("[data-episode-page-size-trigger]");
        const episodePageSizeLabel = document.querySelector("[data-episode-page-size-label]");
        const episodePageSizeMenu = document.querySelector("[data-episode-page-size-menu]");
        const episodePageSizeOptions = Array.from(document.querySelectorAll("[data-episode-page-size-option]"));
        const episodeFilterTriggers = Array.from(document.querySelectorAll("[data-episode-filter-trigger]"));
        const episodeFilterOptions = Array.from(document.querySelectorAll("[data-episode-filter-option]"));
        const episodeFilterClears = Array.from(document.querySelectorAll("[data-episode-filter-clear]"));
        const episodeFilters = { freePaidStatus: "", publicationStatus: "" };
        let episodeCurrentPage = 1;
        let episodePageSize = 10;
        const editSectionTabs = Array.from(document.querySelectorAll("[data-edit-section-tab]"));
        const previewHome = document.querySelector("[data-edit-preview-home]");
        const secondaryVideoLink = document.querySelector("[data-secondary-video-link]");
        const secondaryVideoTitle = document.querySelector("[data-secondary-video-title]");
        const secondaryVideoId = document.querySelector("[data-secondary-video-id]");
        const secondaryVideoBadge = document.querySelector("[data-secondary-video-badge]");
        const resetAction = document.querySelector("[data-reset-action]");
        const resetActionLabel = document.querySelector("[data-reset-action-label]");
        const saveAction = document.querySelector("[data-save-action]");
        const publishAction = document.querySelector("[data-publish-action]");
        const publishActionLabel = document.querySelector("[data-publish-action-label]");
        const publishLoadingTip = document.querySelector("[data-publish-loading-tip]");
        const translationModal = document.querySelector("[data-translation-modal]");
        const translationModalTitle = document.querySelector("[data-translation-modal-title]");
        const translationList = document.querySelector("[data-translation-list]");
        const translationClose = document.querySelector("[data-translation-close]");
        const translationOpenButtons = Array.from(document.querySelectorAll("[data-translation-open]"));
        const coverTranslationOpen = document.querySelector("[data-cover-translation-open]");
        const coverTranslationModal = document.querySelector("[data-cover-translation-modal]");
        const coverTranslationClose = document.querySelector("[data-cover-translation-close]");
        const coverTranslationList = document.querySelector("[data-cover-translation-list]");
        const episodePreviewModal = document.querySelector("[data-episode-preview-modal]");
        const episodePreviewClose = document.querySelector("[data-episode-preview-close]");
        const episodePreviewTitle = document.querySelector("[data-episode-preview-title]");
        const episodePreviewVideo = document.querySelector("[data-episode-preview-video]");
        const previewLanguageSelect = document.querySelector("[data-preview-language-select]");
        const previewLanguageTrigger = document.querySelector("[data-preview-language-trigger]");
        const previewLanguageValue = document.querySelector("[data-preview-language-value]");
        const previewLanguageMenu = document.querySelector("[data-preview-language-menu]");
        const previewLanguageOptions = Array.from(document.querySelectorAll("[data-preview-language-option]"));
        const episodePreviewCaption = document.querySelector("[data-episode-preview-caption]");
        const subtitleDrawerOverlay = document.querySelector("[data-subtitle-drawer-overlay]");
        const subtitleDrawer = subtitleDrawerOverlay?.querySelector(".subtitle-drawer");
        const subtitleDrawerDescription = document.querySelector("[data-subtitle-drawer-description]");
        const subtitleDrawerCloseButtons = Array.from(document.querySelectorAll("[data-subtitle-drawer-close]"));
        const subtitleDrawerSave = document.querySelector("[data-subtitle-drawer-save]");
        const subtitleBatchUpload = document.querySelector("[data-subtitle-batch-upload]");
        const subtitleFileInput = document.querySelector("[data-subtitle-file-input]");
        const subtitleTableBody = document.querySelector(".subtitle-table tbody");
        const subtitleConfirm = document.querySelector("[data-subtitle-confirm]");
        const subtitleConfirmTitle = document.querySelector("[data-subtitle-confirm-title]");
        const subtitleConfirmDescription = document.querySelector("[data-subtitle-confirm-description]");
        const subtitleConfirmFooter = document.querySelector("[data-subtitle-confirm-footer]");
        const subtitleConfirmClose = document.querySelector("[data-subtitle-confirm-close]");
        const subtitleMessagePortal = document.querySelector("[data-subtitle-message-portal]");
        let subtitleDrawerReturnFocus = null;
        let activeSubtitleEpisodeLabel = "";
        let subtitleDrawerDirty = false;
        let activeSubtitleUploadRow = null;
        const titleCount = document.querySelector("[data-title-count]");
        const titleError = document.querySelector("[data-title-error]");
        const taglineCount = document.querySelector("[data-tagline-count]");
        const taglineError = document.querySelector("[data-tagline-error]");
        const descriptionCount = document.querySelector("[data-description-count]");
        const descriptionError = document.querySelector("[data-description-error]");
        const ratingSelect = document.querySelector("[data-rating-select]");
        const ratingTrigger = document.querySelector("[data-rating-trigger]");
        const ratingMenu = document.querySelector("[data-rating-menu]");
        const ratingLabel = document.querySelector("[data-rating-label]");
        const ratingValue = document.querySelector("[data-rating-value]");
        const ratingError = document.querySelector("[data-rating-error]");
        const paidStatusGroup = document.querySelector("[data-paid-status-group]");
        const paidStatusError = document.querySelector("[data-paid-status-error]");
        const regionAll = document.querySelector("[data-region-all]");
        const regionOptions = Array.from(document.querySelectorAll("[data-region-option]"));
        const regionsGroup = document.querySelector("[data-regions-group]");
        const regionsError = document.querySelector("[data-regions-error]");
        const coverUploader = document.querySelector("[data-cover-uploader]");
        const coverError = document.querySelector("[data-cover-error]");
        const coverSlots = Array.from(document.querySelectorAll("[data-cover-slot]"));
        window.StudioCovers.applyCovers(item, coverSlots);
        const coverMessage = document.querySelector("[data-cover-message]");
        const coverMessageText = document.querySelector("[data-cover-message-text]");
        const coverTitlePanel = document.querySelector("[data-cover-title-panel]");
        const coverTitlePanelTitle = document.querySelector("[data-cover-title-panel-title]");
        const coverTitlePanelInput = document.querySelector("[data-cover-title-panel-input]");
        const coverTitleCancel = document.querySelector("[data-cover-title-cancel]");
        const coverTitleRestore = document.querySelector("[data-cover-title-restore]");
        const coverTitleApplyAll = document.querySelector("[data-cover-title-apply-all]");
        const coverTitleApplyCurrent = document.querySelector("[data-cover-title-apply-current]");
        let activeCoverSlot = null;
        let activePosterItem = null;
        let coverTitleSnapshot = "";
        let posterTitleSnapshot = "";
        let coverMessageTimer = 0;
        let copyTooltipTimer = 0;
        let currentTranslationField = "title";
        let initialFormState = "";
        let initialFormSnapshot = null;
        let dynamicDirtyRevision = 0;
        let getTranslationState = () => [];
        let restoreTranslationState = () => {};
        const previewFileNames = new Map();
        let activeContentLanguage = "简体中文";
        const fieldLimits = {
          title: {
            get max() { return activeContentLanguage === "英文" ? 100 : 20; },
            labelKey: "title"
          },
          tagline: {
            max: 40,
            labelKey: "oneLineDescription"
          },
          description: {
            max: 300,
            labelKey: "description"
          }
        };

        function getCharacterLength(value) {
          return Array.from(value).length;
        }

        function syncFieldLimit(input, countNode, errorNode, fieldKey) {
          const limit = fieldLimits[fieldKey];
          input.maxLength = limit.max;
          const length = getCharacterLength(input.value);
          countNode.textContent = `${length}/${limit.max}`;
          const isEmpty = !input.value.trim();
          const isTooLong = length > limit.max;
          const hasError = isEmpty || isTooLong;
          input.classList.toggle("is-invalid", hasError);
          input.setAttribute("aria-invalid", String(hasError));
          const label = t(limit.labelKey);
          errorNode.textContent = isEmpty ? t("requiredError", label) : isTooLong ? t("maxLengthError", label, limit.max) : "";
          errorNode.hidden = !hasError;
          return !hasError;
        }

        function setErrorState(errorNode, targetNode, message) {
          const hasError = Boolean(message);
          if (errorNode) {
            errorNode.textContent = message;
            errorNode.hidden = !hasError;
          }
          targetNode?.classList.toggle("is-invalid", hasError);
          targetNode?.setAttribute("aria-invalid", String(hasError));
          return !hasError;
        }

        function getSelectedPaidStatus() {
          return document.querySelector('input[name="paidStatus"]:checked')?.value || "";
        }

        function getCurrentFormSnapshot() {
          return {
            title: titleInput.value,
            tagline: taglineInput.value,
            description: descriptionInput.value,
            paidStatus: getSelectedPaidStatus(),
            rating: ratingValue?.value || "",
            regions: regionOptions.filter((input) => input.checked).map((input) => input.value),
            coverTitles: coverSlots.map((slot) => slot.dataset.coverTitleValue || ""),
            coverStyles: coverSlots.map((slot) => slot.querySelector(".cover-art")?.getAttribute("style") || ""),
            coverUploads: coverSlots.map((slot) => slot.dataset.coverUploaded === "true"),
            translations: getTranslationState(),
            dynamicDirtyRevision
          };
        }

        function getFormState() {
          return JSON.stringify(getCurrentFormSnapshot());
        }

        function isFormDirty() {
          return Boolean(initialFormState && getFormState() !== initialFormState);
        }

        function syncActionDirtyState() {
          const isDirty = isFormDirty();
          [resetAction, saveAction, publishAction].forEach((button) => {
            if (button) {
              button.disabled = isEditLocked || !isDirty;
            }
          });
          publishAction?.classList.toggle("is-highlighted", isDirty && !isEditLocked);
        }

        function applyPublishingLock() {
          if (publishingWarning) publishingWarning.hidden = !isEditLocked;
          if (publishingWarningTitle && isEditLocked) {
            const warningKey = isReviewPending ? "reviewPendingEditDisabled" : "publishingEditDisabled";
            publishingWarningTitle.dataset.i18n = warningKey;
            publishingWarningTitle.textContent = t(warningKey);
          }
          if (publishingError) publishingError.hidden = !isReviewRejected;
          if (titleReviewIndicator) titleReviewIndicator.hidden = !isReviewRejected;
          if (coverReviewIndicator) coverReviewIndicator.hidden = !isReviewRejected;
          if (!isEditLocked) return;
          document.body.classList.add("is-publishing-locked");
          document.querySelectorAll(".edit-form input, .edit-form textarea, .edit-form select, .edit-form button").forEach((control) => {
            if (control.closest("[data-content-language-filter]")) return;
            control.disabled = true;
          });
          document.querySelectorAll("[data-cover-upload], [data-cover-file]").forEach((control) => {
            control.disabled = true;
          });
          if (publishAction) publishAction.disabled = true;
        }

        function markDynamicDirty() {
          dynamicDirtyRevision += 1;
          syncActionDirtyState();
        }

        function commitFormState() {
          initialFormSnapshot = getCurrentFormSnapshot();
          initialFormState = JSON.stringify(initialFormSnapshot);
          syncActionDirtyState();
        }

        function restoreInitialFormState() {
          if (!initialFormSnapshot) return;
          titleInput.value = initialFormSnapshot.title;
          taglineInput.value = initialFormSnapshot.tagline;
          descriptionInput.value = initialFormSnapshot.description;
          previewTitle.textContent = initialFormSnapshot.title;
          document.querySelectorAll('input[name="paidStatus"]').forEach((input) => {
            input.checked = input.value === initialFormSnapshot.paidStatus;
          });
          setRatingValue(initialFormSnapshot.rating);
          regionOptions.forEach((input) => {
            input.checked = initialFormSnapshot.regions.includes(input.value);
          });
          coverSlots.forEach((slot, index) => {
            slot.dataset.coverTitleValue = initialFormSnapshot.coverTitles[index] || titleInput.value || item.title;
            slot.dataset.coverUploaded = String(Boolean(initialFormSnapshot.coverUploads[index]));
            const coverArt = slot.querySelector(".cover-art");
            if (coverArt) {
              const styleValue = initialFormSnapshot.coverStyles[index] || "";
              if (styleValue) {
                coverArt.setAttribute("style", styleValue);
              } else {
                coverArt.removeAttribute("style");
              }
            }
            syncCoverSlotTitle(slot, slot.dataset.coverTitleValue);
          });
          restoreTranslationState(initialFormSnapshot.translations);
          closeCoverTitlePanel();
          syncFieldLimit(titleInput, titleCount, titleError, "title");
          syncFieldLimit(taglineInput, taglineCount, taglineError, "tagline");
          syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description");
          validateCover();
          validatePaidStatus();
          validateRating();
          syncRegionAllState();
          validateRegions();
          syncActionDirtyState();
        }

        const coverObjectUrls = new WeakMap();

        function syncCoverSlotTitle(slot, value) {
          const titleNode = slot.querySelector("[data-cover-title-art]");
          if (titleNode) {
            titleNode.textContent = value || item.title;
          }
        }

        function syncCoverTitlesFromAlbumTitle() {
          coverSlots.forEach((slot) => {
            if (slot.dataset.coverTitleEdited === "true") return;
            slot.dataset.coverTitleValue = titleInput.value;
            syncCoverSlotTitle(slot, slot.dataset.coverTitleValue);
          });
          if (activeCoverSlot && activeCoverSlot.dataset.coverTitleEdited !== "true" && coverTitlePanelInput) {
            coverTitlePanelInput.value = titleInput.value;
          }
        }

        function setCoverTitleActionsEnabled(enabled) {
          if (coverTitleApplyAll) {
            coverTitleApplyAll.disabled = !enabled;
          }
          if (coverTitleApplyCurrent) {
            coverTitleApplyCurrent.disabled = !enabled;
          }
        }

        function syncCoverTitleActionState() {
          if (!coverTitlePanelInput) {
            setCoverTitleActionsEnabled(false);
            return;
          }
          setCoverTitleActionsEnabled(coverTitlePanelInput.value !== coverTitleSnapshot);
        }

        function showPageMessage(message = t("changeSuccess"), tone = "success") {
          if (!coverMessage) return;
          const messageType = tone === "danger" ? "error" : tone;
          coverMessage.className = `feedback-message ${messageType}`;
          coverMessage.setAttribute("role", messageType === "error" ? "alert" : "status");
          coverMessageText.textContent = message;
          const icon = coverMessage.querySelector(".message-icon");
          icon.innerHTML = messageType === "error"
            ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 9l6 6"></path><path d="M15 9l-6 6"></path></svg>'
            : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12.5l2.5 2.5L16.5 9"></path></svg>';
          coverMessage.hidden = false;
          window.clearTimeout(coverMessageTimer);
          coverMessageTimer = window.setTimeout(() => {
            coverMessage.hidden = true;
          }, 3000);
        }

        function showCoverMessage() {
          showPageMessage(t("changeSuccess"));
        }

        function getPreviewVideoLink() {
          return `https://www.iq.com/play/${encodeURIComponent(item.id)}`;
        }

        function getPreviewFileName() {
          if (!previewFileNames.has(item.id)) {
            const fragments = ["lumen", "harbor", "orbit", "silver", "nova", "atlas", "ripple", "velvet"];
            const fragment = fragments[Math.floor(Math.random() * fragments.length)];
            const suffix = Math.random().toString(36).slice(2, 8);
            previewFileNames.set(item.id, `${fragment}_${item.type === "movie" ? "feature" : "album"}_${suffix}.mp4`);
          }
          return previewFileNames.get(item.id);
        }

        function syncPreviewVideoCard() {
          if (playerExternalLink) {
            playerExternalLink.href = getPreviewVideoLink();
          }
          if (videoLinkNode) {
            const videoLink = getPreviewVideoLink();
            videoLinkNode.textContent = videoLink;
            videoLinkNode.href = videoLink;
          }
          if (fileNameNode) {
            fileNameNode.textContent = getPreviewFileName();
          }
          if (videoIdNode) {
            videoIdNode.textContent = item.id;
          }
        }

        function syncSecondaryVideo() {
          if (secondaryVideoLink) {
            secondaryVideoLink.href = getPreviewVideoLink();
            secondaryVideoLink.setAttribute("aria-label", `${t("watchOnIq")}: ${item.title}`);
          }
          if (secondaryVideoTitle) secondaryVideoTitle.textContent = item.title;
          if (secondaryVideoId) secondaryVideoId.textContent = item.id;
          if (secondaryVideoBadge) secondaryVideoBadge.textContent = t("episodeCountShort", item.episodes || 1);
        }

        function showCopyTooltip(message) {
          if (!copyTooltip) return;
          copyTooltip.textContent = message;
          copyTooltip.hidden = false;
          window.clearTimeout(copyTooltipTimer);
          copyTooltipTimer = window.setTimeout(() => {
            copyTooltip.hidden = true;
          }, 1800);
        }

        async function copyTextToClipboard(value) {
          if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(value);
            return;
          }

          const textarea = document.createElement("textarea");
          textarea.value = value;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "fixed";
          textarea.style.top = "-999px";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          const didCopy = document.execCommand("copy");
          textarea.remove();
          if (!didCopy) throw new Error("Copy command failed");
        }

        async function copyVideoLink() {
          const value = videoLinkNode?.href || videoLinkNode?.textContent || "";
          try {
            if (!value) throw new Error("Missing video link");
            await copyTextToClipboard(value);
            showCopyTooltip(t("copySuccess"));
          } catch (error) {
            showCopyTooltip(t("copyFailed"));
          }
        }

        function openCoverTitlePanel(slot) {
          if (!coverTitlePanel || !coverTitlePanelInput || !coverTitlePanelTitle) return;
          const isSameOpen = activeCoverSlot === slot && !coverTitlePanel.hidden;
          coverSlots.forEach((item) => item.classList.remove("is-title-editing"));
          if (isSameOpen) {
            closeCoverTitlePanel();
            return;
          }
          activeCoverSlot = slot;
          slot.classList.add("is-title-editing");
          const label = slot.querySelector(".cover-label-text")?.textContent || t("cover");
          coverTitlePanelTitle.textContent = t("coverTitlePanelTitle", label);
          coverTitlePanelInput.value = slot.dataset.coverTitleValue || titleInput.value || item.title;
          coverTitleSnapshot = coverTitlePanelInput.value;
          syncCoverTitleActionState();
          coverTitlePanel.hidden = false;
          coverTitlePanelInput.focus();
          const cursorPosition = coverTitlePanelInput.value.length;
          coverTitlePanelInput.setSelectionRange(cursorPosition, cursorPosition);
        }

        function syncActiveCoverTitle(value, cursorPosition) {
          if (!activeCoverSlot || !coverTitlePanelInput) return;
          activeCoverSlot.dataset.coverTitleEdited = value === titleInput.value ? "false" : "true";
          activeCoverSlot.dataset.coverTitleValue = value;
          coverTitlePanelInput.value = value;
          syncCoverSlotTitle(activeCoverSlot, value);
          syncCoverTitleActionState();
          if (Number.isInteger(cursorPosition)) {
            coverTitlePanelInput.setSelectionRange(cursorPosition, cursorPosition);
          }
        }

        function applyCoverTitleToSlot(slot, value) {
          slot.dataset.coverTitleEdited = value === titleInput.value ? "false" : "true";
          slot.dataset.coverTitleValue = value;
          syncCoverSlotTitle(slot, value);
          translationSources[activeTranslationIndex].cover = "manual";
          syncSourceTag(coverSourceTag, "manual");
        }

        function applyCoverTitleToAll(value) {
          coverSlots.forEach((slot) => {
            applyCoverTitleToSlot(slot, value);
          });
        }

        function closeCoverTitlePanel() {
          coverSlots.forEach((slot) => slot.classList.remove("is-title-editing"));
          if (coverTitlePanel) {
            coverTitlePanel.hidden = true;
          }
          activeCoverSlot = null;
          coverTitleSnapshot = "";
          setCoverTitleActionsEnabled(false);
        }

        function cancelCoverTitleChange() {
          if (!activeCoverSlot) {
            closeCoverTitlePanel();
            return;
          }
          applyCoverTitleToSlot(activeCoverSlot, coverTitleSnapshot || titleInput.value || item.title);
          closeCoverTitlePanel();
        }

        function restoreDefaultCoverTitle() {
          if (!activeCoverSlot || !coverTitlePanelInput) return;
          const defaultValue = titleInput.value || item.title;
          syncActiveCoverTitle(defaultValue, defaultValue.length);
        }

        function removeLineBreaksInSelection(value, start, end) {
          const selectedValue = value.slice(start, end);
          const nextSelectedValue = selectedValue.replace(/\n/g, "");
          if (selectedValue === nextSelectedValue) return null;
          return {
            value: value.slice(0, start) + nextSelectedValue + value.slice(end),
            cursorPosition: start + nextSelectedValue.length
          };
        }

        function handleCoverTitleKeydown(event) {
          if (!activeCoverSlot || !coverTitlePanelInput) return;
          const allowedKeys = new Set([
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
            "PageUp",
            "PageDown",
            "Tab",
            "Escape",
            "Shift",
            "Control",
            "Meta",
            "Alt"
          ]);
          if ((event.metaKey || event.ctrlKey) && ["a", "c"].includes(event.key.toLowerCase())) {
            return;
          }
          if (allowedKeys.has(event.key)) return;

          const value = coverTitlePanelInput.value;
          const start = coverTitlePanelInput.selectionStart;
          const end = coverTitlePanelInput.selectionEnd;
          event.preventDefault();

          if (event.key === "Enter") {
            const nextValue = value.slice(0, start) + "\n" + value.slice(start);
            syncActiveCoverTitle(nextValue, start + 1);
            return;
          }

          if (event.key === "Backspace") {
            if (start !== end) {
              const next = removeLineBreaksInSelection(value, start, end);
              if (next) syncActiveCoverTitle(next.value, next.cursorPosition);
              return;
            }
            if (start > 0 && value[start - 1] === "\n") {
              syncActiveCoverTitle(value.slice(0, start - 1) + value.slice(start), start - 1);
            }
            return;
          }

          if (event.key === "Delete") {
            if (start !== end) {
              const next = removeLineBreaksInSelection(value, start, end);
              if (next) syncActiveCoverTitle(next.value, next.cursorPosition);
              return;
            }
            if (value[start] === "\n") {
              syncActiveCoverTitle(value.slice(0, start) + value.slice(start + 1), start);
            }
          }
        }

        function initCoverTools() {
          coverSlots.forEach((slot) => {
            const uploadButton = slot.querySelector("[data-cover-upload]");
            const fileInput = slot.querySelector("[data-cover-file]");
            const coverArt = slot.querySelector(".cover-art");
            if (!uploadButton || !fileInput || !coverArt) return;

            slot.dataset.coverPresent = "true";
            slot.dataset.coverTitleValue = item.title;
            syncCoverSlotTitle(slot, slot.dataset.coverTitleValue);

            uploadButton.addEventListener("click", () => {
              fileInput.click();
            });

            fileInput.addEventListener("change", () => {
              const file = fileInput.files && fileInput.files[0];
              if (!file) return;
              const previousUrl = coverObjectUrls.get(coverArt);
              if (previousUrl) {
                URL.revokeObjectURL(previousUrl);
              }
              const nextUrl = URL.createObjectURL(file);
              coverObjectUrls.set(coverArt, nextUrl);
              slot.dataset.coverUploaded = "true";
              translationSources[activeTranslationIndex].cover = "manual";
              syncSourceTag(coverSourceTag, "manual");
              coverArt.style.backgroundImage = `url("${nextUrl}")`;
              coverArt.style.backgroundSize = "cover";
              coverArt.style.backgroundPosition = "center";
              validateCover();
              markDynamicDirty();
            });

          });

          coverTitlePanelInput?.addEventListener("keydown", handleCoverTitleKeydown);
          coverTitlePanelInput?.addEventListener("beforeinput", (event) => {
            event.preventDefault();
          });
          coverTitlePanelInput?.addEventListener("paste", (event) => {
            event.preventDefault();
          });
          coverTitlePanelInput?.addEventListener("cut", (event) => {
            event.preventDefault();
          });
          coverTitlePanelInput?.addEventListener("drop", (event) => {
            event.preventDefault();
          });
          coverTitlePanelInput?.addEventListener("input", () => {
            if (!activeCoverSlot || coverTitlePanelInput.value === activeCoverSlot.dataset.coverTitleValue) return;
            coverTitlePanelInput.value = activeCoverSlot.dataset.coverTitleValue || titleInput.value || item.title;
          });
          coverTitleCancel?.addEventListener("click", cancelCoverTitleChange);
          coverTitleRestore?.addEventListener("click", restoreDefaultCoverTitle);
          coverTitleApplyAll?.addEventListener("click", () => {
            if (!coverTitlePanelInput || coverTitleApplyAll.disabled) return;
            applyCoverTitleToAll(coverTitlePanelInput.value);
            closeCoverTitlePanel();
            showCoverMessage();
            syncActionDirtyState();
          });
          coverTitleApplyCurrent?.addEventListener("click", () => {
            if (!activeCoverSlot || !coverTitlePanelInput || coverTitleApplyCurrent.disabled) return;
            applyCoverTitleToSlot(activeCoverSlot, coverTitlePanelInput.value);
            closeCoverTitlePanel();
            showCoverMessage();
            syncActionDirtyState();
          });
        }

        function validateCover() {
          const hasCover = coverSlots.some((slot) => slot.dataset.coverPresent === "true" || slot.dataset.coverUploaded === "true");
          return setErrorState(coverError, coverUploader, hasCover ? "" : t("coverRequired"));
        }

        function validatePaidStatus() {
          const selected = document.querySelector('input[name="paidStatus"]:checked');
          return setErrorState(paidStatusError, paidStatusGroup, selected ? "" : t("paidStatusRequired"));
        }

        function validateRating() {
          const value = ratingValue?.value?.trim();
          return setErrorState(ratingError, ratingTrigger, value ? "" : t("ratingRequired"));
        }

        function validateRegions() {
          const hasRegion = regionOptions.some((input) => input.checked);
          return setErrorState(regionsError, regionsGroup, hasRegion ? "" : t("regionsRequired"));
        }

        function focusFirstInvalidField() {
          const target =
            titleInput.classList.contains("is-invalid") ? titleInput :
            taglineInput.classList.contains("is-invalid") ? taglineInput :
            descriptionInput.classList.contains("is-invalid") ? descriptionInput :
            coverUploader?.classList.contains("is-invalid") ? coverUploader :
            paidStatusGroup?.classList.contains("is-invalid") ? paidStatusGroup.querySelector("input") :
            ratingTrigger?.classList.contains("is-invalid") ? ratingTrigger :
            regionsGroup?.classList.contains("is-invalid") ? regionsGroup.querySelector("input") :
            null;

          target?.scrollIntoView({ block: "center", behavior: "smooth" });
          target?.focus?.({ preventScroll: true });
        }

        function validateRequiredForm(showDangerMessage = false) {
          const checks = [
            syncFieldLimit(titleInput, titleCount, titleError, "title"),
            syncFieldLimit(taglineInput, taglineCount, taglineError, "tagline"),
            syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description"),
            validateCover(),
            validatePaidStatus()
          ];
          const isValid = checks.every(Boolean);
          if (!isValid && showDangerMessage) {
            showPageMessage(t("fixRequiredFields"), "danger");
            focusFirstInvalidField();
          }
          return isValid;
        }

        function handlePrimaryAction(message) {
          if (!isFormDirty()) return;
          if (!validateRequiredForm(true)) return;
          showPageMessage(message);
          commitFormState();
        }

        function syncEditCategoryTag() {
          if (!category) return;
          category.textContent = getTypeLabel(item.type);
          category.className = `edit-category-tag type-tag ${item.type}`;
        }

        function syncEditMeta() {
          syncPublicationNode(publicationNode, entryPublicationStatus, entryPublicationNote);
          if (updatedNode) {
            updatedNode.textContent = getUpdatedLabel(entryUpdated);
          }
          if (firstPublishedNode) {
            firstPublishedNode.textContent = getUpdatedLabel(entryFirstPublished);
          }
        }

        function getEditPageTitle() {
          if (document.body.dataset.editSection === "episodes") return t("viewEpisodes");
          return item.type === "movie" ? t("movieDetails") : t("editAlbumDetails");
        }

        function syncEditPageTitle() {
          const editPageTitle = getEditPageTitle();
          editPageTitleNodes.forEach((node) => {
            node.textContent = editPageTitle;
          });
          document.title = `${editPageTitle} - 创作者工作台`;
        }

        function syncEditTabIndicator(animate = true) {
          if (!editTitleTabs) return;
          const selectedTab = editTitleTabs.querySelector('[data-edit-section-tab][aria-selected="true"]');
          if (!selectedTab) return;
          editTitleTabs.classList.toggle("is-measuring", !animate);
          editTitleTabs.style.setProperty("--edit-tab-indicator-x", `${selectedTab.offsetLeft}px`);
          editTitleTabs.style.setProperty("--edit-tab-indicator-width", `${selectedTab.offsetWidth}px`);
          if (!animate) window.requestAnimationFrame(() => editTitleTabs.classList.remove("is-measuring"));
        }

        syncEditPageTitle();

        titleInput.value = item.title;
        if (item.id === "VID-2408-0164") {
          taglineInput.value = "烟火藏爱意海棠遇良人";
          descriptionInput.value = "林浅的生活原本平淡无波，直到她与傅聿川的交集渐渐多了起来。她鲜活肆意的性子悄然打动了对方，而他不动声色的妥帖照料，也一点点暖了她的时光。从赛车场上的意外并肩，到榕城海棠花下的闲步相伴，几场风波里的彼此守护，几段日常里的细碎温柔，让两个原本疏离的人，在烟火岁月里慢慢靠近，收获了独属于彼此的偏爱与心安。";
        }
        previewTitle.textContent = item.title;
        syncEditCategoryTag();
        syncPreviewVideoCard();
        syncSecondaryVideo();
        durationNodes.forEach((node) => {
          node.textContent = item.duration;
        });
        if (formatNode) formatNode.textContent = item.format || (item.type === "short" ? "1080 x 1920" : "1080p");
        syncEditMeta();
        const isMovie = item.type === "movie";
        if (videoPlayer) {
          videoPlayer.hidden = false;
          videoPlayer.style.display = "";
        }
        if (fileNameRow) {
          fileNameRow.hidden = !isMovie;
          fileNameRow.style.display = isMovie ? "" : "none";
        }
        if (episodeCard) {
          episodeCard.hidden = isMovie;
        }
        const episodeSectionTab = editSectionTabs.find((tab) => tab.dataset.editSectionTab === "episodes");
        if (episodeSectionTab) {
          episodeSectionTab.hidden = isMovie;
          const episodeSectionItem = episodeSectionTab.closest("li");
          if (episodeSectionItem) episodeSectionItem.hidden = isMovie;
        }

        function setEditSection(nextSection, shouldFocus = false) {
          const section = nextSection === "episodes" && !isMovie ? "episodes" : "details";
          document.body.dataset.editSection = section;
          syncEditPageTitle();
          editSectionTabs.forEach((tab) => {
            const isSelected = tab.dataset.editSectionTab === section;
            tab.setAttribute("aria-selected", String(isSelected));
            tab.tabIndex = isSelected ? 0 : -1;
            if (isSelected && shouldFocus) tab.focus();
          });
          window.requestAnimationFrame(() => syncEditTabIndicator(true));
          titleInput.closest(".edit-form")?.setAttribute("aria-hidden", String(section !== "details"));
          episodeCard?.setAttribute("aria-hidden", String(section !== "episodes"));
          if (section === "details" && previewCard && previewHome) {
            previewHome.after(previewCard);
            previewCard.hidden = false;
          } else if (section === "episodes" && previewCard) {
            const expandedAnchor = episodeList?.querySelector(".is-expanded [data-edit-preview-anchor]");
            if (expandedAnchor) expandedAnchor.appendChild(previewCard);
          }
          if (section === "episodes") {
            renderEpisodeList();
          }
          if (workspace) workspace.scrollTo({ top: 0, left: workspace.scrollLeft });
        }

        editSectionTabs.forEach((tab, index) => {
          tab.addEventListener("click", () => setEditSection(tab.dataset.editSectionTab));
          tab.addEventListener("keydown", (event) => {
            if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
            event.preventDefault();
            const offset = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
            const availableTabs = editSectionTabs.filter((item) => !item.hidden);
            const currentIndex = availableTabs.indexOf(tab);
            const nextTab = availableTabs[(currentIndex + offset + availableTabs.length) % availableTabs.length];
            setEditSection(nextTab.dataset.editSectionTab, true);
          });
        });
        setEditSection(initialEditTab === "episodes" ? "episodes" : "details");
        window.addEventListener("resize", () => syncEditTabIndicator(false));
        window.addEventListener("studio:languagechange", () => {
          syncEditPageTitle();
          window.requestAnimationFrame(() => syncEditTabIndicator(false));
          syncEditMeta();
          syncSecondaryVideo();
          syncActionLabels();
          syncFieldLimit(titleInput, titleCount, titleError, "title");
          syncFieldLimit(taglineInput, taglineCount, taglineError, "tagline");
          syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description");
          syncSourceTag(titleSourceTag, translationSources[activeTranslationIndex].title);
          syncSourceTag(taglineSourceTag, translationSources[activeTranslationIndex].tagline);
          syncSourceTag(descriptionSourceTag, translationSources[activeTranslationIndex].description);
          syncSourceTag(coverSourceTag, translationSources[activeTranslationIndex].cover);
          syncSubtitleReviewIndicators();
          validateCover();
          validatePaidStatus();
          validateRating();
          validateRegions();
          setRatingValue(ratingValue?.value || "13+");
          renderEpisodeList();
          if (!translationModal.hidden) {
            openTranslationModal(currentTranslationField);
          }
          if (!coverTranslationModal.hidden) {
            renderCoverTranslationList();
          }
          if (!coverTitlePanel.hidden && activeCoverSlot) {
            const label = activeCoverSlot.querySelector(".cover-label-text")?.textContent || t("cover");
            coverTitlePanelTitle.textContent = t("coverTitlePanelTitle", label);
          }
        });

        document.querySelectorAll('input[name="paidStatus"]').forEach((input) => {
            input.checked = input.value === item.freePaidStatus;
            input.addEventListener("change", () => {
              validatePaidStatus();
              syncActionDirtyState();
            });
          });
        const publicationStatusKey = getStatusKey(item.publicationStatus);
        const hidesSaveAction = true;
        function syncActionLabels() {
          if (resetActionLabel) resetActionLabel.textContent = t("undoChanges");
          publishActionLabel.textContent = t("republish");
        }

        syncActionLabels();
        if (saveAction) {
          saveAction.hidden = true;
          saveAction.style.display = "none";
        }

        function renderEpisodeList() {
          if (isMovie || !episodeList) return;
          const count = item.episodes || 1;
          const getEpisodePublicationStatus = () => entryPublicationStatus;
          const episodeIndices = Array.from({ length: count }, (_, index) => index).filter((index) => {
            const publicationStatus = getEpisodePublicationStatus(index);
            return (!episodeFilters.freePaidStatus || item.freePaidStatus === episodeFilters.freePaidStatus)
              && (!episodeFilters.publicationStatus || publicationStatus === episodeFilters.publicationStatus);
          });
          const totalRows = episodeIndices.length;
          const totalPages = Math.max(1, Math.ceil(totalRows / episodePageSize));
          episodeCurrentPage = Math.min(episodeCurrentPage, totalPages);
          const startIndex = (episodeCurrentPage - 1) * episodePageSize;
          const visibleEpisodeIndices = episodeIndices.slice(startIndex, startIndex + episodePageSize);
          if (episodePagination) episodePagination.hidden = totalRows === 0;
          if (episodePaginationRange) episodePaginationRange.textContent = t("rowsTotal", totalRows);
          if (episodePageSizeLabel) episodePageSizeLabel.textContent = t("rowsPerPageLabel", episodePageSize);
          episodePageSizeOptions.forEach((option) => {
            option.textContent = t("rowsPerPageLabel", Number(option.dataset.episodePageSizeOption));
          });
          if (episodePageNumbers) {
            episodePageNumbers.innerHTML = totalRows ? Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return `<button class="pagination-button${page === episodeCurrentPage ? " current" : ""}" type="button" aria-label="${t("pageLabel", page)}"${page === episodeCurrentPage ? ' aria-current="page"' : ""} data-episode-page-number="${page}">${page}</button>`;
            }).join("") : "";
          }
          if (episodePrevPageButton) episodePrevPageButton.disabled = !totalRows || episodeCurrentPage <= 1;
          if (episodeNextPageButton) episodeNextPageButton.disabled = !totalRows || episodeCurrentPage >= totalPages;
          episodeFilterTriggers.forEach((trigger) => {
            const field = trigger.dataset.episodeFilterTrigger;
            const value = episodeFilters[field];
            const label = trigger.querySelector("[data-episode-filter-label]");
            trigger.classList.toggle("has-value", Boolean(value));
            if (label) {
              if (field === "publicationStatus" && value) label.innerHTML = renderPublicationStatus(value);
              else label.textContent = value ? getStatusLabel(value) : t(field === "freePaidStatus" ? "freePaid" : "publication");
            }
          });
          if (!visibleEpisodeIndices.length) {
            episodeList.innerHTML = `
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
            window.requestAnimationFrame(syncEpisodeStickyColumns);
            return;
          }
          episodeList.innerHTML = visibleEpisodeIndices.map((index) => {
            const label = item.episodes ? t("episodeLabel", index + 1) : t("featureFilm");
            const episodeId = `${item.id}-E${String(index + 1).padStart(2, "0")}`;
            const publicationStatus = getEpisodePublicationStatus(index);
            const publicationNote = isReviewRejected
              ? (index < 3 ? entryPublicationNote : "")
              : entryPublicationNote;
            const updated = index === 0 ? item.updated : `Aug ${Math.max(1, 14 - index)}, 2026 ${String(18 - (index % 8)).padStart(2, "0")}:20:00`;
            const firstPublished = `Aug ${Math.max(1, 8 - Math.floor(index / 2))}, 2026 10:${String((index * 7) % 60).padStart(2, "0")}:00`;
            const episodeCover = window.StudioCovers.getCover(item.id);
            return `
              <article class="episode-table-row" role="row">
                <div class="episode-main">
                  <button class="episode-thumb ${item.type}" type="button"${episodeCover ? ` style="background-image: url('${episodeCover}')"` : ""} aria-label="${t("playEpisodePreview")}: ${label}" data-episode-preview-trigger data-episode-preview-label="${label}">
                    <span class="episode-thumb-play" aria-hidden="true">
                      <svg class="icon" data-icon-semantic="Play" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8.86 5.32A1.1 1.1 0 0 0 7.2 6.27v11.46a1.1 1.1 0 0 0 1.66.95l9.1-5.73a1.12 1.12 0 0 0 0-1.9L8.86 5.32Z" /></svg>
                    </span>
                    <span class="episode-duration">${item.duration}</span>
                  </button>
                  <div class="episode-copy">
                    <p class="episode-name"><span class="episode-series-title">${item.title}</span><span class="episode-number">&nbsp;· ${label}</span></p>
                    <p class="episode-id">${episodeId}</p>
                  </div>
                </div>
                <span class="status-text">${getStatusLabel(item.freePaidStatus)}</span>
                ${renderPublicationStatus(publicationStatus, publicationNote)}
                ${renderEpisodeDateTime(updated)}
                ${renderEpisodeDateTime(firstPublished)}
                <div class="row-actions"><button class="row-action" type="button" data-subtitle-drawer-open data-episode-label="${label}"${isEditLocked ? " disabled" : ""}>${t("editSubtitles")}</button></div>
              </article>
            `;
          }).join("");
          window.requestAnimationFrame(syncEpisodeStickyColumns);
        }

        function closeEpisodeFilterMenus() {
          episodeFilterTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
          document.querySelectorAll("[data-episode-filter-menu]").forEach((menu) => { menu.hidden = true; });
        }

        episodeFilterTriggers.forEach((trigger) => trigger.addEventListener("click", (event) => {
          event.stopPropagation();
          const menu = document.querySelector(`[data-episode-filter-menu="${trigger.dataset.episodeFilterTrigger}"]`);
          const shouldOpen = menu?.hidden;
          closeEpisodeFilterMenus();
          if (menu && shouldOpen) {
            menu.hidden = false;
            trigger.setAttribute("aria-expanded", "true");
          }
        }));

        episodeFilterOptions.forEach((option) => option.addEventListener("click", (event) => {
          event.stopPropagation();
          const field = option.dataset.episodeFilterOption;
          episodeFilters[field] = option.dataset.value;
          episodeFilterOptions.filter((item) => item.dataset.episodeFilterOption === field).forEach((item) => {
            item.setAttribute("aria-selected", String(item === option));
          });
          episodeCurrentPage = 1;
          closeEpisodeFilterMenus();
          renderEpisodeList();
        }));

        episodeFilterClears.forEach((filterClear) => filterClear.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          const trigger = filterClear.closest("[data-episode-filter-trigger]");
          const field = trigger.dataset.episodeFilterTrigger;
          episodeFilters[field] = "";
          episodeFilterOptions
            .filter((option) => option.dataset.episodeFilterOption === field)
            .forEach((option) => option.setAttribute("aria-selected", "false"));
          episodeCurrentPage = 1;
          closeEpisodeFilterMenus();
          renderEpisodeList();
        }));

        function closeEpisodePageSizeMenu() {
          if (!episodePageSizeSelect || !episodePageSizeTrigger || !episodePageSizeMenu) return;
          episodePageSizeSelect.classList.remove("open");
          episodePageSizeTrigger.setAttribute("aria-expanded", "false");
          episodePageSizeMenu.hidden = true;
        }

        episodePageSizeTrigger?.addEventListener("click", (event) => {
          event.stopPropagation();
          const shouldOpen = episodePageSizeMenu.hidden;
          closeEpisodePageSizeMenu();
          if (shouldOpen) {
            episodePageSizeSelect.classList.add("open");
            episodePageSizeTrigger.setAttribute("aria-expanded", "true");
            episodePageSizeMenu.hidden = false;
          }
        });

        episodePageSizeOptions.forEach((option) => option.addEventListener("click", (event) => {
          event.stopPropagation();
          episodePageSize = Number(option.dataset.episodePageSizeOption);
          episodeCurrentPage = 1;
          episodePageSizeOptions.forEach((item) => {
            const selected = item === option;
            item.classList.toggle("selected", selected);
            item.setAttribute("aria-checked", String(selected));
          });
          closeEpisodePageSizeMenu();
          renderEpisodeList();
        }));

        episodePageNumbers?.addEventListener("click", (event) => {
          const button = event.target.closest("[data-episode-page-number]");
          if (!button) return;
          episodeCurrentPage = Number(button.dataset.episodePageNumber);
          renderEpisodeList();
        });
        episodePrevPageButton?.addEventListener("click", () => {
          episodeCurrentPage = Math.max(1, episodeCurrentPage - 1);
          renderEpisodeList();
        });
        episodeNextPageButton?.addEventListener("click", () => {
          episodeCurrentPage += 1;
          renderEpisodeList();
        });
        episodePageSizeSelect?.addEventListener("click", (event) => event.stopPropagation());
        document.addEventListener("click", closeEpisodePageSizeMenu);
        document.addEventListener("click", closeEpisodeFilterMenus);

        function syncEpisodeStickyColumns() {
          if (!episodeCard || !episodeTableScroll) return;
          const scrollLeft = episodeTableScroll.scrollLeft;
          const isAtEnd = scrollLeft + episodeTableScroll.clientWidth >= episodeTableScroll.scrollWidth - 1;
          const cardRect = episodeCard.getBoundingClientRect();
          const firstHeaderCell = episodeCard.querySelector(".episode-table-header > :first-child");
          const lastHeaderCell = episodeCard.querySelector(".episode-table-header > :last-child");
          if (firstHeaderCell && lastHeaderCell) {
            episodeCard.style.setProperty("--episode-sticky-first-edge", `${firstHeaderCell.getBoundingClientRect().right - cardRect.left}px`);
            episodeCard.style.setProperty("--episode-sticky-last-edge", `${lastHeaderCell.getBoundingClientRect().left - cardRect.left}px`);
          }
          episodeCard.classList.toggle("is-scrolled-x", scrollLeft > 0);
          episodeCard.classList.toggle("is-scroll-end", isAtEnd);
        }

        episodeTableScroll?.addEventListener("scroll", () => window.requestAnimationFrame(syncEpisodeStickyColumns), { passive: true });
        window.addEventListener("resize", syncEpisodeStickyColumns);
        renderEpisodeList();

        function setRatingMenuOpen(isOpen) {
          if (!ratingTrigger || !ratingMenu) return;
          ratingTrigger.setAttribute("aria-expanded", String(isOpen));
          ratingMenu.hidden = !isOpen;
        }

        function closeRatingMenu() {
          setRatingMenuOpen(false);
        }

        function getRatingDisplayLabel(value) {
          return value === "All ages" ? t("allAges") : value;
        }

        function setRatingValue(value) {
          if (ratingLabel) {
            ratingLabel.textContent = getRatingDisplayLabel(value);
          }
          if (ratingValue) {
            ratingValue.value = value;
          }
          ratingMenu?.querySelectorAll("[data-rating-option]").forEach((option) => {
            option.setAttribute("aria-selected", String(option.dataset.ratingOption === value));
          });
        }

        function initRatingSelect() {
          setRatingValue(ratingValue?.value || "13+");

          ratingTrigger?.addEventListener("click", (event) => {
            event.stopPropagation();
            setRatingMenuOpen(ratingMenu?.hidden ?? true);
          });

          ratingMenu?.addEventListener("click", (event) => {
            event.stopPropagation();
            const option = event.target.closest("[data-rating-option]");
            if (!option) return;
            setRatingValue(option.dataset.ratingOption);
            validateRating();
            syncActionDirtyState();
            closeRatingMenu();
            ratingTrigger?.focus();
          });

          document.addEventListener("click", (event) => {
            if (ratingSelect && !ratingSelect.contains(event.target)) {
              closeRatingMenu();
            }
          });

          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
              closeRatingMenu();
            }
          });
        }

        function syncRegionAllState() {
          if (!regionAll || !regionOptions.length) return;
          const checkedCount = regionOptions.filter((input) => input.checked).length;
          regionAll.checked = checkedCount === regionOptions.length;
          regionAll.indeterminate = checkedCount > 0 && checkedCount < regionOptions.length;
        }

        function initRegionSelectAll() {
          syncRegionAllState();

          regionAll?.addEventListener("change", () => {
            regionAll.indeterminate = false;
            regionOptions.forEach((input) => {
              input.checked = regionAll.checked;
            });
            syncRegionAllState();
            validateRegions();
            syncActionDirtyState();
          });

          regionOptions.forEach((input) => {
            input.addEventListener("change", () => {
              syncRegionAllState();
              validateRegions();
              syncActionDirtyState();
            });
          });
        }

        syncFieldLimit(titleInput, titleCount, titleError, "title");
        syncFieldLimit(taglineInput, taglineCount, taglineError, "tagline");
        syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description");
        initRatingSelect();
        initRegionSelectAll();
        initCoverTools();
        validateCover();
        validatePaidStatus();
        validateRating();
        validateRegions();
        copyVideoLinkButton?.addEventListener("click", copyVideoLink);
        saveAction?.addEventListener("click", () => handlePrimaryAction(t("saveSuccess")));
        function submitPublication(destination = "") {
          if (!isFormDirty() || !validateRequiredForm(true)) return;
          const shell = document.querySelector(".shell");
          if (publishLoadingTip) publishLoadingTip.hidden = false;
          shell?.classList.add("is-loading", "is-publishing");
          window.setTimeout(() => {
            commitFormState();
            shell?.classList.remove("is-loading", "is-publishing");
            if (publishLoadingTip) publishLoadingTip.hidden = true;
            showSubtitleMessage(t("publishReviewSuccess"), "success");
            if (destination) window.setTimeout(() => { window.location.href = destination; }, 900);
          }, 1500);
        }
        publishAction?.addEventListener("click", () => submitPublication());
        resetAction?.addEventListener("click", () => {
          if (!isFormDirty()) return;
          restoreInitialFormState();
        });

        titleInput.addEventListener("input", () => {
          syncFieldLimit(titleInput, titleCount, titleError, "title");
          syncCoverTitlesFromAlbumTitle();
          syncSourceTranslation("title");
          syncSourceTag(titleSourceTag, "manual");
          syncActionDirtyState();
        });

        taglineInput.addEventListener("input", () => {
          syncFieldLimit(taglineInput, taglineCount, taglineError, "tagline");
          syncSourceTranslation("tagline");
          syncSourceTag(taglineSourceTag, "manual");
          syncActionDirtyState();
        });

        descriptionInput.addEventListener("input", () => {
          syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description");
          syncSourceTranslation("description");
          syncSourceTag(descriptionSourceTag, "manual");
          syncActionDirtyState();
        });

        const translationEntries = [
          {
            language: "简体中文",
            title: item.title,
            description: descriptionInput.value
          },
          {
            language: "英文",
            title: item.title,
            description: descriptionInput.value
          },
          {
            language: "繁体中文",
            title: "月光小酒館",
            description: "一部深夜喜劇短劇，描繪第六集上線前的關鍵轉折。"
          },
          {
            language: "泰文",
            title: "มูนลิต บิสโทร",
            description: "ซีรีส์คอมเมดี้ยามดึกที่พาไปถึงจุดเปลี่ยนก่อนตอนที่หกเผยแพร่"
          },
          {
            language: "马来语",
            title: "月光小酒馆",
            description: "Drama komedi lewat malam tentang titik perubahan sebelum episod keenam disiarkan."
          },
          {
            language: "印尼语",
            title: "月光小酒馆",
            description: "Drama komedi larut malam tentang titik balik sebelum episode keenam tayang."
          },
          {
            language: "越南语",
            title: "Quan An Anh Trang",
            description: "Mot phim hai kich dem khuya ve buoc ngoat truoc khi tap sau len song."
          },
          {
            language: "韩语",
            title: "문릿 비스트로",
            description: "6화 공개 전 중요한 전환점을 그린 심야 코미디 드라마입니다."
          },
          {
            language: "日语",
            title: "ムーンリット・ビストロ",
            description: "第6話の配信前に訪れる転機を描く深夜のコメディドラマです。"
          },
          {
            language: "西班牙语",
            title: "月光小酒馆",
            description: "Una comedia dramatica nocturna sobre el giro clave antes del estreno del sexto episodio."
          }
        ];
        translationEntries.forEach((entry, index) => {
          entry.tagline = index <= 1 ? taglineInput.value : Array.from(entry.description).slice(0, 40).join("");
        });
        translationEntries.forEach((entry) => {
          entry.title = item.title;
          entry.description = descriptionInput.value;
        });
        if (item.id === "VID-2408-0164") {
          Object.assign(translationEntries.find((entry) => entry.language === "英文"), {
            title: "Year After Year, Thankfully You’re Here",
            tagline: "Episode 6 brings a major turning point.",
            description: "This late-night comedy teaser reveals a major turning point ahead of Episode 6’s release."
          });
        }
        const generatedTranslationEntries = translationEntries.map((entry) => ({
          title: entry.title,
          tagline: entry.tagline,
          description: entry.description
        }));
        let activeTranslationIndex = 0;
        const translationSources = translationEntries.map(() => ({ title: "ai", tagline: "ai", description: "ai", cover: "ai" }));
        const baseCoverStyles = coverSlots.map((slot) => slot.querySelector(".cover-art")?.getAttribute("style") || "");
        const languageCoverStates = translationEntries.map((entry) =>
          coverSlots.map((slot, index) => ({
            title: entry.title,
            style: baseCoverStyles[index] || "",
            uploaded: false
          }))
        );
        getTranslationState = () => translationEntries.map((entry) => ({
          title: entry.title,
          tagline: entry.tagline,
          description: entry.description
        }));
        restoreTranslationState = (entries = []) => {
          entries.forEach((entry, index) => {
            if (!translationEntries[index]) return;
            translationEntries[index].title = entry.title;
            translationEntries[index].tagline = entry.tagline;
            translationEntries[index].description = entry.description;
          });
          if (!translationModal.hidden) {
            renderTranslations();
          }
        };

        function syncSourceTranslation(fieldKey) {
          const value = fieldKey === "description" ? descriptionInput.value : fieldKey === "tagline" ? taglineInput.value : titleInput.value;
          translationEntries[activeTranslationIndex][fieldKey] = value;
          translationSources[activeTranslationIndex][fieldKey] = "manual";
          if (translationModal.hidden || currentTranslationField !== fieldKey) return;
          const editingRow = translationList.querySelector(".translation-row.is-editing");
          const editingIndex = editingRow ? Number(editingRow.dataset.translationIndex) : -1;
          renderTranslations(editingIndex);
        }

        function syncSourceTag(tag, source) {
          if (!tag) return;
          const isManual = source === "manual";
          tag.classList.toggle("manual", isManual);
          tag.textContent = t(isManual ? "sourceManual" : "sourceAiGenerated");
        }

        function saveActiveLanguageCoverState() {
          languageCoverStates[activeTranslationIndex] = coverSlots.map((slot) => ({
            title: slot.dataset.coverTitleValue || titleInput.value,
            style: slot.querySelector(".cover-art")?.getAttribute("style") || "",
            uploaded: slot.dataset.coverUploaded === "true"
          }));
        }

        function loadContentLanguage(nextIndex) {
          if (!translationEntries[nextIndex] || nextIndex === activeTranslationIndex) return;
          translationEntries[activeTranslationIndex].title = titleInput.value;
          translationEntries[activeTranslationIndex].tagline = taglineInput.value;
          translationEntries[activeTranslationIndex].description = descriptionInput.value;
          saveActiveLanguageCoverState();
          closeCoverTitlePanel();
          activeTranslationIndex = nextIndex;
          const entry = translationEntries[nextIndex];
          activeContentLanguage = entry.language;
          titleInput.value = entry.title;
          taglineInput.value = entry.tagline;
          descriptionInput.value = entry.description;
          previewTitle.textContent = entry.title;
          languageCoverStates[nextIndex].forEach((state, index) => {
            const slot = coverSlots[index];
            if (!slot) return;
            slot.dataset.coverTitleValue = state.title;
            slot.dataset.coverUploaded = String(state.uploaded);
            const art = slot.querySelector(".cover-art");
            if (art) art.setAttribute("style", state.style);
            syncCoverSlotTitle(slot, state.title);
          });
          syncFieldLimit(titleInput, titleCount, titleError, "title");
          syncFieldLimit(taglineInput, taglineCount, taglineError, "tagline");
          syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description");
          syncSourceTag(titleSourceTag, translationSources[nextIndex].title);
          syncSourceTag(taglineSourceTag, translationSources[nextIndex].tagline);
          syncSourceTag(descriptionSourceTag, translationSources[nextIndex].description);
          syncSourceTag(coverSourceTag, translationSources[nextIndex].cover);
        }

        function closeContentLanguageMenu() {
          if (!contentLanguageMenu || !contentLanguageTrigger) return;
          contentLanguageMenu.hidden = true;
          contentLanguageTrigger.setAttribute("aria-expanded", "false");
        }

        contentLanguageTrigger?.addEventListener("click", () => {
          const willOpen = contentLanguageMenu.hidden;
          contentLanguageMenu.hidden = !willOpen;
          contentLanguageTrigger.setAttribute("aria-expanded", String(willOpen));
        });

        contentLanguageOptions.forEach((option) => {
          option.addEventListener("click", () => {
            const nextIndex = Number(option.dataset.contentLanguageOption);
            loadContentLanguage(nextIndex);
            contentLanguageValue.textContent = option.textContent.trim();
            contentLanguageOptions.forEach((item) => {
              item.setAttribute("aria-selected", String(item === option));
            });
            closeContentLanguageMenu();
            contentLanguageTrigger.focus();
          });
        });

        document.addEventListener("click", (event) => {
          if (contentLanguageFilter && !contentLanguageFilter.contains(event.target)) {
            closeContentLanguageMenu();
          }
        });

        contentLanguageTrigger?.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            closeContentLanguageMenu();
          }
        });

        function escapeHtml(value) {
          return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
        }

        function getTranslationLanguageLabel(language) {
          if (currentLanguage === "zh") return language;
          const labels = {
            "英文": "英文",
            "繁体中文": "繁体中文",
            "泰文": "泰语",
            "马来语": "马来语",
            "印尼语": "印尼语",
            "越南语": "越南语",
            "韩语": "韩语",
            "日语": "日语",
            "西班牙语": "西班牙语"
          };
          return labels[language] || language;
        }

        function renderTranslations(editingIndex = -1) {
          const isTitleField = currentTranslationField === "title";
          const fieldKey = isTitleField ? "title" : "description";
          const limit = fieldLimits[fieldKey];
          translationList.innerHTML = translationEntries
            .map((entry, index) => {
              const isEditing = index === editingIndex;
              const value = entry[fieldKey];
              const isModified = value !== generatedTranslationEntries[index][fieldKey];
              const languageLabel = getTranslationLanguageLabel(entry.language);
              const length = getCharacterLength(value);
              return `
                <article class="translation-row single-field${isEditing ? " is-editing" : ""}${isTitleField ? "" : " is-description"}" data-translation-index="${index}">
                  <div class="translation-language">
                    <span>${languageLabel}</span>
                    <span class="translation-status">
                      <span class="generated-badge${isModified ? " modified" : ""}">${isModified ? t("modified") : t("platformGenerated")}</span>
                    </span>
                  </div>
                  <div class="translation-cell">
                    ${
                      isEditing
                        ? `<div class="limited-field">${
                            isTitleField
                              ? `<input class="translation-input" value="${escapeHtml(value)}" data-translation-value-input />`
                              : `<textarea class="translation-textarea" data-translation-value-input>${escapeHtml(value)}</textarea>`
                          }<div class="translation-meta"><span class="char-count" data-translation-count>${length}/${limit.max}</span></div></div><span class="translation-error limit-error" data-translation-error hidden></span>`
                        : `<button class="translation-value" type="button" data-translation-start-edit>${escapeHtml(value)}</button>`
                    }
                  </div>
                  ${
                    isEditing
                      ? `<button class="spec-btn primary translation-edit" type="button" data-translation-edit>${t("complete")}</button>`
                      : isModified
                        ? `<button class="translation-reset" type="button" data-translation-reset>重置</button>`
                        : `<span aria-hidden="true"></span>`
                  }
                </article>
              `;
            })
            .join("");

          if (editingIndex >= 0) {
            const editor = translationList.querySelector("[data-translation-value-input]");
            if (editor) {
              editor.focus();
              const cursorPosition = editor.value.length;
              editor.setSelectionRange(cursorPosition, cursorPosition);
              syncTranslationEditorLimit(editor);
            }
          }
        }

        function syncTranslationEditorLimit(editor) {
          const fieldKey = currentTranslationField === "description" ? "description" : "title";
          const limit = fieldLimits[fieldKey];
          const row = editor.closest("[data-translation-index]");
          const countNode = row.querySelector("[data-translation-count]");
          const errorNode = row.querySelector("[data-translation-error]");
          const completeButton = row.querySelector("[data-translation-edit]");
          const length = getCharacterLength(editor.value);
          const hasError = length > limit.max;
          countNode.textContent = `${length}/${limit.max}`;
          editor.classList.toggle("is-invalid", hasError);
          row.classList.toggle("has-error", hasError);
          errorNode.textContent = hasError ? t("maxLengthError", t(limit.labelKey), limit.max) : "";
          errorNode.hidden = !hasError;
          if (completeButton) {
            completeButton.disabled = hasError;
          }
          return !hasError;
        }

        function openTranslationModal(field) {
          currentTranslationField = field === "description" ? "description" : "title";
          translationModalTitle.textContent = field === "description" ? t("descriptionMultilingualTitle") : t("titleMultilingualTitle");
          syncSourceTranslation(currentTranslationField);
          renderTranslations();
          translationModal.hidden = false;
          translationClose.focus();
        }

        function closeTranslationModal() {
          translationModal.hidden = true;
        }

        function renderCoverTranslationList() {
          if (!coverTranslationList) return;
          coverTranslationList.innerHTML = translationEntries
            .map((entry) => {
              const languageLabel = getTranslationLanguageLabel(entry.language);
              return `
              <article class="poster-row">
                <div class="translation-language">
                  <span>${languageLabel}</span>
                  <span class="translation-status">
                    <span class="generated-badge">${t("platformGenerated")}</span>
                  </span>
                </div>
                <div class="poster-preview-set" aria-label="${languageLabel} poster previews">
                  <div class="poster-preview-item landscape" data-poster-item data-poster-title-value="${escapeHtml(entry.title)}" data-poster-default-title="${escapeHtml(entry.title)}">
                    <div class="poster-frame">
                      <span class="poster-art" aria-hidden="true">
                        <span class="poster-title-art" data-poster-title="${escapeHtml(entry.title)}">${escapeHtml(entry.title)}</span>
                      </span>
                      <div class="cover-overlay" aria-label="${languageLabel} 16:9 poster actions">
                        <button class="cover-hover-action" type="button" data-poster-upload>${t("reupload")}</button>
                        <button class="cover-hover-action" type="button" data-poster-title-toggle>${t("titleWrap")}</button>
                      </div>
                      <input class="cover-file-input" type="file" accept="image/*" data-poster-file />
                    </div>
                    <span class="poster-preview-label">${t("coverLandscape")}</span>
                  </div>
                  <div class="poster-preview-item portrait" data-poster-item data-poster-title-value="${escapeHtml(entry.title)}" data-poster-default-title="${escapeHtml(entry.title)}">
                    <div class="poster-frame">
                      <span class="poster-art" aria-hidden="true">
                        <span class="poster-title-art" data-poster-title="${escapeHtml(entry.title)}">${escapeHtml(entry.title)}</span>
                      </span>
                      <div class="cover-overlay" aria-label="${languageLabel} 3:4 poster actions">
                        <button class="cover-hover-action" type="button" data-poster-upload>${t("reupload")}</button>
                        <button class="cover-hover-action" type="button" data-poster-title-toggle>${t("titleWrap")}</button>
                      </div>
                      <input class="cover-file-input" type="file" accept="image/*" data-poster-file />
                    </div>
                    <span class="poster-preview-label">${t("coverPortrait")}</span>
                  </div>
                </div>
                <div class="cover-title-panel poster-title-panel" hidden data-poster-title-panel>
                  <div class="cover-title-panel-head">
                    <span class="cover-title-panel-title" data-poster-title-panel-title>${t("titleWrap")}</span>
                  </div>
                  <textarea class="cover-title-textarea" rows="3" spellcheck="false" data-poster-title-input></textarea>
                  <div class="cover-title-panel-actions">
                    <div class="cover-title-panel-actions-left">
                      <button class="edit-action" type="button" data-poster-title-cancel>${t("cancel")}</button>
                      <button class="edit-action" type="button" data-poster-title-restore>${t("restoreDefault")}</button>
                    </div>
                    <div class="cover-title-panel-actions-right">
                      <button class="edit-action" type="button" data-poster-title-apply-all>${t("applyAll")}</button>
                      <button class="edit-action primary" type="button" data-poster-title-apply-current>${t("applyCurrent")}</button>
                    </div>
                  </div>
                </div>
              </article>
            `;
            })
            .join("");
          window.StudioCovers.applyPosters(item, coverTranslationList);
        }

        function openCoverTranslationModal() {
          if (!coverTranslationModal) return;
          activePosterItem = null;
          posterTitleSnapshot = "";
          renderCoverTranslationList();
          coverTranslationModal.hidden = false;
          coverTranslationClose?.focus();
        }

        function closeCoverTranslationModal() {
          coverTranslationList?.querySelectorAll(".poster-row").forEach((row) => closePosterTitlePanel(row));
          if (coverTranslationModal) {
            coverTranslationModal.hidden = true;
          }
        }

        function getPosterPanel(row) {
          return row?.querySelector("[data-poster-title-panel]");
        }

        function getPosterPanelInput(panel) {
          return panel?.querySelector("[data-poster-title-input]");
        }

        function setPosterPanelActionsEnabled(panel, enabled) {
          panel?.querySelector("[data-poster-title-apply-all]")?.toggleAttribute("disabled", !enabled);
          panel?.querySelector("[data-poster-title-apply-current]")?.toggleAttribute("disabled", !enabled);
        }

        function syncPosterPanelActionState(panel) {
          const input = getPosterPanelInput(panel);
          setPosterPanelActionsEnabled(panel, Boolean(input && input.value !== posterTitleSnapshot));
        }

        function syncPosterItemTitle(posterItem, value) {
          const titleNode = posterItem?.querySelector(".poster-title-art");
          if (titleNode) {
            titleNode.textContent = value || posterItem.dataset.posterDefaultTitle || "";
          }
        }

        function applyPosterTitleToItem(posterItem, value) {
          if (!posterItem) return;
          posterItem.dataset.posterTitleValue = value;
          syncPosterItemTitle(posterItem, value);
        }

        function applyPosterTitleToAll(row, value) {
          row?.querySelectorAll("[data-poster-item]").forEach((posterItem) => {
            applyPosterTitleToItem(posterItem, value);
          });
        }

        function closePosterTitlePanel(row) {
          row?.classList.remove("has-title-editor");
          row?.querySelectorAll("[data-poster-item]").forEach((posterItem) => posterItem.classList.remove("is-title-editing"));
          const panel = getPosterPanel(row);
          if (panel) {
            panel.hidden = true;
            setPosterPanelActionsEnabled(panel, false);
          }
          activePosterItem = null;
          posterTitleSnapshot = "";
        }

        function openPosterTitlePanel(posterItem) {
          const row = posterItem.closest(".poster-row");
          const panel = getPosterPanel(row);
          const input = getPosterPanelInput(panel);
          const title = panel?.querySelector("[data-poster-title-panel-title]");
          if (!row || !panel || !input || !title) return;
          const isSameOpen = activePosterItem === posterItem && !panel.hidden;
          coverTranslationList.querySelectorAll(".poster-row").forEach((item) => closePosterTitlePanel(item));
          if (isSameOpen) return;

          activePosterItem = posterItem;
          row.classList.add("has-title-editor");
          posterItem.classList.add("is-title-editing");
          const label = posterItem.querySelector(".poster-preview-label")?.textContent || t("cover");
          title.textContent = t("coverTitlePanelTitle", label);
          input.value = posterItem.dataset.posterTitleValue || posterItem.dataset.posterDefaultTitle || "";
          posterTitleSnapshot = input.value;
          syncPosterPanelActionState(panel);
          panel.hidden = false;
          input.focus();
          const cursorPosition = input.value.length;
          input.setSelectionRange(cursorPosition, cursorPosition);
        }

        function syncActivePosterTitle(value, cursorPosition) {
          if (!activePosterItem) return;
          const row = activePosterItem.closest(".poster-row");
          const panel = getPosterPanel(row);
          const input = getPosterPanelInput(panel);
          if (!input) return;
          input.value = value;
          applyPosterTitleToItem(activePosterItem, value);
          syncPosterPanelActionState(panel);
          if (Number.isInteger(cursorPosition)) {
            input.setSelectionRange(cursorPosition, cursorPosition);
          }
        }

        function restoreDefaultPosterTitle(panel) {
          if (!activePosterItem) return;
          const value = activePosterItem.dataset.posterDefaultTitle || "";
          syncActivePosterTitle(value, value.length);
        }

        function cancelPosterTitleChange(panel) {
          if (!activePosterItem) return;
          const row = activePosterItem.closest(".poster-row");
          applyPosterTitleToItem(activePosterItem, posterTitleSnapshot || activePosterItem.dataset.posterDefaultTitle || "");
          closePosterTitlePanel(row);
        }

        function handlePosterTitleKeydown(event) {
          if (!activePosterItem) return;
          const allowedKeys = new Set([
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
            "PageUp",
            "PageDown",
            "Tab",
            "Escape",
            "Shift",
            "Control",
            "Meta",
            "Alt"
          ]);
          if ((event.metaKey || event.ctrlKey) && ["a", "c"].includes(event.key.toLowerCase())) {
            return;
          }
          if (allowedKeys.has(event.key)) return;

          const input = event.target.closest("[data-poster-title-input]");
          if (!input) return;
          const value = input.value;
          const start = input.selectionStart;
          const end = input.selectionEnd;
          event.preventDefault();

          if (event.key === "Enter") {
            syncActivePosterTitle(value.slice(0, start) + "\n" + value.slice(start), start + 1);
            return;
          }

          if (event.key === "Backspace") {
            if (start !== end) {
              const next = removeLineBreaksInSelection(value, start, end);
              if (next) syncActivePosterTitle(next.value, next.cursorPosition);
              return;
            }
            if (start > 0 && value[start - 1] === "\n") {
              syncActivePosterTitle(value.slice(0, start - 1) + value.slice(start), start - 1);
            }
            return;
          }

          if (event.key === "Delete") {
            if (start !== end) {
              const next = removeLineBreaksInSelection(value, start, end);
              if (next) syncActivePosterTitle(next.value, next.cursorPosition);
              return;
            }
            if (value[start] === "\n") {
              syncActivePosterTitle(value.slice(0, start) + value.slice(start + 1), start);
            }
          }
        }

        coverTranslationList?.addEventListener("click", (event) => {
          const uploadButton = event.target.closest("[data-poster-upload]");
          if (uploadButton) {
            const frame = uploadButton.closest(".poster-frame");
            frame?.querySelector("[data-poster-file]")?.click();
            return;
          }

          const titleButton = event.target.closest("[data-poster-title-toggle]");
          if (titleButton) {
            const posterItem = titleButton.closest("[data-poster-item]");
            if (posterItem) {
              openPosterTitlePanel(posterItem);
            }
            return;
          }

          const cancelButton = event.target.closest("[data-poster-title-cancel]");
          if (cancelButton) {
            cancelPosterTitleChange(cancelButton.closest("[data-poster-title-panel]"));
            return;
          }

          const restoreButton = event.target.closest("[data-poster-title-restore]");
          if (restoreButton) {
            restoreDefaultPosterTitle(restoreButton.closest("[data-poster-title-panel]"));
            return;
          }

          const applyAllButton = event.target.closest("[data-poster-title-apply-all]");
          if (applyAllButton) {
            if (applyAllButton.disabled) return;
            const row = applyAllButton.closest(".poster-row");
            const panel = getPosterPanel(row);
            const input = getPosterPanelInput(panel);
            if (!input) return;
            applyPosterTitleToAll(row, input.value);
            closePosterTitlePanel(row);
            showCoverMessage();
            syncActionDirtyState();
            return;
          }

          const applyCurrentButton = event.target.closest("[data-poster-title-apply-current]");
          if (applyCurrentButton) {
            if (applyCurrentButton.disabled || !activePosterItem) return;
            const row = activePosterItem.closest(".poster-row");
            const panel = getPosterPanel(row);
            const input = getPosterPanelInput(panel);
            if (!input) return;
            applyPosterTitleToItem(activePosterItem, input.value);
            closePosterTitlePanel(row);
            showCoverMessage();
            syncActionDirtyState();
          }
        });

        coverTranslationList?.addEventListener("keydown", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            handlePosterTitleKeydown(event);
          }
        });

        coverTranslationList?.addEventListener("beforeinput", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            event.preventDefault();
          }
        });

        coverTranslationList?.addEventListener("paste", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            event.preventDefault();
          }
        });

        coverTranslationList?.addEventListener("cut", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            event.preventDefault();
          }
        });

        coverTranslationList?.addEventListener("drop", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            event.preventDefault();
          }
        });

        coverTranslationList?.addEventListener("input", (event) => {
          const input = event.target.closest("[data-poster-title-input]");
          if (!input || !activePosterItem || input.value === activePosterItem.dataset.posterTitleValue) return;
          input.value = activePosterItem.dataset.posterTitleValue || activePosterItem.dataset.posterDefaultTitle || "";
        });

        coverTranslationList?.addEventListener("change", (event) => {
          const fileInput = event.target.closest("[data-poster-file]");
          if (!fileInput) return;
          const file = fileInput.files && fileInput.files[0];
          const posterArt = fileInput.closest(".poster-frame")?.querySelector(".poster-art");
          if (!file || !posterArt) return;
          const nextUrl = URL.createObjectURL(file);
          posterArt.style.backgroundImage = `url("${nextUrl}")`;
          posterArt.style.backgroundSize = "cover";
          posterArt.style.backgroundPosition = "center";
          markDynamicDirty();
        });

        translationOpenButtons.forEach((button) => {
          button.addEventListener("click", () => {
            openTranslationModal(button.dataset.translationField);
          });
        });

        coverTranslationOpen?.addEventListener("click", openCoverTranslationModal);
        coverTranslationClose?.addEventListener("click", closeCoverTranslationModal);
        coverTranslationModal?.addEventListener("click", (event) => {
          if (event.target === coverTranslationModal) {
            closeCoverTranslationModal();
          }
        });

        function closeEpisodePreviewModal() {
          if (!episodePreviewModal) return;
          episodePreviewModal.hidden = true;
          episodePreviewModal.classList.remove("subtitle-preview-active");
          if (previewLanguageSelect) previewLanguageSelect.hidden = true;
          if (previewLanguageMenu) previewLanguageMenu.hidden = true;
          previewLanguageTrigger?.setAttribute("aria-expanded", "false");
          if (episodePreviewCaption) episodePreviewCaption.hidden = true;
          episodePreviewVideo?.pause();
          if (episodePreviewVideo) episodePreviewVideo.currentTime = 0;
        }

        const previewSubtitleSamples = {
          simplifiedChinese: "月光下的餐厅，今晚终于重新开门了。",
          english: "月光下的餐厅，今晚终于重新开门了。",
          thai: "ร้านอาหารใต้แสงจันทร์กลับมาเปิดอีกครั้งในคืนนี้",
          malay: "月光下的餐厅，今晚终于重新开门了。"
        };

        function setPreviewSubtitleLanguage(language) {
          const nextLanguage = previewSubtitleSamples[language] ? language : "simplifiedChinese";
          if (previewLanguageValue) previewLanguageValue.textContent = t(nextLanguage);
          if (episodePreviewCaption) {
            episodePreviewCaption.textContent = previewSubtitleSamples[nextLanguage];
            episodePreviewCaption.hidden = false;
          }
          previewLanguageOptions.forEach((option) => option.setAttribute("aria-selected", String(option.dataset.previewLanguageOption === nextLanguage)));
        }

        previewLanguageTrigger?.addEventListener("click", (event) => {
          event.stopPropagation();
          const shouldOpen = previewLanguageMenu?.hidden;
          if (previewLanguageMenu) previewLanguageMenu.hidden = !shouldOpen;
          previewLanguageTrigger.setAttribute("aria-expanded", String(Boolean(shouldOpen)));
        });

        previewLanguageOptions.forEach((option) => option.addEventListener("click", () => {
          setPreviewSubtitleLanguage(option.dataset.previewLanguageOption);
          if (previewLanguageMenu) previewLanguageMenu.hidden = true;
          previewLanguageTrigger?.setAttribute("aria-expanded", "false");
          previewLanguageTrigger?.focus();
        }));

        function openSubtitleDrawer(trigger) {
          if (!subtitleDrawerOverlay || !subtitleDrawer) return;
          subtitleDrawerReturnFocus = trigger;
          subtitleDrawerDirty = false;
          const episodeLabel = trigger.dataset.episodeLabel || t("episodeLabel", 1);
          activeSubtitleEpisodeLabel = episodeLabel;
          if (subtitleDrawerDescription) subtitleDrawerDescription.textContent = `${item.title} · ${episodeLabel}`;
          subtitleDrawerOverlay.setAttribute("aria-hidden", "false");
          window.requestAnimationFrame(() => {
            subtitleDrawerOverlay.classList.add("is-open");
            subtitleDrawer.focus();
          });
        }

        function closeSubtitleDrawer() {
          if (!subtitleDrawerOverlay?.classList.contains("is-open")) return;
          subtitleDrawerOverlay.classList.remove("is-open");
          subtitleDrawerOverlay.setAttribute("aria-hidden", "true");
          const returnFocus = subtitleDrawerReturnFocus;
          window.setTimeout(() => returnFocus?.focus(), 200);
        }

        function showSubtitleMessage(content, type = "error") {
          if (!subtitleMessagePortal) return;
          const iconPath = type === "success" ? '<path d="m4 12 5 5L20 6" />' : '<path d="M7 7l10 10M17 7 7 17" />';
          subtitleMessagePortal.innerHTML = `<div class="subtitle-feedback-message ${type}" role="${type === "error" ? "alert" : "status"}"><span class="message-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${iconPath}</svg></span><span>${content}</span></div>`;
          window.setTimeout(() => { subtitleMessagePortal.innerHTML = ""; }, 3200);
        }

        function hideSubtitleConfirm() {
          if (!subtitleConfirm) return;
          subtitleConfirm.classList.remove("is-open");
          window.setTimeout(() => { if (!subtitleConfirm.classList.contains("is-open")) subtitleConfirm.hidden = true; }, 300);
        }

        function showSubtitleConfirm({ title, description, actions }) {
          if (!subtitleConfirm || !subtitleConfirmFooter) return;
          subtitleConfirmTitle.textContent = title;
          subtitleConfirmDescription.textContent = description;
          subtitleConfirmFooter.innerHTML = "";
          actions.forEach(({ label, className, action, deferClose = false }) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = className;
            button.textContent = label;
            button.addEventListener("click", () => {
              if (!deferClose) hideSubtitleConfirm();
              action?.(button);
            });
            subtitleConfirmFooter.append(button);
          });
          subtitleConfirm.hidden = false;
          window.requestAnimationFrame(() => {
            subtitleConfirm.classList.add("is-open");
            subtitleConfirm.querySelector(".subtitle-confirm-dialog")?.focus();
          });
        }

        subtitleConfirmClose?.addEventListener("click", hideSubtitleConfirm);

        function requestCloseSubtitleDrawer() {
          closeSubtitleDrawer();
        }

        function manualSourceTag() {
          return `<span class="content-source-tag manual">${t("manualLabel")}</span>`;
        }


        function escapeSubtitleText(value) {
          return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
        }


        function setSubtitleRowUploaded(row, file) {
          const cells = row?.cells;
          if (!cells) return;
          cells[1].innerHTML = `<span class="subtitle-file-name">${escapeSubtitleText(file.name)}</span>`;
          cells[2].innerHTML = manualSourceTag();
          cells[3].innerHTML = `<span class="subtitle-upload-status">${t("uploaded")}</span>`;
          cells[4].innerHTML = `<span class="subtitle-row-actions"><button class="row-action small" type="button" data-subtitle-upload-row>${t("modify")}</button><button class="row-action subtitle-preview-action" type="button" data-subtitle-preview aria-label="${t("subtitlePreview")}"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8.5 6.5 9.5 5.5-9.5 5.5v-11Z" /></svg></button></span>`;
          subtitleDrawerDirty = true;
        }

        function uploadSubtitleFile(row, file) {
          const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
          if (![".srt", ".vtt", ".ass", ".ssa"].includes(extension)) { showSubtitleMessage(t("invalidSubtitleFormat")); return; }
          subtitleDrawerDirty = true;
          const statusCell = row.cells[3];
          statusCell.innerHTML = `<span class="subtitle-upload-progress"><span>${t("uploading")} 0%</span><span class="subtitle-progress-track"><i class="subtitle-progress-bar"></i></span></span>`;
          let progress = 0;
          const timer = window.setInterval(() => {
            progress = Math.min(100, progress + 20);
            const label = statusCell.querySelector(".subtitle-upload-progress > span");
            const bar = statusCell.querySelector(".subtitle-progress-bar");
            if (label) label.textContent = `${t("uploading")} ${progress}%`;
            if (bar) bar.style.width = `${progress}%`;
            if (progress < 100) return;
            window.clearInterval(timer);
            const language = row.querySelector("td[data-i18n]")?.dataset.i18n;
            if (language === "indonesian" || file.name.toLowerCase().includes("fail")) {
              statusCell.textContent = "—";
              showSubtitleMessage(t("uploadFailedRetry"));
              return;
            }
            setSubtitleRowUploaded(row, file);
            showSubtitleMessage(t("subtitleUploadEffectiveAfterPublish"), "success");
          }, 180);
        }

        function findSubtitleRowForFile(file) {
          const codes = { simplifiedChinese: ["zh-cn"], english: ["en-us", ".en."], traditionalChinese: ["zh-tw", "zh-hk"], thai: ["th-th", ".th."], malay: ["ms-my", ".ms."], indonesian: ["id-id", ".id."], vietnamese: ["vi-vn", ".vi."], korean: ["ko-kr", ".ko."], japanese: ["ja-jp", ".ja."], spanish: ["es-es", ".es."] };
          const name = file.name.toLowerCase();
          const key = Object.keys(codes).find((language) => codes[language].some((code) => name.includes(code)));
          return key ? subtitleTableBody?.querySelector(`td[data-i18n="${key}"]`)?.closest("tr") : null;
        }

        function populateEmptySubtitleExamples() {
          const fileCodes = {
            traditionalChinese: "zh-TW",
            indonesian: "id-ID",
            vietnamese: "vi-VN",
            korean: "ko-KR",
            japanese: "ja-JP",
            spanish: "es-ES"
          };
          const aiSourceMarkup = subtitleTableBody?.querySelector("tr")?.cells[2]?.innerHTML || "";
          subtitleTableBody?.querySelectorAll("tr").forEach((row) => {
            const languageKey = row.cells[0]?.dataset.i18n;
            const fileCode = fileCodes[languageKey];
            if (!fileCode || row.cells[1]?.textContent.trim() !== "—") return;
            row.cells[1].innerHTML = `<span class="subtitle-file-name">episode01.${fileCode}.srt</span>`;
            row.cells[2].innerHTML = aiSourceMarkup;
            row.cells[3].innerHTML = `<span class="subtitle-upload-status">${t("uploaded")}</span>`;
            row.cells[4].innerHTML = `<span class="subtitle-row-actions"><button class="row-action small" type="button" data-subtitle-upload-row>${t("modify")}</button><button class="row-action subtitle-preview-action" type="button" data-subtitle-preview aria-label="${t("subtitlePreview")}"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8.5 6.5 9.5 5.5-9.5 5.5v-11Z" /></svg></button></span>`;
          });
        }

        function syncSubtitleReviewIndicators() {
          if (!subtitleTableBody) return;
          const affectedLanguages = ["english", "malay", "thai"];
          affectedLanguages.forEach((languageKey) => {
            const cell = subtitleTableBody.querySelector(`td[data-i18n="${languageKey}"]`);
            if (!cell) return;
            if (!(item.id === "VID-2408-0181" && isReviewRejected)) {
              cell.textContent = t(languageKey);
              return;
            }
            cell.innerHTML = `<span class="subtitle-language-label">${t(languageKey)}</span><span class="field-review-indicator subtitle-review-indicator" role="button" tabindex="0"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v6" /><path d="M12 17h.01" /></svg><span class="field-review-tooltip" role="tooltip"><strong>${t("subtitleReviewRejectedSync")}</strong><span>${t("subtitleSyncGuidance")}</span></span></span>`;
          });
        }

        populateEmptySubtitleExamples();
        syncSubtitleReviewIndicators();

        episodeList?.addEventListener("click", (event) => {
          const trigger = event.target.closest("[data-subtitle-drawer-open]");
          if (trigger) openSubtitleDrawer(trigger);
        });
        subtitleDrawerCloseButtons.forEach((button) => button.addEventListener("click", requestCloseSubtitleDrawer));
        subtitleDrawerOverlay?.addEventListener("click", (event) => {
          if (event.target === subtitleDrawerOverlay) requestCloseSubtitleDrawer();
        });
        function saveSubtitleChanges(button, closeConfirm = false) {
          if (!button || button.disabled) return;
          const hadChanges = subtitleDrawerDirty;
          button.disabled = true;
          button.classList.add("subtitle-drawer-save-loading");
          button.innerHTML = `<span class="subtitle-button-spinner" aria-hidden="true"></span><span>${t("saving")}</span>`;
          window.setTimeout(() => {
            subtitleDrawerDirty = false;
            if (hadChanges) markDynamicDirty();
            if (closeConfirm) hideSubtitleConfirm();
            closeSubtitleDrawer();
            button.disabled = false;
            button.classList.remove("subtitle-drawer-save-loading");
            button.textContent = closeConfirm ? t("saveAndClose") : t("save");
            window.setTimeout(() => showSubtitleMessage(t("saveSuccess"), "success"), closeConfirm ? 300 : 200);
          }, 1500);
        }

        subtitleDrawerSave?.addEventListener("click", () => saveSubtitleChanges(subtitleDrawerSave));

        const guardedContentLinks = [
          document.querySelector(".edit-backbutton[href^='content.html']"),
          document.querySelector(".sidebar .nav-link[href^='content.html']")
        ].filter(Boolean);

        // Only accept a return destination in this Studio directory.
        try {
          const returnTo = params.get("returnTo");
          const destination = returnTo ? new URL(returnTo, location.href) : null;
          const contentURL = new URL("content.html", location.href);
          if (destination && destination.origin === contentURL.origin && destination.pathname === contentURL.pathname) {
            const backLink = document.querySelector(".edit-backbutton");
            if (backLink) backLink.href = destination.href;
          }
        } catch (_) { /* Keep the normal content link for malformed URLs. */ }

        guardedContentLinks.forEach((link) => link.addEventListener("click", (event) => {
          if (!isFormDirty()) return;
          event.preventDefault();
          const destination = link.href;
          showSubtitleConfirm({
            title: t("unpublishedChangesTitle"),
            description: t("unpublishedChangesDescription"),
            actions: [
              { label: t("cancel"), className: "spec-btn secondary" },
              { label: t("confirmExit"), className: "spec-btn primary", action: () => { window.location.href = destination; } }
            ]
          });
        }));
        subtitleBatchUpload?.addEventListener("click", () => { activeSubtitleUploadRow = null; subtitleFileInput?.setAttribute("multiple", ""); subtitleFileInput?.click(); });
        subtitleTableBody?.addEventListener("click", (event) => {
          const previewButton = event.target.closest("[data-subtitle-preview]");
          if (previewButton && episodePreviewModal) {
            const row = previewButton.closest("tr");
            const languageKey = row?.cells[0]?.dataset.i18n || "simplifiedChinese";
            if (episodePreviewTitle) episodePreviewTitle.textContent = `${t("episodePreview")} · ${activeSubtitleEpisodeLabel || t("episodeLabel", 1)}`;
            episodePreviewModal.classList.add("subtitle-preview-active");
            if (previewLanguageSelect) previewLanguageSelect.hidden = false;
            setPreviewSubtitleLanguage(languageKey);
            episodePreviewModal.hidden = false;
            episodePreviewVideo?.play().catch(() => {});
            return;
          }
          const uploadButton = event.target.closest("[data-subtitle-upload-row]");
          if (uploadButton) { activeSubtitleUploadRow = uploadButton.closest("tr"); subtitleFileInput?.removeAttribute("multiple"); subtitleFileInput?.click(); return; }
        });
        subtitleFileInput?.addEventListener("change", () => {
          Array.from(subtitleFileInput.files || []).forEach((file) => {
            const row = activeSubtitleUploadRow || findSubtitleRowForFile(file);
            if (row) uploadSubtitleFile(row, file); else showSubtitleMessage(t("invalidSubtitleFormat"));
          });
          subtitleFileInput.value = "";
        });

        episodeList?.addEventListener("click", (event) => {
          const trigger = event.target.closest("[data-episode-preview-trigger]");
          if (!trigger || !episodePreviewModal) return;
          if (episodePreviewTitle) episodePreviewTitle.textContent = `${t("episodePreview")} · ${trigger.dataset.episodePreviewLabel}`;
          if (previewLanguageSelect) previewLanguageSelect.hidden = false;
          setPreviewSubtitleLanguage("simplifiedChinese");
          episodePreviewModal.hidden = false;
          episodePreviewVideo?.play().catch(() => {});
        });
        episodePreviewClose?.addEventListener("click", closeEpisodePreviewModal);
        episodePreviewModal?.addEventListener("click", (event) => {
          if (event.target === episodePreviewModal) closeEpisodePreviewModal();
        });
        document.addEventListener("click", (event) => {
          if (!event.target.closest("[data-preview-language-select]")) {
            if (previewLanguageMenu) previewLanguageMenu.hidden = true;
            previewLanguageTrigger?.setAttribute("aria-expanded", "false");
          }
        });

        translationClose.addEventListener("click", closeTranslationModal);
        translationModal.addEventListener("click", (event) => {
          if (event.target === translationModal) {
            closeTranslationModal();
          }
        });

        translationList.addEventListener("click", (event) => {
          const resetButton = event.target.closest("[data-translation-reset]");
          if (resetButton) {
            const row = resetButton.closest("[data-translation-index]");
            const index = Number(row.dataset.translationIndex);
            const fieldKey = currentTranslationField === "description" ? "description" : "title";
            translationEntries[index][fieldKey] = generatedTranslationEntries[index][fieldKey];
            renderTranslations();
            syncActionDirtyState();
            return;
          }

          const valueButton = event.target.closest("[data-translation-start-edit]");
          if (valueButton) {
            const row = valueButton.closest("[data-translation-index]");
            renderTranslations(Number(row.dataset.translationIndex));
            return;
          }

          const editButton = event.target.closest("[data-translation-edit]");
          if (!editButton) return;
          if (editButton.disabled) return;
          const row = editButton.closest("[data-translation-index]");
          const index = Number(row.dataset.translationIndex);
          const valueEditor = row.querySelector("[data-translation-value-input]");
          if (valueEditor) {
            syncTranslationEditorLimit(valueEditor);
            const fieldKey = currentTranslationField === "description" ? "description" : "title";
            translationEntries[index][fieldKey] = valueEditor.value.trim() || translationEntries[index][fieldKey];
            renderTranslations();
            syncActionDirtyState();
            return;
          }
          renderTranslations(index);
        });

        translationList.addEventListener("input", (event) => {
          const editor = event.target.closest("[data-translation-value-input]");
          if (!editor) return;
          syncTranslationEditorLimit(editor);
          syncActionDirtyState();
        });

        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape" && !translationModal.hidden) {
            closeTranslationModal();
          }
          if (event.key === "Escape" && coverTranslationModal && !coverTranslationModal.hidden) {
            closeCoverTranslationModal();
          }
          if (event.key === "Escape" && episodePreviewModal && !episodePreviewModal.hidden) {
            closeEpisodePreviewModal();
          }
          if (event.key === "Escape" && subtitleDrawerOverlay?.classList.contains("is-open")) {
            requestCloseSubtitleDrawer();
          }
        });
        syncSourceTag(titleSourceTag, translationSources[activeTranslationIndex].title);
        syncSourceTag(taglineSourceTag, translationSources[activeTranslationIndex].tagline);
        syncSourceTag(descriptionSourceTag, translationSources[activeTranslationIndex].description);
        syncSourceTag(coverSourceTag, translationSources[activeTranslationIndex].cover);
        commitFormState();
        applyPublishingLock();
      })();
    
