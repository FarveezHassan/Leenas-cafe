/* Menu data - the single source of truth for the Menu and Featured sections.
   Every item below was read from the photographed printed menu card.
   To edit a price or name, change it here; to swap a photo, replace the file in images/products/
   (or change `image`). Set `featured: true` to show an item in "Featured Treats".
   Spelling notes (menu card -> website): "Vergin Mojito" -> Virgin Mojito, "Kiwis Mojito" -> Kiwi Mojito,
   "Fruits Salat" -> Fruits Salad, "Browne Piece" / "Cup Browne" -> Brownie Piece / Cup Brownie,
   "Coconut Forest" -> Coconut Forest Cake. */
window.LEENAS = window.LEENAS || {};

window.LEENAS.categories = [
  { id: "cakes", label: "Cakes" },
  { id: "desserts", label: "Desserts" },
  { id: "mojitos", label: "Mojitos" },
  { id: "juices", label: "Juices & More" },
  { id: "shakes", label: "Shakes" },
  { id: "coffee-tea", label: "Coffee & Tea" },
  { id: "short-eats", label: "Short Eats" },
];

window.LEENAS.products = [
  { id: "lava-cake", name: "Lava Cake", category: "cakes", price: 350, image: "images/products/lava-cake.webp" },
  { id: "chocolate-cake", name: "Chocolate Cake", category: "cakes", price: 550, image: "images/products/chocolate-cake.webp" },
  { id: "black-forest-cake", name: "Black Forest Cake", category: "cakes", price: 550, image: "images/products/black-forest-cake.webp" },
  { id: "white-forest-cake", name: "White Forest Cake", category: "cakes", price: 550, image: "images/products/white-forest-cake.webp" },
  { id: "red-velvet-cake", name: "Red Velvet Cake", category: "cakes", price: 550, image: "images/products/red-velvet-cake.webp", featured: true },
  { id: "coconut-forest-cake", name: "Coconut Forest Cake", category: "cakes", price: 550, image: "images/products/coconut-forest-cake.webp" },
  { id: "cup-leeches", name: "Cup Leeches", category: "desserts", price: 700, image: "images/products/cup-leeches.webp", note: "Milk cake" },
  { id: "mango-cheese-cake", name: "Mango Cheese Cake", category: "desserts", price: 700, image: "images/products/mango-cheese-cake.webp", featured: true },
  { id: "brownie-piece", name: "Brownie Piece", category: "desserts", price: 300, image: "images/products/brownie-piece.webp" },
  { id: "cup-brownie", name: "Cup Brownie", category: "desserts", price: 700, image: "images/products/cup-brownie.webp" },
  { id: "lava-with-ice-cream", name: "Lava with Ice Cream", category: "desserts", price: 850, image: "images/products/lava-with-ice-cream.webp", featured: true },
  { id: "brownie-with-ice-cream", name: "Brownie with Ice Cream", category: "desserts", price: 850, image: "images/products/brownie-with-ice-cream.webp" },
  { id: "virgin-mojito", name: "Virgin Mojito", category: "mojitos", price: 450, image: "images/products/virgin-mojito.webp" },
  { id: "strawberry-mojito", name: "Strawberry Mojito", category: "mojitos", price: 550, image: "images/products/strawberry-mojito.webp", featured: true },
  { id: "watermelon-mojito", name: "Watermelon Mojito", category: "mojitos", price: 450, image: "images/products/watermelon-mojito.webp" },
  { id: "passion-mojito", name: "Passion Mojito", category: "mojitos", price: 450, image: "images/products/passion-mojito.webp" },
  { id: "grape-mojito", name: "Grape Mojito", category: "mojitos", price: 450, image: "images/products/grape-mojito.webp" },
  { id: "orange-mojito", name: "Orange Mojito", category: "mojitos", price: 450, image: "images/products/orange-mojito.webp" },
  { id: "kiwi-mojito", name: "Kiwi Mojito", category: "mojitos", price: 550, image: "images/products/kiwi-mojito.webp" },
  { id: "passion-juice", name: "Passion Juice", category: "juices", price: 350, image: "images/products/passion-juice.webp" },
  { id: "papaya-juice", name: "Papaya Juice", category: "juices", price: 350, image: "images/products/papaya-juice.webp" },
  { id: "watermelon-juice", name: "Watermelon Juice", category: "juices", price: 300, image: "images/products/watermelon-juice.webp" },
  { id: "fruits-salad", name: "Fruits Salad", category: "juices", price: 450, image: "images/products/fruits-salad.webp" },
  { id: "royal-falooda", name: "Royal Falooda", category: "juices", price: 550, image: "images/products/royal-falooda.webp", featured: true },
  { id: "badam-milk", name: "Badam Milk", category: "juices", price: 550, image: "images/products/badam-milk.webp" },
  { id: "pineapple-shake", name: "Pineapple Shake", category: "shakes", price: 550, image: "images/products/pineapple-shake.webp" },
  { id: "mango-shake", name: "Mango Shake", category: "shakes", price: 550, image: "images/products/mango-shake.webp" },
  { id: "dragon-fruit-shake", name: "Dragon Fruit Shake", category: "shakes", price: 550, image: "images/products/dragon-fruit-shake.webp", featured: true },
  { id: "orange-shake", name: "Orange Shake", category: "shakes", price: 550, image: "images/products/orange-shake.webp" },
  { id: "grape-shake", name: "Grape Shake", category: "shakes", price: 550, image: "images/products/grape-shake.webp" },
  { id: "cappuccino", name: "Cappuccino", category: "coffee-tea", price: 450, image: "images/products/cappuccino.webp" },
  { id: "ginger-tea", name: "Ginger Tea", category: "coffee-tea", price: 100, image: "images/products/ginger-tea.webp" },
  { id: "black-coffee", name: "Black Coffee", category: "coffee-tea", price: 100, image: "images/products/black-coffee.webp" },
  { id: "mint-tea", name: "Mint Tea", category: "coffee-tea", price: 100, image: "images/products/mint-tea.webp" },
  { id: "leenas-special-tea", name: "Leena's Special Tea", category: "coffee-tea", price: 150, image: "images/products/leenas-special-tea.webp", featured: true },
  { id: "nannary-tea", name: "Nannary Tea", category: "coffee-tea", price: 100, image: "images/products/nannary-tea.webp" },
  { id: "pizza", name: "Pizza", category: "short-eats", price: 2000, image: "images/products/pizza.webp" },
  { id: "french-fries", name: "French Fries", category: "short-eats", price: 550, image: "images/products/french-fries.webp" },
  { id: "loaded-french-fries", name: "Loaded French Fries", category: "short-eats", price: 999, image: "images/products/loaded-french-fries.webp", featured: true },
  { id: "chocolate-burger", name: "Chocolate Burger", category: "short-eats", price: 999, image: "images/products/chocolate-burger.webp" },
  { id: "fish-rolls", name: "Fish Rolls", category: "short-eats", price: 500, image: "images/products/fish-rolls.webp" },
  { id: "chicken-nuggets", name: "Chicken Nuggets", category: "short-eats", price: 400, image: "images/products/chicken-nuggets.webp" },
];
