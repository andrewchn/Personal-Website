import {
  AboutDiv,
  AboutTitle,
  AboutBlurb,
  DivRow,
  TextDiv,
  AboutQuote,
} from "./About-Styles.js";
import Canvas from "../canvas/Canvas.js";

const About = () => {
  return (
    <AboutDiv>
      <AboutTitle>Hi, I'm Andrew.</AboutTitle>
      <DivRow>
        <TextDiv>
          <AboutBlurb>
            I am third year Northeastern University student majoring in Computer
            Science with a concentration in Software Development. I find it
            fascinating that with just a few lines of code, we can develop
            programs that can do anything.
          </AboutBlurb>
          <AboutBlurb>
            On this website, I share some of my professional accomplishments and
            abilities, as well as some personal interests. In the words of Jay
            Z, 
          </AboutBlurb>
          <AboutQuote>
          "What you about to witness is my thoughts (Just my thoughts,
            man)"
          </AboutQuote>
        </TextDiv>
        <Canvas />
      </DivRow>
    </AboutDiv>
  );
};

export default About;
