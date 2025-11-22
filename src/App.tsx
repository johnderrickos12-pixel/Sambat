import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import PreviewWindow from './components/PreviewWindow';
import { FileNode, Message, mockMessages, sambat, User } from './data/mockData';

const user: User = {
  name: 'You',
  avatarUrl: '', // Not used in this implementation, but part of the type
};

export default function App() {
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleFileSelect = (file: FileNode) => {
    // Only allow files to be selected for the preview window
    if ('content' in file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null); // Clear preview if a folder is clicked
    }
  };
  
  const handleSendMessage = (text: string) => {
    // Create the user's message
    const userMessage: Message = {
      id: Date.now(),
      text,
      author: user,
      timestamp: new Date().toISOString(),
    };

    // Simulate an AI response
    const aiResponse: Message = {
      id: Date.now() + 1,
      text: `Acknowledged. Executing task for: "${text}". I will now generate the necessary components and update the file tree.`,
      author: sambat,
      timestamp: new Date().toISOString(),
    };

    // Update the state with both messages
    setMessages(prevMessages => [...prevMessages, userMessage, aiResponse]);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      <Sidebar onFileSelect={handleFileSelect} selectedFile={selectedFile} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col overflow-hidden">
            <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
          </div>
          <div className="w-1/2 border-l border-gray-700 flex flex-col">
            <PreviewWindow selectedFile={selectedFile} />
          </div>
        </main>
      </div>
    </div>
  );
}
