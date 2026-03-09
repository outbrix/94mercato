import { Link } from "react-router-dom";
import {
  Wand2,
  Search,
  Image,
  MessageSquare,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI Descriptions",
    blurb: "Auto-generate polished product copy and SEO tags.",
    for: "Sellers",
  },
  {
    icon: Search,
    title: "Smart Search",
    blurb: 'Find products with natural language like "minimal SaaS template".',
    for: "Buyers",
  },
  {
    icon: Image,
    title: "Mockup Generator",
    blurb: "One-click professional device mockups for your listings.",
    for: "Sellers",
  },
  {
    icon: Zap,
    title: "Pricing Intelligence",
    blurb: "AI-suggested pricing based on comparable products.",
    for: "Sellers",
  },
  {
    icon: MessageSquare,
    title: "Ask 94mercato",
    blurb: "Get instant answers about products, licenses, and more.",
    for: "Everyone",
  },
  {
    icon: Sparkles,
    title: "Auto Tags",
    blurb: "Categories and tags generated from your product content.",
    for: "Sellers",
  },
];

export function AIFeatures() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-midnight" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-sapphire/10 rounded-full blur-[160px]" />

      <div className="container-luxury relative z-10">
        {/* Inline header — small, not blaring */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-champagne" />
              <span className="text-xs tracking-widest uppercase text-champagne">
                AI-powered
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-cream">
              Built-in intelligence
            </h2>
          </div>
          <p className="text-cream/40 text-sm md:text-base max-w-md">
            Everything runs in the background — no setup needed. AI features
            help sellers list faster and buyers find better.
          </p>
        </div>

        {/* 2-col flowing list, not a 3×2 card grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group flex items-start gap-4 py-4 border-b border-cream/5 last:border-b-0 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-sapphire/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-sapphire/20 transition-colors">
                <f.icon className="h-5 w-5 text-champagne" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-medium text-cream">{f.title}</h3>
                  <span className="text-xs text-cream/25 font-normal">
                    {f.for}
                  </span>
                </div>
                <p className="text-sm text-cream/40 leading-relaxed">{f.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Simple text link CTA — not a big button block */}
        <div className="mt-12 pt-8 border-t border-cream/5 flex items-center justify-between">
          <p className="text-sm text-cream/30">
            All AI features included on every plan.
          </p>
          <Link
            to="/sell"
            className="flex items-center gap-2 text-sm text-champagne hover:text-champagne/80 transition-colors font-medium"
          >
            Start selling <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
