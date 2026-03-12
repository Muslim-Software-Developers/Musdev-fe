"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import ArrowRightIcon from "../svgs/arrowRightIcon";
import { getStrapiData, getFileUrl } from '@/utils/api';

// Interface matching your Strapi Flattened Output
interface MissionPoint {
  title: string;
  desc: string;
}

interface HeroData {
  badgeText: string;
  heading: string;
  subHeading: string;
  activeTechiesCount: string;
  heroImage: { url: string };
  missionImage: { url: string };
  missionPoints: MissionPoint[];
}

export default function Hero() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 1. Fetch Data from Strapi
  useEffect(() => {
    getStrapiData('hero-section')
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hero Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  // 2. Intersection Observer for Animations
  useEffect(() => {
    if (loading || !data) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loading, data]);

  if (loading) return <div className="min-h-screen bg-[#0a5e5c]" />;
  if (!data) return null;

  return (
    <div ref={sectionRef} className="bg-[#0a5e5c] overflow-hidden">
      
      {/* --- HERO PART --- */}
      <section id="hero"
        className="relative min-h-screen flex items-center pt-24 md:pt-32 border-none outline-none"
        style={{ background: "linear-gradient(135deg, #0a5e5c 0%, #095957 45%, #00a751 100%)" }}
      >
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern.png')] bg-repeat" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          <div className="text-left">
            <div className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">
                {data.badgeText}
              </span>
            </div>

            <h1 className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 delay-100 text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {data.heading}
            </h1>

            <p 
              className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 delay-200 text-white/80 text-lg md:text-xl mb-10 max-w-lg"
              dangerouslySetInnerHTML={{ __html: data.subHeading }}
            />

            <div className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 delay-300 flex flex-wrap gap-4">
              <Link 
                href="https://forms.gle/xxt81k7r8U86XJP28" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#0a5e5c] font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all shadow-xl group"
              >
                Join Now
                <ArrowRightIcon stroke1="#0a5e5c" stroke2="#0a5e5c" />
              </Link>

              <Link 
                href="#programs" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
              >
                Explore Events
              </Link>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500 relative hidden lg:block">
            <div className="relative z-20 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src={getFileUrl(data.heroImage?.url)} 
                alt="Community Hero" 
                className="w-full object-cover" 
                width={800}
                height={600}
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl z-30 flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{data.activeTechiesCount}</p>
                <p className="text-sm text-gray-500 font-medium">Active Techies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION PART ------- */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] -rotate-3" />
              <img
                src={getFileUrl(data.missionImage?.url)} 
                alt="Mission Driven" 
                width={600}
                height={500}
                className="relative z-10 rounded-[2rem] shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2" id="purpose">
            <h2 className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4">Our Purpose</h2>
            <h3 className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 delay-100 text-4xl font-bold text-gray-900 mb-8">
              Mission Driven. <br /> People Focused.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.missionPoints?.map((point, i) => (
                <div 
                  key={i} 
                  className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold mb-4">
                    0{i + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}