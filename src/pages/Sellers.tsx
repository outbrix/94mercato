import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Loader2, Star, Package } from "lucide-react";
import api from "@/lib/api";

interface Seller {
    id: number;
    display_name: string;
    avatar_url: string | null;
    bio: string | null;
    product_count: number;
    is_verified: boolean;
}

const Sellers = () => {
    const [sellers, setSellers] = useState<Seller[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSellers = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('/sellers/featured');
                setSellers(response.data);
            } catch (err: unknown) {
                console.error('Error fetching sellers:', err);
                // Use fallback data if API fails
                setSellers([]);
                setError(null); // Don't show error, just empty state
            } finally {
                setIsLoading(false);
            }
        };

        fetchSellers();
    }, []);

    return (
        <>
            <Helmet>
                <title>Featured Sellers — 94mercato</title>
                <meta
                    name="description"
                    content="Discover top creators on 94mercato. Browse products from verified sellers and find premium digital products."
                />
            </Helmet>
            <Layout>
                {/* Hero */}
                <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-stone/30 to-background">
                    <div className="container-luxury">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-champagne/10 rounded-full mb-6 animate-fade-up">
                                <Star className="h-4 w-4 text-champagne" />
                                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                                    Top Creators
                                </span>
                            </span>
                            <h1 className="heading-display text-4xl md:text-5xl mb-4 animate-fade-up delay-100">
                                Featured Sellers
                            </h1>
                            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
                                Meet the talented creators behind our premium digital products.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sellers Grid */}
                <section className="section-padding">
                    <div className="container-luxury">
                        {isLoading ? (
                            <div className="flex items-center justify-center py-20">
                                <Loader2 className="h-8 w-8 animate-spin text-champagne" />
                            </div>
                        ) : sellers.length > 0 ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {sellers.map((seller, index) => (
                                    <Link
                                        key={seller.id}
                                        to={`/seller/${seller.display_name}`}
                                        className={`group glass-card-elevated p-6 text-center hover:border-champagne/30 transition-all duration-300 animate-fade-up`}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 overflow-hidden">
                                            {seller.avatar_url ? (
                                                <img
                                                    src={seller.avatar_url}
                                                    alt={seller.display_name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-champagne/10">
                                                    <span className="text-2xl font-serif text-champagne">
                                                        {seller.display_name.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="font-medium text-lg group-hover:text-champagne transition-colors">
                                            {seller.display_name}
                                        </h3>
                                        {seller.is_verified && (
                                            <span className="inline-flex items-center gap-1 text-xs text-champagne mt-1">
                                                <Star className="h-3 w-3 fill-current" />
                                                Verified
                                            </span>
                                        )}
                                        <div className="flex items-center justify-center gap-1 mt-3 text-sm text-muted-foreground">
                                            <Package className="h-4 w-4" />
                                            <span>{seller.product_count || 0} products</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-6">
                                    <Star className="h-10 w-10 text-champagne" />
                                </div>
                                <h2 className="font-serif text-2xl font-medium mb-3">
                                    Featured sellers coming soon
                                </h2>
                                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                                    We're curating a list of our top creators. Check back soon or start selling to become a featured seller!
                                </p>
                                <Link
                                    to="/sell"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-champagne text-midnight font-medium rounded-full hover:bg-champagne/90 transition-colors"
                                >
                                    Become a Seller
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Sellers;
