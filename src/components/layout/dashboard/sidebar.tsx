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
} from "@/components/svgs";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { pathname } = useRouter();

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
    // {
    //   label: "Learning",
    //   href: "/app/learning",
    //   icon: <LearningIcon />,
    // },
    {
      label: "Write",
      href: "/app/write",
      icon: <WriteIcon />,
    },
    // {
    //   label: "Settings",
    //   href: "/app/settings",
    //   icon: <SettingsIcon />,
    // },
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

  const isActiveMenu = (active: string) =>
    active === pathname ? "bg-[#0D706E] text-white" : "";

  return (
    <aside className="p-4 bg-[#F0FFFF] w-[300px] md:flex fixed top-[95px] left-[-300px] lg:left-0 bottom-0 border-r border-[#B6B6B6]">
      <ul className="flex-1">
        {menus.map((menu) => (
          <li key={menu.label}>
            <Link
              href={menu.href}
              className={`block py-4 ml-4 transition-colors text-[#737791] hover:transition-colors duration-200 rounded-2xl hover:bg-[#0D706E] hover:text-white ${isActiveMenu(
                menu.href,
              )}`}
              onClick={(e) => handleMenuClick(e, menu.label)}
            >
              <div className="pl-8 flex items-center">
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
