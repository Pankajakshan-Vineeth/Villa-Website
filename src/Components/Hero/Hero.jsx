import React, { useContext } from "react";
import "./Hero.css";
import { AppContext } from "../../Context/AppContext";
import nexticon from "../../assets/next.png";
import backicon from "../../assets/previous.png";

const Hero = () => {
  const {
    images,
    presentIndex,
    setPresentIndex,
    goToBackSlide,
    goToNextSlide,
  } = useContext(AppContext);

  return (
    <div className="slider-container">
      <img
        src={images[presentIndex]}
        alt={`Slide ${presentIndex + 1}`}
        className="slider-image"
      />
      <img
          src={backicon}
          alt="Previous"
          className="nav-button-left"
          onClick={goToBackSlide}
        />
        <img
          src={nexticon}
          alt="Next"
          className="nav-button-right"
          onClick={goToNextSlide}
        />
      {/* <div className="icon-container">
        
      </div> */}

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === presentIndex ? "active" : ""}`}
            onClick={() => setPresentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
