import { useState } from 'react';
import { CategoryData, CategoryFormData } from '../types/category';
import { defaultCategories } from '../data/categories';

export function useCategories() {
  const [categories, setCategories] = useState<CategoryData[]>(defaultCategories);

  const addCategory = (formData: CategoryFormData) => {
    const newCategory: CategoryData = {
      id: Date.now().toString(),
      ...formData,
    };
    setCategories(prev => [...prev, newCategory]);
  };

  const editCategory = (id: string, formData: CategoryFormData) => {
    setCategories(prev =>
      prev.map(category =>
        category.id === id
          ? { ...category, ...formData }
          : category
      )
    );
  };

  const deleteCategory = (id: string) => {
    setCategories(prev => prev.filter(category => category.id !== id));
  };

  return {
    categories,
    addCategory,
    editCategory,
    deleteCategory,
  };
}