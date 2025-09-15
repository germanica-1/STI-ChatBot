import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Loader2,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chatbotService, ChatMessage } from "@/services/chatbot";

export default function SinglePageChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add welcome message when component mounts
    const welcomeMessage: ChatMessage = {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm your STI Muñoz-EDSA Virtual Assistant 👋. How can I help you today?",
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await chatbotService.sendMessage(inputMessage);

      setTimeout(() => {
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsTyping(false);
        setIsLoading(false);
      }, 1500); // Simulate typing delay
    } catch (error) {
      setIsTyping(false);
      setIsLoading(false);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact STI directly at (02) 8XXX-XXXX.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (content: string) => {
    return content.split("\n").map((line, index) => (
      <div
        key={index}
        className={
          line.startsWith("•") || line.startsWith("-") || line.match(/^\d+\./)
            ? "ml-2 sm:ml-4"
            : ""
        }
      >
        {line}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-blue-50 flex items-center justify-center p-2 sm:p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FCD34D' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Chat Interface */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8 px-2">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img
                src="/STI_logo.png"
                alt="STI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
                STI Chatbot
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-blue-700">
                Muñoz-EDSA Virtual Assistant
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto px-2">
            Your 24/7 digital companion for admissions, academics, student
            services, and campus information
          </p>
        </div>

        {/* Chat Window */}
        <Card
          className={`shadow-2xl transition-all duration-300 ${
            isMinimized
              ? "h-12 sm:h-16"
              : "h-[70vh] sm:h-[75vh] md:h-[600px] lg:h-[650px]"
          } flex flex-col mx-2 sm:mx-0`}
        >
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <img
                    src="/STI_logo.png"
                    alt="STI Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg truncate">
                    STI Virtual Assistant
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90">
                    Online • Ready to help
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setIsMinimized(!isMinimized)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
              >
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Minimize2 className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              <ScrollArea className="flex-1 p-3 sm:p-4 md:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[80%] p-3 sm:p-4 rounded-lg break-words ${
                          message.role === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-800 border border-gray-200"
                        }`}
                      >
                        <div className="text-xs sm:text-sm leading-relaxed">
                          {formatMessage(message.content)}
                        </div>
                        <div className="text-xs opacity-70 mt-1 sm:mt-2">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin text-blue-600" />
                          <span className="text-xs sm:text-sm">
                            Assistant is typing...
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input Area */}
              <div className="p-3 sm:p-4 md:p-6 border-t bg-gray-50">
                <div className="flex space-x-2 sm:space-x-3">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about STI..."
                    disabled={isLoading}
                    className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                    className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 md:px-6 flex-shrink-0"
                    size="sm"
                  >
                    <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Available 24/7 • Supports English and Tagalog
                </p>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 px-2">
          <p>© 2025 STI College Muñoz-EDSA • Powered by AI Technology</p>
        </div>
      </div>

      {/* Floating Chat Bubble (Alternative Access) */}
      {isMinimized && (
        <Button
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          size="icon"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </Button>
      )}
    </div>
  );
}
