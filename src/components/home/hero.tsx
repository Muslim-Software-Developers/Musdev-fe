"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "../../../public/images/hero1.png";
import HeroImage2 from "../../../public/images/hero.png";
import ArrowRightIcon from "../svgs/arrowRightIcon";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  const missionPoints = [
    { title: "Global Representation", desc: "Ensuring the Muslim Ummah is leading in the global tech landscape." },
    { title: "Halal Innovation", desc: "Fostering Islamic practices through ethical and sustainable technology." },
    { title: "Talent Pipeline", desc: "Connecting young talents to high-growth opportunities and mentorship." },
    { title: "Digital Research", desc: "A hub for research and IT solutions tailored for the Ummah." }
  ];

  return (
    // Changed bg-white to bg-[#0a5e5c] to prevent the "flicker" line
    <div ref={sectionRef} className="bg-[#0a5e5c] overflow-hidden">
      
      {/* --- HERO PART --- */}
      <section id="hero"
        // 1. Removed min-h-[90vh] to use flex-grow or standard padding
        // 2. Ensuring the background hex matches the navbar exactly
        className="relative min-h-screen flex items-center pt-24 md:pt-32 border-none outline-none"
        style={{ background: "linear-gradient(135deg, #0a5e5c 0%, #095957 45%, #00a751 100%)" }}
      >
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern.png')] bg-repeat" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          <div className="text-left">
            <div className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">Nigeria&lsquo;s #1 Muslim Tech Community</span>
            </div>

            <h1 className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 delay-100 text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Shaping the Future <br />
              <span className="text-emerald-300">of Technology</span>
            </h1>

           <p className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 delay-200 text-white/80 text-lg md:text-xl mb-10 max-w-lg">
  Join <strong>Muslims In Tech </strong>(Musdev), a vibrant community of innovators bridging the gap between faith and the global tech landscape.
</p>

            <div className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 delay-300 flex flex-wrap gap-4">
              {/* Join Now - Link to external Google Form */}
<Link 
  href="https://forms.gle/xxt81k7r8U86XJP28" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-white text-[#0a5e5c] font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all shadow-xl group"
>
  Join Now
  <ArrowRightIcon stroke1="#0a5e5c" stroke2="#0a5e5c" />
</Link>

{/* Explore Events - Jump to Programs Section */}
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

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500 relative hidden lg:block">
            <div className="relative z-20 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <Image src={HeroImage} alt="MusDev Community" className="w-full object-cover" priority />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl z-30 flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">2,500+</p>
                <p className="text-sm text-gray-500 font-medium">Active Techies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION PART --- */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] -rotate-3" />
              <Image 
                src={HeroImage2} 
                alt="Mission Driven" 
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
              {missionPoints.map((point, i) => (
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