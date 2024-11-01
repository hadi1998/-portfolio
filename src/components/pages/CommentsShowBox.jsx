import { Avatar, Box, Card, Chip, Grid, Typography } from "@mui/material";
import { ManAvatar, WomanAvatar } from "../../assets";
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";

const CommentsShowBox = ({ comment }) => {
  const theme = useTheme();


  const changeTimeStamp = (date) => {
    var timeStamp = new Date(date);
    return timeStamp.toLocaleString("fa-IR", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  };

  return (
    <Card
      elevation={10}
      sx={{
        direction: "ltr",
        width: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        py: 2,
        mt: 3,
        backgroundColor: theme.palette.mode === "dark" ? grey[800] : "white",
      }}
    >
      <Grid xs={3} md={2} sx={{ ml: 2 }}>
        <Avatar
          src={comment.gender == 1 ? ManAvatar : WomanAvatar}
          variant="rounded"
          sx={{
            width: 100,
            height: 100,
          }}
        >
          CE
        </Avatar>
      </Grid>

      <Grid xs={9} md={10} sx={{ mr: 2 }}>
        <Box
          sx={{
            width: 1,
            mt: 2,
            mr: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Grid xs={5} sm={6} md={8}>
            <Chip
              sx={{
                backgroundColor: "peachpuff",
                mb: 1,
                ml: 2,
                color: "darkslateblue",
              }}
              label={<Typography>{comment.username}</Typography>}
            ></Chip>
          </Grid>
          <Grid xs={7} sm={6} md={4} sx={{ mr: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  mr: 0.5,
                  color:
                    theme.palette.mode === "dark" ? "white" : "darkslateblue",
                }}
              >
                حوزه همکاری:{" "}
              </Typography>
              <Typography
                sx={{
                  color:
                    theme.palette.mode === "dark" ? "white" : "darkslateblue",
                }}
              >
                {comment.job_title}{" "}
              </Typography>
            </Box>
          </Grid>
        </Box>

        <Box sx={{ backgroundColor: "coral", p: 2, borderRadius: 10 }}>
          <Typography sx={{ color: "white" }}>{comment.message}</Typography>
        </Box>
        <Box sx={{ width: 1, mt: 2, mr: 1 }}>
          <Typography
            sx={{
              textAlign: "end",
              color: theme.palette.mode === "dark" ? "white" : "darkslateblue",
            }}
          >
            {changeTimeStamp(comment.date)}
          </Typography>
        </Box>
      </Grid>
    </Card>
  );
};

export default CommentsShowBox;
