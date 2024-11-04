import { Avatar, Box, Typography } from "@mui/material";
import Typed from "typed.js";
import bg02 from "../assets/bg02.jpeg";
import { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";
import TextTransition, { presets } from "react-text-transition";

import { Helmet } from "react-helmet-async";
import {
  ComputerEngineer,
  EnglishIconHighQuality,
  Programmar,
} from "../assets/icons";

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);

  //const nameEl = useRef(null);

  const strings = ["برنامه نویس هستم", "مترجم هستم", " فریلنسر هستم"];
  const icons = [ComputerEngineer, EnglishIconHighQuality, Programmar];

  useEffect(() => {
    /*const typedName = new Typed(nameEl.current, {
      strings: ["هادی خالقی"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: true,
    });*/

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
      setIconIndex((index) => index + 1);
    }, 3000);

    return () => {
      //typedName.destroy();
      clearInterval(stringsTransition);
    };
  }, []);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Box
      
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />

      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: "gold",
            height: 50,
            width: 50,
            borderRadius: "50%",
            ml: 2,
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Avatar
            src={ComputerEngineer}
            variant="rounded"
            sx={{
              margin: "0 auto",
            }}
          >
            CE
          </Avatar>
        </Box>
        <Typography /*ref={nameEl}*/ variant="h3" color="gold">
          هادی خالقی
        </Typography>
        <Box
          sx={{
            backgroundColor: "gold",
            height: 50,
            width: 50,
            borderRadius: "50%",
            mr: 2,
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Avatar
            src={ComputerEngineer}
            variant="rounded"
            sx={{
              margin: "0 auto",
            }}
          >
            HKH
          </Avatar>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 4,
          display: "flex",
        }}
      >
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
            color="whitesmoke"
            sx={{ textDecoration: "underline", textDecorationColor: "#1976d2" }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography variant="h4" color="whitesmoke" mr={0.5}>
          من
        </Typography>
      </Box>
      <Avatar
        src={icons[iconIndex % icons.length]}
        variant="rounded"
        sx={{
          width: 128,
          height: 128,
          mt: 2,
        }}
      ></Avatar>
    </Box>
  );
};

export default Home;
