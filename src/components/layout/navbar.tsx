import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import Link from "next/link";
import NextImage from "next/image";
import Button from "../button";
import { useSession } from "next-auth/react";
import { MessageIcon, NotificationIcon } from "../svgs";
import UserDropdown from "./userDropdown";

const Navbar = () => {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const mobileMenuClasses = mobileMenuOpen
  ? "lg:hidden absolute top-0 left-0 right-0 bg-[#0D706E] z-20 h-screen flex flex-col items-center justify-center transform translate-x-0"
  : "lg:hidden absolute top-0 left-0 right-0 bg-transparent z-20 h-screen flex flex-col items-center justify-center transform translate-x-full";

  return (
    <header className="h-[95px] bg-white flex items-center shadow-[0px_2px_12px_rgba(0,_0,_0,_0.1)] fixed top-0 left-0 right-0 z-10">
      <nav className="wrapper flex items-center justify-between">
        <Link href="/">
          <NextImage src={Logo} alt="Logo" />
        </Link>

        {/* Mobile Menu Toggle */}
        <section className={`lg:hidden ${mobileMenuOpen && 'absolute top-0 left-0 right-0 bg-primary z-20 h-screen p-6'}`}>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className={mobileMenuOpen ? 'flex ml-auto mt-3' : ''}>
            {mobileMenuOpen ? (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-[25px] text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M2.25 5.1875H21.75M2.25 12.5H21.75M2.25 19.8125H21.75" stroke="#0D706E" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="flex flex-col top-[95px] left-0 right-0 gap-[40px] mt-11 z-20">
            <ul className="list-none flex flex-col items-center gap-[40px] text-lg font-medium text-white">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Learning</Link>
              </li>
            </ul>
            {session ? (
              <div className="flex items-center justify-center gap-[40px]">
                <button>
                  <NotificationIcon />
                </button>
                <button>
                  <MessageIcon />
                </button>
                <UserDropdown />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-[40px]">
                <Link href="/auth/login">
                  <Button variant="outline" className="text-primary bg-white border">Log In</Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="primary" className="border">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        )}
        </section>

        {/* Desktop Navigation Menu */}
        <ul className="hidden list-none lg:flex items-center gap-10 text-lg font-medium">
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
        <div className="hidden lg:flex items-center gap-5">
          {session ? (
            <>
              <button>
                <NotificationIcon />
              </button>
              <button>
                <MessageIcon />
              </button>
              <UserDropdown />
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="primary">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
