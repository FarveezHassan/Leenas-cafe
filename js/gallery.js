/* gallery.js - photo viewer (lightbox) for the Gallery section.
   Uses the native <dialog> element, so Esc closes it and focus stays inside while open. */
(function () {
  "use strict";
  var U = window.LEENAS.utils;

  function init() {
    var lb = U.$("#lightbox");
    var img = U.$("#lbImg");
    var caption = U.$("#lbCap");
    var items = U.$$(".g-item");
    var index = 0, opener = null;

    function show(i) {
      index = (i + items.length) % items.length;
      var button = items[index];
      img.src = button.dataset.full;
      img.alt = U.$("img", button).alt;
      caption.textContent = button.dataset.caption || "";
    }

    items.forEach(function (button, i) {
      button.addEventListener("click", function () {
        opener = button; show(i);
        if (typeof lb.showModal === "function") lb.showModal(); else lb.setAttribute("open", "");
      });
    });
    U.$(".lb-close", lb).addEventListener("click", function () { lb.close(); });
    U.$(".lb-prev", lb).addEventListener("click", function () { show(index - 1); });
    U.$(".lb-next", lb).addEventListener("click", function () { show(index + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); }); // click the dark area to close
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
    lb.addEventListener("close", function () { if (opener) opener.focus(); });
  }

  window.LEENAS.gallery = { init: init };
})();
