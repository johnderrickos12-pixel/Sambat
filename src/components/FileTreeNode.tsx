import React, { useState } from 'react';
import { FileNode } from '../data/mockData';
import { FileIcon } from './FileIcon';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface FileTreeNodeProps {
  node: FileNode;
  onSelectFile: (file: FileNode) => void;
  selectedFile: FileNode | null;
  level?: number;
}

export const FileTreeNode: React.FC<FileTreeNodeProps> = ({ node, onSelectFile, selectedFile, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isFolder = 'children' in node;
  const isSelected = selectedFile?.id === node.id;

  const handleToggle = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
    // If it's a file, select it
    if (!isFolder) {
      onSelectFile(node);
    }
  };
  
  const handleSelect = () => {
    if(isFolder) {
      setIsOpen(!isOpen);
    } else {
      onSelectFile(node);
    }
  }

  return (
    <div>
      <div
        onClick={handleSelect}
        className={`flex items-center p-1 rounded-md cursor-pointer text-sm ${isSelected ? 'bg-blue-500/20 text-gray-200' : 'text-gray-400 hover:bg-gray-800'}`}
        style={{ paddingLeft: `${level * 16 + 4}px` }}
      >
        {isFolder ? (
          <span className="mr-2">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        ) : (
          <span className="w-4 mr-2"></span> // Indentation spacer
        )}
        <span className="mr-2">
          <FileIcon fileName={node.name} isFolder={isFolder} />
        </span>
        <span>{node.name}</span>
      </div>
      {isFolder && isOpen && (
        <div className="mt-1">
          {node.children?.map(child => (
            <FileTreeNode
              key={child.id}
              node={child}
              onSelectFile={onSelectFile}
              selectedFile={selectedFile}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
