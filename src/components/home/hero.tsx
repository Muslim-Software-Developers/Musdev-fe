import React from "react";
import ArrowRightIcon from "../svgs/arrowRightIcon";

const Hero = () => {
  return (
    <section className="flex flex-col gap-y-40 wrapper pt-24 pb-72">
      <div className="flex items-center gap-x-[90px]">
        <div className="flex flex-col w-3/5">
          <h1 className="text-[#000000] font-bold text-[64px] leading-[86px] tracking-[-0.025em]">
            Nigeria’s Foremost community of Muslims in Tech
          </h1>
          <p className="text-[#808080] text-2xl leading-[31px] pt-2">
            Join a vibrant community of Muslim tech enthusiasts shaping the
            future of technology
          </p>
          <div className="pt-[38px]">
            <button className="bg-primary rounded-lg text-white w-[135px] h-[45px] flex items-center justify-between px-4 font-medium text-base leading-[19px] tracking-[0.4px]">
              <span>Join Now</span>
              <span>
                <ArrowRightIcon stroke1="white" stroke2="white" />
              </span>
            </button>
          </div>
        </div>
        <div className="w-2/5 h-[687px] rounded-[20px] bg-hero-image bg-center"></div>
      </div>
      <div className="flex items-center gap-x-[90px]">
        <div className="w-2/5 h-[687px] rounded-[20px] bg-hero-image bg-center" />
        <div className="flex flex-col w-3/5">
          <ul className="w-full h-[687px] text-[#808080] text-2xl leading-[31px] font-medium flex flex-col justify-between list-disc">
            <h1 className="text-black text-5xl leading-[65px] font-bold">
              Mission driven. People focused.
            </h1>
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
