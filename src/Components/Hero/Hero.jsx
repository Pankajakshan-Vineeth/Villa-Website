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

      <div className="text-overlay">
        {presentIndex === 0 &&<button className="text-button"><span className="city">Toronto, </span><span className="country">Canada</span> </button>}
        {presentIndex === 1 &&<button className="text-button"><span className="city">Melibourne, </span><span className="country">Australia</span></button>}
        {presentIndex === 2 &&<button className="text-button"><span className="city">Miami, </span><span className="country">South Florida</span></button>}
        {presentIndex === 0 && <h1>HURRY! <br /> GET THE BEST <br /> VILLA  FOR YOU</h1>} 
        {presentIndex === 1 && <h1>BE QUICK ! <br /> GET THE BEST <br /> VILLA IN TOWN</h1>}
        {presentIndex === 2 && <h1>ACT NOW! <br />GET THE <br/> HIGHEST LEVEL <br />PENTHOUSE</h1>}
      </div>

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
