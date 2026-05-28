import { create } from "zustand";
import type { Product } from "../Types/Product";

type CartStoreType = {
  cartItems: Product[];
  addToCart: (product: Product, qty: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

export const CartStore = create<CartStoreType>((set) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id,
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, cartQty: item.cartQty + 1 }
              : item,
          ),
        };
      }

      return {
        cartItems: [...state.cartItems, { ...product, cartQty: 1 }],
      };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    })),
  clearCart: () => set({ cartItems: [] }),
}));
