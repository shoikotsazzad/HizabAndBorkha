import { useState } from 'react';
import { Tag, Truck, X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { taka } from '../../utils/formatCurrency';

export default function OrderSummary({ showPromo = true }) {
  const { totals, promoCode, promoError, applyPromo, removePromo } = useCartStore();
  const [code, setCode] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    applyPromo(code);
    setCode('');
  };

  return (
    <div className="bg-[#ffffff] rounded-2xl p-5 space-y-3">
      <h3 className="font-semibold text-gray-800">Order Summary</h3>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Subtotal</span>
        <span>{taka(totals.subtotal)}</span>
      </div>

      {totals.discount > 0 && (
        <div className="flex justify-between text-sm text-green-600">
          <span>Promo ({promoCode})</span>
          <span>-{taka(totals.discount)}</span>
        </div>
      )}

      <div className="flex justify-between text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <Truck size={14} />
          Delivery
        </span>
        <span className={totals.delivery === 0 ? 'text-green-600 font-medium' : ''}>
          {totals.delivery === 0 ? 'FREE' : taka(totals.delivery)}
        </span>
      </div>

      {totals.delivery > 0 && (
        <p className="text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
          Add {taka(1500 - totals.subtotal)} more for free delivery!
        </p>
      )}

      <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900">
        <span>Total</span>
        <span className="text-[#C9A84C] text-lg">{taka(totals.grand)}</span>
      </div>

      {/* Promo code */}
      {showPromo && (
        <div className="pt-2">
          {promoCode ? (
            <div className="flex items-center justify-between bg-[#ffffff] border border-green-200 rounded-xl px-3 py-2">
              <span className="text-green-700 text-sm flex items-center gap-1.5">
                <Tag size={13} />
                <strong>{promoCode}</strong> applied!
              </span>
              <button onClick={removePromo} className="text-green-600 hover:text-red-500">
                <X size={15} />
              </button>
            </div>
          ) : (
            <form onSubmit={handleApply} className="flex gap-2">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Promo code"
                className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#C9A84C]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#C9A84C] text-white rounded-xl text-sm font-medium hover:bg-[#b8922e] transition-colors"
              >
                Apply
              </button>
            </form>
          )}
          {promoError && <p className="text-xs text-red-500 mt-1">{promoError}</p>}
        </div>
      )}
    </div>
  );
}
