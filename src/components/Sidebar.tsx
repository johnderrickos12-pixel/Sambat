import React from 'react';
import { PanelLeft, Github, Bot, Code2, Settings } from 'lucide-react';
import { FileTree } from './FileTree';
import { mockFiles } from '../data/mockData';

export const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-900 text-white border-r border-gray-700">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
          <span className="font-semibold">Sambat</span>
        </div>
        <button className="p-1 rounded hover:bg-gray-800">
          <PanelLeft size={20} />
        </button>
      </div>
      <div className="flex-grow p-2 overflow-y-auto">
        <FileTree files={mockFiles} />
      </div>
      <div className="p-4 border-t border-gray-700">
        <nav className="flex flex-col space-y-2">
          <a href="#" className="flex items-center space-x-3 px-2 py-1.5 rounded text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
            <Github size={18} />
            <span>johnderrickos12-pixel/Sambat</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-2 py-1.5 rounded text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
            <Bot size={18} />
            <span>Yanna-GPT4</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-2 py-1.5 rounded text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
            <Code2 size={18} />
            <span>React + TS + Vite</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-2 py-1.5 rounded text-sm text-gray-400 hover:bg-gray-800 hover:text-white">
            <Settings size={18} />
            <span>Settings</span>
          </a>
        </nav>
      </div>
    </div>
  );
};