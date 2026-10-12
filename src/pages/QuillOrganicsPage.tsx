import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, CheckCircle2, Leaf, HeartPulse, Moon, Zap, ArrowRight } from 'lucide-react';
import { products } from '../data/products.js';
import { siteConfig } from '../data/site.js';
import { images } from '../data/images.js';
import { ProductGrid } from '../components/ProductGrid.js';
import { ImageWithFallback } from '../components/ImageWithFallback.js';

export const QuillOrganicsPage: React.FC = () => {
  const categoryInfo = siteConfig.categories.find((c) => c.slug === 'quill-organics')!;
  const quillProducts = products.filter((p) => p.categorySlug === 'quill-organics');

  return (
    <div className="min-h-screen bg-[#FAFAFB] pt-28 pb-20">
      {/* Category Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-emerald-950 text-white p-8 sm:p-12 md:p-16 shadow-xl border border-emerald-900">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-xs font-mono tracking-widest uppercase text-emerald-200">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Category 01 · {categoryInfo.originalRef}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              {categoryInfo.name}
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-light max-w-xl">
              {categoryInfo.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-emerald-800/60 text-xs">
              <div className="p-3 rounded-xl bg-emerald-900/40 border border-emerald-800">
                <Zap className="w-4 h-4 text-amber-300 mb-1" />
                <span className="font-bold block">Peak Stamina</span>
                <span className="text-[10px] text-emerald-300">Gold-Grade Shilajit</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-900/40 border border-emerald-800">
                <HeartPulse className="w-4 h-4 text-rose-300 mb-1" />
                <span className="font-bold block">Cortisol Relief</span>
                <span className="text-[10px] text-emerald-300">Pure Ashwagandha</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-900/40 border border-emerald-800">
                <Leaf className="w-4 h-4 text-emerald-300 mb-1" />
                <span className="font-bold block">Triple-Cleaned</span>
                <span className="text-[10px] text-emerald-300">Organic Super Seeds</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-900/40 border border-emerald-800">
                <Moon className="w-4 h-4 text-indigo-300 mb-1" />
                <span className="font-bold block">Deep Sleep</span>
                <span className="text-[10px] text-emerald-300">Relaxation Gummies</span>
              </div>
            </div>
          </div>

          {/* Background Decorative Image & Overlay */}
          <div className="absolute inset-0 z-0 opacity-25">
            <ImageWithFallback
              src={categoryInfo.banner}
              fallback={categoryInfo.bannerFallback}
              alt={categoryInfo.name}
              aspectRatioClass="h-full w-full"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Product Catalog Grid with dedicated filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ProductGrid
          initialCategory="quill-organics"
          title="All Quill Organic Superfoods & Supplements"
          subtitle="All items harvested organically, laboratory-tested for purity, and backed by a 100% money-back guarantee."
          productsList={quillProducts}
          hideCategoryFilter={true}
        />
      </div>
    </div>
  );
};

export default QuillOrganicsPage;
