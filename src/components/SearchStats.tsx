import React from 'react';

interface SearchStatsProps {
  totalItems: number;
  filteredCount: number;
  searchQuery: string;
}

export function SearchStats({ totalItems, filteredCount, searchQuery }: SearchStatsProps) {
  if (!searchQuery) return null;

  return (
    <div className="text-sm text-gray-500 mt-2">
      {filteredCount === totalItems ? (
        `${totalItems}件のアイテムが見つかりました`
      ) : (
        `${totalItems}件中${filteredCount}件のアイテムが見つかりました`
      )}
    </div>
  );
}