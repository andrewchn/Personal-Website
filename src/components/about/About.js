import {
  AboutDiv,
  AboutTitle,
  AboutBlurb,
  DivRow,
  TextDiv,
  AboutQuote,
  QuoteDiv,
  QuoteImg,
} from "./About-Styles.js";
import Canvas from "../canvas/Canvas.js";
import jay from "../../imgs/jayz.jpg";

const About = () => {
  return (
    <AboutDiv id="about">
      <AboutTitle>Hi, I'm Andrew.</AboutTitle>
      <DivRow>
        <TextDiv>
          <AboutBlurb>
            I am fourth year Northeastern University student majoring in Computer
            Science with a concentration in Software Development. I find it
            fascinating that with just a few lines of code, we can develop
            programs that can do anything.
          </AboutBlurb>
          <AboutBlurb>
            On this website, I share some of my professional accomplishments and
            abilities, as well as some personal interests.
          </AboutBlurb>
        </TextDiv>
        <Canvas/>
      </DivRow>
    </AboutDiv>
  );
};

export default About;
