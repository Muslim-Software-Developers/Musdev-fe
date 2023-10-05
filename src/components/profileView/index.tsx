import React, { useState } from "react";
import Profile from "./profile";
import Settings from "./settings";
import { useGetProfile } from "@/hooks/auth";
import Spinner from "../spinner";

const ProfileView = () => {
  const [current, setCurrent] = useState(0);

  const { isLoading, data } = useGetProfile();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Spinner />
      </div>
    );
  }

  const steps = [
    {
      title: "Profile",
      content: <Profile data={data} />,
    },
    {
      title: "Settings",
      content: <Settings data={data} />,
    },
  ];

  const onTabSelect = (index: number) => setCurrent(index);

  const getActiveClasses = (active: number) =>
    current === active ? "border-b-2 border-primary text-primary" : "";

  return (
    <section className="pt-[55px]  md:pl-[47px] bg-[#F0FFFF] md:pr-20 pb-20 ">
      <div className="">
        <h2 className="px-8 md:px-0 font-semibold text-2xl mb-8">
          Make your Profile visible to recruiters
        </h2>
      </div>

      <ul className="flex items-center gap-6 border-b border-[rgba(182,_182,_182,_0.50)] mb-16">
        <li className={`py-4 ${getActiveClasses(0)}`}>
          <button role="tab" onClick={() => onTabSelect(0)}>
            Profile
          </button>
        </li>
        <li className={`py-4 ${getActiveClasses(1)}`}>
          <button onClick={() => onTabSelect(1)}>Settings</button>
        </li>
        {/* <li className="py-4">
          <button>Profile</button>
        </li> */}
      </ul>

      {steps[current].content}
    </section>
  );
};

export default ProfileView;
