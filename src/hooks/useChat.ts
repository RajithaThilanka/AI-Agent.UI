import { useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addMessage,
  setIsTyping,
  setChatHistory,
} from "../store/slices/chatSlice";
import { Message } from "../types/chat";
import { chatHistory } from "../constants/chatData";

export const useChat = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.chat?.messages ?? []);
  const isTyping = useAppSelector((state) => state.chat?.isTyping ?? false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    dispatch(setChatHistory(chatHistory));
  }, [dispatch]);

  const handleSendMessage = (inputMessage: string) => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    dispatch(addMessage(newMessage));
    dispatch(setIsTyping(true));

    // Simulate AI response
    setTimeout(() => {
      dispatch(setIsTyping(false));
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "I'm processing your request. This is a simulated response.",
        sender: "ai",
        timestamp: new Date(),
      };
      dispatch(addMessage(aiResponse));
    }, 1500);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const input = event.currentTarget as HTMLInputElement;
      handleSendMessage(input.value);
    }
  };

  const formatTimeStamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return {
    messages,
    isTyping,
    messagesEndRef,
    handleSendMessage,
    handleKeyPress,
    formatTimeStamp,
  };
}; 