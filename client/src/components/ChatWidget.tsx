import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockResponses } from "@/lib/chatResponses";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm the SoftSell assistant. How can I help you with your software licenses today?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    setInputValue("");

    // Generate response
    setTimeout(() => {
      let response = mockResponses.default;
      const lowerMessage = inputValue.toLowerCase();

      Object.entries(mockResponses).forEach(([key, value]) => {
        if (lowerMessage.includes(key)) {
          response = value;
        }
      });

      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 500);
  };

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-80 sm:w-96 max-h-[500px] flex flex-col mb-4"
          >
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-medium">SoftSell Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChat}
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 min-h-[250px] max-h-[350px]">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start ${
                      message.isUser ? "justify-end" : ""
                    }`}
                  >
                    <div
                      className={`rounded-lg p-3 max-w-[80%] ${
                        message.isUser
                          ? "bg-primary/10 dark:bg-primary/20"
                          : "bg-gray-100 dark:bg-gray-700"
                      }`}
                    >
                      <p className="text-gray-800 dark:text-gray-200">
                        {message.text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </ScrollArea>

            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="h-10 w-10 p-2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Try asking: "How do I sell my license?" or "What's the process like?"
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="bg-gradient-to-br from-primary to-secondary hover:shadow-xl text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center focus:outline-none transition-all duration-200"
        aria-label="Chat with us"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
