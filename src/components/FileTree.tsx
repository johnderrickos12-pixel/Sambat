import React, { useState } from 'react';
import { FileNode } from '../data/mockData';
import { FileTreeNode } from './FileTreeNode';

interface FileTreeProps {
  files: FileNode[];
  selectedFile: FileNode | null;
  onSelectFile: (file: FileNode) => void;
}

export const FileTree: React.FC<FileTreeProps> = ({ files, selectedFile, onSelectFile }) => {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

  const toggleFolder = (folderId: string) => {
    setOpenFolders(prevOpenFolders => {
      const newOpenFolders = new Set(prevOpenFolders);
      if (newOpenFolders.has(folderId)) {
        newOpenFolders.delete(folderId);
      } else {
        newOpenFolders.add(folderId);
      }
      return newOpenFolders;
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Files</h2>
      <div className="space-y-1">
        {files.map(node => (
          <FileTreeNode
            key={node.id}
            node={node}
            level={0}
            selectedFile={selectedFile}
            onSelectFile={onSelectFile}
            openFolders={openFolders}
            onToggleFolder={toggleFolder}
          />
        ))}
      </div>
    </div>
  );
};
