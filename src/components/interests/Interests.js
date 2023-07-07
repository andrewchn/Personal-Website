import {
  InterestsSection,
  InterestsTitle,
  InterestsSubheading,
  InterestsBlurb,
  InterestsRow,
  InterestsCol,
  SideImage,
  FoodImg,
  InterestsBlurbSmall,
} from "./Interests-Styles.js";
import Lightbox from "./Lightbox.js";
import Slideshow from "./Slideshow.js";
import instalink from "../../imgs/instalink.jpg";

const Interests = () => {
  return (
    <InterestsSection id="interests">
      <InterestsTitle>Interests</InterestsTitle>
      {/* <InterestsSubheading>Photography</InterestsSubheading> */}
      <InterestsBlurb>
        Sometimes I take film photos. I take my camera with me where ever I
        travel.
      </InterestsBlurb>
      <Lightbox />
      {/* <InterestsSubheading>Eating</InterestsSubheading> */}
      <InterestsRow>
        <InterestsBlurbSmall>
          I love to eat, although unlike this picture, I am usually the one
          doing the eating. You follow along with me on my food journey if you
          click on the image.
        </InterestsBlurbSmall>
        <a href="https://www.instagram.com/foodie_anjoo/" target="_blank">
          <FoodImg src={instalink} />
        </a>
      </InterestsRow>

      {/* <InterestsSubheading>Athletics</InterestsSubheading> */}
      <InterestsRow>
        <Slideshow />
        <InterestsBlurbSmall>
          In the summer, my sport of choice is tennis. In the winter, I often go
          snowboarding with my friends. Next winter I hope I will finally hit a frontside 180!
        </InterestsBlurbSmall>
      </InterestsRow>
    </InterestsSection>
  );
};

export default Interests;
