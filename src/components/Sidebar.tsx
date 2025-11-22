import React from 'react';
import { Home, Bot, Code, Settings, LifeBuoy, LogOut, Plus } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#171717] border-r border-gray-800 text-gray-300 w-64">
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg"></div>
          <span className="font-semibold text-white">Lovable</span>
        </div>
      </div>
      <div className="flex-grow p-4 space-y-2">
        <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          <Plus className="mr-2 h-5 w-5" />
          New Chat
        </button>
        <nav className="mt-4">
          <a href="#" className="flex items-center px-4 py-2 text-sm rounded-lg bg-gray-700/50 text-white">
            <Home className="mr-3 h-5 w-5" />
            Home
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-700/50">
            <Bot className="mr-3 h-5 w-5" />
            Assistants
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-700/50">
            <Code className="mr-3 h-5 w-5" />
            API Keys
          </a>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-800">
        <nav className="space-y-1">
            <a href="#" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-700/50">
                <LifeBuoy className="mr-3 h-5 w-5" />
                Support
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-gray-700/50">
                <Settings className="mr-3 h-5 w-5" />
                Settings
            </a>
        </nav>
        <div className="mt-4 pt-4 border-t border-gray-800 flex items-center">
            <img className="h-9 w-9 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" />
            <div className="ml-3 flex-grow">
                <p className="text-sm font-semibold text-white">John Derrick</p>
                <p className="text-xs text-gray-400">Workspace</p>
            </div>
            <LogOut className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
