"use client";

import React from "react";
import Link from "next/link";
import NextImage from "next/image";

// Assets & Icons
import Logo from "../../assets/Logo.svg";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../svgs";

const navLinks = [
  { name: "About", url: "#" },
  { name: "Mentorship", url: "#" },
  { name: "Careers", url: "#", badge: "We're hiring!" },
  { name: "Community", url: "#" },
  { name: "Events", url: "#" },
];

const programLinks = [
  "Learning & Dev",
  "Hackathons",
  "Conferences",
  "Business Pitch",
];

export default function Footer() {
  return (
    <footer className="bg-[#f0ffff] border-t border-neutral-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="#" className="mb-6">
              <NextImage src={Logo} alt="MusDev Logo" width={110} height={30} priority />
            </Link>
            <p className="text-neutral-600 text-sm leading-relaxed max-w-xs mb-6">
              Nigeria&apos;s foremost community of Muslims in Tech — connecting talent, 
              fostering Islamic values, and shaping the future of technology.
            </p>

            {/* Contact Info */}
            <div className="mb-8">
              <h4 className="text-[#0a5e5c] font-bold text-xs uppercase tracking-widest mb-2">Contact Us</h4>
              <div className="flex flex-col gap-1">
                <a 
                  href="mailto:info@musdev.org" 
                  className="text-neutral-900 font-bold text-sm hover:text-[#0a5e5c] transition-colors"
                >
                  info@musdev.org
                </a>
                <a 
                  href="https://x.com/musdevofficial" 
                  target="_blank" 
                  className="text-neutral-500 text-xs hover:text-[#0a5e5c] transition-colors"
                >
                  @musdevofficial
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: <TwitterIcon />, href: "https://x.com/musdevofficial" },
                { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/79099434" },
                { icon: <InstagramIcon />, href: "#" }, // Keep as # or update if needed
                { icon: <FacebookIcon />, href: "https://www.facebook.com/musdev.org" },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:text-[#0a5e5c] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="text-[#0a5e5c] font-bold text-sm uppercase tracking-wider mb-6">Navigate</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.url} 
                    className="text-neutral-600 hover:text-[#0a5e5c] text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="text-[10px] bg-[#0a5e5c]/10 text-[#0a5e5c] px-2 py-0.5 rounded-full font-bold">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-[#0a5e5c] font-bold text-sm uppercase tracking-wider mb-6">Programs</h4>
            <ul className="space-y-4">
              {programLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-600 hover:text-[#0a5e5c] text-sm font-medium transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100">
              <h4 className="text-neutral-900 font-bold mb-2">Join our Newsletter</h4>
              <p className="text-neutral-500 text-xs mb-6">Get the latest updates in your inbox! Join 2,500+ techies.</p>
              
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-[50px] rounded-xl bg-neutral-50 border border-neutral-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a5e5c]/20 focus:border-[#0a5e5c] transition-all"
                />
                <button
                  type="submit"
                  className="w-full h-[50px] bg-[#0a5e5c] text-white font-bold rounded-xl hover:bg-[#084a48] transition-all shadow-lg shadow-[#0a5e5c]/20 active:scale-95"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200/60 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-neutral-500 text-xs font-medium">
            © {new Date().getFullYear()} MusDev Community. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-bold text-neutral-400">
            <Link href="#" className="hover:text-[#0a5e5c] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#0a5e5c] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}