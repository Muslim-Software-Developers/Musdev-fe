import React from "react";
import Logo from "../../assets/Logo.png";
import Link from "next/link";
import NextImage from "next/image";
import Button from "../button";

const Navbar = () => {
  return (
    <header className="h-[95px] flex items-center shadow-[0px_2px_12px_rgba(0,_0,_0,_0.1)] z-10">
      <nav className="wrapper flex items-center justify-between">
        <Link href="/">
          <NextImage src={Logo} alt="Logo" />
        </Link>

        <ul className="list-none flex items-center gap-10 text-lg font-medium">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Membership</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Learning</Link>
          </li>
          <li>
            <Link href="#">Career</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Button variant="outline">Log In</Button>
          <Button variant="primary">Sign Up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
