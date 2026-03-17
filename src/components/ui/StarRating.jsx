import { Star } from 'lucide-react';

export default function StarRating({ rating, reviews, size = 14 }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={star <= Math.round(rating) ? 'text-[#e0c97a] fill-[#e0c97a]' : 'text-gray-300 fill-gray-300'}
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-gray-500 ml-0.5">({reviews})</span>
      )}
    </div>
  );
}
