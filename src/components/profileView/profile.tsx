import React from "react";
import Avatar from "../../../public/images/avatar-3.png";
import circleRightArrow from "../../../public/images/circleRightArrow.png";
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import NextImage from "next/image";

const Profile = () => {
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
          <div className="flex w-[100%] gap-8 items-center">
            <Image src={Avatar} alt="Profile" />

            <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center w-[100%]">
              <h3 className="text-2xl sm:font-semibold md:font-semibold mb-2 md:mb-0">
                Ahmad Rufai Yusuf
              </h3>

              <div className="mb-2 md:mb-0">
                <p className="font-medium md:font-medium text-sm md:text-xl">
                  Product Designer
                </p>

                <p className="text-[#808080] text-xs font-normal md:font-medium">
                  4 years of experience
                </p>
              </div>

              <div>
                <p className="text-primary text-xs md:text-sm font-medium flex flex-row items-center">
                  Edit profile
                  <Image
                    src={circleRightArrow}
                    alt="edit profile"
                    className="ml-2 w-[16px] h-[16px]"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <p className="text-[#808080]">
            I am an innovative, creative individual who is adept at coming up
            with real solutions that work for end users, i create design that
            stir emotions and all so yh Hire me. Because I will transform your
            business by translating you user’s need into pleasing interfaces
          </p>
        </div>

        <div></div>
      </div>

      <div className="bg-white py-8 px-8 rounded-[20px] border border-[#B6B6B6]">
        <div className="mb-10">
          <h2 className="mb-4 text-[#808080] text-2xl font-medium">
            Experience
          </h2>

          <div className="flex flex-col md:flex-row">
            <div className="w-[90px] h-[90px] rounded-md bg-[#E73152] mr-6 mb-4 md:mb-0 flex items-center justify-center">
              <NextImage src={Logo} alt="Logo" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Lead Designer</h2>
              <div className="my-2 text-[#808080]">
                <p className="font-bold text-xl">Musdev</p>
                <p>May 2023 to present</p>
              </div>

              <p className="mb-6">
                Collaborated with partners across product and engineering to
                define, build, and release new products and features. Construct
                user flows, wireframes, and prototypes that effectively
                communicate design concepts.
              </p>
            </div>
          </div>
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
