import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';
import ProductCard from '../components/product/ProductCard';

export default function Wishlist() {
  const items = useWishlistStore((s) => s.items);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1
        className="text-3xl font-bold text-gray-800 mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        My Wishlist
      </h1>
      <p className="text-gray-500 mb-8">{items.length} saved items</p>

      {items.length === 0 ? (
        <div className="text-center py-24">
          <Heart size={64} className="text-gray-200 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-400 mb-8">Save products you love for later</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white rounded-xl font-medium hover:bg-[#b8922e] transition-colors"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
