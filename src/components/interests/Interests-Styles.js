import styled from "styled-components";
import { styles } from "../shared/Shared-Styles";
import { devices } from "../../constants/devices";
import Slideshow from "./Slideshow.js";

const InterestsSection = styled.div`
  padding-top: 2em;
  margin-top: 7em;
  ${styles.section}
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 2em;
  background-color: #798ab2;
  box-shadow: 0 1px 1px black;
`;

const InterestsTitle = styled.h1`
  font-size: 3em;
  @media ${devices.mobile} {
    margin-left: 0.9em;
  }
  @media ${devices.tablet} {
    margin-left: 1em;
  }
  @media ${devices.laptop} {
    margin-left: 1em;
  }
`;

const LightboxDiv = styled.div`
  border-style: solid;
  margin-top: 3em;
  margin-bottom: 6em;
`;

const InterestsSubheading = styled.h1`
  margin-bottom: 0.5em;
  margin-left: 2.1em;
`;

const InterestsBlurb = styled.p`
  @media ${devices.mobile} {
    margin-right: 2em;
    font-size: 1.2em;
  }
  @media ${devices.tablet} {
    margin-right: 3em;
    font-size: 1.2em;
    line-height: 1.2em;
  }
  @media ${devices.laptop} {
    margin-right: 5em;
    font-size: 1.2em;
    line-height: 1.2em;
  }
  margin-left: 2.4em;
//   background-color: #90b279;
  padding: 1em 1em 1em 1em;
  border-radius: 2em;
`;

const InterestsBlurbSmall = styled(InterestsBlurb)`
  @media ${devices.laptop} {
    margin-left: 2.5em;
    margin-top: 1em;
    margin-bottom: 4em;
    padding-top: 1.2em;
  }
`;

const FoodImg = styled.img`
  transition: transform 0.2s;
  padding: 0em 2em 2em 1.5em;
  &:hover {
    transform: scale(1.05);
  }
  @media ${devices.mobile} {
    margin-top: 2em;
    margin-left: 3em;
  }
  @media ${devices.tablet} {
    margin-left: 3em;
  }
`;

const InterestsRow = styled.div`
  display: flex;

  @media ${devices.mobile} {
    flex-direction: column;
  }
  @media ${devices.tablet} {
    flex-direction: column;
  }
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

const InterestsCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideImage = styled.img`
  width: 30%;
  margin-left: 10em;
  margin-right: 1em;
`;


export {
  InterestsSection,
  InterestsTitle,
  LightboxDiv,
  InterestsBlurb,
  InterestsSubheading,
  InterestsRow,
  InterestsCol,
  SideImage,
  FoodImg,
  InterestsBlurbSmall,
};
