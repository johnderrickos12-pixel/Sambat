import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import PreviewWindow from './components/PreviewWindow';
import { FileNode } from './data/mockData';

export default function App() {
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);

  const handleFileSelect = (file: FileNode) => {
    setSelectedFile(file);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      <Sidebar onFileSelect={handleFileSelect} selectedFile={selectedFile} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col overflow-hidden">
            <ChatInterface />
          </div>
          <div className="w-1/2 border-l border-gray-700 flex flex-col">
            <PreviewWindow selectedFile={selectedFile} />
          </div>
        </main>
      </div>
    </div>
  );
}
