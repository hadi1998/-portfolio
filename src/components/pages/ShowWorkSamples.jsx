import Grid from "@mui/material/Unstable_Grid2";
import { workSamples } from "../../constants/workSamples";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Slide,
  Typography,
} from "@mui/material";
import LinesEllipsis from "react-lines-ellipsis";
import { grey } from "@mui/material/colors";
import { useTheme } from "@emotion/react";

const ShowWorkSamples = ({ loading }) => {
  const theme = useTheme();
  return (
    <>
      {workSamples.map((work, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="down"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[500], borderRadius:3}}>
              <CardMedia
                component="img"
                height="250"
                width="200"
                image={work.image}
                alt={work.title}
              />
              <CardContent>
                <Typography variant="body1" textAlign="left" gutterBottom>
                  {work.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="left"
                  gutterBottom
                  justifyItems="center"
                  sx={{ direction: "ltr" }}
                >
                  <LinesEllipsis
                    text={work.info}
                    maxLine="3"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={work.link}
                  size="small"
                  color="primary"
                  target="_blank"
                  sx={{backgroundColor:theme.palette.mode === "dark" ? "chocolate" : "slategrey", borderRadius:3, px:2, color:"yellow"}}
                >
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default ShowWorkSamples;
