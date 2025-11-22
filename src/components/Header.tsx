import { Share2, Star, GitFork, Code, Eye } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800/50 p-4 flex justify-between items-center h-16">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-md" />
        <h1 className="text-xl font-semibold text-gray-200">lovable-recreation</h1>
      </div>
      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
          <Share2 size={16} />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
          <Star size={16} />
          <span>Star</span>
        </button>
        <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
          <GitFork size={16} />
          <span>Fork</span>
        </button>
      </div>
      <div className="flex items-center space-x-2 bg-gray-800/50 p-1 rounded-lg border border-gray-700/50">
        <button className="px-3 py-1 rounded-md text-sm flex items-center space-x-2 bg-gray-700/50 text-white">
          <Code size={14} />
          <span>Code</span>
        </button>
        <button className="px-3 py-1 rounded-md text-sm flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
          <Eye size={14} />
          <span>Preview</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
