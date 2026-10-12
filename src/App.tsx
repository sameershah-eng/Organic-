import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { StoreProvider } from './context/StoreContext.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import ScrollToTop from './components/ScrollToTop.js';
import BackToTopButton from './components/BackToTopButton.js';
import CartDrawer from './components/CartDrawer.js';
import WishlistDrawer from './components/WishlistDrawer.js';
import QuickViewModal from './components/QuickViewModal.js';
import CheckoutModal from './components/CheckoutModal.js';
import ToastNotification from './components/ToastNotification.js';

// Lazy-loaded routes for code-splitting
const HomePage = lazy(() => import('./pages/HomePage.js'));
const QuillOrganicsPage = lazy(() => import('./pages/QuillOrganicsPage.js'));
const ItalianoGourmetPage = lazy(() => import('./pages/ItalianoGourmetPage.js'));
const TheEarthsNaturalsPage = lazy(() => import('./pages/TheEarthsNaturalsPage.js'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage.js'));
const AboutPage = lazy(() => import('./pages/AboutPage.js'));
const ContactPage = lazy(() => import('./pages/ContactPage.js'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.js'));

// Loading indicator during route changes
const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-[#FAFAFB] flex flex-col items-center justify-center p-6">
    <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-base mb-4 animate-pulse">
      M
    </div>
    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
      Loading Meridian Pantry...
    </span>
  </div>
);

// Animated Route Switcher
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex-grow"
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            
            {/* Category 1: Quill Organics */}
            <Route path="/category/quill-organics" element={<QuillOrganicsPage />} />
            <Route path="/quill-organics" element={<QuillOrganicsPage />} />
            
            {/* Category 2: Italiano Gourmet */}
            <Route path="/category/italiano-gourmet" element={<ItalianoGourmetPage />} />
            <Route path="/italiano-gourmet" element={<ItalianoGourmetPage />} />
            
            {/* Category 3: The Earth's Pure Naturals */}
            <Route path="/category/the-earths-naturals" element={<TheEarthsNaturalsPage />} />
            <Route path="/the-earths-naturals" element={<TheEarthsNaturalsPage />} />

            {/* Product Detail Page */}
            <Route path="/product/:slug" element={<ProductDetailPage />} />

            {/* Institutional Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </motion.main>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <div className="flex flex-col min-h-screen bg-[#FAFAFB] selection:bg-neutral-900 selection:text-white">
          {/* Route Change Scroll Reset */}
          <ScrollToTop />

          {/* Sticky Frosted Glass Top Navigation */}
          <Navbar />

          {/* Animated Page Transitions */}
          <AnimatedRoutes />

          {/* Shared Unified Store Footer */}
          <Footer />

          {/* Cart Drawer Slideout */}
          <CartDrawer />

          {/* Wishlist Drawer Slideout */}
          <WishlistDrawer />

          {/* Quick View Product Modal */}
          <QuickViewModal />

          {/* Checkout Modal */}
          <CheckoutModal />

          {/* Instant Toast Notification */}
          <ToastNotification />

          {/* Floating Back-to-Top Button */}
          <BackToTopButton />
        </div>
      </StoreProvider>
    </BrowserRouter>
  );
}
