export interface ProductImage {
  url: string;
  fallback: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: 'quill-organics' | 'italiano-gourmet' | 'the-earths-naturals' | string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewsCount: number;
  stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock';
  tags: string[];
  weight?: string;
  shortDescription: string;
  fullDescription: string;
  nutrition?: string[];
  images: ProductImage[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface CategoryInfo {
  name: string;
  slug: string;
  path: string;
  tagline: string;
  description: string;
  banner: string;
  bannerFallback: string;
  thumbnail: string;
  thumbnailFallback: string;
  accentGradient: string;
  accentColor: string;
  badgeText: string;
  originalRef: string;
  heroHeadline: string;
  heroSubheadline: string;
  features: string[];
}
