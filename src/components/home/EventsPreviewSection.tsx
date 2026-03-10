"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const events = [
  {
    id: "musdev-post-ramadan-picnic-2026",
    title: "MusDev Post Ramadan Picnic",
    description: "Relax, connect, and recharge with the community! An afternoon of networking, outdoor games, and great food for Muslim techies and their families.",
    date: "April 18, 2026",
    time: "11:00 AM WAT",
    location: "JJT Park, Ikeja, Lagos",
    category: "Community",
    image: "./images/prp.jpg", // Direct path to public/images/prp.jpg
  },
  {
    id: "musdev-annual-summit-2026",
    title: "MusDev Annual Tech Summit 2026",
    description: "Join hundreds of Muslim tech professionals for a full-day summit featuring keynotes, workshops, and networking. Explore the theme: Faith, Code & Future.",
    date: "April 12, 2026",
    time: "9:00 AM WAT",
    location: "Eko Hotel, Lagos",
    category: "Conference",
    image: "/images/mats.jpg", // Direct path to public/images/mats.jpg
  },
  {
    id: "muslim-devs-hackathon-2026",
    title: "Muslim Devs Hackathon 2026",
    description: "A 48-hour hackathon challenging participants to build tech solutions addressing real problems in Muslim communities — from fintech to edtech.",
    date: "May 3–4, 2026",
    time: "8:00 AM WAT",
    location: "CcHub, Yaba, Lagos",
    category: "Hackathon",
    image: "/images/mdh.jpg", // Direct path to public/images/mdh.jpg
  },
];

export default function EventsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-neutral-50 overflow-hidden" id="events">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-3 block">Stay Updated</span>
            <h2 className="font-bold text-gray-900 leading-tight text-3xl md:text-5xl">
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/events"
            className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-200 inline-flex items-center gap-2 text-emerald-600 font-bold group"
          >
            Explore all events
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`#`}
              className="reveal-item opacity-0 translate-y-10 transition-all duration-700 group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover" 
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-lg">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-600 mb-4">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-gray-200" />
                  <span>{event.time}</span>
                </div>

                <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">
                  {event.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {event.description}
                </p>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-[11px] font-medium truncate max-w-[120px]">{event.location}</span>
                  </div>
                  <span className="text-emerald-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Details <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}