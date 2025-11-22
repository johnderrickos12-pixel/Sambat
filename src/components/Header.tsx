import React from 'react';
import { ChevronDown, GitBranch, Share2, Play } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-14 px-4 bg-gray-900 border-b border-gray-800 flex-shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white">Sambat</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <GitBranch size={16} />
          <span>main</span>
          <ChevronDown size={16} className="text-gray-600" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center -space-x-2">
          <img src="https://i.pravatar.cc/24?u=a042581f4e29026704d" alt="User 1" className="w-6 h-6 rounded-full border-2 border-gray-900" />
          <img src="https://i.pravatar.cc/24?u=a042581f4e29026704e" alt="User 2" className="w-6 h-6 rounded-full border-2 border-gray-900" />
          <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400 border-2 border-gray-900">
            +3
          </div>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700 transition-colors">
          <Share2 size={14} />
          Share
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
          <Play size={14} />
          Deploy
        </button>
      </div>
    </header>
  );
};
