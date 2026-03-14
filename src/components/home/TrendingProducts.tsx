import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import api from "@/lib/api";
import { getProductRating, getSimulatedSales } from "@/lib/market-stats";

interface TrendingProduct {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    currency: string;
    seller: { name: string; avatar: string };
    image: string;
    badge?: string;
    category: string;
    rating: number;
    sales: number;
}

export function TrendingProducts() {
    const [products, setProducts] = useState<TrendingProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                setIsLoading(true);
                const response = await api.get("/products?sort=popular&limit=8");
                const data = response.data.products || response.data || [];
                setProducts(
                    data.slice(0, 8).map((p: any) => ({
                        id: p.id?.toString() || p.slug,
                        title: p.title,
                        slug: p.slug,
                        description: p.description || "Premium digital product",
                        price: p.price,
                        currency: p.currency || "USD",
                        seller: {
                            name: p.seller_name || "Creator",
                            avatar: p.seller_avatar || "",
                        },
                        image: p.thumbnail_url || p.images?.[0] || "",
                        badge: p.badge || undefined,
                        category: p.category || "Templates",
                        rating: getProductRating(p.slug || p.id.toString()),
                        sales: p.sales_count || getSimulatedSales(p.slug || p.id.toString()),
                    }))
                );
            } catch {
                setProducts([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTrending();
    }, []);

    if (isLoading) {
        return (
            <section className="py-16 bg-midnight">
                <div className="container-luxury flex justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-champagne" />
                </div>
            </section>
        );
    }

    if (products.length === 0) return null;

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-midnight" />

            <div className="container-luxury relative z-10">
                <div className="flex items-end justify-between mb-8">
                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-cream">
                        Trending now
                    </h2>
                    <Link
                        to="/products?sort=popular"
                        className="group text-sm font-bold text-cream/40 hover:text-champagne transition-colors flex items-center gap-2 px-4 py-2 -mr-4"
                    >
                        See all <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                {/* Horizontal scroll — not a grid */}
                <div
                    className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none" }}
                >
                    {products.map((product, i) => (
                        <div
                            key={product.id}
                            className="flex-shrink-0 w-[260px] snap-start animate-fade-up"
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
