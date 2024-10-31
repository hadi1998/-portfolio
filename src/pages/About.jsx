import {
  CodeRounded,
  CoffeeRounded,
  ComputerRounded,
  LanguageRounded,
  OtherHousesRounded,
  SelfImprovementRounded,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import {
  AccordionLangContent,
  AccordionOthersContent,
  AccordionSummaryContent,
  DevInfo,
  DevWorkCount,
} from "../components/pages";
import CustomDivider from "../components/common/CustomDivider";
import AccordionProgContent from "../components/pages/AccordionProgContent";
import { useEffect, useState } from "react";
import { ProfileOne, ProfileTwo } from "../assets";

const About = ({ helmetTitle }) => {
  const [showLangAccordion, setShowLangAccordion] = useState(false);
  const [showProgAccordion, setShowProgAccordion] = useState(true);
  const [showOthersAccordion, setShowOthersAccordion] = useState(false);

  const [profileIndex, setProfileIndex] = useState(0);

  const profiles = [ProfileOne, ProfileTwo];

  const theme = useTheme();

  useEffect(() => {
    const profileTransition = setInterval(() => {
      setProfileIndex((index) => index + 1);
    }, 3000);

    return () => {
      clearInterval(profileTransition);
    };
  }, []);

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
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={
                <CodeRounded
                  color={theme.palette.mode === "dark" ? "black" : "whitesmoke"}
                  sx={{
                    color:
                      theme.palette.mode === "dark" ? "black" : "whitesmoke",
                  }}
                />
              }
              align="right"
              text=" توسعه دهنده جونیور"
            />

            <Grid sx={{ display: "flex" }} justifyContent={"end"}>
              <Grid
                xs={4}
                sm={4}
                md={3}
                lg={3}
                sx={{
                  mt: 3,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
              >
                <DevWorkCount />
              </Grid>
              <Grid xs={12} sm={8} md={9} lg={9} sx={{ mr: 16 }}>
                <DevInfo />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <Avatar
              src={profiles[profileIndex % profiles.length]}
              variant="rounded"
              sx={{
                height: 250,
                width: 250,
                borderRadius:10,
                margin: "0 auto",
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              HKH
            </Avatar>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={
                <SelfImprovementRounded
                  color={theme.palette.mode === "dark" ? "black" : "white"}
                  sx={{
                    color: theme.palette.mode === "dark" ? "black" : "white",
                  }}
                />
              }
              align="center"
              text="مهارت های من"
            />

            <Accordion defaultExpanded sx={{ borderRadius: 5, mt: 2 }}>
              <AccordionSummaryContent
                setShowAccordion={setShowProgAccordion}
                title="برنامه نویسی"
                icon={
                  <CoffeeRounded
                    color={theme.palette.mode === "dark" ? "white" : "white"}
                    sx={{
                      color: theme.palette.mode === "dark" ? "white" : "white",
                    }}
                  />
                }
                backgroundColor="#4cc9f0"
                cColor="#4361ee"
              />
              <AccordionDetails
                sx={{
                  borderRadius: 5,
                  backgroundColor:
                    theme.palette.mode === "dark" ? grey[700] : "floralwhite",
                }}
              >
                {showProgAccordion ? <AccordionProgContent /> : null}
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                borderRadius: 5,
                mt: 5,
              }}
            >
              <AccordionSummaryContent
                setShowAccordion={setShowLangAccordion}
                title="زبان انگلیسی"
                icon={
                  <LanguageRounded
                    color={theme.palette.mode === "dark" ? "white" : "white"}
                    sx={{
                      color: theme.palette.mode === "dark" ? "white" : "white",
                    }}
                  />
                }
                backgroundColor="#ffca3a"
                cColor="#f95738"
              />
              <AccordionDetails
                sx={{
                  borderRadius: 5,
                  backgroundColor:
                    theme.palette.mode === "dark" ? grey[700] : "floralwhite",
                }}
              >
                {showLangAccordion ? <AccordionLangContent /> : null}
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: 5, mt: 5 }}>
              <AccordionSummaryContent
                setShowAccordion={setShowOthersAccordion}
                title="سایر مهارت ها"
                icon={
                  <ComputerRounded
                    color={
                      theme.palette.mode === "dark" ? "white" : "whitesmoke"
                    }
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "white" : "whitesmoke",
                    }}
                  />
                }
                backgroundColor="#b5179e"
                cColor="#8f2d56"
              />
              <AccordionDetails
                sx={{
                  borderRadius: 5,
                  backgroundColor:
                    theme.palette.mode === "dark" ? grey[700] : "floralwhite",
                }}
              >
                {showOthersAccordion ? <AccordionOthersContent /> : null}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
