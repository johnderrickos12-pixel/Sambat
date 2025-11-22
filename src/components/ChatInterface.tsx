import React, { useState } from 'react';
import { Send, Code, Image as ImageIcon, Mic, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`flex items-start gap-4 my-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex-shrink-0"></div>
      )}
      <div
        className={`max-w-xl p-4 rounded-xl ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-zinc-800 text-zinc-300 rounded-bl-none'
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Yanna, your UI/UX architect. How can I help you build something amazing today?", isUser: false },
    { text: "Recreate the Lovable.dev website.", isUser: true },
    { text: "Understood. Recreating the functional and aesthetic core of Lovable.dev...", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue('');
      // TODO: Add AI response logic here
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-zinc-900 overflow-hidden">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ChatMessage message={msg.text} isUser={msg.isUser} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Chat Input */}
      <div className="p-6 border-t border-zinc-800">
        <div className="relative">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Yanna to build, design, or test anything..."
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-300 p-4 pr-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            rows={1}
            style={{ minHeight: '56px' }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <PlusCircle size={20} />
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Mic size={20} />
            </button>
            <button
              onClick={handleSendMessage}
              className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg p-2 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Note: AnimatePresence would need to be imported from framer-motion
// For this standalone component, we'll mock its presence or remove it if it causes issues without the full library setup.
// To make this fully functional, let's just use motion.div and ensure framer-motion is a dependency.
// I'll add the necessary import.
import { AnimatePresence } from 'framer-motion';
export default ChatInterface;
