import {
  SkillsSection,
  SkillsIntro,
  Cards,
  SkillList,
  CardHeader,
  SkillsTitle,
  CardText,
  SkillsIntroText,
  CardItem,
} from "./Skills-Styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faBorderAll, faLightbulb, faToolbox } from "@fortawesome/free-solid-svg-icons";
const cards = {
  Languages: {
    icon: faCodeBranch,
    values: ["Python", "HTML/CSS", "Node.js", "SQL", "Java"],
  },
  Technologies: {
    icon: faBorderAll,
    values: ["React", "Chakra UI", "AWS", "MongoDB", "Firebase"],
  },
  Concepts: {
    icon: faLightbulb,
    values: ["OOP", "Relational DBs", "Agile", "UI/UX", "Mobile App"],
  },
  Tools: {
    icon: faToolbox,
    values: ["Git", "AWS", "Unix", "Docker", "DBeaver"],
  },
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsIntro>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsIntroText>
          Through my education and employment experiences, I have learned
          various technologies and development principles as well as developed
          an array of soft skills.
        </SkillsIntroText>
      </SkillsIntro>
      <Cards>
        {Object.keys(cards).map(function (keyName, keyIndex) {
          return (
            <SkillList key={keyIndex}>
              <FontAwesomeIcon
                icon={cards[keyName].icon}
                size="2xl"
                className="font-awesome-icon"
              />
              <CardHeader>{keyName}</CardHeader>
              {cards[keyName].values.map((value) => {
                return (
                  <CardItem key={value}>
                    <CardText>{value}</CardText>
                  </CardItem>
                );
              })}
            </SkillList>
          );
        })}
      </Cards>
    </SkillsSection>
  );
};

export default Skills;
