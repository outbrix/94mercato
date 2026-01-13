import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RecentlyViewedProduct {
    id: string;
    title: string;
    slug: string;
    price: number;
    currency: string;
    image: string;
    category: string;
    sellerName: string;
    viewedAt: number;
}

interface RecentlyViewedState {
    products: RecentlyViewedProduct[];
    addProduct: (product: Omit<RecentlyViewedProduct, 'viewedAt'>) => void;
    clearAll: () => void;
}

const MAX_RECENTLY_VIEWED = 8;

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
    persist(
        (set, get) => ({
            products: [],

            addProduct: (product) => {
                const { products } = get();

                // Remove if already exists (to move to front)
                const filtered = products.filter(p => p.id !== product.id);

                // Add to front with timestamp
                const newProduct: RecentlyViewedProduct = {
                    ...product,
                    viewedAt: Date.now(),
                };

                // Keep only last MAX_RECENTLY_VIEWED items
                const updated = [newProduct, ...filtered].slice(0, MAX_RECENTLY_VIEWED);

                set({ products: updated });
            },

            clearAll: () => set({ products: [] }),
        }),
        {
            name: 'recently-viewed-storage',
        }
    )
);
