"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { getStrapiData } from '@/utils/api';

interface ProgramItem {
  id: number;
  header: string;
  content: string;
  UID: string;
  icon_name: string;
}

export default function ProgramsSection() {
  const [programs, setPrograms] = useState<ProgramItem[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getStrapiData('programs?sort=id:asc')
      .then((res) => {
        setPrograms(res || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Programs Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading || !programs.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
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
  }, [loading, programs]);

  const getIcon = (iconName: string) => {
    const props = { className: "w-8 h-8 transition-colors duration-500" };
    switch (iconName?.toLowerCase()) {
      case "learning":
        return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
      case "mentorship":
        return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
      case "hackathon":
        return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
      default:
        return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    }
  };

  if (loading) return <div className="py-24 min-h-[500px]" />;
  if (!programs.length) return null;

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="reveal-item opacity-0 translate-y-10 transition-all duration-700 text-[#0a5e5c] font-bold tracking-widest uppercase text-xs mb-4 block">
            Impact & Growth
          </span>
          <h2 className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-100 font-black text-neutral-900 leading-tight mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Programs & Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((item) => (
            <Link
              key={item.id}
              href={`/programs/${item.UID}`}
              className="reveal-item opacity-0 translate-y-10 transition-all duration-700 group relative bg-neutral-50 rounded-[2.5rem] p-10 hover:bg-white border border-transparent hover:border-neutral-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 group-hover:bg-[#0a5e5c] group-hover:text-white text-[#0a5e5c] transition-all duration-500">
                {getIcon(item.icon_name)}
              </div>
              <h3 className="font-bold text-2xl text-neutral-900 mb-4 group-hover:text-[#0a5e5c] transition-colors">
                {item.header}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed mb-10 flex-grow font-medium">
                {item.content}
              </p>
              <div className="flex items-center gap-3 text-[#0a5e5c] text-sm font-bold">
                <span className="tracking-wide">Learn more</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}