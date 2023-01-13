import styled from "styled-components";

const SkillsSection = styled.div`
  padding-top: 2em;
  margin-top: 7rem;
  margin-left: 18.5em;   
  margin-right: 1em;
  border-radius: 2em;
  background-color: #dcc7aa;
`;

const SkillsIntro = styled.div`
  text-align: flex-start;
`;

const SkillsTitle = styled.h1`
  font-size: 4em;
  margin-left: 1em;
`;

const SkillsIntroText = styled.p`
  font-size: 1.4em;
  margin-left: 3em;
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1em;
  margin-right: 1em;
  justify-content: space-between;
`;

const CardItem = styled.li`

`
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
  width: 24%;
  height: 22em;
  text-align: center;
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 8em;
  border-radius: 2em;
  transition: transform .2s;
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
