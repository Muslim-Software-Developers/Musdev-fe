import Image from "next/image";
import { brands } from "./staticData/ourBlog";

const Partnerships = (): JSX.Element => {
  return (
    <section className="pt-[96px] md:pt-[64px] wrapper">
      <h1 className="hidden md:block text-[#111827] font-bold text-[25px] md:text-[36px] leading-[1.4] text-center mb-4 md:mb-6">
        Partnerships
      </h1>
      <p className="text-neutral01 md:text-neutral02 text-[20px] leading-[140%] md:text-center mb-8 md:mb-11">
        <span className="block font-bold text-2xl mb-3 leading-normal md:font-normal md:text-xl  md:inline">
          We believe in the power of partnerships to amplify our impact.
        </span>
        Collaborate with MusTech Community and join forces to drive innovation,
        diversity, and inclusion in the tech industry.
      </p>
      <div className="flex justify-center md:hidden mt-10 -ml-4 flex-wrap gap-x-[90px] gap-y-[28px] md:gap-x-0">
        {brands.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={97}
            height={18}
            alt="Images"
            className="w-[97px]"
          />
        ))}
      </div>
      <div className="hidden md:flex justify-center md:justify-between flex-wrap gap-x-[30px] gap-y-[30px] md:gap-x-0">
        {brands.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={141.65}
            height={27}
            alt="Images"
            className="w-[97px]"
          />
        ))}
      </div>
    </section>
  );
};

export default Partnerships;
