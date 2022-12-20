
import {
  SkillsSection,
  SkillsIntro,
  Cards,
  SkillList,
  CardHeader,
  SkillsTitle,
  CardText,
  SkillsIntroText,
} from "./Skills-Styles";

const cards = {
  Coding: {
    values: ["Java", "HTML/CSS", "JavaScript", "SQL", "Python"],
  },
  Frameworks: {
    values: ["React", "Swing", "Freemarker", "Node.js", "Bootstrap"],
  },
  Concepts: {
    values: ["OOP", "Data Analysis", "Marketing", "UI/UX", "Mobile App"],
  },
  Tools: {
    // icon: faHammer,
    values: ["Git", "Shopify", "Figma", "Docker", "MongoDB"],
  },
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsIntro>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsIntroText>
          Through my education and employment experiences, I have learned various technologies and development principles as well as developed an array of soft skills. 
        </SkillsIntroText>
      </SkillsIntro>
      <Cards>
        {Object.keys(cards).map(function (keyName, keyIndex) {
          return (
            <SkillList key={keyIndex}>
              {/* <FontAwesomeIcon
                icon={cards[keyName].icon}
                size="2xl"
                className="font-awesome-icon"
                color={white}
              /> */}
              <CardHeader>{keyName}</CardHeader>
              {cards[keyName].values.map((value) => {
                return (
                  <li key={value}>
                    <CardText>{value}</CardText>
                  </li>
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