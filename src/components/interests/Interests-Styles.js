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
  background-color: #dcc7aa;
`;

const InterestsTitle = styled.h1`
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
  font-size: 1.7em;
  line-height: 1.2em;
  @media ${devices.mobile} {
    margin-right: 2em;
  }
  @media ${devices.tablet} {
    margin-right: 3em;
  }
  @media ${devices.laptop} {
    margin-right: 5em;
  }
  margin-left: 2.4em;
  background-color: #f7c331;
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

const BeReal = styled(Slideshow)`
  @media ${devices.mobile} {
    margin-left: 5em;
    margin-right: 5em;
  }
  @media ${devices.tablet} {
    margin-left: 5em;
    margin-right: 5em;
  }
  @media ${devices.laptop} {
    // margin-left: 5em;
    // margin-right: 5em;
  }
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
