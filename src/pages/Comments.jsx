import { AssignmentRounded, ForumRounded } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CommentsSlider from "../components/pages/CommentsSlider";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import CustomDivider from "../components/common/CustomDivider";
import { ContactForm } from "../components/pages";
import CommentsShowBox from "../components/pages/CommentsShowBox";
import MainContext from "../context";

const Comments = ({ helmetTitle }) => {
  const theme = useTheme();
  const [, setLoading] = useState(false);

  const { comments } = useContext(MainContext);
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor:
          theme.palette.mode === "dark" ? grey[700] : "whitesmoke",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container>
          <Card
            sx={{
              px: 3,
              pb: 5,
              pt: 2,
              backgroundColor:
                theme.palette.mode === "dark" ? grey[700] : "white",
            }}
          >
            <CustomDivider
              bColor="success.main"
              cColor="success"
              icon={
                <ForumRounded
                  color={theme.palette.mode === "dark" ? "black" : "whitesmoke"}
                  sx={{
                    color:
                      theme.palette.mode === "dark" ? "black" : "whitesmoke",
                  }}
                />
              }
              align="center"
              text="نظرات کارفرماها"
            />

            <CommentsSlider />
          </Card>
        </Grid>
        <Grid container>
          <Card
            sx={{
              width: 1,
              my: 5,
              px: 3,
              py: 5,
              backgroundColor:
                theme.palette.mode === "dark" ? grey[700] : "white",
            }}
          >
            <CustomDivider
              bColor="success.main"
              cColor="success"
              icon={
                <AssignmentRounded
                  color={theme.palette.mode === "dark" ? "black" : "whitesmoke"}
                  sx={{
                    color:
                      theme.palette.mode === "dark" ? "black" : "whitesmoke",
                  }}
                />
              }
              align="center"
              text="اگه باهام همکاری داشتی، خوشحال میشم نظرت رو بهم بگی"
            />

            <ContactForm section="Comments" />

            <Grid container sx={{ mt: 3, flexDirection: "column-reverse" }}>
              {comments.length > 0 ? (
                comments.map((c) => <CommentsShowBox comment={c} />)
              ) : (
                <Card
                  elevation={10}
                  sx={{
                    width: 1,
                    py: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    display:"flex",
                    flexDirection:"column",
                    backgroundColor:
                      theme.palette.mode === "dark" ? grey[800] : "white",
                  }}
                >
                  <Typography sx={{color: theme.palette.mode === "dark" ? "palegreen" : "purple" , mb: 2}}>فعلا نظری ثبت نشده</Typography>
                  <Avatar
                    sx={{ width: 200, height: 200 }}
                    src={require("../assets/no-found.gif")}
                  >
                    NC
                  </Avatar>
                </Card>
              )}
            </Grid>
          </Card>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Comments;
