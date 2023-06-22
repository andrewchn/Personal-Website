import styled from "styled-components";
import { styles } from "../shared/Shared-Styles"

const ContactDiv = styled.div`
    margin-top: 10em;
    ${styles.section}
    align-items: center;
    background-color: #dcc7aa;
    border-radius: 2em;
    padding: 1em 0em 1em 0em;
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