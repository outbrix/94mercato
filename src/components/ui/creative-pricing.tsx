import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: number | string;
    description: string;
    features: string[];
    popular?: boolean;
    color: "sapphire" | "gold" | "chrome";
    priceSuffix?: string;
}

function CreativePricing({
    tag = "Tiers",
    title = "Choose Your Tier",
    description,
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-12 text-charcoal">
            {/* Editorial Header - Compact */}
            <header className="mb-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-4 text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">
                    <span className="w-6 h-px bg-current" />
                    {tag}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase leading-none mb-6">
                    {title}
                </h1>
                
                <p className="text-lg md:text-xl font-serif italic leading-relaxed opacity-60 max-w-xl mx-auto">
                    {description}
                </p>
            </header>

            {/* Horizontal Grid (Desktop) / Vertical Stack (Mobile) */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {tiers.map((tier, index) => (
                    <article 
                        key={tier.name} 
                        className={cn(
                            "flex flex-col border border-charcoal/10 rounded-[32px] p-8 md:p-10 animate-fade-up transition-all hover:border-charcoal/30",
                            tier.popular ? "bg-charcoal text-cream border-charcoal shadow-xl" : "bg-white/40"
                        )} 
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="flex-grow">
                            <div className="flex items-center justify-between mb-8">
                                <span className={cn(
                                    "text-[9px] font-bold py-1 px-3 border rounded-full tracking-widest uppercase",
                                    tier.popular ? "border-cream/20" : "border-charcoal/20"
                                )}>
                                    Tier 0{index + 1}
                                </span>
                                {tier.popular && (
                                    <span className="text-[9px] font-bold py-1 px-3 bg-cream text-charcoal rounded-full tracking-widest uppercase">
                                        Popular
                                    </span>
                                )}
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-sans font-black tracking-tighter uppercase mb-4 leading-none">
                                {tier.name}
                            </h2>
                            
                            <p className={cn(
                                "text-sm font-serif leading-relaxed mb-8",
                                tier.popular ? "opacity-80" : "opacity-60"
                            )}>
                                {tier.description}
                            </p>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-4xl md:text-5xl font-sans font-black tracking-tighter">
                                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                                    {tier.priceSuffix}
                                </span>
                            </div>
                            
                            <div className="space-y-4 pt-6 border-t border-current/10">
                                {tier.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 text-[13px] font-serif opacity-70 leading-snug">
                                        <div className={cn(
                                            "w-1 h-1 rounded-full mt-1.5 flex-shrink-0",
                                            tier.popular ? "bg-cream" : "bg-charcoal"
                                        )} />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-current/10">
                            <a 
                                href="/sell" 
                                className={cn(
                                    "flex h-12 w-full text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300 items-center justify-center",
                                    tier.popular ? "bg-cream text-charcoal" : "bg-charcoal text-cream"
                                )}
                            >
                                Get Started
                            </a>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}

export { CreativePricing, type PricingTier };
