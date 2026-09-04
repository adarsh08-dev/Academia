import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export const BridgeBuddy: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    { sender: 'ai', text: "Hey! 👋 I'm Bridge Buddy, your AI clinical career and technical assistant. Ask me anything about micro-gigs, clinical rotations, research protocols, or code!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);

    try {
      const res = await fetch('/api/ai/helpdesk/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history: messages })
      });
      const data = await res.json();
      if (data && data.reply) {
        setMessages(prev => [...prev, { sender: 'ai', text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { sender: 'ai', text: "I'm here to help with your clinical studies and career path!" }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { sender: 'ai', text: "Connected to LADDER AI network. How can I assist your clinical sprint today?" }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-full shadow-2xl transition font-medium"
        >
          <Sparkles className="w-5 h-5" /> Bridge Buddy AI
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-[#0B1026] border border-slate-800 rounded-2xl shadow-2xl flex flex-col h-[500px]">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-[#131A36]/50 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-slate-100">Bridge Buddy AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${m.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-[#131A36] border border-slate-800 text-slate-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-slate-800 flex gap-2 bg-[#0B1026] rounded-b-2xl">
            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-[#131A36] border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            />
            <button onClick={handleSend} className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
