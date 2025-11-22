import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChatMessage } from './ChatMessage';
import { PromptInput } from './PromptInput';
import { mockMessages } from '../data/mockData';
import type { Message } from '../data/mockData';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load initial messages
    setMessages(mockMessages);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text,
      timestamp: new Date().toISOString(),
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        text: 'Understood. I will now create the component.',
        timestamp: new Date().toISOString(),
        isLoading: false,
      };
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0A0A0A] overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </motion.div>
        <div ref={messagesEndRef} />
      </div>
      <div className="px-6 pb-6 bg-[#0A0A0A]">
        <PromptInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};