"use-client";

import React from "react";
import { SearchIcon } from "../svgs";
import Link from "next/link";

const BlogHero = () => {
  const links = [
    {
      title: "All",
      href: "#",
    },
    {
      title: "Design",
      href: "#",
    },
    {
      title: "Web Development",
      href: "#",
    },
    {
      title: "Data",
      href: "#",
    },
    {
      title: "Cybersecurity",
      href: "#",
    },
    {
      title: "Others",
      href: "#",
    },
  ];
  return (
    <section className="wrapper pt-20">
      <div className="max-w-[992px] mx-auto px-4 md:px-0 flex items-center flex-col">
        <h1 className="text-5xl mb-16">Our Blog</h1>

        <p className="text-center">
          As technology continues to evolve, we&apos;re witnessing more and more
          groundbreaking applications of artificial intelligence (AI) in various
          industries. Perhaps nowhere is the pace of AI adaptation more rapid
          than in the world of design, and as a designer myself, I find it both
          thrilling and humbling.
        </p>

        <form className="mt-8 flex items-center max-w-[600px] mx-auto w-full">
          <input
            className="h-[44px] px-4 rounded-tl-2xl rounded-bl-2xl border-[#808080] bg-[rgba(217,217,217,0.33)] border flex-1"
            placeholder="Search here"
          />
          <button className="h-[44px] w-[76px] rounded-tr-2xl rounded-br-2xl border-[#808080] bg-[rgba(217,217,217,0.33)] border border-l-0 flex items-center justify-center">
            <SearchIcon />
          </button>
        </form>

        <nav className="mt-8 mb-20 overflow-auto pb-4 w-full">
          <ul className="list-none flex items-center justify-center gap-4 md:gap-12">
            {links.map((link) => (
              <li key={link.title} className="flex-shrink-0">
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default BlogHero;
