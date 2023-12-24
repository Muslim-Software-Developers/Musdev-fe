import React from "react";
import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-40 md:py-10 md:space-y-[10px]">
      <img className="md:max-w-sm" src="/images/404.png" alt="" />
      <h1 className="font-semibold text-[64px] text-center">404 Error</h1>
      <p className="md:w-1/3 font-semibold text-[20px] text-center">
        Sorry, we couldn't find the path you were seeking. Our team of tech imams
        is on the case.
      </p>
      <Link href="/">
        <button
          className="bg-primary rounded-lg text-white w-full md:max-w-md
             h-[45px] md:h-[55px] flex items-center justify-center py-2 mt-[10px] px-4
             gap-3 font-medium text-[16px] md:text-base leading-[19px] tracking-[0.4px]"
        >
          <span>Return Home</span>
        </button>
      </Link>
    </div>
  );
};

export default Custom404;