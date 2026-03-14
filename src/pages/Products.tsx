import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { SemanticSearchBar } from "@/components/products/SemanticSearchBar";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  SlidersHorizontal,
  Loader2,
  LayoutGrid,
  List,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";
import api from "@/lib/api";
import type { SellerTier } from "@/components/seller/TierBadge";

const categories = [
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
  seller_tier?: SellerTier;
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
    tier: (product.seller_tier || "starter") as SellerTier,
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
  const [selectedCategory, setSelectedCategory] = useState(
    categories.includes(initialCategory) ? initialCategory : "All"
  );
  const [products, setProducts] = useState<ReturnType<typeof mapProduct>[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showSortMenu, setShowSortMenu] = useState(false);

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
        {/* Hero section */}
        <section className="pt-24 md:pt-32 pb-12 bg-gradient-to-b from-midnight via-midnight-light/50 to-background relative overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[50vw] h-[40vh] bg-sapphire/15 rounded-full blur-[120px]" />
          <div className="container-luxury relative z-10">
            <div className="max-w-2xl">
              <span className="text-xs tracking-widest uppercase text-champagne mb-3 block">
                Marketplace
              </span>
              <h1 className="heading-large mb-4 text-cream">
                Browse Products
              </h1>
              <p className="text-cream/60 text-lg">
                Discover premium digital products from our curated
                marketplace of talented creators.
              </p>
            </div>
          </div>
        </section>

        {/* Filters bar */}
        <section className="py-6 border-b border-border sticky top-20 z-40 bg-background/80 backdrop-blur-xl">
          <div className="container-luxury">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <SemanticSearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                className="w-full md:w-96"
              />

              {/* Right controls */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                {/* Sort dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowSortMenu(!showSortMenu)}
                    className="flex items-center gap-2 px-3 py-2 text-sm border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                    <span className="hidden sm:inline">
                      {sortOptions.find((s) => s.value === sortBy)?.label}
                    </span>
                    <ChevronDown className="h-3 w-3 text-muted-foreground" />
                  </button>
                  {showSortMenu && (
                    <div className="absolute right-0 top-full mt-1 w-48 bg-card border border-border rounded-xl shadow-float overflow-hidden z-50">
                      {sortOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => {
                            setSortBy(opt.value);
                            setShowSortMenu(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${sortBy === opt.value
                              ? "bg-sapphire/10 text-sapphire font-medium"
                              : "hover:bg-secondary/50 text-muted-foreground"
                            }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* View toggle */}
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-colors ${viewMode === "grid"
                        ? "bg-sapphire/10 text-sapphire"
                        : "text-muted-foreground hover:bg-secondary/50"
                      }`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-colors border-l border-border ${viewMode === "list"
                        ? "bg-sapphire/10 text-sapphire"
                        : "text-muted-foreground hover:bg-secondary/50"
                      }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 text-sm rounded-full border transition-all ${selectedCategory === category
                      ? "bg-champagne text-midnight border-champagne font-medium"
                      : "border-border text-muted-foreground hover:border-champagne/50 hover:text-champagne"
                    }`}
                >
                  {category}
                  {categoryCounts[category] > 0 && (
                    <span
                      className={`ml-1.5 text-xs ${selectedCategory === category
                          ? "text-midnight/70"
                          : "text-muted-foreground/70"
                        }`}
                    >
                      {categoryCounts[category]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section-padding">
          <div className="container-luxury">
            {/* Results count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground text-sm">
                {isLoading
                  ? "Loading..."
                  : `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""}`}
              </p>
            </div>

            {/* Loading */}
            {isLoading && (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-champagne" />
              </div>
            )}

            {/* Error */}
            {error && !isLoading && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">
                  {error}
                </p>
                <Button
                  variant="luxury-outline"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </Button>
              </div>
            )}

            {/* Grid / List */}
            {!isLoading && !error && filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "grid grid-cols-1 gap-4"
                }
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
              !isLoading &&
              !error && (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground mb-4">
                    No products found
                  </p>
                  <Button
                    variant="luxury-outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
