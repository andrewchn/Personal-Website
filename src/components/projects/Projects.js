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

const projectList = [
  {
    name: "SmartCalendar",
    img: "",
    desc: "dobebebegbedo",
    url: "google.com",
  },
  {
    name: "SmartCalendar",
    img: "",
    desc: "dobebebegbedo",
    url: "google.com",
  },
  {
    name: "SmartCalendar",
    img: "",
    desc: "dobebebegbedo",
    url: "google.com",
  },
  {
    name: "SmartCalendar",
    img: "",
    desc: "dobebebegbedo",
    url: "google.com",
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
              <CardLink href={project.url}>Github</CardLink>
            </ProjectsCard>
          );
        })}
      </ProjectsCards>
    </ProjectsSection>
  );
};

export default Projects;
