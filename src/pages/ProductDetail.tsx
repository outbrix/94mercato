import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import {
  ShoppingCart,
  Heart,
  Share2,
  Shield,
  Download,
  Clock,
  Check,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Edit,
  AlertTriangle,
  Plus,
  Minus,
  RefreshCw,
  Star,
  Zap,
  ArrowRight,
  ShieldCheck,
  Eye,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useRecentlyViewedStore } from "@/store/recentlyViewedStore";
import { useAuth } from "@/contexts/AuthContext";
import api from "@/lib/api";
import { formatPrice, cn } from "@/lib/utils";
import { useCurrencyStore, type CurrencyCode } from "@/store/currencyStore";
import { toast } from "sonner";
import { ProductCard } from "@/components/products/ProductCard";
import { ReviewSection } from "@/components/products/ReviewSection";
import { SocialShare } from "@/components/products/SocialShare";
import { TierBadge, resolveSellerTier } from "@/components/seller/TierBadge";

interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  full_description: string;
  price: number;
  currency: string;
  category: string;
  badge: string | null;
  status: string;
  thumbnail_url: string | null;
  images: string[];
  features: string[];
  tags: string[];
  seller_id: number;
  seller_name: string;
  seller_avatar: string | null;
  seller_is_verified: boolean;
  seller_tier?: string;
  seller_role?: string;
  is_verified?: boolean;
  rating: number | null;
  review_count: number;
  sales_count: number;
}

