import { faqData, fallbackResponses, type FAQItem } from "./faq-data";

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function lemmatize(word: string): string {
  const lemmaMap: Record<string, string> = {
    exams: "exam", fees: "fee", charges: "charge", studies: "study",
    practicals: "practical", hostels: "hostel", libraries: "library",
    certificates: "certificate", documents: "document", scholarships: "scholarship",
    placements: "placement", companies: "company", students: "student",
    working: "work", starting: "start", paying: "pay", getting: "get",
    located: "locate", required: "require", available: "available",
  };
  if (word.endsWith("ing") && word.length > 5) {
    const stem = word.slice(0, -3);
    return lemmaMap[word] || stem;
  }
  if (word.endsWith("s") && !word.endsWith("ss")) {
    return lemmaMap[word] || word.slice(0, -1);
  }
  return lemmaMap[word] || word;
}

function computeSimilarity(input: string[], faq: FAQItem): number {
  const inputLemmas = input.map(lemmatize);
  let score = 0;

  // Keyword matching
  for (const kw of faq.keywords) {
    if (inputLemmas.includes(kw)) score += 2;
  }

  // Pattern matching
  const inputStr = inputLemmas.join(" ");
  for (const pattern of faq.patterns) {
    const patTokens = tokenize(pattern).map(lemmatize);
    const matchCount = patTokens.filter((t) => inputLemmas.includes(t)).length;
    const patternScore = matchCount / patTokens.length;
    if (patternScore > 0.6) score += patternScore * 5;
  }

  return score;
}

// Dynamic memory store
const dynamicMemory = new Map<string, string>();

export function learnMemory(key: string, value: string) {
  dynamicMemory.set(key.toLowerCase(), value);
}

export function getMemory(key: string): string | undefined {
  return dynamicMemory.get(key.toLowerCase());
}

export function getAllMemory(): Map<string, string> {
  return new Map(dynamicMemory);
}

// Check if user is trying to teach the bot
function checkForLearning(input: string): string | null {
  const learnPatterns = [
    /(?:our|my|the)\s+(\w+(?:\s+\w+)?)\s+is\s+(?:on\s+)?(.+)/i,
    /(\w+(?:\s+\w+)?)\s+(?:is|are)\s+(?:on|at|from|scheduled)\s+(.+)/i,
    /remember\s+(?:that\s+)?(\w+(?:\s+\w+)?)\s+(?:is|are)\s+(.+)/i,
  ];
  for (const pattern of learnPatterns) {
    const match = input.match(pattern);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      if (key.length > 2 && value.length > 2) {
        learnMemory(key, value);
        return `Got it! I'll remember that **${key}** is **${value}** 📝✅. Ask me about it anytime!`;
      }
    }
  }
  return null;
}

// Check dynamic memory for answer
function checkMemory(input: string): string | null {
  const tokens = tokenize(input);
  for (const [key, value] of dynamicMemory) {
    const keyTokens = tokenize(key);
    const matchCount = keyTokens.filter((kt) => tokens.includes(kt)).length;
    if (matchCount >= keyTokens.length * 0.7) {
      return `Based on what I've learned: **${key}** is **${value}** 📋`;
    }
  }
  return null;
}

export function getChatbotResponse(userInput: string): string {
  const input = userInput.trim();
  if (!input) return "Please type a question! I'm here to help 😊";

  // Check if user is teaching the bot
  const learnResult = checkForLearning(input);
  if (learnResult) return learnResult;

  // Tokenize and match
  const tokens = tokenize(input);
  if (tokens.length === 0) return "Could you please rephrase that? 🤔";

  // Score all FAQ items
  const scored = faqData.map((faq) => ({
    faq,
    score: computeSimilarity(tokens, faq),
  }));

  scored.sort((a, b) => b.score - a.score);

  if (scored[0].score >= 3) {
    return scored[0].faq.answer;
  }

  // Check dynamic memory
  const memoryResult = checkMemory(input);
  if (memoryResult) return memoryResult;

  // Fallback
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

export function getQuickFAQs(): { question: string; id: string }[] {
  return [
    { question: "When are exams?", id: "exam-start" },
    { question: "How to pay fees?", id: "fee-online" },
    { question: "Hostel charges?", id: "hostel-charges" },
    { question: "Placement details?", id: "placements" },
    { question: "When is farewell?", id: "farewell" },
    { question: "Library timing?", id: "library" },
    { question: "Contact registrar?", id: "registrar" },
    { question: "Transport info?", id: "transport" },
  ];
}
