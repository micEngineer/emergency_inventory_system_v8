import React from 'react';
import { ShieldCheck, Plus, Settings } from 'lucide-react';

interface HeaderProps {
  onAddItem: () => void;
  onToggleSettings: () => void;
}

export function Header({ onAddItem, onToggleSettings }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-50 p-2 rounded-lg">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Emergency Inventory</h1>
              <p className="text-sm text-gray-500">Prepare for tomorrow, today</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onToggleSettings}
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </button>
            <button
              onClick={onAddItem}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}