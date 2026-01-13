import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

/**
 * Protected route wrapper that requires the user to be logged in as a seller.
 * Redirects to /login if not authenticated, or /403 if not a seller.
 */
export const RequireSeller = ({ children }: { children: JSX.Element }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    // Wait for auth to initialize
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-2 border-champagne border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-muted-foreground">Loading...</span>
                </div>
            </div>
        );
    }

    // Not logged in - redirect to login
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Logged in but not a seller (and not admin) - redirect to forbidden
    if (user.role !== "seller" && user.role !== "admin") {
        return <Navigate to="/403" replace />;
    }

    return children;
};
