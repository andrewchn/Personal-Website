import Gallery from "react-photo-gallery";
import {photos} from "./photos.js"
import { InterestsSection } from "./Interests-Styles.js";

const Interests = () => {
    return (
      <InterestsSection>
        <Gallery photos={photos} />
      </InterestsSection>
    );
};

export default Interests;
