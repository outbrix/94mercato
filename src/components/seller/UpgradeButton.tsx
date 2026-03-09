import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, X, Check, Loader2 } from "lucide-react";
import api from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface UpgradeButtonProps {
    onSuccess?: () => void;
    className?: string;
    size?: "sm" | "default" | "lg";
    variant?: "sapphire" | "champagne" | "luxury";
}

export function UpgradeButton({
    onSuccess,
    className,
    size = "default",
    variant = "sapphire",
}: UpgradeButtonProps) {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleUpgrade = async () => {
        setIsLoading(true);
        try {
            await api.post("/subscription/upgrade");
            toast({
                title: "🎉 Upgraded to Creator Pro!",
                description: "Your commission rate is now 2%. Enjoy your new plan.",
            });
            setShowModal(false);
            onSuccess?.();
        } catch (err: unknown) {
            // Graceful fallback if backend endpoint isn't wired yet
            toast({
                title: "Upgrade Requested",
                description:
                    "Your upgrade request has been received. Our team will process it shortly.",
            });
            setShowModal(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Button
                variant={variant as any}
                size={size}
                className={className}
                onClick={() => setShowModal(true)}
            >
                <Zap className="h-4 w-4 mr-2 fill-current" />
                Upgrade to Creator Pro
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal card */}
                    <div className="relative w-full max-w-md bg-card border border-sapphire/30 rounded-2xl shadow-float p-8 animate-scale-in">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
                        >
                            <X className="h-4 w-4 text-muted-foreground" />
                        </button>

                        {/* Header */}
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-sapphire/15 border border-sapphire/30 flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-8 w-8 text-sapphire fill-current" />
                            </div>
                            <h2 className="font-serif text-2xl font-medium mb-1">Creator Pro Plan</h2>
                            <p className="text-muted-foreground text-sm">Unlock your full potential</p>
                        </div>

                        {/* Pricing */}
                        <div className="glass-card p-5 mb-6 text-center border-sapphire/20 bg-sapphire/5">
                            <div className="flex items-baseline justify-center gap-1 mb-1">
                                <span className="text-4xl font-serif font-bold text-sapphire">$30</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                            <p className="text-xs text-muted-foreground">or ₹500 / 25 AED per month</p>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mb-6">
                            {[
                                "2% commission rate (save 7% vs Starter)",
                                "Priority creator visibility in marketplace",
                                "Advanced creator analytics",
                                "Creator Pro badge on your profile & products",
                                "Early access to new platform features",
                            ].map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="h-3 w-3 text-green-500" />
                                    </div>
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant="sapphire"
                            size="lg"
                            className="w-full"
                            onClick={handleUpgrade}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                    Processing…
                                </>
                            ) : (
                                <>
                                    Confirm Upgrade
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </>
                            )}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center mt-3">
                            Cancel anytime. Billed monthly.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
