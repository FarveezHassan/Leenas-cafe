/* whatsapp.js - prices and WhatsApp order links.
   Numbers and the greeting come from data/config-data.js. */
(function () {
  "use strict";
  var cfg = window.LEENAS.config;

  // 2000 -> "Rs. 2,000"
  function formatPrice(amount) {
    return "Rs. " + Number(amount).toLocaleString("en-US");
  }

  // Link that opens WhatsApp with a ready-written message for one product
  function orderLink(product) {
    var text = cfg.greeting + "\nI would like to order:\n" + product.name + "\nPrice: " + formatPrice(product.price);
    return "https://wa.me/" + cfg.whatsapp.primary + "?text=" + encodeURIComponent(text);
  }

  window.LEENAS.whatsapp = { formatPrice: formatPrice, orderLink: orderLink };
})();
