"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, Product } from "@/types/store";
import { contactConfig } from "@/config/contact";

const STORAGE_KEY = "novayear-cart";

type CartContextValue = {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  cartCount: number;
  promoCode: string;
  addToCart: (product: Product, quantity?: number, variant?: string) => void;
  removeFromCart: (id: string, variant?: string) => void;
  updateQuantity: (id: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  applyPromoCode: (code: string) => boolean;
  resetPromoCode: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  const shipping = subtotal >= contactConfig.freeShippingThreshold || subtotal === 0 ? 0 : contactConfig.shippingFee;

  const discount = useMemo(() => {
    if (promoCode.toUpperCase() !== contactConfig.promoCode) return 0;
    return subtotal * 0.1;
  }, [promoCode, subtotal]);

  const total = subtotal + shipping - discount;
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (product: Product, quantity = 1, variant = product.variants[0] ?? "Standard") => {
    setItems((current) => {
      const found = current.find((item) => item.id === product.id && item.variant === variant);
      if (found) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...current, { ...product, quantity, variant }];
    });
  };

  const removeFromCart = (id: string, variant?: string) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && (variant ? item.variant === variant : true))),
    );
  };

  const updateQuantity = (id: string, quantity: number, variant?: string) => {
    if (quantity <= 0) {
      removeFromCart(id, variant);
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id && (variant ? item.variant === variant : true)
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode("");
  };

  const applyPromoCode = (code: string) => {
    const normalized = code.trim().toUpperCase();
    const valid = normalized === contactConfig.promoCode;
    setPromoCode(valid ? normalized : "");
    return valid;
  };

  const resetPromoCode = () => setPromoCode("");

  return (
    <CartContext.Provider
      value={{
        items,
        subtotal,
        shipping,
        discount,
        total,
        cartCount,
        promoCode,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyPromoCode,
        resetPromoCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
