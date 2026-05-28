import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, CartItem } from "../Types/Product";

type CartStoreType = {
  cartItems: CartItem[];

  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStoreType>()(
  persist(
    (set) => ({
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
                  ? { ...item, cartQty: (item.cartQty ?? 0) + 1 }
                  : item,
              ),
            };
          }

          return {
            cartItems: [...state.cartItems, { ...product, cartQty: 1 }],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => {
          const normalizedProductId = Number(productId);

          return {
            cartItems: state.cartItems.filter(
              (item) => Number(item.id) !== normalizedProductId,
            ),
          };
        }),

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
);
