import { useTheme } from "@emotion/react";
import { ExpandCircleDownRounded } from "@mui/icons-material";
import { AccordionSummary, Chip, Typography } from "@mui/material";

const AccordionSummaryContent = ({ setShowAccordion, icon, title , backgroundColor, cColor}) => {
  const theme = useTheme();

  const handleShowAccordion = () => {
    setShowAccordion(prev => !prev)
  }

  return (
    <AccordionSummary
      onClick={handleShowAccordion}
      expandIcon={
        <ExpandCircleDownRounded
          color={theme.palette.mode === "dark" ? "white" : "white"}
          sx={{color: theme.palette.mode === "dark" ? "white" : "white"}}
        />
      }
      sx={{
        color: theme.palette.mode === "dark" ? "black" : "white",
        direction: "ltr",
        backgroundColor: backgroundColor,
        borderRadius: 5,
      }}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Chip
        icon={icon}
        label={
          <Typography
            variant="body1"
            color= "white"
            sx={{
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        }
        sx={{ p: 3, backgroundColor: cColor }}
      />
    </AccordionSummary>
  );
};

export default AccordionSummaryContent;
