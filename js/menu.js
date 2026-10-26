/* menu.js - the Featured Treats strip and the full menu (category tabs, search, product cards).
   Menu data lives in data/products-data.js. */
(function () {
  "use strict";
  var L = window.LEENAS;
  var U = L.utils, W = L.whatsapp;
  var $ = U.$, $$ = U.$$, esc = U.esc, icon = U.icon;
  var categories = L.categories || [];
  var products = L.products || [];

  var state = { category: "all", query: "" };
  var filterEl, resultsEl, countEl, searchEl;

  function categoryLabel(id) {
    var c = categories.filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }

  /* ----- Featured Treats ----- */
  function renderFeatured() {
    $("#featuredList").innerHTML = products.filter(function (p) { return p.featured; }).map(function (p) {
      return '<li class="f-card">' +
        '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" width="360" height="450" loading="lazy" decoding="async">' +
        '<div class="f-body"><div><h3 class="f-name">' + esc(p.name) + '</h3><span class="f-price">' + W.formatPrice(p.price) + '</span></div>' +
        '<a class="f-order" href="' + W.orderLink(p) + '" target="_blank" rel="noopener" aria-label="Order ' + esc(p.name) + ' on WhatsApp">' + icon("whatsapp") + '</a></div></li>';
    }).join("");
  }

  /* ----- Category tabs ----- */
  function renderFilters() {
    var all = [{ id: "all", label: "All", count: products.length }].concat(categories.map(function (c) {
      return { id: c.id, label: c.label, count: products.filter(function (p) { return p.category === c.id; }).length };
    }));
    filterEl.innerHTML = all.map(function (c) {
      return '<button type="button" class="chip" data-cat="' + c.id + '" aria-pressed="' + (c.id === state.category) + '">' +
        esc(c.label) + ' <small>' + c.count + '</small></button>';
    }).join("");
  }

  function markActiveTab() {
    $$(".chip", filterEl).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.cat === state.category)); });
  }

  /* ----- Product cards ----- */
  function productCard(p, i) {
    return '<li class="p-card" style="--i:' + i + '"><article>' +
      '<div class="p-media"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" width="360" height="450" loading="lazy" decoding="async">' +
      '<span class="price">' + W.formatPrice(p.price) + '</span></div>' +
      '<div class="p-body"><h3 class="p-name">' + esc(p.name) + '</h3>' +
      (p.note ? '<p class="p-note">' + esc(p.note) + '</p>' : '') +
      '<a class="btn btn-order" href="' + W.orderLink(p) + '" target="_blank" rel="noopener" aria-label="Order ' + esc(p.name) + ' on WhatsApp">' +
      icon("whatsapp") + '<span class="lbl-long">Order on WhatsApp</span><span class="lbl-short">Order</span></a></div>' +
      '</article></li>';
  }

  function renderMenu(animate) {
    var q = state.query.trim().toLowerCase();
    var items = products.filter(function (p) {
      var inCategory = state.category === "all" || p.category === state.category;
      var matches = !q || p.name.toLowerCase().indexOf(q) > -1 ||
        categoryLabel(p.category).toLowerCase().indexOf(q) > -1 || (p.note || "").toLowerCase().indexOf(q) > -1;
      return inCategory && matches;
    });

    var html = "";
    if (!items.length) {
      html = '<div class="menu-empty"><p>Nothing on the menu matches \u201c' + esc(state.query) + '\u201d.</p>' +
        '<button type="button" class="btn btn-ghost" data-clear>Clear search</button></div>';
    } else if (state.category === "all" && !q) {
      // "All" view: grouped under a heading per category
      var n = 0;
      html = categories.map(function (c) {
        var group = items.filter(function (p) { return p.category === c.id; });
        if (!group.length) return "";
        return '<div class="menu-group"><h3 class="menu-group-title">' + esc(c.label) + '</h3><ul class="product-grid">' +
          group.map(function (p) { return productCard(p, n++); }).join("") + '</ul></div>';
      }).join("");
    } else {
      html = '<ul class="product-grid">' + items.map(productCard).join("") + '</ul>';
    }

    resultsEl.classList.remove("is-switching");
    resultsEl.innerHTML = html;
    if (animate && !U.reduceMotion) { void resultsEl.offsetWidth; resultsEl.classList.add("is-switching"); }
    countEl.textContent = items.length + (items.length === 1 ? " item shown" : " items shown");
  }

  function setCategory(id, scrollToMenu) {
    state.category = id;
    state.query = ""; searchEl.value = "";
    markActiveTab();
    renderMenu(true);
    if (scrollToMenu) {
      document.getElementById("menu").scrollIntoView({ behavior: U.reduceMotion ? "auto" : "smooth", block: "start" });
    }
  }

  function init() {
    filterEl = $("#menuFilter"); resultsEl = $("#menuResults");
    countEl = $("#menuCount"); searchEl = $("#menuSearch");

    renderFeatured();
    renderFilters();
    renderMenu(false);

    filterEl.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (b) setCategory(b.dataset.cat, false);
    });
    resultsEl.addEventListener("click", function (e) {
      if (e.target.closest("[data-clear]")) { state.query = ""; searchEl.value = ""; renderMenu(true); searchEl.focus(); }
    });

    var timer;
    searchEl.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        state.query = searchEl.value;
        if (state.query.trim() && state.category !== "all") { state.category = "all"; markActiveTab(); } // search covers the whole menu
        renderMenu(true);
      }, 140);
    });

    // Category shortcut buttons in the About section
    $$("[data-goto-category]").forEach(function (b) {
      b.addEventListener("click", function () { setCategory(b.dataset.gotoCategory, true); });
    });
  }

  L.menu = { init: init };
})();
