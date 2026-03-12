"use client";

import React, { useEffect, useRef, useState } from "react";
import { getStrapiData } from "@/utils/api";

// Custom SVG Icons
const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ImpactIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>(null);

  // 1. Fetch Strapi Data
  useEffect(() => {
    const fetchContent = async () => {
      const result = await getStrapiData("about-page");
      if (result) setData(result);
    };
    fetchContent();
  }, []);

  // 2. Reveal Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [data]); // Re-run observer when data loads

  // Fallback defaults
  const content = {
    heroTitle: data?.hero_title || "An umbrella for Muslims in Tech.",
    heroDesc: data?.hero_description || "Founded on November 22, 2015, MusDev was built to create a unified platform for talent...",
    impactDesc: data?.impact_description || "We believe in practical support. From training seminars for both Muslims and non-Muslims...",
    quote: data?.impact_quote || "Our members have become founders and startup enthusiasts...",
    foundingDate: data?.founding_date_text || "Nov 22, 2015",
    email: data?.partner_email || "info@musdev.org"
  };

  return (
    <main ref={sectionRef} className="bg-white font-quicksand overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
            <span className="inline-block py-1 px-4 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6">
              Est. {content.foundingDate}
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 leading-[1.1] mb-8 max-w-4xl">
               {content.heroTitle.split("Muslims in Tech.")[0]}
               <span className="text-emerald-600">Muslims in Tech.</span>
            </h1>
            <p className="text-xl text-neutral-500 max-w-2xl leading-relaxed">
              {content.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-neutral-100 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                <CalendarIcon />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">{content.foundingDate}</p>
                <p className="text-sm text-neutral-500 font-medium">Founding Date</p>
              </div>
            </div>
            {/* ... Other stats stay static or add fields for them in Strapi as well ... */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                <UsersIcon />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">Mentorship</p>
                <p className="text-sm text-neutral-500 font-medium">Open to All</p>
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                <ImpactIcon />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">GDP Impact</p>
                <p className="text-sm text-neutral-500 font-medium">Founders & Innovators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">Our Impact Across the Ecosystem</h2>
              <p className="text-neutral-600 leading-relaxed text-lg">
                {content.impactDesc}
              </p>
            </div>
            
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100">
               <p className="text-emerald-900 font-medium leading-relaxed italic">
                 "{content.quote}"
               </p>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
             <div className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-emerald-600 to-emerald-900 flex items-center justify-center p-12 shadow-2xl">
                <div className="text-center">
                  <p className="text-white/20 text-8xl font-black mb-4 uppercase tracking-tighter">MUSDEV</p>
                  <p className="text-white text-xl font-bold">Bridging Faith & Tech</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">Partner with MusDev</h2>
          </div>
          
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${content.email}`}
              className="px-10 py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-500 transition-all"
            >
              Partner via Email
            </a>
            <a 
              href="https://forms.gle/xxt81k7r8U86XJP28" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/20"
            >
              Join the Community
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}