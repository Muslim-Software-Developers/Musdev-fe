import React from "react";
import NextImage from "next/image";
import GetTogether from "../../assets/get-togther.png";

const GetTogetherSection = () => {
  return (
    <section className="md:hidden bg-[#F0FFFF] text-neutral01 pb-11 pt-5 rounded-[20px] px-8 mb-[224px] mt-[118px]">
      <h2 className="text-[32px] font-bold leading-[127%] mb-2">
        Get together
      </h2>
      <p className="text-xl leading-[28px] mb-8">
        Families and friends gathered, joyous feasts shared, prayers offered,
        laughter echoed—Eid get-together, a celebration of love and togetherness
      </p>
      <div className="">
        <NextImage
          src={GetTogether}
          alt="Get Together"
          className="w-full -mx-3 mb-[75px]"
        />
      </div>
      <button className="flex lg:hidden py-2 px-4 justify-center items-center gap-2 rounded-lg text-white bg-primary mt-6">
        <span className="font-sans font-medium tracking-wider text-[14px]">
          Learn more
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
          >
            <g clip-path="url(#clip0_395_1954)">
              <path
                d="M4.45313 2.19336L10.5469 8.28711L4.45312 14.3809"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_395_1954">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(15 15.7871) rotate(-180)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    </section>
  );
};

export default GetTogetherSection;
