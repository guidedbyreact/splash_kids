'use client';

interface FilterOption {
  id: string;
  name: string;
}

interface CategoryFiltersProps {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (selectedIds: string[]) => void;
}

export default function CategoryFilters({
  title,
  options,
  selectedOptions,
  onChange,
}: CategoryFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  onChange([...selectedOptions, option.id]);
                } else {
                  onChange(selectedOptions.filter((id) => id !== option.id));
                }
              }}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
} 