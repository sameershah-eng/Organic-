import { images } from './images.js';

export const products = [
  // ==========================================
  // CATEGORY 1: QUILL ORGANIC SUPERFOODS
  // Source: screencapture-quillproduct-2026-10-12-16_57_00.png
  // ==========================================
  {
    id: "quill-ashwagandha",
    slug: "ashwagandha-powder",
    name: "Ashwagandha Powder",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 1170,
    compareAtPrice: 1350,
    rating: 4.9,
    reviewsCount: 142,
    stockStatus: "in_stock",
    tags: ["Bestseller", "Organic"],
    weight: "100g",
    shortDescription: "Natural stress relief booster sourced naturally to support real wellness.",
    fullDescription: "Quill Ashwagandha Powder is harvested from organic withania somnifera roots. Renowned in traditional Ayurvedic wellness, it helps lower cortisol, elevates daily vitality, enhances stamina, and promotes deep restorative sleep. Lab-tested with zero artificial additives.",
    nutrition: ["100% Pure Withania Somnifera", "Non-GMO & Vegan", "Zero Fillers or Binders", "Lab Tested for Purity"],
    images: [
      { url: images.products["quill-ashwagandha"].primary, fallback: images.products["quill-ashwagandha"].primaryFallback },
      { url: images.products["quill-ashwagandha"].secondary, fallback: images.products["quill-ashwagandha"].secondaryFallback }
    ]
  },
  {
    id: "quill-chia-seeds",
    slug: "organic-chia-seeds",
    name: "Organic Chia Seeds",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 599,
    compareAtPrice: 750,
    rating: 4.8,
    reviewsCount: 98,
    stockStatus: "in_stock",
    tags: ["Superfood", "High Fiber"],
    weight: "250g",
    shortDescription: "Fiber-rich energy-packed seeds for daily hydration and gut health.",
    fullDescription: "Premium triple-cleaned organic chia seeds packed with heart-healthy omega-3 fatty acids, soluble dietary fiber, and plant protein. Swells up to 10x in water, perfect for smoothies, overnight oats, chia puddings, and lemonade.",
    nutrition: ["High Soluble Fiber", "Omega-3 Fatty Acids", "Complete Plant Protein", "Sustained Hydration"],
    images: [
      { url: images.products["quill-chia-seeds"].primary, fallback: images.products["quill-chia-seeds"].primaryFallback },
      { url: images.products["quill-chia-seeds"].secondary, fallback: images.products["quill-chia-seeds"].secondaryFallback }
    ]
  },
  {
    id: "quill-moringa-leaf",
    slug: "moringa-leaf-powder",
    name: "Moringa Leaf Powder",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 389,
    compareAtPrice: 499,
    rating: 4.7,
    reviewsCount: 76,
    stockStatus: "in_stock",
    tags: ["Superfood", "Energy"],
    weight: "100g",
    shortDescription: "Green superfood for daily vitality, immunity, and cellular protection.",
    fullDescription: "Shade-dried and pulverized organic drumstick tree leaves (Moringa Oleifera). Contains 7x more vitamin C than oranges and 4x more calcium than milk. Stir one teaspoon into warm water, detox smoothies, or morning tea.",
    nutrition: ["Rich in Chlorophyll", "Multi-Vitamin Complex", "Iron & Potassium Powerhouse", "Potent Antioxidants"],
    images: [
      { url: images.products["quill-moringa-leaf"].primary, fallback: images.products["quill-moringa-leaf"].primaryFallback },
      { url: images.products["quill-moringa-leaf"].secondary, fallback: images.products["quill-moringa-leaf"].secondaryFallback }
    ]
  },
  {
    id: "quill-super-six-seeds",
    slug: "super-six-seeds-mix",
    name: "Super Six Seeds Mix",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 499,
    compareAtPrice: 650,
    rating: 4.9,
    reviewsCount: 184,
    stockStatus: "in_stock",
    tags: ["Bestseller", "Crunchy Mix"],
    weight: "200g",
    shortDescription: "Powerful blend of super seeds formulated for optimal cardiovascular vitality.",
    fullDescription: "A balanced artisanal blend of raw pumpkin seeds, sunflower seeds, golden flax seeds, black chia seeds, white sesame, and watermelon seeds. Roasted gently without salt or artificial preservatives.",
    nutrition: ["Pumpkin, Sunflower, Flax, Chia, Sesame, Watermelon", "Rich in Zinc & Magnesium", "Zero Added Sodium", "Crisp Natural Crunch"],
    images: [
      { url: images.products["quill-super-six-seeds"].primary, fallback: images.products["quill-super-six-seeds"].primaryFallback },
      { url: images.products["quill-super-six-seeds"].secondary, fallback: images.products["quill-super-six-seeds"].secondaryFallback }
    ]
  },
  {
    id: "quill-shilajit-gummies",
    slug: "all-in-one-shilajit-gummies",
    name: "All in One Shilajit Gummies",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 2200,
    compareAtPrice: 3000,
    rating: 4.9,
    reviewsCount: 58,
    stockStatus: "in_stock",
    tags: ["27% OFF", "Bestseller", "Supplements"],
    weight: "60 Gummies",
    shortDescription: "Purified Himalayan Shilajit combined with full-spectrum vitality minerals.",
    fullDescription: "The best-selling organic supplement gummies in Pakistan. Formulated with authentic gold-grade Himalayan Shilajit extract containing over 84 trace ionic minerals and fulvic acid to support cellular stamina, mental focus, and hormonal equilibrium.",
    nutrition: ["Gold Grade Shilajit Extract", "84+ Ionic Minerals", "High Fulvic Acid Content", "Naturally Sweetened"],
    images: [
      { url: images.products["quill-shilajit-gummies"].primary, fallback: images.products["quill-shilajit-gummies"].primaryFallback },
      { url: images.products["quill-shilajit-gummies"].secondary, fallback: images.products["quill-shilajit-gummies"].secondaryFallback }
    ]
  },
  {
    id: "quill-berry-shilajit-gummies",
    slug: "shilajit-berry-power-gummies",
    name: "Shilajit Berry Power Gummies",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 2200,
    compareAtPrice: 3000,
    rating: 4.8,
    reviewsCount: 65,
    stockStatus: "in_stock",
    tags: ["27% OFF", "Supplements"],
    weight: "60 Gummies",
    shortDescription: "Antioxidant-infused berry flavored Himalayan shilajit wellness chews.",
    fullDescription: "Combines high-altitude Shilajit with wild organic berry extracts (elderberry, blueberry, and acai) for dual-action stamina and immunity defense with a delicious tangy taste.",
    nutrition: ["Berry Flavored Extract", "Immune Defense Boost", "Gelatin-Free Pectin Base", "Daily Energy Support"],
    images: [
      { url: images.products["quill-berry-shilajit-gummies"].primary, fallback: images.products["quill-berry-shilajit-gummies"].primaryFallback },
      { url: images.products["quill-berry-shilajit-gummies"].secondary, fallback: images.products["quill-berry-shilajit-gummies"].secondaryFallback }
    ]
  },
  {
    id: "quill-magnesium-gummies",
    slug: "magnesium-boost-gummies",
    name: "Magnesium Boost Gummies",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 2100,
    compareAtPrice: 2800,
    rating: 4.9,
    reviewsCount: 48,
    stockStatus: "in_stock",
    tags: ["25% OFF", "Muscle & Nerve"],
    weight: "60 Gummies",
    shortDescription: "Bioavailable magnesium glycinate for muscle relaxation and nervous system calm.",
    fullDescription: "Gentle on the stomach and rapidly absorbed. Magnesium Boost eases muscle cramps, reduces evening tension, supports cardiovascular rhythm, and enhances daytime mood.",
    nutrition: ["Magnesium Glycinate Complex", "Relieves Muscle Tightness", "Calms Neural Pathways", "Raspberry Extract"],
    images: [
      { url: images.products["quill-magnesium-gummies"].primary, fallback: images.products["quill-magnesium-gummies"].primaryFallback },
      { url: images.products["quill-magnesium-gummies"].secondary, fallback: images.products["quill-magnesium-gummies"].secondaryFallback }
    ]
  },
  {
    id: "quill-sleep-gummies",
    slug: "sleep-ease-gummies",
    name: "Sleep Ease Gummies",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 2100,
    compareAtPrice: 2800,
    rating: 4.7,
    reviewsCount: 36,
    stockStatus: "in_stock",
    tags: ["25% OFF", "Deep Sleep"],
    weight: "60 Gummies",
    shortDescription: "Botanical sleep complex with chamomile, passionflower, and L-theanine.",
    fullDescription: "Non-habit forming natural nighttime formula engineered to quiet racing thoughts and induce restful slow-wave sleep. Wake up refreshed with zero grogginess.",
    nutrition: ["Chamomile & Lemon Balm", "L-Theanine & Melatonin", "Natural Blackberry Taste", "Non-Addictive"],
    images: [
      { url: images.products["quill-sleep-gummies"].primary, fallback: images.products["quill-sleep-gummies"].primaryFallback },
      { url: images.products["quill-sleep-gummies"].secondary, fallback: images.products["quill-sleep-gummies"].secondaryFallback }
    ]
  },
  {
    id: "quill-almond-flax-flour",
    slug: "almond-flax-flour",
    name: "Almond + Flax Flour",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 1680,
    compareAtPrice: 2100,
    rating: 5.0,
    reviewsCount: 92,
    stockStatus: "in_stock",
    tags: ["Exclusive Deal", "Keto & Gluten-Free"],
    weight: "1kg (2x 500g)",
    shortDescription: "Stone-milled California almond flour paired with fine-ground golden flax flour.",
    fullDescription: "The gold standard for keto baking, low-carb rotis, and diabetic-friendly cooking. Rich in healthy monounsaturated fats and dietary lignans. Zero wheat or gluten contamination.",
    nutrition: ["Ultra-Low Carb (3g Net Carb)", "High Healthy Fats", "Gluten-Free Certified", "Dual Pack Value Deal"],
    images: [
      { url: images.products["quill-almond-flax-flour"].primary, fallback: images.products["quill-almond-flax-flour"].primaryFallback },
      { url: images.products["quill-almond-flax-flour"].secondary, fallback: images.products["quill-almond-flax-flour"].secondaryFallback }
    ]
  },
  {
    id: "quill-pcos-pro",
    slug: "pcos-pro",
    name: "PCOS Pro Herbal Support",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 650,
    compareAtPrice: 850,
    rating: 4.8,
    reviewsCount: 67,
    stockStatus: "in_stock",
    tags: ["Women Wellness"],
    weight: "150g",
    shortDescription: "Herbal botanical blend to regulate menstrual cycles and balance androgen levels.",
    fullDescription: "Crafted specifically for women battling PCOS and hormonal imbalances. Features spearmint, cinnamon, shatavari, and inositol herbs to support regular cycles, clear hormonal acne, and regulate insulin sensitivity.",
    nutrition: ["Spearmint & Ceylon Cinnamon", "Shatavari Root Extract", "Regulates Insulin Spikes", "Zero Side Effects"],
    images: [
      { url: images.products["quill-pcos-pro"].primary, fallback: images.products["quill-pcos-pro"].primaryFallback },
      { url: images.products["quill-pcos-pro"].secondary, fallback: images.products["quill-pcos-pro"].secondaryFallback }
    ]
  },
  {
    id: "quill-dried-mango",
    slug: "dried-mango-slices",
    name: "Dried Mango Slices",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 980,
    compareAtPrice: 1200,
    rating: 4.9,
    reviewsCount: 112,
    stockStatus: "in_stock",
    tags: ["Snacks", "100% Pure"],
    weight: "200g",
    shortDescription: "Naturally sweet sun-dried Sindhri mango strips without sulfur or added sugar.",
    fullDescription: "Grown in Sindh orchards, these premium mango slices are gently dehydrated at low temperatures to lock in vitamin A, vitamin C, and authentic honeyed aroma.",
    nutrition: ["100% Raw Sindhri Mangoes", "No Sulfur Dioxide", "No Added High Fructose Corn Syrup", "Pure Fruit Fiber"],
    images: [
      { url: images.products["quill-dried-mango"].primary, fallback: images.products["quill-dried-mango"].primaryFallback },
      { url: images.products["quill-dried-mango"].secondary, fallback: images.products["quill-dried-mango"].secondaryFallback }
    ]
  },
  {
    id: "quill-lemon-grass-tea",
    slug: "quill-lemon-grass-tea",
    name: "Quill Lemon Grass Tea",
    category: "Quill Organic Superfoods",
    categorySlug: "quill-organics",
    price: 220,
    compareAtPrice: 253,
    rating: 4.7,
    reviewsCount: 100,
    stockStatus: "in_stock",
    tags: ["13% OFF", "Natural Teas"],
    weight: "100g",
    shortDescription: "Crisp aromatic dried lemongrass stalks for detox, digestion, and soothing calm.",
    fullDescription: "Sip pure tranquility with Quill Lemon Grass Tea. Hand-cut and sun-cured stalks packed with citral essential oils that relieve bloating, accelerate metabolism, and refresh the mind.",
    nutrition: ["Caffeine-Free Infusion", "High Citral Essential Oil", "Aids Digestion & Debloating", "Crisp Citrus Aroma"],
    images: [
      { url: images.products["quill-lemon-grass-tea"].primary, fallback: images.products["quill-lemon-grass-tea"].primaryFallback },
      { url: images.products["quill-lemon-grass-tea"].secondary, fallback: images.products["quill-lemon-grass-tea"].secondaryFallback }
    ]
  },

  // ==========================================
  // CATEGORY 2: ITALIANO GOURMET & BAKING
  // Source: screencapture-order-italiano-pk-2026-10-12-16_57_27.png & 2-2
  // ==========================================
  {
    id: "italiano-pancake-mix",
    slug: "traditional-pancake-mix",
    name: "Italiano Traditional Pan Cake Mix",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 392,
    compareAtPrice: 450,
    rating: 4.9,
    reviewsCount: 310,
    stockStatus: "in_stock",
    tags: ["Popular", "Baking Essentials"],
    weight: "450g",
    shortDescription: "Fluffy, golden American-style pancakes ready in under 5 minutes.",
    fullDescription: "The kitchen partner of thousands of baking households across Pakistan. Just add milk, eggs, and a touch of butter for restaurant-grade, ultra-soft fluffy pancakes with delicate vanilla aroma.",
    nutrition: ["Enriched Wheat Flour", "Real Sweet Cream Powder", "Consistent Rise Guarantee", "Makes 14-16 Pancakes"],
    images: [
      { url: images.products["italiano-pancake-mix"].primary, fallback: images.products["italiano-pancake-mix"].primaryFallback },
      { url: images.products["italiano-pancake-mix"].secondary, fallback: images.products["italiano-pancake-mix"].secondaryFallback }
    ]
  },
  {
    id: "italiano-dark-chocolate",
    slug: "cooking-chocolate-dark",
    name: "Italiano Cooking Chocolate Dark",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 1748,
    compareAtPrice: 1950,
    rating: 5.0,
    reviewsCount: 140,
    stockStatus: "in_stock",
    tags: ["Chef Collection", "Cooking Chocolate"],
    weight: "500g",
    shortDescription: "Professional grade dark baking chocolate with glossy temper and deep cacao notes.",
    fullDescription: "Formulated for master bakers and pastry chefs. Perfect for rich chocolate ganaches, fudgy brownies, mirror glazes, and molded pralines. Melts smoothly with zero graininess.",
    nutrition: ["65% Cocoa Solids", "Pure Cocoa Butter", "Superior Melting Flow", "Tempering Stability"],
    images: [
      { url: images.products["italiano-dark-chocolate"].primary, fallback: images.products["italiano-dark-chocolate"].primaryFallback },
      { url: images.products["italiano-dark-chocolate"].secondary, fallback: images.products["italiano-dark-chocolate"].secondaryFallback }
    ]
  },
  {
    id: "italiano-milk-chocolate",
    slug: "cooking-chocolate-milk",
    name: "Italiano Cooking Chocolate Milk",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 1748,
    compareAtPrice: 1950,
    rating: 4.8,
    reviewsCount: 95,
    stockStatus: "in_stock",
    tags: ["Cooking Chocolate"],
    weight: "500g",
    shortDescription: "Creamy Swiss-style milk cooking chocolate for cookies, cakes, and mousses.",
    fullDescription: "Velvety smooth milk chocolate slab enriched with European milk fats. Melts evenly in bain-marie or microwave for chocolate fountains, dessert toppings, and festive baking.",
    nutrition: ["Creamy Milk Fat Formulation", "Smooth Mouthfeel", "Easy Snap Score Lines", "Confectionery Grade"],
    images: [
      { url: images.products["italiano-milk-chocolate"].primary, fallback: images.products["italiano-milk-chocolate"].primaryFallback },
      { url: images.products["italiano-milk-chocolate"].secondary, fallback: images.products["italiano-milk-chocolate"].secondaryFallback }
    ]
  },
  {
    id: "italiano-cocoa-powder",
    slug: "premium-cocoa-powder",
    name: "Italiano Premium Cocoa Powder",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 676,
    compareAtPrice: 799,
    rating: 4.9,
    reviewsCount: 220,
    stockStatus: "in_stock",
    tags: ["Bestseller", "Baking Essentials"],
    weight: "150g",
    shortDescription: "Dutch-processed dark cocoa powder with intense chocolate richness.",
    fullDescription: "Alkalized cocoa with 10-12% cocoa butter content for superior color, deep dark brown presentation, and luxurious aroma in devil's food cakes, frostings, and hot chocolate.",
    nutrition: ["Dutch-Processed Alkalized", "Intense Dark Brown Hue", "Low Acidity", "No Added Sugar"],
    images: [
      { url: images.products["italiano-cocoa-powder"].primary, fallback: images.products["italiano-cocoa-powder"].primaryFallback },
      { url: images.products["italiano-cocoa-powder"].secondary, fallback: images.products["italiano-cocoa-powder"].secondaryFallback }
    ]
  },
  {
    id: "italiano-castor-sugar",
    slug: "castor-sugar-fine",
    name: "Italiano Castor Sugar",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 316,
    compareAtPrice: 380,
    rating: 4.8,
    reviewsCount: 165,
    stockStatus: "in_stock",
    tags: ["Baking Sugar"],
    weight: "400g",
    shortDescription: "Superfine crystalline sugar that whips into meringues and creaming batters effortlessly.",
    fullDescription: "Unlike standard coarse granulated sugar, Italiano Castor Sugar dissolves instantly into whipped egg whites and creamed butter, preventing grainy cakes and ensuring silky buttercream.",
    nutrition: ["Superfine Crystalline Grain", "Rapid Dissolution Rate", "100% Pure Cane Sugar", "Baking Certified"],
    images: [
      { url: images.products["italiano-castor-sugar"].primary, fallback: images.products["italiano-castor-sugar"].primaryFallback },
      { url: images.products["italiano-castor-sugar"].secondary, fallback: images.products["italiano-castor-sugar"].secondaryFallback }
    ]
  },
  {
    id: "italiano-basil-drink-lychee",
    slug: "basil-seed-drink-lychee",
    name: "Italiano Basil Seed Drink Lychee",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 160,
    compareAtPrice: 190,
    rating: 4.9,
    reviewsCount: 420,
    stockStatus: "in_stock",
    tags: ["Hot Selling", "Premium Juices"],
    weight: "290ml",
    shortDescription: "Chilled natural lychee nectar packed with plump organic basil seeds.",
    fullDescription: "A viral customer favorite across Karachi and Lahore. Crafted with genuine tropical lychee fruit juice and suspended sweet basil seeds (tukhm-e-balanga) that provide instant cooling hydration.",
    nutrition: ["Real Lychee Pulp", "Rich in Sabja Seeds", "Naturally Refreshing", "Glass Bottle Packaging"],
    images: [
      { url: images.products["italiano-basil-drink-lychee"].primary, fallback: images.products["italiano-basil-drink-lychee"].primaryFallback },
      { url: images.products["italiano-basil-drink-lychee"].secondary, fallback: images.products["italiano-basil-drink-lychee"].secondaryFallback }
    ]
  },
  {
    id: "italiano-basil-drink-mango",
    slug: "basil-seed-drink-mango",
    name: "Italiano Basil Seed Drink Mango",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 160,
    compareAtPrice: 190,
    rating: 4.8,
    reviewsCount: 380,
    stockStatus: "in_stock",
    tags: ["Hot Selling", "Premium Juices"],
    weight: "290ml",
    shortDescription: "Golden Chaunsa mango drink loaded with fiber-rich basil seeds.",
    fullDescription: "Sweet, fragrant Pakistani mango puree blended into a chilled thirst-quencher with suspended basil seeds. High in vitamin C and digestive fiber.",
    nutrition: ["Mango Puree", "Suspended Basil Seeds", "Zero Artificial Fat", "Chilled Summer Delight"],
    images: [
      { url: images.products["italiano-basil-drink-mango"].primary, fallback: images.products["italiano-basil-drink-mango"].primaryFallback },
      { url: images.products["italiano-basil-drink-mango"].secondary, fallback: images.products["italiano-basil-drink-mango"].secondaryFallback }
    ]
  },
  {
    id: "italiano-jelly-pineapple",
    slug: "jelly-dessert-pineapple",
    name: "Italiano Jelly Dessert Pineapple",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 120,
    compareAtPrice: 150,
    rating: 4.7,
    reviewsCount: 110,
    stockStatus: "in_stock",
    tags: ["Dessert Essentials"],
    weight: "80g",
    shortDescription: "Refreshing pineapple dessert jelly with quick set formula.",
    fullDescription: "Sets firm and clear within 30 minutes in the refrigerator. Adds cheerful tropical sweetness to fruit trifles, custards, and layered birthday cakes.",
    nutrition: ["Halal Certified Gelatin", "Tropical Fruit Flavors", "Quick Set Recipe", "Makes 4 Servings"],
    images: [
      { url: images.products["italiano-jelly-pineapple"].primary, fallback: images.products["italiano-jelly-pineapple"].primaryFallback },
      { url: images.products["italiano-jelly-pineapple"].secondary, fallback: images.products["italiano-jelly-pineapple"].secondaryFallback }
    ]
  },
  {
    id: "italiano-tempura-spicy",
    slug: "tempura-batter-spicy",
    name: "Italiano Tempura Spicy Batter Mix",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 560,
    compareAtPrice: 650,
    rating: 4.9,
    reviewsCount: 88,
    stockStatus: "in_stock",
    tags: ["Coating Range"],
    weight: "1kg",
    shortDescription: "Japanese style crispy tempura batter with zesty gourmet chili notes.",
    fullDescription: "Engineered for restaurant-quality fried prawns, calamari, chicken tenders, and vegetables. Delivers an airy, super-crisp crunch that stays crisp without soaking oil.",
    nutrition: ["Low Oil Absorption Flour", "Spicy Seasoning Blend", "Professional Chef Pack (1kg)", "Extra Crunch Technology"],
    images: [
      { url: images.products["italiano-tempura-spicy"].primary, fallback: images.products["italiano-tempura-spicy"].primaryFallback },
      { url: images.products["italiano-tempura-spicy"].secondary, fallback: images.products["italiano-tempura-spicy"].secondaryFallback }
    ]
  },
  {
    id: "italiano-mixed-herbs",
    slug: "mixed-herbs-seasoning",
    name: "Italiano Mixed Herbs Seasoning",
    category: "Italiano Gourmet & Baking",
    categorySlug: "italiano-gourmet",
    price: 1560,
    compareAtPrice: 1800,
    rating: 4.8,
    reviewsCount: 75,
    stockStatus: "in_stock",
    tags: ["Gourmet Spices"],
    weight: "500g",
    shortDescription: "Mediterranean herb symphony of thyme, oregano, basil, rosemary, and marjoram.",
    fullDescription: "Transform homemade pastas, wood-fired pizzas, garlic breads, and roasted poultry with one pinch. Dried and ground to preserve fragrant volatile essential oils.",
    nutrition: ["Thyme, Oregano, Basil, Rosemary, Marjoram", "Salt-Free Herb Blend", "Bulk 500g Kitchen Pack", "Aroma Sealed"],
    images: [
      { url: images.products["italiano-mixed-herbs"].primary, fallback: images.products["italiano-mixed-herbs"].primaryFallback },
      { url: images.products["italiano-mixed-herbs"].secondary, fallback: images.products["italiano-mixed-herbs"].secondaryFallback }
    ]
  },

  // ==========================================
  // CATEGORY 3: THE EARTH'S PURE NATURALS
  // Source: screencapture-theearths-pk-2026-10-12-16_58_34.png
  // ==========================================
  {
    id: "earths-virgin-coconut-250",
    slug: "virgin-coconut-oil-250ml",
    name: "Earth's Virgin Coconut Oil (250ml)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 1528,
    compareAtPrice: 1750,
    rating: 5.0,
    reviewsCount: 340,
    stockStatus: "in_stock",
    tags: ["Bestseller", "Oils & Desi Ghee"],
    weight: "250ml",
    shortDescription: "First cold-pressed unrefined virgin coconut oil from fresh organic coconuts.",
    fullDescription: "The flagship product of The Earth's. Extracted by mechanical cold expeller within hours of harvest without chemicals, heat, or bleaching. Incredible for keto bulletproof coffee, cooking, hair nourishment, and infant skin care.",
    nutrition: ["Cold Pressed Virgin (Raw)", "Zero Heat Applied", "High Lauric Acid (50%+)", "Food Grade & Cosmetic Grade"],
    images: [
      { url: images.products["earths-virgin-coconut-250"].primary, fallback: images.products["earths-virgin-coconut-250"].primaryFallback },
      { url: images.products["earths-virgin-coconut-250"].secondary, fallback: images.products["earths-virgin-coconut-250"].secondaryFallback }
    ]
  },
  {
    id: "earths-virgin-coconut-130",
    slug: "virgin-coconut-oil-130ml",
    name: "Earth's Virgin Coconut Oil (130ml)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 910,
    compareAtPrice: 1050,
    rating: 4.8,
    reviewsCount: 190,
    stockStatus: "in_stock",
    tags: ["Oils & Desi Ghee"],
    weight: "130ml",
    shortDescription: "Compact size pure virgin coconut oil in apothecary glass jar.",
    fullDescription: "The convenient travel size of our best-selling raw cold-pressed virgin coconut oil. Retains subtle sweet coconut fragrance and crystalline solid texture below 24°C.",
    nutrition: ["100% Raw Virgin Coconut", "Travel Friendly Glass Jar", "Zero Trans Fats", "Moisturizing Power"],
    images: [
      { url: images.products["earths-virgin-coconut-130"].primary, fallback: images.products["earths-virgin-coconut-130"].primaryFallback },
      { url: images.products["earths-virgin-coconut-130"].secondary, fallback: images.products["earths-virgin-coconut-130"].secondaryFallback }
    ]
  },
  {
    id: "earths-kalonji-oil",
    slug: "kalonji-oil-pure-30ml",
    name: "Earth's Kalonji Oil Pure (30ml)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 559,
    compareAtPrice: 650,
    rating: 5.0,
    reviewsCount: 520,
    stockStatus: "in_stock",
    tags: ["Hot Selling", "Sunnah Medicine"],
    weight: "30ml",
    shortDescription: "100% pure cold-pressed Nigella Sativa black seed oil.",
    fullDescription: "Inspired by the prophetic Hadith: 'In kalonji there is a cure for every disease except death.' Mechanically pressed once from premium black cumin seeds. Packed with active Thymoquinone (TQ) for total body immunity.",
    nutrition: ["Pure Nigella Sativa Oil", "High Thymoquinone (TQ)", "No Carrier Oils Added", "Amber Glass Bottle with Dropper"],
    images: [
      { url: images.products["earths-kalonji-oil"].primary, fallback: images.products["earths-kalonji-oil"].primaryFallback },
      { url: images.products["earths-kalonji-oil"].secondary, fallback: images.products["earths-kalonji-oil"].secondaryFallback }
    ]
  },
  {
    id: "earths-desi-ghee",
    slug: "pure-desi-ghee-550g",
    name: "Earth's Pure Desi Ghee (550g)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 2282,
    compareAtPrice: 2600,
    rating: 4.9,
    reviewsCount: 280,
    stockStatus: "in_stock",
    tags: ["Bestseller", "Traditional Cultured"],
    weight: "550g",
    shortDescription: "Slow-simmered golden cultured A2 grass-fed cow desi ghee.",
    fullDescription: "Prepared using traditional bilona churning methods from grass-fed cow curd. Rich in butyric acid, fat-soluble vitamins A, D, E, and K2 with a golden granular (danedar) texture and unforgettable nutty aroma.",
    nutrition: ["Traditional Cultured Bilona Method", "Danedar Golden Texture", "Rich in Butyric Acid", "High Smoke Point (250°C)"],
    images: [
      { url: images.products["earths-desi-ghee"].primary, fallback: images.products["earths-desi-ghee"].primaryFallback },
      { url: images.products["earths-desi-ghee"].secondary, fallback: images.products["earths-desi-ghee"].secondaryFallback }
    ]
  },
  {
    id: "earths-mct-oil",
    slug: "mct-oil-pure-120ml",
    name: "Earth's MCT Oil Pure (120ml / 4oz)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 1872,
    compareAtPrice: 2200,
    rating: 4.8,
    reviewsCount: 105,
    stockStatus: "in_stock",
    tags: ["Keto Energy"],
    weight: "120ml",
    shortDescription: "100% C8/C10 medium chain triglycerides derived entirely from organic coconuts.",
    fullDescription: "Fast-acting cellular fuel that converts rapidly into ketones in the liver. Flavorless and odorless, mix into morning coffee or salads for sustained clean energy without insulin spikes.",
    nutrition: ["60% Caprylic (C8) + 40% Capric (C10)", "Zero Palm Oil Content", "Keto & Fasting Friendly", "Instant Ketone Elevation"],
    images: [
      { url: images.products["earths-mct-oil"].primary, fallback: images.products["earths-mct-oil"].primaryFallback },
      { url: images.products["earths-mct-oil"].secondary, fallback: images.products["earths-mct-oil"].secondaryFallback }
    ]
  },
  {
    id: "earths-flaxseed-jar",
    slug: "flaxseed-jar-350g",
    name: "Earth's Flaxseed Jar (350g)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 546,
    compareAtPrice: 650,
    rating: 4.8,
    reviewsCount: 145,
    stockStatus: "in_stock",
    tags: ["Whole Seeds"],
    weight: "350g",
    shortDescription: "Whole golden flaxseed in an airtight shaker jar.",
    fullDescription: "Carefully roasted whole flaxseeds packed with lignans and omega-3 alpha-linolenic acid. Ready to sprinkle over your daily salads, yogurt parfaits, and whole wheat parathas.",
    nutrition: ["Whole Roasted Golden Seeds", "Airtight Seal Packaging", "High Dietary Lignans", "Zero Sodium"],
    images: [
      { url: images.products["earths-flaxseed-jar"].primary, fallback: images.products["earths-flaxseed-jar"].primaryFallback },
      { url: images.products["earths-flaxseed-jar"].secondary, fallback: images.products["earths-flaxseed-jar"].secondaryFallback }
    ]
  },
  {
    id: "earths-almond-flour",
    slug: "almond-flour-raw-370g",
    name: "Earth's Almond Flour Raw (370g)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 1710,
    compareAtPrice: 1990,
    rating: 4.9,
    reviewsCount: 118,
    stockStatus: "in_stock",
    tags: ["Gluten-Free Flours"],
    weight: "370g",
    shortDescription: "Ultra-fine raw stoneground sweet almond flour.",
    fullDescription: "Milled from whole raw almonds with the skin intact for maximum prebiotic fiber and vitamin E. Provides moist crumb texture in diabetic rotis, almond cookies, and macarons.",
    nutrition: ["100% Raw Almond Flour", "Gluten-Free & Low GI", "Zero Wheat Contamination", "Resealable Pouch"],
    images: [
      { url: images.products["earths-almond-flour"].primary, fallback: images.products["earths-almond-flour"].primaryFallback },
      { url: images.products["earths-almond-flour"].secondary, fallback: images.products["earths-almond-flour"].secondaryFallback }
    ]
  },
  {
    id: "earths-talbeena-almond",
    slug: "talbeena-almond-220g",
    name: "Earth's Talbeena 220g (Almond)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 436,
    compareAtPrice: 520,
    rating: 5.0,
    reviewsCount: 390,
    stockStatus: "in_stock",
    tags: ["New Arrival", "Sunnah Wellness"],
    weight: "220g",
    shortDescription: "Wholesome barley porridge meal infused with crushed almonds and dates.",
    fullDescription: "Talbeena is celebrated in prophetic traditions for relieving grief, nourishing the heart, and strengthening digestion. Cook with warm milk and pure honey for an energizing breakfast.",
    nutrition: ["Whole Sprouted Barley", "Crushed California Almonds", "Sunnah Certified Recipe", "Gentle on Digestion"],
    images: [
      { url: images.products["earths-talbeena-almond"].primary, fallback: images.products["earths-talbeena-almond"].primaryFallback },
      { url: images.products["earths-talbeena-almond"].secondary, fallback: images.products["earths-talbeena-almond"].secondaryFallback }
    ]
  },
  {
    id: "earths-pink-salt-800",
    slug: "himalayan-pink-salt-800g",
    name: "Earth's Organic Himalayan Pink Salt (800g)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 267,
    compareAtPrice: 320,
    rating: 4.9,
    reviewsCount: 260,
    stockStatus: "in_stock",
    tags: ["Pure Salts"],
    weight: "800g",
    shortDescription: "Fine ground natural rock salt mined from ancient Khewra salt mines.",
    fullDescription: "Contains all 84 natural trace minerals in balance. Free from bleaches, microplastics, and synthetic anti-caking chemicals found in industrial table salt.",
    nutrition: ["100% Unrefined Khewra Salt", "84 Essential Trace Minerals", "Zero Anti-Caking Agents", "Fine Grind for Cooking"],
    images: [
      { url: images.products["earths-pink-salt-800"].primary, fallback: images.products["earths-pink-salt-800"].primaryFallback },
      { url: images.products["earths-pink-salt-800"].secondary, fallback: images.products["earths-pink-salt-800"].secondaryFallback }
    ]
  },
  {
    id: "earths-matcha-powder",
    slug: "ceremonial-matcha-powder-100g",
    name: "Earth's Ceremonial Matcha Powder (100g)",
    category: "The Earth's Pure Naturals",
    categorySlug: "the-earths-naturals",
    price: 1385,
    compareAtPrice: 1650,
    rating: 4.8,
    reviewsCount: 84,
    stockStatus: "in_stock",
    tags: ["Superfood Powders"],
    weight: "100g",
    shortDescription: "Vibrant emerald green ceremonial grade Japanese stoneground matcha.",
    fullDescription: "First-harvest shade-grown tencha leaves ground on granite mills. Rich in L-theanine and EGCG catechins for laser focus without caffeine jitters.",
    nutrition: ["Ceremonial First Harvest", "High EGCG Catechins", "Smooth Umami Flavor", "Vibrant Emerald Color"],
    images: [
      { url: images.products["earths-matcha-powder"].primary, fallback: images.products["earths-matcha-powder"].primaryFallback },
      { url: images.products["earths-matcha-powder"].secondary, fallback: images.products["earths-matcha-powder"].secondaryFallback }
    ]
  }
];

export default products;
