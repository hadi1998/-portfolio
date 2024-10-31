import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardContent, Slide } from "@mui/material";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { Helmet } from "react-helmet-async";
import CustomDivider from "../components/common/CustomDivider";
import { AccountCircle } from "@mui/icons-material";
import { ContactForm, ContactSideTitle } from "../components/pages";

const Contact = ({ helmetTitlte }) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();


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
        <title>{helmetTitlte}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="warning.main"
          cColor="warning"
          icon={<AccountCircle />}
          align="center"
          text="ارتباط با من"
        />

        <Grid
          container
          sx={{
            mt: 5,
          }}
        >
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid xs={12} sx={12} md={8}>
              <Card
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContactForm/>
              </Card>
            </Grid>
          </Slide>
          <ContactSideTitle loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;
