import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message, ChatSession } from "../../types/chat";

interface ChatState {
  messages: Message[];
  chatHistory: ChatSession[];
  isTyping: boolean;
  selectedChatId: number | null;
}

const initialState: ChatState = {
  messages: [
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ],
  chatHistory: [],
  isTyping: false,
  selectedChatId: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    setChatHistory: (state, action: PayloadAction<ChatSession[]>) => {
      state.chatHistory = action.payload;
    },
    setIsTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    setSelectedChatId: (state, action: PayloadAction<number | null>) => {
      state.selectedChatId = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const {
  addMessage,
  setMessages,
  setChatHistory,
  setIsTyping,
  setSelectedChatId,
  clearMessages,
} = chatSlice.actions;

export default chatSlice.reducer;
