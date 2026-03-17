import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [],

      toggle: (product) => {
        const exists = get().items.find((i) => i.id === product.id);
        if (exists) {
          set((state) => ({ items: state.items.filter((i) => i.id !== product.id) }));
        } else {
          set((state) => ({ items: [...state.items, product] }));
        }
      },

      isWishlisted: (id) => get().items.some((i) => i.id === id),

      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
    }),
    { name: 'hb-wishlist' }
  )
);
