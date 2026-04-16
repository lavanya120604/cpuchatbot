import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { BottomNav } from "@/components/BottomNav";
import { TypingIndicator } from "@/components/TypingIndicator";
import { getChatbotResponse, getQuickFAQs } from "@/lib/chatbot-engine";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { Send, Mic, MicOff } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface ChatMsg {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

export const Route = createFileRoute("/chatbot")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string) || "",
  }),
  head: () => ({
    meta: [
      { title: "Chatbot — Career Point University Bot" },
      { name: "description", content: "Chat with CPU Bot for instant answers about your university queries." },
    ],
  }),
  component: ChatbotPage,
});

function ChatbotPage() {
  const { q } = Route.useSearch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "bot",
      content: "Hello! 👋 I'm the **Career Point University Bot**. How can I help you today? Ask me about academics, fees, hostel, placements, or anything about campus life! 😊",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Handle initial query from search params
  useEffect(() => {
    if (q) {
      handleSend(q);
      navigate({ to: "/chatbot", search: { q: "" }, replace: true });
    }
  }, []);

  const saveToDb = async (question: string, answer: string) => {
    if (!user) return;
    await supabase.from("chat_messages").insert({
      user_id: user.id,
      question,
      answer,
    });
  };

  const handleSend = async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg) return;
    if (!text) setInput("");

    const userMsg: ChatMsg = { role: "user", content: msg, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((r) => setTimeout(r, 500 + Math.random() * 1000));

    const response = getChatbotResponse(msg);
    const botMsg: ChatMsg = { role: "bot", content: response, timestamp: new Date() };
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);

    saveToDb(msg, response);
  };

  const toggleVoice = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  const quickFaqs = getQuickFAQs().slice(0, 4);

  return (
    <div className="flex flex-col h-screen">
      <PageHeader title="CPU Chatbot" />

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-36">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-chat-user text-chat-user-fg rounded-br-md"
                  : "bg-chat-bot text-chat-bot-fg rounded-bl-md"
              }`}
            >
              {msg.role === "bot" ? (
                <div className="prose prose-sm dark:prose-invert max-w-none [&_p]:m-0 [&_strong]:text-inherit">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : (
                msg.content
              )}
              <p className={`text-[10px] mt-1 ${msg.role === "user" ? "text-chat-user-fg/60" : "text-chat-bot-fg/50"}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <TypingIndicator />
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Quick FAQ chips */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {quickFaqs.map((faq) => (
            <button
              key={faq.id}
              onClick={() => handleSend(faq.question)}
              className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground hover:bg-accent transition-colors"
            >
              {faq.question}
            </button>
          ))}
        </div>
      )}

      {/* Input Bar */}
      <div className="fixed bottom-16 left-0 right-0 border-t border-border bg-card/95 backdrop-blur-md px-3 py-3 safe-area-bottom">
        <div className="flex items-center gap-2 max-w-lg mx-auto">
          <button
            onClick={toggleVoice}
            className={`shrink-0 rounded-full p-2.5 transition-all ${
              isListening
                ? "bg-destructive text-destructive-foreground animate-pulse-glow"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
            aria-label={isListening ? "Stop listening" : "Start voice input"}
          >
            {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about CPU..."
            className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="shrink-0 rounded-full bg-primary p-2.5 text-primary-foreground disabled:opacity-40 transition-all hover:scale-105"
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
