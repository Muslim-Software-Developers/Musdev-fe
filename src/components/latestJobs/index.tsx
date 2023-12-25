import React from "react";
import Button from "../button";
import { newJobData } from "@/constants/newJobs";
import Link from "next/link";
import { useGetJobs } from "@/hooks/jobs";
import { formatDistanceToNow } from "date-fns";
import { LoadingSpinner } from "../loadingSpinner";

interface INewJobs {
  title: string;
  company: string;
  location: string;
  amount?: string;
  //   time: string;
  color: string;
}

const LatestJobs = () => {
  const { isLoading, data } = useGetJobs();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h3 className="text-black text-xl md:text-3xl pb-10 font-semibold">
        New jobs posted
      </h3>
      <div className="space-y-16">
        {data?.slice(0, 4)?.map((job) => (
          <div key={job.slug} className="flex justify-between items-center">
            <div className="flex flex-col md:flex-row gap-8">
              <div
                className={`bg-gray-300 w-[90px] h-[90px] rounded-[5px] flex items-center justify-center`}
              >
                {/* <img src="/images/logo.svg" alt="" /> */}
              </div>

              <div>
                <h4 className="text-black textlg md:text-2xl font-semibold">
                  {job.title}
                </h4>
                <span className="font-medium text-base md:text-xl text-[#808080] capitalize">
                  {job.company_name}
                </span>
                <div className="font-medium text-base md:text-xl text-[#808080] space-x-4 capitalize">
                  <span>{formatDistanceToNow(job.listed_on)} ago</span>
                </div>
                {/* <span className="pt-4 inline-block text-sm font-medium text-[#141414]">
                  {newJob.amount}
                </span> */}
              </div>
            </div>
            <div>
              <Button variant="outline" className="capitalize">
                View
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center">
        <Link href="/app/jobs">
          <Button variant="primary">view more</Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestJobs;

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
