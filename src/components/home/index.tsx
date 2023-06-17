import React from "react";
import Hero from "./hero";
import Programs from "./Programs";
import Gallery from "./Gallery";
import Testimonial from "./testimonial";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Gallery />
      <Testimonial />
    </div>
  );
};

export default HomePage;
