import { Slide, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { WorldMap } from "../../assets";
import { useTheme } from "@emotion/react";

const ContactSideTitle = ({loading}) => {
    const theme = useTheme();
    return(
        <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "200ms" : "0ms",
            }}
          >
            <Grid
              xs={0}
              sm={0}
              md={4}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${WorldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                color="main.primary"
                sx={{
                  fontFamily: "vazir",
                  mt: 4,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                بیا در مورد همه چیز باهم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="main.primary"
                sx={{
                  mt: 2,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                👋{" "}
                <a
                  href="mailto:hadikhaleghi14@gmail.com"
                  alt="email"
                  style={{
                    color: theme.palette.mode === "dark" ? "gold" : "tomato",
                  }}
                >
                  ایمیل
                </a>{" "}
                بزن به من
              </Typography>
            </Grid>
          </Slide>
    );
};

export default ContactSideTitle;