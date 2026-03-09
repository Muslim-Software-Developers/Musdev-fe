import React from "react";
import Hero from "./hero";
import Partnerships from "./Partnerships";
import OurBlog from "./OurBlog";
import Programs from "./Programs";
import EventsPreviewSection from "./EventsPreviewSection"
import Gallery from "./Gallery";
import Testimonial from "./testimonial";
import GetTogetherSection from "./GetTogetherSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
        <EventsPreviewSection />
      <Programs />
      <OurBlog />
      <GetTogetherSection />
 <Testimonial />
     
    </div>
  );
};

export default HomePage;
