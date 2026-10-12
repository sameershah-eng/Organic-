import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Search,
  ShoppingBag,
  Heart,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Truck,
  Phone,
  Check,
} from 'lucide-react';
import { siteConfig } from '../data/site.js';
import { products } from '../data/products.js';
import { useStore } from '../context/StoreContext.js';
import { ImageWithFallback } from './ImageWithFallback.js';

export const Navbar: React.FC = () => {
  const { cartCount, subtotal, wishlist, setIsCartOpen, setIsWishlistOpen } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Announcement ticker index
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll dynamics
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    if (latest > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (diff > 12 && latest > 150) {
      setIsHidden(true);
    } else if (diff < -6 || latest < 100) {
      setIsHidden(false);
    }
  });

  // Cycle announcement ticker every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % siteConfig.announcementMessages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsCategoriesDropdownOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  // Click outside search
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Live search results
  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* 1. Top Announcement Bar */}
      <div className="bg-neutral-950 text-white text-[11px] font-medium py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <AnimatePresence mode="wait">
              <motion.span
                key={announcementIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="truncate"
              >
                {siteConfig.announcementMessages[announcementIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center gap-6 text-stone-300 font-mono text-[11px] shrink-0">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-amber-300" />
              <span>Free Delivery &gt; {siteConfig.currency} 3,000</span>
            </span>
            <span className="text-white/20">|</span>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: {siteConfig.supportPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-stone-200/80 py-3'
            : 'bg-white/95 backdrop-blur-xs py-4 border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Atelier Name */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-sm tracking-tighter group-hover:bg-amber-600 transition-colors shadow-sm">
              M
            </div>
            <div>
              <span className="text-base font-extrabold tracking-tight font-display text-neutral-900 block leading-none">
                MERIDIAN PANTRY
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-stone-400 block mt-0.5">
                Pakistan's Unified Gourmet House
              </span>
            </div>
          </Link>

          {/* Desktop Center Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold">
            <Link
              to="/"
              className={`transition-colors py-1 ${
                location.pathname === '/' ? 'text-neutral-900 font-bold border-b-2 border-neutral-900' : 'text-stone-600 hover:text-neutral-900'
              }`}
            >
              Home
            </Link>

            {/* Categories Dropdown Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
              onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 py-1 transition-colors ${
                  location.pathname.startsWith('/category')
                    ? 'text-neutral-900 font-bold'
                    : 'text-stone-600 hover:text-neutral-900'
                }`}
              >
                <span>Store Categories</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    isCategoriesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {isCategoriesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full -left-24 w-[760px] bg-white rounded-3xl shadow-2xl border border-stone-200/90 p-6 z-50 mt-2"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-4 pb-2 border-b border-stone-100 flex items-center justify-between">
                      <span>Explore Our 3 Unified Speciality Houses</span>
                      <span>Combined Cart & Free Shipping</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {siteConfig.categories.map((cat, i) => (
                        <Link
                          key={cat.slug}
                          to={cat.path}
                          className="group/cat p-3 rounded-2xl border border-stone-100 hover:border-neutral-900 hover:bg-stone-50 transition-all flex flex-col justify-between"
                        >
                          <div className="aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 mb-3 relative">
                            <ImageWithFallback
                              src={cat.thumbnail}
                              fallback={cat.thumbnailFallback}
                              alt={cat.name}
                              aspectRatioClass="h-full w-full"
                              className="w-full h-full object-cover group-hover/cat:scale-105 transition-transform duration-500"
                            />
                            <span className="absolute bottom-2 left-2 text-[9px] font-mono bg-neutral-900/80 text-white px-2 py-0.5 rounded backdrop-blur-xs">
                              0{i + 1}
                            </span>
                          </div>

                          <div>
                            <span className="text-[10px] font-mono text-amber-700 block font-semibold mb-0.5">
                              {cat.badgeText}
                            </span>
                            <h4 className="text-xs font-bold text-neutral-900 group-hover/cat:text-amber-800 transition-colors">
                              {cat.name}
                            </h4>
                            <p className="text-[11px] text-stone-500 line-clamp-2 mt-1 leading-snug">
                              {cat.tagline}
                            </p>
                          </div>

                          <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-neutral-900">
                            <span>Browse Atelier</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/cat:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={`transition-colors py-1 ${
                location.pathname === '/about' ? 'text-neutral-900 font-bold border-b-2 border-neutral-900' : 'text-stone-600 hover:text-neutral-900'
              }`}
            >
              Our Story
            </Link>

            <Link
              to="/contact"
              className={`transition-colors py-1 ${
                location.pathname === '/contact' ? 'text-neutral-900 font-bold border-b-2 border-neutral-900' : 'text-stone-600 hover:text-neutral-900'
              }`}
            >
              Customer Care
            </Link>
          </div>

          {/* Right Action Icons: Live Search, Wishlist, Cart Drawer Trigger */}
          <div className="flex items-center gap-3">
            {/* Live Search Trigger & Dropdown */}
            <div className="relative" ref={searchRef}>
              <div className="hidden sm:flex items-center relative">
                <input
                  type="text"
                  placeholder="Search 38+ pantry items..."
                  value={searchQuery}
                  onFocus={() => setIsSearchOpen(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  className="w-48 lg:w-64 text-xs pl-8 pr-3 py-2 rounded-full border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all focus:w-72"
                />
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 pointer-events-none" />
              </div>

              {/* Mobile Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="sm:hidden p-2.5 rounded-full hover:bg-stone-100 text-stone-700"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Instant Search Results Dropdown */}
              <AnimatePresence>
                {isSearchOpen && searchQuery.trim() && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 p-3 z-50"
                  >
                    <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-2 px-2 flex justify-between">
                      <span>Matching Products ({searchResults.length})</span>
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="text-stone-500 hover:text-stone-900"
                      >
                        Close
                      </button>
                    </div>

                    {searchResults.length === 0 ? (
                      <div className="p-4 text-center text-xs text-stone-500">
                        No products found for "{searchQuery}"
                      </div>
                    ) : (
                      <div className="divide-y divide-stone-100">
                        {searchResults.map((item) => (
                          <Link
                            key={item.id}
                            to={`/product/${item.slug}`}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                              <ImageWithFallback
                                src={item.images[0]?.url}
                                fallback={item.images[0]?.fallback}
                                alt={item.name}
                                aspectRatioClass="h-full w-full"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <span className="text-[10px] font-mono text-stone-400 block truncate">
                                {item.category}
                              </span>
                              <h5 className="text-xs font-bold text-neutral-900 truncate">
                                {item.name}
                              </h5>
                              <span className="text-xs font-semibold text-emerald-800 font-mono">
                                {siteConfig.currency} {item.price.toLocaleString()}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              className="relative p-2.5 rounded-full hover:bg-stone-100 text-stone-700 transition-colors"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
              className="relative p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-all flex items-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold font-mono px-1">
                {cartCount}
              </span>
              {subtotal > 0 && (
                <span className="hidden sm:inline text-[11px] font-medium text-stone-300 pr-1 border-l border-white/20 pl-2">
                  {siteConfig.currency} {subtotal.toLocaleString()}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100"
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-stone-200 px-6 py-6 space-y-6 overflow-hidden"
            >
              {/* Mobile Search input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50"
                />
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>

              {/* Mobile Category Links */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">
                  Store Categories:
                </span>
                {siteConfig.categories.map((c) => (
                  <Link
                    key={c.slug}
                    to={c.path}
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-100 text-xs font-bold text-neutral-900"
                  >
                    <span>{c.name}</span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </Link>
                ))}
              </div>

              {/* Other Pages */}
              <div className="space-y-2 pt-2 border-t border-stone-100 text-xs font-semibold text-stone-700">
                <Link to="/" className="block py-2">Home</Link>
                <Link to="/about" className="block py-2">Our Story</Link>
                <Link to="/contact" className="block py-2">Customer Care & Orders</Link>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Direct Support</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
