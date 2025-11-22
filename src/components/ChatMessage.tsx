import React from 'react';
import { motion } from 'framer-motion';
import { User, sambat } from '../data/mockData';
import { Code, User as UserIcon } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  author: User;
}

const Avatar: React.FC<{ author: User }> = ({ author }) => {
  const isAI = author.name === sambat.name;
  return (
    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isAI ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
      {isAI ? <Code size={18} /> : <UserIcon size={18} />}
    </div>
  );
};

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, author }) => {
  const isMe = author.name !== sambat.name;

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
      variants={variants}
      className={`flex items-start gap-4 ${isMe ? 'justify-end' : ''}`}
    >
      {!isMe && <Avatar author={author} />}
      <div
        className={`flex flex-col max-w-xl ${isMe ? 'items-end' : 'items-start'}`}
      >
        <div
          className={`px-4 py-3 rounded-2xl ${
            isMe
              ? 'bg-blue-600/50 text-gray-100 rounded-br-none'
              : 'bg-gray-800/80 text-gray-300 rounded-bl-none border border-gray-700/50'
          }`}
        >
          <p className="text-sm">{message}</p>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {author.name}
        </p>
      </div>
      {isMe && <Avatar author={author} />}
    </motion.div>
  );
};
