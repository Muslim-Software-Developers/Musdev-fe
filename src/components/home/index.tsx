import React from "react";
import Hero from "./hero";
import Partnerships from "./Partnerships";
import OurBlog from "./OurBlog";
import Programs from "./Programs";
import Gallery from "./Gallery";
import Testimonial from "./testimonial";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Gallery />
      <Partnerships />
      <OurBlog />
      <Testimonial />
    </div>
  );
};

export default HomePage;
