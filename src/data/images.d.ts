export interface CategoryImageMeta {
  name: string;
  slug: string;
  tagline: string;
  banner: string;
  bannerFallback: string;
  thumbnail: string;
  thumbnailFallback: string;
  accentGradient: string;
  accentColor: string;
  badgeText: string;
  originalRef: string;
}

export interface ProductImagePair {
  primary: string;
  primaryFallback: string;
  secondary: string;
  secondaryFallback: string;
}

export interface ImagesConfig {
  brand: {
    logo: string;
    logoFallback: string;
    announcementIcon: string;
    heroSlideQuill: string;
    heroSlideQuillFallback: string;
    heroSlideItaliano: string;
    heroSlideItalianoFallback: string;
    heroSlideEarths: string;
    heroSlideEarthsFallback: string;
    promoDealBanner: string;
    promoDealBannerFallback: string;
    instagramGrid: Array<{ id: number; path: string; fallback: string }>;
    [key: string]: any;
  };
  categories: Record<string, CategoryImageMeta>;
  products: Record<string, ProductImagePair>;
  [key: string]: any;
}

export declare const images: ImagesConfig;
export default images;
