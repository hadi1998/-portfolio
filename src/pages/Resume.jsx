import {
  HomeRepairServiceRounded,
  SchoolRounded,
  SettingsEthernetRounded,
  TagFacesRounded,
} from "@mui/icons-material";
import { Timeline } from "@mui/lab";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import CustomDivider from "../components/common/CustomDivider";
import { ResumeEduTimeline } from "../components/pages/";
import ResumeWorkTimeline from "../components/pages/ResumeWorkTimeline";
import { PoeteryIcon } from "../assets";
import { sportFavorites } from "../constants/aboutMeDetails";

const Resume = ({ helmetTitle }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  /*const [showFavorites, setShowFavorites] = useState();*/

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  /*const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setShowFavorites(entry.isIntersecting);
    });

    observer.observe(myRef.current);
  }, []);*/

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor:
          theme.palette.mode === "dark" ? grey[700] : "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid>
          <CustomDivider
            bColor="error.main"
            cColor="error"
            icon={
              <SettingsEthernetRounded
                color={theme.palette.mode === "dark" ? "black" : "whitesmoke"}
                sx={{
                  color: theme.palette.mode === "dark" ? "black" : "whitesmoke",
                }}
              />
            }
            align="center"
            text="رزومه من"
          />

          <Grid container sx={{ mt: 4 }}>
            <Grid xs={12} sm={6} md={6} lg={6}>
              <CustomDivider
                bColor="warning.main"
                cColor="warning"
                icon={
                  <HomeRepairServiceRounded
                    color={theme.palette.mode === "dark" ? "black" : "white"}
                    sx={{
                      color: theme.palette.mode === "dark" ? "black" : "white",
                    }}
                  />
                }
                align="center"
                text="تجربیات"
              />
              <Timeline position="right" sx={{ direction: "ltr" }}>
                <ResumeWorkTimeline loading={loading} />
              </Timeline>
            </Grid>

            <Grid xs={12} sm={6} md={6} lg={6}>
              <CustomDivider
                bColor="info.main"
                cColor="info"
                icon={
                  <SchoolRounded
                    color={theme.palette.mode === "dark" ? "black" : "white"}
                    sx={{
                      color: theme.palette.mode === "dark" ? "black" : "white",
                    }}
                  />
                }
                align="center"
                text="تحصیلات"
              />

              <Timeline position="right" sx={{ direction: "ltr" }}>
                <ResumeEduTimeline loading={loading} />
              </Timeline>
            </Grid>
          </Grid>
        </Grid>

        {/*<Grid ref={myRef}>
          {showFavorites ? (
            <>
              <CustomDivider
                bColor="success.main"
                cColor="success"
                icon={
                  <TagFacesRounded
                    color={
                      theme.palette.mode === "dark" ? "black" : "whitesmoke"
                    }
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "black" : "whitesmoke",
                    }}
                  />
                }
                align="center"
                text="علاقه مندی ها"
              />
              <Grid container sx={{ mt: 2 }}>
                <Grid xs={12} sm={6} md={6} lg={6} sx={{ p: 1 }}>
                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? `299ms` : "0ms",
                    }}
                  >
                    <Card
                      sx={{
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "darkblue"
                            : "paleturquoise",
                        borderRadius: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CardContent>
                        <Chip
                          label={<Typography>علاقه مندی های علمی</Typography>}
                        />
                      </CardContent>
                    </Card>
                  </Slide>

                  <Slide
                    direction="right"
                    in={loading}
                    style={{
                      transitionDelay: loading ? `299ms` : "0ms",
                    }}
                  >
                    <Card
                      sx={{
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "darkblue"
                            : "paleturquoise",
                        borderRadius: 3,
                        mt: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CardContent>
                        <Grid
                          container
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Chip
                            sx={{ px: 3, py: 8 }}
                            label={
                              <Typography sx={{ fontSize: 32 }}>شعر</Typography>
                            }
                          />
                          <Avatar
                            sx={{
                              width: 150,
                              height: 150,
                            }}
                            src={PoeteryIcon}
                          />
                        </Grid>
                      </CardContent>
                    </Card>
                  </Slide>
                </Grid>

                <Grid xs={12} sm={6} md={6} lg={6} sx={{ p: 1 }}>
                  <Slide
                    direction="left"
                    in={loading}
                    style={{
                      transitionDelay: loading ? `299ms` : "0ms",
                    }}
                  >
                    <Card
                      sx={{
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "blueviolet"
                            : "greenyellow",
                        borderRadius: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CardContent>
                        <Chip
                          label={<Typography>علاقه مندی های ورزشی</Typography>}
                        />
                      </CardContent>
                    </Card>
                  </Slide>

                  <Grid>
                    {sportFavorites.map((fav, index) => (
                      <Slide
                        direction="left"
                        in={loading}
                        style={{
                          transitionDelay: loading ? `${index + 3}99ms` : "0ms",
                        }}
                      >
                        <Card
                          sx={{
                            backgroundColor:
                              theme.palette.mode === "dark"
                                ? "blueviolet"
                                : "greenyellow",
                            borderRadius: 3,
                            mt: 3,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <CardContent>
                            <Grid
                              key={index}
                              container
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Chip
                                sx={{ px: 3, py: 8 }}
                                label={
                                  <Typography sx={{ fontSize: 32 }}>
                                    {fav.title}
                                  </Typography>
                                }
                              />
                              <Avatar
                                sx={{
                                  width: 150,
                                  height: 150,
                                }}
                                src={fav.icon}
                              />
                            </Grid>
                          </CardContent>
                        </Card>
                      </Slide>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : null}
        </Grid>*/}
      </CardContent>
    </Card>
  );
};

export default Resume;

