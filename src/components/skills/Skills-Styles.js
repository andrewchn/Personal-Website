import styled from "styled-components";
import { devices } from "../../constants/devices";
import { styles } from "../shared/Shared-Styles";
const SkillsSection = styled.div`
  padding-top: 2em;
  margin-top: 7rem;

  ${styles.section}

  margin-right: 1em;
  border-radius: 2em;
  background-color: #dcc7aa;
`;

const SkillsIntro = styled.div`
  text-align: flex-start;
`;

const SkillsTitle = styled.h1`
  font-size: 4em;
  @media ${devices.mobile} {
    margin-left: 0.5em;
  }
  @media ${devices.tablet} {
    margin-left: 1em;
  }
  @media ${devices.laptop} {
    margin-left: 1em;
  }
`;

const SkillsIntroText = styled.p`
  font-size: 1.4em;
  @media ${devices.mobile} {
    margin-left: 1.5em;
    padding-right: 1em;
  }
  @media ${devices.tablet} {
    margin-left: 3.3em;
  }
  @media ${devices.laptop} {
    margin-left: 3.3em;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1em;
  margin-right: 1em;
  justify-content: space-between;

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

const CardItem = styled.li``;

const CardHeader = styled.h2`
  font-size: 2.2em;
  margin-bottom: 1em;
`;

const CardText = styled.p`
  font-size: 1.5em;
`;

const SkillList = styled.ul`
  background: #f7c331;
  list-style: none;
  padding-inline-start: 0;
  @media ${devices.mobile} {
    width: 85%;
    margin-bottom: 2em;
  }
  @media ${devices.tablet} {
    width: 85%;
    margin-bottom: 3em;
  }
  @media ${devices.laptop} {
    width: 24%;
    margin-bottom: 8em;
  }
  height: 22em;
  text-align: center;
  padding-top: 2.5em;
  padding-bottom: 3em;
  border-radius: 2em;
  transition: transform 0.2s;
  &:hover {
    background: #f7882f;
    transform: scale(1.05);
  }
`;

export {
  SkillsSection,
  SkillsIntro,
  Cards,
  SkillList,
  CardHeader,
  SkillsTitle,
  CardText,
  SkillsIntroText,
  CardItem,
};
