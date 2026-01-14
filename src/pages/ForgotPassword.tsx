import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Loader2, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });

            if (resetError) {
                setError(resetError.message);
            } else {
                setIsSuccess(true);
            }
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Forgot Password — 94mercato</title>
                <meta
                    name="description"
                    content="Reset your 94mercato password. Enter your email address and we'll send you a link to reset your password."
                />
            </Helmet>
            <Layout>
                <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-stone/30 to-background">
                    <div className="container-luxury">
                        <div className="max-w-md mx-auto">
                            <div className="text-center mb-10">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-champagne/10 flex items-center justify-center">
                                    <Mail className="w-8 h-8 text-champagne" />
                                </div>
                                <h1 className="heading-large mb-3">Forgot Password?</h1>
                                <p className="text-muted-foreground">
                                    No worries, we'll send you reset instructions
                                </p>
                            </div>

                            <div className="glass-card-elevated p-8">
                                {isSuccess ? (
                                    <div className="text-center space-y-6">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                                            <CheckCircle className="w-8 h-8 text-green-500" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-semibold mb-2">Check your email</h2>
                                            <p className="text-muted-foreground text-sm">
                                                We've sent a password reset link to{" "}
                                                <span className="text-foreground font-medium">{email}</span>
                                            </p>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            Didn't receive the email? Check your spam folder or{" "}
                                            <button
                                                onClick={() => setIsSuccess(false)}
                                                className="text-champagne hover:underline"
                                            >
                                                try again
                                            </button>
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {error && (
                                            <div className="bg-red-500/10 border border-red-500/20 text-red-700 p-3 rounded-md text-sm">
                                                {error}
                                            </div>
                                        )}
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email address</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="luxury"
                                            className="w-full"
                                            size="lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Reset Link"
                                            )}
                                        </Button>
                                    </form>
                                )}

                                <div className="mt-8 text-center">
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default ForgotPassword;
