import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

export default function CartDrawer({ open, onClose }) {
  const items = useCartStore((s) => s.items);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50"
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 flex items-center gap-2">
                <ShoppingBag size={18} className="text-[#C9A84C]" />
                My Cart
                {items.length > 0 && (
                  <span className="text-xs bg-[#C9A84C] text-white px-2 py-0.5 rounded-full">
                    {items.reduce((s, i) => s + i.qty, 0)} items
                  </span>
                )}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <ShoppingBag size={56} className="text-gray-200 mb-4" />
                  <p className="text-gray-500 font-medium">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-1">Discover our beautiful collection</p>
                  <Link
                    to="/shop"
                    onClick={onClose}
                    className="mt-6 px-6 py-3 bg-[#C9A84C] text-white rounded-xl text-sm font-medium hover:bg-[#b8922e] transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <div className="py-4">
                  {items.map((item) => (
                    <CartItem key={item.key} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-5 pb-6 pt-3 border-t border-gray-100 space-y-3">
                <OrderSummary showPromo={false} />
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="block w-full text-center bg-[#C9A84C] text-white py-3.5 rounded-xl font-semibold hover:bg-[#b8922e] transition-colors"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="block w-full text-center border border-[#C9A84C] text-[#C9A84C] py-3 rounded-xl text-sm font-medium hover:bg-[#C9A84C] hover:text-white transition-colors"
                >
                  View Full Cart
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
