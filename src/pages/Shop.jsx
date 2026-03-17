import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFilters } from '../hooks/useFilters';
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/product/FilterSidebar';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const filters = useFilters();
  const { filtered, setCategory, setSearchQuery, setSortBy, resetFilters, category, sortBy, priceRange } = filters;

  // Sync URL params
  useEffect(() => {
    const cat = searchParams.get('cat');
    const q = searchParams.get('q');
    if (cat) setCategory(cat);
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const handleFilterChange = (key, value) => {
    if (key === 'category') filters.setCategory(value);
    else if (key === 'sortBy') filters.setSortBy(value);
    else if (key === 'priceRange') filters.setPriceRange(value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[#e0c97a] text-sm font-semibold uppercase tracking-widest mb-1">Browse</p>
        <h1
          className="text-3xl font-bold text-gray-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Collection
        </h1>
        <p className="text-gray-500 text-sm mt-1">{filtered.length} products found</p>
      </div>

      {/* Mobile filter toggle */}
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium hover:border-[#C9A84C] transition-colors"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none"
        >
          <option value="default">Featured</option>
          <option value="new">New Arrivals</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating">Best Rated</option>
        </select>
      </div>

      {/* Mobile filter drawer */}
      {showFilters && (
        <div className="lg:hidden mb-6 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold text-gray-800">Filters</p>
            <button onClick={() => setShowFilters(false)}><X size={18} /></button>
          </div>
          <FilterSidebar
            filters={{ category, sortBy, priceRange }}
            onChange={handleFilterChange}
            onReset={resetFilters}
          />
        </div>
      )}

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <div className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <FilterSidebar
              filters={{ category, sortBy, priceRange }}
              onChange={handleFilterChange}
              onReset={resetFilters}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-gray-500 font-medium">No products found</p>
              <button
                onClick={resetFilters}
                className="mt-4 text-[#C9A84C] text-sm underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div
              key={`${category}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
            >
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
