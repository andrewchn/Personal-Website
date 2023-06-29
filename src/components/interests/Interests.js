import {
  InterestsSection,
  InterestsTitle,
  InterestsSubheading,
  InterestsBlurb,
  InterestsRow,
  InterestsCol,
  SideImage,
  FoodLink,
} from "./Interests-Styles.js";
import Lightbox from "./Lightbox.js";
import Slideshow from "./Slideshow.js";
import instalink from "../../imgs/instalink.jpg"

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
      <InterestsBlurb>
          I love to eat, although unlike this picture, I usually the one doing the eating. You follow along with me on my food journey if you click on the image to the right. 
        </InterestsBlurb>
        <FoodLink href='https://www.instagram.com/foodie_anjoo/' target="_blank">
          <img src={instalink}/>
        </FoodLink>
      <InterestsSubheading>Athletics</InterestsSubheading>
      <InterestsRow>
        <Slideshow />
        <InterestsBlurb>
          Over the pandemic, I became obsessed with tennis. It fascinates me how
          a sport based on the relatively simple concept of hitting a ball back
          and forth over a fence is so demanding and complex, both technically
          and mentally. In addition to tennis, I have played basketball for most
          of my life. During the winter months, I love to hit the icy East coast
          slopes with my friends.
        </InterestsBlurb>
      </InterestsRow>
    </InterestsSection>
  );
};

export default Interests;
