import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { isFlashSaleDay } from "@/lib/commission";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
    ShoppingBag,
    Trash2,
    Plus,
    Minus,
    ArrowRight,
    ShoppingCart,
    Loader2,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useCurrencyStore } from "@/store/currencyStore";
import { useAuth } from "@/contexts/AuthContext";
import { formatPrice } from "@/lib/utils";
import api from "@/lib/api";
import { toast } from "sonner";
import { PromoCodeInput } from "@/components/checkout/PromoCodeInput";

const BASE_MARKET_FEE_PERCENT = 6; // Standard 6% fee paid by buyer
const FLASH_SALE_FEE_PERCENT = 2.5; // Reduced 2.5% fee during Flash Sales

const Cart = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { items, removeItem, updateQuantity, clearCart } = useCartStore();
    const { currentCurrency, convert } = useCurrencyStore();
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    // Promo code state
    const [appliedPromo, setAppliedPromo] = useState<{
        code: string;
        discount: number;
        discountType: "percentage" | "fixed";
    } | null>(null);

    // Calculate totals in USD base
    const subtotalUSD = items.reduce(
        (total, item) => {
            const itemPriceUSD = convert(item.price / 100, (item.currency || 'USD') as any, 'USD');
            return total + (itemPriceUSD * 100 * item.quantity);
        },
        0
    );
    
    const subtotal = subtotalUSD; // Normalized to USD cents

    // Calculate discount in USD
    const discount = appliedPromo
        ? appliedPromo.discountType === "percentage"
            ? (subtotal * appliedPromo.discount) / 100
            : convert(appliedPromo.discount, 'USD', 'USD') * 100 // Discounts are usually in USD base
        : 0;

    const totalBeforeFees = subtotal - discount;
    
    // Stripe Processing Fee (2.9% + 30 cents)
    // Formula: (Total + 30) / (0.971) - Total
    const processingFee = totalBeforeFees > 0 
        ? ((totalBeforeFees + 30) / (1 - 0.029)) - totalBeforeFees
        : 0;
    
    // Total including marketplace fees (if any) and processing fees
    const total = totalBeforeFees + processingFee;

    // Helper to format based on globally selected currency
    const formatDisplayPrice = (valInCents: number, fromCurrency: string = 'USD') => {
        const converted = convert(valInCents / 100, (fromCurrency || 'USD') as any, currentCurrency);
        return formatPrice(converted * 100, currentCurrency);
    };

    const handleQuantityChange = (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) {
            removeItem(itemId);
        } else {
            updateQuantity(itemId, newQuantity);
        }
    };

    const handleApplyPromo = async (code: string) => {
        // In production, this would validate against the backend
        try {
            const response = await api.post("/promo/validate", { code });
            const { valid, discount, discountType } = response.data;

            if (valid) {
                setAppliedPromo({ code, discount, discountType });
            }
            return { valid, discount, discountType };
        } catch {
            // Mock validation for demo
            const mockCodes: Record<string, { discount: number; discountType: "percentage" | "fixed" }> = {
                "SAVE10": { discount: 10, discountType: "percentage" },
                "SAVE20": { discount: 20, discountType: "percentage" },
                "FLAT500": { discount: 500, discountType: "fixed" },
            };

            const promo = mockCodes[code.toUpperCase()];
            if (promo) {
                setAppliedPromo({ code: code.toUpperCase(), ...promo });
                return { valid: true, ...promo };
            }
            return { valid: false, discount: 0, discountType: "percentage" };
        }
    };

    const handleRemovePromo = () => {
        setAppliedPromo(null);
    };

    const handleCheckout = async () => {
        if (!user) {
            toast.error("Please login to checkout", {
                description: "You need to be logged in to complete your purchase.",
            });
            navigate("/login");
            return;
        }

        if (items.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        setIsCheckingOut(true);

        try {
            // Format items for the API
            const checkoutItems = items.map((item) => ({
                productId: parseInt(item.id),
                quantity: item.quantity,
            }));

            const response = await api.post("/orders/checkout", {
                items: checkoutItems,
                promoCode: appliedPromo?.code,
            });

            // Redirect to Stripe checkout
            if (response.data.checkoutUrl) {
                window.location.href = response.data.checkoutUrl;
            } else {
                throw new Error("No checkout URL received");
            }
        } catch (error: unknown) {
            const axiosErr = error as { response?: { data?: { message?: string } } };
            toast.error("Checkout failed", {
                description:
                    axiosErr.response?.data?.message || "Please try again later.",
            });
        } finally {
            setIsCheckingOut(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Shopping Cart — Mercato94</title>
                <meta
                    name="description"
                    content="Review your cart and proceed to checkout."
                />
            </Helmet>
            <Layout>
                <section className="pt-28 md:pt-36 pb-24 min-h-screen bg-midnight">
                    <div className="container-luxury px-4">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-6xl font-serif text-cream tracking-tight animate-in slide-in-from-left duration-700">
                                    Your <span className="text-champagne">Collection</span>
                                </h1>
                                <p className="text-sm md:text-base text-cream/40 font-medium tracking-wide uppercase">
                                    {items.length === 0
                                        ? "Inventory is empty"
                                        : `${items.length} exquisite item${items.length > 1 ? "s" : ""} selected`}
                                </p>
                            </div>
                            {items.length > 0 && (
                                <button
                                    onClick={() => {
                                        clearCart();
                                        toast.success("Collection cleared");
                                    }}
                                    className="text-[10px] font-black tracking-widest uppercase text-cream/20 hover:text-destructive transition-colors text-left md:text-right"
                                >
                                    Empty Container
                                </button>
                            )}
                        </div>

                        {items.length === 0 ? (
                            /* Empty Cart State */
                            <div className="flex flex-col items-center justify-center py-32 text-center animate-in fade-in zoom-in duration-1000">
                                <div className="relative group mb-10">
                                    <div className="absolute inset-0 bg-champagne/20 rounded-full blur-3xl group-hover:bg-champagne/30 transition-all duration-700" />
                                    <div className="relative w-32 h-32 rounded-full border border-white/10 bg-midnight-light/50 flex items-center justify-center backdrop-blur-xl">
                                        <ShoppingCart className="h-12 w-12 text-champagne/60" />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-serif text-cream mb-4">
                                    Your collection awaits
                                </h2>
                                <p className="text-cream/50 mb-12 max-w-sm leading-relaxed">
                                    Begin your journey by discovering our curated selection of high-performance digital assets.
                                </p>
                                <Button variant="luxury" size="lg" className="rounded-full px-10 h-14" asChild>
                                    <Link to="/products">
                                        Exploration
                                        <ArrowRight className="ml-3 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        ) : (
                            /* Cart Items */
                            <div className="grid lg:grid-cols-12 gap-16 items-start">
                                {/* Items List */}
                                <div className="lg:col-span-8 space-y-8">
                                    {items.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="group relative flex flex-col gap-6 p-6 rounded-2xl bg-midnight-light/20 border border-white/5 backdrop-blur-sm hover:bg-midnight-light/40 transition-all duration-500 animate-in slide-in-from-bottom duration-700 fill-mode-both"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="flex gap-6 md:gap-8">
                                                {/* Image */}
                                                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-midnight shrink-0 border border-white/5">
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-white/10">
                                                            <ShoppingBag className="h-10 w-10" />
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Details */}
                                                <div className="flex-1 py-1 space-y-3">
                                                    <div className="flex justify-between items-start gap-4">
                                                        <h3 className="text-lg md:text-xl font-serif text-cream leading-tight hover:text-champagne transition-colors cursor-pointer">
                                                            {item.name}
                                                        </h3>
                                                        <button
                                                            onClick={() => {
                                                                removeItem(item.id);
                                                                toast.success("Item removed");
                                                            }}
                                                            className="p-2 -mr-2 text-white/10 hover:text-destructive transition-colors shrink-0"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                    
                                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                                                        <p className="text-champagne font-mono tracking-tighter text-lg">
                                                            {formatDisplayPrice(item.price, item.currency)}
                                                        </p>
                                                        <div className="h-4 w-px bg-white/10 hidden md:block" />
                                                        <p className="text-cream/30 uppercase tracking-widest text-[10px] font-black">
                                                            High Performance Asset
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Footer Controls */}
                                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                                <div className="flex items-center p-1 rounded-full bg-midnight border border-white/5">
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                        className="h-8 w-8 rounded-full flex items-center justify-center text-cream/40 hover:text-cream hover:bg-white/5 transition-all"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="w-10 text-center text-sm font-mono text-cream/80">
                                                        {item.quantity.toString().padStart(2, '0')}
                                                    </span>
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                        className="h-8 w-8 rounded-full flex items-center justify-center text-cream/40 hover:text-cream hover:bg-white/5 transition-all"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>

                                                <div className="text-right">
                                                    <p className="text-xs text-cream/20 uppercase tracking-widest font-black mb-1">Row Total</p>
                                                    <p className="font-serif text-xl text-cream">
                                                        {formatDisplayPrice(item.price * item.quantity, item.currency)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Order Summary */}
                                <div className="lg:col-span-4 lg:sticky lg:top-32">
                                    <div className="p-8 rounded-3xl bg-midnight-light/30 border border-white/5 backdrop-blur-xl space-y-10">
                                        <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                            <h2 className="text-2xl font-serif text-cream">Summary</h2>
                                            <div className="h-2 w-2 rounded-full bg-champagne animate-pulse-slow shadow-[0_0_10px_rgba(196,163,115,0.5)]" />
                                        </div>

                                        {/* Summary Lines */}
                                        <div className="space-y-5">
                                            <div className="flex justify-between items-center group transition-all duration-300 hover:translate-x-1">
                                                <span className="text-xs text-cream/40 uppercase tracking-widest font-bold">Subtotal</span>
                                                <span className="text-cream font-mono text-base">{formatDisplayPrice(subtotal)}</span>
                                            </div>
                                            
                                            {appliedPromo && (
                                                <div className="flex justify-between items-center text-green-400 group transition-all duration-300 hover:translate-x-1">
                                                    <span className="text-xs uppercase tracking-widest font-bold">Privilege ({appliedPromo.code})</span>
                                                    <span className="font-mono">-{formatDisplayPrice(discount)}</span>
                                                </div>
                                            )}

                                            <div className="flex justify-between items-center group transition-all duration-300 hover:translate-x-1">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-cream/40 uppercase tracking-widest font-bold">Processing Fee</span>
                                                    <span className="text-[8px] text-cream/20 uppercase tracking-tighter">Stripe (2.9% + 30¢)</span>
                                                </div>
                                                <span className="text-cream font-mono text-base">{formatDisplayPrice(processingFee)}</span>
                                            </div>
                                            
                                        </div>


                                        {/* Promo Code Input */}
                                        <div className="pt-2">
                                            <PromoCodeInput
                                                onApply={handleApplyPromo}
                                                onRemove={handleRemovePromo}
                                                appliedCode={appliedPromo?.code}
                                                appliedDiscount={appliedPromo?.discount}
                                                discountType={appliedPromo?.discountType}
                                            />
                                        </div>

                                        <div className="pt-8 border-t border-white/10">
                                            <div className="flex justify-between items-end mb-8">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] text-cream/20 uppercase tracking-widest font-black block">Total Investment</span>
                                                    <span className="text-[8px] text-champagne/40 uppercase tracking-[0.2em]">Live Conversion</span>
                                                </div>
                                                <span className="text-4xl md:text-5xl font-serif text-champagne leading-none drop-shadow-[0_0_15px_rgba(196,163,115,0.2)]">
                                                    {formatDisplayPrice(total)}
                                                </span>
                                            </div>

                                            <p className="text-[9px] text-cream/20 uppercase tracking-[0.2em] font-medium leading-relaxed mb-6 text-center bg-white/[0.02] py-2 rounded-lg border border-white/5">
                                                Prices are approximate. Final amount will be calculated by Stripe in your bank's currency at checkout.
                                            </p>

                                            <Button
                                                variant="luxury"
                                                size="lg"
                                                className="w-full h-16 rounded-full text-sm font-black uppercase tracking-widest animate-pulse-slow shadow-2xl shadow-champagne/10"
                                                onClick={handleCheckout}
                                                disabled={isCheckingOut || items.length === 0}
                                            >
                                                {isCheckingOut ? (
                                                    <>
                                                        <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                                                        Authorizing...
                                                    </>
                                                ) : (
                                                    <>
                                                        Initiate Transaction
                                                        <ArrowRight className="h-5 w-5 ml-3" />
                                                    </>
                                                )}
                                            </Button>

                                            <div className="mt-8 space-y-4">
                                                {!user ? (
                                                    <p className="text-[10px] text-center text-cream/30 uppercase tracking-[0.2em] font-bold">
                                                        Authentication required to{" "}
                                                        <Link to="/login" className="text-champagne hover:text-cream transition-colors">
                                                            Finalize
                                                        </Link>
                                                    </p>
                                                ) : (
                                                    <p className="text-[10px] text-center text-cream/20 uppercase tracking-[0.2em] font-medium leading-relaxed">
                                                        Secure payment processed via Stripe encrypted infrastructure
                                                    </p>
                                                )}
                                                
                                                <Button
                                                    variant="ghost"
                                                    className="w-full text-cream/20 hover:text-cream hover:bg-transparent transition-all h-auto py-2 text-[10px] uppercase font-black tracking-widest"
                                                    asChild
                                                >
                                                    <Link to="/products">Return to Marketplace</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Cart;
