import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import br1 from "../../imgs/sports/bereals/br1.JPG";
import br2 from "../../imgs/sports/bereals/br2.JPG";
import br3 from "../../imgs/sports/bereals/br3.JPG";
import br4 from "../../imgs/sports/bereals/br4.JPG";
import br5 from "../../imgs/sports/bereals/br5.JPG";
import br6 from "../../imgs/sports/bereals/br6.JPG";
import br7 from "../../imgs/sports/bereals/br7.JPG";
import br8 from "../../imgs/sports/bereals/br8.JPG";
import br9 from "../../imgs/sports/bereals/br9.JPG";
import br10 from "../../imgs/sports/bereals/br10.JPG";
import br11 from "../../imgs/sports/bereals/br11.JPG";
import br12 from "../../imgs/sports/bereals/br12.JPG";
import br13 from "../../imgs/sports/bereals/br13.JPG";
import br14 from "../../imgs/sports/bereals/br14.JPG";
import br15 from "../../imgs/sports/bereals/br15.JPG";
import br16 from "../../imgs/sports/bereals/br16.JPG";

import { SlideImage, SlideDiv, SlideContainer } from "./Slideshow-Styles";

const Slideshow = () => {
  const slideImages = [
    br1,
    br2,
    br3,
    br4,
    br5,
    br6,
    br7,
    br8,
    br9,
    br10,
    br11,
    br12,
    br13,
    br14,
    br15,
    br16,
  ];

  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: "ease",
  };

  return (
    <SlideContainer>
      <Slide {...properties}>
        {slideImages.map((each, index) => (
          <SlideImage key={index} src={each} alt="bereals" />
        ))}
      </Slide>
    </SlideContainer>
  );
};

export default Slideshow;
