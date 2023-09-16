import React from "react";
import ArrowRightIcon from "../svgs/arrowRightIcon";

const Hero = () => {
  return (
    <section className="flex flex-col gap-y-[72px] pb-40 md:gap-y-40 wrapper pt-20 md:pt-24 md:pb-72">
      <div className="flex flex-col md:flex-row md:items-center gap-y-[70.27px] md:gap-y-0 md:gap-x-[90px]">
        <div className="flex flex-col md:w-3/5">
          <h1 className="text-[#000000] font-bold text-[24px] md:text-[64px] leading-[32.4px] md:leading-[86px] tracking-[-0.025em]">
            Nigeria’s Foremost community of Muslims in Tech
          </h1>
          <p className="text-[#808080] text-[16px] md:text-2xl leading-[20.8px] md:leading-[31px] pt-2">
            Join a vibrant community of Muslim tech enthusiasts shaping the
            future of technology
          </p>
          <div className="pt-6 md:pt-[38px]">
            <button
              className="bg-primary rounded-lg text-white w-[141px] md:w-[135px] h-[35px] md:h-[45px] flex items-center
             justify-center md:justify-between py-2 px-4 gap-2 font-medium text-[14px] md:text-base leading-[19px] tracking-[0.4px]"
            >
              <span>Join Now</span>
              <span className="p-[1.6px]">
                <ArrowRightIcon stroke1="white" stroke2="white" />
              </span>
            </button>
          </div>
        </div>
        <div className="h-[325px] md:w-2/5 md:h-[687px] rounded-sm md:rounded-[20px] bg-hero-image bg-cover md:bg-center"></div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-[16px] md:gap-y-0 md:gap-x-[90px]">
        <div className="w-[102px] h-[102px] md:w-2/5 md:h-[687px] rounded-[5px] md:rounded-[20px] bg-hero-image bg-cover md:bg-center" />

        <div className="flex flex-col md:w-3/5">
          <ul
            className="flex flex-col gap-4 md:gap-0 ml-4 md:ml-0 w-full md:h-[687px] text-[#808080] text-[14px] md:text-2xl leading-[15.2px] md:leading-[31px] md:font-medium
            justify-between list-disc "
          >
            <h2 className="w-[202px] text-2xl -ml-4 md:ml-0 mb-3 mt-9 md:mb-1 md:mt-0 text-[#141414] md:w-max md:text-5xl md:leading-[65px] font-bold">
              Mission driven. People focused.
            </h2>
            <li>
              To ensure the Muslim ummah is well represented in the tech world
              and foster Islamic practices through the use of technology{" "}
            </li>
            <li>
              To be a platform that connects young talents to viable
              opportunities and mentorship{" "}
            </li>
            <li>
              To create a community that enhances learning, interaction and
              networking amongst Muslim techies
            </li>
            <li>
              To be a hub for Muslims tech service and professionals in World{" "}
            </li>
            <li>
              To create a platform for research, teaching and learning while
              enhancing the digital experience through sustainable and reliable
              IT solutions for the Ummah.{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
