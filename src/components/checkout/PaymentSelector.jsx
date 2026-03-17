import { useState } from 'react';
import { CreditCard, Smartphone, Package } from 'lucide-react';

const mobilePayments = [
  {
    id: 'bkash',
    name: 'bKash',
    merchant: '01712-345678',
    color: '#E2146C',
    bg: '#fce4ef',
  },
  {
    id: 'nagad',
    name: 'Nagad',
    merchant: '01811-234567',
    color: '#F26522',
    bg: '#fef0e6',
  },
  {
    id: 'rocket',
    name: 'Rocket',
    merchant: '01611-123456',
    color: '#8B1A8B',
    bg: '#f4e4f4',
  },
];

export default function PaymentSelector({ register, errors, watch }) {
  const selected = watch('paymentMethod');

  const input =
    'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors';

  return (
    <div className="space-y-4">
      <h2
        className="text-xl font-bold text-gray-800 mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Payment Method
      </h2>

      {/* COD */}
      <label className="flex items-start gap-3 border-2 rounded-xl p-4 cursor-pointer transition-colors border-gray-200 has-[:checked]:border-[#C9A84C] has-[:checked]:bg-[#ffffff]">
        <input
          type="radio"
          value="cod"
          {...register('paymentMethod', { required: 'Select a payment method' })}
          className="mt-0.5 accent-[#C9A84C]"
        />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
            <Package size={20} className="text-gray-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">Cash on Delivery</p>
            <p className="text-xs text-gray-500">Pay when you receive your order</p>
          </div>
        </div>
      </label>

      {/* Mobile banking */}
      {mobilePayments.map((pm) => (
        <div key={pm.id}>
          <label
            className="flex items-start gap-3 border-2 rounded-xl p-4 cursor-pointer transition-colors border-gray-200 has-[:checked]:border-[#C9A84C] has-[:checked]:bg-[#ffffff]"
          >
            <input
              type="radio"
              value={pm.id}
              {...register('paymentMethod')}
              className="mt-0.5 accent-[#C9A84C]"
            />
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{ background: pm.bg, color: pm.color }}
              >
                {pm.name[0]}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{pm.name}</p>
                <p className="text-xs text-gray-500">Send to merchant: <strong>{pm.merchant}</strong></p>
              </div>
            </div>
          </label>

          {selected === pm.id && (
            <div className="mt-2 mx-4 p-4 rounded-xl border border-dashed" style={{ borderColor: pm.color, background: pm.bg }}>
              <p className="text-xs font-semibold mb-2" style={{ color: pm.color }}>
                How to pay via {pm.name}:
              </p>
              <ol className="text-xs text-gray-700 space-y-1 list-decimal list-inside">
                <li>Open {pm.name} app → Send Money</li>
                <li>Enter merchant number: <strong>{pm.merchant}</strong></li>
                <li>Enter the amount from Order Summary</li>
                <li>Complete the transaction and copy the TX ID</li>
                <li>Paste the Transaction ID below</li>
              </ol>
              <input
                {...register('txId', { required: selected !== 'cod' && selected !== 'card' ? 'Transaction ID is required' : false })}
                type="text"
                placeholder={`${pm.name} Transaction ID`}
                className={`${input} mt-3`}
              />
              {errors.txId && <p className="text-xs text-red-500 mt-1">{errors.txId.message}</p>}
            </div>
          )}
        </div>
      ))}

      {/* Card */}
      <label className="flex items-start gap-3 border-2 rounded-xl p-4 cursor-pointer transition-colors border-gray-200 has-[:checked]:border-[#C9A84C] has-[:checked]:bg-[#ffffff]">
        <input
          type="radio"
          value="card"
          {...register('paymentMethod')}
          className="mt-0.5 accent-[#C9A84C]"
        />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <CreditCard size={20} className="text-blue-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">Card Payment</p>
            <p className="text-xs text-gray-500">Visa, Mastercard (Coming soon)</p>
          </div>
        </div>
      </label>

      {selected === 'card' && (
        <div className="mx-4 p-4 bg-blue-50 rounded-xl border border-blue-200 space-y-3">
          <div className="grid grid-cols-1 gap-3">
            <input className={input} placeholder="Card Number" disabled />
            <div className="grid grid-cols-2 gap-3">
              <input className={input} placeholder="MM / YY" disabled />
              <input className={input} placeholder="CVV" disabled />
            </div>
            <input className={input} placeholder="Name on Card" disabled />
          </div>
          <p className="text-xs text-blue-500 text-center">Card payment integration coming soon</p>
        </div>
      )}

      {errors.paymentMethod && (
        <p className="text-sm text-red-500">{errors.paymentMethod.message}</p>
      )}
    </div>
  );
}
