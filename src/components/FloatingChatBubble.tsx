import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function FloatingChatBubble() {
  return (
    <Link
      to="/chatbot"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg animate-float-bubble animate-pulse-glow transition-transform hover:scale-110"
      aria-label="Open chatbot"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </Link>
  );
}
