import {
  ProjectsSection,
  ProjectsTitle,
  ProjectsIntro,
  ProjectsCards,
  ProjectsCard,
  CardImg,
  CardTitle,
  CardBlurb,
  CardLink,
} from "./Projects-Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectList = [
  {
    name: "SmartCalendar",
    img: "",
    desc: "Smart Calendar is a Calendar Android app written in Java with a Firebase backend that intelligently places non time-sensitive events in a user's schedule. ",
    url: "https://github.com/andrewchn/SmartCalendar",
  },
  {
    name: "Personal Website",
    img: "",
    desc: "The website you are viewing right now! Written using JavaScript and React and hosted using Netlify.",
    url: "https://github.com/andrewchn/Personal-Website",
  },
  {
    name: "Tabbify",
    img: "",
    desc: "A Chrome extension written in JavaScript, HTML and CSS that makes calls to the Spotify API to recommend a new song to the user every time the extension is opened.",
    url: "https://github.com/andrewchn/Tabbify",
  },
  {
    name: "Image Processor",
    img: "",
    desc: "An image processing application written in Java with a JavaSwing frontend that allows users to perform edits to image files. Utilized mathematical algorithms to allow users to apply more complex filters to edited images.",
    url: "https://github.com/andrewchn/Image-Processor",
  },
];
const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsIntro></ProjectsIntro>
      <ProjectsCards>
        {projectList.map((project) => {
          return (
            <ProjectsCard>
              <CardImg src={project.img} />
              <CardTitle>{project.name}</CardTitle>
              <CardBlurb>{project.desc}</CardBlurb>
              <CardLink href={project.url} target="_blank">
                <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
              </CardLink>
            </ProjectsCard>
          );
        })}
      </ProjectsCards>
    </ProjectsSection>
  );
};

export default Projects;
