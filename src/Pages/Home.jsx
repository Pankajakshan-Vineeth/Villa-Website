import React from "react";
import Hero from "../Components/Hero/Hero";
import NavBar from "../Components/NavBar/NavBar";
import Featured from "../Components/Featured/Featured";
import Video from "../Components/Video/Video";
import BestDeal from "../Components/BestDeal/BestDeal";
import Properties from "../Components/Properties/Properties";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Featured/>
      <Video/>
      <BestDeal/>
      <Properties/>
    </div>
  );
};

export default Home;
