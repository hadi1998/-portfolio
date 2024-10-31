import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
import mainContext from "../../context";
const ThemeActionButton = () => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(mainContext);

  return (
    <Box
      sx={{
        position: "absolute",
        direction:"rtl",
        display: {
          xs: "block",
          md: "block",
        },
        right:0,
        m:2
      }}
    >
      <Fab
        aria-label="ThemeChanger"
        variant="extended"
        size="small"
        color="secondary"
        onClick={handleThemeChange}
        sx={{ ml: 2, color: "whitesmoke" }}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined sx={{ ml: 1 }} />
        ) : (
          <NightlightOutlined sx={{ ml: 1 }} />
        )}
        {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
      </Fab>
    </Box>
  );
};

export default ThemeActionButton;
