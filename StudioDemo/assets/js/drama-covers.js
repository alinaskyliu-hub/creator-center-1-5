// Use the original content-list ID mapping; keep all page text and categories unchanged.
(() => {
  "use strict";
  const catalog = {
  "VID-2408-0192": {
    "landscape": "assets/images/cover/短剧/宇宙派送来的他-横图.jpg",
    "portrait": "assets/images/cover/短剧/宇宙派送来的他-竖图.jpg"
  },
  "VID-2408-0164": {
    "landscape": "assets/images/cover/短剧/岁岁寻常，幸而有你-横图.jpg",
    "portrait": "assets/images/cover/短剧/岁岁寻常，幸而有你-竖图.jpg"
  },
  "VID-2408-0142": {
    "landscape": "assets/images/cover/短剧/惊月怀景-横图.jpg",
    "portrait": "assets/images/cover/短剧/惊月怀景-竖图.jpg"
  },
  "VID-2408-0128": {
    "landscape": "assets/images/cover/短剧/我养出末世伪救世主-横图.jpg",
    "portrait": "assets/images/cover/短剧/我养出末世伪救世主-竖图.jpg"
  },
  "VID-2408-0158": {
    "landscape": "assets/images/cover/短剧/晚风知意，竹马情深-横图.jpg",
    "portrait": "assets/images/cover/短剧/晚风知意，竹马情深-竖图.jpg"
  },
  "VID-2408-0151": {
    "landscape": "assets/images/cover/短剧/百日昏迷：梦获传承，醒来绝世高手第二季-横图.jpg",
    "portrait": "assets/images/cover/短剧/百日昏迷：梦获传承，醒来绝世高手第二季-竖图.jpg"
  },
  "VID-2408-0136": {
    "landscape": "assets/images/cover/短剧/重生慈母硬家规-横图.jpg",
    "portrait": "assets/images/cover/短剧/重生慈母硬家规-竖图.jpg"
  },
  "VID-2408-0124": {
    "landscape": "assets/images/cover/短剧/静破贪局-横图.jpg",
    "portrait": "assets/images/cover/短剧/静破贪局-竖图.jpg"
  },
  "VID-2408-0187": {
    "landscape": "assets/images/cover/漫剧/丢失的国宝-横版.jpg",
    "portrait": "assets/images/cover/漫剧/丢失的国宝-竖图.jpg"
  },
  "VID-2408-0179": {
    "landscape": "assets/images/cover/漫剧/半生落魄装疯癫，只为红颜动刀剑-横图.jpg",
    "portrait": "assets/images/cover/漫剧/半生落魄装疯癫，只为红颜动刀剑-竖图.jpg"
  },
  "VID-2408-0168": {
    "landscape": "assets/images/cover/漫剧/炮灰回档仙途-横图.jpg",
    "portrait": "assets/images/cover/漫剧/炮灰回档仙途-竖图.jpg"
  },
  "VID-2408-0147": {
    "landscape": "assets/images/cover/漫剧/男扮女的侯府千金-横图.jpg",
    "portrait": "assets/images/cover/漫剧/男扮女的侯府千金-竖图.jpg"
  },
  "VID-2408-0181": {
    "landscape": "assets/images/cover/漫剧/禁忌之王-横图.jpg",
    "portrait": "assets/images/cover/漫剧/禁忌之王-竖图.jpg"
  },
  "VID-2408-0162": {
    "landscape": "assets/images/cover/漫剧/被裁回村后，我靠一颗番茄封神-横图.jpg",
    "portrait": "assets/images/cover/漫剧/被裁回村后，我靠一颗番茄封神-竖图.jpg"
  },
  "VID-2408-0144": {
    "landscape": "assets/images/cover/漫剧/重生后，弥补二十年暗恋-横图.jpg",
    "portrait": "assets/images/cover/漫剧/重生后，弥补二十年暗恋-竖图.jpg"
  },
  "VID-2408-0121": {
    "landscape": "assets/images/cover/漫剧/重生逆转：十五载错位人生-横图.jpg",
    "portrait": "assets/images/cover/漫剧/重生逆转：十五载错位人生-竖图.jpg"
  }
};
  function getCover(id, orientation = "landscape") {
    if (!Object.hasOwn(catalog, id)) return "";
    return catalog[id][orientation === "portrait" ? "portrait" : "landscape"];
  }
  function applyPosters(item, container) {
    if (!container || !Object.hasOwn(catalog, item.id)) return;
    container.querySelectorAll("[data-poster-item]").forEach((slot) => {
      const art = slot.querySelector(".poster-art");
      if (!art) return;
      const path = getCover(item.id, slot.classList.contains("landscape") ? "landscape" : "portrait");
      art.style.backgroundImage = `url("${encodeURI(path)}")`;
      art.style.backgroundSize = "cover";
      art.style.backgroundPosition = "center";
      art.style.backgroundRepeat = "no-repeat";
    });
  }
  function applyCovers(item, slots) {
    if (!Object.hasOwn(catalog, item.id)) return;
    const entry = catalog[item.id];
    function paint(node, path) {
      if (!node) return;
      node.style.backgroundImage = `url("${encodeURI(path)}")`;
      node.style.backgroundSize = "cover";
      node.style.backgroundPosition = "center";
      node.style.backgroundRepeat = "no-repeat";
    }
    slots.forEach((slot) => {

      const portrait = slot.querySelector(".cover-preview.portrait, .cover-preview.square");
      paint(slot.querySelector(".cover-art"), portrait ? entry.portrait : entry.landscape);
    });
    document.querySelectorAll("video").forEach((node) => { node.poster = entry.landscape; });
    document.querySelectorAll("[data-edit-video-player], .preview-card .video-player").forEach((node) => paint(node, entry.landscape));
  }
  window.StudioCovers = Object.freeze({ applyCovers, applyPosters, getCover });
})();
