import { Box, IconButton, Tooltip } from "@mui/material";
import { GitHub, Telegram, Instagram, WhatsApp } from "@mui/icons-material";
import styled from "@emotion/styled";
import { devSocialMediaInfo } from "../../constants/aboutMeDetails";

const SocialMediaIcons = () => {
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip
      {...props}
      componentsProps={{ tooltip: { className: className } }}
    />
  ))(`
          color: white;
          background-color: darkgoldenrod;
      `);
  return (
    <>
      <Box
        component="div"
        sx={{ m: "0 auto", textAlign: "center" }}
      >
        {devSocialMediaInfo.map((item, index) => (
          <CustomTooltip key={index} title={item.title} followCursor>
            <IconButton aria-label={item.aria_label}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </IconButton>
          </CustomTooltip>
        ))}
      </Box>
    </>
  );
};

export default SocialMediaIcons;

