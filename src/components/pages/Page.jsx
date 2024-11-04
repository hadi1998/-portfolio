import { Box, Typography } from "@mui/material";

const Page = (props) => {
  const { children, pageNumber, index, ...others } = props;
  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      draggable={false}
      id={`tabpanel-${index}`}
      aria-label={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && <Box sx={{ height: "100vh", overflow:"hidden" }}>{children}</Box>}
    </div>
  );
};

export default Page;
