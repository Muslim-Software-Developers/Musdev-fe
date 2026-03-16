"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { getStrapiData } from "@/utils/api";
import { debounce } from "lodash";

interface Innovation {
  id: number;
  project_name: string;
  project_description: string;
  full_name: string;
  project_link: string;
  portfolio_link: string;
  slug: string;
}

export default function InnovationsPage() {
  const [projects, setProjects] = useState<Innovation[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 50;

  const sectionRef = useRef<HTMLDivElement>(null);

  /**
   * Master Fetch Function
   * Handles initial load, "Load More", and Server-Side Search
   */
  const fetchProjects = async (pageNum: number, query: string = "", isInitial: boolean = false) => {
    try {
      if (isInitial) setLoading(true);
      else setLoadingMore(true);

      // Strapi query builder with search filters
      // $containsi makes it case-insensitive
      let endpoint = `innovation-submissions?filters[isApproved][$eq]=true&sort=createdAt:asc&pagination[page]=${pageNum}&pagination[pageSize]=${pageSize}`;
      
      if (query.trim() !== "") {
        endpoint += `&filters[$or][0][project_name][$containsi]=${query}&filters[$or][1][project_description][$containsi]=${query}`;
      }

      const res = await getStrapiData(endpoint);

      if (res && res.length > 0) {
        setProjects((prev) => (pageNum === 1 ? res : [...prev, ...res]));
        setHasMore(res.length === pageSize);
      } else {
        if (pageNum === 1) setProjects([]); 
        setHasMore(false);
      }
    } catch (err) {
      console.error("Fetch/Search Error:", err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  /**
   * Debounced Search Implementation
   * Prevents hammering the DB on every keystroke
   */
  const debouncedSearch = useCallback(
    debounce((nextValue: string) => {
      setPage(1);
      fetchProjects(1, nextValue, false);
    }, 500),
    []
  );

  useEffect(() => {
    fetchProjects(1, "", true);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProjects(nextPage, searchQuery);
  };

  /**
   * Reveal Animation Logic
   * threshold 0.01 for mobile responsiveness
   */
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
      { threshold: 0.01 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loading, projects]);

  if (loading && page === 1) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-quicksand text-emerald-600 font-bold">
        Gathering Innovations...
      </div>
    );
  }

  return (
    <main ref={sectionRef} className="bg-white font-quicksand pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-3 block">Showcase</span>
          <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-6">
            The MusDev <span className="text-emerald-600">Forge.</span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
            Exploring the intersection of faith and technology through projects built by our community members.
          </p>
        </div>

        {/* Professional Search Input */}
        <div className="mb-12 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="relative max-w-md">
            <input 
              type="text" 
              placeholder="Search all innovations..." 
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all shadow-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
              {loadingMore && searchQuery ? (
                <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="reveal opacity-0 translate-y-10 transition-all duration-700 group bg-neutral-50 rounded-[2.5rem] p-8 border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-600/20">
                    {project.project_name[0]}
                  </div>
                  <Link href={project.project_link} target="_blank" className="text-neutral-400 hover:text-emerald-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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
        ) : (
          <div className="py-24 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
            <p className="text-neutral-400 font-bold">No innovations found matching your search.</p>
          </div>
        )}

        {/* Load More Trigger */}
        {hasMore && (
          <div className="flex justify-center mb-24">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="bg-neutral-900 text-white px-12 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all disabled:opacity-50 flex items-center gap-3"
            >
              {loadingMore ? "Fetching More..." : "Load More"}
            </button>
          </div>
        )}

        {/* Report Abuse Footer */}
        <div className="reveal opacity-0 translate-y-10 transition-all duration-700 bg-neutral-50 rounded-[2rem] p-8 md:p-12 border border-neutral-100 border-dashed mt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <h4 className="text-lg font-bold text-neutral-900">Report Abuse</h4>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                If any startup or app on this page is found questionable or no longer pursuing a halal purpose, report to <a href="mailto:info@musdev.org" className="text-emerald-600 font-bold hover:underline">info@musdev.org</a> with evidence. Verified entries will be removed.
              </p>
            </div>
            <a 
              href="mailto:info@musdev.org" 
              className="flex-shrink-0 border-2 border-neutral-900 text-neutral-900 px-8 py-3 rounded-2xl text-sm font-bold hover:bg-neutral-900 hover:text-white transition-all"
            >
              Contact Admin
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}