import styled from "styled-components";

const InterestsSection = styled.div`
  padding-top: 2em;
  margin-top: 7em;
  margin-left: 20em;
  margin-right: 2em;
  display: flex;
  flex-direction: column;
`;

const InterestsTitle = styled.h1`
  font-size: 4em;
`;

const LightboxDiv = styled.div`
    border-style: solid;
    margin-top: 3em;
    margin-bottom: 6em;
`

const InterestsSubheading = styled.h1`
    margin-bottom: 0.5em;
`

const InterestsBlurb = styled.p`
    font-size: 1.2em;
    line-height: 1.2em;
    margin-right: 5em;
`

const InterestsRow = styled.div`
    display: flex;
`

const SideImage = styled.img`
    width: 30%;
    margin-left: 10em;
`

export {
    InterestsSection,
    InterestsTitle,
    LightboxDiv,
    InterestsBlurb,
    InterestsSubheading,
    InterestsRow,
    SideImage,
}