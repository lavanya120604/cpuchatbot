import { useState, useEffect } from "react";
import { motivationalQuotes } from "@/lib/faq-data";
import { Quote } from "lucide-react";

export function DailyQuote() {
  const [quote, setQuote] = useState(motivationalQuotes[0]);

  useEffect(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    setQuote(motivationalQuotes[dayOfYear % motivationalQuotes.length]);
  }, []);

  return (
    <div className="rounded-2xl bg-card border border-border p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <Quote className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <div>
          <p className="text-sm italic text-foreground leading-relaxed">"{quote.quote}"</p>
          <p className="mt-2 text-xs font-medium text-muted-foreground">— {quote.author}</p>
        </div>
      </div>
    </div>
  );
}
