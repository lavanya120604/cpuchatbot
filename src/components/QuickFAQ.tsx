import { getQuickFAQs } from "@/lib/chatbot-engine";
import { Link } from "@tanstack/react-router";
import { HelpCircle } from "lucide-react";

export function QuickFAQ() {
  const faqs = getQuickFAQs();

  return (
    <div className="rounded-2xl bg-card border border-border p-5 shadow-sm">
      <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
        <HelpCircle className="h-4 w-4 text-primary" />
        Quick Questions
      </h3>
      <div className="flex flex-wrap gap-2">
        {faqs.map((faq) => (
          <Link
            key={faq.id}
            to="/chatbot"
            search={{ q: faq.question }}
            className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground hover:bg-accent transition-colors"
          >
            {faq.question}
          </Link>
        ))}
      </div>
    </div>
  );
}
