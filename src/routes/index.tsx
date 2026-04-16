import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { BottomNav } from "@/components/BottomNav";
import { FloatingChatBubble } from "@/components/FloatingChatBubble";
import { CountdownTimer } from "@/components/CountdownTimer";
import { DailyQuote } from "@/components/DailyQuote";
import { QuickFAQ } from "@/components/QuickFAQ";
import campusBanner from "@/assets/campus-banner.webp";
import { GraduationCap, MessageCircle, BookOpen, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Career Point University Bot — Your Campus Assistant" },
      { name: "description", content: "AI-powered chatbot for Career Point University students. Get instant answers about academics, fees, hostel, placements & more." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen pb-20">
      <PageHeader title="CPU Bot" />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src={campusBanner}
          alt="Career Point University Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        <div className="relative z-10 text-center px-6 py-10 max-w-lg mx-auto">
          <div className="mb-4">
            <img
              src="https://yt3.googleusercontent.com/nvuNMbnLrWT-Nc0a9CI6YnVxGcZzd08d4c5Whwh0t1fgkhcCaDHEKudX3jMaBxe0xmRlyL8-_A=s900-c-k-c0x00ffffff-no-rj"
              alt="CPU Logo"
              className="h-16 w-16 rounded-full mx-auto border-2 border-primary-foreground/30 shadow-lg"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground font-display leading-tight">
            Career Point University
          </h1>
          <p className="text-sm text-primary-foreground/80 mt-1 italic">
            "Empowering Minds, Shaping Futures"
          </p>
          <p className="text-sm text-primary-foreground/80 mt-3 leading-relaxed">
            Your AI-powered campus assistant 🤖 — Ask anything about academics, fees, hostel, placements & more!
          </p>

          <Link
            to="/chatbot"
            className="inline-flex items-center gap-2 mt-5 rounded-full bg-background text-foreground px-6 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Start Chatting
          </Link>

          <div className="mt-8">
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-8 max-w-lg mx-auto space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: GraduationCap, label: "Academics", color: "bg-cpu-blue/10 text-cpu-blue" },
            { icon: BookOpen, label: "Library", color: "bg-cpu-teal/10 text-cpu-teal" },
            { icon: Users, label: "Placements", color: "bg-cpu-purple/10 text-cpu-purple" },
          ].map(({ icon: Icon, label, color }) => (
            <Link
              key={label}
              to="/chatbot"
              search={{ q: label }}
              className={`flex flex-col items-center gap-2 rounded-2xl p-4 ${color} transition-transform hover:scale-105`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-semibold">{label}</span>
            </Link>
          ))}
        </div>

        <DailyQuote />
        <QuickFAQ />
      </section>

      <FloatingChatBubble />
      <BottomNav />
    </div>
  );
}
