// 語言：網址 ?lang=en 用英文，?lang=zh 或沒有參數用繁體中文（App Store 英文商店頁填 ?lang=en 的網址）。
(function () {
  var q = new URLSearchParams(location.search).get("lang");
  var lang = q && q.toLowerCase().indexOf("en") === 0 ? "en" : "zh-Hant";
  document.documentElement.lang = lang;
  var title = document.querySelector("meta[name='title-" + lang + "']");
  if (title) document.title = title.content;
  document.querySelectorAll("nav.lang a").forEach(function (a) {
    a.setAttribute("aria-current", a.dataset.set === lang ? "true" : "false");
  });
})();
