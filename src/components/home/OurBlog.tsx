import Image from "next/image";
import { blogData } from "./staticData/ourBlog";
import ArrowRightIcon from "../svgs/arrowRightIcon";

const OurBlog = (): JSX.Element => {
  return (
    <section className="py-10 md:py-[61px] wrapper">
      <div className="px-3 lg:text-center max-w-[879px] mx-auto mb-6 lg:mb-[95px]">
        <h1 className="font-bold text-[32px] lg:text-[64px] leading-[40.8px] text-[#141414] mb-6">
          <span className="block md:hidden mt-[110px] mb-8">Blog</span>
          <span className="hidden md:block">Our Blog</span>
        </h1>
        <p className="text-[20px] leading-[127%] lg:text-center text-[#141414] lg:text-[#808080]">
          Stay updated with the latest trends, insights, and news from the world
          of technology through our blog. Our team of experts and community
          contributors share their knowledge, experiences, and perspectives to
          keep you informed and inspired.
        </p>
        <button className="flex lg:hidden py-2 px-4 justify-center items-center gap-2 rounded-lg text-white bg-primary mt-6">
          <span className="font-sans font-medium tracking-wider text-[14px]">
            Start reading
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
      </div>

      <div className="hidden md:flex flex-col md:flex-row justify-between gap-y-[30px]">
        <div className="w-full md:w-[48.7%]">
          <div className="w-full h-[185px] md:h-[357px] relative">
            <Image
              src="/images/sitting-room.svg"
              alt="Sitting room"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-bold md:text-[24px] text-[#141414] leading-[1.4]">
            Flying fish swiftly flew by the space station.
          </p>
          <p className="text-[#808080] mb-6">
            Quis neque, eu et ipsum amet, vel et. Varius integer enim
            pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas
            nibh.
          </p>
          <div className="flex gap-x-[12px]">
            <Image
              src="/images/Avatar.png"
              alt="Avatar"
              width={40}
              height={40}
            />
            <div>
              <p className="text-[#141414] text-[14px] ">Loki Bright</p>
              <p className="text-[14px] leading-3 text-[#808080] ">
                Oct 19, 2021 • 5min read
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[48.7%] flex flex-col">
          {blogData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row md:gap-x-[32px] mb-6"
            >
              <Image src={item.image} alt="Imagaes" width={176} height={108} />
              <div className="mt-[20px] lg:mt-0">
                <h1 className="font-bold md:text-[20px] leading-5 text-[#141414] ">
                  {item.textBold}
                </h1>
                <p className="text-[#808080]">{item.text}</p>
              </div>
            </div>
          ))}
          <button className="flex text-[#0D706E] font-medium items-center gap-x-[10px] w-[fit-content]">
            <span>Learn More</span>
            <ArrowRightIcon stroke1="#0D706E" stroke2="#0D706E" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
