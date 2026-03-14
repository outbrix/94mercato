import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { TIER_COMMISSION } from "@/lib/commission";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Upload, 
  Zap, 
  Crown, 
  Pencil, 
  TrendingUp, 
  DollarSign, 
  Wallet, 
  LineChart, 
  Layers, 
  MousePointer2,
  Box,
  Image as ImageIcon
} from "lucide-react";
import { CreativePricing } from "@/components/ui/creative-pricing";
import { FlashSaleBanner } from "@/components/ui/FlashSaleBanner";
import { MARKET_STATS } from "@/lib/market-stats";

// ─── Marketplace Pulse Background ──────────────────────────────────
const MarketPulse = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sapphire/50 to-transparent animate-pulse" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse delay-700" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-champagne/50 to-transparent animate-pulse delay-1000" />
        
        {/* Moving data lines */}
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-slide-right" />
        <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-slide-right delay-2000" />
    </div>
);

// ─── Dashboard Preview Mockup ──────────────────────────────────────
const DashboardPreview = () => (
    <div className="relative w-full max-w-4xl mx-auto mt-16 group">
        {/* Glow behind the dashboard */}
        <div className="absolute -inset-4 bg-sapphire/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="relative bg-midnight-light/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
            {/* Window Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Seller_Analytics_v2.0</div>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left: Main Balance */}
                <div className="md:col-span-5 space-y-6">
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Available Balance</p>
                        <h3 className="text-4xl font-sans font-black text-cream">₹{((MARKET_STATS.DISTRIBUTED_REVENUE_LAKHS / 12) * 1.5).toFixed(2)}L</h3>
                        <div className="mt-4 flex items-center gap-2 text-emerald-400 text-xs font-bold">
                            <TrendingUp className="w-3 h-3" />
                            <span>+{MARKET_STATS.WEEKLY_GROWTH_PERCENT}% this week</span>
                        </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Recent Sale</p>
                            <span className="text-[10px] text-emerald-400 font-mono">JUST NOW</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-sapphire/20 flex items-center justify-center text-sapphire">
                                <Layers className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-cream">Modern SaaS UI Kit</p>
                                <p className="text-xs text-white/20">Sold for ₹2,499</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Growth Chart Mockup */}
                <div className="md:col-span-7 p-6 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Revenue Growth</p>
                            <h4 className="text-xl font-bold text-cream">March Performance</h4>
                        </div>
                        <LineChart className="w-5 h-5 text-champagne/40" />
                    </div>
                    
                    {/* Mock SVG Chart */}
                    <svg className="w-full h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <path 
                            d="M0,80 Q50,75 100,50 T200,60 T300,20 T400,10" 
                            fill="none" 
                            stroke="hsl(var(--champagne))" 
                            strokeWidth="3" 
                            className="animate-draw"
                        />
                        <path 
                            d="M0,80 Q50,75 100,50 T200,60 T300,20 T400,10 V100 H0 Z" 
                            fill="url(#chartGradient)" 
                            className="opacity-20"
                        />
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="hsl(var(--champagne))" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="absolute bottom-6 right-6 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest animate-pulse">
                        Scaling Active
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// ─── Category Card component ──────────────────────────────────────
const CategoryCard = ({ title, icon: Icon, count, trending = false }: { title: string; icon: any; count: string; trending?: boolean }) => (
    <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all cursor-pointer">
        <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-midnight flex items-center justify-center text-cream group-hover:text-champagne transition-colors shadow-inner border border-white/5">
                <Icon className="w-5 h-5" />
            </div>
            {trending && (
                <span className="text-[8px] font-black text-midnight bg-champagne px-2 py-0.5 rounded-full uppercase tracking-widest">Trending</span>
            )}
        </div>
        <h3 className="text-lg font-sans font-black text-cream uppercase tracking-tight mb-2">{title}</h3>
        <p className="text-[10px] text-white/20 font-mono tracking-widest uppercase">{count} Assets Listed</p>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
            <ArrowUpRight className="w-4 h-4 text-champagne" />
        </div>
    </div>
);

