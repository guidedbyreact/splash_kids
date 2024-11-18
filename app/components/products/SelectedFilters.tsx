'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface SelectedFilter {
  id: string;
  groupId: string;
  name: string;
  groupName: string;
}

interface SelectedFiltersProps {
  filters: SelectedFilter[];
  onRemove: (groupId: string, filterId: string) => void;
  onClearAll: () => void;
}

export default function SelectedFilters({ filters, onRemove, onClearAll }: SelectedFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 items-center py-4">
      <span className="text-sm text-gray-500">Filtres actifs:</span>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {filters.map((filter) => (
            <motion.div
              key={`${filter.groupId}-${filter.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm flex items-center"
            >
              <span className="mr-1">{filter.groupName}:</span>
              <span>{filter.name}</span>
              <button
                onClick={() => onRemove(filter.groupId, filter.id)}
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {filters.length > 0 && (
        <button
          onClick={onClearAll}
          className="text-sm text-blue-500 hover:text-blue-700 ml-2"
        >
          Effacer tout
        </button>
      )}
    </div>
  );
} 