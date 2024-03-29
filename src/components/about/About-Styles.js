import styled from "styled-components";
import { devices } from "../../constants/devices";
import { styles } from "../shared/Shared-Styles";

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;

  ${styles.section}

  margin-top: 1em;
  margin-right: 1em;
  padding-top: 0.01em;
  padding-bottom: 3em;
  border-radius: 2em;
  background-color: #e1d6c6;
  box-shadow: 0 1px 1px black;
`;

const AboutTitle = styled.h1`
  @media ${devices.mobile} {
    margin-left: 0.65em;
    font-size: 3em;
  }
  @media ${devices.tablet} {
    margin-left: 1.25em;
    font-size: 4em;
  }
  @media ${devices.laptop} {
    margin-left: 1.1em;
    font-size: 4.5em;
  }
  margin-top: 0.7em;
`;

const AboutBlurb = styled.p`
  @media ${devices.mobile} {
    margin-left: 1.65em;
    font-size: 1.3em;
  }
  @media ${devices.tablet} {
    margin-left: 3.3em;
    font-size: 1.6em;
  }
  @media ${devices.laptop} {
    margin-left: 3.3em;
    font-size: 1.6em;
  }
  padding-right: 2em;
  width: 90%;
  margin-bottom: 1.3em;
`;

const DivRow = styled.div`
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
  align-items: flex-start;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3.5em;
`;
export { AboutDiv, AboutTitle, AboutBlurb, DivRow, TextDiv };
