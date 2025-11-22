import React, { useState } from 'react';
import { Send, Plus, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

interface PromptInputProps {
  onSendMessage: (message: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="w-full px-4 pb-4">
      <div className="relative w-full max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full shadow-lg p-2"
          >
            <button type="button" className="p-2 text-gray-400 hover:text-white transition-colors">
              <Plus size={20} />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Yanna..."
              className="flex-grow bg-transparent text-white placeholder-gray-500 focus:outline-none px-4"
            />
            <button type="button" className="p-2 text-gray-400 hover:text-white transition-colors">
              <Mic size={20} />
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputValue.trim()}
            >
              <Send size={20} />
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default PromptInput;
