import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Flame,
    Clock,
    ArrowRight,
    Loader2,
    Sparkles,
    Tag
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import api from "@/lib/api";

interface DealProduct {
    id: string;
    title: string;
    slug: string;
    image: string;
    originalPrice: number;
    discountedPrice: number;
    currency: string;
    discountPercent: number;
    sellerName: string;
    promoCode?: string;
    endsAt?: string;
}

export function FeaturedDeals() {
    const [deals, setDeals] = useState<DealProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState<string>("");

    // Calculate countdown for daily deals (resets at midnight)
    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const midnight = new Date();
            midnight.setHours(24, 0, 0, 0);
            const diff = midnight.getTime() - now.getTime();

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                setIsLoading(true);
                // In production, fetch deals from API
                // const response = await api.get("/products/deals");
                // setDeals(response.data);

                // Mock data for featured deals
                setDeals([
                    {
                        id: "1",
                        title: "Premium UI Kit Bundle",
                        slug: "premium-ui-kit-bundle",
                        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
                        originalPrice: 4999,
                        discountedPrice: 2499,
                        currency: "INR",
                        discountPercent: 50,
                        sellerName: "DesignPro",
                        promoCode: "LAUNCH50"
                    },
                    {
                        id: "2",
                        title: "Complete Web Dev Course",
                        slug: "complete-web-dev-course",
                        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
                        originalPrice: 7999,
                        discountedPrice: 3999,
                        currency: "INR",
                        discountPercent: 50,
                        sellerName: "CodeMaster",
                        promoCode: "LEARN50"
                    },
                    {
                        id: "3",
                        title: "3D Asset Collection",
                        slug: "3d-asset-collection",
                        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
                        originalPrice: 2999,
                        discountedPrice: 1799,
                        currency: "INR",
                        discountPercent: 40,
                        sellerName: "3DArtist",
                        promoCode: "3D40OFF"
                    },
                    {
                        id: "4",
                        title: "Font Family Pro Pack",
                        slug: "font-family-pro-pack",
                        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
                        originalPrice: 1999,
                        discountedPrice: 999,
                        currency: "INR",
                        discountPercent: 50,
                        sellerName: "TypeFoundry",
                        promoCode: "FONT50"
                    }
                ]);
            } catch (err) {
                console.error("Error fetching deals:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDeals();
    }, []);

    if (isLoading) {
        return (
            <section className="py-16 bg-gradient-to-b from-midnight to-midnight-light">
                <div className="container-luxury">
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-champagne" />
                    </div>
                </div>
            </section>
        );
    }

    if (deals.length === 0) {
        return null;
    }

    return (
        <section className="py-16 bg-gradient-to-b from-midnight via-midnight-light/50 to-midnight relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sapphire/5 rounded-full blur-3xl" />
            </div>

            <div className="container-luxury relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <Flame className="h-6 w-6 text-orange-500 animate-pulse" />
                            <h2 className="text-3xl md:text-4xl font-serif font-bold">
                                Hot <span className="text-gradient">Deals</span>
                            </h2>
                            <Sparkles className="h-5 w-5 text-champagne" />
                        </div>
                        <p className="text-muted-foreground">
                            Exclusive discounts from our top sellers
                        </p>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-destructive/10 border border-destructive/30">
                        <Clock className="h-5 w-5 text-destructive" />
                        <div className="text-center">
                            <div className="text-2xl font-mono font-bold text-destructive">
                                {timeLeft}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Deals refresh daily
                            </div>
                        </div>
                    </div>
                </div>

                {/* Deals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {deals.map((deal) => (
                        <Link
                            key={deal.id}
                            to={`/product/${deal.slug}`}
                            className="group relative rounded-2xl overflow-hidden bg-midnight-light/50 border border-sapphire/20 hover:border-champagne/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-champagne/10"
                        >
                            {/* Discount Badge */}
                            <div className="absolute top-3 left-3 z-10">
                                <Badge className="bg-destructive text-white font-bold px-3 py-1 text-sm">
                                    -{deal.discountPercent}%
                                </Badge>
                            </div>

                            {/* Image */}
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={deal.image}
                                    alt={deal.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-4 space-y-3">
                                <h3 className="font-medium text-cream line-clamp-1 group-hover:text-champagne transition-colors">
                                    {deal.title}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    by {deal.sellerName}
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-champagne">
                                        {formatPrice(deal.discountedPrice, deal.currency)}
                                    </span>
                                    <span className="text-sm text-muted-foreground line-through">
                                        {formatPrice(deal.originalPrice, deal.currency)}
                                    </span>
                                </div>

                                {/* Promo Code */}
                                {deal.promoCode && (
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-champagne/10 border border-champagne/20">
                                        <Tag className="h-4 w-4 text-champagne" />
                                        <span className="font-mono text-sm text-champagne font-medium">
                                            {deal.promoCode}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Button variant="outline" size="lg" asChild className="group">
                        <Link to="/products?filter=deals">
                            View All Deals
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
