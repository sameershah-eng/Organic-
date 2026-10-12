import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Truck, Banknote, Smartphone, CreditCard, ArrowRight, Loader2, MessageCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext.js';
import { siteConfig } from '../data/site.js';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    subtotal,
    discountAmount,
    shippingFee,
    grandTotal,
    couponCode,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
  } = useStore();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Lahore',
    address: '',
    orderNotes: '',
    paymentMethod: 'cod', // 'cod' | 'jazzcash' | 'card'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<{
    orderId: string;
    total: number;
    itemsCount: number;
    city: string;
    phone: string;
    name: string;
  } | null>(null);

  const pkCities = [
    'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad',
    'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala',
    'Hyderabad', 'Bahawalpur', 'Sargodha', 'Abbottabad', 'Other Cities'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid Pakistani mobile number required (e.g. 03001234567)';
    if (!formData.address.trim()) errs.address = 'Complete delivery address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const randomId = `MP-${Math.floor(100000 + Math.random() * 900000)}`;
      setCompletedOrder({
        orderId: randomId,
        total: grandTotal,
        itemsCount: cart.reduce((s, i) => s + i.quantity, 0),
        city: formData.city,
        phone: formData.phone,
        name: formData.fullName,
      });
      setIsSubmitting(false);
      clearCart();
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setCompletedOrder(null);
  };

  if (!isCheckoutOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        />

        <div className="min-h-full flex items-center justify-center p-4 text-center sm:p-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 max-w-2xl w-full border border-stone-200"
          >
            {/* Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">
                    {completedOrder ? 'Order Confirmed!' : 'Express Checkout'}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {completedOrder ? 'Your order has been recorded' : 'Nationwide Delivery across Pakistan'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* If Order is Placed: Success Screen */}
            {completedOrder ? (
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                    Order Reference: {completedOrder.orderId}
                  </span>
                  <h4 className="text-2xl font-extrabold text-neutral-900 font-display">
                    Thank You, {completedOrder.name}!
                  </h4>
                  <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                    Your order of <strong>{completedOrder.itemsCount} items</strong> worth <strong>{siteConfig.currency} {completedOrder.total.toLocaleString()}</strong> has been dispatched to our fulfillment team. You will receive a verification SMS and call at <strong>{completedOrder.phone}</strong>.
                  </p>
                </div>

                {/* Details Card */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Estimated Delivery:</span>
                    <span className="font-semibold text-neutral-900">2 – 4 Business Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Delivery Destination:</span>
                    <span className="font-semibold text-neutral-900">{completedOrder.city}, Pakistan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Payment Option:</span>
                    <span className="font-semibold text-emerald-700">Cash on Delivery (COD)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 max-w-md mx-auto">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Meridian%20Pantry,%20I%20just%20placed%20order%20${completedOrder.orderId}%20for%20Rs.%20${completedOrder.total}.%20Please%20confirm.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-xs shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleClose}
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors text-xs"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (
              /* Checkout Form */
              <form onSubmit={handlePlaceOrder} className="p-6 md:p-8 space-y-6">
                {/* 1. Customer Information */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px]">1</span>
                    <span>Shipping Address (Pakistan)</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Asad Ullah Khan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full text-xs px-3.5 py-2.5 rounded-xl border bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 ${
                          errors.fullName ? 'border-rose-400' : 'border-stone-200'
                        }`}
                      />
                      {errors.fullName && <p className="text-[10px] text-rose-600 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full text-xs px-3.5 py-2.5 rounded-xl border bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 ${
                          errors.phone ? 'border-rose-400' : 'border-stone-200'
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] text-rose-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        City *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      >
                        {pkCities.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Complete Street Address & Landmark *
                    </label>
                    <textarea
                      rows={2}
                      placeholder="House / Apartment #, Street, Sector / Area, Landmark"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className={`w-full text-xs px-3.5 py-2.5 rounded-xl border bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 ${
                        errors.address ? 'border-rose-400' : 'border-stone-200'
                      }`}
                    />
                    {errors.address && <p className="text-[10px] text-rose-600 mt-1">{errors.address}</p>}
                  </div>
                </div>

                {/* 2. Payment Method */}
                <div className="space-y-3 pt-2 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px]">2</span>
                    <span>Payment Method</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {/* COD */}
                    <label
                      onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                        formData.paymentMethod === 'cod'
                          ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                          : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-neutral-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Banknote className="w-5 h-5" />
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${formData.paymentMethod === 'cod' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                          Recommended
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-bold block">Cash on Delivery</span>
                        <span className={`text-[10px] block mt-0.5 ${formData.paymentMethod === 'cod' ? 'text-stone-300' : 'text-stone-500'}`}>
                          Pay when package arrives
                        </span>
                      </div>
                    </label>

                    {/* JazzCash / Easypaisa */}
                    <label
                      onClick={() => setFormData({ ...formData, paymentMethod: 'jazzcash' })}
                      className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                        formData.paymentMethod === 'jazzcash'
                          ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                          : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-neutral-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Smartphone className="w-5 h-5" />
                        <span className="text-[10px] font-mono">Mobile Wallet</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold block">JazzCash / Easypaisa</span>
                        <span className={`text-[10px] block mt-0.5 ${formData.paymentMethod === 'jazzcash' ? 'text-stone-300' : 'text-stone-500'}`}>
                          Instant digital transfer
                        </span>
                      </div>
                    </label>

                    {/* Card */}
                    <label
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                        formData.paymentMethod === 'card'
                          ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                          : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-neutral-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <CreditCard className="w-5 h-5" />
                        <span className="text-[10px] font-mono">Card</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold block">Credit / Debit Card</span>
                        <span className={`text-[10px] block mt-0.5 ${formData.paymentMethod === 'card' ? 'text-stone-300' : 'text-stone-500'}`}>
                          Visa & Mastercard
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* 3. Order Breakdown & Place Order */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Items Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                    <span className="font-semibold text-neutral-900">{siteConfig.currency} {subtotal.toLocaleString()}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-medium">
                      <span>Voucher Discount ({couponCode})</span>
                      <span>- {siteConfig.currency} {discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone-600">
                    <span>Shipping (Nationwide Express)</span>
                    <span className="font-semibold">
                      {shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `${siteConfig.currency} ${shippingFee.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-neutral-900 pt-2 border-t border-stone-200">
                    <span>Total Amount Payable</span>
                    <span className="text-base text-emerald-800">{siteConfig.currency} {grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || cart.length === 0}
                  className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-neutral-900 hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl active:scale-[0.99] text-xs uppercase tracking-wider disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Order to Atelier...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm & Place Order ({siteConfig.currency} {grandTotal.toLocaleString()})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default CheckoutModal;
