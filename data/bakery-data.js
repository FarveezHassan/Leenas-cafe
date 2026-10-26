export const BAKERY_CONFIG = {
  name: "Leena's Cakes & Desserts",
  tagline: "Your Imagination Is Our Creation",
  description: "Fresh Cakes • Desserts • Drinks • Short Eats in Eravur, Sri Lanka",
  phone: "0751358345",
  phoneFormatted: "+94751358345",
  whatsapp: {
    primary: "94761776093", // 0761776093 - Mohamed Rifan
    secondary: "94751358345"
  },
  contactPersons: [
    { name: "Mohamed Rifan", role: "Main Staff", phone: "0761776093" },
    { name: "Order Hotline", role: "Bakery Direct", phone: "0751358345" }
  ],
  address: {
    street: "Main Street, Batticaloa Road",
    locality: "Eravur",
    country: "Sri Lanka",
    mapsUrl: "https://maps.app.goo.gl/haHS2DRkXXMknoxm8?g_st=ac"
  },
  hours: {
    timeZone: "Asia/Colombo",
    open: { h: 16, m: 30 }, // 4:30 PM
    close: { h: 1, m: 0 },  // 1:00 AM (next morning)
    label: "4:30 PM – 1:00 AM"
  },
  socials: {
    facebook: "https://www.facebook.com/share/1DndSGSfPZ/",
    instagram: "https://www.instagram.com/leena.s94?stkn=Yjk5OHBseGc5emR4",
    whatsapp: "https://wa.me/94761776093"
  },
  greeting: "Hello Leena's Cakes & Desserts!"
};

export const CATEGORIES = [
  { id: "cakes", label: "Cakes", icon: "🎂" },
  { id: "desserts", label: "Desserts", icon: "🍮" },
  { id: "mojitos", label: "Mojitos", icon: "🍹" },
  { id: "juices", label: "Juices & More", icon: "🥤" },
  { id: "shakes", label: "Shakes", icon: "🍨" },
  { id: "coffee-tea", label: "Coffee & Tea", icon: "☕" },
  { id: "short-eats", label: "Short Eats", icon: "🍟" },
];

