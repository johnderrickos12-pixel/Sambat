import React from 'react';
import { Maximize, Code } from 'lucide-react';

const PreviewWindow: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#0A0A0A] border-l border-gray-800">
      <div className="flex items-center justify-between p-3 border-b border-gray-800 h-14">
        <div className="flex items-center space-x-2">
          <Code size={16} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-200">Preview</span>
        </div>
        <button className="p-1 text-gray-400 rounded hover:bg-gray-800">
          <Maximize size={16} />
        </button>
      </div>
      <div className="flex-grow p-4">
        <div className="flex items-center justify-center w-full h-full border-2 border-dashed rounded-lg border-gray-800">
          <p className="text-gray-600">Live preview will be rendered here.</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewWindow;
