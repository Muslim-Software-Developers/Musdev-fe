import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "../../components/svgs";
import Button from "../../components/button";

interface JobInfo {
  id: number;
  title: string;
  company: string;
  location: string;
  amount?: string;
  color: string;
}

const jobCategories = [
  { title: "All", href: "#" },
  { title: "Design", href: "#" },
  { title: "Web Development", href: "#" },
  { title: "Data", href: "#" },
  { title: "Cybersecurity", href: "#" },
  { title: "Others", href: "#" },
];

const jobData: JobInfo[] = [
  {
    id: 1,
    title: "UI Engineer",
    company: "musdev",
    location: "abuja",
    amount: "600K - 700K",
    color: "#7C70EB",
  },
  {
    id: 2,
    title: "UI Engineer",
    company: "musdev",
    location: "abuja",
    amount: "600K - 700K",
    color: "#0D706E",
  },
  {
    id: 3,
    title: "UI Engineer",
    company: "musdev",
    location: "abuja",
    amount: "600K - 700K",
    color: "#7C70EB",
  },
  {
    id: 4,
    title: "UI Engineer",
    company: "musdev",
    location: "abuja",
    amount: "600K - 700K",
    color: "#E73152",
  },
  {
    id: 5,
    title: "UI Engineer",
    company: "musdev",
    location: "abuja",
    amount: "600K - 700K",
    color: "#7C70EB",
  },
  {
    id: 6,
    title: "UI Engineer",
    company: "musdev",
    location: "abuja",
    amount: "600K - 700K",
    color: "#0D706E",
  },
  {
    id: 7,
    title: "UI Engineer",
    company: "musdev",
    location: "abuja",
    amount: "600K - 700K",
    color: "#E73152",
  },
];

const SearchBar = () => {
  return (
    <div className="max-w-[760px] w-full mx-auto">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl mb-8 font-semibold">
          Search for Jobs
        </h1>

        <form className="flex items-center mx-auto w-full">
          <input
            className="h-[44px] text-sm md:text-xl px-4 rounded-tl-2xl rounded-bl-2xl border-[#808080] bg-white  md:bg-[rgba(217,217,217,0.33)] border flex-1"
            placeholder="Search here"
          />
          <button className="h-[44px] w-[50px]  md:w-[76px] rounded-tr-2xl rounded-br-2xl border-[#808080] bg-white md:bg-[rgba(217,217,217,0.33)] border border-l-0 flex items-center justify-center">
            <SearchIcon />
          </button>
        </form>
      </div>

      <nav className="mt-7 mb-20 flex items-center justify-center">
        <ul className="list-none flex flex-wrap items-center gap-12">
          {jobCategories.map((category) => (
            <li
              key={category.title}
              className="hover:text-primary font-normal md:font-medium text-sm"
            >
              <Link href={category.href}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const JobCard = ({ job }: { job: JobInfo }) => {
  return (
    <div className="flex justify-between items-end">
      <div className="flex w-full flex-col gap-x-10">
        <div className="w-full flex flex-row mb-8">
          <span
            className={`bg-[${job.color}] w-[90px] h-[90px] mr-[32px] rounded-[5px] flex items-center justify-center`}
          >
            <Image src="/images/logo.svg" width={69} height={19} alt="" />
          </span>
          <span className="md:w-[full]">
            <h4 className="text-black text-xl capitalize font-semibold">
              {job.company}
            </h4>
            <span className="font-medium text-lg text-[#808080] capitalize pt-2">
              {job.title}
            </span>

            <div className="hidden md:flex w-full flex-col md:flex-row md:justify-between border-coolGray-50">
              <div>
                <div className="font-medium text-lg text-[#808080] space-x-4 capitalize">
                  <span>{job.location}</span>
                  <span>2 days ago</span>
                </div>
                {job.amount && (
                  <span className="pt-4 inline-block text-sm font-medium text-[#141414]">
                    {job.amount}
                  </span>
                )}
              </div>
              <Button variant="outline" className="capitalize">
                Learn more
              </Button>
            </div>
          </span>
        </div>

        <div className="w-full md:hidden flex flex-col md:flex-row md:justify-between border-neutral05 border-[2px] p-5 rounded-xl">
          <span className="font-medium text-lg text-neutral01 capitalize pt-2 mb-2">
            {job.title}
          </span>

          <div className="flex flex-row items-center justify-start mb-3 bg-white">
            <div className="font-medium text-[11px] text-[#808080] capitalize mr-2">
              <span>{job.location}</span> . <span>2 days ago.</span>
            </div>
            {job.amount && (
              <span className="font-medium text-[11px] text-[#808080] capitalize">
                {job.amount}
              </span>
            )}
          </div>
          <Button variant="outline" className="capitalize w-[45%] text-sm">
            <p className="text-sm">Learn more</p>
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
const JobHero = () => {
  return (
    <div className="mb-10">
      <h1 className="text-xl md:text-3xl mb-2 md:mb-8 font-semibold">
        Welcome back, Ahmad Rufai
      </h1>
      <p className="text-sm md:text-xl font-medium">Recommended for you</p>
    </div>
  );
};

const JobsSection = () => {
  return (
    <section className="pt-[55px] pl-[16px] md:pl-[47px] bg-white md:bg-[#F0FFFF] pr-[16px] md:pr-20 space-y-24 pb-20">
      <SearchBar />
      <JobHero />
      <div className="space-y-16 mt-20 pb-20">
        {jobData.map((job: JobInfo) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobsSection;
