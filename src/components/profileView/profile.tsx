import React from "react";
import Avatar from "../../../public/images/avatar-3.png";
import circleRightArrow from "../../../public/images/circleRightArrow.png";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import NextImage from "next/image";
import { ProfileProps } from "@/hooks/auth/types";
import WorkExperience from "./settings/workExperienceSection/experience";

interface Props {
  data?: ProfileProps;
}

const Profile = ({ data }: Props) => {
  const skills = [
    "Research",
    "UI Design",
    "Analytics",
    "Adobe XD",
    "CSS",
    "Python",
    "Design",
    "Figma",
    "Blogs",
    "Tailwind",
    "more",
  ];

  return (
    <div>
      <div className="sm:rounded-[0] sm:border-none bg-white w-full mb-16 py-8 px-4 md:px-8 md:rounded-[20px] md:border border-[#B6B6B6]">
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <Image src={Avatar} alt="Profile" />

            <div>
              <h3 className="text-2xl font-semibold">{data?.user.name}</h3>
              <div>
                <p className="font-medium text-xl">Product Designer</p>
                <p className="text-[#808080] font-medium">
                  {data?.years} years of experience
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <p className="text-[#808080]">{data?.bio}</p>
        </div>

        <div></div>
      </div>

      <div className="bg-white py-8 px-8 rounded-[20px] border border-[#B6B6B6]">
        <div className="mb-10">
          <h2 className="mb-4 text-[#808080] text-2xl font-medium">
            Experience
          </h2>

          <WorkExperience works={data?.work || []} />
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-[#808080] text-2xl font-medium">
            Education
          </h2>

          <div className="flex justify-between flex-wrap md:flex-nowrap">
            <div className="mb-4 md:mb-0">
              <h3 className="font-medium">
                Bachelor&apos;s Artificial Intelligence and sustainable
                technologies
              </h3>
              <p className="text-[#808080]">Tomorrow Univeristy 2025</p>
            </div>

            <div className="">
              <h3 className="font-medium">
                Clinton Global Initiative University
              </h3>
              <p className="text-[#808080]">March 2022 - November 2022</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-[#808080] text-2xl font-medium">Skills</h2>

          <ul className="flex item gap-4 flex-wrap">
            {skills.map((skill) => (
              <li
                key={skill}
                className="h-7 shrink-0 rounded-md bg-[#BFE2E2] px-[10px]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
