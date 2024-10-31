import { useTheme } from "@emotion/react";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Info = ({ children }) => {
  const theme = useTheme();
  return (
    <Typography variant="body1" color={theme.palette.mode === "dark" ?  "white" : "black"} textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
        }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی: هادی خالقی</Info>
      <Info>سن: 26</Info>
      <Info>شهر: بجنورد</Info>
      <Info>hadikhaleghi14@gmail.com :آدرس ایمیل</Info>
      <Info>شماره موبایل: 09388036702</Info>
    </>
  );
};

export default DevInfo;
