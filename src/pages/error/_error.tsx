
import React from "react";
import Link from "next/link";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-left my-10 px-16 py-24">
      <img className="w-[180px] h-[200px]" src="/images/leftError.png" alt="" />
      <div className="flex flex-row my-10">
        <h1 className="font-bold h-9 leading-[1.0] text-[128px] text-primary">
          Something went wrong
        </h1>
        <img className="w-[379px] h-[257px]" src="/images/rightError.png" alt="" />
      </div>
      <Link href="/">
        <button
          className="bg-primary rounded-lg text-white  md:max-w-md
             h-[42px] md:h-[52px] flex items-center justify-center py-2 mt-[10px] px-4
             gap-3 font-medium text-[16px] md:text-base leading-[19px] tracking-[0.4px]"
        >
          <span>Return Home</span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;