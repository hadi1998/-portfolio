import { Box, Typography } from "@mui/material";

const Page = (props) => {
  const { children, pageNumber, index, ...others } = props;
  return (
    <div
      role="switch"
      hidden={pageNumber !== index}
      id={`tabpanel-${index}`}
      aria-label={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && <Box sx={{ height: "100vh",width: "100%", overflow:"hidden" }}>{children}</Box>}
    </div>
  );
};

export default Page;
