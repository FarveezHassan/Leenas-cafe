/* Business details used by the scripts.
   Static contact links in index.html use the same numbers - update both if a number changes. */
window.LEENAS = window.LEENAS || {};

window.LEENAS.config = {
  name: "Leena's Cakes & Desserts",
  // WhatsApp numbers in international format (Sri Lanka +94, leading 0 removed)
  whatsapp: {
    primary: "94761776093", // 0761776093 - Mohamed Rifan
    secondary: "94751358345" // 0751358345
  },
  hours: {
    timeZone: "Asia/Colombo",
    open: { h: 16, m: 30 }, // 4:30 PM
    close: { h: 1, m: 0 }, // 1:00 AM (next day)
    label: "4:30 PM \u2013 1:00 AM"
  },
  greeting: "Hello Leena's Cakes & Desserts!"
};
