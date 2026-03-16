import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Crown, Shield, Pencil } from "lucide-react";
import { CreativePricing } from "@/components/ui/creative-pricing";
import { useState } from "react";
import { getCommissionRate } from "@/lib/commission";
import { cn } from "@/lib/utils";

const comparisonFeatures = [
    { feature: "Commission Rate", starter: "6%", pro: "3%", partner: "2%", note: "Paid by Seller" },
    { feature: "Monthly Fee", starter: "Free", pro: "$15/mo", partner: "Free" },
    { feature: "Product Listings", starter: "Unlimited", pro: "Unlimited", partner: "Unlimited" },
    { feature: "Verification Badge", starter: "—", pro: "✓", partner: "✓" },
    { feature: "Homepage Spotting", starter: "—", pro: "✓", partner: "✓" },
    { feature: "Newsletter Spotlight", starter: "—", pro: "—", partner: "✓" },
    { feature: "Partner Manager", starter: "—", pro: "—", partner: "✓" },
];

const Pricing = () => {
    const [calcTier, setCalcTier] = useState<"starter" | "pro">("starter");
    const productPrice = 100;
    const commission = getCommissionRate(calcTier === "starter" ? "Starter" : "Creator");
    // Marketplace commission is paid by the seller
    const commissionAmount = productPrice * (commission / 100);
    // Stripe processing is covered by the buyer
    const processingFee = productPrice * 0.029 + 0.3; 
    const youReceive = productPrice - commissionAmount;

    return (
        <>
            <Helmet>
                <title>Pricing & Seller Tiers — 94mercato</title>
                <meta
                    name="description"
                    content="Choose the right seller tier on 94mercato. From free Starter (6%) to Creator Pro (3%) at $15/month — reduce your fees and grow faster."
                />
            </Helmet>
            <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-charcoal selection:text-cream">
                <Layout>
                    <main className="pt-16 pb-32">
                        {/* Tier Article */}
                        <div className="max-w-6xl mx-auto">
                            <CreativePricing
                                tag="Project Economics"
                                title="Choose Your Tier"
                                description="Simple, high-margin economics for the modern creator. No hidden costs. Just growth."
                                tiers={[
                                    {
                                        name: "Starter",
                                        icon: <Pencil className="w-5 h-5" />,
                                        price: "Free",
                                        priceSuffix: "Forever",
                                        description: "Entry-level tier for new asset developers.",
                                        color: "chrome",
                                        features: [
                                            "6.0% platform commission",
                                            "Unlimited listings",
                                            "Auto asset delivery",
                                            "Standard marketplace profile",
                                            "Community access",
                                        ],
                                    },
                                    {
                                        name: "Creator Pro",
                                        icon: <Zap className="w-5 h-5" />,
                                        price: 15,
                                        priceSuffix: "Per Month",
                                        description: "The professional standard for high-volume creators.",
                                        color: "sapphire",
                                        popular: true,
                                        features: [
                                            "3.0% commission",
                                            "Verified Pro Badge",
                                            "Homepage 'Featured' Slot",
                                            "Newsletter promotion",
                                            "Priority payout priority",
                                        ],
                                    },
                                    {
                                        name: "Partnership",
                                        icon: <Crown className="w-5 h-5" />,
                                        price: "Contact",
                                        priceSuffix: "Invite Only",
                                        description: "Bespoke framework for elite studios and labels.",
                                        color: "gold",
                                        features: [
                                            "2.0% enterprise commission",
                                            "Curated 'Invited' Badge",
                                            "Ranking boost",
                                            "Early feature access",
                                            "Manual payout priority",
                                        ],
                                    },
                                ]}
                            />
                        </div>

                        {/* Minimal Breakdown Section */}
                        <section className="max-w-6xl mx-auto px-6 mt-12">
                            <header className="mb-8 border-t border-charcoal/10 pt-12">
                                <h2 className="text-3xl font-sans font-black tracking-tighter uppercase mb-2">
                                    The Breakdown
                                </h2>
                                <p className="text-base font-serif italic opacity-80">Full comparison of seller capabilities.</p>
                            </header>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-charcoal/20">
                                            <th className="py-4 text-[9px] font-bold tracking-[0.2em] uppercase opacity-40">Attribute</th>
                                            <th className="py-4 text-[9px] font-bold tracking-[0.2em] uppercase">Starter</th>
                                            <th className="py-4 text-[9px] font-bold tracking-[0.2em] uppercase text-sapphire">Pro</th>
                                            <th className="py-4 text-[9px] font-bold tracking-[0.2em] uppercase text-gold">Partner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-serif">
                                        {comparisonFeatures.map((row) => (
                                            <tr key={row.feature} className="border-b border-charcoal/10 group hover:bg-charcoal/[0.04]">
                                                <td className="py-5 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap pr-8 text-xs">{row.feature}</td>
                                                <td className="py-5 italic text-xs opacity-90">{row.starter}</td>
                                                <td className="py-5 italic font-bold text-sapphire text-xs">{row.pro}</td>
                                                <td className="py-5 italic font-bold text-gold text-xs">{row.partner}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Simple Calculator */}
                        <section className="max-w-6xl mx-auto px-6 mt-20">
                            <div className="bg-charcoal text-cream p-10 md:p-16 rounded-[40px] animate-fade-in relative overflow-hidden">
                                <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter uppercase mb-6 leading-none">
                                    Calculate <br />Your Payout
                                </h2>

                                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                    <div className="space-y-8">
                                        <div className="flex flex-wrap gap-4">
                                            <button
                                                onClick={() => setCalcTier("starter")}
                                                className={cn(
                                                    "px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all border border-cream/20",
                                                    calcTier === "starter" ? "bg-cream text-charcoal border-cream" : "hover:border-cream/50"
                                                )}
                                            >
                                                Starter (6%)
                                            </button>
                                            <button
                                                onClick={() => setCalcTier("pro")}
                                                className={cn(
                                                    "px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all border border-cream/20",
                                                    calcTier === "pro" ? "bg-sapphire text-cream border-sapphire" : "hover:border-cream/50"
                                                )}
                                            >
                                                Creator Pro (3%)
                                            </button>
                                        </div>

                                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 leading-relaxed max-w-xs">
                                            * Calculation based on a standard $100 list price. Tier selection adjusts platform commission.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                                        <div className="space-y-4">
                                            <div className="flex justify-between text-sm italic opacity-60 font-serif">
                                                <span>List Price</span>
                                                <span>${productPrice.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm italic opacity-60 font-serif items-center">
                                                <span>Stripe Processing</span>
                                                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest bg-emerald-400/10 px-2 py-0.5 rounded">Paid by Buyer</span>
                                            </div>
                                            <div className="flex justify-between text-sm italic opacity-60 font-serif">
                                                <span>Market Fee ({commission}%)</span>
                                                <span className="text-red-400">-${(productPrice * (commission / 100)).toFixed(2)}</span>
                                            </div>
                                            <div className="pt-6 border-t border-cream/10">
                                                <div className="flex justify-between items-end">
                                                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Net Payout</span>
                                                    <span className="text-5xl font-sans font-black tracking-tighter text-emerald-400">${youReceive.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Simple CTA */}
                        <footer className="max-w-[800px] mx-auto px-6 mt-32 text-center">
                            <h2 className="text-5xl md:text-8xl font-sans font-black tracking-tighter uppercase leading-[0.9] mb-12">
                                Start Your <br />Next Chapter
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/sell" className="h-16 px-12 bg-charcoal text-cream text-[12px] font-bold tracking-[0.3em] uppercase rounded-full flex items-center hover:scale-105 transition-transform">
                                    Open Store
                                </Link>
                                <Link to="/products" className="h-16 px-12 border border-charcoal/20 text-charcoal text-[12px] font-bold tracking-[0.3em] uppercase rounded-full flex items-center hover:bg-charcoal/5 transition-colors">
                                    Browse Assets
                                </Link>
                            </div>
                        </footer>
                    </main>
                </Layout>
            </div>
        </>
    );
};

export default Pricing;
