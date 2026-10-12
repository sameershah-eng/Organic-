import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';
import { siteConfig } from '../data/site.js';
import { products } from '../data/products.js';
import { ImageWithFallback } from './ImageWithFallback.js';

export const CategoryShowcase: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-[#FAFAFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Three Historic Pantries Unified</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-neutral-900 tracking-tight">
              Browse by Culinary Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
            Each category represents an original dedicated website merged into Meridian Pantry—offering authentic artisan recipes, guaranteed provenance, and combined cart shipping.
          </p>
        </div>

        {/* 3 Prominent Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteConfig.categories.map((cat, idx) => {
            const catProducts = products.filter((p) => p.categorySlug === cat.slug);

            return (
              <div
                key={cat.slug}
                className="group relative bg-white rounded-3xl border border-stone-200/80 hover:border-neutral-900 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Banner Header with Ken Burns subtle hover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <ImageWithFallback
                    src={cat.banner}
                    fallback={cat.bannerFallback}
                    alt={cat.name}
                    aspectRatioClass="h-full w-full"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Accent Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.accentGradient} opacity-85 group-hover:opacity-90 transition-opacity`} />

                  {/* Header text on top of image */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        Category 0{idx + 1}
                      </span>
                      <span className="text-xs font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-stone-200">
                        {catProducts.length} Items
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-amber-300 block mb-1">
                        {cat.badgeText}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight">
                        {cat.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {cat.tagline}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">
                        Signature Offerings:
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {cat.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                            <span className="truncate">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Preview of 3 Products */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-2">
                        Bestsellers in this Collection:
                      </span>
                      <div className="flex gap-2">
                        {catProducts.slice(0, 3).map((p) => (
                          <Link
                            key={p.id}
                            to={`/product/${p.slug}`}
                            className="flex-1 p-2 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200/60 transition-colors text-left group/item"
                          >
                            <div className="aspect-square rounded-lg overflow-hidden bg-white mb-1.5">
                              <ImageWithFallback
                                src={p.images[0]?.url}
                                fallback={p.images[0]?.fallback}
                                alt={p.name}
                                aspectRatioClass="h-full w-full"
                                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                              />
                            </div>
                            <span className="text-[11px] font-bold text-neutral-900 block truncate">
                              {p.name}
                            </span>
                            <span className="text-[10px] text-stone-500 font-mono">
                              {siteConfig.currency} {p.price.toLocaleString()}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Button Link */}
                  <div className="pt-4 border-t border-stone-100">
                    <Link
                      to={cat.path}
                      className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-neutral-900 bg-stone-100 group-hover:bg-neutral-900 group-hover:text-white transition-all flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>Explore Entire {cat.name.split(' ')[0]} Store</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-[10px] text-stone-400 text-center block mt-2">
                      Source: {cat.originalRef}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
