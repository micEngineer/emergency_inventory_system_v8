import React from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';
import { CategoryData } from '../types/category';

interface CategoryListProps {
  categories: CategoryData[];
  onAddCategory: () => void;
  onEditCategory: (category: CategoryData) => void;
  onDeleteCategory: (id: string) => void;
}

export function CategoryList({
  categories,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
}: CategoryListProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">カテゴリー管理</h2>
        <button
          onClick={onAddCategory}
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          新規カテゴリー
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {categories.map((category) => (
            <li key={category.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {category.name}
                    </h3>
                    {category.description && (
                      <p className="text-sm text-gray-500">{category.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onEditCategory(category)}
                    className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                    title="編集"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onDeleteCategory(category.id)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                    title="削除"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}