import { programs } from "@/constants/programs";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Programs = () => {
  const programsSettings = {
    dots: true,
    infinite: true,
    speeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: 'flex gap-x-4 shadow-sm',
  };

  return (
    <div className="bg-neutral-50">
      <div className="wrapper py-16 ">
        <h2 className="font-bold text-2xl w-[172.415px] md:text-4xl lg:text-5xl xl:text-6xl md:w-auto md:text-center text-neutral01">
          Programs and Projects
        </h2>
        <p className="text-base md:text-center mt-3 lg:mt-3 xl:text-lg 2xl:text-xl text-neutral02">
          Our programs and projects provide wide opportunities for learning,
          skill development, and networking
        </p>
        <div className="h-[249px] mt-8 md:hidden">
          {/*// there seems to be no inconsistency display with the react-slick slider, it doesn't display some times after a resize
          it seems it not displaying is related to my internet connection as a cdn is used to connect to slick-carousel
          */}
          <Slider {...programsSettings}>
            {programs.map((item) => (
              <div
                key={item.id}
                className="rounded-[6px] w-[328px] p-4 bg-[#FBFBFB] flex flex-col gap-5 shadow-md"
              >
                <div className="relative w-12 h-12 p-[6px]">
                  <Image src={item.url} fill alt="program icon" />
                </div>
                <h3 className="font-bold text-xl text-neutral01 leading-[140%] mt-5">
                  {item.header}
                </h3>
                <p className="text-neutral02 text-base mt-4 leading-[150%]">
                  {item.content}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden md:grid md:grid-cols-3 mt-12 md:gap-x-4 gap-y-10 md:gap-y-16 lg:gap-x-8 lg:gap-y-24">
          {programs.map((item) => (
            <div
              key={item.id}
              className="rounded-[6px] p-3 lg:p-5 bg-white flex flex-col gap-3 lg:gap-5"
            >
              <div className="relative w-8 xl:w-12 h-8 xl:h-12">
                <Image src={item.url} fill alt="program icon" />
              </div>
              <h3 className="font-bold text-lg lg:text-xl text-neutral01">
                {item.header}
              </h3>
              <p className="text-neutral02 text-xs lg:text-sm">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
