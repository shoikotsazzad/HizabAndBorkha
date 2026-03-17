import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const PROMO_CODES = {
  EID20: { type: 'percent', value: 20, label: '20% off' },
  FIRST10: { type: 'fixed', value: 100, label: '৳100 off' },
};

const calcTotals = (items, promoCode) => {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  let discount = 0;
  if (promoCode && PROMO_CODES[promoCode]) {
    const promo = PROMO_CODES[promoCode];
    discount = promo.type === 'percent'
      ? Math.round(subtotal * promo.value / 100)
      : Math.min(promo.value, subtotal);
  }
  const afterDiscount = subtotal - discount;
  const delivery = afterDiscount >= 1500 ? 0 : 80;
  const grand = afterDiscount + delivery;
  return { subtotal, discount, delivery, grand };
};

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      promoCode: '',
      promoError: '',

      addItem: (product, selectedColor, selectedSize, qty = 1) => {
        set((state) => {
          const key = `${product.id}-${selectedColor}-${selectedSize}`;
          const existing = state.items.find((i) => i.key === key);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.key === key ? { ...i, qty: i.qty + qty } : i
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                key,
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                color: selectedColor,
                size: selectedSize,
                qty,
              },
            ],
          };
        });
      },

      removeItem: (key) =>
        set((state) => ({ items: state.items.filter((i) => i.key !== key) })),

      updateQty: (key, qty) => {
        if (qty < 1) return;
        set((state) => ({
          items: state.items.map((i) => (i.key === key ? { ...i, qty } : i)),
        }));
      },

      clearCart: () => set({ items: [], promoCode: '', promoError: '' }),

      applyPromo: (code) => {
        const upper = code.trim().toUpperCase();
        if (PROMO_CODES[upper]) {
          set({ promoCode: upper, promoError: '' });
        } else {
          set({ promoError: 'Invalid promo code', promoCode: '' });
        }
      },

      removePromo: () => set({ promoCode: '', promoError: '' }),

      get totals() {
        const { items, promoCode } = get();
        return calcTotals(items, promoCode);
      },

      get count() {
        return get().items.reduce((sum, i) => sum + i.qty, 0);
      },
    }),
    { name: 'hb-cart' }
  )
);
