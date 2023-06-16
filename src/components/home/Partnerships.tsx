import Image from "next/image";
import { brands } from "./staticData/ourBlog";

const Partnerships = (): JSX.Element => {
  return (
    <section className="pt-[64px]">
      <h1 className="text-[#111827] font-bold text-[25px] md:text-[36px] leading-[1.4] text-center mb-4 md:mb-6">
        Partnerships
      </h1>
      <p className="md:text-[20px] leading-11 text-center text-[#808080] mb-4 md:mb-11">
        We believe in the power of partnerships to amplify our impact.
        Collaborate with MusTech Community and join forces to drive innovation,
        diversity, and inclusion in the tech industry.
      </p>
      <div className="flex justify-center md:justify-between flex-wrap gap-x-[30px] gap-y-[30px] md:gap-x-0">
        {brands.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={141.65}
            height={27}
            alt="Images"
          />
        ))}
      </div>
    </section>
  );
};

export default Partnerships;
