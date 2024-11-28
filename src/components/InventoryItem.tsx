import React from 'react';
import { InventoryItem as InventoryItemType } from '../types/inventory';
import { Edit2, Trash2, Image as ImageIcon } from 'lucide-react';

interface InventoryItemProps {
  item: InventoryItemType;
  onEdit: (item: InventoryItemType) => void;
  onDelete: (id: string) => void;
}

export function InventoryItem({ item, onEdit, onDelete }: InventoryItemProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="w-24 h-24 flex-shrink-0">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">
                数量: {item.quantity} | 期限: {item.expirationDate}
              </p>
              {item.notes && (
                <p className="text-sm text-gray-600 mt-1">{item.notes}</p>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(item)}
                className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                title="編集"
              >
                <Edit2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                title="削除"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}