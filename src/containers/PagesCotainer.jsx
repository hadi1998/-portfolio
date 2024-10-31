import Grid from "@mui/material/Unstable_Grid2";


const PagesCotainer = ({children}) => {
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={9.5}
      xl={10}
      sx={{ backgroundColor: "secondary.main" }}
    >
      {children}
    </Grid>
  );
};

export default PagesCotainer;
