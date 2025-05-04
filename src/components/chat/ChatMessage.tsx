import { Box, Typography, Avatar, Paper } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import { Message } from "../../types/chat";

interface ChatMessageProps {
  message: Message;
  formatTimeStamp: (date: Date) => string;
}

const ChatMessage = ({ message, formatTimeStamp }: ChatMessageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
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
            backgroundColor: message.sender === "user" ? "#5762D5" : "#2D3039",
            color: message.sender === "user" ? "#FFFFFF" : "#E3E5E8",
            borderRadius: "12px",
            borderTopRightRadius: message.sender === "user" ? "4px" : "12px",
            borderTopLeftRadius: message.sender === "ai" ? "4px" : "12px",
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
            alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
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
  );
};

export default ChatMessage; 