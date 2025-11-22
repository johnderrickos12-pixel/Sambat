import React from 'react';
import { PreviewControls } from './PreviewControls';
import { FileNode } from '../data/mockData';

interface PreviewWindowProps {
  selectedFile: FileNode | null;
}

export const PreviewWindow: React.FC<PreviewWindowProps> = ({ selectedFile }) => {
  // A file is renderable if it's not null and has a 'content' property.
  // Folders are objects in the tree but lack this property.
  const isFile = selectedFile && 'content' in selectedFile;

  return (
    <div className="flex flex-col flex-1 h-full bg-black border-l border-gray-800">
      <PreviewControls />
      <div className="flex-1 p-6 overflow-auto bg-gray-900/50">
        {isFile ? (
          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-4">{selectedFile.name}</h2>
            <pre className="text-sm text-gray-400 bg-black p-4 rounded-md whitespace-pre-wrap">
              <code>
                {selectedFile.content}
              </code>
            </pre>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-center">
            <p className="text-gray-500">
              {selectedFile 
                ? `Cannot preview a folder. Select a file from '${selectedFile.name}'.` 
                : 'Select a file to view its content'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
