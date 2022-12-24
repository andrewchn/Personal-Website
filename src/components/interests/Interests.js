import {
  InterestsSection,
  InterestsTitle,
  InterestsSubheading,
  InterestsBlurb,
} from "./Interests-Styles.js";
import Lightbox from "./Lightbox.js";

const Interests = () => {
  return (
    <InterestsSection id="interests">
      <InterestsTitle>Interests</InterestsTitle>
      <InterestsSubheading>Photography</InterestsSubheading>
      <InterestsBlurb>
        I first got into photography three years ago when I stole my dad's
        Pentax K1000 film camera from his closet. Initially, I was drawn to
        photography because it was a way for me to capture moments with people
        who I was scared of losing. But as I spent more time capturing moments,
        I began to appreciate the capability that film has to capture emotions
        at a split second in time. In each photo I take, I aim to capture
        exactly what I was feeling in that moment through the camera lens, so
        that when I look back at the photos later I can fully recall not only
        what was happening but also how it felt.
      </InterestsBlurb>
      <Lightbox />
      <InterestsSubheading>Eating</InterestsSubheading>
      <InterestsBlurb>
        Boston does not have a reputation of being a foodie city. However,
        having lived here my whole life, that has made me even more motivated to
        explore and discover the true culinary gems of my city. Every week I
        endeavor to visit at least one new restaurant, and then record my
        thoughts on the dining experience in the Notes app on my phone. Below
        are some excerpts from my informal reviews.
      </InterestsBlurb>
    </InterestsSection>
  );
};

export default Interests;
