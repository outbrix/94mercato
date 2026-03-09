import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Zap } from "lucide-react";
import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";

// ─── Glitch text hook ────────────────────────────────────────────────────
const GLITCH_CHARS = "アイウエオカキクケコ01█▓░xz∂ΔΩ∞#@!?";
function useGlitchText(original: string, interval = 60, cycles = 14) {
  const [displayed, setDisplayed] = useState(original);
  const solved = useRef(false);

  useEffect(() => {
    if (solved.current) return;
    let iteration = 0;
    const id = setInterval(() => {
      setDisplayed(
        original
          .split("")
          .map((ch, i) => {
            if (i < iteration) return ch;
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      if (iteration >= original.length + cycles) {
        clearInterval(id);
        setDisplayed(original);
        solved.current = true;
      }
      iteration += 0.45;
    }, interval);
    return () => clearInterval(id);
  }, [original, interval, cycles]);

  return displayed;
}

// ─── Marquee strip ────────────────────────────────────────────────────────
const STRIP_ITEMS = [
  "BUILT BY OUTBRIX",
  "VENTURE STUDIO",
  "DIGITAL FRONTIER",
  "CREATOR ECONOMY",
  "MADE WITH INTENT",
  "94MERCATO",
  "BEYOND ORDINARY",
  "OUTBRIX.ORG",
];

function MarqueeStrip() {
  const items = [...STRIP_ITEMS, ...STRIP_ITEMS];
  return (
    <div className="overflow-hidden border-y border-cream/8 py-3 bg-midnight-light/30 select-none">
      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-8 text-xs tracking-[0.25em] uppercase text-cream/25 font-medium"
          >
            {item}
            <span className="text-champagne/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────
const About = () => {
  const heading = useGlitchText("94MERCATO");

  return (
    <>
      <Helmet>
        <title>About — 94mercato | A Venture of Outbrix</title>
        <meta
          name="description"
          content="94mercato is a venture of Outbrix. A curated marketplace where creators sell digital products with dignity."
        />
      </Helmet>

      <Layout>
        {/* ─── HERO: Particle canvas ───────────────────────────── */}
        <section className="relative h-[80vh] min-h-[520px] overflow-hidden bg-midnight flex items-center justify-center">
          {/* Ambient glow */}
          <div className="absolute inset-0">
            <div className="absolute top-[-20%] left-[-5%] w-[60vw] h-[60vh] bg-sapphire/20 rounded-full blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-champagne/10 rounded-full blur-[140px]" />
          </div>

          {/* Particle canvas fills the hero */}
          <div className="absolute inset-0">
            <ParticleTextEffect
              text="OUTBRIX"
              colors={["c9a84c", "e8c97b", "f5e6c0", "c9a84c", "8b6914", "4a3507"]}
              animationForce={70}
              particleDensity={3}
              className="opacity-60"
            />
          </div>

          {/* Foreground text */}
          <div className="relative z-10 text-center px-6 pointer-events-none">
            <p className="text-xs tracking-[0.35em] uppercase text-champagne/60 mb-4 font-medium">
              A venture of
            </p>
            <h1
              className="font-mono text-[clamp(2rem,8vw,5rem)] font-black text-cream leading-none tracking-tighter"
              style={{ textShadow: "0 0 80px rgba(201,168,76,0.3)" }}
            >
              {heading.split("").map((ch, i) => (
                <span
                  key={i}
                  className={ch === ch.toUpperCase() && ch !== " " ? "text-cream" : "text-champagne"}
                >
                  {ch}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-cream/40 text-base md:text-lg font-light max-w-sm mx-auto">
              Not just a marketplace.
              <br />
              An experiment in creator dignity.
            </p>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-cream/20 to-transparent animate-pulse" />
          </div>
        </section>

        {/* ─── MARQUEE ─────────────────────────────────────────── */}
        <MarqueeStrip />

        {/* ─── MANIFESTO ───────────────────────────────────────── */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-midnight" />
          <div className="absolute top-0 right-0 w-1/2 h-full"
            style={{
              background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)"
            }} />

          <div className="container-luxury relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* Left — label column */}
              <div className="lg:col-span-3">
                <div className="sticky top-32">
                  <div className="w-8 h-px bg-champagne mb-4" />
                  <p className="text-xs tracking-[0.25em] uppercase text-champagne/60 leading-loose">
                    The Premise
                  </p>
                </div>
              </div>

              {/* Right — text */}
              <div className="lg:col-span-9">
                <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-cream leading-[1.2] font-light mb-10">
                  The internet promised creators freedom.
                  <br />
                  <span className="text-cream/40">It delivered a 30% cut instead.</span>
                </p>
                <div className="space-y-6 max-w-2xl">
                  <p className="text-cream/55 text-lg leading-relaxed">
                    94mercato is built on a single belief — that the person who made the thing
                    should be the person who profits from it most. Not the platform. Not the
                    middleman. Not the algorithm.
                  </p>
                  <p className="text-cream/35 leading-relaxed">
                    So we built a marketplace where Starter creators pay 9% — already a fraction
                    of what others charge — and committed creators pay 2%. Because loyalty should
                    flow both ways. Because creative work is labor. Because commerce without
                    dignity is just extraction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT WE ARE ─────────────────────────────────────── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-midnight-light/20" />
          <div className="container-luxury relative z-10">
            <div className="grid md:grid-cols-3 gap-px bg-cream/5 rounded-2xl overflow-hidden border border-cream/5">
              {[
                {
                  glyph: "◈",
                  title: "Curated, not crowded",
                  body: "Every product goes through a quality filter. We'd rather have 4,000 great products than 40,000 forgettable ones.",
                  color: "text-champagne",
                },
                {
                  glyph: "⬡",
                  title: "Commission-obsessed",
                  body: "2% is not a typo. We built our entire revenue model around making sure you keep what you earn.",
                  color: "text-sapphire",
                },
                {
                  glyph: "∞",
                  title: "Permanently weird",
                  body: "We don't build for the median creator. We build for the ones who think the median is the floor.",
                  color: "text-cream/60",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 md:p-10 bg-midnight hover:bg-midnight-light/30 transition-colors duration-300"
                >
                  <span className={`text-3xl ${item.color} block mb-6 font-light`}>
                    {item.glyph}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cream/35 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── OUTBRIX VENTURE SECTION ─────────────────────────── */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-midnight" />
          {/* Dramatic gradient panel */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="container-luxury relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Separator line */}
              <div className="flex items-center gap-6 mb-16">
                <div className="flex-1 h-px bg-cream/8" />
                <Zap className="h-4 w-4 text-champagne/40" />
                <div className="flex-1 h-px bg-cream/8" />
              </div>

              {/* Outbrix block */}
              <div className="text-center">
                <p className="text-xs tracking-[0.35em] uppercase text-champagne/50 mb-6">
                  Conceived &amp; constructed by
                </p>

                {/* Large Outbrix wordmark */}
                <a
                  href="https://outbrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block mb-8"
                >
                  <span
                    className="font-mono text-[clamp(3rem,10vw,7rem)] font-black leading-none tracking-tighter transition-all duration-500"
                    style={{
                      background: "linear-gradient(135deg, #c9a84c 0%, #f5e6c0 40%, #c9a84c 60%, #8b6914 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 40px rgba(201,168,76,0.2))",
                    }}
                  >
                    OUTBRIX
                  </span>
                  <div className="flex items-center justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-cream/30 tracking-widest uppercase">
                      outbrix.org
                    </span>
                    <ExternalLink className="h-3 w-3 text-cream/30" />
                  </div>
                </a>

                {/* Description */}
                <p className="text-cream/40 text-lg leading-relaxed max-w-xl mx-auto mb-4">
                  Outbrix is a venture studio that builds digital products at the
                  intersection of commerce, creativity, and technology. 94mercato is
                  its first consumer marketplace.
                </p>
                <p className="text-cream/20 text-sm leading-relaxed max-w-lg mx-auto mb-10">
                  We don't announce roadmaps. We ship things that didn't exist yesterday.
                  If you're building something unreasonable, we'd like to hear about it.
                </p>

                {/* CTA pair */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://outbrix.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-champagne/10 border border-champagne/20 hover:bg-champagne/20 hover:border-champagne/40 transition-all duration-200 text-champagne text-sm font-medium"
                  >
                    Visit Outbrix
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-cream/10 hover:border-cream/20 transition-all duration-200 text-cream/50 hover:text-cream/70 text-sm"
                  >
                    Explore the marketplace
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BOTTOM MANIFESTO BAR ────────────────────────────── */}
        <section className="py-10 border-t border-cream/5 bg-midnight">
          <div className="container-luxury">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-mono text-xs text-cream/15 tracking-[0.2em] uppercase">
                © 94mercato — A Venture of Outbrix
              </p>
              <p className="font-serif text-sm text-cream/20 italic">
                "Make the unreasonable, inevitable."
              </p>
              <a
                href="https://outbrix.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-champagne/30 hover:text-champagne/60 transition-colors tracking-widest uppercase"
              >
                outbrix.org ↗
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
