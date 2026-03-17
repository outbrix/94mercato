import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SearchModal } from '@/components/ui/SearchModal';
import { Search, ShoppingBag, Menu, X, User, LogIn, LogOut, Crown, LayoutDashboard, ArrowUpRight, Heart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { CurrencySwitcher } from './CurrencySwitcher';
import FuzzyText from '@/components/ui/FuzzyText';

const Logo = () => (
  <Link to="/" className="group flex items-center pr-4 border-r border-white/10 hover:border-transparent transition-colors duration-300">
    <FuzzyText 
      baseIntensity={0.02}
      hoverIntensity={0.08}
      fuzzRange={8}
      enableHover
      fontSize="1.8rem"
      fontWeight={900}
      fontFamily="Cinzel"
      gradient={["#846733", "#dfc5a4", "#846733"]} // Deep gold to Champagne to Deep gold
      className="tracking-[-0.05em]"
    >
      94MERCATO
    </FuzzyText>
  </Link>
);

const Navigation = ({ links }) => (
  <nav className="hidden lg:flex items-center gap-1">
    {links.map((link) => (
      <NavLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive
            ? 'bg-sapphire/20 text-champagne'
            : 'text-cream/70 hover:text-cream hover:bg-sapphire/10'
          }`
        }
      >
        {link.label}
      </NavLink>
    ))}
  </nav>
);

const HeaderActions = ({ onSearchClick }: { onSearchClick: () => void }) => {
  const { user, logout } = useAuth();
  const { items: cartItems } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalWishlistItems = wishlistItems.length;

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        size="icon"
        className="text-cream/70 hover:text-cream hover:bg-sapphire/10"
        onClick={onSearchClick}
      >
        <Search className="h-5 w-5" />
      </Button>
      
      <Link to="/wishlist">
        <Button variant="ghost" size="icon" className="relative text-cream/70 hover:text-cream hover:bg-sapphire/10">
          <Heart className="h-5 w-5" />
          {totalWishlistItems > 0 &&
            <Badge className="absolute -top-1 -right-1 h-4 w-4 justify-center p-0 text-xs bg-red-500 text-white border-none">{totalWishlistItems}</Badge>
          }
        </Button>
      </Link>

      <Link to="/cart">
        <Button variant="ghost" size="icon" className="relative text-cream/70 hover:text-cream hover:bg-sapphire/10">
          <ShoppingBag className="h-5 w-5" />
          {totalCartItems > 0 &&
            <Badge className="absolute -top-1 -right-1 h-4 w-4 justify-center p-0 text-xs bg-champagne text-black">{totalCartItems}</Badge>
          }
        </Button>
      </Link>
      {user ? (
        <div className="flex items-center gap-2">
          <Link to="/profile" className="flex items-center gap-2 pl-2 hover:opacity-80 transition-opacity">
            {user.avatar_url ? (
              <img src={user.avatar_url} alt={user.display_name} className="h-8 w-8 rounded-full border-2 border-champagne/50 object-cover" />
            ) : (
              <div className="h-8 w-8 rounded-full border-2 border-champagne/50 bg-sapphire/30 flex items-center justify-center">
                <User className="h-4 w-4 text-cream" />
              </div>
            )}
            <div className="hidden md:block">
              <p className="text-sm font-medium text-cream">{user.display_name || user.name}</p>
              <p className="text-xs capitalize text-cream/60">{user.role}</p>
            </div>
          </Link>
          <Button variant="ghost" size="icon" onClick={logout} className="text-cream/70 hover:text-cream hover:bg-sapphire/10">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <Button asChild variant="champagne" className="hidden lg:flex">
          <Link to="/login">
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Link>
        </Button>
      )}
      <div className="lg:hidden">
        {/* Mobile Menu Toggle will be handled in the main component */}
      </div>
    </div>
  );
};

const MobileNavLink = ({ to, children, closeMenu }) => (
  <Link
    to={to}
    onClick={closeMenu}
    className="flex items-center gap-4 rounded-lg p-3 text-lg font-medium text-cream transition-colors hover:bg-white/10"
  >
    {children}
  </Link>
);

const getNavigationLinks = (user) => [
  { to: '/products', label: 'Products' },
  // Show "Sell" only to buyers or non-logged-in users (sellers/admins already have dashboard)
  ...((user?.role !== 'seller' && user?.role !== 'admin') ? [{ to: '/sell', label: 'Sell' }] : []),
  ...(user ? [{ to: '/purchases', label: 'Purchases' }] : []),
  ...((user?.role === 'seller' || user?.role === 'admin') ? [{ to: '/dashboard', label: 'Dashboard' }] : []),
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  ...(user?.role === 'admin' ? [{ to: '/admin', label: 'Admin' }] : []),
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const navLinks = getNavigationLinks(user);

  useEffect(() => {
    setMobileMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  const headerClasses = "fixed top-0 left-0 right-0 z-50 h-16 bg-midnight border-b border-sapphire/20";
  const containerClasses = "container-luxury flex items-center justify-between h-full";

  return (
    <>
      <header className={headerClasses}>
        <div className={containerClasses}>
          <Logo />
          <Navigation links={navLinks} />
          <div className="flex items-center gap-2">
            <CurrencySwitcher />
            <HeaderActions onSearchClick={() => setSearchOpen(true)} />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-cream"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-0 z-[60] bg-midnight/95 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-300 lg:hidden"
          >
            <div className="container-luxury h-full flex flex-col pt-24 pb-12">
              <div className="flex justify-between items-center mb-12">
                <Logo />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-cream"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-8 w-8" />
                </Button>
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-6 border-b border-white/5"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-mono text-champagne/40">0{i + 1}</span>
                      <span className="text-3xl font-sans font-black text-cream uppercase tracking-tighter group-active:text-champagne transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-cream/20 group-hover:text-champagne transition-colors" />
                  </Link>
                ))}
              </div>

              <div className="pt-12 mt-auto border-t border-white/10 flex items-center justify-between">
                {!user ? (
                   <Link 
                    to="/login" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-8 py-4 bg-champagne text-midnight font-black text-xs tracking-widest uppercase rounded-full"
                   >
                     Login / Join
                   </Link>
                ) : (
                  <div className="flex items-center gap-4">
                    <img src={user.avatar_url || ""} alt="" className="w-10 h-10 rounded-full border border-white/10" />
                    <div>
                      <p className="text-sm font-bold text-cream">{user.display_name}</p>
                      <button onClick={logout} className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white">Sign Out</button>
                    </div>
                  </div>
                )}
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <Search className="w-4 h-4 text-cream/50" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
