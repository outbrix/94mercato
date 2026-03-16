import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { TierBadge, type SellerTier } from "@/components/seller/TierBadge";
import { useCurrencyStore, type CurrencyCode } from "@/store/currencyStore";
import { formatPrice as formatPriceUtils } from "@/lib/utils";

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
}

const badgeVariants: Record<string, string> = {
  Featured: "bg-sapphire/20 text-sapphire border-sapphire/30",
  New: "bg-champagne/20 text-champagne border-champagne/30",
  Bestseller: "bg-gold/20 text-gold border-gold/30",
};

export function ProductCard({ product, className, style }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
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
    e.preventDefault(); // Prevent navigation if card is wrapped in Link
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

  return (
    <article
      className={cn(
        "group bg-midnight-light/50 backdrop-blur-xl border border-sapphire/20 rounded-xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-sapphire hover:border-sapphire/40",
        className
      )}
      style={style}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-midnight">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <Badge
              variant="outline"
              className={cn(
                "text-xs font-medium tracking-wide backdrop-blur-sm",
                badgeVariants[product.badge] || badgeVariants.New
              )}
            >
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Button
            size="icon"
            variant="midnight"
            className="rounded-full"
            asChild
          >
            <Link to={`/products/${product.slug}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="icon"
            variant="sapphire"
            className="rounded-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4 bg-midnight-light/30">
        {/* Category & Rating & Sales */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-cream/50 tracking-wide uppercase">
            {product.category}
          </span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-champagne">
              <Star className="h-3 w-3 fill-current" />
              <span className="text-cream">{product.rating}</span>
            </div>
            {product.sales > 0 && (
              <span className="text-cream/50">
                {product.sales} {product.sales === 1 ? 'sale' : 'sales'}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-serif text-lg font-medium leading-tight text-cream hover:text-champagne transition-colors">
            {product.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-cream/50 line-clamp-2">
          {product.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-sapphire/20">
          {/* Seller */}
          <div className="flex items-center gap-2 flex-wrap">
            {product.seller.avatar ? (
              <img
                src={product.seller.avatar}
                alt={product.seller.name}
                loading="lazy"
                decoding="async"
                className="w-6 h-6 rounded-full bg-midnight border border-sapphire/30 object-cover"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-midnight border border-sapphire/30 flex items-center justify-center">
                <span className="text-xs text-cream/50">{product.seller.name.charAt(0).toUpperCase()}</span>
              </div>
            )}
            <span className="text-xs text-cream/50">
              {product.seller.name}
            </span>
            {product.seller.tier && product.seller.tier !== 'Starter' && (
              <TierBadge tier={product.seller.tier} size="sm" />
            )}
          </div>

          {/* Price */}
          <p className="font-medium text-champagne">
            {formatPrice(displayPrice, currentCurrency)}
          </p>
        </div>
      </div>
    </article>
  );
}