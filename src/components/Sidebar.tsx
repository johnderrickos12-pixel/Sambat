import React from 'react';
import { FileTree } from './FileTree';
import { mockFileTree } from '../data/mockData';
import { Search } from 'lucide-react';

interface SidebarProps {
  selectedFile: string | null;
  onSelectFile: (path: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedFile, onSelectFile }) => {
  return (
    <aside className="bg-[#121212] w-64 p-4 flex flex-col border-r border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-200">Files</h2>
      </div>
      <div className="relative mb-4">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search files..."
          className="w-full bg-[#1e1e1e] border border-gray-700 rounded-md pl-8 pr-2 py-1.5 text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex-grow overflow-y-auto -mx-2">
        <FileTree 
          files={mockFileTree} 
          selectedFile={selectedFile}
          onSelectFile={onSelectFile}
        />
      </div>
      <div className="mt-auto">
        {/* Can add footer elements here if needed */}
      </div>
    </aside>
  );
};
