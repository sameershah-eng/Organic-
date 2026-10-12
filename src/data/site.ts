import { images } from './images.js';
import { CategoryInfo } from '../types/store.js';

export const siteConfig = {
  storeName: "Meridian Pantry",
  tagline: "Pure Organics · Gourmet Baking · Cold-Pressed Wellness",
  description: "Pakistan's premier unified pantry destination uniting Quill Organic Superfoods, Italiano Gourmet & Baking, and The Earth's Pure Naturals under one seamless shopping experience.",
  currency: "Rs.",
  currencyCode: "PKR",
  freeShippingThreshold: 3000,
  defaultShippingCost: 250,
  supportPhone: "+92 300 8472910",
  whatsappNumber: "923008472910",
  supportEmail: "orders@meridianpantry.pk",
  originLocations: "Lahore · Karachi · Islamabad",

  announcementMessages: [
    "🚚 FREE nationwide shipping across Pakistan on orders over Rs. 3,000",
    "🇵🇰 Cash on Delivery (COD) available nationwide with 100% money-back guarantee",
    "🌿 100% Certified Organic Superfoods & Lab-Tested Cold-Pressed Oils",
    "✨ Use coupon code MERIDIAN10 for 10% off your first order!"
  ],

  categories: [
    {
      name: "Quill Organic Superfoods",
      slug: "quill-organics",
      path: "/category/quill-organics",
      tagline: "Natural herbs, superfood seeds & wellness gummies from the heart of Pakistan.",
      description: "From potent Himalayan Shilajit gummies to triple-cleaned organic chia seeds and revitalizing ashwagandha powders, Quill brings authentic, chemical-free herbal vitality straight from certified organic harvests.",
      banner: images.categories["quill-organics"].banner,
      bannerFallback: images.categories["quill-organics"].bannerFallback,
      thumbnail: images.categories["quill-organics"].thumbnail,
      thumbnailFallback: images.categories["quill-organics"].thumbnailFallback,
      accentGradient: "from-emerald-800 via-teal-900 to-stone-900",
      accentColor: "#15803d",
      badgeText: "100% Certified Organic",
      originalRef: "quillproduct.com (Screenshot 1)",
      heroHeadline: "Ancient Wellness, Certified Pure.",
      heroSubheadline: "Fuel your daily stamina, restful sleep, and gut resilience with pure botanical superfoods harvested at peak potency.",
      features: [
        "Gold-Grade Purified Himalayan Shilajit",
        "Triple-Cleaned Nutrient-Dense Chia & Super Seeds",
        "Zero Additives, Preservatives or Synthetic Sugars",
        "Lab-Certified for Heavy Metal & Biological Purity"
      ]
    },
    {
      name: "Italiano Gourmet & Baking",
      slug: "italiano-gourmet",
      path: "/category/italiano-gourmet",
      tagline: "The art of cooking: premium chocolate, pancake mixes, dessert essentials & juices.",
      description: "Beloved by pastry chefs and home bakers across Pakistan. Italiano delivers master-grade cooking chocolates, velvety pancake mixes, fruit jellies, basil seed juices, and authentic tempura seasonings.",
      banner: images.categories["italiano-gourmet"].banner,
      bannerFallback: images.categories["italiano-gourmet"].bannerFallback,
      thumbnail: images.categories["italiano-gourmet"].thumbnail,
      thumbnailFallback: images.categories["italiano-gourmet"].thumbnailFallback,
      accentGradient: "from-amber-900 via-stone-900 to-purple-950",
      accentColor: "#7c2d12",
      badgeText: "Chef's Kitchen Partner",
      originalRef: "order.italiano.pk (Screenshots 2 & 3)",
      heroHeadline: "Master the Art of Gourmet Cooking.",
      heroSubheadline: "Elevate your baking and desserts with professional cooking chocolate, fluffy pancake pre-mixes, and crisp savory seasonings.",
      features: [
        "Rich Cocoa Butter Cooking Chocolates (Dark & Milk)",
        "Traditional Fluffy American-Style Pancake Mixes",
        "Exotic Refreshing Basil Seed Fruit Beverages",
        "Restaurant-Grade Tempura Batters & Herb Seasonings"
      ]
    },
    {
      name: "The Earth's Pure Naturals",
      slug: "the-earths-naturals",
      path: "/category/the-earths-naturals",
      tagline: "Cold-pressed virgin coconut oils, pure desi ghee, ancient flours & rock salts.",
      description: "Pure, natural, and unprocessed pantry staples rooted in traditional holistic wellbeing. Specializing in organic wood-pressed coconut and kalonji oils, grass-fed bilona desi ghee, organic quinoa, and mineral pink salts.",
      banner: images.categories["the-earths-naturals"].banner,
      bannerFallback: images.categories["the-earths-naturals"].bannerFallback,
      thumbnail: images.categories["the-earths-naturals"].thumbnail,
      thumbnailFallback: images.categories["the-earths-naturals"].thumbnailFallback,
      accentGradient: "from-stone-800 via-amber-950 to-emerald-950",
      accentColor: "#854d0e",
      badgeText: "Cold-Pressed & Sunnah Wellness",
      originalRef: "theearths.pk (Screenshot 4)",
      heroHeadline: "Pure, Unrefined Earth's Bounty.",
      heroSubheadline: "First cold-pressed virgin oils, hand-churned grass-fed desi ghee, and unrefined rock salts crafted without industrial heat or solvents.",
      features: [
        "First Cold-Pressed Extra Virgin Coconut & Kalonji Oils",
        "Traditional Grass-Fed Bilona Desi Ghee",
        "Stoneground Unrefined Organic Flours & Ancient Grains",
        "Unbleached Himalayan Pink Salt Mined from Khewra"
      ]
    }
  ] as CategoryInfo[],

  trustBadges: [
    {
      title: "Nationwide Free Delivery",
      description: "On all orders exceeding Rs. 3,000 across Pakistan.",
      icon: "Truck"
    },
    {
      title: "Cash on Delivery",
      description: "Inspect your package upon arrival before paying.",
      icon: "Banknote"
    },
    {
      title: "100% Guaranteed Authenticity",
      description: "Direct from the 3 authentic manufacturer workshops.",
      icon: "ShieldCheck"
    },
    {
      title: "Dedicated WhatsApp Care",
      description: "Immediate guidance on usage, dosage, and delivery.",
      icon: "MessageCircle"
    }
  ],

  testimonials: [
    {
      quote: "Having Quill Shilajit gummies and Earth's Cold-Pressed Coconut Oil in one single checkout saved me so much hassle and shipping fees. Quality is identical to buying from the original individual sites!",
      author: "Zubair Hashmi",
      city: "Lahore, DHA Phase 6",
      rating: 5,
      product: "All in One Shilajit Gummies + Virgin Coconut Oil"
    },
    {
      quote: "The Italiano Dark Cooking Chocolate melted like velvet for our chocolate lava cakes, and the delivery to Karachi arrived in insulated packaging within 48 hours. Five stars!",
      author: "Farah Al-Noor",
      city: "Karachi, Clifton",
      rating: 5,
      product: "Italiano Cooking Chocolate Dark 500g"
    },
    {
      quote: "The Earth's Pure Desi Ghee has that unmistakable fragrant aroma of real village bilona ghee. My mother was so pleased. We will definitely be ordering our monthly pantry supplies here.",
      author: "Tariq Mehmood",
      city: "Islamabad, F-10",
      rating: 5,
      product: "The Earth's Pure Desi Ghee 550g"
    }
  ]
};

export default siteConfig;
