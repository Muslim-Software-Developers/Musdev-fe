import React from "react";
import Link from "next/link";
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
import { signOut } from "next-auth/react";

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

  const handleMenuClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    menu: string,
  ) => {
    if (menu === "Signout") {
      e.preventDefault();
      await signOut({ callbackUrl: "/" });
    }
  };

  return (
    <aside className="p-4 bg-[#F0FFFF] w-[300px] fixed top-[95px] left-0 bottom-0 border-r border-[#B6B6B6]">
      <ul>
        {menus.map((menu) => (
          <li key={menu.label} className="mb-4">
            <Link
              href={menu.href}
              className="block py-4 ml-4 transition-colors text-[#737791] hover:bg-[#0D706E] hover:text-white hover:transition-colors duration-200 rounded-2xl"
              onClick={(e) => handleMenuClick(e, menu.label)}
            >
              <div className="pl-8 flex items-center text-lg">
                <span className="mr-6">{menu.icon}</span>
                {menu.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
