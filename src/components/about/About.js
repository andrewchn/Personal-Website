import { AboutDiv, AboutTitle, AboutBlurb, AboutImg, DivRow } from './About-Styles.js';
import img from '../../imgs/tj.jpeg';
import Canvas from "../canvas/Canvas.js";


const About = () => {
    return (
        <AboutDiv>
            <AboutTitle>
                Hi, I'm Andrew.
            </AboutTitle>
            <DivRow>
                <AboutBlurb>
                    The platypus (Ornithorhynchus anatinus),[3] sometimes referred to as the duck-billed platypus, is a semiaquatic, egg-laying mammal endemic to eastern Australia, including Tasmania. The platypus is the sole living representative or monotypic taxon of its family (Ornithorhynchidae) and genus (Ornithorhynchus), though a number of related species appear in the fossil record.
                    Together with the four species of echidna, it is one of the five extant species of monotremes, mammals that lay eggs instead of giving birth to live young. Like other monotremes, it senses prey through electrolocation. It is one of the few species of venomous mammals, as the male platypus has a spur on the hind foot that delivers a venom, capable of causing severe pain to humans. The unusual appearance of this egg-laying, duck-billed, beaver-tailed, otter-footed mammal baffled European naturalists when they first encountered it, and the first scientists to examine a preserved platypus body (in 1799) judged it a fake, made of several animals sewn together.
                </AboutBlurb>
                {/* <AboutImg src={img} alt=""/> */}
                <Canvas />
            </DivRow>
            
        </AboutDiv>
    );
}

export default About;