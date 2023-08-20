import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "../../components/Icons";
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
]

const SearchBar = () => {

  return (
    <div className="max-w-[748px] mx-auto flex items-center flex-col">
      <h1 className="text-5xl mb-8 font-semibold">Search for Jobs</h1>

      <form className="flex items-center max-w-[600px] mx-auto w-full">
        <input
          className="h-[44px] px-4 rounded-tl-2xl rounded-bl-2xl border-[#808080] bg-[rgba(217,217,217,0.33)] border flex-1"
          placeholder="Search here"
        />
        <button className="h-[44px] w-[76px] rounded-tr-2xl rounded-br-2xl border-[#808080] bg-[rgba(217,217,217,0.33)] border border-l-0 flex items-center justify-center">
          <SearchIcon />
        </button>
      </form>

      <nav className="mt-7 mb-20">
        <ul className="list-none flex items-center gap-12">
          {jobCategories.map((category) => (
            <li key={category.title} className="hover:text-primary font-medium text-sm">
              <Link href={category.href}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

const JobCard = ({ job }: { job: JobInfo }) => {
  return (
    <div className="flex justify-between items-end">
      <div className="flex gap-x-10">
        <span
          className={`bg-[${job.color}] w-[90px] h-[90px] rounded-[5px] flex items-center justify-center`}
        >
          <Image src="/images/logo.svg" width={69} height={19} alt="" />
        </span>
        <div>
          <h4 className="text-black text-2xl font-semibold">{job.title}</h4>
          <span className="font-medium text-xl text-[#808080] capitalize pt-2">
            {job.company}
          </span>
          <div className="font-medium text-xl text-[#808080] space-x-4 capitalize">
            <span>{job.location}</span>
            <span>2 days ago</span>
          </div>
          {job.amount && (
            <span className="pt-4 inline-block text-sm font-medium text-[#141414]">
              {job.amount}
            </span>
          )}
        </div>
      </div>
      <div>
        <Button variant="outline" className="capitalize">
          Learn more
        </Button>
      </div>
    </div>
  );
}
const JobHero = () => {
  return (
    <div className="mb-10">
      <h1 className="text-5xl mb-8 font-semibold">Welcome back, Ahmad Rufai</h1>
      <p className="text-2xl font-medium">Recommended for you</p>
    </div>
  )
}

const JobsSection = () => {
  return (
    <section className="wrapper pt-20">
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
