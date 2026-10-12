import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext.js';

export const ToastNotification: React.FC = () => {
  const { toastMessage, setIsCartOpen } = useStore();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-neutral-900 text-white shadow-2xl border border-neutral-700 max-w-md"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-neutral-900 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-[11px] font-bold text-amber-300 hover:text-white underline shrink-0 flex items-center gap-1"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>View Cart</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastNotification;
