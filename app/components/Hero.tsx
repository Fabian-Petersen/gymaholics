import React from "react";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-screen bg-hero bg-cover bg-center bg-no-repeat"
      id="home"
    >
      {/* //$ remove the container style, check and correct for better responsiveness */}
      <div className="md:px-[5rem] mx-auto h-full">
        {/* Slider */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
