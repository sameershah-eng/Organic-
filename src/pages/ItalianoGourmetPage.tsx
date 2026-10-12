import React from 'react';
import { ChefHat, Cake, Wine, Sparkles, UtensilsCrossed } from 'lucide-react';
import { products } from '../data/products.js';
import { siteConfig } from '../data/site.js';
import { ProductGrid } from '../components/ProductGrid.js';
import { ImageWithFallback } from '../components/ImageWithFallback.js';

export const ItalianoGourmetPage: React.FC = () => {
  const categoryInfo = siteConfig.categories.find((c) => c.slug === 'italiano-gourmet')!;
  const italianoProducts = products.filter((p) => p.categorySlug === 'italiano-gourmet');

  return (
    <div className="min-h-screen bg-[#FAFAFB] pt-28 pb-20">
      {/* Category Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-stone-950 text-white p-8 sm:p-12 md:p-16 shadow-xl border border-stone-800">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/60 text-xs font-mono tracking-widest uppercase text-amber-200">
              <ChefHat className="w-3.5 h-3.5 text-amber-400" />
              <span>Category 02 · {categoryInfo.originalRef}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              {categoryInfo.name}
            </h1>

            <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-light max-w-xl">
              {categoryInfo.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-800 text-xs">
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                <Cake className="w-4 h-4 text-amber-300 mb-1" />
                <span className="font-bold block">Baking Chocolate</span>
                <span className="text-[10px] text-stone-400">Pure Cocoa Butter</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                <ChefHat className="w-4 h-4 text-amber-300 mb-1" />
                <span className="font-bold block">Pancake Mix</span>
                <span className="text-[10px] text-stone-400">Fluffy Traditional</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                <Wine className="w-4 h-4 text-rose-300 mb-1" />
                <span className="font-bold block">Basil Beverages</span>
                <span className="text-[10px] text-stone-400">Lychee, Mango & Pine</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-800">
                <UtensilsCrossed className="w-4 h-4 text-orange-300 mb-1" />
                <span className="font-bold block">Crispy Tempura</span>
                <span className="text-[10px] text-stone-400">Restaurant Batters</span>
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

      {/* Product Catalog Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ProductGrid
          initialCategory="italiano-gourmet"
          title="All Italiano Baking & Culinary Essentials"
          subtitle="Formulated for pastry chefs, master home cooks, and gourmet sweet lovers across Pakistan."
          productsList={italianoProducts}
          hideCategoryFilter={true}
        />
      </div>
    </div>
  );
};

export default ItalianoGourmetPage;
