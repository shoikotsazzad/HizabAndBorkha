import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';

export default function Cart() {
  const items = useCartStore((s) => s.items);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1
        className="text-3xl font-bold text-gray-800 mb-8"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Shopping Cart
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-24">
          <ShoppingBag size={64} className="text-gray-200 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Add some beautiful products to your cart!</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white rounded-xl font-medium hover:bg-[#b8922e] transition-colors"
          >
            Continue Shopping <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-4">{items.reduce((s, i) => s + i.qty, 0)} items in cart</p>
            {items.map((item) => (
              <CartItem key={item.key} item={item} />
            ))}
            <div className="mt-4">
              <Link
                to="/shop"
                className="text-[#C9A84C] text-sm hover:underline flex items-center gap-1"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <OrderSummary showPromo={true} />
            <Link
              to="/checkout"
              className="block w-full text-center bg-[#C9A84C] text-white py-4 rounded-xl font-semibold hover:bg-[#b8922e] transition-colors"
            >
              Proceed to Checkout
            </Link>
            <div className="text-center text-xs text-gray-400">
              Secure checkout · Free returns · Halal brand
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
