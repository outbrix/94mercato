
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";
import { Loader2, ArrowLeft, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Debug Alert to confirm handler fires and show URL
        window.alert(`Submitting to: ${import.meta.env.VITE_API_URL}\nCheck Console for details.`);
        console.log("🚀 Submitting Forgot Password Request");
        console.log("🌍 API URL:", import.meta.env.VITE_API_URL);

        try {
            await api.post("/auth/forgot-password", { email });
            setIsSent(true);
            toast({
                title: "Reset link sent",
                description: "Check your email for the password reset link.",
            });
        } catch (error: any) {
            if (error.response?.status === 404) {
                toast({
                    title: "Account not found",
                    description: "No account found with this email. Redirecting to sign up...",
                    variant: "destructive",
                });
                setTimeout(() => navigate("/signup"), 2000);
            } else {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || "Something went wrong.",
                    variant: "destructive",
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Helmet>
                <title>Forgot Password — 94mercato</title>
            </Helmet>
            <Card className="w-full max-w-md glass-card-elevated border-sapphire/20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sapphire to-champagne bg-clip-text text-transparent">
                        Forgot password?
                    </CardTitle>
                    <CardDescription>
                        Enter your email address to reset your password.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {!isSent ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-9 bg-background/50"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-sapphire hover:bg-sapphire/90 text-white"
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
                    ) : (
                        <div className="text-center space-y-4 animate-fade-in">
                            <div className="h-12 w-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">Check your email</h3>
                                <p className="text-sm text-muted-foreground">
                                    We have sent a password reset link to <span className="font-medium text-foreground">{email}</span>
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => setIsSent(false)}
                            >
                                Try another email
                            </Button>
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Link
                        to="/login"
                        className="w-full text-center text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 group"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to login
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
