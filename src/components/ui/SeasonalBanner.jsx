import { Sparkles, Truck } from 'lucide-react';

const getBannerConfig = () => {
  const month = new Date().getMonth(); // 0-indexed
  if (month === 2 || month === 3) {
    return {
      text: '🌙 ঈদ উল-ফিতর স্পেশাল! Use code EID20 for 20% off your entire order',
      bg: 'bg-gradient-to-r from-[#C9A84C] to-[#e0c97a]',
      icon: <Sparkles size={16} />,
    };
  }
  if (month === 5 || month === 6) {
    return {
      text: '🐑 ঈদ উল-আযহা সেল! Flat 15% off on all Borkha & Abaya',
      bg: 'bg-gradient-to-r from-[#b8922e] to-[#C9A84C]',
      icon: <Sparkles size={16} />,
    };
  }
  return {
    text: '🚚 ৳1500+ অর্ডারে সারা বাংলাদেশে ফ্রি ডেলিভারি!',
    bg: 'bg-gradient-to-r from-[#f5e9c8] to-[#C9A84C]',
    icon: <Truck size={16} />,
  };
};

export default function SeasonalBanner() {
  const config = getBannerConfig();
  return (
    <div className={`${config.bg} text-white py-3 px-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        {config.icon}
        <span>{config.text}</span>
      </div>
    </div>
  );
}
