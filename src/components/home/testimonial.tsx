import React, { useState } from "react";
import Button from "../button";
import NextImage from "next/image";
import Slider from "react-slick";
import GetTogether from "../../assets/get-togther.png";
import EllipseFrame from "../../assets/ellipse.png";
import ArrowLeft from "../icons/arrowLeft";
import ArrowRight from "../icons/arrowRight";
import Executives from "./executives";

const Ellipse = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="24"
      cy="24"
      r="20"
      fill="white"
      fill-opacity="0.2"
      stroke="white"
      stroke-width="8"
    />
  </svg>
);

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      content:
        "I worked with the Musdev executive for the SEO of my personal blog. They worked great. Definitely recommend.",
      author: "Habib Isah",
      post: "Someone random",
    },
    {
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci iusto vel? Minus soluta inventore voluptatem? Pariatur dolores commodi aperiam minima cumque soluta tempora culpa? Sit consequuntur accusamus quam ni",
      author: "John Doe",
      post: "Someone special",
    },
    {
      content:
        "I worked with the Musdev executive for the SEO of my personal blog. They worked great. Definitely recommend.",
      author: "Habib Isah",
      post: "Someone random",
    },
  ]);

  const testimonialSettings = {
    // dots: true,
    infinite: true,
    speeed: 500,
    // slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <button>
        <ArrowRight />
      </button>
    ),
    prevArrow: (
      <button>
        <ArrowLeft />
      </button>
    ),
  };

  return (
    <div className="py-[8rem]">
      <div className="wrapper bg-[#0D706E] p-12 rounded-[48px] flex justify-between mb-[6rem]">
        <div className="w-1/2 py-16 text-white">
          <div className="flex items-center gap-4 mb-8">
            <Ellipse />
            <h2 className="text-6xl">Get Together</h2>
          </div>

          <div className="ml-6 border-l border-l-white pl-10 mb-10">
            <p className="text-xl">
              Families and friends gathered, joyous feasts shared, prayers
              offered, laughter echoed—Eid get-together, a celebration of love
              and togetherness
            </p>
          </div>

          <div className="ml-[4rem]">
            <Button className="h-10 px-4 text-black rounded-md bg-white">
              Learn More
            </Button>
          </div>
        </div>

        <div className="w-1/2 p-4 rounded-3xl bg-transparent flex items-center justify-center relative">
          <NextImage src={GetTogether} alt="Get Together" />
          <NextImage
            src={EllipseFrame}
            alt="Frame"
            className="absolute top-1/2 translate-y-[-50%]"
          />
        </div>
      </div>

      <div className="testimonial-section py-20 border-y-2 border-y-[rgba(128,_128,_128,_0.21)]">
        <div className="max-w-[650px] mx-auto text-center">
          <Slider {...testimonialSettings}>
            {testimonials.map((testimonial) => (
              <div className="flex-1" key={testimonial.author}>
                <p className="text-lg italic font-normal leading-7 mb-6">
                  {testimonial.content}
                </p>

                <p className="text-sm mb-1">{testimonial.author}</p>
                <p className="font-normal text-sm text-[#808080]">
                  {testimonial.post}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Executives />
    </div>
  );
};

export default Testimonial;
