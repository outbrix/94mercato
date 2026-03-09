import { cn } from "@/lib/utils";
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";
import type { SellerTier } from "./TierBadge";
import { UpgradeButton } from "./UpgradeButton";
import { Link } from "react-router-dom";

interface TierCardProps {
    tier: SellerTier;
    isCurrentPlan?: boolean;
    onUpgrade?: () => void;
}

const tierData = {
    starter: {
        name: "Starter",
        badge: null,
        price: "Free",
        priceSub: "No monthly fee",
        commission: "9%",
        commissionNote: "per sale",
        access: "Default — all new sellers",
        icon: null,
        color: "border-border",
        headerGrad: "from-muted/30 to-muted/10",
        iconBg: "bg-muted/50",
        iconColor: "text-muted-foreground",
        features: [
            "Unlimited product listings",
            "Analytics dashboard",
            "Secure file hosting",
            "Customer management",
            "Promo codes & discounts",
            "Instant digital delivery",
        ],
    },
    creator_pro: {
        name: "Creator Pro",
        badge: "Best Value",
        price: "$30",
        priceSub: "/ month · or ₹500 · 25 AED",
        commission: "2%",
        commissionNote: "per sale",
        access: "Available to all sellers",
        icon: Zap,
        color: "border-sapphire/50",
        headerGrad: "from-sapphire/20 to-sapphire/5",
        iconBg: "bg-sapphire/15",
        iconColor: "text-sapphire",
        features: [
            "2% commission (save 7% vs Starter)",
            "Priority marketplace visibility",
            "Advanced creator analytics",
            "Creator Pro badge on profile",
            "All Starter features",
            "Early access to new features",
        ],
    },
    creator_partner: {
        name: "Creator Partnership",
        badge: "Invite Only",
        price: "Free",
        priceSub: "By invitation only",
        commission: "2%",
        commissionNote: "per sale",
        access: "Selected creators with audiences",
        icon: Crown,
        color: "border-champagne/50",
        headerGrad: "from-champagne/20 to-gold/5",
        iconBg: "bg-champagne/15",
        iconColor: "text-champagne",
        features: [
            "2% commission rate",
            "Partner Creator badge on profile",
            "Featured placement in marketplace",
            "Dedicated account manager",
            "Co-marketing opportunities",
            "All Creator Pro features",
        ],
    },
};

export function TierCard({ tier, isCurrentPlan = false, onUpgrade }: TierCardProps) {
    const data = tierData[tier];
    const IconComp = data.icon;
    const isHighlighted = tier === "creator_pro";

    return (
        <div
            className={cn(
                "relative flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-500 hover:-translate-y-1",
                data.color,
                isHighlighted
                    ? "shadow-[0_0_40px_hsl(var(--sapphire)/0.2)] hover:shadow-[0_0_60px_hsl(var(--sapphire)/0.3)]"
                    : "hover:shadow-elevated",
                "bg-card/80 backdrop-blur-xl"
            )}
        >
            {/* Badge ribbon */}
            {data.badge && (
                <div
                    className={cn(
                        "absolute top-4 right-4 z-10 text-xs font-semibold px-3 py-1 rounded-full tracking-wide",
                        tier === "creator_pro"
                            ? "bg-sapphire/20 text-sapphire border border-sapphire/30"
                            : "bg-champagne/20 text-champagne border border-champagne/30"
                    )}
                >
                    {tier === "creator_partner" && <Star className="inline h-2.5 w-2.5 mr-1 fill-current" />}
                    {data.badge}
                </div>
            )}

            {/* Header gradient band */}
            <div className={cn("px-6 pt-6 pb-4 bg-gradient-to-br", data.headerGrad)}>
                <div className="flex items-center gap-3 mb-4">
                    {IconComp ? (
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", data.iconBg)}>
                            <IconComp className={cn("h-5 w-5 fill-current", data.iconColor)} />
                        </div>
                    ) : (
                        <div className="w-10 h-10 rounded-xl bg-muted/40 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-muted-foreground/40" />
                        </div>
                    )}
                    <h3 className="font-serif text-xl font-medium">{data.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-1">
                    <span
                        className={cn(
                            "text-4xl font-serif font-bold",
                            tier === "creator_pro" ? "text-sapphire" : tier === "creator_partner" ? "text-champagne" : ""
                        )}
                    >
                        {data.price}
                    </span>
                    {tier === "creator_pro" && <span className="text-muted-foreground text-base ml-1">/mo</span>}
                </div>
                <p className="text-xs text-muted-foreground">{data.priceSub}</p>
            </div>

            {/* Commission highlight */}
            <div className="px-6 py-4 border-y border-border/50">
                <div className="flex items-baseline gap-2">
                    <span
                        className={cn(
                            "text-3xl font-serif font-bold",
                            tier === "starter" ? "text-muted-foreground" : "text-champagne"
                        )}
                    >
                        {data.commission}
                    </span>
                    <span className="text-sm text-muted-foreground">commission {data.commissionNote}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{data.access}</p>
            </div>

            {/* Features */}
            <div className="px-6 py-5 flex-1">
                <ul className="space-y-3">
                    {data.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                            <div
                                className={cn(
                                    "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                    tier === "creator_partner"
                                        ? "bg-champagne/20"
                                        : tier === "creator_pro"
                                            ? "bg-sapphire/20"
                                            : "bg-muted/50"
                                )}
                            >
                                <Check
                                    className={cn(
                                        "h-2.5 w-2.5",
                                        tier === "creator_partner"
                                            ? "text-champagne"
                                            : tier === "creator_pro"
                                                ? "text-sapphire"
                                                : "text-muted-foreground"
                                    )}
                                />
                            </div>
                            <span className="text-muted-foreground leading-snug">{f}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6">
                {isCurrentPlan ? (
                    <div className="w-full text-center py-2.5 rounded-full border border-border text-sm text-muted-foreground font-medium">
                        Current Plan
                    </div>
                ) : tier === "creator_pro" ? (
                    <UpgradeButton onSuccess={onUpgrade} className="w-full" size="default" variant="sapphire" />
                ) : tier === "creator_partner" ? (
                    <div className="w-full text-center py-2.5 rounded-full bg-champagne/10 border border-champagne/30 text-champagne text-sm font-medium">
                        <Star className="inline h-3.5 w-3.5 mr-1 fill-current" />
                        By Invitation Only
                    </div>
                ) : (
                    <div className="w-full text-center py-2.5 rounded-full border border-border text-sm text-muted-foreground font-medium">
                        Get Started Free
                    </div>
                )}
            </div>
        </div>
    );
}
