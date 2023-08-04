import React from "react";
import {
  EventsIcon,
  HomeIcon,
  JobsIcon,
  LearningIcon,
  ProfileIcon,
  SettingsIcon,
  SignoutIcon,
  WriteIcon,
} from "@/components/icons";

const Sidebar = () => {
  const menus = [
    {
      label: "Home",
      href: "/app",
      icon: <HomeIcon />,
    },
    {
      label: "Jobs",
      href: "/app/jobs",
      icon: <JobsIcon />,
    },
    {
      label: "Events",
      href: "/app/events",
      icon: <EventsIcon />,
    },
    {
      label: "Profile",
      href: "/app/profile",
      icon: <ProfileIcon />,
    },
    {
      label: "Learning",
      href: "/app/learning",
      icon: <LearningIcon />,
    },
    {
      label: "Write",
      href: "/app/write",
      icon: <WriteIcon />,
    },
    {
      label: "Settings",
      href: "/app/settings",
      icon: <SettingsIcon />,
    },
    {
      label: "Signout",
      href: "/app/signout",
      icon: <SignoutIcon />,
    },
  ];

  return (
    <aside className="p-4 bg-[#F0FFFF] w-[300px] fixed top-[95px] left-0 bottom-0">
      <ul>
        {menus.map((menu) => (
          <li key={menu.label} className="py-4">
            <div className="flex items-center">
              <span className="mr-4">{menu.icon}</span>
              {menu.label}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
