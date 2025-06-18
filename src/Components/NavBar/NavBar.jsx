import React from "react";
import "./NavBar.css";
import Button from "@mui/material/Button";
import mail from "../../assets/email-icon.png";
import placeholder from "../../assets/placeholder.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import villa from "./../../assets/villa.png";

const NavBar = () => {
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
          <img src={facebook} alt="" className="icon1" />
          <img src={twitter} alt="" className="icon1" />
          <img src={linkedin} alt="" className="icon1" />
          <img src={instagram} alt="" className="icon1" />
        </div>
      </div>
      <div className="menu-div">
        <div className="logo">
          <img src={villa} alt="" />
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
            Disable elevation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
