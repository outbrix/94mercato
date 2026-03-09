import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast.success("You're in!", {
        description: "You'll receive our curated picks weekly.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-midnight" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-sapphire/8 rounded-full blur-[150px]" />

      <div className="container-luxury relative z-10">
        {/* Compact, inline layout — NOT a big centered block */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 p-6 md:p-8 rounded-2xl border border-cream/8 bg-cream/[0.02]">
            <div className="flex-1">
              <h2 className="font-serif text-xl font-medium text-cream mb-1">
                Stay in the loop
              </h2>
              <p className="text-sm text-cream/40">
                Weekly creator spotlights and new product drops. No spam.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 flex-shrink-0"
            >
              <Input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 w-48 bg-cream/5 border-cream/10 text-cream placeholder:text-cream/25 focus:border-champagne focus:ring-champagne/20 text-sm"
                required
              />
              <Button
                type="submit"
                variant={isSubmitted ? "midnight" : "sapphire"}
                size="sm"
                className="h-10 px-4"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
