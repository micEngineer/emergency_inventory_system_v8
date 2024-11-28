export type Category = 
  | '食料品'
  | '飲料水'
  | '医療品'
  | '衛生用品'
  | '防災用品'
  | 'その他'
  | string; // Allow custom categories

export interface CategoryData {
  id: string;
  name: string;
  description?: string;
  color?: string;
}

export type CategoryFormData = Omit<CategoryData, 'id'>;