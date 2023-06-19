import { programs } from "@/constants/programs";
import Image from "next/image";
import React from "react";

const Programs = () => {
  return (
    <div className="bg-neutral-50">
      <div className="wrapper py-16 ">
        <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl text-center text-neutral01">
          Programs and Projects
        </h2>
        <p className="text-center mt-1 lg:mt-3 xl:text-lg 2xl:text-xl text-neutral02">
          Our programs and projects provide wide opportunities for learning,
          skill development, and networking
        </p>
        <div className="grid md:grid-cols-3 mt-12 md:gap-x-4 gap-y-10 md:gap-y-16 lg:gap-x-8 lg:gap-y-24">
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
