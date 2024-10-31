import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography } from "@mui/material";

const ValidationTextError = ({ message, icon }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Avatar
        src={icon}
        sx={{ width: 30, height: 30 }}
        variant="rounded"
      ></Avatar>
      <Typography
        sx={{
          fontSize: 14,
          ml: 0.5,
          color: theme.palette.mode === "dark" ? "white" : "teal",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default ValidationTextError;
