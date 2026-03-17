import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X, Sparkles } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';
import CartDrawer from '../cart/CartDrawer';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const cartItems = useCartStore((s) => s.items);
  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const wishCount = useWishlistStore((s) => s.items.length);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#111111] shadow-lg' : 'bg-[#1a1a1a]'
        }`}
      >
        {/* Top promo bar */}
        <div className="bg-[#C9A84C] text-[#1a1a1a] text-center text-xs py-2 px-4">
          ৳1500+ অর্ডারে ফ্রি ডেলিভারি 🚚 &nbsp;|&nbsp; Use code <strong>EID20</strong> for 20% off
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center shadow-sm">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-bold text-xl tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Nuraniya
                </span>
                <span className="text-[10px] text-white/70 tracking-widest uppercase">
                  Modest Fashion BD
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-white/80 ${
                      isActive ? 'text-white border-b-2 border-white/60 pb-0.5' : 'text-white/90'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                <Search size={20} />
              </button>

              <Link
                to="/wishlist"
                className="relative p-2 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                <Heart size={20} />
                {wishCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                    {wishCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#1a1a1a] text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/20 text-white"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <form onSubmit={handleSearch} className="pb-3">
              <div className="flex gap-2">
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search hijab, burkha, abaya..."
                  className="flex-1 px-4 py-2 border border-white/30 bg-white/10 text-white placeholder-white/60 rounded-full text-sm focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1a1a1a] text-[#C9A84C] rounded-full text-sm font-semibold hover:bg-black transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#111111] border-t border-white/20 px-4 py-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-sm font-medium border-b border-white/20 ${
                    isActive ? 'text-white' : 'text-white/80'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* Spacer for fixed header + promo bar */}
      <div className="h-[88px]" />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
