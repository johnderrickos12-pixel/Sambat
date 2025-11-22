import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Button } from './ui/button';
import { ArrowUp, Paperclip, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

interface PromptInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ onSendMessage, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSendMessage = () => {
    if (prompt.trim() && !isLoading) {
      onSendMessage(prompt.trim());
      setPrompt('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
    }
  }, [prompt]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative flex items-end p-2 bg-[rgba(23,23,23,0.8)] border border-neutral-700 rounded-2xl shadow-lg backdrop-blur-md">
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
          <Paperclip size={20} />
        </Button>
        <textarea
          ref={textareaRef}
          value={prompt}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Message Yanna..."
          className="flex-1 bg-transparent text-white placeholder-neutral-500 resize-none focus:outline-none max-h-48 text-sm px-2"
          rows={1}
          disabled={isLoading}
        />
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white mr-1">
          <Mic size={20} />
        </Button>
        <motion.button
            onClick={handleSendMessage}
            disabled={!prompt.trim() || isLoading}
            className="bg-white text-black rounded-full p-2 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-colors duration-200"
            whileTap={{ scale: 0.95 }}
        >
            <ArrowUp size={20} />
        </motion.button>
      </div>
    </div>
  );
};
