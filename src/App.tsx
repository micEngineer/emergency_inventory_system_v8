import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { CategoryTab } from './components/CategoryTab';
import { InventoryItem } from './components/inventory/InventoryItem';
import { SearchBar } from './components/SearchBar';
import { SearchStats } from './components/SearchStats';
import { InventoryModal } from './components/InventoryModal';
import { CategorySettings } from './components/CategorySettings';
import { useInventory } from './hooks/useInventory';
import { sampleInventoryItems } from './data/sampleData';
import { defaultCategories } from './data/categories';
import { calculateItemCounts } from './utils/categoryUtils';
import { InventoryItem as InventoryItemType } from './types/inventory';

function App() {
  const {
    items,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    addItem,
    editItem,
    deleteItem,
    totalItems,
    filteredCount,
  } = useInventory(sampleInventoryItems);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItemType | undefined>(undefined);
  const [showSettings, setShowSettings] = useState(false);

  const handleAddItem = (formData: InventoryItemType) => {
    addItem(formData);
    setIsModalOpen(false);
  };

  const handleEditItem = (formData: InventoryItemType) => {
    if (!editingItem) return;
    editItem(editingItem.id, formData);
    setEditingItem(undefined);
  };

  const getCategoryColor = (categoryName: string) => {
    const category = defaultCategories.find(c => c.name === categoryName);
    return category?.color || '#6B7280';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onAddItem={() => setIsModalOpen(true)}
        onToggleSettings={() => setShowSettings(!showSettings)}
      />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {showSettings ? (
            <CategorySettings />
          ) : (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
                <SearchStats
                  totalItems={totalItems}
                  filteredCount={filteredCount}
                  searchQuery={searchQuery}
                />
              </div>

              <CategoryTab
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                itemCounts={calculateItemCounts(items)}
              />

              <div className="space-y-4">
                {items.map(item => (
                  <InventoryItem
                    key={item.id}
                    item={item}
                    onEdit={setEditingItem}
                    onDelete={deleteItem}
                    categoryColor={getCategoryColor(item.category)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <InventoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddItem}
        title="新規アイテムの追加"
      />

      <InventoryModal
        isOpen={!!editingItem}
        onClose={() => setEditingItem(undefined)}
        onSubmit={handleEditItem}
        initialData={editingItem}
        title="アイテムの編集"
      />
    </div>
  );
}

export default App;