import styled from "styled-components";

const SkillsSection = styled.div`
  margin-top: 10rem;
  margin-left: 24em;
  margin-right: 5em;
`;

const SkillsIntro = styled.div`
  text-align: flex-start;
`;

const SkillsTitle = styled.h1`
  font-size: 4em;
`;

const SkillsIntroText = styled.p`
  font-size: 1.4em;
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardHeader = styled.h2`
  font-size: 2.2em;
  margin-bottom: 1.5em;
`;

const CardText = styled.p`
  font-size: 1.5em;
`;

const SkillList = styled.ul`
  background: orange;
  list-style: none;
  padding-inline-start: 0;
  width: 24%;
  text-align: center;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  margin-bottom: 8em;
  border-radius: 2em;
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
};
