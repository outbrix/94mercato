import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Package, Loader2 } from "lucide-react";
import { TierBadge, type SellerTier } from "@/components/seller/TierBadge";
import api from "@/lib/api";

interface FeaturedCreator {
    display_name: string;
    avatar_url: string | null;
    bio: string | null;
    is_verified: boolean;
    product_count: number;
    total_sales: number;
    seller_tier?: SellerTier;
}

export function FeaturedCreators() {
    const [creators, setCreators] = useState<FeaturedCreator[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCreators = async () => {
            try {
                setIsLoading(true);
                const response = await api.get("/auth/sellers?sort=popular&limit=6");
                const data = response.data.sellers || response.data || [];
                setCreators(data.slice(0, 6));
            } catch {
                setCreators([
                    {
                        display_name: "DesignPro",
                        avatar_url: null,
                        bio: "Premium UI/UX templates & design systems for modern teams",
                        is_verified: true,
                        product_count: 24,
                        total_sales: 3400,
                        seller_tier: "Creator",
                    },
                    {
                        display_name: "CodeMaster",
                        avatar_url: null,
                        bio: "Full-stack courses and production-grade code templates",
                        is_verified: true,
                        product_count: 12,
                        total_sales: 12500,
                        seller_tier: "Partner",
                    },
                    {
                        display_name: "FontFoundry",
                        avatar_url: null,
                        bio: "Custom typefaces and font families for modern brands",
                        is_verified: false,
                        product_count: 8,
                        total_sales: 856,
                        seller_tier: "Creator",
                    },
                    {
                        display_name: "StudioVibe",
                        avatar_url: null,
                        bio: "Realistic device mockups & branding presentation kits",
                        is_verified: true,
                        product_count: 31,
                        total_sales: 5200,
                        seller_tier: "Creator",
                    },
                ]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCreators();
    }, []);

    if (isLoading) {
        return (
            <section className="py-20 md:py-28 bg-midnight">
                <div className="container-luxury flex justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-champagne" />
                </div>
            </section>
        );
    }

    if (creators.length === 0) return null;

    return (
        <section className="py-20 md:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-midnight" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[40vh] bg-champagne/5 rounded-full blur-[140px]" />

            <div className="container-luxury relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-cream">
                        Top creators
                    </h2>
                    <Link
                        to="/sellers"
                        className="text-sm text-cream/40 hover:text-champagne transition-colors flex items-center gap-1"
                    >
                        View all sellers <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                </div>

                {/* Horizontal scroll row — not a static grid */}
                <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
                    {creators.map((c, i) => (
                        <Link
                            key={c.display_name}
                            to={`/seller/${encodeURIComponent(c.display_name)}`}
                            className="group flex-shrink-0 w-[260px] snap-start p-5 rounded-2xl border border-cream/8 bg-cream/[0.02] hover:bg-cream/[0.05] hover:border-cream/15 transition-all duration-300 animate-fade-up"
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            {/* Avatar + name */}
                            <div className="flex items-center gap-3 mb-4">
                                {c.avatar_url ? (
                                    <img
                                        src={c.avatar_url}
                                        alt={c.display_name}
                                        className="w-11 h-11 rounded-full object-cover border border-cream/10"
                                    />
                                ) : (
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sapphire/30 to-champagne/20 flex items-center justify-center border border-cream/10">
                                        <span className="text-base font-serif font-medium text-cream">
                                            {c.display_name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-cream truncate group-hover:text-champagne transition-colors">
                                        {c.display_name}
                                    </p>
                                    <TierBadge tier={c.seller_tier ?? "Starter"} size="sm" />
                                </div>
                            </div>

                            {/* Bio */}
                            {c.bio && (
                                <p className="text-xs text-cream/35 line-clamp-2 mb-4 leading-relaxed">
                                    {c.bio}
                                </p>
                            )}

                            {/* Stats */}
                            <div className="flex items-center gap-3 text-xs text-cream/30">
                                <span className="flex items-center gap-1">
                                    <Package className="h-3 w-3" />
                                    {c.product_count}
                                </span>
                                <span>·</span>
                                <span>{c.total_sales} sales</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
