import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Drawer,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import AddIcon from "@mui/icons-material/Add";
import MenuBookIcon from "@mui/icons-material/MenuBook";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface ChatSession {
  id: number;
  title: string;
  preview: string;
  date: Date;
}

const ChatWithDrawer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample chat history
  const chatHistory: ChatSession[] = [
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

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "I'm processing your request. This is a simulated response.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const formatTimeStamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
      {/* Main Chat Container */}
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

        {/* Chat History Drawer - Conditionally Rendered */}
        <Drawer
          variant="persistent"
          anchor="left"
          open={isDrawerOpen}
          sx={{
            position: "relative",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              position: "relative",
              width: "280px",
              border: "none",
              borderRight: "1px solid #2D3039",
              backgroundColor: "#1E2028",
              marginLeft: "60px", // Account for the sidebar toggle column
              zIndex: 0,
            },
          }}
        >
          <Box sx={{ padding: "16px" }}>
            <Button
              startIcon={<AddIcon />}
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#5662E1",
                color: "white",
                "&:hover": {
                  backgroundColor: "#4752C4",
                },
                textTransform: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                fontWeight: 500,
              }}
            >
              New Chat
            </Button>
          </Box>

          <Box sx={{ padding: "16px 16px 8px 16px" }}>
            <Typography
              variant="overline"
              sx={{
                color: "#9AA1B1",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.8px",
              }}
            >
              RECENT CONVERSATIONS
            </Typography>
          </Box>

          <List sx={{ padding: "0 8px" }}>
            {chatHistory.map((chat) => (
              <ListItem
                key={chat.id}
                button
                sx={{
                  borderRadius: "6px",
                  mb: 0.5,
                  pl: 2,
                  py: 1,
                  backgroundColor:
                    chat.id === 1 ? "rgba(86, 98, 225, 0.1)" : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(86, 98, 225, 0.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: "28px" }}>
                  <ChatIcon sx={{ color: "#9AA1B1", fontSize: "18px" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      noWrap
                      sx={{
                        fontSize: "14px",
                        fontWeight: chat.id === 1 ? 500 : 400,
                        color: "#E3E5E8",
                      }}
                    >
                      {chat.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      noWrap
                      sx={{ fontSize: "12px", color: "#9AA1B1", mt: 0.5 }}
                    >
                      {chat.preview}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Drawer>

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
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 24px",
              borderBottom: "1px solid #2D3039",
              backgroundColor: "#212630",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  bgcolor: "#5762D5",
                  width: 32,
                  height: 32,
                  marginRight: 1.5,
                }}
              >
                <SmartToyIcon sx={{ fontSize: 20 }} />
              </Avatar>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#E3E5E8" }}
              >
                AI Assistant
              </Typography>
            </Box>
            <IconButton sx={{ color: "#9AA1B1" }}>
              <MoreVertIcon />
            </IconButton>
          </Box>

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
              <Box
                key={message.id}
                sx={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                {message.sender === "ai" && (
                  <Avatar
                    sx={{
                      bgcolor: "#5762D5",
                      width: 32,
                      height: 32,
                      marginRight: 1.5,
                      marginTop: 0.5,
                    }}
                  >
                    <SmartToyIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                )}

                <Box
                  sx={{
                    maxWidth: "75%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      padding: "12px 16px",
                      backgroundColor:
                        message.sender === "user" ? "#5762D5" : "#2D3039",
                      color: message.sender === "user" ? "#FFFFFF" : "#E3E5E8",
                      borderRadius: "12px",
                      borderTopRightRadius:
                        message.sender === "user" ? "4px" : "12px",
                      borderTopLeftRadius:
                        message.sender === "ai" ? "4px" : "12px",
                    }}
                  >
                    <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                      {message.text}
                    </Typography>
                  </Paper>
                  <Typography
                    variant="caption"
                    sx={{
                      marginTop: 0.5,
                      color: "#9AA1B1",
                      alignSelf:
                        message.sender === "user" ? "flex-end" : "flex-start",
                    }}
                  >
                    {formatTimeStamp(message.timestamp)}
                  </Typography>
                </Box>

                {message.sender === "user" && (
                  <Avatar
                    sx={{
                      bgcolor: "#2D3039",
                      color: "#E3E5E8",
                      width: 32,
                      height: 32,
                      marginLeft: 1.5,
                      marginTop: 0.5,
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                )}
              </Box>
            ))}

            {isTyping && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar sx={{ bgcolor: "#5762D5", width: 32, height: 32 }}>
                  <SmartToyIcon sx={{ fontSize: 20 }} />
                </Avatar>
                <Paper
                  elevation={0}
                  sx={{
                    padding: "12px 16px",
                    backgroundColor: "#2D3039",
                    borderRadius: "12px",
                    borderTopLeftRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <AutorenewIcon
                    sx={{
                      fontSize: 18,
                      color: "#9AA1B1",
                      animation: "spin 1s linear infinite",
                      "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" },
                      },
                    }}
                  />
                  <Typography sx={{ color: "#9AA1B1" }}>
                    AI is thinking...
                  </Typography>
                </Paper>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input Area */}
          <Box
            sx={{
              padding: "16px 24px 24px",
              borderTop: "1px solid #2D3039",
              backgroundColor: "#1A1C23",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#2D3039",
                borderRadius: "12px",
                padding: "4px 4px 4px 16px",
              }}
            >
              <TextField
                fullWidth
                variant="standard"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                multiline
                maxRows={4}
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "#E3E5E8",
                    padding: "8px 0",
                  },
                }}
              />
              <IconButton
                onClick={handleSendMessage}
                sx={{
                  backgroundColor: "#5762D5",
                  color: "white",
                  width: 40,
                  height: 40,
                  "&:hover": {
                    backgroundColor: "#4752C4",
                  },
                  marginLeft: 1,
                }}
              >
                <SendIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatWithDrawer;
