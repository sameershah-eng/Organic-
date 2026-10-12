import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types/store.js';
import { siteConfig } from '../data/site.js';
import { useStore } from '../context/StoreContext.js';
import { ImageWithFallback } from './ImageWithFallback.js';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView } = useStore();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const discountPercent = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl border border-stone-200/90 hover:border-neutral-900 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden"
    >
      {/* Top Media Area */}
      <div className="relative aspect-square w-full bg-stone-50 overflow-hidden">
        {/* Primary Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <ImageWithFallback
            src={product.images[0]?.url}
            fallback={product.images[0]?.fallback}
            alt={product.name}
            aspectRatioClass="h-full w-full"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Secondary Image on Hover */}
        {product.images[1] && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={product.images[1].url}
              fallback={product.images[1].fallback}
              alt={`${product.name} alternate view`}
              aspectRatioClass="h-full w-full"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {discountPercent && discountPercent > 0 && (
            <span className="bg-rose-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full shadow-sm">
              -{discountPercent}%
            </span>
          )}
          {product.tags && product.tags.length > 0 && (
            <span className="bg-neutral-900/80 backdrop-blur-xs text-white font-medium text-[9px] px-2 py-0.5 rounded-full shadow-sm">
              {product.tags[0]}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          aria-label="Save to Wishlist"
          className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-full backdrop-blur-md transition-all ${
            inWishlist
              ? 'bg-rose-50 text-rose-600 shadow-sm'
              : 'bg-white/80 text-stone-500 hover:text-rose-600 hover:bg-white shadow-xs'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-rose-500' : ''}`} />
        </button>

        {/* Quick View Hover Button */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleQuickView}
            className="w-full py-2 px-3 rounded-xl bg-white/95 backdrop-blur-md text-neutral-900 text-[11px] font-bold shadow-md hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Weight */}
          <div className="flex items-center justify-between text-[10px] text-stone-500 mb-1">
            <span className="font-mono uppercase tracking-wider line-clamp-1">{product.category}</span>
            {product.weight && (
              <span className="font-mono bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">
                {product.weight}
              </span>
            )}
          </div>

          {/* Product Name */}
          <Link
            to={`/product/${product.slug}`}
            className="text-xs font-bold text-neutral-900 hover:text-stone-600 transition-colors line-clamp-2 block leading-snug"
          >
            {product.name}
          </Link>

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-neutral-700">{product.rating}</span>
            <span className="text-[10px] text-stone-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Pricing and Add to Cart */}
        <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-xs font-extrabold text-neutral-900">
              {siteConfig.currency} {product.price.toLocaleString()}
            </div>
            {product.compareAtPrice && (
              <div className="text-[10px] text-stone-400 line-through">
                {siteConfig.currency} {product.compareAtPrice.toLocaleString()}
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-xs active:scale-95'
            }`}
            title="Add to cart"
            aria-label="Add to cart"
          >
            {isAdded ? (
              <Check className="w-4 h-4" />
            ) : (
              <ShoppingBag className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
