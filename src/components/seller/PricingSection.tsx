import { TierCard } from "./TierCard";
import type { SellerTier } from "./TierBadge";

interface PricingSectionProps {
    currentTier?: SellerTier;
    onUpgrade?: () => void;
}

const tiers: SellerTier[] = ["starter", "creator_pro", "creator_partner"];

export function PricingSection({ currentTier, onUpgrade }: PricingSectionProps) {
    return (
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {tiers.map((tier) => (
                <TierCard
                    key={tier}
                    tier={tier}
                    isCurrentPlan={currentTier === tier}
                    onUpgrade={onUpgrade}
                />
            ))}
        </div>
    );
}
