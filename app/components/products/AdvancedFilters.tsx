'use client';

import { useState } from 'react';

interface FilterGroup {
  id: string;
  name: string;
  options: {
    id: string;
    name: string;
    count?: number;
  }[];
}

interface AdvancedFiltersProps {
  filters: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, values: string[]) => void;
  onClearAll: () => void;
}

export default function AdvancedFilters({
  filters,
  selectedFilters,
  onFilterChange,
  onClearAll,
}: AdvancedFiltersProps) {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(filters.map(f => f.id));

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupId)
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Filtres</h3>
        <button
          onClick={onClearAll}
          className="text-sm text-blue-500 hover:text-blue-600"
        >
          Réinitialiser
        </button>
      </div>

      <div className="space-y-4">
        {filters.map((group) => (
          <div key={group.id} className="border-b pb-4">
            <button
              onClick={() => toggleGroup(group.id)}
              className="flex justify-between items-center w-full py-2"
            >
              <span className="font-medium">{group.name}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  expandedGroups.includes(group.id) ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {expandedGroups.includes(group.id) && (
              <div className="mt-2 space-y-2">
                {group.options.map((option) => (
                  <label key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFilters[group.id]?.includes(option.id)}
                      onChange={(e) => {
                        const currentSelected = selectedFilters[group.id] || [];
                        const newSelected = e.target.checked
                          ? [...currentSelected, option.id]
                          : currentSelected.filter(id => id !== option.id);
                        onFilterChange(group.id, newSelected);
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">
                      {option.name}
                      {option.count !== undefined && (
                        <span className="text-gray-500 text-sm ml-1">
                          ({option.count})
                        </span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 