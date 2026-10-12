import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, Truck, RefreshCw, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { siteConfig } from '../data/site.js';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-neutral-950 text-stone-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Top Trust Features Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-neutral-800">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-amber-400 flex items-center justify-center shrink-0 border border-neutral-800">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Free Nationwide Delivery</h4>
              <p className="text-[11px] text-stone-400 mt-0.5">Orders over {siteConfig.currency} 3,000 across Pakistan</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-emerald-400 flex items-center justify-center shrink-0 border border-neutral-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cash on Delivery</h4>
              <p className="text-[11px] text-stone-400 mt-0.5">Pay at your doorstep with confidence</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-teal-400 flex items-center justify-center shrink-0 border border-neutral-800">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">7-Day Guarantee</h4>
              <p className="text-[11px] text-stone-400 mt-0.5">100% money-back freshness guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-rose-400 flex items-center justify-center shrink-0 border border-neutral-800">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">WhatsApp Concierge</h4>
              <p className="text-[11px] text-stone-400 mt-0.5">Live expert advice: {siteConfig.supportPhone}</p>
            </div>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-xl bg-white text-neutral-950 flex items-center justify-center font-bold text-sm tracking-tighter">
                M
              </div>
              <span className="text-lg font-extrabold tracking-tight font-display text-white">
                {siteConfig.storeName.toUpperCase()}
              </span>
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Pakistan's unified gourmet and wellness marketplace. Bringing together Quill Organic Superfoods, Italiano Gourmet & Baking, and The Earth's Pure Naturals under one single basket with nationwide delivery.
            </p>

            <div className="space-y-2 pt-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>Lahore · Karachi · Islamabad Fulfillment Centers</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Support: {siteConfig.supportPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Email: {siteConfig.supportEmail}</span>
              </div>
            </div>
          </div>

          {/* Category Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              The Three Pantries
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={c.path}
                    className="hover:text-white transition-colors block text-stone-400 hover:translate-x-0.5 transform duration-150"
                  >
                    {c.name}
                  </Link>
                  <span className="text-[10px] text-stone-600 block">{c.badgeText}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Service */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Three-Pantry Merger Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Order Inquiries
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors text-emerald-400 font-medium"
                >
                  WhatsApp Direct Support
                </a>
              </li>
              <li>
                <span className="text-stone-500">Track Order via Phone SMS</span>
              </li>
              <li>
                <span className="text-stone-500">Return & Exchange Policy</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Join the Tasting Club
            </h4>
            <p className="text-xs text-stone-400 leading-snug">
              Receive private coupon drops, chef recipes, and seasonal harvest announcements.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-200 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! Use coupon <strong>MERIDIAN10</strong> for 10% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-stone-500 focus:outline-none focus:border-neutral-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-white text-neutral-950 hover:bg-stone-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Get 10% Off Voucher</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.storeName}. All rights reserved. Sourced from authentic recipes of Pakistan.
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] uppercase font-mono text-stone-400 mr-2">Secure Payments:</span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-bold text-emerald-400">
              Cash on Delivery (COD)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-bold text-amber-400">
              JazzCash
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-bold text-emerald-400">
              Easypaisa
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] font-bold text-sky-400">
              Visa / Mastercard
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
