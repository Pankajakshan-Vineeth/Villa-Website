import React from "react";
import "./Featured.css";
import chair from "../../assets/featured.jpg";
import chairicon from "../../assets/featured-icon.png";
import icon01 from "../../assets/info-icon-01.png";
import icon02 from "../../assets/info-icon-02.png";
import icon03 from "../../assets/info-icon-03.png";
import icon04 from "../../assets/info-icon-04.png";

const Featured = () => {
  return (
    <div className="feature-container">
      <div className="div-container">
        <div className="image-container">
          <img src={chair} alt="featured" className="chair-image" />
          <img src={chairicon} alt="icon" className="chair-icon" />
        </div>

        <div className="apartment-view">
          <p className="tag">| FEATURED</p>
          <h1>
            Best Appartment <br />& Sea View
          </h1>

          <div className="useful-links">
            <p className="question">Best Useful links?</p>
            <p>
              Get the best villa website template in HTML CSS and Bootstrap for
              your business. TemplateMo provides you the best free CSS templates
              in the world. Please tell your friends about it.
            </p>

            <p className="question">How does this work?</p>
            <p>
              Dolor almesit amet, consectetur adipiscing elit, sed doesn't
              eiusmod tempor incididunt ut labore consectetur adipiscing elit.
            </p>

            <p className="question">Why is Villa Agency the Best</p>
            <p>
              Dolor almesit amet, consectetur adipiscing elit, sed doesn't
              eiusmod tempor incididunt ut labore consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="specifications">
          <div className="feature-item">
            <img src={icon01} alt="Space" className="feature-icon" />
            <div className="feature-text">
              <h3>250 m²</h3>
              <p>Total Flat Space</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={icon02} alt="Contract" className="feature-icon" />
            <div className="feature-text">
              <h3>Contract</h3>
              <p>Contract Ready</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={icon03} alt="Payment" className="feature-icon" />
            <div className="feature-text">
              <h3>Payment</h3>
              <p>Payment Process</p>
            </div>
          </div>
          <div className="feature-item">
            <img src={icon04} alt="Safety" className="feature-icon" />
            <div className="feature-text">
              <h3>Safety</h3>
              <p>24/7 Under Control</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
