"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GetTogetherSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-emerald-50/50 border border-emerald-100 min-h-[520px] flex items-center">
          
          {/* Background Elements (Desktop) */}
          <div className="absolute inset-0 hidden lg:block">
            <Image
              src="https://musdev.org/images/hero.png" // Direct path to publichttps://musdev.org/images/get-togther.png
              alt="Muslim community gathering"
              fill
              className="object-cover object-right opacity-20 grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-emerald-50/80 to-transparent" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full px-8 md:px-16 py-12">
            
            <div className="max-w-xl">
              <span className="reveal-item opacity-0 translate-y-10 transition-all duration-700 inline-block bg-emerald-600/10 text-emerald-600 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-lg mb-6">
                Beyond the Code
              </span>
              
              <h2 className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-100 font-bold text-neutral-900 leading-tight mb-6 text-4xl md:text-5xl lg:text-6xl">
                Community <br/> <span className="text-emerald-600">Get Together</span>
              </h2>
              
              <p className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-200 text-neutral-600 text-lg md:text-xl leading-relaxed mb-10">
                From joyous Eid feasts to casual tech meetups under the Lagos sun. We gather to share more than just industry insights—we share prayers, laughter, and the shared vision of a thriving Muslim tech ecosystem. 
                <span className="block mt-4 italic font-medium">Faith, love, and togetherness in every byte.</span>
              </p>

              <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-300 flex flex-wrap gap-4">
                <Link
                  href="https://forms.gle/xxt81k7r8U86XJP28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-600/20 group"
                >
                  Join the next one
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <div className="hidden sm:flex items-center gap-3 px-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-emerald-200 flex items-center justify-center text-[10px] font-bold text-emerald-800">
                        MT
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-neutral-500 font-semibold">500+ members joined</span>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Image (Visible only on smaller screens) */}
            <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-400 mt-12 lg:hidden relative h-64 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://musdev.org/images/hero1.png" 
                alt="Community Joy"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Decorative Card (Desktop) */}
          <div className="absolute right-12 top-12 hidden lg:block reveal-item opacity-0 translate-y-10 transition-all duration-1000 delay-500">
            <div className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-2xl rotate-3">
              <div className="text-emerald-600 font-bold text-2xl">100% Halal</div>
              <div className="text-neutral-500 text-xs uppercase tracking-tighter">Networking & Fun</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}