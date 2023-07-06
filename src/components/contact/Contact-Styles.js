import styled from "styled-components";
import { styles } from "../shared/Shared-Styles"
import { devices } from "../../constants/devices";


const ContactDiv = styled.div`
    ${styles.section}
    align-items: center;
    background-color: #ff6961;
    border-radius: 2em;
    padding: 1em 0em 1em 0em;
    box-shadow: 0 1px 1px black;

    @media ${devices.mobile} {
      margin-bottom: 5.1em;
      margin-right: 1em;
      margin-top: 7em;
    }
    @media ${devices.tablet} {
      margin-bottom: 5.1em;
      margin-left: 1em;
      margin-top: 10em;
    }
    @media ${devices.laptop} {
      margin-bottom: 0em;
      margin-left: 1em;
      margin-top: 10em;
    }
`

const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SocialMedia = styled.a`
  margin-right: 4rem;
  &:last-child {
    margin-right: 0;
  }
`;

const ContactHeader = styled.h1`
  text-align: center;
`;

const Trademark = styled.p`
    text-align: center;
`;
export { ContactDiv, SocialMedias, SocialMedia, ContactHeader, Trademark }