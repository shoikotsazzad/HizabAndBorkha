import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { taka } from '../../utils/formatCurrency';

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCartStore();

  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-24 object-cover rounded-xl shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">{item.name}</p>
        <div className="flex gap-2 mt-1">
          <span className="text-xs text-gray-400">Size: {item.size}</span>
          <span className="text-xs text-gray-400">•</span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            Color:
            <span
              className="inline-block w-3 h-3 rounded-full border border-gray-200"
              style={{ background: item.color }}
            />
          </span>
        </div>
        <p className="text-sm font-bold text-[#C9A84C] mt-1">{taka(item.price)}</p>
        <div className="flex items-center justify-between mt-2">
          {/* Qty control */}
          <div className="flex items-center border border-gray-200 rounded-full">
            <button
              onClick={() => updateQty(item.key, item.qty - 1)}
              className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="w-7 text-center text-sm font-medium">{item.qty}</span>
            <button
              onClick={() => updateQty(item.key, item.qty + 1)}
              className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.key)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
