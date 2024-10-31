import { WorkHistoryRounded } from "@mui/icons-material";
import { Card, CardContent, Chip, Divider, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2"
import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import ShowWorkSamples from "../components/pages/ShowWorkSamples";
  
  const WorkSamples = ({ helmetTitle }) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    })
    
    return (
     <Card sx={{height:"100vh", backgroundColor:theme.palette.mode === "dark" ? grey[700] : "whitesmoke", overflow:"scroll"}}>

        <Helmet><title>{helmetTitle}</title></Helmet>

        <CardContent>
            <Slide direction="down" in={loading} style={
                {transitionDelay: loading ? "200ms"  : "0ms"}
            } >
                <Divider 
                textAlign="center"
                sx={{
                    "&::before, &::after": {
                        borderColor: "success.main"
                    }
                }}>
                    <Chip 
                    color="success"
                    icon={<WorkHistoryRounded color="whitesmoke" sx={{color:"whitesmoke"}}/>}
                    label={
                        <Typography
                        variant="body1"
                        color="white"
                        sx={{
                            textAlign:"center"
                        }}>
                            نمونه کارهای من
                        </Typography>
                    }
                    sx={{p:3}}/>
                </Divider>
            </Slide>
            <Grid container sx={{mx: 3, mt: 3}}>
                <ShowWorkSamples loading={loading}/>
            </Grid>
        </CardContent>
     </Card>
        
    );
  };
  
  export default WorkSamples;
  