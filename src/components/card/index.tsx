import React from "react";
import Button from "../button";

interface ICard {
  courseTitle: string;
  className: string;
}

export interface ICardTwo {
  logo: string;
  image: string;
  title: string;
  description: string;
  name: string;
  jobTitle: string;
  date: string;
  product: string;
}

export const CardOne = ({ courseTitle, className }: ICard) => {
  return (
    <div className="border border-solid border-[#B6B6B6)] bg-white p-5 rounded-[20px] w-full space-y-6">
      <div className="flex gap-x-8 items-center">
        <span
          className={`${className} rounded-[10px] h-20 w-20 inline-block`}
        ></span>
        <p className="text-[24px] font-medium capitalize">{courseTitle}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-[11px] w-9/12 rounded-[20px] bg-[#B6B6B6] relative">
          <span className="absolute h-full bg-[#0D706E] w-3/12 rounded-[20px]"></span>
        </div>
        <div>
          <Button variant="outline">Continue</Button>
        </div>
      </div>
    </div>
  );
};

export const CardTwo = ({
  logo,
  image,
  title,
  description,
  name,
  jobTitle,
  product,
  date,
}: ICardTwo) => {
  return (
    <div className="rounded-t-[10px] bg-white">
      <span className="w-full">
        <img src={logo} alt="" className="w-full"/>
      </span>
      <div className="p-5 space-y-6">
        <h3 className="text-black font-semibold text-base">{title}</h3>
        <p className="text-sm text-[#696767]">{description}</p>
        <div className="flex justify-between">
          <div className="flex gap-x-2">
            <span className="mt-2">
              <img src={image} alt="" />
            </span>
            <div>
              <h4 className="text-sm text-black font-medium">{name}</h4>
              <p className="text-[#696767] text-[10px] font-light capitalize">{jobTitle}</p>
              <span className="text-[#696767] text-[10px] font-light">
                {date}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <Button className=" bg-[#BFE2E2] rounded-2xl  py-1.5 px-3 text-[#696767] font-light text-xs capitalize">
              {product}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
