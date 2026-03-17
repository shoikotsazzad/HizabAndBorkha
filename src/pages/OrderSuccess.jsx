import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import { taka } from '../utils/formatCurrency';

export default function OrderSuccess() {
  const { state } = useLocation();
  const orderId = state?.orderId || 'HB-' + Date.now();
  const totals = state?.totals;
  const data = state?.data;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="w-24 h-24 bg-[#e0c97a]/20 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle size={48} className="text-[#C9A84C]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1
          className="text-3xl font-bold text-gray-800 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          অর্ডার সম্পন্ন হয়েছে!
        </h1>
        <p className="text-gray-500 mb-2">Order placed successfully. JazakAllah Khair!</p>
        <div className="inline-block bg-[#ffffff] border border-[#C9A84C]/20 rounded-xl px-6 py-3 mb-8">
          <p className="text-xs text-gray-500 mb-0.5">Your Order ID</p>
          <p className="text-xl font-bold text-[#C9A84C]">{orderId}</p>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-0 mb-8">
          {[
            { icon: <CheckCircle size={20} />, label: 'Order Confirmed', done: true },
            { icon: <Package size={20} />, label: 'Being Packed', done: false },
            { icon: <Truck size={20} />, label: 'On the Way', done: false },
            { icon: <Home size={20} />, label: 'Delivered', done: false },
          ].map((s, i, arr) => (
            <div key={s.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    s.done ? 'bg-[#C9A84C] text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {s.icon}
                </div>
                <p className={`text-[10px] mt-1.5 w-16 text-center ${s.done ? 'text-[#C9A84C] font-medium' : 'text-gray-400'}`}>
                  {s.label}
                </p>
              </div>
              {i < arr.length - 1 && (
                <div className={`w-12 h-0.5 mx-1 mb-5 ${s.done ? 'bg-[#C9A84C]' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left mb-8 space-y-3">
          {totals && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Order Total</span>
              <span className="font-bold text-[#C9A84C]">{taka(totals.grand)}</span>
            </div>
          )}
          {data?.paymentMethod && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Payment Method</span>
              <span className="font-medium capitalize">{data.paymentMethod}</span>
            </div>
          )}
          {data?.division && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Estimated Delivery</span>
              <span className="font-medium">
                {data.division === 'Dhaka' ? '3–5 business days' : '5–7 business days'}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            আপনার অর্ডার ট্র্যাক করতে WhatsApp করুন: <strong>01712-345678</strong>
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/shop"
              className="px-6 py-3 bg-[#C9A84C] text-white rounded-xl font-medium hover:bg-[#b8922e] transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
