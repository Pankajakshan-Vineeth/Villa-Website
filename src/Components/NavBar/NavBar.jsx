import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Button from "@mui/material/Button";
import mail from "../../assets/email-icon.png";
import placeholder from "../../assets/placeholder.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import villa from "../../assets/villa.png";

const NavBar = () => {
  const [stick, setStick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      <div className="address-div">
        <div className="address-container">
          <img src={mail} alt="" className="icon" />
          <p> info@company.com</p>
          <img src={placeholder} alt="" className="icon" />
          <p>Sunny Isles Beach, FL 33160</p>
        </div>
        <div className="icon-container">
          <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="" className="icon1" /></a>
          <a href="https://www.linkedin.com/" target="_blank"><img src={linkedin} alt="" className="icon1" /></a>
          <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="" className="icon1" /></a>
          <a href="https://x.com/?lang=en" target="_blank"><img src={twitter} alt="" className="icon1" /></a>
        </div>
      </div>

      <div className={`menu-div ${stick ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={villa} alt="Logo" />
        </div>
        <div className="menu-items">
          <p>Home</p>
          <p>Properties</p>
          <p>Property Details</p>
          <p>Contact Us</p>
        </div>
        <div className="button-container">
          <Button
            className="schedule-button"
            variant="contained"
            disableElevation
          >
            Schedule Visit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
