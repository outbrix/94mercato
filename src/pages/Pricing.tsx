import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Crown, Shield } from "lucide-react";
import { PricingSection } from "@/components/seller/PricingSection";
import { useState } from "react";

const comparisonFeatures = [
    { feature: "Commission Rate", starter: "9%", pro: "2%", partner: "2%" },
    { feature: "Monthly Fee", starter: "Free", pro: "$30/mo", partner: "Free" },
    { feature: "Product Listings", starter: "Unlimited", pro: "Unlimited", partner: "Unlimited" },
    { feature: "Analytics Dashboard", starter: "Basic", pro: "Advanced", partner: "Advanced" },
    { feature: "Marketplace Visibility", starter: "Standard", pro: "Priority", partner: "Featured" },
    { feature: "Tier Badge", starter: "Starter", pro: "Creator Pro", partner: "Partner Creator" },
    { feature: "Dedicated Manager", starter: "—", pro: "—", partner: "✓" },
    { feature: "Co-marketing", starter: "—", pro: "—", partner: "✓" },
];

const Pricing = () => {
    const [calcTier, setCalcTier] = useState<"starter" | "pro">("starter");
    const productPrice = 49;
    const commission = calcTier === "starter" ? 9 : 2;
    const commissionAmount = (productPrice * commission) / 100;
    const processingFee = productPrice * 0.029 + 0.3;
    const youReceive = productPrice - commissionAmount - processingFee;

    return (
        <>
            <Helmet>
                <title>Pricing & Seller Tiers — 94mercato</title>
                <meta
                    name="description"
                    content="Choose the right seller tier on 94mercato. From free Starter to Creator Pro at $30/month — reduce your commission from 9% to 2% and grow faster."
                />
            </Helmet>
            <Layout>
                {/* Hero */}
                <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-midnight via-midnight-light/50 to-background relative overflow-hidden">
                    <div className="absolute top-1/3 left-1/4 w-[50vw] h-[40vh] bg-sapphire/15 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[40vw] h-[30vh] bg-champagne/10 rounded-full blur-[100px]" />
                    <div className="container-luxury relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sapphire/20 border border-sapphire/30 rounded-full mb-6 animate-fade-up backdrop-blur-sm">
                                <Zap className="w-4 h-4 text-champagne fill-current" />
                                <span className="text-xs tracking-widest uppercase text-champagne/90">
                                    Seller Tiers
                                </span>
                            </span>
                            <h1 className="heading-display text-3xl md:text-5xl text-cream mb-4 animate-fade-up delay-100">
                                Choose Your{" "}
                                <span className="gradient-text">Growth Plan</span>
                            </h1>
                            <p className="text-lg text-cream/60 max-w-xl mx-auto animate-fade-up delay-200">
                                Start free as a Starter seller. Upgrade to Creator Pro to cut your commission
                                to 2% and unlock priority visibility.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3-Tier Cards */}
                <section className="section-padding">
                    <div className="container-luxury">
                        <PricingSection />
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="section-padding bg-stone/30">
                    <div className="container-luxury">
                        <h2 className="font-serif text-2xl md:text-3xl font-medium text-center mb-10">
                            Compare Plans
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full max-w-4xl mx-auto">
                                <thead>
                                    <tr>
                                        <th className="text-left py-3 pl-4 text-sm text-muted-foreground font-normal w-1/3">
                                            Feature
                                        </th>
                                        <th className="text-center py-3 text-sm font-medium w-1/5">
                                            <span className="px-3 py-1 rounded-full bg-muted/50 text-muted-foreground text-xs">
                                                Starter
                                            </span>
                                        </th>
                                        <th className="text-center py-3 text-sm font-medium w-1/5">
                                            <span className="px-3 py-1 rounded-full bg-sapphire/15 border border-sapphire/30 text-sapphire text-xs">
                                                <Zap className="inline h-3 w-3 mr-1 fill-current" />
                                                Creator Pro
                                            </span>
                                        </th>
                                        <th className="text-center py-3 text-sm font-medium w-1/5">
                                            <span className="px-3 py-1 rounded-full bg-champagne/15 border border-champagne/30 text-champagne text-xs">
                                                <Crown className="inline h-3 w-3 mr-1 fill-current" />
                                                Partner
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {comparisonFeatures.map((row) => (
                                        <tr
                                            key={row.feature}
                                            className="hover:bg-secondary/20 transition-colors"
                                        >
                                            <td className="py-3 pl-4 text-sm text-muted-foreground">
                                                {row.feature}
                                            </td>
                                            <td className="py-3 text-center text-sm">{row.starter}</td>
                                            <td className="py-3 text-center text-sm text-sapphire font-medium">
                                                {row.pro}
                                            </td>
                                            <td className="py-3 text-center text-sm text-champagne font-medium">
                                                {row.partner}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Earnings Calculator */}
                <section className="section-padding">
                    <div className="container-luxury">
                        <div className="max-w-xl mx-auto">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-center mb-3">
                                Earnings Calculator
                            </h2>
                            <p className="text-muted-foreground text-center text-sm mb-8">
                                See how your tier affects your earnings on a $49 product
                            </p>

                            {/* Toggle */}
                            <div className="flex items-center rounded-xl bg-secondary/50 p-1 mb-6">
                                <button
                                    onClick={() => setCalcTier("starter")}
                                    className={`flex-1 text-sm py-2 rounded-lg font-medium transition-all ${calcTier === "starter"
                                            ? "bg-card shadow-sm text-foreground"
                                            : "text-muted-foreground"
                                        }`}
                                >
                                    Starter (9%)
                                </button>
                                <button
                                    onClick={() => setCalcTier("pro")}
                                    className={`flex-1 text-sm py-2 rounded-lg font-medium transition-all ${calcTier === "pro"
                                            ? "bg-sapphire text-white shadow-sm"
                                            : "text-muted-foreground"
                                        }`}
                                >
                                    Creator Pro (2%)
                                </button>
                            </div>

                            <div className="glass-card-elevated p-8">
                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Product Price</span>
                                        <span className="font-medium">${productPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            Platform Commission ({commission}%)
                                        </span>
                                        <span className="text-red-400">-${commissionAmount.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            Payment Processing (~3%)
                                        </span>
                                        <span className="text-red-400">-${processingFee.toFixed(2)}</span>
                                    </div>
                                    <hr className="border-border" />
                                    <div className="flex justify-between text-lg">
                                        <span className="font-medium">You Receive</span>
                                        <span
                                            className={`font-bold ${calcTier === "pro" ? "text-sapphire" : "text-champagne"
                                                }`}
                                        >
                                            ${youReceive.toFixed(2)}
                                        </span>
                                    </div>
                                    {calcTier === "pro" && (
                                        <p className="text-xs text-green-500 text-center font-medium">
                                            🎉 You save ${((productPrice * 7) / 100).toFixed(2)} per sale vs Starter
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Everything Included */}
                <section className="section-padding bg-stone/30">
                    <div className="container-luxury">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-center mb-2">
                                Everything Included — All Plans
                            </h2>
                            <p className="text-center text-muted-foreground text-sm mb-10">
                                Core features are available on every tier, no matter what.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Unlimited product listings",
                                    "Analytics dashboard",
                                    "Secure file hosting",
                                    "Customer management",
                                    "Promo codes & discounts",
                                    "Instant digital delivery",
                                    "24/7 customer support",
                                    "Weekly payouts via Stripe",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="h-4 w-4 text-green-500" />
                                        </div>
                                        <span className="text-muted-foreground text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding">
                    <div className="container-luxury text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                            Ready to start selling?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            Join our growing community of creators on 94mercato.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/sell"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-champagne text-midnight font-medium rounded-full hover:bg-champagne/90 transition-colors"
                            >
                                Start Selling Free
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-full text-sm hover:bg-secondary/50 transition-colors"
                            >
                                Explore Marketplace
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Pricing;
