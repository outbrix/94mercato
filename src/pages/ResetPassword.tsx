
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";
import { Loader2, ArrowLeft, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ResetPassword() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();



    if (!token) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <Card className="w-full max-w-md border-destructive/20 bg-destructive/5">
                    <CardHeader>
                        <CardTitle className="text-destructive">Invalid Link</CardTitle>
                        <CardDescription>
                            This password reset link is invalid or missing.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Link to="/forgot-password">
                            <Button variant="outline">Request a new link</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            toast({
                title: "Passwords do not match",
                variant: "destructive",
            });
            return;
        }

        if (formData.newPassword.length < 8) {
            toast({
                title: "Password too short",
                description: "Password must be at least 8 characters long.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            await api.post("/auth/reset-password", {
                token,
                newPassword: formData.newPassword,
            });
            setIsSuccess(true);
            toast({
                title: "Password Reset Successful",
                description: "You can now login with your new password.",
            });
            setTimeout(() => navigate("/login"), 3000);
        } catch (error: unknown) {
            const axiosErr = error as { response?: { data?: { message?: string } } };
            toast({
                title: "Reset Failed",
                description: axiosErr.response?.data?.message || "This link may have expired.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Helmet>
                <title>Reset Password — 94mercato</title>
            </Helmet>
            <Card className="w-full max-w-md glass-card-elevated border-sapphire/20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sapphire to-champagne bg-clip-text text-transparent">
                        Set new password
                    </CardTitle>
                    <CardDescription>
                        Create a strong password for your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {!isSuccess ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="newPassword"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Min. 8 characters"
                                        value={formData.newPassword}
                                        onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                                        className="pl-9 pr-10 bg-background/50"
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="confirmPassword"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Re-enter password"
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
                                        Resetting...
                                    </>
                                ) : (
                                    "Reset Password"
                                )}
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center space-y-4 animate-fade-in">
                            <div className="h-12 w-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">All set!</h3>
                                <p className="text-sm text-muted-foreground">
                                    Your password has been successfully reset. Redirecting you to login...
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => navigate("/login")}
                            >
                                Continue to Login
                            </Button>
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    {!isSuccess && (
                        <Link
                            to="/login"
                            className="w-full text-center text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to login
                        </Link>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
