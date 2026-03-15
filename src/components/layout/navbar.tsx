"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";

// Assets & Icons
import Logo from "@/assets/Logo.svg";
import { TwitterIcon, LinkedInIcon } from "../svgs"; 

const navLinks = [
  { label: "Al Bait", href: "/" },
  { label: "Membership", href: "/#membership" },
  { label: "Blog", href: "/#blog" },
  { label: "Learning", href: "/#blog" },
  { label: "About Us", href: "/about" },
  { label: "Innovate", href: "/#innovate" },
  { label: "Ummah Builds", href: "/innovations" },
];

const socialLinks = [
  { icon: <TwitterIcon />, href: "https://x.com/musdevofficial" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/79099434" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  // Improved click handler to handle both scrolling and simple navigation closing
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || (href.startsWith("#") && pathname === "/")) {
      const id = href.includes("#") ? href.split("#")[1] : "";
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // ALWAYS close the menu when a link is clicked
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`h-[95px] fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex items-center ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 h-[75px]"
            : "bg-[#0a5e5c] py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center" onClick={() => setMenuOpen(false)}>
            <div className={`transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}>
              <NextImage src={Logo} alt="MusDev Logo" width={120} height={32} priority />
            </div>
          </Link>

          {/* Center Navigation (Desktop) */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive(link.href)
                      ? scrolled ? "bg-[#0a5e5c] text-white" : "bg-white text-[#0a5e5c]"
                      : scrolled ? "text-[#0a5e5c] hover:bg-[#0a5e5c]/10" : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  scrolled 
                    ? "bg-[#0a5e5c]/5 text-[#0a5e5c] hover:bg-[#0a5e5c] hover:text-white" 
                    : "bg-white/10 text-white hover:bg-white hover:text-[#0a5e5c]"
                }`}
              >
                <div className="w-5 h-5">{social.icon}</div>
              </a>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden relative z-50 p-2 outline-none">
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span className={`h-0.5 w-6 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-neutral-900" : scrolled ? "bg-[#0a5e5c]" : "bg-white"}`} />
              <span className={`h-0.5 w-4 transition-all duration-300 ${menuOpen ? "opacity-0" : scrolled ? "bg-[#0a5e5c]" : "bg-white"}`} />
              <span className={`h-0.5 w-5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 bg-neutral-900" : scrolled ? "bg-[#0a5e5c]" : "bg-white"}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${menuOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white transition-transform duration-500 ease-out p-8 pt-24 flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-2xl font-black p-4 rounded-2xl transition-all ${isActive(link.href) ? "text-[#0a5e5c] bg-[#0a5e5c]/5" : "text-neutral-800"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto flex gap-4 p-4 border-t border-neutral-100">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-[#0a5e5c]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}