import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { englishSkills } from "../../constants/skills";
import Skill from "./Skill";
import CustomDivider from "../common/CustomDivider";
import { AutoStories} from "@mui/icons-material";

const AccordionLangContent = () => {
  const [speaking, setSpeaking] = useState(0);
  const [listening, setListening] = useState(0);
  const [reading, setReading] = useState(0);
  const [writing, setWriting] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setSpeaking((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80); 
      });
      setListening((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });
      setReading((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70); 
      });
      setWriting((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70); 
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { listeningSkill, writingSkill, readingSkill, speakingSkill } =
    englishSkills;
  return (
    <>
      <CustomDivider
        bColor="success.main"
        cColor="success"
        icon={
          <AutoStories
            color={theme.palette.mode === "dark" ? "black" : "whitesmoke"}
            sx={{
              color: theme.palette.mode === "dark" ? "black" : "whitesmoke",
            }}
          />
        }
        align="center"
        text="Upper Intermediate سطح"
      />
      <Skill
        name={speakingSkill.name}
        icon={speakingSkill.icon}
        color={speakingSkill.color}
        value={speaking}
      />
      <Skill
        name={readingSkill.name}
        icon={readingSkill.icon}
        color={readingSkill.color}
        value={reading}
      />
      <Skill
        name={listeningSkill.name}
        icon={listeningSkill.icon}
        color={listeningSkill.color}
        value={listening}
      />
      <Skill
        name={writingSkill.name}
        icon={writingSkill.icon}
        color={writingSkill.color}
        value={writing}
      />
    </>
  );
};

export default AccordionLangContent;
