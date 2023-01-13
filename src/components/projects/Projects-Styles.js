import styled from "styled-components";

const ProjectsSection = styled.div`
  padding-top: 2em;
  margin-top: 7em;
  margin-left: 18.5em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 2em;
  background-color: #dcc7aa;
`;

const ProjectsTitle = styled.h1`
  font-size: 4em;
  margin-left: 1em;
`;

const ProjectsIntro = styled.p`

`;

const ProjectsCards = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const ProjectsCard = styled.div`
    background-color: #6b7a8f;
    width: 35%;
    color: white;
    margin: 0em 4em 3em 3em;
    border-radius: 1em;
    transition: transform .2s;
    padding: 0em 0em 2em 1.5em;
    &:hover {
      transform: scale(1.05);
    }
`;

const CardImg = styled.img`

`;

const CardTitle = styled.h1`

`;

const CardBlurb = styled.p`
`;

const CardLink = styled.a`
`;

export { ProjectsSection, ProjectsTitle, ProjectsIntro, ProjectsCards, ProjectsCard, CardImg, CardTitle, CardBlurb, CardLink };
