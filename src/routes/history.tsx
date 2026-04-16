import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { BottomNav } from "@/components/BottomNav";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { Trash2, MessageCircle, LogIn } from "lucide-react";

interface HistoryItem {
  id: string;
  question: string;
  answer: string;
  created_at: string;
}

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Chat History — Career Point University Bot" },
      { name: "description", content: "View your previous conversations with CPU Bot." },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  const { user } = useAuth();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    loadHistory();
  }, [user]);

  const loadHistory = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50);
    setHistory(data || []);
    setLoading(false);
  };

  const clearHistory = async () => {
    if (!user) return;
    await supabase.from("chat_messages").delete().eq("user_id", user.id);
    setHistory([]);
  };

  if (!user) {
    return (
      <div className="min-h-screen pb-20">
        <PageHeader title="Chat History" />
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <LogIn className="h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-lg font-semibold">Sign in to view history</h2>
          <p className="text-sm text-muted-foreground mt-1">Your chat history is saved when you're logged in.</p>
          <Link
            to="/auth"
            className="mt-4 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Sign In
          </Link>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <PageHeader title="Chat History" />
      <div className="px-4 py-4 max-w-lg mx-auto">
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="mb-4 flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive hover:bg-destructive/20 transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear All History
          </button>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
        ) : history.length === 0 ? (
          <div className="text-center py-20">
            <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">No chat history yet. Start chatting!</p>
            <Link
              to="/chatbot"
              className="inline-block mt-4 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Open Chatbot
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((item) => (
              <div key={item.id} className="rounded-2xl bg-card border border-border p-4 shadow-sm">
                <p className="text-sm font-medium text-foreground">💬 {item.question}</p>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{item.answer.replace(/\*\*/g, "")}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-2">
                  {new Date(item.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
