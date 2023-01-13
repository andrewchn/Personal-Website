import { ContactDiv, SocialMedias, SocialMedia, ContactHeader, Trademark } from "./Contact-Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons'

const socialMedias = [
  {
    url: "https://www.linkedin.com/in/andrew-chn",
    icon: faLinkedin
  },
  {
    url: "mailto:chin.and@northeastern.edu",
    icon: faEnvelope
  },
  {
    url: "https://www.github.com/andrewchn",
    icon: faGithub
  },
];

const Contact = () => {
  return (
    <ContactDiv id="contact">
      <ContactHeader>Contact Me</ContactHeader>
      <SocialMedias>
        {socialMedias.map((socialMedia) => {
          return (
            <SocialMedia href={socialMedia.url} target="_blank">
                <FontAwesomeIcon icon={socialMedia.icon} />
            </SocialMedia>
          );
        })}
      </SocialMedias>
      <Trademark>© {new Date().getFullYear()} Andrew Chin</Trademark>
    </ContactDiv>
  );
};

export default Contact;
