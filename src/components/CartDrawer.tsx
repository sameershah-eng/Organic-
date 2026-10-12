import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Tag, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext.js';
import { siteConfig } from '../data/site.js';
import { ImageWithFallback } from './ImageWithFallback.js';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingFee,
    grandTotal,
    amountNeededForFreeShipping,
    freeShippingProgress,
    couponCode,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
  } = useStore();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
    if (res.success) {
      setInputCoupon('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
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
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-neutral-900">Your Shopping Cart</h2>
                    <p className="text-xs text-stone-500">
                      {cart.length === 0 ? 'Empty cart' : `${cart.reduce((s, i) => s + i.quantity, 0)} items in your basket`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="p-4 bg-emerald-50/80 border-b border-emerald-100">
                <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                  <span className="text-emerald-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    {amountNeededForFreeShipping === 0 ? (
                      <span className="text-emerald-700 font-bold">🎉 Congratulations! You have FREE Nationwide Delivery</span>
                    ) : (
                      <span>
                        Add <strong className="text-emerald-800">{siteConfig.currency} {amountNeededForFreeShipping.toLocaleString()}</strong> more for FREE Shipping!
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700">{freeShippingProgress}%</span>
                </div>
                <div className="w-full bg-emerald-200/70 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-emerald-600 h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${freeShippingProgress}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-stone-100">
                {cart.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                      <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-800">Your cart is empty</h3>
                      <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                        Explore our superfoods, artisan baking supplies, and cold-pressed wellness oils.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-sm"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map(({ product, quantity }) => (
                    <div key={product.id} className="pt-4 first:pt-0 flex gap-3.5">
                      {/* Product Thumbnail */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0 relative">
                        <ImageWithFallback
                          src={product.images[0]?.url}
                          fallback={product.images[0]?.fallback}
                          alt={product.name}
                          aspectRatioClass="h-full w-full"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                                {product.category}
                              </span>
                              <h4 className="text-xs font-bold text-neutral-900 line-clamp-1 mt-0.5">
                                {product.name}
                              </h4>
                            </div>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          {product.weight && (
                            <span className="text-[11px] text-stone-500 block mt-0.5">
                              Pack: {product.weight}
                            </span>
                          )}
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="p-1.5 hover:bg-stone-200 text-stone-600 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-semibold text-neutral-900">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="p-1.5 hover:bg-stone-200 text-stone-600 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-xs font-bold text-neutral-900">
                              {siteConfig.currency} {(product.price * quantity).toLocaleString()}
                            </span>
                            {product.compareAtPrice && (
                              <span className="text-[10px] text-stone-400 line-through block">
                                {siteConfig.currency} {(product.compareAtPrice * quantity).toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary & Checkout */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-stone-200 bg-stone-50/60 space-y-4">
                  {/* Coupon Code Section */}
                  <div>
                    {couponCode ? (
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs">
                        <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Coupon <strong>{couponCode}</strong> applied (10% off)</span>
                        </div>
                        <button
                          onClick={removeCoupon}
                          className="text-stone-500 hover:text-stone-800 text-[11px] underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyCoupon} className="flex gap-2">
                        <div className="relative flex-1">
                          <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Coupon code (e.g. MERIDIAN10)"
                            value={inputCoupon}
                            onChange={(e) => setInputCoupon(e.target.value)}
                            className="w-full text-xs pl-8 pr-3 py-2 border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 uppercase font-mono"
                          />
                        </div>
                        <button
                          type="submit"
                          className="px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors"
                        >
                          Apply
                        </button>
                      </form>
                    )}
                    {couponFeedback && !couponCode && (
                      <p className={`text-[11px] mt-1 ${couponFeedback.success ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {couponFeedback.message}
                      </p>
                    )}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-200 pt-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-neutral-900">{siteConfig.currency} {subtotal.toLocaleString()}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-medium">
                        <span>Discount ({couponCode})</span>
                        <span>- {siteConfig.currency} {discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span>Shipping Fee (Nationwide)</span>
                      <span>
                        {shippingFee === 0 ? (
                          <span className="text-emerald-700 font-bold uppercase text-[11px]">FREE</span>
                        ) : (
                          `${siteConfig.currency} ${shippingFee.toLocaleString()}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-neutral-900 pt-2 border-t border-stone-200">
                      <span>Grand Total</span>
                      <span>{siteConfig.currency} {grandTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={handleProceedToCheckout}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-neutral-900 hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.99] text-xs uppercase tracking-wider"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-center text-stone-500">
                      🔒 Guaranteed Safe & Secure Checkout · Cash on Delivery Supported
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
