import { useState, useMemo } from 'react';
import { products } from '../data/products';

export function useFilters() {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== 'all') list = list.filter((p) => p.category === category);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.nameBn.includes(q)
      );
    }
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'new':
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [category, sortBy, priceRange, selectedColors, searchQuery]);

  const resetFilters = () => {
    setCategory('all');
    setSortBy('default');
    setPriceRange([0, 5000]);
    setSelectedColors([]);
    setSearchQuery('');
  };

  return {
    filtered,
    category, setCategory,
    sortBy, setSortBy,
    priceRange, setPriceRange,
    selectedColors, setSelectedColors,
    searchQuery, setSearchQuery,
    resetFilters,
  };
}
