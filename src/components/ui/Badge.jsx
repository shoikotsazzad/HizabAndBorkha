const variants = {
  'Best Seller': 'bg-[#C9A84C] text-white',
  'Sale': 'bg-red-500 text-white',
  'New': 'bg-blue-500 text-white',
  'Premium': 'bg-[#e0c97a] text-white',
  'Exclusive': 'bg-purple-600 text-white',
  'Limited': 'bg-orange-500 text-white',
  'Popular': 'bg-teal-600 text-white',
  'Loved by Moms': 'bg-pink-500 text-white',
  default: 'bg-gray-500 text-white',
};

export default function Badge({ label, className = '' }) {
  if (!label) return null;
  const cls = variants[label] || variants.default;
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${cls} ${className}`}>
      {label}
    </span>
  );
}
