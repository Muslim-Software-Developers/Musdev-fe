import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import Link from "next/link";
import NextImage from "next/image";
import Button from "../button";
import { useSession } from "next-auth/react";
import { MessageIcon, NotificationIcon } from "../svgs";
import UserDropdown from "./userDropdown";

const ToggleButton = ({
  mobileMenuOpen,
  toggleMobileMenu,
}: {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}) => {
  return (
    <div className="lg:hidden z-50">
      <button
        onClick={toggleMobileMenu}
        className={mobileMenuOpen ? "flex ml-auto mt-3" : "outline-none"}
      >
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M2.25 5.1875H21.75M2.25 12.5H21.75M2.25 19.8125H21.75"
              stroke="#0D706E"
              stroke-width="2.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

const Navbar = () => {
  const { data: session } = useSession();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="h-[95px] bg-white flex items-center shadow-[0px_2px_12px_rgba(0,_0,_0,_0.1)] fixed top-0 left-0 right-0 z-10">
      <nav className="wrapper flex items-center justify-between">
        <Link href="/">
          <NextImage src={Logo} alt="Logo" />
        </Link>

        {/* Mobile Menu Toggle */}
        <ToggleButton
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />

        {mobileMenuOpen && (
          <section className="absolute top-0 left-0 right-0 bg-primary z-20 h-screen p-6">
            {/* Mobile Navigation Menu */}
            <div className="flex flex-col top-[95px] left-0 right-0 gap-[40px] mt-11 z-20">
              <ul className="list-none flex flex-col items-center gap-[40px] text-lg font-medium text-white">
                <li>
                  <Link href="#" onClick={toggleMobileMenu}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/membership" onClick={toggleMobileMenu}>
                    Membership
                  </Link>
                </li>

                <li>
                  <Link href="/blog" onClick={toggleMobileMenu}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={toggleMobileMenu}>
                    Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={toggleMobileMenu}>
                    Career
                  </Link>
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
                    <Button
                      variant="outline"
                      className="text-primary bg-white border"
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button variant="primary" className="border">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

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
              <button className="flex items-center justify-center">
                <NotificationIcon />
              </button>
              <button className="flex items-center justify-center">
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
