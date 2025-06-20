import React from "react";
import Hero from "../Components/Hero/Hero";
import NavBar from "../Components/NavBar/NavBar";
import Featured from "../Components/Featured/Featured";
import Video from "../Components/Video/Video";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Featured/>
      <Video/>
    </div>
  );
};

export default Home;
