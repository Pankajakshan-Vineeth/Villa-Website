import React from "react";
import "./Featured.css";
import chair from '../../assets/featured.jpg'
import chairicon from '../../assets/featured-icon.jpg'

const Featured = () => {
  return (
    <div className="feature-container">
      <div className="image-container">
        <img src={chair} alt="" />
        <img src={chairicon} alt="" />
        </div>
    </div>
  );
};

export default Featured;
