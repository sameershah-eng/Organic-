import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';
import { siteConfig } from '../data/site.js';
import { images } from '../data/images.js';
import { products } from '../data/products.js';
import { useStore } from '../context/StoreContext.js';
import { ImageWithFallback } from './ImageWithFallback.js';

interface HeroSlide {
  id: string;
  categorySlug: string;
  categoryName: string;
  categoryNumber: string;
  headline: string;
  subheadline: string;
  buttonText: string;
  accentGradient: string;
  bgImage: string;
  bgFallback: string;
  featuredProductIds: string[];
}

export const HeroSlideshow: React.FC = () => {
  const { openQuickView, addToCart } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: HeroSlide[] = [
    {
      id: 'quill-organics',
      categorySlug: 'quill-organics',
      categoryName: 'Quill Organic Superfoods',
      categoryNumber: '01 / ORGANIC SUPERFOODS',
      headline: 'Himalayan Shilajit & Pure Organic Superfoods',
      subheadline: 'Clean herbal stamina, 84+ trace ionic minerals, and cold-harvested seeds to elevate your mind, body, and daily vitality.',
      buttonText: 'Shop Quill Organics',
      accentGradient: 'from-emerald-950/90 via-stone-900/80 to-transparent',
      bgImage: images.brand.heroSlideQuill,
      bgFallback: images.brand.heroSlideQuillFallback,
      featuredProductIds: ['quill-shilajit-gummies', 'quill-ashwagandha', 'quill-chia-seeds'],
    },
    {
      id: 'italiano-gourmet',
      categorySlug: 'italiano-gourmet',
      categoryName: 'Italiano Gourmet & Baking',
      categoryNumber: '02 / GOURMET BAKING',
      headline: 'Artisan Cooking Chocolate & Chef Baking Mixes',
      subheadline: 'Pure cocoa butter dark chocolate, golden pancake mixes, and exotic basil seed beverages crafted for true dessert lovers.',
      buttonText: 'Shop Italiano Gourmet',
      accentGradient: 'from-stone-950/90 via-amber-950/80 to-transparent',
      bgImage: images.brand.heroSlideItaliano,
      bgFallback: images.brand.heroSlideItalianoFallback,
      featuredProductIds: ['italiano-dark-chocolate', 'italiano-pancake-mix', 'italiano-basil-drink-lychee'],
    },
    {
      id: 'the-earths-naturals',
      categorySlug: 'the-earths-naturals',
      categoryName: "The Earth's Pure Naturals",
      categoryNumber: '03 / COLD-PRESSED WELLNESS',
      headline: 'Wood-Pressed Virgin Oils & Pure Desi Ghee',
      subheadline: 'Zero heat extraction, traditional village bilona ghee, and pristine Himalayan Khewra pink salt unrefined and unbleached.',
      buttonText: "Shop The Earth's Naturals",
      accentGradient: 'from-amber-950/90 via-stone-900/80 to-transparent',
      bgImage: images.brand.heroSlideEarths,
      bgFallback: images.brand.heroSlideEarthsFallback,
      featuredProductIds: ['earths-virgin-coconut-250', 'earths-desi-ghee', 'earths-pink-salt-800'],
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isPaused) return;

    autoplayTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, totalSlides, currentSlide]);

  const activeSlide = slides[currentSlide];

  // Retrieve product items for floating preview cards
  const slideProducts = products.filter((p) => activeSlide.featuredProductIds.includes(p.id));

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-[620px] md:h-[700px] overflow-hidden bg-neutral-950 text-white select-none"
    >
      {/* Background Images with Crossfade & Slow Ken Burns Zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <ImageWithFallback
            src={activeSlide.bgImage}
            fallback={activeSlide.bgFallback}
            alt={activeSlide.headline}
            aspectRatioClass="h-full w-full"
            className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
          />
          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${activeSlide.accentGradient} opacity-95`}
          />
          {/* Subtle noise/vignette overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/40 to-neutral-950/80 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-8 flex flex-col justify-between pt-36 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                {/* Category Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{activeSlide.categoryNumber}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
                  {activeSlide.headline}
                </h1>

                {/* Subheadline */}
                <p className="text-sm sm:text-base text-stone-200/90 max-w-xl leading-relaxed font-light">
                  {activeSlide.subheadline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Link
                    to={`/category/${activeSlide.categorySlug}`}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white text-neutral-900 hover:bg-stone-200 transition-all shadow-xl hover:shadow-2xl active:scale-95"
                  >
                    <span>{activeSlide.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#categories"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs text-white border border-white/30 hover:border-white hover:bg-white/10 transition-colors backdrop-blur-xs"
                  >
                    <span>Browse All 3 Categories</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Product Cards Preview Column (Desktop) */}
          <div className="hidden lg:col-span-5 lg:flex flex-col gap-3 justify-center items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full max-w-sm space-y-3"
              >
                <div className="text-[11px] font-mono uppercase tracking-widest text-stone-300/80 mb-1 flex items-center justify-between">
                  <span>Highlighted In This Atelier</span>
                  <span className="text-amber-300">Live Stock</span>
                </div>

                {slideProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => openQuickView(prod)}
                    className="group cursor-pointer p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all flex items-center justify-between gap-3 shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/20 shrink-0">
                      <ImageWithFallback
                        src={prod.images[0]?.url}
                        fallback={prod.images[0]?.fallback}
                        alt={prod.name}
                        aspectRatioClass="h-full w-full"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="flex-1 min-w-0 text-left">
                      <span className="text-[10px] font-mono text-stone-300 block truncate">
                        {prod.category}
                      </span>
                      <h4 className="text-xs font-bold text-white truncate group-hover:text-amber-200 transition-colors">
                        {prod.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-extrabold text-white">
                          {siteConfig.currency} {prod.price.toLocaleString()}
                        </span>
                        {prod.compareAtPrice && (
                          <span className="text-[10px] text-stone-400 line-through">
                            {siteConfig.currency} {prod.compareAtPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(prod, 1);
                      }}
                      className="p-2.5 rounded-xl bg-white text-neutral-900 hover:bg-amber-300 transition-colors shadow-xs"
                      title="Quick Add"
                      aria-label="Quick Add"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Slide Navigation Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-white/15">
          {/* Progress Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className="group flex flex-col gap-1 text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-mono transition-colors ${
                      currentSlide === idx ? 'text-white font-bold' : 'text-stone-400 group-hover:text-stone-200'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-medium hidden sm:inline text-stone-300">
                    {s.categoryName.split(' ')[0]}
                  </span>
                </div>
                <div className="w-16 sm:w-28 h-1 rounded-full bg-white/20 overflow-hidden">
                  {currentSlide === idx && (
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5.5, ease: 'linear' }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
