import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { getErrorMessage } from "@/types/api";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const user = await login(email, password);
      // Redirect based on role
      if (user.role === 'admin') {
        navigate("/admin");
      } else if (user.role === 'seller') {
        navigate("/dashboard");
      } else {
        navigate("/purchases");
      }
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

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
          navigate("/purchases");
        }
      } catch (err: unknown) {
        setError(getErrorMessage(err));
      }
    },
    onError: () => {
      setError("Google login failed");
    },
  });

  return (
    <>
      <Helmet>
        <title>Login — 94mercato</title>
        <meta
          name="description"
          content="Sign in to your 94mercato account to access your purchases, manage your products, and track your sales."
        />
      </Helmet>
      <Layout>
        <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-stone/30 to-background flex flex-col items-center justify-center">
          <div className="container-luxury w-full">
            <div className="max-w-md mx-auto">
              
              <div className="text-center mb-10 space-y-2">
                <h1 className="heading-large mb-3 text-foreground">Welcome Back</h1>
                <p className="text-muted-foreground font-medium">
                  Sign in to continue to your account
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
                    <Label htmlFor="email" className="font-medium text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="bg-background/50 border-border/50 transition-colors h-12 px-4 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="font-medium text-foreground">Password</Label>
                      <Link
                        to="/forgot-password"
                        className="text-xs font-semibold text-champagne hover:text-champagne/80 transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={isSubmitting}
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
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    className="w-full h-12 text-[15px] font-semibold tracking-wide shadow-lg shadow-champagne/20 mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Authenticating...</>
                    ) : (
                      "Sign In"
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
                    <span className="font-semibold text-foreground">Sign in with Google</span>
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-8">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-foreground hover:text-champagne transition-colors font-semibold underline decoration-border underline-offset-4 hover:decoration-champagne/40"
                  >
                    Create one here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Login;
