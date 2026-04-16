import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In — Career Point University Bot" },
      { name: "description", content: "Sign in or create an account to save your chat history." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  if (user) {
    navigate({ to: "/" });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (isSignUp) {
      const { error } = await signUp(email, password, name);
      if (error) {
        setError(error);
      } else {
        setSuccess("Account created! Check your email to confirm, then sign in. ✅");
        setIsSignUp(false);
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error);
      } else {
        navigate({ to: "/" });
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <Link to="/" className="rounded-full p-1.5 hover:bg-accent transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-bold font-display">
          {isSignUp ? "Create Account" : "Sign In"}
        </h1>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <img
              src="https://yt3.googleusercontent.com/nvuNMbnLrWT-Nc0a9CI6YnVxGcZzd08d4c5Whwh0t1fgkhcCaDHEKudX3jMaBxe0xmRlyL8-_A=s900-c-k-c0x00ffffff-no-rj"
              alt="CPU Logo"
              className="h-16 w-16 rounded-full mx-auto mb-3"
            />
            <h2 className="text-xl font-bold font-display">Career Point University</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {isSignUp ? "Create your account to get started" : "Sign in to access your chat history"}
            </p>
          </div>

          {error && (
            <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
              {error}
            </div>
          )}
          {success && (
            <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3 text-sm text-green-600">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="text-xs font-medium text-muted-foreground">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Harshya Sharma"
                  required
                />
              </div>
            )}
            <div>
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="student@cpur.edu.in"
                required
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => { setIsSignUp(!isSignUp); setError(""); setSuccess(""); }}
              className="font-semibold text-primary hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
