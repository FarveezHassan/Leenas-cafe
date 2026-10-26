/* animations.js - fades elements in as they scroll into view.
   Elements with class "reveal" in index.html are revealed; the visual effect itself is in css/animations.css. */
(function () {
  "use strict";
  var U = window.LEENAS.utils;

  function observeReveals(root) {
    var elements = U.$$(".reveal:not(.is-in)", root);
    // No observer support, or the visitor prefers reduced motion: just show everything
    if (!("IntersectionObserver" in window) || U.reduceMotion) {
      elements.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); observer.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    elements.forEach(function (el) { observer.observe(el); });
  }

  window.LEENAS.animations = { init: function () { observeReveals(document); } };
})();