interface RelatedProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  seller: { name: string; avatar: string };
  image: string;
  badge?: string;
  category: string;
  rating: number;
  sales: number;
}

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuth();
  const addItem = useCartStore((state) => state.addItem);
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { currentCurrency, convert } = useCurrencyStore();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);
  const [isRetrying, setIsRetrying] = useState(false);

  // Fetch product data
  const fetchProduct = useCallback(async () => {
    if (!slug) return;

    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get(`/products/${slug}`);
      setProduct(response.data);
    } catch (err: any) {
      console.error('Error fetching product:', err);
      setError(err.response?.data?.message || 'Product not found');
    } finally {
      setIsLoading(false);
      setIsRetrying(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  // Fetch related products by category
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (!product?.category) return;
      try {
        const response = await api.get(`/products?category=${encodeURIComponent(product.category)}&limit=5`);
        // Filter out current product and take first 4
        const related = (response.data.products || response.data || [])
          .filter((p: any) => p.slug !== slug)
          .slice(0, 4)
          .map((p: any) => ({
            id: p.id?.toString() || p.slug,
            title: p.title,
            slug: p.slug,
            description: p.description || '',
            price: p.price,
            currency: p.currency || 'USD',
            seller: { name: p.seller_name || 'Unknown', avatar: p.seller_avatar || '' },
            image: p.thumbnail_url || p.images?.[0] || '',
            badge: p.badge,
            category: p.category,
            rating: Number(p.rating) || 0,
            sales: Number(p.sales_count) || 0,
          }));
        setRelatedProducts(related);
      } catch (err) {
        console.error('Error fetching related products:', err);
      }
    };
    fetchRelatedProducts();
  }, [product?.category, slug]);

  // Track recently viewed products
  const addToRecentlyViewed = useRecentlyViewedStore((state) => state.addProduct);

  useEffect(() => {
    if (product) {
      addToRecentlyViewed({
        id: product.id.toString(),
        title: product.title,
        slug: product.slug,
        price: product.price,
        currency: product.currency || 'INR',
        image: product.thumbnail_url || (product.images && product.images[0]) || '',
        category: product.category,
        sellerName: product.seller_name,
      });
    }
  }, [product, addToRecentlyViewed]);

  // Convert both to numbers for comparison to handle type mismatches
  const isOwner = user && product && Number(user.id) === Number(product.seller_id);
  const isPublished = product?.status === 'published';

  const handleAddToCart = () => {
    if (!product) return;

    const itemToAdd = {
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      image: product.thumbnail_url || (product.images && product.images[0]) || '',
    };

    // Add item multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(itemToAdd);
    }

    toast.success("Added to cart", {
      description: `${quantity}x ${product.title} added to your cart.`,
    });
    setQuantity(1); // Reset quantity after adding
  };

  const handleToggleWishlist = () => {
    if (!product) return;

    const wishlistItem = {
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      image: product.thumbnail_url || (product.images && product.images[0]) || '',
      slug: product.slug,
    };

    toggleItem(wishlistItem);

    const isNowInWishlist = !isInWishlist(product.id.toString());
    toast.success(isNowInWishlist ? "Added to wishlist" : "Removed from wishlist", {
      description: isNowInWishlist
        ? `${product.title} has been added to your wishlist.`
        : `${product.title} has been removed from your wishlist.`,
    });
  };

  const handleRetry = () => {
    setIsRetrying(true);
    fetchProduct();
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = product?.title || 'Check out this product';

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        // User cancelled or share failed, fallback to copy
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Link copied!", {
        description: "Product link has been copied to clipboard.",
      });
    }).catch(() => {
      toast.error("Failed to copy link");
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-champagne" />
        </div>
      </Layout>
    );
  }

  // Check if product is in wishlist
  const inWishlist = product ? isInWishlist(product.id.toString()) : false;

  // Error or not found state
  if (error || !product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <h1 className="heading-large mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">{error || 'Unable to load product'}</p>
            <div className="flex gap-3 justify-center">
              <Button
                variant="luxury"
                onClick={handleRetry}
                disabled={isRetrying}
              >
                {isRetrying ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Retrying...</>
                ) : (
                  <><RefreshCw className="h-4 w-4 mr-2" /> Try Again</>
                )}
              </Button>
              <Button variant="luxury-outline" asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Get the main display image - use selected image from gallery or fallback to thumbnail
  const allImages = product.images && product.images.length > 0
    ? product.images
    : (product.thumbnail_url ? [product.thumbnail_url] : []);
  const displayImage = allImages[selectedImageIndex] || product.thumbnail_url || '';
  const features = product.features || [];
  const tags = product.tags || [];

  return (
    <>
      <Helmet>
        <title>{product.title} — 94mercato</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <Layout>
        {/* Banner for owners/preview */}
        {isOwner && !isPublished && (
          <div className="pt-20 bg-amber-500/10 border-b border-amber-500/20">
            <div className="container-luxury py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-600 text-xs">
                <AlertTriangle className="h-3 w-3" />
                <span>Product draft — not visible to customers</span>
              </div>
              <Button variant="luxury-outline" size="sm" asChild>
                <Link to={`/dashboard/edit/${product.id}`}>Edit</Link>
              </Button>
            </div>
          </div>
        )}

        <div className="relative pt-24 pb-20 overflow-hidden">
          {/* Dynamic Ambient Background - Enhanced Visibility */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[140%] bg-cover bg-center opacity-[0.12] blur-[120px] scale-110 animate-in fade-in duration-1000"
              style={{ backgroundImage: `url(${displayImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background" />
          </div>

          <div className="container-luxury relative">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <Link to="/products" className="hover:text-foreground transition-colors">Marketplace</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to={`/products?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{product.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[80px,1fr,400px] gap-8 xl:gap-12 items-start">
              
              {/* Zone 1: Vertical Thumbnails (Desktop) */}
              <div className="hidden lg:flex flex-col gap-3">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={cn(
                      "relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300",
                      selectedImageIndex === idx 
                        ? "border-sapphire shadow-lg scale-105" 
                        : "border-transparent hover:border-border/60 opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Zone 2: Main Image Center */}
              <div className="space-y-6">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-secondary/30 group shadow-2xl border border-white/5">
                  <img
                    src={displayImage}
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Status Badges Overlay */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {product.badge && (
                      <Badge variant="default" className="text-[10px] font-black uppercase tracking-widest px-3 py-1 backdrop-blur-md">
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Mobile Thumbnails (Overlay bottom) */}
                  {/* Verified Selection Badge */}
                  <div className="absolute bottom-8 left-8 flex items-center gap-2 px-3 py-2 bg-midnight/60 backdrop-blur-xl border border-white/10 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 lg:flex hidden">
                    <ShieldCheck className="w-4 h-4 text-sapphire" />
                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white/90">Verified Selection</span>
                  </div>

                  {/* Mobile Thumbnails (Overlay bottom) */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 bg-black/40 backdrop-blur-md rounded-full lg:hidden">
                    {allImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all",
                          selectedImageIndex === idx ? "w-6 bg-white" : "bg-white/40"
                        )}
                      />
                    ))}
                  </div>

                   {/* Arrows Overlay */}
                   {allImages.length > 1 && (
                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                       <Button 
                        variant="midnight" 
                        size="icon" 
                        className="rounded-full h-12 w-12"
                        onClick={() => setSelectedImageIndex(prev => (prev > 0 ? prev - 1 : allImages.length - 1))}
                       >
                         <ChevronLeft className="h-6 w-6" />
                       </Button>
                       <Button 
                        variant="midnight" 
                        size="icon" 
                        className="rounded-full h-12 w-12"
                        onClick={() => setSelectedImageIndex(prev => (prev < allImages.length - 1 ? prev + 1 : 0))}
                       >
                         <ChevronRight className="h-6 w-6" />
                       </Button>
                    </div>
                  )}
                </div>

                <div className="hidden lg:block space-y-12 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '400ms' }}>
                  <div>
                    <h2 className="text-xl font-serif mb-6 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-sapphire" />
                      Product Details
                    </h2>
                    <div className="prose prose-invert max-w-none text-muted-foreground/90 leading-relaxed font-light whitespace-pre-wrap">
                      {product.full_description || product.description}
                    </div>
                  </div>

                  {/* Features */}
                  {features.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-champagne">Included Features</h3>
                      <div className="flex flex-wrap gap-3">
                        {features.map((feature, idx) => (
                          <div key={idx} className="px-5 py-3 bg-secondary/20 rounded-2xl border border-border/40 text-xs font-bold flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-sapphire/20 flex items-center justify-center">
                              <Check className="h-3 w-3 text-sapphire" />
                            </div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Zone 3: Sticky Sidebar */}
              <aside className="lg:sticky lg:top-28 space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000" style={{ animationDelay: '200ms' }}>
                <div className="p-8 bg-midnight/30 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-sapphire/10 rounded-full -mr-24 -mt-24 blur-3xl animate-pulse" />
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between font-black">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.category}</span>
                      <div className="flex items-center gap-1.5 text-champagne">
                        <Star className="h-4 w-4 fill-current" />
                        <span>{product.rating ? Number(product.rating).toFixed(1) : "—"}</span>
                        {product.review_count > 0 && (
                          <span className="text-[10px] text-muted-foreground">({product.review_count})</span>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <h1 className="text-3xl lg:text-4xl font-serif leading-tight tracking-tight mb-2">{product.title}</h1>
                      {product.is_verified && (
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="text-[8px] border-sapphire/30 text-sapphire px-2 flex items-center gap-1">
                            <ShieldCheck className="h-3 w-3" />
                            94M Verified
                          </Badge>
                          <Badge variant="outline" className="text-[8px] border-emerald-500/30 text-emerald-400 px-2 font-bold tracking-tight">Verified Selection</Badge>
                        </div>
                      )}
                    </div>

                    <div className="flex items-end gap-3 pt-2">
                      <span className="text-3xl lg:text-4xl font-sans font-black tracking-tighter">
                         {formatPrice(convert(product.price, (product.currency || 'USD') as CurrencyCode, currentCurrency), currentCurrency)}
                      </span>
                    </div>

                    <div className="space-y-3 pt-6">
                      <Button
                        variant="luxury"
                        size="xl"
                        className="w-full h-16 text-lg font-black uppercase tracking-[0.1em] rounded-2xl shadow-2xl shadow-sapphire/20 transition-all hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
                        onClick={handleAddToCart}
                        disabled={!isPublished && !isOwner}
                      >
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                        <ShoppingCart className="mr-3 h-5 w-5 transition-transform group-hover:-translate-y-1" />
                        Add to Cart
                      </Button>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Button 
                          variant="luxury-outline" 
                          className={cn("h-12 rounded-xl text-[10px] font-black uppercase tracking-widest", inWishlist && "bg-rose-500/10 text-rose-500 border-rose-500/20")}
                          onClick={handleToggleWishlist}
                        >
                          <Heart className={cn("mr-2 h-4 w-4", inWishlist && "fill-current")} />
                          Wishlist
                        </Button>
                        <Button variant="luxury-outline" className="h-12 rounded-xl text-[10px] font-black uppercase tracking-widest" onClick={handleShare}>
                           <Share2 className="mr-2 h-4 w-4" />
                           Share
                        </Button>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-border/40 space-y-4">
                       <div className="flex items-center gap-3 text-xs text-muted-foreground font-bold">
                          <div className="w-8 h-8 rounded-full bg-sapphire/10 flex items-center justify-center">
                            <Shield className="h-4 w-4 text-sapphire" />
                          </div>
                          Secure Checkout
                       </div>
                       <div className="flex items-center gap-3 text-xs text-muted-foreground font-bold">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                            <Zap className="h-4 w-4 text-emerald-400" />
                          </div>
                          Instant Digital Delivery
                       </div>
                    </div>
                  </div>
                </div>

                {/* Seller Info Card */}
                <div onClick={() => window.open(`/seller/${encodeURIComponent(product.seller_name)}`, '_blank')} className="p-6 bg-secondary/10 rounded-[2rem] border border-border/40 flex items-center justify-between group cursor-pointer hover:bg-secondary/20 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                       {product.seller_avatar ? (
                        <img src={product.seller_avatar} alt={product.seller_name} className="w-12 h-12 rounded-full object-cover ring-2 ring-background shadow-lg" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-sapphire/10 flex items-center justify-center text-lg font-serif font-black text-sapphire ring-2 ring-background shadow-lg">
                          {product.seller_name?.charAt(0)}
                        </div>
                      )}
                      <div className="absolute -bottom-1 -right-1">
                         <TierBadge tier={resolveSellerTier(product.seller_tier, product.seller_role)} size="sm" className="shadow-md" />
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Crafted By</p>
                      <h4 className="text-sm font-serif font-bold group-hover:text-sapphire transition-colors">{product.seller_name}</h4>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </aside>
            </div>

            {/* Mobile (Simplified) */}
            <div className="lg:hidden mt-20 space-y-12 pt-12 border-t border-border/40">
               <div>
                  <h2 className="text-2xl font-serif mb-6">Artifact Details</h2>
                  <div className="prose prose-invert text-sm font-light text-muted-foreground whitespace-pre-wrap">
                    {product.full_description || product.description}
                  </div>
               </div>
               {features.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-champagne">Included Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {features.map((feature, idx) => (
                      <div key={idx} className="px-3 py-1.5 bg-secondary/30 rounded-full border border-border/40 text-[10px] font-medium">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Communal Trust & Social */}
            <div className="mt-32 space-y-32">
              <div className="flex flex-col md:flex-row gap-12 pt-20 border-t border-border/40">
                <div className="md:w-1/3 space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-serif">Community Trust</h2>
                  <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                    Read unedited feedback from the collectors' collective who have acquired this artifact.
                  </p>
                <div className="flex items-center gap-4 p-6 bg-card/40 rounded-3xl border border-border/50">
                    {product.rating ? (
                      <>
                        <span className="text-5xl font-serif font-black text-champagne">{Number(product.rating).toFixed(1)}</span>
                        <div>
                          <div className="flex items-center mb-1">
                            {[1,2,3,4,5].map(i => <Star key={i} className={`h-4 w-4 ${i <= Math.round(Number(product.rating)) ? 'fill-champagne text-champagne' : 'text-muted-foreground'}`} />)}
                          </div>
                          <span className="text-[10px] uppercase font-black text-muted-foreground/60 tracking-widest">
                            {product.review_count} {product.review_count === 1 ? 'Review' : 'Reviews'}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="text-center w-full">
                        <Star className="h-8 w-8 text-muted-foreground/30 mx-auto mb-2" />
                        <span className="text-xs text-muted-foreground">No reviews yet</span>
                      </div>
                    )}
                </div>
                </div>
                <div className="md:w-2/3">
                  <ReviewSection productId={product.id} productSlug={product.slug} />
                </div>
              </div>

              {/* Related Products */}
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                 <div className="flex items-end justify-between">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-serif mb-3">You might also <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sapphire to-champagne">like</span></h2>
                      <p className="text-muted-foreground text-sm">Products frequently viewed together with this item.</p>
                    </div>
                    <Button variant="luxury-outline" asChild className="hidden sm:flex rounded-full px-6 group transition-all hover:pr-8">
                      <Link to="/products" className="flex items-center">View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" /></Link>
                    </Button>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   {relatedProducts.map((p) => (
                     <ProductCard key={p.id} product={p as any} />
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
