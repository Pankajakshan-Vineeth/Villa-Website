import React from "react";
import Hero from "../Components/Hero/Hero";
import NavBar from "../Components/NavBar/NavBar";
import Featured from "../Components/Featured/Featured";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Featured/>
    </div>
  );
};

export default Home;
