import React from 'react';
import { motion } from 'framer-motion';
import { Message } from '../data/mockData';
import { ChatMessage } from './ChatMessage';
import { PromptInput } from './PromptInput';
import { Sparkles } from 'lucide-react';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
}

const examplePrompts = [
  "Create a landing page for a SaaS company",
  "Design a dashboard with charts and tables",
  "Build a simple login form with validation",
  "Recreate the Stripe homepage animation",
];

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage }) => {
  const [isSending, setIsSending] = React.useState(false);

  const handleSendMessage = (text: string) => {
    setIsSending(true);
    onSendMessage(text);
    // Simulate API call delay
    setTimeout(() => setIsSending(false), 1000);
  };

  return (
    <div className="flex flex-col flex-1 h-full bg-gray-900/70 backdrop-blur-sm">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg.text}
              author={msg.author}
            />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center h-full text-center text-gray-400"
          >
            <div className="p-4 bg-gray-900/50 rounded-full border border-gray-700 mb-4">
              <Sparkles className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-200 mb-2">Welcome to Sambat</h2>
            <p className="max-w-md mb-8">
              Your AI partner for building beautiful and functional user interfaces.
              Start by describing what you want to create.
            </p>
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              {examplePrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="bg-gray-800/80 p-4 rounded-lg text-left text-gray-300 hover:bg-gray-700/80 transition-colors duration-200 border border-gray-700/50"
                >
                  <p className="font-semibold">{prompt.split(' ')[0]} {prompt.split(' ')[1]}</p>
                  <p className="text-sm text-gray-500">{prompt.substring(prompt.indexOf(' ') + 1)}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <div className="p-4 border-t border-gray-800">
        <PromptInput onSendMessage={handleSendMessage} disabled={isSending} />
      </div>
    </div>
  );
};
