import React from "react";
import "./Video.css";
import frame from "../../assets/video-frame.jpg";
import play from "../../assets/play.png";
import orangedot from "../../assets/orange.png";
import videobg from "../../assets/video-bg.jpg";

const Video = () => {
  return (
    <div className="video-container">
      <img src={videobg} alt="" />
      <div className="video-text">
        <p>| VIDEO VIEW</p>
        <h1 className="h1-text">Get Closer View & Different Feeling</h1>
      </div>
      <div className="second-image">
        <img src={frame} alt="" className="frame-image" />
        <a href="https://www.youtube.com/" target="_blank" className="play-icon">
          <img src={play} alt="" className="play-icon" />
        </a>
      </div>
      <div className="orange-dots">
        <div className="dot-container">
          <img src={orangedot} alt="" className="orange-icon" />
          <div className="orange-text">
            <h1>34</h1>
            <p>
              Buildings <br />
              Finished Now
            </p>
          </div>
        </div>
        <div className="dot-container">
          <img src={orangedot} alt="" className="orange-icon" />
          <div className="orange-text">
            <h1>34</h1>
            <p>
              {" "}
              Years <br /> Experience
            </p>
          </div>
        </div>
        <div className="dot-container">
          <img src={orangedot} alt="" className="orange-icon" />
          <div className="orange-text">
            <h1>34</h1>
            <p>
              Awwards <br />
              Won 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
