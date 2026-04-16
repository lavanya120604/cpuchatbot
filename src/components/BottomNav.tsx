import { Link, useLocation } from "@tanstack/react-router";
import { Home, MessageCircle, History, Phone } from "lucide-react";

const navItems = [
  { to: "/" as const, icon: Home, label: "Home" },
  { to: "/chatbot" as const, icon: MessageCircle, label: "Chat" },
  { to: "/history" as const, icon: History, label: "History" },
  { to: "/contact" as const, icon: Phone, label: "Contact" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs transition-colors ${
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
