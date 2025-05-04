import { Box, Typography, Avatar, IconButton } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ChatHeader = () => {
  return (
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
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#E3E5E8" }}>
          AI Assistant
        </Typography>
      </Box>
      <IconButton sx={{ color: "#9AA1B1" }}>
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

export default ChatHeader; 