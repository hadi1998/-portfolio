import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2.5}
      xl={2}
      sx={{ backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[300],
      height:"100vh",
      overflowY: "auto",
      overflowX: "hidden"
     }}
    >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
