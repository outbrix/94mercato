import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordStrength } from "@/components/ui/PasswordStrength";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader2, Eye, EyeOff, KeyRound, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ResetPassword = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isValidSession, setIsValidSession] = useState<boolean | null>(null);

    useEffect(() => {
        // Check if we have a valid session (user came from password reset email)
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setIsValidSession(!!session);
        };

        // Listen for auth state changes (handles the token exchange from the reset link)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'PASSWORD_RECOVERY') {
                setIsValidSession(true);
            } else if (session) {
                setIsValidSession(true);
            }
        });

        checkSession();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validation
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsSubmitting(true);

        try {
            const { error: updateError } = await supabase.auth.updateUser({
                password: password
            });

            if (updateError) {
                setError(updateError.message);
            } else {
                setIsSuccess(true);
                // Sign out the user so they can log in with the new password
                await supabase.auth.signOut();
                // Redirect to login after 3 seconds
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
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
                <title>Reset Password — 94mercato</title>
                <meta
                    name="description"
                    content="Create a new password for your 94mercato account."
                />
            </Helmet>
            <Layout>
                <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-stone/30 to-background">
                    <div className="container-luxury">
                        <div className="max-w-md mx-auto">
                            <div className="text-center mb-10">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-champagne/10 flex items-center justify-center">
                                    <KeyRound className="w-8 h-8 text-champagne" />
                                </div>
                                <h1 className="heading-large mb-3">Reset Password</h1>
                                <p className="text-muted-foreground">
                                    Create a new password for your account
                                </p>
                            </div>

                            <div className="glass-card-elevated p-8">
                                {isSuccess ? (
                                    <div className="text-center space-y-6">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                                            <CheckCircle className="w-8 h-8 text-green-500" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-semibold mb-2">Password Reset Successful</h2>
                                            <p className="text-muted-foreground text-sm">
                                                Your password has been updated. Redirecting you to login...
                                            </p>
                                        </div>
                                        <Link
                                            to="/login"
                                            className="inline-block text-champagne hover:underline text-sm"
                                        >
                                            Click here if not redirected
                                        </Link>
                                    </div>
                                ) : isValidSession === null ? (
                                    <div className="text-center space-y-6">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-champagne/10 flex items-center justify-center">
                                            <Loader2 className="w-8 h-8 text-champagne animate-spin" />
                                        </div>
                                        <p className="text-muted-foreground">Validating your reset link...</p>
                                    </div>
                                ) : !isValidSession ? (
                                    <div className="text-center space-y-6">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
                                            <AlertCircle className="w-8 h-8 text-red-500" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-semibold mb-2">Invalid Reset Link</h2>
                                            <p className="text-muted-foreground text-sm">
                                                This password reset link is invalid or has expired.
                                            </p>
                                        </div>
                                        <Link
                                            to="/forgot-password"
                                            className="inline-block"
                                        >
                                            <Button variant="luxury" size="lg">
                                                Request New Link
                                            </Button>
                                        </Link>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {error && (
                                            <div className="bg-red-500/10 border border-red-500/20 text-red-700 p-3 rounded-md text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <Label htmlFor="password">New Password</Label>
                                            <div className="relative">
                                                <Input
                                                    id="password"
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="••••••••"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="h-4 w-4" />
                                                    ) : (
                                                        <Eye className="h-4 w-4" />
                                                    )}
                                                </button>
                                            </div>
                                            <PasswordStrength password={password} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                            <div className="relative">
                                                <Input
                                                    id="confirmPassword"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    placeholder="••••••••"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                >
                                                    {showConfirmPassword ? (
                                                        <EyeOff className="h-4 w-4" />
                                                    ) : (
                                                        <Eye className="h-4 w-4" />
                                                    )}
                                                </button>
                                            </div>
                                            {confirmPassword && password !== confirmPassword && (
                                                <p className="text-xs text-red-500">Passwords do not match</p>
                                            )}
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="luxury"
                                            className="w-full"
                                            size="lg"
                                            disabled={isSubmitting || password !== confirmPassword}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Resetting...
                                                </>
                                            ) : (
                                                "Reset Password"
                                            )}
                                        </Button>
                                    </form>
                                )}

                                {!isSuccess && isValidSession && (
                                    <div className="mt-8 text-center">
                                        <Link
                                            to="/login"
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            Remember your password? Sign in
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default ResetPassword;
