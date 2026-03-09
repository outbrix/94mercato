import { cn } from "@/lib/utils";
import { Star, Zap } from "lucide-react";

export type SellerTier = "starter" | "creator_pro" | "creator_partner";

interface TierBadgeProps {
  tier: SellerTier;
  size?: "sm" | "md";
  className?: string;
}

const tierConfig = {
  starter: {
    label: "Starter",
    className: "bg-muted/60 text-muted-foreground border-muted-foreground/20",
    icon: null,
  },
  creator_pro: {
    label: "Creator Pro",
    className:
      "bg-sapphire/15 text-sapphire border-sapphire/30 shadow-[0_0_12px_hsl(var(--sapphire)/0.2)]",
    icon: Zap,
  },
  creator_partner: {
    label: "Partner Creator",
    className:
      "bg-champagne/15 text-champagne border-champagne/30 shadow-[0_0_12px_hsl(var(--champagne)/0.25)]",
    icon: Star,
  },
};

export function TierBadge({ tier, size = "md", className }: TierBadgeProps) {
  const config = tierConfig[tier] ?? tierConfig.starter;
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
