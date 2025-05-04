export interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export interface ChatSession {
  id: number;
  title: string;
  preview: string;
  date: Date;
} 