// ─── Main Page ──────────────────────────────────────────────────────
const Sell = () => {
  const starterRate = TIER_COMMISSION.starter;
  const sellerKeepPercentage = 100 - starterRate;

  return (
    <>
      <Helmet>
        <title>Sell Digital Assets — 94mercato | High-Performance Marketplace</title>
        <meta
          name="description"
          content={`Monetize your creative assets. Join over ${MARKET_STATS.TOTAL_CREATORS} specialized creators keeping ${sellerKeepPercentage}% of every sale.`}
        />
      </Helmet>

      <Layout>
        <FlashSaleBanner className="mt-16" />
        {/* ─── HERO: The Trading Floor ─────────────────────── */}
        <section className="relative min-h-screen bg-midnight pt-16 pb-20 flex flex-col items-center justify-center overflow-hidden">
          <MarketPulse />
          
          <div className="container-luxury relative z-10 text-center px-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-cream/80">
                Network Liquidity: ₹{MARKET_STATS.DISTRIBUTED_REVENUE_LAKHS}L Distributed
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-sans font-black text-cream leading-[1.1] md:leading-[0.85] tracking-tighter uppercase mb-6 drop-shadow-2xl">
              Turn <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Craft</span> <br /> Into Revenue
            </h1>

            <p className="text-cream/50 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-14 leading-relaxed animate-fade-up delay-200">
              Stop leaving money on the table. Deploy your digital inventory{" "}
              <br className="hidden md:block" />
              on the most efficient marketplace for professional creators.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-up delay-300">
              <Link
                to="/sell/onboarding"
                className="group relative inline-flex items-center gap-4 px-14 py-6 bg-champagne text-midnight font-black text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_20px_50px_rgba(201,168,76,0.3)] hover:bg-cream transition-all hover:scale-105"
              >
                <span>Initialize Shop</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-4 px-10 py-6 border border-white/10 bg-white/[0.02] backdrop-blur-md text-cream/70 font-black text-sm tracking-[0.2em] uppercase rounded-full hover:border-white/30 hover:text-white transition-all group"
              >
                Compare Plans
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            <DashboardPreview />
          </div>
        </section>

        {/* ─── STATS BENTO: High Performance ──────────────────── */}
        <section className="bg-[#080809] py-24 border-y border-white/[0.05]">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] group">
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4">Capital Control</p>
                    <h3 className="text-5xl font-sans font-black text-cream mb-4 tracking-tighter">{sellerKeepPercentage}.0%</h3>
                    <p className="text-sm text-cream/40 leading-relaxed font-medium">Keep the lion's share. We only take {starterRate}% on the free tier—no hidden fees, no monthly traps.</p>
                </div>
                <div className="p-10 rounded-2xl bg-sapphire/5 border border-sapphire/10 group">
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4">Payout Velocity</p>
                    <h3 className="text-5xl font-sans font-black text-cream mb-4 tracking-tighter">Instant</h3>
                    <p className="text-sm text-cream/40 leading-relaxed font-medium">Why wait 30 days? Revenue flows directly to your Stripe account as soon as the sale completes.</p>
                </div>
                <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] group">
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4">Scale Support</p>
                    <h3 className="text-5xl font-sans font-black text-cream mb-4 tracking-tighter">Global</h3>
                    <p className="text-sm text-cream/40 leading-relaxed font-medium">Sell to assets developers in {MARKET_STATS.COUNTRIES_SERVED}+ countries. One dashboard to rule every transaction across borders.</p>
                </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT SELLS: Category Grid ──────────────────────── */}
        <section className="bg-midnight py-32 relative">
            <div className="container-luxury mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-4xl md:text-6xl font-sans font-black text-cream uppercase tracking-tighter mb-4">
                        What <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Moves</span>
                    </h2>
                    <p className="text-cream/30 text-lg">Top categories currently driving revenue on the floor.</p>
                </div>
                <Link to="/categories" className="text-[10px] font-black text-champagne uppercase tracking-[0.3em] border-b-2 border-champagne pb-1 hover:text-white hover:border-white transition-colors">Browse all categories</Link>
            </div>

            <div className="container-luxury">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CategoryCard title="UI & Layout Kits" icon={Layers} count={MARKET_STATS.CATEGORIES.UI_KITS.toLocaleString()} trending />
                    <CategoryCard title="3D Models" icon={Box} count={MARKET_STATS.CATEGORIES.MODELS_3D.toLocaleString()} />
                    <CategoryCard title="SaaS Templates" icon={MousePointer2} count={MARKET_STATS.CATEGORIES.SAAS_TEMPLATES.toLocaleString()} trending />
                    <CategoryCard title="Icon Systems" icon={ImageIcon} count={MARKET_STATS.CATEGORIES.ICON_SYSTEMS.toLocaleString()} />
                </div>
            </div>
        </section>

        {/* ─── PROCESS: Moving Money ──────────────────────────── */}
        <section className="bg-[#080809] py-32 relative overflow-hidden">
            <div className="container-luxury max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-[3rem] overflow-hidden">
                    {[
                        { 
                            label: "INITIALIZE SHOP", 
                            desc: "Activate your seller protocol in under 2 minutes.", 
                            icon: <Wallet className="w-6 h-6" /> 
                        },
                        { 
                            label: "DEPLOY STACK", 
                            desc: "Bulk upload your inventory with zero processing lag.", 
                            icon: <Upload className="w-6 h-6" /> 
                        },
                        { 
                            label: "WITHDRAW PROFIT", 
                            desc: "Funds settled instantly to your bank. No waiting.", 
                            icon: <DollarSign className="w-6 h-6" /> 
                        }
                    ].map((step, i) => (
                        <div key={i} className={`p-16 flex flex-col items-center text-center ${i < 2 ? 'md:border-r' : ''} border-white/10 hover:bg-white/[0.02] transition-colors group`}>
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-champagne mb-8 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-sans font-black text-cream uppercase mb-4 tracking-tighter">{step.label}</h3>
                            <p className="text-sm text-white/30 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ─── PRICING ───────────────────────────────────────── */}
        <section className="bg-cream text-charcoal py-32" id="pricing">
          <div className="max-w-6xl mx-auto px-6 text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-sans font-black text-charcoal uppercase tracking-tighter mb-4">Keep Your Payouts</h2>
            <p className="text-charcoal/50 text-xl font-medium">Simple tiers. High margins. Professional liquidity.</p>
          </div>
          <div className="max-w-6xl mx-auto px-6">
            <CreativePricing
              tag="Sovereign Plans"
              title="Execution Tiers"
              description="Transparent economics for aggressive growth."
              tiers={[
                {
                  name: "Starter",
                  icon: <Zap className="w-4 h-4" />,
                  price: "Free",
                  priceSuffix: "To Start",
                  description: "For new asset developers.",
                  color: "chrome",
                  features: ["6.0% Fee", "Unlimited Listings", "Global Settlement", "Standard Support"],
                },
                {
                  name: "Creator Pro",
                  icon: <TrendingUp className="w-4 h-4" />,
                  price: 15,
                  priceSuffix: "Per Month",
                  description: "For established professionals.",
                  color: "sapphire",
                  popular: true,
                  features: ["3.0% Fee", "Featured Ads", "Pro Verified Status", "Priority Payouts"],
                },
                {
                  name: "Partnership",
                  icon: <Crown className="w-4 h-4" />,
                  price: "Custom",
                  priceSuffix: "By Invite",
                  description: "For elite studios and labels.",
                  color: "gold",
                  features: ["2.0% Fee", "Branding Customization", "Dedicated Manager", "Zero Withdrawal Lag"],
                },
              ]}
            />
          </div>
        </section>

        {/* ─── FINAL CALL ────────────────────────────────────── */}
        <section className="bg-midnight py-48 relative text-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-sapphire/5 rounded-full blur-[200px]" />
            <div className="container-luxury relative z-10">
                <h2 className="text-6xl md:text-[10rem] font-sans font-black text-cream leading-[0.8] tracking-[ -0.05em] uppercase mb-16">
                    GET <br /> <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>PAID</span>
                </h2>
                <Link
                to="/sell/onboarding"
                className="group relative inline-flex items-center gap-6 px-16 py-8 bg-cream text-midnight font-black text-base tracking-[0.25em] uppercase rounded-full hover:scale-105 transition-all shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                >
                <span>Initialize Shop</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                </Link>
            </div>
        </section>
      </Layout>
      <style>{`
        .stroke-text {
            color: transparent;
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
        @keyframes slide-right {
            to { transform: translateX(100%); }
        }
        .animate-slide-right {
            animation: slide-right 10s linear infinite;
        }
        @keyframes draw {
            from { stroke-dashoffset: 400; }
            to { stroke-dashoffset: 0; }
        }
        .animate-draw {
            stroke-dasharray: 400;
            animation: draw 2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Sell;
