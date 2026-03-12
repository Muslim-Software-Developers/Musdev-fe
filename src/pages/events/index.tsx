"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { getStrapiData, getFileUrl } from '@/utils/api';

interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: { url: string };
  slug: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Workshop", "Seminar", "Networking", "Tech Talk"];

  useEffect(() => {
    // Fetch all events sorted by upcoming date
    getStrapiData('events?sort=date:asc')
      .then((res) => {
        setEvents(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Events Fetch Error:", err);
        setLoading(false);
      });
  }, []);

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
  }, [loading, activeFilter]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredEvents = activeFilter === "All" 
    ? events 
    : events.filter(e => e.category === activeFilter);

  if (loading) return <div className="min-h-screen bg-white flex items-center justify-center font-quicksand text-emerald-600 font-bold">Loading MusDev Events...</div>;

  return (
    <main ref={sectionRef} className="bg-white font-quicksand pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 reveal opacity-0 translate-y-10 transition-all duration-700 text-center md:text-left">
          <span className="inline-block py-1 px-4 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
            Our Calendar
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-6">
            Connecting the <span className="text-emerald-600">Ummah</span> in Tech.
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
            Join our workshops, seminars, and networking sessions designed to empower Muslims in the global technology landscape.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12 reveal opacity-0 translate-y-10 transition-all duration-700">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeFilter === cat 
                  ? "bg-[#0a5e5c] text-white shadow-lg shadow-emerald-900/20" 
                  : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Section */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="reveal opacity-0 translate-y-10 transition-all duration-700 group block"
              >
                <div className="bg-white rounded-[2.5rem] border border-neutral-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 w-full bg-neutral-100 overflow-hidden">
                    <img
                      src={getFileUrl(event.image?.url)}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-emerald-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-sm">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-emerald-50 text-emerald-700 p-2 rounded-lg">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-neutral-900">{formatDate(event.date)}</span>
                      <span className="text-neutral-300">•</span>
                      <span className="text-sm font-medium text-neutral-500">{event.time}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-emerald-700 transition-colors leading-snug">
                      {event.title}
                    </h3>
                    
                    <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 mb-8">
                      {event.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-neutral-50 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-neutral-400 max-w-[150px]">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span className="text-[11px] font-bold truncate">{event.location}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                         </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-bold text-neutral-400 italic">No events found in this category.</h3>
          </div>
        )}
      </div>
    </main>
  );
}