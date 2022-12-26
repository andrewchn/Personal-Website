import {
  InterestsSection,
  InterestsTitle,
  InterestsSubheading,
  InterestsBlurb,
  InterestsRow,
  SideImage,
} from "./Interests-Styles.js";
import Lightbox from "./Lightbox.js";
import Slideshow from "./Slideshow.js";
import eating from "../../imgs/food.jpg";

const Interests = () => {
  return (
    <InterestsSection id="interests">
      <InterestsTitle>Interests</InterestsTitle>
      <InterestsSubheading>Photography</InterestsSubheading>
      <InterestsBlurb>
        I first got into photography three years ago when I stole my dad's
        Pentax K1000 film camera from his closet. Initially, I was drawn to
        photography because it was a way for me to document fun activities I was
        doing. But as I spent more time capturing moments, I began to appreciate
        the capability that film has to capture emotions at a split second in
        time. In each photo I take, I aim to capture exactly what I was feeling
        in that moment through the camera lens, so that when I look back at the
        photos later I can fully recall not only what was happening but also how
        it felt.
      </InterestsBlurb>
      <Lightbox />
      <InterestsSubheading>Eating</InterestsSubheading>
      <InterestsRow>
        <InterestsBlurb>
          Boston does not have a reputation of being a foodie city. However,
          having lived here my whole life, that has made me even more motivated
          to explore and discover the true culinary gems of my city. Every week
          I endeavor to visit at least one new restaurant, and then record my
          thoughts on the dining experience in the Notes app on my phone. Below
          are some excerpts from my informal reviews.
        </InterestsBlurb>
        <SideImage src={eating}/>
      </InterestsRow>
      <InterestsSubheading>Athletics</InterestsSubheading>
      <InterestsRow>
        <Slideshow/>
        <InterestsBlurb>
          Over the pandemic, I became obsessed with tennis. It fascinates me how a
          sport based on the relatively simple concept of hitting a ball back and
          forth over a fence is so demanding and complex, both technically and
          mentally. In addition to tennis, I have played basketball for most of my
          life. During the winter months, I love to hit the icy East coast slopes
          with my friends.
        </InterestsBlurb>
      </InterestsRow>
    </InterestsSection>
  );
};

export default Interests;
