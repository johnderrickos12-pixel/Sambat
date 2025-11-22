import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { Message } from '../../data/mockData';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { author, content } = message;
  const isUser = author === 'user';

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
      className={`flex items-start space-x-4 p-4 rounded-lg my-2 ${
        isUser ? '' : 'bg-white/5'
      }`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-blue-500' : 'bg-gray-700'
        }`}
      >
        {isUser ? <User size={20} /> : <Bot size={20} />}
      </div>
      <div className="flex-1">
        <p className="font-semibold capitalize">{author}</p>
        <div className="prose prose-invert max-w-none text-gray-300">
          {content}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
