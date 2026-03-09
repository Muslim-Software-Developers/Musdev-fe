"use-client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "../../components/svgs";

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
    <div>..</div>
  );
};

const JobCard = ({
  job,
  setShowJobInfo,
}: {
  job: JobInfo;
  setShowJobInfo: React.Dispatch<JobInfo>;
}) => {
  return (
  <div>..</div>>
  );
};

const JobInfo = ({
  jobInfo,
  setShowJobInfo,
}: {
  jobInfo: JobInfo | undefined;
  setShowJobInfo: React.Dispatch<JobInfo | undefined>;
}) => {
  const [showApply, setShowApply] = useState<boolean>(false);

  const info = ` Founded by two ex-Coinbase employees and backed by top investors
  including Andreesen Horowitz, Coinbase, IDEO, and Kindred
  Ventures, Goldfinch is a decentralized credit platform that is
  using crypto to empower financial inclusion around the world.
  Our vision is to connect the world&apos;s capital to the world&apos;s
  growth by building a global cashflow marketplace, enabling
  anyone to bring their earning potential on-chain and access
  funding from anyone in the world. Since announcing the protocol
  in January 2021, Goldfinch has issued over $120M of loans to
  wholesale lenders who have in turn helped Goldfinch reach +2M
  end-borrowers with zero losses. Goldfinch has scaled to four
  continents, covering +20 different countries, and we&apos;re just
  getting started. As a Warbler Labs Product Designer, you&apos;ll
  craft delightful, user-centered experiences. You&apos;ll be involved
  in every step of the product development process, from
  brainstorming ideas to developing high-fidelity designs. How can
  we ensure the product is clear to use, and that each participant
  fully understands the decisions and transactions they&apos;re making?
  You&apos;ll set a vision for how we design these experiences, and
  you&apos;ll collaborate closely with our entire team to execute on
  that vision. What you&apos;ll be doing (i.e. job duties): Work
  independently to complete projects ranging from new features to
  entirely new product offerings Conduct user research to
  understand user needs and problems Lead internal workshops to
  define and refine design goals and needs Design flows and
  experiences that are simple, intuitive, and elegant Design new
  experiences or layouts that evolve or define visual systems Give
  and solicit feedback from other designers in order to
  continually raise our bar for quality Partner with product
  managers, engineers, and other cross functional partners iterate
  on and oversee the user experience of a product from conception
  until launch What we look for in you (i.e. job requirements):
  Excitement about the Goldfinch mission, and crypto! 5+ years of
  experience working in UX, UI, or related areas Fluency w/
  responsive design and designing across multiple breakpoints
  Ability to collaborate cross-functionally and drive alignment
  Strong design craft, in both UX flows and visual design
  Excellent oral and written communication skills Ability to work
  with little guidance and find paths forward Nice to haves:
  Experience in crypto and/or fintech Benefits/Perks All roles
  include meaningful equity and tokens Healthcare, dental, vision
  Occasional free lunch Maternal / Paternal leave Salary Range:
  120k - 180K`;

  return (
    <div className="relative w-full h-[100vh]">
      <div className="fixed flex flex-col items-end w-full h-[100vh] bg-orange-300 bottom-0">
        <div
          className="w-full h-[20%] bottom-[100%] bg-green-300"
          onClick={() => setShowJobInfo(undefined)}
        ></div>
        <div className="w-full h-[80%] bottom-[100%] bg-lightGreenBg px-4 md:px-20 flex flex-col items-center">
          <span className="flex w-[90px] -mb-3 h-[90px] bg-red-300 relative -top-10 justify-center items-center">
            <Image src="/images/logo.svg" width={69} height={19} alt="" />
          </span>

          <div className="w-full mb-4">
            <div className="w-full flex flex-col items-center">
              <p className="text-xl md:text-2xl font-semibold text-black mb-[5px] md:mb-4">
                UI Engineer
              </p>

              <p className="text-sm font-medium text-center md:text-xl text-neutral02 mb-[5px] md:mb-4">
                The core development team supporting the growth and success of
                the musdev protocol
              </p>

              <p className="text-[8px] font-normal md:text-base text-dropDownColor mb-[5px]">
                800K - 900K
              </p>
            </div>

            <div className="w-full  flex justify-center mb-10">
              <Image
                src="/images/logo.svg"
                className="mr-4"
                width={50}
                height={40}
                alt="profile picture"
              />

              <span>
                <p className="text-base text-neutral02 font-medium">
                  Posted by
                </p>
                <p className="text-xl text-black font-medium">
                  Ja’far Isah Jibril
                </p>
              </span>
            </div>

            <div className="mb-3 w-[100%] ">
              <h3 className="mb-3">About the job</h3>
              <p className="h-[30vh] md:w-[60%] lg:w-[80%] text-left flex flex-wrap overflow-y-scroll">
                {info}
              </p>
            </div>

       
          </div>
        </div>
      </div>
      {/* This is the popup */}
      {!showApply && (
        <div className="absolute w-full px-3 top-0 z-40 bg-orange-400">
          <div className="w-full py-10">
            <p className="text-xl md:text-2xl font-semibold text-black mb-[5px] md:mb-4">
              UI Engineer
            </p>
          </div>
          <div></div>
        </div>
      )}
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
  const [showJobInfo, setShowJobInfo] = useState<JobInfo | undefined>(
    undefined,
  );

  useEffect(() => {
    return () => {
      console.log("here...");
      setShowJobInfo(undefined);
    };
  }, []);

  return (
    <>
      <section className="relative pt-[55px] px-4 lg:px-8md:bg-[#F0FFFF] space-y-24 pb-20">
        <SearchBar />
        <JobHero />
        <div className="space-y-16 mt-20 pb-20">
          {jobData.map((job: JobInfo) => (
            <JobCard key={job.id} job={job} setShowJobInfo={setShowJobInfo} />
          ))}
        </div>
      </section>
      {showJobInfo!?.id > 0 ? (
        <JobInfo jobInfo={showJobInfo} setShowJobInfo={setShowJobInfo} />
      ) : null}
    </>
  );
};

export default JobsSection;
