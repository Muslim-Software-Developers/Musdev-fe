import Image from "next/image";
import { blogData } from "./staticData/ourBlog";
import ArrowRightIcon from "../icons/arrowRightIcon";

const OurBlog = (): JSX.Element => {
  return (
    <section className="py-10 md:py-[61px] wrapper">
      <div className="text-center max-w-[879px] mx-auto mb-6 md:mb-[95px]">
        <h1 className="font-bold text-[25px] md:text-[64px] leading-[1.5] text-[#141414] mb-6">
          Our Blog
        </h1>
        <p className="md:text-[20px] leading-[1.4] text-center text-[#808080]">
          Stay updated with the latest trends, insights, and news from the world
          of technology through our blog. Our team of experts and community
          contributors share their knowledge, experiences, and perspectives to
          keep you informed and inspired.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-y-[30px]">
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
