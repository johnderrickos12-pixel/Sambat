import React from 'react';
import { PreviewControls } from './PreviewControls';
import { FileNode } from '../data/mockData';
import { CodeHighlighter } from './CodeHighlighter';

interface PreviewWindowProps {
  selectedFile: FileNode | null;
}

export const PreviewWindow: React.FC<PreviewWindowProps> = ({ selectedFile }) => {
  const isFile = selectedFile && 'content' in selectedFile;

  return (
    <div className="flex flex-col flex-1 h-full bg-black border-l border-gray-800">
      <PreviewControls />
      <div className="flex-1 p-6 overflow-auto bg-gray-900/50">
        {isFile ? (
          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-4">{selectedFile.name}</h2>
            <div className="bg-black p-4 rounded-md">
              <CodeHighlighter code={selectedFile.content} />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">
              {selectedFile ? `Select a file to view its content. '${selectedFile.name}' is a directory.` : 'Select a file to view its content'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
