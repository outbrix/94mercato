import { Zap, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { isFlashSaleDay } from "@/lib/commission";
import { cn } from "@/lib/utils";

export const FlashSaleBanner = ({ className }: { className?: string }) => {
  if (!isFlashSaleDay()) return null;

  return (
    <div className={cn(
      "w-full bg-champagne text-midnight overflow-hidden py-3 relative group transition-all",
      className
    )}>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 fill-current animate-pulse" />
              <span className="text-[11px] font-black tracking-[0.25em] uppercase">
                Flash Sale Protocol Active
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-serif italic">0% Marketplace Commission for Pro Sellers</span>
              <TrendingUp className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
               <span className="text-[11px] font-black tracking-[0.2em] uppercase opacity-60">Floor Liquidity Scaling</span>
            </div>

            <Link to="/pricing" className="text-[10px] font-black border-b border-midnight pb-0.5 hover:text-white hover:border-white transition-colors">
                View Economics <ArrowRight className="inline w-3 h-3 ml-1" />
            </Link>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
