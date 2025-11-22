import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex items-start gap-4 p-4 rounded-lg my-2 ${
        isUser ? 'bg-gray-800/30' : 'bg-transparent'
      }`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-blue-600/50' : 'bg-gray-700/50'
        }`}
      >
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      <div className="flex-grow pt-1">
        <p className="text-gray-200 whitespace-pre-wrap">{message.content}</p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
