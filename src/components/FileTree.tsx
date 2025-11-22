import React, { useState } from 'react';
import { File, FolderOpen, ChevronRight, ChevronDown } from 'lucide-react';
import { FileIcon } from './FileIcon';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

export interface FileNode {
  name: string;
  children?: FileNode[];
  path: string;
}

interface FileTreeProps {
  files: FileNode[];
  selectedFile: string | null;
  onSelectFile: (path: string) => void;
}

const TreeNode: React.FC<{ 
  node: FileNode; 
  level: number;
  selectedFile: string | null;
  onSelectFile: (path: string) => void;
}> = ({ node, level, selectedFile, onSelectFile }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isFolder = !!node.children;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isFolder) {
      onSelectFile(node.path);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const isSelected = !isFolder && selectedFile === node.path;

  return (
    <div>
      <div
        className={clsx(
          'flex items-center text-sm py-1.5 px-2 cursor-pointer rounded-md transition-colors duration-150',
          {
            'text-gray-300 hover:bg-gray-800': !isSelected,
            'bg-blue-600/30 text-white': isSelected,
          }
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={handleClick}
      >
        <div className="flex items-center flex-grow">
          {isFolder ? (
            <span onClick={handleToggle} className="mr-2">
              {isOpen ? (
                <ChevronDown size={14} className="text-gray-500" />
              ) : (
                <ChevronRight size={14} className="text-gray-500" />
              )}
            </span>
          ) : (
             <span className="w-6"></span>
          )}

          <div className="mr-2">
              {isFolder ? <FolderOpen size={16} className="text-gray-500" /> : <FileIcon filename={node.name} />}
          </div>
          <span>{node.name}</span>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isFolder && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            {node.children?.map((child) => (
              <TreeNode key={child.path} node={child} level={level + 1} selectedFile={selectedFile} onSelectFile={onSelectFile} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({ files, selectedFile, onSelectFile }) => {
  return (
    <div className="p-2">
      {files.map((node) => (
        <TreeNode key={node.path} node={node} level={0} selectedFile={selectedFile} onSelectFile={onSelectFile}/>
      ))}
    </div>
  );
};