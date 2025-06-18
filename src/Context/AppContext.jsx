import _default from "@emotion/styled";
import React, { createContext, useState, useContext } from "react";
import banner1 from "../assets/banner-01.jpg";
import banner2 from "../assets/banner-02.jpg";
import banner3 from "../assets/banner-03.jpg";

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {

  const [presentIndex, setPresentIndex] = useState(0);

  const images = [{ banner1 }, { banner2 }, { banner3 }];

  const goToNextSlide = ()=>{
    setPresentIndex((previousSlide)=>(previousSlide === images.length-1 ? 0 : previousSlide + 1 ));
  };

  const goToBackSlide = ()=>{
    setPresentIndex((previousSlide)=>(previousSlide === 0 ? images.length-1 : previousSlide - 1));
  }

  const contextValue = {
    images,
    presentIndex,
    setPresentIndex,
    goToBackSlide,
    goToNextSlide
  };

  return (
    <div>
      <AppContextProvider value={contextValue}>{children}</AppContextProvider>
    </div>
  );
}
