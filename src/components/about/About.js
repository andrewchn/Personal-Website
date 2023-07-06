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

const About = () => {
  return (
    <AboutDiv id="about">
      <AboutTitle>Hi, I'm Andrew.</AboutTitle>
      <DivRow>
        <TextDiv>
          <AboutBlurb>
            I am fourth year Northeastern University student majoring in Computer
            Science with a concentration in Software Development. I am passionate about writing efficient, scalable, 
            but above all useful computer programs.
          </AboutBlurb>
          <AboutBlurb>
            On this website, I share some of my professional accomplishments and
            abilities, as well as some personal interests.
          </AboutBlurb>
        </TextDiv>
        {/* <Canvas/> */}
      </DivRow>
    </AboutDiv>
  );
};

export default About;
