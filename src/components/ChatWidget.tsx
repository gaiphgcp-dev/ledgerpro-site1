import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, ChevronUp, ChevronDown, MessageSquare } from 'lucide-react';
import { ChatHistoryItem } from '../types';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [history, setHistory] = useState<ChatHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  async function sendMessage() {
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatHistoryItem = {
      role: "user",
      parts: [{ text: userInput }]
    };

    const newHistory = [...history, userMessage];
    setHistory(newHistory);
    const currentInput = userInput;
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput, history: history }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || `Server Error ${response.status}: Ensure local server configuration matches API route requirements.`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      if (data.text) {
        setHistory([...newHistory, { role: "model", parts: [{ text: data.text }] }]);
      } else {
        throw new Error("Empty response from AI");
      }
    } catch (error: any) {
      console.error("Chat Error:", error);
      
      setHistory([...newHistory, { 
        role: "model", 
        parts: [{ text: `Connection Error: I am having trouble reaching my cloud brain right now. (${error.message}). Please ensure your local server environment is running properly.` }] 
      }]);
    } finally {
      setIsLoading(false);
    }
  }

  // Helper function to safely parse and render bold text, links, and emails
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (!line.trim()) return null;
      
      const isBullet = line.trim().startsWith('*') || line.trim().startsWith('-') || line.trim().startsWith('•');
      const cleanLine = isBullet ? line.replace(/^[*•-]\s*/, '') : line;
      
      // Master Regex that catches: 1. Bold, 2. Markdown Links, 3. Raw URLs, 4. Emails
      const tokenRegex = /(\*\*.*?\*\*|\[.*?\]\(.*?\)|https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
      const parts = cleanLine.split(tokenRegex);
      
      return (
        <div key={i} className={isBullet ? "ml-3 flex gap-2" : ""}>
          {isBullet && <span className="text-brand-accent shrink-0">•</span>}
          <span className="block">
            {parts.map((part, j) => {
              if (!part) return null;

              // 1. Handle Bold Text (and check for emails inside)
              if (part.startsWith('**') && part.endsWith('**')) {
                const innerText = part.slice(2, -2);
                const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
                
                if (innerText.match(emailRegex)) {
                  const emailParts = innerText.split(emailRegex);
                  return (
                    <strong key={j} className="font-bold text-white">
                      {emailParts.map((ePart, k) => {
                        if (ePart.match(emailRegex)) {
                          return (
                            <a key={k} href={`mailto:${ePart}`} className="text-blue-400 underline hover:text-blue-300 transition-colors mx-0.5 inline-block break-all">
                              {ePart}
                            </a>
                          );
                        }
                        return ePart;
                      })}
                    </strong>
                  );
                }
                
                return <strong key={j} className="font-bold text-white">{innerText}</strong>;
              }
              
              // 2. Handle Markdown Links: [Text](URL)
              if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
                const match = part.match(/\[(.*?)\]\((.*?)\)/);
                if (match) {
                  let url = match[2];
                  // Automatically fix missing mailto: for emails passed in markdown links
                  if (url.includes('@') && !url.startsWith('mailto:') && !url.startsWith('http')) {
                    url = 'mailto:' + url;
                  }
                  return (
                    <a key={j} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300 mx-0.5 inline-block break-all">
                      {match[1]}
                    </a>
                  );
                }
              }

              // 3. Handle Raw URLs
              if (part.startsWith('http://') || part.startsWith('https://')) {
                return (
                  <a key={j} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300 mx-0.5 inline-block break-all">
                    {part}
                  </a>
                );
              }

              // 4. Handle Raw Emails
              if (part.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                return (
                  <a key={j} href={`mailto:${part}`} className="text-blue-400 underline hover:text-blue-300 transition-colors mx-0.5 inline-block break-all">
                    {part}
                  </a>
                );
              }

              // Normal text
              return <span key={j}>{part}</span>;
            })}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-4 w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-10rem)] flex flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-brand-navy/95 soft-shadow backdrop-blur-xl"
          >
            {/* Header */}
            <div 
              onClick={() => setIsOpen(false)}
              className="flex shrink-0 cursor-pointer items-center justify-between bg-brand-navy p-5 text-brand-accent border-b border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-2 w-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                  <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-brand-accent"></div>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">LedgerPro Assistant</h3>
                  <p className="text-[9px] font-bold text-brand-accent opacity-50 uppercase tracking-tighter">Secure & Live</p>
                </div>
              </div>
              <div className="rounded-full bg-white/5 p-1 transition-colors hover:bg-white/10">
                <ChevronDown className="h-4 w-4 opacity-40" />
              </div>
            </div>

            {/* Chat Box */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 text-sm space-y-4"
            >
              {history.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-white/[0.03] p-4 text-xs font-medium leading-relaxed text-brand-accent/70 border border-white/5 shadow-sm"
                >
                  Welcome to <span className="text-brand-accent">LedgerPro Solutions</span>. I can assist with pricing, service details, or connecting you with our team. How can I help today?
                </motion.div>
              )}
              {history.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-5 py-3.5 leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-brand-accent text-brand-navy font-bold text-xs' 
                        : 'bg-white/[0.05] text-brand-accent/90 border border-white/5 text-xs'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      msg.parts[0].text
                    ) : (
                      <div className="space-y-2">
                        {renderFormattedText(msg.parts[0].text)}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 rounded-2xl bg-white/[0.03] px-5 py-3.5 border border-white/5">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-accent/60"></div>
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-accent/60 [animation-delay:0.2s]"></div>
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-accent/60 [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-white/5 bg-brand-navy/60 p-4">
              <div className="flex gap-2 rounded-2xl bg-white/[0.03] p-1.5 border border-white/5 focus-within:border-brand-accent/20 transition-all">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about our plans..."
                  className="flex-1 bg-transparent px-4 py-2 text-xs font-medium text-white placeholder-brand-accent/20 outline-none"
                />
                <button 
                  onClick={sendMessage}
                  disabled={!userInput.trim() || isLoading}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent text-brand-navy shadow-lg shadow-brand-accent/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:grayscale"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: isOpen ? -90 : 0 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent text-brand-navy shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
        {isOpen ? <ChevronDown className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}