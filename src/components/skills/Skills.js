
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

const cards = {
  Coding: {
    values: ["Python", "HTML/CSS", "JavaScript", "SQL", "Java"],
  },
  Frameworks: {
    values: ["React", "Swing", "Node.js", "Bootstrap"],
  },
  Concepts: {
    values: ["OOP", "Function Programming", "Agile", "UI/UX", "Mobile App"],
  },
  Tools: {
    // icon: faHammer,
    values: ["Git", "AWS", "Unix", "Docker", "DBeaver"],
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