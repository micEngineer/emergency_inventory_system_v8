import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Category, CATEGORIES } from '../types/inventory';

interface CategoryTabProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  itemCounts: Record<string, number>;
}

export function CategoryTab({ activeCategory, onCategoryChange, itemCounts }: CategoryTabProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      {/* Desktop View */}
      <nav className="hidden md:flex space-x-4 overflow-x-auto py-4 px-4" aria-label="カテゴリー">
        <button
          onClick={() => onCategoryChange(null)}
          className={`
            px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap
            ${
              activeCategory === null
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }
          `}
        >
          全て ({itemCounts.all || 0})
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap
              ${
                activeCategory === category
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {category} ({itemCounts[category] || 0})
          </button>
        ))}
      </nav>

      {/* Mobile View */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <span>
            {activeCategory === null ? '全てのカテゴリー' : activeCategory} ({itemCounts[activeCategory || 'all'] || 0})
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 w-[calc(100%-2rem)] bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="py-1">
              <button
                onClick={() => {
                  onCategoryChange(null);
                  setIsDropdownOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-2 text-sm
                  ${activeCategory === null ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}
                `}
              >
                全て ({itemCounts.all || 0})
              </button>
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onCategoryChange(category);
                    setIsDropdownOpen(false);
                  }}
                  className={`
                    w-full text-left px-4 py-2 text-sm
                    ${activeCategory === category ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}
                  `}
                >
                  {category} ({itemCounts[category] || 0})
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}