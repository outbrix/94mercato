import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AIAssistantWidget } from "@/components/ai/AIAssistantWidget";
import { AuthProvider } from "@/contexts/AuthContext";
import { RequireAdmin } from "@/components/admin/RequireAdmin";
import { RequireSeller } from "@/components/seller/RequireSeller";
import { RequireAuth } from "@/components/auth/RequireAuth";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { BackToTop } from "@/components/ui/BackToTop";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Eagerly load Index for fast initial render
import Index from "./pages/Index";

// Lazy load other pages
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Sell = lazy(() => import("./pages/Sell"));
const SellerOnboarding = lazy(() => import("./pages/SellerOnboarding"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const SellerDashboard = lazy(() => import("./pages/SellerDashboard"));
const DashboardUpload = lazy(() => import("./pages/DashboardUpload"));
const ProductEdit = lazy(() => import("./pages/ProductEdit"));
const BuyerDashboard = lazy(() => import("./pages/BuyerDashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const SellerProfile = lazy(() => import("./pages/SellerProfile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Forbidden = lazy(() => import("./pages/Forbidden"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PaymentCancel = lazy(() => import("./pages/PaymentCancel"));
const FreeDownloads = lazy(() => import("./pages/FreeDownloads"));
const SellerPromoCodes = lazy(() => import("./pages/seller/PromoCodes"));

// New Footer Pages
const Categories = lazy(() => import("./pages/Categories"));
const Sellers = lazy(() => import("./pages/Sellers"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Guidelines = lazy(() => import("./pages/Guidelines"));
const Careers = lazy(() => import("./pages/Careers"));
const Press = lazy(() => import("./pages/Press"));

// Legal Pages
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Cookie = lazy(() => import("./pages/Cookie"));
const Refund = lazy(() => import("./pages/Refund"));
const Legal = lazy(() => import("./pages/Legal"));
const License = lazy(() => import("./pages/License"));
const SellerPolicy = lazy(() => import("./pages/SellerPolicy"));
const AcceptableUse = lazy(() => import("./pages/AcceptableUse"));
const FAQ = lazy(() => import("./pages/FAQ"));

// Admin Pages
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminUsers = lazy(() => import("./pages/admin/AdminUsers"));
const AdminProducts = lazy(() => import("./pages/admin/AdminProducts"));
const AdminOrders = lazy(() => import("./pages/admin/AdminOrders"));
const AdminPayouts = lazy(() => import("./pages/admin/AdminPayouts"));
const AdminDisputes = lazy(() => import("./pages/admin/AdminDisputes"));
const AdminSettings = lazy(() => import("./pages/admin/AdminSettings"));
const AdminLogs = lazy(() => import("./pages/admin/AdminLogs"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-champagne border-t-transparent rounded-full animate-spin" />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Index />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:slug" element={<ProductDetail />} />
                    <Route path="/free" element={<FreeDownloads />} />
                    <Route path="/sell" element={<Sell />} />
                    <Route path="/sell/onboarding" element={
                      <RequireAuth>
                        <SellerOnboarding />
                      </RequireAuth>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/sellers" element={<Sellers />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/guidelines" element={<Guidelines />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/dashboard" element={
                      <RequireSeller>
                        <SellerDashboard />
                      </RequireSeller>
                    } />
                    <Route path="/dashboard/upload" element={
                      <RequireSeller>
                        <DashboardUpload />
                      </RequireSeller>
                    } />
                    <Route path="/dashboard/edit/:productId" element={
                      <RequireSeller>
                        <ProductEdit />
                      </RequireSeller>
                    } />
                    <Route path="/dashboard/promo-codes" element={
                      <RequireSeller>
                        <SellerPromoCodes />
                      </RequireSeller>
                    } />
                    <Route path="/purchases" element={
                      <RequireAuth>
                        <BuyerDashboard />
                      </RequireAuth>
                    } />
                    <Route path="/profile" element={
                      <RequireAuth>
                        <Profile />
                      </RequireAuth>
                    } />
                    <Route path="/seller/:displayName" element={<SellerProfile />} />
                    <Route path="/403" element={<Forbidden />} />
                    <Route path="/purchase/success" element={<PaymentSuccess />} />
                    <Route path="/purchase/cancel" element={<PaymentCancel />} />

                    {/* Legal Routes */}
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/cookie" element={<Cookie />} />
                    <Route path="/refund" element={<Refund />} />
                    <Route path="/legal" element={<Legal />} />
                    <Route path="/license" element={<License />} />
                    <Route path="/seller-policy" element={<SellerPolicy />} />
                    <Route path="/acceptable-use" element={<AcceptableUse />} />
                    <Route path="/faq" element={<FAQ />} />

                    {/* Admin Routes - Protected */}
                    <Route
                      path="/admin"
                      element={
                        <RequireAdmin>
                          <AdminDashboard />
                        </RequireAdmin>
                      }
                    />
                    <Route
                      path="/admin/users"
                      element={
                        <RequireAdmin>
                          <AdminUsers />
                        </RequireAdmin>
                      }
                    />
                    <Route
                      path="/admin/products"
                      element={
                        <RequireAdmin>
                          <AdminProducts />
                        </RequireAdmin>
                      }
                    />
                    <Route
                      path="/admin/orders"
                      element={
                        <RequireAdmin>
                          <AdminOrders />
                        </RequireAdmin>
                      }
                    />
                    <Route
                      path="/admin/payouts"
                      element={
                        <RequireAdmin>
                          <AdminPayouts />
                        </RequireAdmin>
                      }
                    />
                    <Route
                      path="/admin/disputes"
                      element={
                        <RequireAdmin>
                          <AdminDisputes />
                        </RequireAdmin>
                      }
                    />
                    <Route
                      path="/admin/settings"
                      element={
                        <RequireAdmin>
                          <AdminSettings />
                        </RequireAdmin>
                      }
                    />
                    <Route
                      path="/admin/logs"
                      element={
                        <RequireAdmin>
                          <AdminLogs />
                        </RequireAdmin>
                      }
                    />

                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
                <AIAssistantWidget />
                <CookieConsent />
                <BackToTop />
              </BrowserRouter>
            </TooltipProvider>
          </AuthProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
