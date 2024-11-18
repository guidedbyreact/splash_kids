'use client';

interface SortOption {
  label: string;
  value: string;
}

interface ProductSortProps {
  currentSort: string;
  onSortChange: (value: string) => void;
}

const sortOptions: SortOption[] = [
  { label: 'Les plus récents', value: 'newest' },
  { label: 'Prix croissant', value: 'price-asc' },
  { label: 'Prix décroissant', value: 'price-desc' },
  { label: 'Popularité', value: 'popularity' },
];

export default function ProductSort({ currentSort, onSortChange }: ProductSortProps) {
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="sort" className="text-gray-700 font-medium">
        Trier par:
      </label>
      <select
        id="sort"
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value)}
        className="border rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
} 