import { useState } from "react";
import { Box, IconButton, Avatar } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { useChat } from "../hooks/useChat";
import { useAppSelector } from "../store/hooks";
import ChatHeader from "../components/chat/ChatHeader";
import ChatMessage from "../components/chat/ChatMessage";
import ChatInput from "../components/chat/ChatInput";
import ChatSidebar from "../components/chat/ChatSidebar";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [inputMessage, setInputMessage] = useState("");
  const {
    messages,
    isTyping,
    messagesEndRef,
    handleSendMessage,
    handleKeyPress,
    formatTimeStamp,
  } = useChat();
  const chatHistory = useAppSelector((state) => state.chat.chatHistory);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onSendMessage = () => {
    handleSendMessage(inputMessage);
    setInputMessage("");
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    handleKeyPress(event);
    if (event.key === "Enter" && !event.shiftKey) {
      setInputMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#121319",
        padding: "20px",
        paddingBottom: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "calc(100vh - 80px)",
          width: "50%",
          backgroundColor: "#1E2028",
          color: "#E3E5E8",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          position: "relative",
        }}
      >
        {/* Sidebar Toggle Column */}
        <Box
          sx={{
            width: "60px",
            backgroundColor: "#191A21",
            borderRight: "1px solid #2D3039",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px 0",
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{
              color: isDrawerOpen ? "#5662E1" : "#9AA1B1",
              mb: 2,
              "&:hover": {
                backgroundColor: "rgba(86, 98, 225, 0.1)",
              },
            }}
          >
            <MenuBookIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#9AA1B1",
              mb: 2,
              "&:hover": {
                backgroundColor: "rgba(86, 98, 225, 0.1)",
              },
            }}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#9AA1B1",
              "&:hover": {
                backgroundColor: "rgba(86, 98, 225, 0.1)",
              },
            }}
          >
            <PersonIcon />
          </IconButton>

          {/* Profile button at bottom */}
          <Box sx={{ marginTop: "auto" }}>
            <Avatar
              sx={{
                bgcolor: "#DE4E37",
                width: 36,
                height: 36,
                cursor: "pointer",
              }}
            >
              R
            </Avatar>
          </Box>
        </Box>

        {/* Chat History Drawer */}
        {isDrawerOpen && <ChatSidebar chatHistory={chatHistory} />}

        {/* Main Chat Area */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: "100%",
            backgroundColor: "#18191F",
          }}
        >
          <ChatHeader />

          {/* Messages Area */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              backgroundColor: "#1A1C23",
            }}
          >
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                formatTimeStamp={formatTimeStamp}
              />
            ))}
            <div ref={messagesEndRef} />
          </Box>

          <ChatInput
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            handleSendMessage={onSendMessage}
            handleKeyPress={onKeyPress}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
