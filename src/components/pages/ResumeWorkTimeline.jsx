import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
  } from "@mui/lab";
  import { Slide, Typography } from "@mui/material";
  import { devExp } from "../../constants/aboutMeDetails";
  import { HomeRepairServiceRounded } from "@mui/icons-material";
  import { useTheme } from "@emotion/react";
  
  const ResumeWorkTimeline = ({ loading }) => {
    const theme = useTheme();
    return (
      <>
        {devExp.map((item, index) => (
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="info" variant="outlined">
                  <HomeRepairServiceRounded color="info" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant="caption"
                  color={theme.palette.mode === "dark" ? "whitesmoke" : "black"}
                >
                  {item.year}
                </Typography>
                <Typography
                  variant="body1"
                  color={theme.palette.mode === "dark" ? "whitesmoke" : "black"}
                >
                  {item.workPlace}
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.mode === "dark" ? "whitesmoke" : "black"}
                >
                  {item.job}
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.mode === "dark" ? "whitesmoke" : "black"}
                >
                  {item.subject}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </>
    );
  };
  
  export default ResumeWorkTimeline;
  