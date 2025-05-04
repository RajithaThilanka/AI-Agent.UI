import { Box, TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: () => void;
  handleKeyPress: (event: React.KeyboardEvent) => void;
}

const ChatInput = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
  handleKeyPress,
}: ChatInputProps) => {
  return (
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
  );
};

export default ChatInput; 