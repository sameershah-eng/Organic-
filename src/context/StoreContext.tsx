import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { Product, CartItem } from '../types/store.js';
import { siteConfig } from '../data/site.js';

interface StoreState {
  cart: CartItem[];
  wishlist: string[]; // array of product ids
  couponCode: string;
  discountRate: number; // e.g. 0.10 for 10%
}

type StoreAction =
  | { type: 'ADD_TO_CART'; product: Product; quantity?: number }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_WISHLIST'; productId: string }
  | { type: 'APPLY_COUPON'; code: string; discountRate: number }
  | { type: 'REMOVE_COUPON' }
  | { type: 'HYDRATE'; payload: Partial<StoreState> };

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  couponCode: string;
  discountRate: number;
  cartCount: number;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  grandTotal: number;
  freeShippingProgress: number; // 0 to 100
  amountNeededForFreeShipping: number;
  
  // UI States
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  toastMessage: string | null;
  showToast: (message: string) => void;

  // Actions
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
}

const CART_STORAGE_KEY = 'meridian_pantry_cart_v2';
const WISHLIST_STORAGE_KEY = 'meridian_pantry_wishlist_v2';

const initialState: StoreState = {
  cart: [],
  wishlist: [],
  couponCode: '',
  discountRate: 0,
};

function storeReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case 'HYDRATE':
      return { ...state, ...action.payload };

    case 'ADD_TO_CART': {
      const qty = action.quantity && action.quantity > 0 ? action.quantity : 1;
      const existingIndex = state.cart.findIndex(item => item.product.id === action.product.id);
      let newCart: CartItem[];

      if (existingIndex > -1) {
        newCart = [...state.cart];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + qty,
        };
      } else {
        newCart = [...state.cart, { product: action.product, quantity: qty }];
      }

      return { ...state, cart: newCart };
    }

    case 'REMOVE_FROM_CART': {
      const newCart = state.cart.filter(item => item.product.id !== action.productId);
      return { ...state, cart: newCart };
    }

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter(item => item.product.id !== action.productId),
        };
      }

      const newCart = state.cart.map(item => {
        if (item.product.id === action.productId) {
          return { ...item, quantity: action.quantity };
        }
        return item;
      });

      return { ...state, cart: newCart };
    }

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.includes(action.productId);
      const newWishlist = exists
        ? state.wishlist.filter(id => id !== action.productId)
        : [...state.wishlist, action.productId];

      return { ...state, wishlist: newWishlist };
    }

    case 'APPLY_COUPON':
      return {
        ...state,
        couponCode: action.code,
        discountRate: action.discountRate,
      };

    case 'REMOVE_COUPON':
      return {
        ...state,
        couponCode: '',
        discountRate: 0,
      };

    default:
      return state;
  }
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);

      const payload: Partial<StoreState> = {};
      if (savedCart) {
        payload.cart = JSON.parse(savedCart);
      }
      if (savedWishlist) {
        payload.wishlist = JSON.parse(savedWishlist);
      }

      if (Object.keys(payload).length > 0) {
        dispatch({ type: 'HYDRATE', payload });
      }
    } catch (err) {
      console.warn('Could not read from local storage', err);
    }
  }, []);

  // Persist to localStorage on state changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(state.wishlist));
    } catch (err) {
      console.warn('Could not save to local storage', err);
    }
  }, [state.cart, state.wishlist]);

  // Toast handler
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Calculations
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * state.discountRate);
  const shippingFee = subtotal >= siteConfig.freeShippingThreshold || subtotal === 0 ? 0 : siteConfig.defaultShippingCost;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const amountNeededForFreeShipping = Math.max(0, siteConfig.freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / siteConfig.freeShippingThreshold) * 100));

  // Action wrappers
  const addToCart = (product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_TO_CART', product, quantity });
    showToast(`Added ${quantity > 1 ? `${quantity}x ` : ''}"${product.name}" to cart`);
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
    showToast('Item removed from cart');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleWishlist = (product: Product) => {
    dispatch({ type: 'TOGGLE_WISHLIST', productId: product.id });
    const isNowIn = !state.wishlist.includes(product.id);
    showToast(isNowIn ? `Saved "${product.name}" to wishlist` : `Removed "${product.name}" from wishlist`);
  };

  const isInWishlist = (productId: string) => {
    return state.wishlist.includes(productId);
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'MERIDIAN10') {
      dispatch({ type: 'APPLY_COUPON', code: cleanCode, discountRate: 0.1 });
      showToast('10% Discount Coupon Applied!');
      return { success: true, message: 'Coupon MERIDIAN10 applied! (10% off)' };
    } else if (cleanCode === 'WELCOME5') {
      dispatch({ type: 'APPLY_COUPON', code: cleanCode, discountRate: 0.05 });
      showToast('5% Welcome Discount Applied!');
      return { success: true, message: 'Coupon WELCOME5 applied! (5% off)' };
    } else {
      return { success: false, message: 'Invalid coupon code. Try MERIDIAN10.' };
    }
  };

  const removeCoupon = () => {
    dispatch({ type: 'REMOVE_COUPON' });
    showToast('Coupon removed');
  };

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <StoreContext.Provider
      value={{
        cart: state.cart,
        wishlist: state.wishlist,
        couponCode: state.couponCode,
        discountRate: state.discountRate,
        cartCount,
        subtotal,
        discountAmount,
        shippingFee,
        grandTotal,
        freeShippingProgress,
        amountNeededForFreeShipping,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        toastMessage,
        showToast,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export default StoreContext;
