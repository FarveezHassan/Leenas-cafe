/* main.js - starts the site. Handles the navbar, mobile menu, back-to-top button and opening-hours status,
   then starts the other scripts (menu.js, reviews.js, gallery.js, animations.js). */
(function () {
  "use strict";
  var L = window.LEENAS;
  var U = L.utils, $ = U.$, $$ = U.$$;
  var cfg = L.config;

  /* ----- Opening hours (Sri Lanka time; closing time is after midnight) ----- */
  function isOpenNow() {
    var parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: cfg.hours.timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date());
    var h = 0, m = 0;
    parts.forEach(function (p) {
      if (p.type === "hour") h = parseInt(p.value, 10);
      if (p.type === "minute") m = parseInt(p.value, 10);
    });
    var now = h * 60 + m;
    var open = cfg.hours.open.h * 60 + cfg.hours.open.m;
    var close = cfg.hours.close.h * 60 + cfg.hours.close.m;
    return now >= open || now < close;
  }

  function updateHours() {
    var open;
    try { open = isOpenNow(); } catch (e) { return; }
    var pill = $("[data-hours-pill]");
    if (pill) {
      pill.classList.toggle("is-open", open);
      $("[data-hours-label]", pill).textContent = open ? "Open now" : "Opens at 4:30 PM";
    }
    var live = $("[data-hours-text-live]");
    if (live) live.textContent = open ? "Open now" : "Closed now, opens at 4:30 PM";
  }

  /* ----- Navbar, mobile menu, back-to-top ----- */
  function initNavigation() {
    var nav = $("#nav"), burger = $("#burger"), mobileNav = $("#mobileNav"), toTop = $("#toTop");

    function onScroll() {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
      toTop.hidden = window.scrollY < 700;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function setMobileNav(open) {
      mobileNav.hidden = !open;
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("nav-open", open);
    }
    burger.addEventListener("click", function () { setMobileNav(mobileNav.hidden); });
    $$("a", mobileNav).forEach(function (a) { a.addEventListener("click", function () { setMobileNav(false); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mobileNav.hidden) { setMobileNav(false); burger.focus(); }
    });
    window.matchMedia("(min-width: 980px)").addEventListener("change", function (e) { if (e.matches) setMobileNav(false); });

    toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: U.reduceMotion ? "auto" : "smooth" }); });

    // Highlight the current section in the navbar
    var links = $$("[data-nav]");
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id); });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ["home", "about", "menu", "gallery", "videos", "reviews", "contact"].forEach(function (id) {
        var el = document.getElementById(id); if (el) observer.observe(el);
      });
    }
  }

  /* ----- Start everything (order matters: draw content first, then animate it) ----- */
  initNavigation();
  L.menu.init();
  L.reviewsSection.init();
  L.gallery.init();
  L.animations.init();
  updateHours();
  setInterval(updateHours, 60000);
  $("#year").textContent = new Date().getFullYear();
})();
