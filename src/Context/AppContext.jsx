import React, { createContext, useState } from "react";
import banner1 from "../assets/banner-01.jpg";
import banner2 from "../assets/banner-02.jpg";
import banner3 from "../assets/banner-03.jpg";

export const AppContext = createContext(null);
export default function AppContextProvider({ children }) {
  const [presentIndex, setPresentIndex] = useState(0);

  const images = [banner1, banner2, banner3];

  const goToNextSlide = () => {
    setPresentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToBackSlide = () => {
    setPresentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const contextValue = {
    images,
    presentIndex,
    setPresentIndex,
    goToBackSlide,
    goToNextSlide,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
