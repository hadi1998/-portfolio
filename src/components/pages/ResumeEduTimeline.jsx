import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Slide, Typography } from "@mui/material";
import { devEdu } from "../../constants/aboutMeDetails";
import { SchoolRounded } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const ResumeEduTimeline = ({ loading }) => {
  const theme = useTheme();
  return (
    <>
      {devEdu.map((item, index) => (
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
                <SchoolRounded color="info" />
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
                {item.cert}
              </Typography>
              <Typography
                variant="body2"
                color={theme.palette.mode === "dark" ? "whitesmoke" : "black"}
              >
                {item.major}
              </Typography>
              <Typography
                variant="body2"
                color={theme.palette.mode === "dark" ? "whitesmoke" : "black"}
              >
                {item.university}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </>
  );
};

export default ResumeEduTimeline;
