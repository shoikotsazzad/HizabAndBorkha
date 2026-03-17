import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';
import StarRating from '../ui/StarRating';
import Badge from '../ui/Badge';
import { taka } from '../../utils/formatCurrency';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const { toggle, isWishlisted } = useWishlistStore();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, product.colors[0], product.sizes[0]);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              hovered ? 'scale-110' : 'scale-100'
            }`}
            loading="lazy"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.badge && <Badge label={product.badge} />}
            {discount && (
              <span className="inline-block px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded">
                -{discount}%
              </span>
            )}
            {product.stock <= 5 && (
              <span className="inline-block px-2 py-0.5 bg-orange-500 text-white text-[10px] font-bold rounded">
                Only {product.stock} left!
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={(e) => { e.preventDefault(); toggle(product); }}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              wishlisted
                ? 'bg-red-500 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-red-50 hover:text-red-500 opacity-0 group-hover:opacity-100'
            }`}
          >
            <Heart size={14} fill={wishlisted ? 'currentColor' : 'none'} />
          </button>

          {/* Quick actions */}
          <div
            className={`absolute bottom-0 left-0 right-0 flex gap-2 p-3 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#C9A84C] text-white py-2 rounded-xl text-xs font-semibold hover:bg-[#b8922e] transition-colors"
            >
              <ShoppingCart size={13} />
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="w-9 flex items-center justify-center bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Eye size={15} />
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">{product.fabric}</p>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 leading-snug">
            {product.name}
          </h3>
          <StarRating rating={product.rating} reviews={product.reviews} size={12} />
          <div className="flex items-center gap-2 mt-2">
            <span className="text-base font-bold text-[#C9A84C]">{taka(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">{taka(product.originalPrice)}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
