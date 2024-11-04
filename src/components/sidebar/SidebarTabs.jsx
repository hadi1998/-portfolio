import { Tab, Tabs } from "@mui/material";
import { grey } from "@mui/material/colors";
import MainContext from "../../context";
import { useContext } from "react";
import { tabsData } from "../../constants/TabsData";
import { useTheme } from "@emotion/react";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const theme = useTheme();

  const data = tabsData();

  return (
    <Tabs
      orientation="vertical"
      variant="standard"
      scrollButtons="auto"
      allowScrollButtonsMobile
      indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          draggable={false}
          iconPosition="start"
          onClick={() => setDrawerOpen(false)}
          sx={{
            "&.MuiTab-root": {
              minHeight: 50,
              backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[400],
              m: 0.5,
              borderRadius: 2,
              my: 0.5,
              mx: 1,
            },
          }}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
