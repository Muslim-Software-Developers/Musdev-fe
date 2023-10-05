import React from "react";
import Logo from "../../assets/Logo.svg";
import Link from "next/link";
import NextImage from "next/image";
import Button from "../button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../svgs";

const Footer = () => {
  const links = [
    {
      name: "About",
      url: "#",
    },
    {
      name: "Mentorship",
      url: "#",
    },
    {
      name: "Careers",
      badge: "We're hiring!",
      badgeColor: " #F5F5FF",
      url: "#",
    },
    // {
    //   name: "We're hiring!",
    //   url: "#",
    //   hasBadge: true,
    //   badgeColor: " #F5F5FF",
    // },
    {
      name: "Community",
      url: "#",
    },
  ];

  return (
    <footer className="bg-[#F0FFFF] py-16">
      <div className="container mx-auto">
        <div className="flex flex-col px-4 lg:flex-row items-start lg:justify-between lg:items-end pb-16 border-b border-b-[#E5E7EB]">
          <div className="flex flex-col">
            <div className="w-[58px]">
              <NextImage src={Logo} alt="Logo" />
            </div>
            <ul className="flex flex-col lg:flex-row lg:items-center gap-6 text-[#6B7280] mt-8">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.url}>
                    {link.name}{" "}
                    <span
                      className={
                        link.badge
                          ? `bg-[#F5F5FF] px-[10px] py-[2px] rounded-3xl`
                          : ""
                      }
                    >
                      {link?.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-16">
            <p className="text-[#374151]">
              Get the latest updates in your inbox!
            </p>
            <form className="mt-6 flex items-center gap-2">
              <input
                placeholder="Email address"
                className="h-[42px] rounded-lg border border-[#808080] px-3 placeholder:text-[#808080] flex-1"
              />
              <Button variant="primary" className="w-[94px] h-[42px]">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row justify-center items-center lg:justify-between pt-8">
          <div className="flex items-center gap-4">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>

          <div className="flex items-center gap-8 text-[#6B7280] text-sm">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
