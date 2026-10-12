import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext.js';
import { products } from '../data/products.js';
import { siteConfig } from '../data/site.js';
import { ImageWithFallback } from './ImageWithFallback.js';

export const WishlistDrawer: React.FC = () => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useStore();

  const savedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full"
            >
              {/* Header */}
              <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Heart className="w-4 h-4 fill-rose-500" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-neutral-900">Your Wishlist</h2>
                    <p className="text-xs text-stone-500">
                      {savedProducts.length} {savedProducts.length === 1 ? 'saved product' : 'saved products'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="p-2 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors"
                  aria-label="Close wishlist"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-stone-100">
                {savedProducts.length === 0 ? (
                  <div className="py-20 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-800">Your wishlist is empty</h3>
                      <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                        Save your favorite superfoods, chocolates, and cold-pressed wellness items for easy later ordering.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsWishlistOpen(false)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-sm"
                    >
                      Browse Store
                    </button>
                  </div>
                ) : (
                  savedProducts.map((product) => (
                    <div key={product.id} className="pt-4 first:pt-0 flex gap-3.5 items-center">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0 relative">
                        <ImageWithFallback
                          src={product.images[0]?.url}
                          fallback={product.images[0]?.fallback}
                          alt={product.name}
                          aspectRatioClass="h-full w-full"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                          {product.category}
                        </span>
                        <h4 className="text-xs font-bold text-neutral-900 truncate mt-0.5">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-bold text-neutral-900">
                            {siteConfig.currency} {product.price.toLocaleString()}
                          </span>
                          {product.compareAtPrice && (
                            <span className="text-[10px] text-stone-400 line-through">
                              {siteConfig.currency} {product.compareAtPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => {
                              addToCart(product, 1);
                              toggleWishlist(product);
                            }}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-900 text-white text-[11px] font-semibold hover:bg-neutral-800 transition-colors"
                          >
                            <ShoppingBag className="w-3 h-3" />
                            <span>Move to Cart</span>
                          </button>
                          <button
                            onClick={() => toggleWishlist(product)}
                            className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-stone-100"
                            title="Remove from wishlist"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WishlistDrawer;
