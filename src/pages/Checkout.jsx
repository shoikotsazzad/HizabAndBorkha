import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCartStore } from '../store/cartStore';
import StepIndicator from '../components/checkout/StepIndicator';
import DeliveryForm from '../components/checkout/DeliveryForm';
import PaymentSelector from '../components/checkout/PaymentSelector';
import OrderSummary from '../components/cart/OrderSummary';
import CartItem from '../components/cart/CartItem';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);
  const { totals, clearCart } = useCartStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm({ defaultValues: { paymentMethod: 'cod' } });

  const onSubmit = (data) => {
    if (step < 3) {
      setStep((s) => s + 1);
    } else {
      const orderId = 'HB-' + Date.now();
      clearCart();
      navigate('/order-success', { state: { orderId, data, totals } });
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="text-5xl mb-4">🛒</p>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
        <a href="/shop" className="text-[#C9A84C] underline">Back to Shop</a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1
        className="text-3xl font-bold text-gray-800 mb-8 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Checkout
      </h1>

      <StepIndicator currentStep={step} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              {step === 1 && (
                <DeliveryForm register={register} errors={errors} />
              )}
              {step === 2 && (
                <PaymentSelector register={register} errors={errors} watch={watch} />
              )}
              {step === 3 && (
                <div>
                  <h2
                    className="text-xl font-bold text-gray-800 mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Review Your Order
                  </h2>
                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.key} className="flex gap-3 py-3 border-b border-gray-50">
                        <img src={item.image} alt={item.name} className="w-14 h-16 object-cover rounded-lg" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">{item.name}</p>
                          <p className="text-xs text-gray-500">Size: {item.size} · Qty: {item.qty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#ffffff] rounded-xl p-4 text-sm space-y-1">
                    <p className="font-semibold text-gray-700 mb-2">Delivery Address:</p>
                    <p className="text-gray-600">
                      {getValues('fullName')} · {getValues('phone')}
                    </p>
                    <p className="text-gray-600">
                      {getValues('address')}, {getValues('thana')}, {getValues('zila')}, {getValues('division')}
                    </p>
                    <p className="text-gray-600 mt-2">
                      Payment: <strong className="capitalize">{getValues('paymentMethod')}</strong>
                    </p>
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 bg-[#C9A84C] text-white py-3 rounded-xl font-semibold hover:bg-[#b8922e] transition-colors"
                >
                  {step === 3 ? 'Place Order' : 'Continue'}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Summary sidebar */}
        <div className="space-y-4">
          <OrderSummary showPromo={step === 1} />
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-xs text-gray-500 space-y-1 text-center">
            <p>🔒 Secure & safe checkout</p>
            <p>📦 Estimated delivery: 3–5 days (Dhaka), 5–7 days (outside)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
