import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#F7418F",
      green: "#8ac926",
    },
    secondary: {
      main: "#bd93f9",
    },
  },
  typography: {
    fontFamily: "vazir, roboto",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: { textTransform: "none", border: `2px dashed ${blue[500]}` },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: { textTransform: "none", border: `4px dashed ${red[500]}` },
        },
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "white",
          backgroundColor: "violet",
        },
      },
    },
  },

 
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#fbc437",
    },
    secondary: {
      main: "#7BD3EA",
    },
  },
  typography: {
    fontFamily: "vazir, roboto",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: { textTransform: "none", border: `2px dashed ${blue[500]}` },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: { textTransform: "none", border: `4px dashed ${red[500]}` },
        },
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "white",
          backgroundColor: "violet",
        },
      },
    },
  },
});

