import React, { useState } from "react";
import Profile from "./profile";
import Settings from "./settings";

const ProfileView = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Profile",
      content: <Profile />,
    },
    {
      title: "Settings",
      content: <Settings />,
    },
  ];

  const onTabSelect = (index: number) => setCurrent(index);

  return (
    <section className="pt-[55px]  md:pl-[47px] bg-[#F0FFFF] md:pr-20 pb-20 ">
      <div className="">
        <h2 className="px-8 md:px-0 font-semibold text-2xl mb-8">
          Make your Profile visible to recruiters
        </h2>
      </div>

      <ul className="flex px-8 md:px-0 items-center gap-6 border-b border-[rgba(182,_182,_182,_0.50)] mb-16">
        <li
          className={`py-4 ${
            current === 0 ? "border-b-2 border-primary text-primary" : ""
          }`}
        >
          <button role="tab" onClick={() => onTabSelect(0)}>
            Profile
          </button>
        </li>
        <li
          className={`py-4 ${
            current === 1 ? "border-b-2 border-primary text-primary" : ""
          }`}
        >
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
