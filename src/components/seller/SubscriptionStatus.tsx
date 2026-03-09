import { TierBadge, type SellerTier } from "./TierBadge";
import { UpgradeButton } from "./UpgradeButton";
import { Percent, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SubscriptionStatusProps {
    tier: SellerTier;
    subscriptionExpiresAt?: string | null;
    onUpgrade?: () => void;
    className?: string;
}

const tierCommission: Record<SellerTier, number> = {
    starter: 9,
    creator_pro: 2,
    creator_partner: 2,
};

const tierLabel: Record<SellerTier, string> = {
    starter: "Starter",
    creator_pro: "Creator Pro",
    creator_partner: "Creator Partnership",
};

export function SubscriptionStatus({
    tier,
    subscriptionExpiresAt,
    onUpgrade,
    className,
}: SubscriptionStatusProps) {
    const commission = tierCommission[tier] ?? 9;
    const isUpgradeable = tier === "starter";

    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

    return (
        <div className={cn("glass-card-elevated p-6", className)}>
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="font-serif text-lg font-medium">Your Plan</h2>
                <TierBadge tier={tier} />
            </div>

            {/* Commission */}
            <div
                className={cn(
                    "rounded-xl p-4 mb-4 border flex items-center gap-4",
                    tier === "starter"
                        ? "bg-muted/30 border-border/50"
                        : "bg-sapphire/5 border-sapphire/20"
                )}
            >
                <div
                    className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        tier === "starter" ? "bg-muted/50" : "bg-sapphire/15"
                    )}
                >
                    <Percent
                        className={cn(
                            "h-5 w-5",
                            tier === "starter" ? "text-muted-foreground" : "text-sapphire"
                        )}
                    />
                </div>
                <div>
                    <p className="text-2xl font-serif font-bold">{commission}%</p>
                    <p className="text-xs text-muted-foreground">commission per sale</p>
                </div>
            </div>

            {/* Expiry (only for Creator Pro) */}
            {tier === "creator_pro" && subscriptionExpiresAt && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>
                        Renews on{" "}
                        <span className="text-foreground font-medium">
                            {formatDate(subscriptionExpiresAt)}
                        </span>
                    </span>
                </div>
            )}

            {/* Upgrade CTA */}
            {isUpgradeable && (
                <div className="mt-2 space-y-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Upgrade to <strong className="text-foreground">Creator Pro</strong> and reduce your
                        commission from 9% → <strong className="text-sapphire">2%</strong>.
                    </p>
                    <UpgradeButton
                        onSuccess={onUpgrade}
                        size="sm"
                        className="w-full text-sm"
                        variant="sapphire"
                    />
                    <Link
                        to="/pricing"
                        className="flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-champagne transition-colors"
                    >
                        Compare all plans <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>
            )}
        </div>
    );
}