export const PRODUCTS = [
  { id: "lava-cake", name: "Lava Cake", category: "cakes", price: 350, image: "/images/products/lava-cake.webp", description: "Rich warm chocolate cake with molten chocolate core." },
  { id: "chocolate-cake", name: "Chocolate Cake", category: "cakes", price: 550, image: "/images/products/chocolate-cake.webp", description: "Decadent layered chocolate sponge with velvety ganache." },
  { id: "black-forest-cake", name: "Black Forest Cake", category: "cakes", price: 550, image: "/images/products/black-forest-cake.webp", description: "Classic chocolate sponge layered with cherries and fresh cream." },
  { id: "white-forest-cake", name: "White Forest Cake", category: "cakes", price: 550, image: "/images/products/white-forest-cake.webp", description: "Fluffy vanilla sponge with white chocolate flakes and sweet cream." },
  { id: "red-velvet-cake", name: "Red Velvet Cake", category: "cakes", price: 550, image: "/images/products/red-velvet-cake.webp", featured: true, description: "Signature red velvet crumb with delicate cream cheese frosting." },
  { id: "coconut-forest-cake", name: "Coconut Forest Cake", category: "cakes", price: 550, image: "/images/products/coconut-forest-cake.webp", description: "Tropical delight infused with toasted coconut flakes and light cream." },
  
  { id: "cup-leeches", name: "Cup Leeches", category: "desserts", price: 700, image: "/images/products/cup-leeches.webp", note: "Milk cake", description: "Ultra-moist traditional tres leches sponge soaked in three sweet milks." },
  { id: "mango-cheese-cake", name: "Mango Cheese Cake", category: "desserts", price: 700, image: "/images/products/mango-cheese-cake.webp", featured: true, description: "Creamy cheesecake topped with tropical mango puree glaze." },
  { id: "brownie-piece", name: "Brownie Piece", category: "desserts", price: 300, image: "/images/products/brownie-piece.webp", description: "Fudgy, chewy chocolate brownie square with crisp crinkle top." },
  { id: "cup-brownie", name: "Cup Brownie", category: "desserts", price: 700, image: "/images/products/cup-brownie.webp", description: "Warm brownie chunks served layered in a gourmet dessert cup." },
  { id: "lava-with-ice-cream", name: "Lava with Ice Cream", category: "desserts", price: 850, image: "/images/products/lava-with-ice-cream.webp", featured: true, description: "Hot molten chocolate lava cake paired with chilled vanilla bean ice cream." },
  { id: "brownie-with-ice-cream", name: "Brownie with Ice Cream", category: "desserts", price: 850, image: "/images/products/brownie-with-ice-cream.webp", description: "Sizzling fudgy brownie topped with a generous scoop of ice cream." },
  
  { id: "virgin-mojito", name: "Virgin Mojito", category: "mojitos", price: 450, image: "/images/products/virgin-mojito.webp", description: "Crisp soda infused with freshly crushed mint leaves and zesty lime." },
  { id: "strawberry-mojito", name: "Strawberry Mojito", category: "mojitos", price: 550, image: "/images/products/strawberry-mojito.webp", featured: true, description: "Sweet strawberry essence blended with bubbly mint mojito." },
  { id: "watermelon-mojito", name: "Watermelon Mojito", category: "mojitos", price: 450, image: "/images/products/watermelon-mojito.webp", description: "Sun-ripened watermelon crushed with iced sparkling mint water." },
  { id: "passion-mojito", name: "Passion Mojito", category: "mojitos", price: 450, image: "/images/products/passion-mojito.webp", description: "Tangy tropical passion fruit with fresh mint and crushed ice." },
  { id: "grape-mojito", name: "Grape Mojito", category: "mojitos", price: 450, image: "/images/products/grape-mojito.webp", description: "Juicy dark grape notes paired with cooling mint fizz." },
  { id: "orange-mojito", name: "Orange Mojito", category: "mojitos", price: 450, image: "/images/products/orange-mojito.webp", description: "Citrusy fresh orange slices muddled with invigorating mint soda." },
  { id: "kiwi-mojito", name: "Kiwi Mojito", category: "mojitos", price: 550, image: "/images/products/kiwi-mojito.webp", description: "Zesty green kiwi cooler with icy sparkles and mint leaves." },
  
  { id: "passion-juice", name: "Passion Juice", category: "juices", price: 350, image: "/images/products/passion-juice.webp", description: "Pure freshly squeezed passion fruit with authentic tropical punch." },
  { id: "papaya-juice", name: "Papaya Juice", category: "juices", price: 350, image: "/images/products/papaya-juice.webp", description: "Smooth chilled ripe papaya blended fresh to order." },
  { id: "watermelon-juice", name: "Watermelon Juice", category: "juices", price: 300, image: "/images/products/watermelon-juice.webp", description: "100% natural cold watermelon juice, perfectly hydrating." },
  { id: "fruits-salad", name: "Fruits Salad", category: "juices", price: 450, image: "/images/products/fruits-salad.webp", description: "Colorful bowl of freshly diced seasonal island fruits." },
  { id: "royal-falooda", name: "Royal Falooda", category: "juices", price: 550, image: "/images/products/royal-falooda.webp", featured: true, description: "Classic rose milk delight with basil seeds, vermicelli, and ice cream." },
  { id: "badam-milk", name: "Badam Milk", category: "juices", price: 550, image: "/images/products/badam-milk.webp", description: "Nourishing crushed almond milk infused with aromatic cardamom." },
  
  { id: "pineapple-shake", name: "Pineapple Shake", category: "shakes", price: 550, image: "/images/products/pineapple-shake.webp", description: "Thick creamy milkshake whipped with golden ripe pineapple." },
  { id: "mango-shake", name: "Mango Shake", category: "shakes", price: 550, image: "/images/products/mango-shake.webp", description: "Velvety sweet mango puree blended with chilled rich milk." },
  { id: "dragon-fruit-shake", name: "Dragon Fruit Shake", category: "shakes", price: 550, image: "/images/products/dragon-fruit-shake.webp", featured: true, description: "Vibrant exotic magenta dragon fruit smoothie shake." },
  { id: "orange-shake", name: "Orange Shake", category: "shakes", price: 550, image: "/images/products/orange-shake.webp", description: "Creamsicle-inspired creamy orange shake with smooth finish." },
  { id: "grape-shake", name: "Grape Shake", category: "shakes", price: 550, image: "/images/products/grape-shake.webp", description: "Fruity chilled shake made with plump dark grapes." },
  
  { id: "cappuccino", name: "Cappuccino", category: "coffee-tea", price: 450, image: "/images/products/cappuccino.webp", description: "Freshly brewed espresso with steamed milk foam and cocoa dusting." },
  { id: "ginger-tea", name: "Ginger Tea", category: "coffee-tea", price: 100, image: "/images/products/ginger-tea.webp", description: "Hot Ceylon tea infused with crushed spicy fresh ginger." },
  { id: "black-coffee", name: "Black Coffee", category: "coffee-tea", price: 100, image: "/images/products/black-coffee.webp", description: "Bold aromatic dark roast coffee served piping hot." },
  { id: "mint-tea", name: "Mint Tea", category: "coffee-tea", price: 100, image: "/images/products/mint-tea.webp", description: "Fragrant herbal tea brewed with fresh spearmint leaves." },
  { id: "leenas-special-tea", name: "Leena's Special Tea", category: "coffee-tea", price: 150, image: "/images/products/leenas-special-tea.webp", featured: true, description: "House signature spiced milk tea brewed with secret bakery herbs." },
  { id: "nannary-tea", name: "Nannary Tea", category: "coffee-tea", price: 100, image: "/images/products/nannary-tea.webp", description: "Traditional cooling herbal tea crafted from wild sarsaparilla root." },
  
  { id: "pizza", name: "Pizza", category: "short-eats", price: 2000, image: "/images/products/pizza.webp", description: "Freshly baked handmade crust topped with savory sauce, herbs and cheese." },
  { id: "french-fries", name: "French Fries", category: "short-eats", price: 550, image: "/images/products/french-fries.webp", description: "Golden crispy potato fries seasoned with sea salt." },
  { id: "loaded-french-fries", name: "Loaded French Fries", category: "short-eats", price: 999, image: "/images/products/loaded-french-fries.webp", featured: true, description: "Hot fries smothered with melted cheese, house sauces, and toppings." },
  { id: "chocolate-burger", name: "Chocolate Burger", category: "short-eats", price: 999, image: "/images/products/chocolate-burger.webp", description: "Sweet indulgence featuring chocolate patty, sweet sauce and soft brioche." },
  { id: "fish-rolls", name: "Fish Rolls", category: "short-eats", price: 500, image: "/images/products/fish-rolls.webp", description: "Crispy breaded Sri Lankan Chinese-style fish and potato rolls." },
  { id: "chicken-nuggets", name: "Chicken Nuggets", category: "short-eats", price: 400, image: "/images/products/chicken-nuggets.webp", description: "Crunchy bite-sized seasoned chicken nuggets with dipping sauce." },
];

