export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  expirationDate: string;
  category: Category;
  notes?: string;
  imageUrl?: string;
}

export type Category = 
  | '食料品'
  | '飲料水'
  | '医療品'
  | '衛生用品'
  | '防災用品'
  | 'その他'

export const CATEGORIES: Category[] = [
  '食料品',
  '飲料水',
  '医療品',
  '衛生用品',
  '防災用品',
  'その他'
];

export interface InventoryFormData {
  name: string;
  quantity: number;
  expirationDate: string;
  category: Category;
  notes?: string;
  imageUrl?: string;
}