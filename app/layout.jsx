import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import FloatingActions from "@/components/FloatingActions";
import Toast from "@/components/Toast";
import { BAKERY_CONFIG } from "@/data/bakery-data";

export const viewport = {
  themeColor: "#0c0a07",
};

export const metadata = {
  metadataBase: new URL("https://leenas-cakes.com"),
  title: "Leena's Cakes & Desserts | Cakes, Desserts & Café in Eravur",
  description:
    "Leena's Cakes & Desserts is a luxury café and dessert bakery in Eravur, Sri Lanka serving custom celebration cakes, desserts, mojitos, fresh juices, shakes, coffee and short eats. Order easily on WhatsApp.",
  keywords: [
    "Cakes Eravur",
    "Bakery Eravur",
    "Leena's Cakes",
    "Birthday Cakes Batticaloa",
    "Sri Lanka Cakes",
    "Desserts Café",
    "Lava Cake",
    "Mojitos"
  ],
  icons: {
    icon: "/assets/icons/favicon-32x32.png",
    apple: "/assets/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Leena's Cakes & Desserts | Cakes, Desserts & Café in Eravur",
    description:
      "Fresh custom cakes, desserts, mojitos, juices, shakes, coffee, tea and short eats on Main Street, Batticaloa Road, Eravur. Your Imagination Is Our Creation.",
    url: "https://leenas-cakes.com",
    siteName: "Leena's Cakes & Desserts",
    images: [
      {
        url: "/images/shop/og-share-image.jpg",
        width: 1200,
        height: 630,
        alt: "Leena's Cakes & Desserts storefront and interior",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: BAKERY_CONFIG.name,
    description:
      "Café and dessert shop in Eravur offering cakes, desserts, mojitos, juices, shakes, coffee, tea and short eats.",
    slogan: BAKERY_CONFIG.tagline,
    image: "https://leenas-cakes.com/images/shop/og-share-image.jpg",
    logo: "https://leenas-cakes.com/images/logo/leenas-logo-512.png",
    telephone: [BAKERY_CONFIG.phoneFormatted, "+94761776093"],
    address: {
      "@type": "PostalAddress",
      streetAddress: BAKERY_CONFIG.address.street,
      addressLocality: BAKERY_CONFIG.address.locality,
      addressCountry: "LK",
    },
    hasMap: BAKERY_CONFIG.address.mapsUrl,
    sameAs: [BAKERY_CONFIG.socials.facebook, BAKERY_CONFIG.socials.instagram],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Figtree:wght@400;500;600;700&family=Yellowtail&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <CartProvider>
          {children}
          <CartDrawer />
          <FloatingActions />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
