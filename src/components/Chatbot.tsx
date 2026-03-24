import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to McDonald\'s Ibadan! I\'m your AI assistant. How can I help you satisfy your cravings today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a helpful McDonald's Ibadan assistant. 
        Current location: Ibadan, Nigeria. 
        Currency: Naira (₦).
        Menu context: Big Mac (₦2800), McSpicy (₦2500), Fries (₦1200).
        User said: "${userMsg}"
        Provide a short, friendly, and persuasive response. If they want to order, suggest popular items.`,
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm having a bit of trouble connecting. Can I suggest a Big Mac while I fix this?" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm a bit overwhelmed with orders right now. Try our McSpicy Chicken!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-mcd-red text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
      >
        <Bot size={24} />
        <span className="hidden md:inline font-bold">Ask McD AI</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-mcd-red p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Sparkles size={20} className="text-mcd-yellow" />
                </div>
                <div>
                  <h3 className="font-bold">McD AI Assistant</h3>
                  <p className="text-xs opacity-80">Online • Ibadan Store</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex",
                  msg.role === 'user' ? "justify-end" : "justify-start"
                )}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm shadow-sm",
                    msg.role === 'user' 
                      ? "bg-mcd-red text-white rounded-tr-none" 
                      : "bg-white text-mcd-black rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="I want something spicy under ₦3000..."
                className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-mcd-red"
              />
              <button 
                onClick={handleSend}
                className="bg-mcd-red text-white p-2 rounded-xl hover:bg-red-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
