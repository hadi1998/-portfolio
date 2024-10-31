import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import { userComments } from "../../constants/aboutMeDetails";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";

const CommentsSlider = () => {
  const theme = useTheme();
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <>
      <Box
        component="div"
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? grey[800] : "wheat",
          py: 5,
          borderRadius: 10,
          mt: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider {...options}>
          {userComments.map((user, index) => (
            <Box key={index} component="div" sx={{ justifyContent: "center" }}>
              <Avatar
                src={user.avatar}
                variant="rounded"
                sx={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  margin: "0 auto",
                }}
              />
              <Typography
                variant="body1"
                textAlign="center"
                color="primary.main"
              >
                {user.fullname}
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                color="secondary.main"
                sx={{ mb: 2 }}
              >
                {user.jobTitle}
              </Typography>
              <Card
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark" ? grey[300] : "lightsalmon",
                  width: 1 / 2,
                  m: "0 auto", 
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    color={
                      theme.palette.mode === "dark" ? "palevioletred" : "white"
                    }
                  >
                    {user.comment}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
      <Button
        href="https://anjammidam.com/Hadi-63"
        size="small"
        color="primary"
        target="_blank"
        sx={{
          width:1,
          height: 60,
          backgroundColor:
            theme.palette.mode === "dark" ? "chocolate" : "slategrey",
          borderRadius: 5,
          px: 2,
          mt:3,
          color: "yellow",
          ":hover": "red"
        }}
      >
        مشاهده کامنت های بیشتر
      </Button>
    </>
  );
};

export default CommentsSlider;
