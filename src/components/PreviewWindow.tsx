import React from 'react';
import { PreviewControls } from './PreviewControls';
import { FileNode } from '../data/mockData';

interface PreviewWindowProps {
  selectedFile: FileNode | null;
}

export const PreviewWindow: React.FC<PreviewWindowProps> = ({ selectedFile }) => {
  return (
    <div className="flex flex-col flex-1 h-full bg-black border-l border-gray-800">
      <PreviewControls />
      <div className="flex-1 p-6 overflow-auto bg-gray-900/50">
        {selectedFile ? (
          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-4">{selectedFile.name}</h2>
            <pre className="text-sm text-gray-400 bg-black p-4 rounded-md">
              <code>
                {`// Displaying content for ${selectedFile.name}\n\n// In a real application, this would be the actual file content.\n// For now, we're just showing a placeholder.`}
              </code>
            </pre>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a file to view its content</p>
          </div>
        )}
      </div>
    </div>
  );
};