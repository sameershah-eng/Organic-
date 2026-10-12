import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, ShoppingBag, Plus, Minus, Check, ShieldCheck, Truck, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext.js';
import { siteConfig } from '../data/site.js';
import { ImageWithFallback } from './ImageWithFallback.js';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, toggleWishlist, isInWishlist, setIsCartOpen } = useStore();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, quantity);
    closeQuickView();
    setIsCartOpen(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        />

        <div className="min-h-full flex items-center justify-center p-4 text-center sm:p-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 max-w-4xl w-full border border-stone-200"
          >
            {/* Close Button */}
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-stone-100/80 hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors"
              aria-label="Close product preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Gallery Column */}
              <div className="p-6 md:p-8 bg-stone-50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-100">
                <div className="space-y-4">
                  {/* Primary Large Image */}
                  <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white border border-stone-200 relative shadow-sm">
                    <ImageWithFallback
                      src={quickViewProduct.images[selectedImageIndex]?.url || quickViewProduct.images[0]?.url}
                      fallback={quickViewProduct.images[selectedImageIndex]?.fallback || quickViewProduct.images[0]?.fallback}
                      alt={quickViewProduct.name}
                      aspectRatioClass="h-full w-full"
                      className="w-full h-full object-cover"
                    />

                    {quickViewProduct.compareAtPrice && (
                      <span className="absolute top-3 left-3 bg-rose-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-full shadow-md tracking-wider">
                        {Math.round(((quickViewProduct.compareAtPrice - quickViewProduct.price) / quickViewProduct.compareAtPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  {/* Thumbnail Row */}
                  {quickViewProduct.images.length > 1 && (
                    <div className="flex gap-2.5 overflow-x-auto pb-1">
                      {quickViewProduct.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                            selectedImageIndex === idx ? 'border-neutral-900 scale-105' : 'border-stone-200 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <ImageWithFallback
                            src={img.url}
                            fallback={img.fallback}
                            alt={`${quickViewProduct.name} view ${idx + 1}`}
                            aspectRatioClass="h-full w-full"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Trust mini-bar */}
                <div className="pt-6 grid grid-cols-3 gap-2 text-center text-[10px] text-stone-500 font-medium">
                  <div className="p-2 rounded-xl bg-white border border-stone-200/80">
                    <Truck className="w-4 h-4 mx-auto mb-1 text-stone-700" />
                    <span>Free Shipping &gt; 3k</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-stone-200/80">
                    <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                    <span>100% Guaranteed</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-stone-200/80">
                    <RefreshCw className="w-4 h-4 mx-auto mb-1 text-stone-700" />
                    <span>7-Day Returns</span>
                  </div>
                </div>
              </div>

              {/* Product Info Column */}
              <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Tags */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md font-semibold">
                      {quickViewProduct.category}
                    </span>
                    <button
                      onClick={() => toggleWishlist(quickViewProduct)}
                      className={`p-2 rounded-full border transition-colors ${
                        inWishlist
                          ? 'border-rose-200 bg-rose-50 text-rose-600'
                          : 'border-stone-200 text-stone-400 hover:text-stone-800'
                      }`}
                      aria-label="Toggle wishlist"
                    >
                      <Heart className={`w-4 h-4 ${inWishlist ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold font-display text-neutral-900 tracking-tight">
                    {quickViewProduct.name}
                  </h3>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-neutral-800">{quickViewProduct.rating}</span>
                    <span className="text-xs text-stone-400">({quickViewProduct.reviewsCount} customer reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 pt-1">
                    <span className="text-2xl font-extrabold text-neutral-900">
                      {siteConfig.currency} {quickViewProduct.price.toLocaleString()}
                    </span>
                    {quickViewProduct.compareAtPrice && (
                      <span className="text-sm text-stone-400 line-through">
                        {siteConfig.currency} {quickViewProduct.compareAtPrice.toLocaleString()}
                      </span>
                    )}
                    {quickViewProduct.weight && (
                      <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                        {quickViewProduct.weight}
                      </span>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {quickViewProduct.shortDescription}
                  </p>

                  {/* Nutrition / Highlights */}
                  {quickViewProduct.nutrition && quickViewProduct.nutrition.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2">
                      <span className="text-[11px] font-bold text-neutral-900 uppercase tracking-wider block">
                        Key Highlights:
                      </span>
                      <div className="grid grid-cols-2 gap-1.5 text-xs text-stone-600">
                        {quickViewProduct.nutrition.map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions & Quantity */}
                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-stone-200 rounded-xl bg-stone-50 overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2.5 hover:bg-stone-200 text-stone-600 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-xs font-bold text-neutral-900 font-mono">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2.5 hover:bg-stone-200 text-stone-600 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 py-3 px-5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-neutral-900 hover:bg-neutral-800 text-white active:scale-[0.99]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Basket!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart ({(quickViewProduct.price * quantity).toLocaleString()} {siteConfig.currency})</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleBuyNow}
                      className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 transition-colors text-center"
                    >
                      Instant Buy Now (COD)
                    </button>
                    <Link
                      to={`/product/${quickViewProduct.slug}`}
                      onClick={closeQuickView}
                      className="px-4 py-3 rounded-xl text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center gap-1.5"
                    >
                      <span>Full Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
