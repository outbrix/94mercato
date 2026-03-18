import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowUpRight, Loader2 } from "lucide-react";
import api from "@/lib/api";

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
  rating?: number | null;
  sales_count?: number;
}

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
  },
  image:
    product.thumbnail_url || (product.images && product.images[0]) || "",
  badge: product.badge || undefined,
  category: product.category || "Templates",
  rating: Number(product.rating) || 0,
  sales: Number(product.sales_count) || 0,
});

export default function FeaturedProducts() {
  const [products, setProducts] = useState<ReturnType<typeof mapProduct>[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/products");
        const data = response.data.products || response.data || [];
        const arr = Array.isArray(data) ? data : [];
        setProducts(arr.slice(0, 6).map(mapProduct));
      } catch {
        // Silently fail — section will be hidden
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-midnight">
        <div className="container-luxury flex justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-champagne" />
        </div>
      </section>
    );
  }

  if (products.length === 0) return null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-midnight" />

      <div className="container-luxury relative z-10">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-cream">
            Featured products
          </h2>
          <Link
            to="/products"
            className="text-sm text-cream/40 hover:text-champagne transition-colors flex items-center gap-1"
          >
            Browse all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Asymmetric grid: first product is large, rest are smaller */}
        <div className="grid md:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`animate-fade-up ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
