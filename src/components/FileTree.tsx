import { Folder, File } from 'lucide-react';

const FileTree = () => {
  const files = [
    { name: 'src', type: 'folder', children: [
      { name: 'components', type: 'folder', children: [
        { name: 'Sidebar.tsx', type: 'file' },
        { name: 'Header.tsx', type: 'file' },
        { name: 'ChatInterface.tsx', type: 'file' },
        { name: 'ChatMessage.tsx', type: 'file' },
        { name: 'PromptInput.tsx', type: 'file' },
        { name: 'FileTree.tsx', type: 'file' },
        { name: 'Preview.tsx', type: 'file' },
      ]},
      { name: 'lib', type: 'folder', children: [
        { name: 'utils.ts', type: 'file' },
      ]},
      { name: 'App.tsx', type: 'file' },
      { name: 'index.css', type: 'file' },
      { name: 'main.tsx', type: 'file' },
    ]},
    { name: 'index.html', type: 'file' },
    { name: 'package.json', type: 'file' },
    { name: 'tailwind.config.js', type: 'file' },
    { name: 'vite.config.ts', type: 'file' },
  ];

  const renderTree = (items: any[], level = 0) => {
    return items.map((item) => (
      <div key={item.name} style={{ paddingLeft: `${level * 1.5}rem` }}>
        <div className="flex items-center text-sm text-gray-400 hover:bg-gray-800/50 rounded-md p-1 cursor-pointer">
          {item.type === 'folder' ? <Folder className="w-4 h-4 mr-2 text-sky-400" /> : <File className="w-4 h-4 mr-2 text-gray-500" />}
          <span>{item.name}</span>
        </div>
        {item.children && renderTree(item.children, level + 1)}
      </div>
    ));
  };

  return (
    <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-lg p-4 h-full overflow-y-auto">
      <h2 className="text-sm font-semibold text-gray-300 mb-4">File Explorer</h2>
      <div className="space-y-1">
        {renderTree(files)}
      </div>
    </div>
  );
};

export default FileTree;
