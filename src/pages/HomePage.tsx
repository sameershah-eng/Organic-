import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Truck, Banknote, RefreshCw, Star, Heart, ShoppingBag, Tag, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/site.js';
import { products } from '../data/products.js';
import { images } from '../data/images.js';
import { useStore } from '../context/StoreContext.js';
import { HeroSlideshow } from '../components/HeroSlideshow.js';
import { CategoryShowcase } from '../components/CategoryShowcase.js';
import { ProductCard } from '../components/ProductCard.js';
import { ProductGrid } from '../components/ProductGrid.js';
import { ImageWithFallback } from '../components/ImageWithFallback.js';

export const HomePage: React.FC = () => {
  const { addToCart, setIsCartOpen } = useStore();
  const [activeTab, setActiveTab] = useState<'all' | 'quill-organics' | 'italiano-gourmet' | 'the-earths-naturals'>('all');

  // Featured deal bundles
  const bestsellers = products.filter((p) => p.tags.includes('Bestseller')).slice(0, 8);

  const tabFilteredProducts = activeTab === 'all'
    ? bestsellers
    : products.filter((p) => p.categorySlug === activeTab).slice(0, 8);

  return (
    <div className="min-h-screen bg-[#FAFAFB]">
      {/* 1. Full-Width Category Slideshow Hero */}
      <HeroSlideshow />

      {/* 2. Trust Assurance Strip */}
      <section className="bg-white border-y border-stone-200/80 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">Free Nationwide Shipping</h4>
                <p className="text-[11px] text-stone-500">Orders &gt; {siteConfig.currency} 3,000 in Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Banknote className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">Cash on Delivery (COD)</h4>
                <p className="text-[11px] text-stone-500">Pay when your package arrives</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">100% Authentic Recipes</h4>
                <p className="text-[11px] text-stone-500">Direct from the 3 original ateliers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">7-Day Quality Guarantee</h4>
                <p className="text-[11px] text-stone-500">Easy replacement or full refund</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Dedicated Category Showcase Blocks */}
      <CategoryShowcase />

      {/* 4. Curated Bestsellers with Category Switcher Tabs */}
      <section className="py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                Most Loved Across Pakistan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight">
                Featured Pantry Bestsellers
              </h2>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`text-xs px-4 py-2 rounded-xl font-bold transition-all shrink-0 ${
                  activeTab === 'all'
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                All Bestsellers
              </button>
              {siteConfig.categories.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setActiveTab(c.slug as any)}
                  className={`text-xs px-4 py-2 rounded-xl font-bold transition-all shrink-0 ${
                    activeTab === c.slug
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {c.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Tab Products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {tabFilteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="text-center pt-6">
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-900 bg-stone-100 hover:bg-stone-200 transition-colors"
            >
              <span>Explore Complete 38-Item Master Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. Promotional Bundle / Deal Banner */}
      <section className="py-16 bg-[#FAFAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-neutral-950 text-white shadow-2xl p-8 sm:p-12 md:p-16 border border-neutral-800">
            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-neutral-950 text-xs font-bold tracking-wider uppercase">
                <Tag className="w-3.5 h-3.5" />
                <span>Limited Harvest Deal</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                The Master Pantry Wellness Box
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-lg">
                Combine Quill Himalayan Shilajit Gummies, Italiano 500g Dark Cooking Chocolate, and The Earth's 250ml Virgin Coconut Oil in one consolidated package with free express shipping across Pakistan.
              </p>

              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-extrabold text-amber-300 font-display">
                  {siteConfig.currency} 3,890
                </span>
                <span className="text-sm text-stone-400 line-through">
                  {siteConfig.currency} 4,835
                </span>
                <span className="bg-rose-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                  SAVE 20%
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const bundleProducts = products.filter((p) =>
                      ['quill-shilajit-gummies', 'italiano-dark-chocolate', 'earths-virgin-coconut-250'].includes(p.id)
                    );
                    bundleProducts.forEach((p) => addToCart(p, 1));
                    setIsCartOpen(true);
                  }}
                  className="px-7 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-stone-200 transition-all shadow-lg active:scale-95 flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Trio Bundle to Cart</span>
                </button>
                <span className="text-xs text-stone-400">
                  🚚 Free nationwide delivery included automatically
                </span>
              </div>
            </div>

            {/* Background Decorative Gradient */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-amber-950/40 via-stone-900/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 6. Complete Master Store Catalog with Dynamic Filters */}
      <section id="catalog" className="py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProductGrid
            title="Complete Master Store Catalog"
            subtitle="Search, filter, and discover all products across Quill Organics, Italiano Gourmet, and The Earth's Pure Naturals."
            productsList={products}
          />
        </div>
      </section>

      {/* 7. Real Customer Reviews & Feedback */}
      <section className="py-20 bg-[#FAFAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full">
              Verified Shoppers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight">
              Loved by Foodies & Families Across Pakistan
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Read how combining these three dedicated ateliers transformed our customers' kitchens and daily wellness rituals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <h5 className="font-bold text-neutral-900">{t.author}</h5>
                    <span className="text-[11px] text-stone-500">{t.city}</span>
                  </div>
                  <span className="text-[10px] font-mono bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                    Verified Order
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
