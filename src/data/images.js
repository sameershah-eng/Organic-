/**
 * Central Image Repository for Meridian Pantry
 * 
 * Features curated high-resolution e-commerce photography for all 38+ products
 * across Quill Organics, Italiano Gourmet, and The Earth's Pure Naturals.
 * 
 * To replace any demo photo with your own client image, simply save the file into
 * /public/images/[category]/[file-name].jpg or update the URL here.
 */

export const images = {
  // Brand Logos & Global Banners
  brand: {
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&h=120&q=80",
    logoFallback: "https://picsum.photos/seed/meridian-logo-mark/400/120",
    announcementIcon: "🇵🇰",
    heroSlideQuill: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=85",
    heroSlideQuillFallback: "https://picsum.photos/seed/quill-organic-hero/1600/900",
    heroSlideItaliano: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=85",
    heroSlideItalianoFallback: "https://picsum.photos/seed/italiano-baking-hero/1600/900",
    heroSlideEarths: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1600&q=85",
    heroSlideEarthsFallback: "https://picsum.photos/seed/earths-oils-hero/1600/900",
    promoDealBanner: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85",
    promoDealBannerFallback: "https://picsum.photos/seed/deal-bundles-banner/1400/500",
    instagramGrid: [
      { id: 1, path: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", fallback: "https://picsum.photos/seed/quill-insta-chia/600/600" },
      { id: 2, path: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80", fallback: "https://picsum.photos/seed/quill-insta-cocoa/600/600" },
      { id: 3, path: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80", fallback: "https://picsum.photos/seed/quill-insta-moringa/600/600" },
      { id: 4, path: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80", fallback: "https://picsum.photos/seed/quill-insta-flour/600/600" },
    ]
  },

  // Category Metadata & Banners
  categories: {
    "quill-organics": {
      name: "Quill Organic Superfoods",
      slug: "quill-organics",
      tagline: "Natural herbs, superfood seeds & wellness gummies from the heart of Pakistan.",
      banner: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=85",
      bannerFallback: "https://picsum.photos/seed/quill-banner-superfood/1600/600",
      thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      thumbnailFallback: "https://picsum.photos/seed/quill-thumb-seeds/600/600",
      accentGradient: "from-emerald-800 via-teal-900 to-stone-900",
      accentColor: "#15803d",
      badgeText: "100% Certified Organic",
      originalRef: "quillproduct.com (Screenshot 1)"
    },
    "italiano-gourmet": {
      name: "Italiano Gourmet & Baking",
      slug: "italiano-gourmet",
      tagline: "Art of cooking: premium chocolate, pancake mixes, dessert essentials & juices.",
      banner: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=85",
      bannerFallback: "https://picsum.photos/seed/italiano-banner-chocolate/1600/600",
      thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80",
      thumbnailFallback: "https://picsum.photos/seed/italiano-thumb-pancake/600/600",
      accentGradient: "from-amber-900 via-stone-900 to-purple-950",
      accentColor: "#7c2d12",
      badgeText: "Chef's Kitchen Partner",
      originalRef: "order.italiano.pk (Screenshots 2 & 3)"
    },
    "the-earths-naturals": {
      name: "The Earth's Pure Naturals",
      slug: "the-earths-naturals",
      tagline: "Cold-pressed virgin coconut oils, pure desi ghee, ancient flours & rock salts.",
      banner: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1600&q=85",
      bannerFallback: "https://picsum.photos/seed/earths-banner-ghee/1600/600",
      thumbnail: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=600&q=80",
      thumbnailFallback: "https://picsum.photos/seed/earths-thumb-oil/600/600",
      accentGradient: "from-stone-800 via-amber-950 to-emerald-950",
      accentColor: "#854d0e",
      badgeText: "Cold-Pressed & Sunnah Wellness",
      originalRef: "theearths.pk (Screenshot 4)"
    }
  },

  // Products Image Registry
  products: {
    // ==========================================
    // 1. QUILL PRODUCTS (Organic Superfoods)
    // ==========================================
    "quill-ashwagandha": {
      primary: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-ashwagandha-1/800/800",
      secondary: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-ashwagandha-2/800/800",
    },
    "quill-chia-seeds": {
      primary: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-chia-1/800/800",
      secondary: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-chia-2/800/800",
    },
    "quill-moringa-leaf": {
      primary: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-moringa-1/800/800",
      secondary: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-moringa-2/800/800",
    },
    "quill-super-six-seeds": {
      primary: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-super-six-1/800/800",
      secondary: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-super-six-2/800/800",
    },
    "quill-shilajit-gummies": {
      primary: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-shilajit-1/800/800",
      secondary: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-shilajit-2/800/800",
    },
    "quill-berry-shilajit-gummies": {
      primary: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-berry-shilajit-1/800/800",
      secondary: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-berry-shilajit-2/800/800",
    },
    "quill-magnesium-gummies": {
      primary: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-magnesium-1/800/800",
      secondary: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-magnesium-2/800/800",
    },
    "quill-sleep-gummies": {
      primary: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-sleep-1/800/800",
      secondary: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-sleep-2/800/800",
    },
    "quill-almond-flax-flour": {
      primary: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-almond-flax-1/800/800",
      secondary: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-almond-flax-2/800/800",
    },
    "quill-pcos-pro": {
      primary: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-pcos-1/800/800",
      secondary: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-pcos-2/800/800",
    },
    "quill-neem-powder": {
      primary: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-neem-1/800/800",
      secondary: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-neem-2/800/800",
    },
    "quill-dried-pineapple": {
      primary: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-pineapple-1/800/800",
      secondary: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-pineapple-2/800/800",
    },
    "quill-fenugreek-seeds": {
      primary: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-fenugreek-1/800/800",
      secondary: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-fenugreek-2/800/800",
    },
    "quill-dried-mango": {
      primary: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-mango-1/800/800",
      secondary: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-mango-2/800/800",
    },
    "quill-lemon-grass-tea": {
      primary: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-lemongrass-1/800/800",
      secondary: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-lemongrass-2/800/800",
    },
    "quill-basil-seeds": {
      primary: "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/quill-basil-seeds-1/800/800",
      secondary: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/quill-basil-seeds-2/800/800",
    },

    // ==========================================
    // 2. ITALIANO GOURMET PRODUCTS (Baking & Culinary)
    // ==========================================
    "italiano-pancake-mix": {
      primary: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-pancake-1/800/800",
      secondary: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-pancake-2/800/800",
    },
    "italiano-dark-chocolate": {
      primary: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-dark-choc-1/800/800",
      secondary: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-dark-choc-2/800/800",
    },
    "italiano-milk-chocolate": {
      primary: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-milk-choc-1/800/800",
      secondary: "https://images.unsplash.com/photo-1575372587186-500b395646f9?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-milk-choc-2/800/800",
    },
    "italiano-cocoa-powder": {
      primary: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-cocoa-1/800/800",
      secondary: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-cocoa-2/800/800",
    },
    "italiano-castor-sugar": {
      primary: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-sugar-1/800/800",
      secondary: "https://images.unsplash.com/photo-1621996346565-e3adc644d9fa?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-sugar-2/800/800",
    },
    "italiano-basil-drink-lychee": {
      primary: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-lychee-1/800/800",
      secondary: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-lychee-2/800/800",
    },
    "italiano-basil-drink-mango": {
      primary: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-mango-drink-1/800/800",
      secondary: "https://images.unsplash.com/photo-1570742186591-a1ca5d2b7d5d?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-mango-drink-2/800/800",
    },
    "italiano-basil-drink-pineapple": {
      primary: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-pineapple-drink-1/800/800",
      secondary: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-pineapple-drink-2/800/800",
    },
    "italiano-jelly-pineapple": {
      primary: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-jelly-pine-1/800/800",
      secondary: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-jelly-pine-2/800/800",
    },
    "italiano-jelly-strawberry": {
      primary: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-jelly-straw-1/800/800",
      secondary: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-jelly-straw-2/800/800",
    },
    "italiano-bread-crumbs": {
      primary: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-crumbs-1/800/800",
      secondary: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-crumbs-2/800/800",
    },
    "italiano-tempura-spicy": {
      primary: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-tempura-1/800/800",
      secondary: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-tempura-2/800/800",
    },
    "italiano-mixed-herbs": {
      primary: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-herbs-1/800/800",
      secondary: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-herbs-2/800/800",
    },
    "italiano-garlic-powder": {
      primary: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-garlic-1/800/800",
      secondary: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-garlic-2/800/800",
    },
    "italiano-paprika-smoked": {
      primary: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/italiano-paprika-1/800/800",
      secondary: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/italiano-paprika-2/800/800",
    },

    // ==========================================
    // 3. THE EARTH'S PRODUCTS (Cold-Pressed & Sunnah)
    // ==========================================
    "earths-virgin-coconut-250": {
      primary: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-coconut-250-1/800/800",
      secondary: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-coconut-250-2/800/800",
    },
    "earths-virgin-coconut-130": {
      primary: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-coconut-130-1/800/800",
      secondary: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-coconut-130-2/800/800",
    },
    "earths-kalonji-oil": {
      primary: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-kalonji-1/800/800",
      secondary: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-kalonji-2/800/800",
    },
    "earths-desi-ghee": {
      primary: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-ghee-1/800/800",
      secondary: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-ghee-2/800/800",
    },
    "earths-mct-oil": {
      primary: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-mct-1/800/800",
      secondary: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-mct-2/800/800",
    },
    "earths-flaxseed-jar": {
      primary: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-flax-1/800/800",
      secondary: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-flax-2/800/800",
    },
    "earths-tea-tree-oil": {
      primary: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-teatree-1/800/800",
      secondary: "https://images.unsplash.com/photo-1512290900672-1f4f4692484a?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-teatree-2/800/800",
    },
    "earths-sweet-almond-oil": {
      primary: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-almond-oil-1/800/800",
      secondary: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-almond-oil-2/800/800",
    },
    "earths-black-quinoa": {
      primary: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-quinoa-1/800/800",
      secondary: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-quinoa-2/800/800",
    },
    "earths-chia-seed-pouch": {
      primary: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-chia-1/800/800",
      secondary: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-chia-2/800/800",
    },
    "earths-pumpkin-seeds": {
      primary: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-pumpkin-1/800/800",
      secondary: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-pumpkin-2/800/800",
    },
    "earths-almond-flour": {
      primary: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-almond-flour-1/800/800",
      secondary: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-almond-flour-2/800/800",
    },
    "earths-talbeena-almond": {
      primary: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-talbeena-1/800/800",
      secondary: "https://images.unsplash.com/photo-1505253758473-96b3015f21c9?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-talbeena-2/800/800",
    },
    "earths-pink-salt-800": {
      primary: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-pinksalt-1/800/800",
      secondary: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-pinksalt-2/800/800",
    },
    "earths-matcha-powder": {
      primary: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
      primaryFallback: "https://picsum.photos/seed/earths-matcha-1/800/800",
      secondary: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      secondaryFallback: "https://picsum.photos/seed/earths-matcha-2/800/800",
    }
  }
};

export default images;
