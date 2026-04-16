export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-chat-bot text-chat-bot-fg w-fit max-w-[80%]">
      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-typing-dot-1" />
      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-typing-dot-2" />
      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-typing-dot-3" />
    </div>
  );
}
