import { cn } from "@/lib/utils";
import { Star, Zap, Shield } from "lucide-react";

/**
 * SellerTier maps directly to the `seller_type` column in the DB.
 * "Admin" is a special tier derived from the user's role.
 */
export type SellerTier = "Starter" | "Creator" | "Partner" | "Admin";

interface TierBadgeProps {
  tier: SellerTier;
  size?: "sm" | "md";
  className?: string;
}

const tierConfig = {
  Starter: {
    label: "Starter",
    className: "bg-muted/60 text-muted-foreground border-muted-foreground/20",
    icon: null,
  },
  Creator: {
    label: "Creator Pro",
    className:
      "bg-sapphire/15 text-sapphire border-sapphire/30 shadow-[0_0_12px_hsl(var(--sapphire)/0.2)]",
    icon: Zap,
  },
  Partner: {
    label: "Partner",
    className:
      "bg-champagne/15 text-champagne border-champagne/30 shadow-[0_0_12px_hsl(var(--champagne)/0.25)]",
    icon: Star,
  },
  Admin: {
    label: "Admin",
    className:
      "bg-rose-500/15 text-rose-400 border-rose-500/30 shadow-[0_0_12px_rgba(244,63,94,0.2)]",
    icon: Shield,
  },
};

/**
 * Helper: resolves the display tier from seller_type and role.
 * If the user's role is 'admin', always show "Admin" badge.
 * Otherwise use their seller_type (Starter/Creator/Partner).
 */
export function resolveSellerTier(
  sellerType?: string | null,
  role?: string | null
): SellerTier {
  if (role === "admin") return "Admin";
  if (sellerType === "Creator" || sellerType === "Partner") return sellerType;
  return "Starter";
}

export function TierBadge({ tier, size = "md", className }: TierBadgeProps) {
  const config = tierConfig[tier] ?? tierConfig.Starter;
  const IconComponent = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-medium border rounded-full tracking-wide",
        size === "sm"
          ? "text-[10px] px-2 py-0.5"
          : "text-xs px-2.5 py-1",
        config.className,
        className
      )}
    >
      {IconComponent && (
        <IconComponent
          className={cn("fill-current", size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3")}
        />
      )}
      {config.label}
    </span>
  );
}
