import { useTheme } from "@emotion/react";
import {
  Badge,
  Box,
  Chip,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import { RandomReveal } from "react-random-reveal";

const Skill = ({ icon, color, name, value }) => {
  const theme = useTheme();
  return (
    <>
      <Divider
        textAlign="right"
        sx={{
          "&::before, &::after": {
            borderColor: `${color}.main`,
          },
          mt: 1,
        }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
          color={color}
          label={<Typography sx={{color: theme.palette.mode === "dark" ?  "black" : "white"}}><RandomReveal isPlaying duration={2} characters={name}/></Typography>}
          sx={{ color: "#000", p: 3 }}
        >
          
        </Chip>
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="purple">
            <Badge
              variant="standard"
              badgeContent={`${Math.round(value)}%`}
              color={color}
              sx={{ mr: 2 }}
            />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{
              height: 10,
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
