import { InventoryItem } from '../types/inventory';

export function calculateItemCounts(items: InventoryItem[]): Record<string, number> {
  const counts: Record<string, number> = {
    all: items.length
  };

  items.forEach(item => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });

  return counts;
}