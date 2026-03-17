import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { SemanticSearchBar } from "@/components/products/SemanticSearchBar";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  Loader2,
  LayoutGrid,
  List,
  ArrowUpDown,
  ChevronDown,
  Search,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";
import api from "@/lib/api";
import { resolveSellerTier } from "@/components/seller/TierBadge";
import type { SellerTier } from "@/components/seller/TierBadge";

// Initial categories to ensure UI is not empty before fetch
const INITIAL_CATEGORIES = [
  "All",
  "Templates",
  "UI Kits",
  "Courses",
  "Mockups",
  "Fonts",
  "Icons",
];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "popular", label: "Most Popular" },
];

interface BackendProduct {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  price: number;
  currency: string;
  category: string | null;
  badge: string | null;
  thumbnail_url: string | null;
  images: string[];
  seller_name: string;
  seller_avatar: string | null;
  seller_tier?: string;
  seller_role?: string;
}

// Map backend product to ProductCard format
const mapProduct = (product: BackendProduct) => ({
  id: product.id.toString(),
  title: product.title,
  slug: product.slug,
  description: product.description || "Premium digital product",
  price: product.price,
  currency: product.currency || "USD",
  seller: {
    name: product.seller_name || "Seller",
    avatar: product.seller_avatar || "",
    tier: resolveSellerTier(product.seller_tier, product.seller_role),
  },
  image:
    product.thumbnail_url || (product.images && product.images[0]) || "",
  badge: product.badge || undefined,
  category: product.category || "Templates",
  rating: 4.8,
  sales: 0,
});

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "All";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [products, setProducts] = useState<ReturnType<typeof mapProduct>[]>(
    []
  );
  const [categories, setCategories] = useState<string[]>(INITIAL_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showSortMenu, setShowSortMenu] = useState(false);

  // Update categories dynamically from products
  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = Array.from(
        new Set(products.map((p) => p.category))
      ).filter(Boolean) as string[];
      
      setCategories(["All", ...uniqueCategories.sort()]);
    }
  }, [products]);

  // Update URL when search or category changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (selectedCategory !== "All") params.set("category", selectedCategory);
    setSearchParams(params, { replace: true });
  }, [searchQuery, selectedCategory, setSearchParams]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/products");
        const data = response.data.products || response.data || [];
        const mappedProducts = (Array.isArray(data) ? data : []).map(
          mapProduct
        );
        setProducts(mappedProducts);
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError(
          err.response?.data?.message || "Failed to load products"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "popular":
          return b.sales - a.sales;
        case "newest":
        default:
          return 0;
      }
    });

  // Count products per category
  const categoryCounts = categories.reduce<Record<string, number>>(
    (acc, cat) => {
      acc[cat] =
        cat === "All"
          ? products.length
          : products.filter((p) => p.category === cat).length;
      return acc;
    },
    {}
  );

  return (
    <>
      <Helmet>
        <title>Premium Digital Assets — 94mercato</title>
        <meta
          name="description"
          content="Explore a curated collection of high-end UI kits, templates, and digital assets. Professional tools for modern creators and studios."
        />
      </Helmet>
      <Layout>
        {/* Hero section - Gumroad Inspired */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden border-b border-border/40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-sapphire/5 rounded-full blur-[120px] -z-10" />
          
          <div className="container-luxury flex flex-col items-center text-center">
             <span className="text-[10px] font-black tracking-[0.3em] uppercase text-champagne mb-4 animate-fade-in">
              The Digital Marketplace
            </span>
            <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase leading-none mb-8 max-w-4xl animate-fade-up">
              Find your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire to-champagne">creative edge</span>
            </h1>
            
            <div className="w-full max-w-2xl mx-auto mb-12 animate-fade-up relative z-40" style={{ animationDelay: '100ms' }}>
              <SemanticSearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                className="shadow-2xl shadow-sapphire/5"
              />
            </div>

            {/* Category Nav - Horizontal Scroll bar style */}
            <div className="w-full max-w-5xl mx-auto overflow-hidden relative animate-fade-up z-10" style={{ animationDelay: '200ms' }}>
               <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar px-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "whitespace-nowrap px-6 py-2.5 text-xs font-black uppercase tracking-[0.1em] rounded-full border transition-all duration-300",
                      selectedCategory === category
                        ? "bg-foreground text-background border-foreground shadow-lg scale-105"
                        : "border-border/50 text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-foreground/5"
                    )}
                  >
                    {category}
                    {categoryCounts[category] > 0 && (
                      <span className={cn(
                        "ml-2 opacity-50",
                        selectedCategory === category ? "text-background/70" : "text-muted-foreground"
                      )}>
                        {categoryCounts[category]}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Grid Sticky Bar */}
        <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border/40">
          <div className="container-luxury py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                {isLoading ? "Loading marketplace..." : `${filteredProducts.length} Results Found`}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Sort Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest border border-border/60 rounded-full hover:bg-secondary/50 transition-all"
                >
                  <ArrowUpDown className="h-3 w-3" />
                  {sortOptions.find((s) => s.value === sortBy)?.label}
                  <ChevronDown className="h-2 w-2" />
                </button>
                
                {showSortMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border/80 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setShowSortMenu(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all",
                          sortBy === opt.value
                            ? "bg-sapphire text-white shadow-lg"
                            : "hover:bg-secondary/80 text-muted-foreground"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* View Switches */}
              <div className="hidden sm:flex items-center p-1 bg-secondary/30 rounded-full border border-border/40">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-1.5 rounded-full transition-all",
                    viewMode === "grid" ? "bg-white text-black shadow-sm" : "text-muted-foreground"
                  )}
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-1.5 rounded-full transition-all",
                    viewMode === "list" ? "bg-white text-black shadow-sm" : "text-muted-foreground"
                  )}
                >
                  <List className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Product Grid */}
        <section className="py-12 min-h-[60vh]">
          <div className="container-luxury">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-32 gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-sapphire" />
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground animate-pulse">
                  Querying the forge...
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-32 max-w-md mx-auto">
                 <h3 className="text-2xl font-serif mb-4">Misfire in the marketplace</h3>
                 <p className="text-muted-foreground mb-8 text-sm">{error}</p>
                 <Button variant="luxury" onClick={() => window.location.reload()}>
                   Try Again
                 </Button>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div
                className={cn(
                  "grid gap-6 lg:gap-8",
                  viewMode === "grid" 
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                    : "grid-cols-1 max-w-4xl mx-auto"
                )}
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 max-w-sm mx-auto">
                <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground/30">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif mb-2">No digital artifacts found</h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Your current filters didn't return any results. Try broadening your search.
                </p>
                <Button
                  variant="luxury-outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
