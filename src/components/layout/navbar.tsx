import React from "react";
import Logo from "../../assets/Logo.svg";
import Link from "next/link";
import NextImage from "next/image";
import Button from "../button";
import { useSession } from "next-auth/react";
import { MessageIcon, NotificationIcon } from "../svgs";
import UserDropdown from "./userDropdown";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="h-[95px] bg-white flex items-center shadow-[0px_2px_12px_rgba(0,_0,_0,_0.1)] fixed top-0 left-0 right-0 z-10">
      <nav className="wrapper flex items-center justify-between">
        <Link href="/">
          <NextImage src={Logo} alt="Logo" />
        </Link>

        <ul className="list-none flex items-center gap-10 text-lg font-medium">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="/membership">Membership</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="#">Learning</Link>
          </li>
          <li>
            <Link href="#">Career</Link>
          </li>
        </ul>

        {session ? (
          <div className="flex items-center gap-5">
            <button>
              <NotificationIcon />
            </button>
            <button>
              <MessageIcon />
            </button>
            <UserDropdown />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="outline">Log In</Button>
            </Link>

            <Link href="/auth/signup">
              <Button variant="primary">Sign Up</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
