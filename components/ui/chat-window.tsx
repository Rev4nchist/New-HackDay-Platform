"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from './button';
import { Textarea } from './textarea';
import { Card } from './card';
import { ScrollArea } from './scroll-area';
import { Avatar } from './avatar';

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: Date;
}

interface ChatWindowProps {
  isOpen: boolean;
  onToggle: () => void;
  onSendMessage: (message: string) => void;
  messages: Message[];
  defaultMessage?: string;
}

export function ChatWindow({
  isOpen,
  onToggle,
  onSendMessage,
  messages,
  defaultMessage = ""
}: ChatWindowProps) {
  const [isMinimized, setIsMinimized] = useState(!isOpen);
  const [message, setMessage] = useState(defaultMessage);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      if (defaultMessage) {
        textareaRef.current?.focus();
      }
    }
  }, [isOpen, messages, defaultMessage]);

  // Update minimized state when isOpen changes
  useEffect(() => {
    setIsMinimized(!isOpen);
  }, [isOpen]);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Card className="w-[380px] shadow-lg">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-3 border-b bg-muted/50">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Discussion</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8"
              onClick={onToggle}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Chat Content */}
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Messages Area */}
              <ScrollArea className="h-[300px] p-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex gap-3 mb-4">
                    <Avatar>
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        {msg.user[0]}
                      </div>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold">{msg.user}</span>
                        <span className="text-xs text-muted-foreground">
                          {msg.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm mt-1">{msg.content}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input Area */}
              <div className="p-3 border-t">
                <div className="flex gap-2">
                  <Textarea
                    ref={textareaRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    className="min-h-[80px]"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!message.trim()}
                    size="icon"
                    className="h-10 w-10"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
} 