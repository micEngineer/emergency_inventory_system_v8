import React from 'react';
import { InventoryItem as InventoryItemType } from '../types/inventory';
import { PackageSearch } from 'lucide-react';
import { InventoryItem } from './InventoryItem';

interface InventoryListProps {
  items: InventoryItemType[];
  onEditItem: (item: InventoryItemType) => void;
  onDeleteItem: (id: string) => void;
}

export function InventoryList({ items, onEditItem, onDeleteItem }: InventoryListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <PackageSearch className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-gray-500">該当するアイテムがありません</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <InventoryItem
          key={item.id}
          item={item}
          onEdit={onEditItem}
          onDelete={onDeleteItem}
        />
      ))}
    </div>
  );
}