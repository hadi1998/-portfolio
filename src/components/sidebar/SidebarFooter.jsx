import { useTheme } from "@emotion/react";
import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const SidebarFooter = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "end", 
        alignItems: "center",
        height: 100,
      }}
    >
      

      <Typography
        variant="subtitle2"
        color={theme.palette.mode === "dark" ? "secondary" : "primary"}
      >
        طراحی شده با{" "}
        <FavoriteRounded
          sx={{
            verticalAlign: "middle",
            color: "tomato",
            height: "20",
          }}
        />
      </Typography>
      <Typography
        variant="caption"
        color={theme.palette.mode === "dark" ? "secondary" : "primary"}
        sx={{ mt: 2 }}
      >
        کپی رایت 1403{" "}
        <CopyrightRounded
          sx={{
            verticalAlign: "middle",
            height: "16",
            color:"royalblue"
          }}
        />
      </Typography>
    </Box>
  );
};

export default SidebarFooter;
