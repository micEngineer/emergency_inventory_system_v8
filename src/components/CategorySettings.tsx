import React, { useState } from 'react';
import { CategoryList } from './CategoryList';
import { CategoryModal } from './CategoryModal';
import { CategoryData, CategoryFormData } from '../types/category';
import { useCategories } from '../hooks/useCategories';

export function CategorySettings() {
  const { categories, addCategory, editCategory, deleteCategory } = useCategories();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CategoryData | undefined>();

  const handleAddCategory = (formData: CategoryFormData) => {
    addCategory(formData);
    setIsModalOpen(false);
  };

  const handleEditCategory = (formData: CategoryFormData) => {
    if (!editingCategory) return;
    editCategory(editingCategory.id, formData);
    setEditingCategory(undefined);
  };

  const handleDeleteCategory = (id: string) => {
    if (confirm('このカテゴリーを削除してもよろしいですか？')) {
      deleteCategory(id);
    }
  };

  return (
    <div className="space-y-6">
      <CategoryList
        categories={categories}
        onAddCategory={() => setIsModalOpen(true)}
        onEditCategory={setEditingCategory}
        onDeleteCategory={handleDeleteCategory}
      />

      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCategory}
        title="新規カテゴリーの追加"
      />

      <CategoryModal
        isOpen={!!editingCategory}
        onClose={() => setEditingCategory(undefined)}
        onSubmit={handleEditCategory}
        initialData={editingCategory}
        title="カテゴリーの編集"
      />
    </div>
  );
}