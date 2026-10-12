import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Truck, ShieldCheck, RefreshCw, Check, CheckCircle2, Plus, Minus, ArrowLeft, MessageCircle, Share2 } from 'lucide-react';
import { products } from '../data/products.js';
import { siteConfig } from '../data/site.js';
import { useStore } from '../context/StoreContext.js';
import { ProductCard } from '../components/ProductCard.js';
import { ImageWithFallback } from '../components/ImageWithFallback.js';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist, setIsCartOpen } = useStore();

  const product = products.find((p) => p.slug === slug);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-36 pb-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-neutral-900">Product Not Found</h2>
        <p className="text-xs text-stone-500 mt-2">The requested pantry staple does not exist in our catalog.</p>
        <Link to="/" className="mt-6 inline-block px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold">
          Return to Store
        </Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const discountPercent = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAFAFB] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-stone-500 pt-2">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.categorySlug}`} className="hover:text-stone-900 transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-neutral-900 font-semibold truncate max-w-xs">{product.name}</span>
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-sm">
          {/* Left Column: Image Gallery (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Showcase Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 shadow-sm">
              <ImageWithFallback
                src={product.images[selectedImgIndex]?.url || product.images[0]?.url}
                fallback={product.images[selectedImgIndex]?.fallback || product.images[0]?.fallback}
                alt={product.name}
                aspectRatioClass="h-full w-full"
                className="w-full h-full object-cover"
              />

              {discountPercent && (
                <span className="absolute top-4 left-4 bg-rose-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                  SAVE {discountPercent}%
                </span>
              )}

              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-colors ${
                  inWishlist
                    ? 'bg-rose-50 text-rose-600 shadow-sm'
                    : 'bg-white/80 text-stone-500 hover:text-rose-600 hover:bg-white shadow-xs'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${inWishlist ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIndex(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImgIndex === idx
                        ? 'border-neutral-900 scale-105'
                        : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback
                      src={img.url}
                      fallback={img.fallback}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      aspectRatioClass="h-full w-full"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <Link
                  to={`/category/${product.categorySlug}`}
                  className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                >
                  {product.category}
                </Link>
                {product.tags.map((t) => (
                  <span key={t} className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-neutral-800">{product.rating}</span>
                <span className="text-xs text-stone-400">({product.reviewsCount} verified customer reviews)</span>
                <span className="text-stone-300">|</span>
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>In Stock (Dispatches in 24 hrs)</span>
                </span>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-4 pt-2">
                <span className="text-3xl font-extrabold text-neutral-900 font-display">
                  {siteConfig.currency} {product.price.toLocaleString()}
                </span>
                {product.compareAtPrice && (
                  <span className="text-base text-stone-400 line-through">
                    {siteConfig.currency} {product.compareAtPrice.toLocaleString()}
                  </span>
                )}
                {product.weight && (
                  <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md">
                    Net Weight: {product.weight}
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Key Nutrition / Highlights */}
              {product.nutrition && product.nutrition.length > 0 && (
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <span className="text-[11px] font-bold text-neutral-900 uppercase tracking-wider block">
                    Product Highlights & Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {product.nutrition.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Shopping Actions */}
            <div className="space-y-4 pt-6 border-t border-stone-100">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-stone-200 rounded-xl bg-stone-50 overflow-hidden w-full sm:w-auto justify-between">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-stone-200 text-stone-600 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 text-sm font-bold text-neutral-900 font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-stone-200 text-stone-600 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className={`w-full flex-1 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white active:scale-95'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Your Basket!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart ({siteConfig.currency} {(product.price * quantity).toLocaleString()})</span>
                    </>
                  )}
                </button>

                {/* Buy Now Button */}
                <button
                  onClick={handleBuyNow}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-colors shadow-sm"
                >
                  Instant Buy Now (COD)
                </button>
              </div>

              {/* Trust Features Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-100 text-[11px] text-stone-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free shipping on orders over {siteConfig.currency} 3,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cash on Delivery across Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>7-Day Hassle-Free Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full In-Depth Description Section */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-neutral-900 font-display">
            In-Depth Description & Atelier Heritage
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl">
            {product.fullDescription}
          </p>

          <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-6 text-xs text-stone-500">
            <span>Guaranteed Original Formulation</span>
            <span>·</span>
            <span>Origin: Pakistan Domestic Atelier</span>
            <span>·</span>
            <span>Questions? <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="text-emerald-700 font-semibold underline">Ask us on WhatsApp</a></span>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold font-display text-neutral-900">
              More from {product.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
