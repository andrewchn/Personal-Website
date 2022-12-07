
import {
  SkillsSection,
  SkillsIntro,
  Cards,
  SkillList,
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
        <h3>Skills</h3>
        <p>
          Being a combined major, I have experience with both programming and
          theory as well as leadership and communication skills.
        </p>
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
              <h4>{keyName}</h4>
              {cards[keyName].values.map((value) => {
                return (
                  <li key={value}>
                    <p>{value}</p>
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