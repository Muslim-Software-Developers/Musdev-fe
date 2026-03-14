import React from "react";
import Hero from "./hero";

import OurBlog from "./OurBlog";
import Programs from "./Programs";
import EventsPreviewSection from "./EventsPreviewSection"

import Testimonial from "./testimonial";
import GetTogetherSection from "./GetTogetherSection";
import Innovate from "./Innovate";
import Membership from "./Membership";
import EventCountdown from "./EventCountdown";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <EventCountdown />
       
      <Programs />
       <EventsPreviewSection />
      <Membership />
      <OurBlog />
      {/* <GetTogetherSection /> */}
      <Innovate />
 <Testimonial />
     
    </div>
  );
};

export default HomePage;
