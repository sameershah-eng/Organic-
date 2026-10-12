import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Truck, Leaf, ChefHat, Droplets, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/site.js';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFB] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>The Origin of Meridian Pantry</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-neutral-900 tracking-tight leading-tight">
            Three Distinct Masters. One Unified Kitchen Destination.
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            How we merged Pakistan's most respected independent food & wellness ateliers—Quill Organics, Italiano Gourmet, and The Earth's Pure Naturals—into a singular, effortless shopping sanctuary.
          </p>
        </div>

        {/* The 3 Original Houses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest block font-bold">House 01</span>
              <h3 className="text-base font-bold text-neutral-900 mt-0.5">Quill Organics</h3>
              <span className="text-[10px] text-stone-400 font-mono block">quillproduct.com</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pioneered gold-grade Himalayan Shilajit gummies, organic chia seeds, and raw ashwagandha root extracts to empower natural immunity and hormonal health without synthetic pharmaceuticals.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-700 uppercase tracking-widest block font-bold">House 02</span>
              <h3 className="text-base font-bold text-neutral-900 mt-0.5">Italiano Gourmet</h3>
              <span className="text-[10px] text-stone-400 font-mono block">order.italiano.pk</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              The choice of professional bakers and gourmet dessert creators across the country. Revered for rich cocoa butter dark chocolate blocks, fluffy pancake mixes, and fruit-infused basil seed drinks.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-sm">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-orange-700 uppercase tracking-widest block font-bold">House 03</span>
              <h3 className="text-base font-bold text-neutral-900 mt-0.5">The Earth's Pure Naturals</h3>
              <span className="text-[10px] text-stone-400 font-mono block">theearths.pk</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Reviving ancestral Sunnah wellness with cold wood-pressed virgin coconut and kalonji oils, village bilona desi ghee, organic black quinoa, and unrefined Khewra pink rock salts.
            </p>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-900">
              Why We Unified the Three Websites
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Until recently, families seeking authentic healthy nutrition had to navigate three completely separate websites: placing an order for morning superfood gummies on Quill, ordering baking chocolates and syrups from Italiano, and purchasing cold-pressed cooking oils and desi ghee on The Earth's Naturals.
            </p>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              This meant paying three separate delivery fees, coordinating three different courier calls across multiple days, and keeping track of separate receipts. In 2026, we united our supply chains and inventories into <strong>Meridian Pantry</strong>.
            </p>
          </div>

          {/* Three Key Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-100">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-900">One Consolidated Delivery</h4>
              <p className="text-[11px] text-stone-500">
                All 3 categories pack in one insulated box, unlocking Free Shipping at Rs. 3,000.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-900">Identical Recipes & Provenance</h4>
              <p className="text-[11px] text-stone-500">
                Every product is produced under the exact original formulations and direct manufacturer quality checks.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-900">Unified WhatsApp Care</h4>
              <p className="text-[11px] text-stone-500">
                Single dedicated team available 7 days a week for tracking, culinary questions, and recipe advice.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-lg active:scale-95"
          >
            <span>Explore the Unified Store</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
