import { useState, useEffect } from "react";
import { Star, ArrowRight } from "lucide-react";
import { TierBadge, type SellerTier } from "@/components/seller/TierBadge";
import api from "@/lib/api";

const gradients = [
  "from-champagne/50 to-gold/20",
  "from-sapphire/50 to-sapphire/10",
  "from-sapphire/30 to-champagne/15"
];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.get("/testimonials");
        const mapped = response.data.map((t: any, i: number) => ({
          ...t,
          gradient: gradients[i % gradients.length],
          highlight: t.is_verified ? "Verified Customer" : "Satisfied Buyer"
        }));
        setTestimonials(mapped);
      } catch (e) {
        console.error("Failed to fetch testimonials", e);
      }
    };
    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-midnight" />

      <div className="container-luxury relative z-10">
        {/* Asymmetric layout: text left + cards right */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left sticky text */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs tracking-widest uppercase text-champagne mb-4">
              Don't take our word for it
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-cream leading-tight mb-5">
              Creators love selling on 94mercato
            </h2>
            <p className="text-cream/50 text-base leading-relaxed mb-6">
              From solo makers to design studios, thousands of creators choose
              94mercato because they keep more, sell more, and stress less.
            </p>
            <a
              href="/sell"
              className="inline-flex items-center gap-2 text-sm text-champagne hover:text-champagne/80 transition-colors font-medium"
            >
              Start selling today <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right — stacked cards, NOT a perfect grid */}
          <div className="lg:col-span-3 space-y-5">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="relative p-6 md:p-8 rounded-2xl border border-cream/8 bg-cream/[0.02] backdrop-blur-sm animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Highlight stat */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-champagne/10 border border-champagne/15 mb-5">
                  <span className="text-xs font-semibold text-champagne">{t.highlight}</span>
                </div>

                {/* Quote */}
                <p className="text-cream/70 text-base md:text-lg leading-relaxed mb-6">
                  "{t.quote}"
                </p>

                {/* Author row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center`}
                    >
                      <span className="text-sm font-semibold text-cream">{t.initial}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-cream">{t.name}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star key={idx} className="h-3 w-3 text-champagne fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <TierBadge tier={t.tier} size="sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}