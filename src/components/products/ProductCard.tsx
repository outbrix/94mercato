import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { toast } from "sonner";
import { TierBadge, type SellerTier } from "@/components/seller/TierBadge";
import { useCurrencyStore, type CurrencyCode } from "@/store/currencyStore";
import { formatPrice as formatPriceUtils } from "@/lib/utils";
import { Heart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    currency: string;
    seller: {
      name: string;
      avatar: string;
      tier?: SellerTier;
    };
    image: string;
    badge?: string;
    category: string;
    rating: number;
    sales: number;
  };
  className?: string;
  style?: React.CSSProperties;
  viewMode?: "grid" | "list";
}

const badgeVariants: Record<string, string> = {
  Featured: "bg-sapphire/20 text-sapphire border-sapphire/30",
  New: "bg-champagne/20 text-champagne border-champagne/30",
  Bestseller: "bg-gold/20 text-gold border-gold/30",
};

export function ProductCard({ product, className, style, viewMode = "grid" }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { currentCurrency, convert } = useCurrencyStore();

  const displayPrice = convert(
    product.price, 
    (product.currency as CurrencyCode) || 'USD', 
    currentCurrency
  );

  const formatPrice = (price: number, currency: string) => {
    return formatPriceUtils(price, currency);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      currency: product.currency,
    });

    toast.success("Added to cart", {
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    toggleItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });

    const isNowInWishlist = !isInWishlist(product.id);
    
    // Trigger animation
    const btn = e.currentTarget as HTMLButtonElement;
    btn.classList.add('animate-heart-pop');
    setTimeout(() => btn.classList.remove('animate-heart-pop'), 400);

    toast.success(isNowInWishlist ? "Added to wishlist" : "Removed from wishlist", {
      description: isNowInWishlist
        ? `${product.title} has been added to your wishlist.`
        : `${product.title} has been removed from your wishlist.`,
    });
  };

  const isLiked = isInWishlist(product.id);

  return (
    <article
      className={cn(
        "group bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-sapphire/10 hover:border-sapphire/30",
        viewMode === "list" ? "flex flex-col sm:flex-row" : "flex flex-col",
        className
      )}
      style={style}
    >
      <div className={cn(
        "relative overflow-hidden bg-secondary/30",
        viewMode === "list" ? "aspect-video sm:aspect-[4/3] sm:w-[35%] shrink-0 border-r border-white/5" : "aspect-[4/3] w-full"
      )}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <Badge
              variant="secondary"
              className={cn(
                "text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider backdrop-blur-md border-transparent shadow-sm",
                badgeVariants[product.badge] || "bg-white/90 text-black"
              )}
            >
              {product.badge}
            </Badge>
          )}
          {product.sales > 50 && (
             <Badge className="bg-amber-500 text-white text-[10px] px-2 py-0.5 border-none shadow-sm">
               Bestseller
             </Badge>
          )}
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3">
          <div className="px-3 py-1.5 bg-black/80 backdrop-blur-md text-white rounded-full text-sm font-bold shadow-lg border border-white/10">
            {formatPrice(displayPrice, currentCurrency)}
          </div>
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-3 right-3 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "h-10 w-10 rounded-full backdrop-blur-md border border-white/10 transition-all",
              isLiked ? "bg-red-500/20 text-red-500 border-red-500/40" : "bg-black/40 text-white hover:bg-black/60"
            )}
            onClick={handleToggleWishlist}
          >
            <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
          </Button>
        </div>

        <div className="absolute bottom-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <Button
            size="icon"
            variant="sapphire"
            className="h-10 w-10 rounded-full shadow-xl"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className={cn(
        "p-4 sm:p-6 space-y-4",
        viewMode === "list" ? "flex-1 flex flex-col justify-center" : "space-y-3"
      )}>
        {/* Category & Rating */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-champagne bg-champagne/5 px-1.5 py-0.5 rounded-md">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-bold">{product.rating}</span>
          </div>
        </div>

        <Link to={`/products/${product.slug}`} className="block">
          <h3 className="font-serif text-lg font-medium leading-tight hover:text-sapphire transition-colors line-clamp-1 after:absolute after:inset-0 after:z-10">
            {product.title}
          </h3>
        </Link>

        {/* Seller Info */}
        <div className="flex items-center justify-between pt-2 border-t border-border/40">
          <div className="flex items-center gap-2">
            {product.seller.avatar ? (
              <img
                src={product.seller.avatar}
                alt={product.seller.name}
                className="w-5 h-5 rounded-full bg-secondary object-cover"
              />
            ) : (
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold">
                {product.seller.name.charAt(0)}
              </div>
            )}
            <span className="text-xs text-muted-foreground font-medium">{product.seller.name}</span>
            {product.seller.tier && product.seller.tier !== 'Starter' && (
              <TierBadge tier={product.seller.tier} size="sm" />
            )}
          </div>
          {product.sales > 0 && (
            <span className="text-[10px] text-muted-foreground/60 font-medium italic">
              {product.sales} sales
            </span>
          )}
        </div>
      </div>
    </article>
  );
}