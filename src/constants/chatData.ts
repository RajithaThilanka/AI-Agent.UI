import { ChatSession } from "../types/chat";

export const chatHistory: ChatSession[] = [
  {
    id: 1,
    title: "Current Chat",
    preview: "Hello! I'm your AI assistant...",
    date: new Date(),
  },
  {
    id: 2,
    title: "Project Planning",
    preview: "Let's outline the next steps...",
    date: new Date(Date.now() - 86400000),
  },
  {
    id: 3,
    title: "Code Review",
    preview: "Here's my analysis of your code...",
    date: new Date(Date.now() - 172800000),
  },
  {
    id: 4,
    title: "Product Research",
    preview: "Based on the market trends...",
    date: new Date(Date.now() - 259200000),
  },
]; 