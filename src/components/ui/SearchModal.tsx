import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
    const [query, setQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsSearching(true);
        // Navigate to products page with search query
        navigate(`/products?search=${encodeURIComponent(query.trim())}`);
        setIsSearching(false);
        setQuery("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 md:pt-32">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-midnight/80 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl mx-4 animate-scale-in">
                <div className="glass-card-elevated p-4">
                    <form onSubmit={handleSearch}>
                        <div className="relative flex items-center gap-3">
                            <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <Input
                                ref={inputRef}
                                type="text"
                                placeholder="Search products, templates, UI kits..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                            />
                            {isSearching ? (
                                <Loader2 className="h-5 w-5 animate-spin text-champagne" />
                            ) : (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={onClose}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            )}
                        </div>
                    </form>

                    {/* Quick links */}
                    <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-2">Popular searches</p>
                        <div className="flex flex-wrap gap-2">
                            {["Templates", "UI Kits", "Mockups", "Fonts", "Icons"].map((term) => (
                                <button
                                    key={term}
                                    onClick={() => {
                                        navigate(`/products?category=${encodeURIComponent(term)}`);
                                        onClose();
                                    }}
                                    className="px-3 py-1.5 text-sm rounded-full bg-sapphire/10 text-cream/80 hover:bg-sapphire/20 hover:text-cream transition-colors"
                                >
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Keyboard hint */}
                <p className="text-center text-xs text-muted-foreground mt-3">
                    Press <kbd className="px-1.5 py-0.5 bg-sapphire/20 rounded text-cream/70">Esc</kbd> to close
                </p>
            </div>
        </div>
    );
};
