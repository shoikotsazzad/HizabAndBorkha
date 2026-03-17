import { categories } from '../../data/categories';
import { taka } from '../../utils/formatCurrency';

const fabricOptions = ['Silk Chiffon', 'Jersey', 'Georgette', 'Cotton', 'Nida Fabric', 'Crepe', 'Linen', 'Pashmina'];

export default function FilterSidebar({ filters, onChange, onReset }) {
  const { category, sortBy, priceRange } = filters;

  return (
    <aside className="w-full space-y-6">
      {/* Sort */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => onChange('sortBy', e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#C9A84C]"
        >
          <option value="default">Featured</option>
          <option value="new">New Arrivals</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Best Rated</option>
        </select>
      </div>

      {/* Category */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Category</h3>
        <div className="space-y-1.5">
          <button
            onClick={() => onChange('category', 'all')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              category === 'all' ? 'bg-[#C9A84C] text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Products
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => onChange('category', c.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm flex justify-between items-center transition-colors ${
                category === c.id ? 'bg-[#C9A84C] text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>{c.name}</span>
              <span className={`text-xs ${category === c.id ? 'text-[#e0c97a]' : 'text-gray-400'}`}>
                {c.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Price Range</h3>
        <div className="px-1">
          <input
            type="range"
            min={0}
            max={5000}
            step={100}
            value={priceRange[1]}
            onChange={(e) => onChange('priceRange', [0, Number(e.target.value)])}
            className="w-full accent-[#C9A84C]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{taka(0)}</span>
            <span className="font-semibold text-[#C9A84C]">Up to {taka(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={onReset}
        className="w-full border border-[#C9A84C] text-[#C9A84C] py-2 rounded-xl text-sm font-medium hover:bg-[#C9A84C] hover:text-white transition-colors"
      >
        Reset Filters
      </button>
    </aside>
  );
}
