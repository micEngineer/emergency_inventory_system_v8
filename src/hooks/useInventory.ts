import { useState } from 'react';
import { InventoryItem, InventoryFormData } from '../types/inventory';
import { searchItems, filterByCategory } from '../utils/search';

export function useInventory(initialItems: InventoryItem[]) {
  const [items, setItems] = useState<InventoryItem[]>(initialItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = searchItems(items, searchQuery);
  const displayedItems = activeCategory 
    ? filterByCategory(filteredItems, activeCategory)
    : filteredItems;

  const addItem = (formData: InventoryFormData) => {
    const newItem: InventoryItem = {
      id: Date.now().toString(),
      ...formData,
    };
    setItems(prevItems => [...prevItems, newItem]);
  };

  const editItem = (id: string, formData: InventoryFormData) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, ...formData }
          : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return {
    items: displayedItems,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    addItem,
    editItem,
    deleteItem,
    totalItems: items.length,
    filteredCount: displayedItems.length,
  };
}