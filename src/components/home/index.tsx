import React from "react";
import Hero from "./hero";
import Partnerships from "./Partnerships";
import OurBlog from "./OurBlog";
import Programs from "./Programs";
import Gallery from "./Gallery";
import Testimonial from "./testimonial";
import GetTogetherSection from "./GetTogetherSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Gallery />
      <Partnerships />
      <div className="md:hidden">
        <Testimonial />
      </div>
      <OurBlog />
      <GetTogetherSection />
      <div className="hidden md:block">
        <Testimonial />
      </div>
    </div>
  );
};

export default HomePage;
