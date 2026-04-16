import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeft, Moon, Sun, LogOut } from "lucide-react";
import { useDarkMode } from "@/lib/dark-mode";
import { useAuth } from "@/lib/auth-context";

export function PageHeader({ title }: { title: string }) {
  const location = useLocation();
  const { isDark, toggle } = useDarkMode();
  const { user, signOut } = useAuth();
  const showBack = location.pathname !== "/";

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card/95 backdrop-blur-md px-4 py-3">
      <div className="flex items-center gap-3">
        {showBack && (
          <Link to="/" className="rounded-full p-1.5 hover:bg-accent transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        )}
        <div className="flex items-center gap-2">
          <img
            src="https://yt3.googleusercontent.com/nvuNMbnLrWT-Nc0a9CI6YnVxGcZzd08d4c5Whwh0t1fgkhcCaDHEKudX3jMaBxe0xmRlyL8-_A=s900-c-k-c0x00ffffff-no-rj"
            alt="CPU Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <h1 className="text-lg font-bold font-display">{title}</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggle}
          className="rounded-full p-2 hover:bg-accent transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        {user && (
          <button
            onClick={signOut}
            className="rounded-full p-2 hover:bg-accent transition-colors text-destructive"
            aria-label="Sign out"
          >
            <LogOut className="h-5 w-5" />
          </button>
        )}
      </div>
    </header>
  );
}
