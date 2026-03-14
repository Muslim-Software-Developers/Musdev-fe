"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getStrapiData } from "@/utils/api";

interface Innovation {
  id: number;
  project_name: string;
  project_description: string;
  full_name: string;
  project_link: string;
  portfolio_link: string;
  slug: string; // Ensure you add a slug field in Strapi for the detail page
}

export default function InnovationsPage() {
  const [projects, setProjects] = useState<Innovation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only fetch approved projects
    const fetchApprovedProjects = async () => {
      try {
        const res = await getStrapiData("innovation-submissions?filters[isApproved][$eq]=true");
        setProjects(res || []);
      } catch (err) {
        console.error("Failed to fetch innovations:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApprovedProjects();
  }, []);

  // Reveal Animation
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loading, searchQuery]);

  const filteredProjects = projects.filter((p) =>
    p.project_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className="min-h-screen bg-white flex items-center justify-center font-quicksand text-emerald-600 font-bold">Loading Innovations...</div>;

  return (
    <main ref={sectionRef} className="bg-white font-quicksand pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-3 block">Showcase</span>
          <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-6">
            The MusDev <span className="text-emerald-600">Forge.</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
            Exploring the intersection of faith and technology through projects built by our community members.
          </p>
        </div>

        {/* Filter/Search Bar */}
        <div className="mb-12 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="relative max-w-md">
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="reveal opacity-0 translate-y-10 transition-all duration-700 group bg-neutral-50 rounded-[2.5rem] p-8 border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-600/20">
                  {project.project_name[0]}
                </div>
                <Link href={project.project_link} target="_blank" className="text-neutral-400 hover:text-emerald-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </Link>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 mb-3">{project.project_name}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed line-clamp-4 mb-8 flex-grow">
                {project.project_description}
              </p>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Builder</p>
                  <p className="text-sm font-bold text-neutral-900">{project.full_name}</p>
                </div>
                {/* Adjust Link once you have individual pages set up */}
                <Link 
                  href={`/innovations/${project.slug}`} 
                  className="bg-neutral-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-emerald-600 transition-all"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}