/* utils.js - tiny helpers shared by the other scripts. */
(function () {
  "use strict";
  window.LEENAS = window.LEENAS || {};

  // Short for document.querySelector / querySelectorAll (the second returns a real array)
  function $(selector, root) { return (root || document).querySelector(selector); }
  function $$(selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); }

  // Makes text safe to place inside HTML
  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Draws an icon from the icon sprite at the top of index.html (e.g. icon("whatsapp"))
  function icon(name) {
    return '<svg class="i" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  }

  window.LEENAS.utils = {
    $: $,
    $$: $$,
    esc: esc,
    icon: icon,
    reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
  };
})();
