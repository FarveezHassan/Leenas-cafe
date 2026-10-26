/* reviews.js - draws the Reviews section.
   Real reviews go in data/reviews-data.js. While that list is empty, an invitation card is shown. */
(function () {
  "use strict";
  var L = window.LEENAS;
  var U = L.utils, esc = U.esc, icon = U.icon;
  var cfg = L.config;

  function init() {
    var box = U.$("#reviewsList");
    var reviews = L.reviews || [];
    if (reviews.length) {
      box.innerHTML = '<div class="review-grid">' + reviews.map(function (r) {
        return '<figure class="review reveal"><blockquote>' + esc(r.quote) + '</blockquote><figcaption>' + esc(r.name) +
          (r.source ? ', ' + esc(r.source) : '') + '</figcaption></figure>';
      }).join("") + '</div>';
      return;
    }
    box.innerHTML = '<div class="review-empty reveal">' + icon("spark") +
      '<h3>Been to Leena\u2019s?</h3>' +
      '<p>We would love to hear what you thought. Share your visit with us on Facebook or Instagram, or send us a message on WhatsApp.</p>' +
      '<div class="review-actions">' +
      '<a class="btn btn-ghost" href="https://www.facebook.com/share/1DndSGSfPZ/" target="_blank" rel="noopener">' + icon("facebook") + 'Facebook</a>' +
      '<a class="btn btn-ghost" href="https://www.instagram.com/leena.s94?stkn=Yjk5OHBseGc5emR4" target="_blank" rel="noopener">' + icon("instagram") + 'Instagram</a>' +
      '<a class="btn btn-ghost" href="https://wa.me/' + cfg.whatsapp.primary + '" target="_blank" rel="noopener">' + icon("whatsapp") + 'WhatsApp</a>' +
      '</div></div>';
  }

  L.reviewsSection = { init: init };
})();
