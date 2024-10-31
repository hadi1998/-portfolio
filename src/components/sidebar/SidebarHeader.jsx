import { Avatar, Box, Typography } from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import SocialMediaIcons from "./SocialMediaIcons";
import ThemeActionButton from "./ThemeActionButton";
import { useTheme } from "@emotion/react";
const SidebarHeader = () => {

  const theme = useTheme();
  return (
    <>
      <Avatar
        src={avatar}
        variant="rounded"
        sx={{
          height: 200,
          width: 200,
          margin: "0 auto",
          borderRadius: 5,
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        ه خ
      </Avatar>
      <Typography variant="h6" color={theme.palette.mode === "dark" ? "primary" : "primary"} sx={{ mt: 2 }}>
        هادی خالقی
      </Typography>
      <Typography variant="caption" color={theme.palette.mode === "dark" ? "primary" : "primary"}>
        مترجم و علاقه مند به برنامه نویسی
      </Typography>
      <SocialMediaIcons />
    </>
  );
};

export default SidebarHeader;
