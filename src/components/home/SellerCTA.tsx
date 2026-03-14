import { Link } from "react-router-dom";
import { ArrowRight, Zap, Crown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SellerCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-light to-midnight" />
      <div className="absolute top-1/3 left-0 w-[60vw] h-[50vh] bg-sapphire/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-champagne/8 rounded-full blur-[120px]" />

      <div className="container-luxury relative z-10">
        {/* Full‑width text‑heavy CTA — not a 2-col layout */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-cream leading-tight mb-6">
            You make amazing things.
            <br />
            <span className="bg-gradient-to-r from-champagne to-gold bg-clip-text text-transparent">
              We help you sell them.
            </span>
          </h2>
          <p className="text-cream/50 text-lg max-w-xl mx-auto mb-8">
            Set up shop in minutes. Upload your product, set your price, and share
            the link. 94mercato handles payments, delivery, and everything in between.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="champagne" size="xl" asChild className="px-8 text-base">
              <Link to="/sell">
                Start selling free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Link
              to="/pricing"
              className="text-sm text-cream/50 hover:text-champagne transition-colors underline underline-offset-4"
            >
              Compare seller plans
            </Link>
          </div>
        </div>

        {/* Tier teaser — horizontal row, not stacked cards */}
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-cream/30 text-center uppercase tracking-widest mb-4">
            Choose your plan
          </p>
          <div className="space-y-2">
            {[
              {
                name: "Starter",
                fee: "6%",
                price: "Free forever",
                color: "text-cream/60",
                border: "border-cream/8",
                bg: "bg-cream/[0.02]",
              },
              {
                name: "Creator Pro",
                fee: "3%",
                price: "$15/mo",
                color: "text-sapphire",
                border: "border-sapphire/20",
                bg: "bg-sapphire/5",
                icon: Zap,
                badge: "Most popular",
              },
              {
                name: "Partner",
                fee: "2%",
                price: "Invite only",
                color: "text-champagne",
                border: "border-champagne/20",
                bg: "bg-champagne/5",
                icon: Crown,
              },
            ].map((tier) => {
              const Icon = tier.icon;
              return (
                <Link
                  key={tier.name}
                  to="/pricing"
                  className={`flex items-center justify-between p-4 rounded-xl border ${tier.border} ${tier.bg} hover:bg-cream/[0.06] transition-all duration-200 group`}
                >
                  <div className="flex items-center gap-3">
                    {Icon ? (
                      <Icon className={`h-4 w-4 fill-current ${tier.color}`} />
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-cream/20" />
                    )}
                    <span className={`text-sm font-medium ${tier.color}`}>
                      {tier.name}
                    </span>
                    {tier.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-sapphire/15 text-sapphire border border-sapphire/20">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <span className={`text-sm font-bold ${tier.color}`}>{tier.fee}</span>
                      <span className="text-xs text-cream/30 ml-1">fee</span>
                    </div>
                    <span className="text-xs text-cream/40 w-20 text-right">
                      {tier.price}
                    </span>
                    <ChevronRight className="h-4 w-4 text-cream/20 group-hover:text-cream/40 transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
