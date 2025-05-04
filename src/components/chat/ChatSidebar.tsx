import { Box, Button, Typography, List, ListItem, ListItemText, ListItemIcon, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Chat";
import ChatIcon from "@mui/icons-material/Chat";
import { ChatSession } from "../../types/chat";

interface ChatSidebarProps {
  chatHistory: ChatSession[];
}

const ChatSidebar = ({ chatHistory }: ChatSidebarProps) => {
  return (
    <Box
      sx={{
        width: "280px",
        backgroundColor: "#1E2028",
        borderRight: "1px solid #2D3039",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flexShrink: 0,
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
    </Box>
  );
};

export default ChatSidebar; 