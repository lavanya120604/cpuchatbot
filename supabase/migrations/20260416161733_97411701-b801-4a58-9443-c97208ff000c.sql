CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own messages" ON public.chat_messages FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own messages" ON public.chat_messages FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own messages" ON public.chat_messages FOR DELETE USING (auth.uid() = user_id);

CREATE TABLE public.chat_memory (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  memory_key TEXT NOT NULL,
  memory_value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, memory_key)
);
ALTER TABLE public.chat_memory ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own memory" ON public.chat_memory FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own memory" ON public.chat_memory FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own memory" ON public.chat_memory FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own memory" ON public.chat_memory FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX idx_chat_messages_user ON public.chat_messages(user_id, created_at DESC);
CREATE INDEX idx_chat_memory_user ON public.chat_memory(user_id);