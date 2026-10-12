import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/site.js';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFB] flex items-center justify-center pt-32 pb-24 px-6">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto border border-amber-200">
          <ShoppingBag className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block font-bold">
          Error 404 · Pantry Item Not Found
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-neutral-900 tracking-tight">
          Page Does Not Exist
        </h1>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
          The product or category page you requested could not be located in the Meridian Pantry archive. Please browse one of our 3 core categories:
        </p>

        {/* Quick Links to 3 Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
          {siteConfig.categories.map((cat) => (
            <Link
              key={cat.slug}
              to={cat.path}
              className="p-4 rounded-2xl bg-white border border-stone-200 text-left hover:border-neutral-900 transition-colors shadow-xs group"
            >
              <span className="text-[10px] font-mono text-stone-400 block uppercase">Explore Atelier</span>
              <span className="text-xs font-bold text-neutral-900 block mt-0.5 group-hover:text-amber-700">
                {cat.name.split(' ')[0]}
              </span>
              <span className="text-[10px] text-stone-500 line-clamp-1 mt-1">{cat.badgeText}</span>
            </Link>
          ))}
        </div>

        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Store Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
