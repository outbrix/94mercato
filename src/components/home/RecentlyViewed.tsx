import { Link } from "react-router-dom";
import { useRecentlyViewedStore } from "@/store/recentlyViewedStore";
import { formatPrice } from "@/lib/utils";
import { useCurrencyStore, type CurrencyCode } from "@/store/currencyStore";
import { Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecentlyViewed() {
    const { products, clearAll } = useRecentlyViewedStore();
    const { currentCurrency, convert } = useCurrencyStore();

    if (products.length === 0) {
        return null;
    }

    return (
        <section className="section-padding bg-stone/20">
            <div className="container-luxury">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-champagne" />
                        <h2 className="heading-medium">Recently Viewed</h2>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAll}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <X className="h-4 w-4 mr-1" />
                        Clear
                    </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.slug}`}
                            className="group block"
                        >
                            <div className="aspect-square rounded-lg overflow-hidden bg-midnight-light/50 border border-sapphire/20 transition-all duration-300 group-hover:border-champagne/40 group-hover:shadow-lg">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                                        No image
                                    </div>
                                )}
                            </div>
                            <div className="mt-2 space-y-1">
                                <h3 className="text-sm font-medium text-cream line-clamp-1 group-hover:text-champagne transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {product.category}
                                </p>
                                <p className="text-sm font-medium text-champagne">
                                    {formatPrice(
                                        convert(product.price, (product.currency || 'USD') as CurrencyCode, currentCurrency), 
                                        currentCurrency
                                    )}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
