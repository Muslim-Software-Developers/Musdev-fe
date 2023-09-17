import React from "react";
import ArrowRightIcon from "../svgs/arrowRightIcon";
import Image from "next/image";
import HeroImage from "../../../public/images/hero.png";

const Hero = () => {
  return (
    <section className="flex flex-col pb-40 md:gap-y-40 wrapper pt-20 px-8 md:pt-24 md:pb-72">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:py-[5rem]">
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-[#000000] font-bold text-3xl md:text-[56px] leading-[32.4px] md:leading-[64px] tracking-[-0.025em]">
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
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-[500px] h-[500px]">
            <Image
              src={HeroImage}
              alt="Mission driven. People focused"
              className="rounded-[20px]"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="max-w-[500px] h-[500px]">
            <Image
              src={HeroImage}
              alt="Mission driven. People focused"
              className="rounded-[20px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:w-1/2">
          <ul
            className="flex flex-col gap-4 ml-4 w-full text-[#808080]
            justify-between list-disc"
          >
            <h2 className="mb-3 mt-9 text-[#141414] text-4xl font-bold">
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
