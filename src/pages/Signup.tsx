import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PasswordStrength } from "@/components/ui/PasswordStrength";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, CheckCircle, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { getErrorMessage } from "@/types/api";
import { useSettings } from "@/hooks/use-settings";
import { useGoogleLogin } from "@react-oauth/google";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isSeller: false,
  });
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { commissionRate } = useSettings();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const user = await loginWithGoogle(tokenResponse.access_token);
        
        // Redirect based on role
        if (user.role === 'admin') {
          navigate("/admin");
        } else if (user.role === 'seller') {
          navigate("/dashboard");
        } else {
          // Buyers go to home page
          navigate("/purchases");
        }
      } catch (err: unknown) {
        setError(getErrorMessage(err));
      }
    },
    onError: () => {
      setError("Google signup failed");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setIsSubmitting(true);

    try {
      await signup({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        display_name: formData.name,
        role: formData.isSeller ? 'seller' : 'buyer',
      });
      if (formData.isSeller) {
        navigate("/sell/onboarding");
      } else {
        navigate("/purchases");
      }
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>
      <Helmet>
        <title>Create Account — 94mercato</title>
        <meta
          name="description"
          content="Join 94mercato to discover premium digital products or start selling your creative work to thousands of customers."
        />
      </Helmet>
      <Layout>
        <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-stone/30 to-background flex flex-col items-center justify-center">
          <div className="container-luxury w-full">
            <div className="max-w-[460px] mx-auto">
              
              <div className="text-center mb-10 space-y-2">
                <h1 className="heading-large mb-3 text-foreground">Join 94mercato</h1>
                <p className="text-muted-foreground font-medium">
                  Create your account in seconds
                </p>
              </div>

              <div className="glass-card-elevated p-8 sm:p-10 rounded-3xl border border-border/50 shadow-xl bg-card/60 backdrop-blur-xl">

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm flex items-center gap-2 animate-fade-in shadow-inner">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                      {error}
                    </div>
                  )}

                  <div className="space-y-2.5">
                    <Label htmlFor="name" className="font-medium text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      disabled={isSubmitting}
                      maxLength={50}
                      className="bg-background/50 border-border/50 transition-colors h-12 px-4 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <Label htmlFor="email" className="font-medium text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      disabled={isSubmitting}
                      maxLength={100}
                      className="bg-background/50 border-border/50 transition-colors h-12 px-4 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <Label htmlFor="password" className="font-medium text-foreground">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                        maxLength={128}
                        className="bg-background/50 border-border/50 transition-colors h-12 px-4 shadow-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <PasswordStrength password={formData.password} />
                  </div>

                  {/* Seller Option */}
                  <div className="rounded-xl border border-border/50 bg-background/30 p-4 mt-2 transition-colors hover:bg-background/50">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="seller"
                        checked={formData.isSeller}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, isSeller: checked as boolean })
                        }
                        disabled={isSubmitting}
                        className="mt-1"
                      />
                      <div className="space-y-1.5">
                        <Label htmlFor="seller" className="font-semibold cursor-pointer text-foreground">
                          I want to sell my products
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Get a seller dashboard and keep {100 - Number(commissionRate)}% of every sale.
                        </p>
                      </div>
                    </div>
                  </div>

                  {formData.isSeller && (
                    <div className="bg-gradient-to-r from-champagne/10 to-transparent border-l-2 border-champagne rounded-r-lg p-4 space-y-2 animate-fade-in">
                      <p className="text-sm font-semibold flex items-center gap-2 text-foreground">
                        <CheckCircle className="h-4 w-4 text-champagne" />
                        Creator Benefits Active
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1.5 ml-6">
                        <li>• Only {commissionRate}% commission per sale</li>
                        <li>• Advanced analytics & insights tools</li>
                        <li>• Fast payouts securely handled via Stripe</li>
                      </ul>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="luxury"
                    className="w-full h-12 text-[15px] font-semibold tracking-wide shadow-lg shadow-champagne/20 mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...</>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </form>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/50" />
                  </div>
                  <div className="relative flex justify-center text-[11px] uppercase tracking-wider font-bold">
                    <span className="bg-card px-3 text-muted-foreground rounded-full border border-border/50 py-0.5">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="w-full relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-champagne/40 to-sapphire/40 rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                  <Button 
                    variant="outline" 
                    className="relative w-full h-12 bg-background hover:bg-muted border-border/50 shadow-sm transition-all duration-300" 
                    onClick={() => handleGoogleLogin()}
                    type="button"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="font-semibold text-foreground">Sign up with Google</span>
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-8">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-foreground hover:text-champagne transition-colors font-semibold underline decoration-border underline-offset-4 hover:decoration-champagne/40"
                  >
                    Sign in here
                  </Link>
                </p>

                <p className="text-center text-[11px] text-muted-foreground mt-5 font-medium">
                  By joining, you agree to our{" "}
                  <Link to="/terms" className="underline decoration-border hover:text-foreground">Terms</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="underline decoration-border hover:text-foreground">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Signup;
