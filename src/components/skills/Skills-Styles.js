import styled from "styled-components";

const SkillsSection = styled.div`
  margin-top: 7rem;
`;

const SkillsIntro = styled.div`
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SkillList = styled.ul`
  background: #f8f8f8;
  list-style: none;
  padding-inline-start: 0;
  text-align: center;
  padding-top: 2.5em;
  padding-bottom: 1.7em;
  transition: box-shadow 0.7s ease;

  :hover {
    box-shadow: ;
  }
`;



export { SkillsSection, SkillsIntro, Cards, SkillList };