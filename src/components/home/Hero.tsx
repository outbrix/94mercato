import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";
import api from "@/lib/api";

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export function Hero() {
  const [animated, setAnimated] = useState(false);
  const [stats, setStats] = useState({ TOTAL_CREATORS: 0, TOTAL_PRODUCTS: 0, LOWEST_FEE: 2.0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);

    const fetchStats = async () => {
      try {
        const response = await api.get('/stats/global');
        setStats(response.data);
      } catch (e) {
        console.error("Failed to fetch global stats", e);
      }
    };
    fetchStats();

    return () => observer.disconnect();
  }, []);

  const creators = useCountUp(stats.TOTAL_CREATORS, 1800, animated);
  const products = useCountUp(stats.TOTAL_PRODUCTS, 1800, animated);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-midnight"
    >
      {/* ─── Giant ambient gradients ─── */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vh] bg-sapphire/30 rounded-full blur-[180px] animate-glow-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vh] bg-champagne/15 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vh] bg-gold/8 rounded-full blur-[120px]" />
      </div>

      {/* ─── Grain overlay ─── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-luxury relative z-10 py-20">
        <div className="max-w-4xl">
          {/* ─── Eyebrow with live indicator ─── */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream/5 border border-cream/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-cream/70 font-medium">
                {creators.toLocaleString()}+ creators selling right now
              </span>
            </div>
          </div>

          {/* ─── Main headline ─── */}
          <h1 className="animate-fade-up delay-100">
            <span className="block font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-tight text-cream">
              Sell what you know.
            </span>
            <span className="block font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-tight mt-2">
              <span className="bg-gradient-to-r from-champagne via-gold to-champagne bg-clip-text text-transparent">
                Keep what you earn.
              </span>
            </span>
          </h1>

          {/* ─── Subline ─── */}
          <p className="text-xl md:text-2xl text-cream/50 max-w-2xl mt-8 leading-relaxed font-light animate-fade-up delay-200">
            94mercato is where creators sell templates, courses, fonts, and digital
            products directly to their audience — with{" "}
            <span className="text-champagne font-medium">as low as {stats.LOWEST_FEE}% fees</span>.
          </p>

          {/* ─── CTA row ─── */}
          <div className="flex flex-wrap items-center gap-4 mt-10 animate-fade-up delay-300">
            <Button variant="champagne" size="xl" asChild className="group text-base px-8">
              <Link to="/sell">
                Start selling
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Link
              to="/products"
              className="group flex items-center gap-2 text-cream/60 hover:text-cream transition-colors text-base"
            >
              <div className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover:border-cream/40 transition-colors">
                <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
              </div>
              <span>Explore marketplace</span>
            </Link>
          </div>

          {/* ─── Social proof strip ─── */}
          <div className="flex items-center gap-8 mt-14 pt-8 border-t border-cream/10 animate-fade-up delay-400">
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold text-cream tabular-nums">
                {products.toLocaleString()}+
              </p>
              <p className="text-xs text-cream/40 mt-1 uppercase tracking-wider">
                Products listed
              </p>
            </div>
            <div className="w-px h-12 bg-cream/10" />
            <div>
              <p className="text-3xl md:text-4xl font-serif font-semibold text-champagne">
                {stats.LOWEST_FEE}%
              </p>
              <p className="text-xs text-cream/40 mt-1 uppercase tracking-wider">
                Lowest commission
              </p>
            </div>
            <div className="w-px h-12 bg-cream/10 hidden sm:block" />
            <div className="hidden sm:block">
              <p className="text-3xl md:text-4xl font-serif font-semibold text-cream">
                $0
              </p>
              <p className="text-xs text-cream/40 mt-1 uppercase tracking-wider">
                To get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
