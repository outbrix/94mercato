import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlistStore } from "@/store/wishlistStore";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { toast } from "sonner";

const Wishlist = () => {
    const { items, clearWishlist } = useWishlistStore();

    return (
        <>
            <Helmet>
                <title>Wishlist — Mercato94</title>
                <meta name="description" content="View and manage your saved products." />
            </Helmet>
            <Layout>
                <section className="pt-28 md:pt-36 pb-24 min-h-screen bg-midnight">
                    <div className="container-luxury px-4">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
                            <div className="space-y-3">
                                <h1 className="text-4xl md:text-6xl font-serif text-cream animate-in slide-in-from-left duration-700 uppercase tracking-widest">
                                    WISHLIST
                                </h1>
                                <p className="text-[10px] md:text-sm text-cream/40 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase animate-in slide-in-from-left duration-1000">
                                    {items.length === 0
                                        ? "Your wishlist is empty"
                                        : `${items.length} item${items.length > 1 ? "s" : ""} saved`}
                                </p>
                            </div>
                            {items.length > 0 && (
                                <button
                                    onClick={() => {
                                        clearWishlist();
                                        toast.success("Wishlist cleared");
                                    }}
                                    className="text-[10px] font-black tracking-widest uppercase text-cream/20 hover:text-destructive transition-colors text-left md:text-right"
                                >
                                    Empty Wishlist
                                </button>
                            )}
                        </div>

                        {/* Wishlist Items */}
                        {items.length > 0 ? (
                            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                                {items.map((item, index) => (
                                    <div 
                                        key={item.id}
                                        className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <ProductCard 
                                            product={{
                                                id: item.id,
                                                title: item.name,
                                                slug: item.slug,
                                                description: "", // Hidden in card anyway
                                                price: item.price,
                                                currency: "USD", // Wishlist items should ideally store currency
                                                seller: { name: "94M Verified Seller", avatar: "" },
                                                image: item.image,
                                                category: "Curated Selection",
                                                rating: 4.8,
                                                sales: 0
                                            }} 
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-32 text-center animate-in fade-in zoom-in duration-1000">
                                <div className="relative group mb-10">
                                    <div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-700" />
                                    <div className="relative w-32 h-32 rounded-full border border-white/10 bg-midnight-light/50 flex items-center justify-center backdrop-blur-xl">
                                        <Heart className="h-12 w-12 text-red-500/40" />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-serif text-cream mb-4">
                                    Your wishlist is empty
                                </h2>
                                <p className="text-cream/50 mb-12 max-w-sm leading-relaxed">
                                    Discover exceptional digital products and save them here to purchase later.
                                </p>
                                <Button variant="luxury" size="lg" className="rounded-full px-10 h-14" asChild>
                                    <Link to="/products">
                                        Browse Products
                                        <ArrowRight className="ml-3 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Wishlist;
