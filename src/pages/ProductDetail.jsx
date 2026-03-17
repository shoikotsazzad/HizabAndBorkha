import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2, Truck, Shield, RefreshCcw, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import StarRating from '../components/ui/StarRating';
import Badge from '../components/ui/Badge';
import ProductCard from '../components/product/ProductCard';
import { taka } from '../utils/formatCurrency';

const tabs = ['Description', 'Size Guide', 'Care', 'Reviews'];

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = product ? getRelatedProducts(product) : [];

  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((s) => s.addItem);
  const { toggle, isWishlisted } = useWishlistStore();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <p className="text-5xl mb-4">😕</p>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Product not found</h2>
        <Link to="/shop" className="text-[#C9A84C] underline">Back to Shop</Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addItem(product, product.colors[selectedColor], product.sizes[selectedSize], qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-[#C9A84C]">Home</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-[#C9A84C]">Shop</Link>
        <ChevronRight size={14} />
        <span className="text-gray-700 truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Images */}
        <div className="space-y-3">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50"
          >
            <img
              src={product.images[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-[#C9A84C]' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-5">
          <div>
            {product.badge && <Badge label={product.badge} className="mb-2" />}
            <h1
              className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h1>
            <p className="text-sm text-gray-400 mt-1">{product.nameBn}</p>
          </div>

          <div className="flex items-center gap-3">
            <StarRating rating={product.rating} reviews={product.reviews} size={16} />
            <span className="text-sm text-gray-400">|</span>
            <span className={`text-sm font-medium ${product.stock <= 5 ? 'text-orange-500' : 'text-green-600'}`}>
              {product.stock <= 5 ? `Only ${product.stock} left!` : 'In Stock'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="text-3xl font-bold text-[#C9A84C]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {taka(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-gray-400 line-through">{taka(product.originalPrice)}</span>
                <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-0.5 rounded">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          <div className="text-sm text-gray-500">
            Fabric: <span className="font-medium text-gray-700">{product.fabric}</span>
          </div>

          {/* Color */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Color: <span className="font-bold">{product.colors[selectedColor]}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  title={c}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === i ? 'border-[#C9A84C] scale-110' : 'border-gray-200'
                  }`}
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(i)}
                  className={`px-4 py-2 rounded-xl border text-sm font-medium transition-colors ${
                    selectedSize === i
                      ? 'bg-[#C9A84C] text-white border-[#C9A84C]'
                      : 'border-gray-200 text-gray-700 hover:border-[#C9A84C]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty */}
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium text-gray-700">Quantity</p>
            <div className="flex items-center border border-gray-200 rounded-full">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full text-lg transition-colors"
              >
                −
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full text-lg transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Success toast */}
          {added && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 bg-[#1a1a1a] text-[#C9A84C] px-4 py-3 rounded-xl text-sm font-semibold border border-[#C9A84C]/30"
            >
              <ShoppingCart size={16} />
              Item added to your cart successfully!
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all ${
                added
                  ? 'bg-[#1a1a1a] text-[#C9A84C] border border-[#C9A84C]/40'
                  : 'bg-[#C9A84C] text-white hover:bg-[#b8922e]'
              }`}
            >
              <ShoppingCart size={18} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>
            <button
              onClick={() => toggle(product)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl border-2 transition-colors ${
                wishlisted ? 'border-red-500 bg-red-50 text-red-500' : 'border-gray-200 text-gray-500 hover:border-red-200'
              }`}
            >
              <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Delivery info */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-2.5">
            {[
              { icon: <Truck size={16} />, text: 'Free delivery on orders above ৳1,500 | ৳80 for Dhaka' },
              { icon: <Shield size={16} />, text: 'Quality guaranteed — return within 7 days' },
              { icon: <RefreshCcw size={16} />, text: 'Exchange available for size issues' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                <span className="text-[#C9A84C] shrink-0">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-16">
        <div className="flex border-b border-gray-200 mb-6 gap-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-5 py-3 text-sm font-medium transition-colors ${
                activeTab === t
                  ? 'text-[#C9A84C] border-b-2 border-[#C9A84C]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          {activeTab === 'Description' && <p>{product.description}</p>}
          {activeTab === 'Size Guide' && (
            <div className="overflow-x-auto">
              <table className="text-sm border-collapse w-full">
                <thead>
                  <tr className="bg-gray-50">
                    {['Size', 'Chest (inch)', 'Length (inch)', 'Suitable For'].map((h) => (
                      <th key={h} className="border border-gray-200 px-4 py-2 text-left font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['S', '36–38', '54–56', 'বাংলাদেশ S'],
                    ['M', '38–40', '56–58', 'বাংলাদেশ M'],
                    ['L', '40–42', '58–60', 'বাংলাদেশ L'],
                    ['XL', '42–44', '60–62', 'বাংলাদেশ XL'],
                    ['XXL', '44–46', '62–64', 'বাংলাদেশ XXL'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className="border border-gray-200 px-4 py-2">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'Care' && (
            <ul className="space-y-2 list-disc list-inside">
              <li>Machine wash cold (30°C) — delicate cycle</li>
              <li>Do not bleach</li>
              <li>Tumble dry low or hang dry in shade</li>
              <li>Iron on low heat if needed</li>
              <li>Store folded in a cool, dry place</li>
            </ul>
          )}
          {activeTab === 'Reviews' && (
            <p className="text-gray-500">Reviews are coming soon. Be the first to review this product!</p>
          )}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div>
          <h2
            className="text-2xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