export const GALLERY_ITEMS = [
  { id: "ext", full: "/images/shop/shop-exterior-1280.webp", thumb: "/images/shop/shop-exterior-640.webp", caption: "Shop exterior at night with warm illumination" },
  { id: "moon", full: "/images/gallery/gallery-moon-wall.webp", thumb: "/images/gallery/gallery-moon-wall.webp", caption: "The glowing Moon Wall beneath the neon sign" },
  { id: "int", full: "/images/shop/shop-interior-1280.webp", thumb: "/images/shop/shop-interior-640.webp", caption: "Shop interior with marble tables and hanging lights" },
  { id: "sign", full: "/images/gallery/gallery-signboard.webp", thumb: "/images/gallery/gallery-signboard.webp", caption: "Our signature store signboard" },
  { id: "lamp", full: "/images/gallery/gallery-lamp-and-greenery.webp", thumb: "/images/gallery/gallery-lamp-and-greenery.webp", caption: "Woven lamps and lush vertical garden" },
  { id: "window", full: "/images/gallery/gallery-service-window.webp", thumb: "/images/gallery/gallery-service-window.webp", caption: "Bakery dessert service counter" },
  { id: "tables", full: "/images/gallery/gallery-marble-tables.webp", thumb: "/images/gallery/gallery-marble-tables.webp", caption: "Cozy marble seating arrangement" },
];

export const VIDEO_REELS = [
  {
    id: "reel-1",
    title: "Bakery Atmosphere & Vibes",
    url: "https://www.instagram.com/reel/Dd6fb3BKj7O/?stkn=b3pndHlmZmZkcnJt",
    thumb: "/images/gallery/gallery-moon-wall.webp"
  },
  {
    id: "reel-2",
    title: "Sweet Treats & Fresh Bakes",
    url: "https://www.instagram.com/reel/DcQ6aZ1Bz-p/?stkn=MW05c2w5Z2Fha2w4OA==",
    thumb: "/images/gallery/gallery-lamp-and-greenery.webp"
  },
  {
    id: "reel-3",
    title: "Evening Lights & Welcome",
    url: "https://www.instagram.com/reel/DcG5LjPq7w_/?stkn=MTBjdnllcDBhMWEzdw==",
    thumb: "/images/shop/shop-exterior-1280.webp"
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    name: "Aamina F.",
    rating: 5,
    quote: "The Red Velvet cake and Mango Cheese cake were out of this world! The presentation is top tier and ordering on WhatsApp was so fast.",
    source: "Google Review"
  },
  {
    id: "rev-2",
    name: "Rishan M.",
    rating: 5,
    quote: "Best dessert spot in Eravur! The ambiance with the glowing moon wall makes it a cozy place to hang out with friends. Mojitos are so refreshing.",
    source: "Instagram"
  },
  {
    id: "rev-3",
    name: "Fathima S.",
    rating: 5,
    quote: "Ordered a birthday cake and lava cakes for our celebration. Everyone loved the taste and moist texture. Will definitely order again!",
    source: "Facebook"
  }
];
