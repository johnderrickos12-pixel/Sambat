import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChatMessage } from './ChatMessage';
import { PromptInput } from './PromptInput';
import { mockMessages } from '../data/mockData';
import { Message } from '../types';

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleSendMessage = useCallback((content: string) => {
    if (content.trim() === '') return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: `msg-${Date.now() + 1}`,
        role: 'assistant',
        content: 'This is a simulated AI response based on your message.',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    }, 1000);

  }, []);

  return (
    <div className="flex-1 flex flex-col bg-neutral-900 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {messages.map((msg, index) => (
            <ChatMessage key={msg.id} message={msg} index={index} />
          ))}
        </motion.div>
      </div>
      <div className="p-4 border-t border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
        <PromptInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
