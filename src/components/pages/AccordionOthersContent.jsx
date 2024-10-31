import { useEffect, useState } from "react";
import {  otherSkills } from "../../constants/skills";
import Skill from "./Skill";

const AccordionOthersContent = () => {
  const [premierpro, setPremierPro] = useState(0);
  const [powerpoint, setPowerpoint] = useState(0);
  const [translation, setTanslation] = useState(0);
  const [photoshop, setPhotoshop] = useState(0);
  const [spanish, setSpanish] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPremierPro((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 50);
      });

      setPowerpoint((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });

      setTanslation((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });

      setPhotoshop((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });
      setSpanish((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 20);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const {
    powerpointSkill,
    photoshopSkill,
    premiereProSkill,
    translationSkill,
    spanishSkill
  } = otherSkills;

  return (
    <>
      <Skill
        name={powerpointSkill.name}
        icon={powerpointSkill.icon}
        color={powerpointSkill.color}
        value={powerpoint}
      />
      <Skill
        name={photoshopSkill.name}
        icon={photoshopSkill.icon}
        color={photoshopSkill.color}
        value={photoshop}
      />
      <Skill
        name={premiereProSkill.name}
        icon={premiereProSkill.icon}
        color={premiereProSkill.color}
        value={premierpro}
      />
      <Skill
        name={translationSkill.name}
        icon={translationSkill.icon}
        color={translationSkill.color}
        value={translation}
      />
       <Skill
        name={spanishSkill.name}
        icon={spanishSkill.icon}
        color={spanishSkill.color}
        value={spanish}
      />
    </>
  );
};

export default AccordionOthersContent;
