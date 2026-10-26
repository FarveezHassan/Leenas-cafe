# Leena's Cakes & Desserts - Web Application

A modern, luxury café and bakery web application built with **React** and **Next.js (App Router)** for **Leena's Cakes & Desserts** (Eravur, Sri Lanka).

## Features
- **Dynamic Category Filtering & Search**: Instant filter across Cakes, Desserts, Mojitos, Juices, Shakes, Coffee & Tea, and Short Eats.
- **Interactive Cart & Order Drawer**: Customers can add multiple treats to cart, customize quantities, set delivery vs pickup, add custom cake messages/instructions, and send a pre-formatted order directly on WhatsApp.
- **Product Quick-View Modal**: Detailed view for items with high-resolution imagery and 1-click WhatsApp order.
- **Live Business Hours Status**: Calculates current Asia/Colombo time dynamically, displaying real-time open/closed indicators (4:30 PM – 1:00 AM).
- **Interactive Lightbox Photo Gallery**: Smooth photo viewer with keyboard arrows and captions.
- **Instagram Reels Showcase**: Direct video cards with hover effects linking to bakery reels.
- **Customer Reviews**: Testimonial cards with star ratings and feedback submission actions.
- **Responsive Luxury Aesthetic**: Gold foil gradient styling, Cinzel & Figtree typography, dark charcoal theme, smooth micro-animations.

---

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm

### Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
Create an optimized production build:
```bash
npm run build
npm run start
```

---

## Project Structure

```
leenas-cakes-website/
├── app/
│   ├── layout.jsx              Root Next.js layout, SEO metadata & Google Fonts
│   ├── page.jsx                Main bakery page assembling all sections
│   └── globals.css             Luxury bakery design system & styles
├── components/
│   ├── Navbar.jsx              Navigation header with cart badge & mobile menu
│   ├── Hero.jsx                Arched visual, hero copy & live open status
│   ├── Marquee.jsx             Animated dessert ticker ribbon
│   ├── About.jsx               Bakery story & quick category filters
│   ├── Featured.jsx            Featured treats strip with quick order
│   ├── Menu.jsx                Interactive menu with search & category pills
│   ├── ProductModal.jsx        Quick view modal with quantity & custom notes
│   ├── CartDrawer.jsx          Slide-out cart drawer with WhatsApp checkout
│   ├── Gallery.jsx             Photo mosaic with full-screen Lightbox
│   ├── Videos.jsx              Instagram reels showcase
│   ├── Reviews.jsx             Customer reviews & social links
│   ├── Contact.jsx             Location, phones & Google Maps card
│   ├── Footer.jsx              Opening hours & copyright
│   ├── FloatingActions.jsx     WhatsApp float & back-to-top buttons
│   ├── Toast.jsx               Cart notification toast
│   └── Icons.jsx               Custom SVG icon suite
├── context/
│   └── CartContext.jsx         Cart state, local storage sync & WhatsApp URL generator
├── data/
│   └── bakery-data.js          Single source of truth for products, hours & configuration
├── public/
│   ├── images/                 Bakery photos, logo, and product imagery
│   └── assets/                 Favicons and browser icons
├── next.config.mjs             Next.js configuration
├── jsconfig.json               Path aliases (@/*)
├── package.json
└── README.md
```

## Changing Menu, Prices & Details
To change prices, add menu items, or update bakery hours, edit [data/bakery-data.js](file:///c:/Users/Admin/Desktop/leenas-cakes-website/data/bakery-data.js).
