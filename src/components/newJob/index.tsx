import React from "react";
import Button from "../button";
import { newJobData } from "@/constants/newJobs";

interface INewJobs {
  title: string;
  company: string;
  location: string;
  amount?: string;
  //   time: string;
  color: string;
}

const NewJob = () => {
  return (
    <div>
      <h3 className="text-black text-[32px] pb-10 font-semibold">
        New jobs posted
      </h3>
      <div className="space-y-16">
        {newJobData.map((newJob: INewJobs) => (
          <div key={newJob.title} className="flex justify-between items-end">
            <div className="flex gap-x-10">
              <span
                className={`bg-[${newJob.color}] w-[90px] h-[90px] rounded-[5px] flex items-center justify-center`}
              >
                <img src="/images/logo.svg" alt="" />
              </span>
              <div>
                <h4 className="text-black text-2xl font-semibold">
                  {newJob.title}
                </h4>
                <span className="font-medium text-xl text-[#808080] capitalize">
                  {newJob.company}
                </span>
                <div className="font-medium text-xl text-[#808080] space-x-4 capitalize">
                  <span>{newJob.location}</span>
                  <span>2 days ago</span>
                </div>
                <span className="pt-4 inline-block text-sm font-medium text-[#141414]">
                  {newJob.amount}
                </span>
              </div>
            </div>
            <div>
              <Button variant="outline" className="capitalize">
                description
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewJob;

interface INewJobCard {
  className: string;
  logo: string;
  jobTitle: string;
  company: string;
  location: string;
  amount?: number;
  time: string;
}
const NewJobCard = ({
  className,
  jobTitle,
  company,
  location,
  amount,
  time,
}: INewJobCard) => {
  return (
    <div>
      <div>
        <span
          className={`${className} bg-red-400 w-[90px] h-[90px] rounded-[5px] flex items-center justify-center`}
        >
          <img src="/images/logo.svg" alt="" />
        </span>
        <div>
          <h4>{jobTitle}</h4>
          <span>{company}</span>
          <div>
            <span>{location}</span>
            <span>{time}</span>
          </div>
          <span>{amount}</span>
        </div>
      </div>
      <div>
        <Button variant="outline" className="capitalize">
          description
        </Button>
      </div>
    </div>
  );
};
