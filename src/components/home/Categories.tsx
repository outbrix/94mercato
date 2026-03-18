import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import api from "@/lib/api";

const defaultCategories = [
  { name: "Templates", emoji: "📐", count: 0, href: "/products?category=Templates" },
  { name: "UI Kits", emoji: "🎨", count: 0, href: "/products?category=UI Kits" },
  { name: "Courses", emoji: "🎓", count: 0, href: "/products?category=Courses" },
  { name: "Mockups", emoji: "📱", count: 0, href: "/products?category=Mockups" },
  { name: "Fonts", emoji: "✍️", count: 0, href: "/products?category=Fonts" },
  { name: "Icons", emoji: "✨", count: 0, href: "/products?category=Icons" },
];

export function Categories() {
  const [categories, setCategories] = useState(defaultCategories);

  useEffect(() => {
    const fetchCategoryStats = async () => {
      try {
        const response = await api.get('/stats/categories');
        const counts = response.data; // Array of { name, count }
        
        setCategories(prev => prev.map(cat => {
          const found = counts.find((c: any) => c.name === cat.name);
          return { ...cat, count: found ? parseInt(found.count) : 0 };
        }));
      } catch (e) {
        console.error("Failed to fetch category stats", e);
      }
    };
    fetchCategoryStats();
  }, []);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Seamless gradient from the section above */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-midnight-light" />

      <div className="container-luxury relative z-10">
        {/* Inline row — NOT a heading + subtitle + grid block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-cream">
            Browse by category
          </h2>
          <Link
            to="/products"
            className="text-sm text-cream/40 hover:text-champagne transition-colors flex items-center gap-1"
          >
            View all products <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Pill row — not cards, not a grid, just pills that flex-wrap */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              to={cat.href}
              className="group flex items-center gap-3 px-5 py-3.5 rounded-full border border-cream/10 bg-cream/[0.03] hover:bg-cream/[0.08] hover:border-cream/20 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-lg">{cat.emoji}</span>
              <span className="text-sm font-medium text-cream/80 group-hover:text-cream transition-colors">
                {cat.name}
              </span>
              <span className="text-xs text-cream/30 ml-1 tabular-nums">
                {cat.count === 0 ? "0" : `${cat.count}+`}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
