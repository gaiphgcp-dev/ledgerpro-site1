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

    // Client-side simulation logic based on approved knowledge
    const getLocalResponse = (input: string) => {
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('pricing') || lowerInput.includes('plan') || lowerInput.includes('cost') || lowerInput.includes('how much')) {
        return "Our pricing tiers are: Start-up ($190/mo, up to 100 transactions), Medium ($240/mo, up to 200 transactions), Large ($290/mo, up to 300 transactions), and Extra Large (Custom Price for 300+ transactions). Historical Clean-up is also available at $50 per monthly transaction.";
      }
      
      if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('social') || lowerInput.includes('instagram') || lowerInput.includes('facebook') || lowerInput.includes('linkedin')) {
        return "You can reach us at accounts1@ledgerpro.org. We are also active on Instagram (@ledgerpro01), LinkedIn (Heracles George Parafina), and Facebook (LedgerPro Solutions). Our website is https://ledgerpro.org.";
      }
      
      if (lowerInput.includes('service') || lowerInput.includes('what do you do') || lowerInput.includes('bookkeeping') || lowerInput.includes('reconciliation')) {
        return "We provide expert bookkeeping, monthly bank reconciliations, financial reporting (Income Statements, Balance Sheets), expense management, and historical clean-up services. We also manage Accounts Receivable and Payable.";
      }
      
      if (lowerInput.includes('onboard') || lowerInput.includes('start')) {
        return "Starting is easy! We'll begin with an initial consultation, followed by an agreement signature, information gathering via our checklist, and finally setting up your systems (like QuickBooks).";
      }

      if (lowerInput.includes('security') || lowerInput.includes('privacy') || lowerInput.includes('safe')) {
        return "We take data very seriously. All sensitive financial data is encrypted in transit and at rest, and we utilize secure MFA-protected cloud storage platforms for all client records.";
      }

      return null;
    };

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput, history: history }),
      });

      const data = await response.json();
      if (data.text) {
        setHistory([...newHistory, { role: "model", parts: [{ text: data.text }] }]);
      } else {
        throw new Error("No response from server");
      }
    } catch (error) {
      console.warn("Server chat failed, using local simulation:", error);
      const localResponse = getLocalResponse(currentInput) || "I'm sorry, I'm having trouble connecting to my main brain right now. For detailed inquiries, please email accounts1@ledgerpro.org and our team will get back to you within 24 hours!";
      setTimeout(() => {
        setHistory([...newHistory, { role: "model", parts: [{ text: localResponse }] }]);
        setIsLoading(false);
      }, 1000);
      return; 
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-4 w-96 max-w-[calc(100vw-2rem)] overflow-hidden rounded-[2rem] border border-white/5 bg-brand-navy/95 soft-shadow backdrop-blur-xl"
          >
            {/* Header */}
            <div 
              onClick={() => setIsOpen(false)}
              className="flex cursor-pointer items-center justify-between bg-brand-navy p-6 text-brand-accent border-b border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                  <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-brand-accent"></div>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-white">LedgerPro Assistant</h3>
                  <p className="text-[10px] font-bold text-brand-accent opacity-60">Online & Grounded</p>
                </div>
              </div>
              <div className="rounded-full bg-white/5 p-1.5 transition-colors hover:bg-white/10">
                <ChevronDown className="h-4 w-4 opacity-40" />
              </div>
            </div>

            {/* Chat Box */}
            <div 
              ref={scrollRef}
              className="h-[32rem] overflow-y-auto p-6 text-sm space-y-4"
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
                    {msg.parts[0].text}
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
        className="group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-accent text-brand-navy shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
        {isOpen ? <ChevronDown className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </motion.button>

    </div>
  );
}
