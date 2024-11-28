import React from 'react';
import { Category, CATEGORIES, InventoryFormData, InventoryItem } from '../types/inventory';
import { X, Image as ImageIcon } from 'lucide-react';

interface InventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: InventoryFormData) => void;
  initialData?: InventoryItem;
  title: string;
}

export function InventoryModal({ isOpen, onClose, onSubmit, initialData, title }: InventoryModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    onSubmit({
      name: formData.get('name') as string,
      quantity: Number(formData.get('quantity')),
      expirationDate: formData.get('expirationDate') as string,
      category: formData.get('category') as Category,
      notes: formData.get('notes') as string,
      imageUrl: formData.get('imageUrl') as string || undefined,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              アイテム名
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              defaultValue={initialData?.name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              画像URL
            </label>
            <div className="mt-1 flex gap-4">
              <input
                type="url"
                name="imageUrl"
                id="imageUrl"
                defaultValue={initialData?.imageUrl}
                placeholder="https://example.com/image.jpg"
                className="block flex-grow rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {initialData?.imageUrl && (
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={initialData.imageUrl}
                    alt="プレビュー"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              数量
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              required
              min="1"
              defaultValue={initialData?.quantity}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
              期限
            </label>
            <input
              type="date"
              name="expirationDate"
              id="expirationDate"
              required
              defaultValue={initialData?.expirationDate}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              カテゴリー
            </label>
            <select
              name="category"
              id="category"
              required
              defaultValue={initialData?.category}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              メモ
            </label>
            <textarea
              name="notes"
              id="notes"
              rows={3}
              defaultValue={initialData?.notes}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}