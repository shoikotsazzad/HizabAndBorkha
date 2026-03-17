import { Check } from 'lucide-react';

const steps = ['Delivery', 'Payment', 'Confirm'];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {steps.map((step, i) => {
        const idx = i + 1;
        const done = currentStep > idx;
        const active = currentStep === idx;
        return (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  done
                    ? 'bg-[#C9A84C] text-white'
                    : active
                    ? 'bg-[#C9A84C] text-white ring-4 ring-green-100'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {done ? <Check size={16} /> : idx}
              </div>
              <span
                className={`text-xs mt-1.5 font-medium ${
                  active || done ? 'text-[#C9A84C]' : 'text-gray-400'
                }`}
              >
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-20 h-0.5 mx-2 mb-5 transition-colors ${
                  currentStep > idx ? 'bg-[#C9A84C]' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
