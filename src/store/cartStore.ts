import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  currency?: string;
}

interface CartState {
  items: Product[];
  addItem: (item: Omit<Product, 'quantity'>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            // If item already exists, don't increment its quantity
            return { items: state.items };
          } else {
            // Otherwise, add the new item with quantity 1
            return { items: [...state.items, { ...item, quantity: 1 }] };
          }
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),
      updateQuantity: (itemId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return { items: state.items.filter((item) => item.id !== itemId) };
          }
          return {
            items: state.items.map((item) =>
              item.id === itemId ? { ...item, quantity } : item
            ),
          };
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // localStorage key
    }
  )
);
