import styled from "styled-components";

const InterestsSection = styled.div`
  padding-top: 2em;
  margin-top: 7em;
  margin-left: 18.5em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 2em;
  background-color: #dcc7aa;
`;

const InterestsTitle = styled.h1`
  font-size: 4em;
  margin-left: 1em;
`;

const LightboxDiv = styled.div`
    border-style: solid;
    margin-top: 3em;
    margin-bottom: 6em;
`

const InterestsSubheading = styled.h1`
    margin-bottom: 0.5em;
    margin-left: 2.1em;
`

const InterestsBlurb = styled.p`
    font-size: 1.2em;
    line-height: 1.2em;
    margin-right: 5em;
    margin-left: 3.5em;
    background-color: #f7c331;
    padding: 1em 1em 1em 1em;
    border-radius: 2em;
`

const InterestsRow = styled.div`
    display: flex;
`

const InterestsCol = styled.div`
    display: flex;
    flex-direction: column;
`


const SideImage = styled.img`
    width: 30%;
    margin-left: 10em;
    margin-right: 1em;
`

export {
    InterestsSection,
    InterestsTitle,
    LightboxDiv,
    InterestsBlurb,
    InterestsSubheading,
    InterestsRow,
    InterestsCol,
    SideImage,
}