import { Drawer } from "@mui/material";
import { SidebarContent } from "../components/sidebar";
import { useContext } from "react";
import MainContext from "../context";

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
      onClose={() => setDrawerOpen(false)}
    >
      
      <SidebarContent />
    </Drawer>
  );
};

export default SidebarDrawer;
