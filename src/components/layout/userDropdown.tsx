import React, { useState } from "react";
import ArrowDownIcon from "../svgs/arrowDown";
import { cn } from "@/utils/helpers";
import Link from "next/link";
import { signOut } from "next-auth/react";

const UserDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen((open) => !open);
  }

  async function handleSignout(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();
    await signOut({ callbackUrl: "/" });
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        id="dropdown-button"
        className="flex items-center gap-2 text-[#808080] justify-center w-full py-2 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        <div className="w-8 h-8 rounded-full bg-slate-300"></div>
        <p>Habib Sagir</p>
        <span>
          <ArrowDownIcon />
        </span>
      </button>
      <div
        id="dropdown-menu"
        className={cn(
          "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",
          isDropdownOpen ? "" : "hidden",
        )}
      >
        <div
          className="py-2 p-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <Link
            href="/app"
            className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
            role="menuitem"
            onClick={handleSignout}
          >
            Signout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
