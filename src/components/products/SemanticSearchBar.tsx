import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, X, TrendingUp, Command, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SemanticSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  isSticky?: boolean;
}

const placeholders = [
  "Search with AI... try 'minimal portfolio'",
  "Find 'modern SaaS dashboard kits'",
  "Discover 'dark mode figma components'",
  "Look for 'premium notion templates'",
];

const popularSearches = [
  "minimal portfolio template",
  "dark mode UI kit",
  "notion templates",
  "figma components",
];

const aiSuggestions = [
  { query: "modern ebook for designers", score: 0.95 },
  { query: "SaaS dashboard template", score: 0.89 },
  { query: "mobile app UI kit dark mode", score: 0.87 },
];

export function SemanticSearchBar({
  value,
  onChange,
  className,
  isSticky = false,
}: SemanticSearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    setShowAISuggestions(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      setShowAISuggestions(false);
    }, 200);
  };

  const handleSuggestionClick = (query: string) => {
    onChange(query);
    setShowAISuggestions(false);
  };

  return (
    <div className={cn(
      "relative transition-all duration-500",
      isSticky && "sticky top-4 z-50",
      className
    )}>
      <div className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300",
        isFocused ? "shadow-2xl shadow-sapphire/20 scale-[1.01]" : "shadow-lg shadow-black/5"
      )}>
        <Search className={cn(
          "absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300",
          isFocused ? "text-sapphire" : "text-muted-foreground"
        )} />
        
        <Input
          type="search"
          placeholder={placeholders[placeholderIndex]}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            "pl-14 pr-32 h-16 bg-white/5 backdrop-blur-xl border-border/40 focus:border-sapphire/50 text-lg transition-all",
            "placeholder:transition-all placeholder:duration-500",
            isFocused ? "bg-white/10" : "bg-white/5"
          )}
        />

        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-3">
          {value && (
            <button
              onClick={() => onChange("")}
              className="p-1 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/50 border border-border/50 text-[10px] font-black text-muted-foreground">
             <Command className="h-2.5 w-2.5" />
             <span>K</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sapphire/10 border border-sapphire/20 text-[10px] font-black text-sapphire uppercase tracking-widest">
            <Sparkles className="h-3 w-3" />
            <span>AI</span>
          </div>
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {showAISuggestions && !value && (
        <div className="absolute top-full left-0 right-0 mt-4 p-8 bg-background border border-border shadow-2xl z-[100] animate-fade-in overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sapphire/20 rounded-full -mr-48 -mt-48 blur-[80px] opacity-10" />
          
          <div className="relative z-10 space-y-8">
            {/* AI Suggestions */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-sapphire" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Neural Discoveries
                </span>
              </div>
              <div className="grid gap-2">
                {aiSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.query}
                    onClick={() => handleSuggestionClick(suggestion.query)}
                    className="group w-full flex items-center justify-between p-3 rounded-xl hover:bg-sapphire/5 border border-transparent hover:border-sapphire/10 transition-all text-left"
                  >
                    <span className="text-sm font-medium group-hover:text-sapphire transition-colors">{suggestion.query}</span>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-muted-foreground/60">
                         {Math.round(suggestion.score * 100)}% Match
                       </span>
                       <ArrowRight className="h-3 w-3 text-sapphire opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Searches */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Trending Artefacts
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSuggestionClick(search)}
                    className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-border/60 bg-secondary/20 hover:bg-sapphire hover:border-sapphire hover:text-white transition-all duration-300"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
