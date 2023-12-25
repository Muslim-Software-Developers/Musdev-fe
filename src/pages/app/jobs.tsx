import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { SearchIcon } from "../../components/svgs";
import Button from "../../components/button";
import { useGetJobs } from "@/hooks/jobs";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { JobProps } from "@/hooks/jobs/types";
import { useSession } from "next-auth/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/drawer";
import { useToggle } from "@/hooks/useToggle";
import ViewJobModal from "@/components/modals/viewJobModal";

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

const JobCard = ({ job, onClick }: { job: JobProps; onClick?: () => void }) => {
  return (
    <div className="flex justify-between items-center">
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
        <Button
          variant="outline"
          className="capitalize"
          onClick={onClick && onClick}
        >
          View
        </Button>
      </div>
    </div>
  );
};

const JobHero = () => {
  const { data: session } = useSession();

  return (
    <div className="mb-10">
      <h1 className="text-xl md:text-3xl mb-2 md:mb-8 font-semibold">
        Welcome back, {session?.user.user.name}
      </h1>
      <p className="text-sm md:text-xl font-medium">Recommended for you</p>
    </div>
  );
};

const JobsSection = () => {
  const [currentJobDetail, setCurrentJobDetail] = useState<JobProps>();
  const [isJobDetailModalOpen, closeJobDetailModal] = useToggle(false);

  const { isLoading, data } = useGetJobs();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <section className="relative pt-[55px] px-4 lg:px-8 md:bg-[#F0FFFF] space-y-24 pb-20">
        <SearchBar />
        <JobHero />
        <div className="space-y-16 mt-20 pb-20">
          {data?.map((job) => (
            <JobCard
              key={job.slug}
              job={job}
              onClick={() => {
                setCurrentJobDetail(job);
                closeJobDetailModal();
              }}
            />
          ))}
        </div>

        {isJobDetailModalOpen ? (
          <ViewJobModal
            isOpen={isJobDetailModalOpen}
            closeModal={closeJobDetailModal}
            currentJobDetail={currentJobDetail}
          />
        ) : null}
      </section>
    </>
  );
};

export default JobsSection;
