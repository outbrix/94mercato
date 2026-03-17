import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tag, Check, X, Loader2, Percent } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface PromoCodeInputProps {
    onApply: (
        code: string
    ) => Promise<{ valid: boolean; discount: number; discountType: string }>;
    onRemove: () => void;
    appliedCode?: string | null;
    appliedDiscount?: number;
    discountType?: "percentage" | "fixed";
    disabled?: boolean;
}

export function PromoCodeInput({
    onApply,
    onRemove,
    appliedCode,
    appliedDiscount,
    discountType,
    disabled = false,
}: PromoCodeInputProps) {
    const [code, setCode] = useState("");
    const [isValidating, setIsValidating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleApply = async () => {
        if (!code.trim()) {
            setError("Please enter a promo code");
            return;
        }

        setIsValidating(true);
        setError(null);

        try {
            const result = await onApply(code.trim().toUpperCase());

            if (result.valid) {
                toast({
                    title: "Promo code applied!",
                    description: `You saved ${result.discountType === "percentage"
                            ? `${result.discount}%`
                            : `₹${result.discount}`
                        }`,
                });
                setCode("");
            } else {
                setError("Invalid or expired promo code");
            }
        } catch {
            setError("Failed to validate promo code");
        } finally {
            setIsValidating(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleApply();
        }
    };

    if (appliedCode) {
        return (
            <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                <div className="flex items-center justify-between p-4 bg-white/[0.03] border border-champagne/20 rounded-2xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-champagne/10 flex items-center justify-center">
                            <Check className="h-4 w-4 text-champagne" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-champagne leading-none mb-1">Privilege Applied</p>
                            <span className="text-sm font-serif text-cream">{appliedCode}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-champagne text-midnight border-none font-bold text-[10px] px-2">
                            {discountType === "percentage"
                                ? `-${appliedDiscount}%`
                                : `-₹${appliedDiscount}`}
                        </Badge>
                        <button
                            onClick={onRemove}
                            className="p-1.5 text-cream/20 hover:text-destructive transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            <Label htmlFor="promo-code" className="text-[10px] font-black uppercase tracking-[0.2em] text-cream/40 px-1">
                Promotional Code
            </Label>
            <div className="relative group">
                <Input
                    id="promo-code"
                    placeholder="ENTER CODE"
                    value={code}
                    onChange={(e) => {
                        setCode(e.target.value.toUpperCase());
                        setError(null);
                    }}
                    onKeyDown={handleKeyDown}
                    disabled={disabled || isValidating}
                    className={cn(
                        "h-14 bg-white/[0.02] border-white/5 rounded-2xl pl-12 pr-20 text-cream placeholder:text-cream/10 font-mono tracking-widest transition-all",
                        "focus:ring-0 focus:border-champagne/30 focus:bg-white/[0.04]",
                        error && "border-destructive/50 focus:border-destructive/60"
                    )}
                />
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/20 group-focus-within:text-champagne/40 transition-colors" />
                
                <div className="absolute right-2 top-2 bottom-2">
                    <Button
                        variant="luxury"
                        size="sm"
                        onClick={handleApply}
                        disabled={disabled || isValidating || !code.trim()}
                        className="h-full rounded-xl px-4 text-[10px] font-black tracking-widest uppercase"
                    >
                        {isValidating ? (
                            <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                            "Apply"
                        )}
                    </Button>
                </div>
            </div>
            {error && (
                <p className="text-[10px] font-bold text-destructive uppercase tracking-widest px-1 animate-in fade-in duration-300">
                    {error}
                </p>
            )}
        </div>
    );
}
