"use client";

import React, { useState, useEffect } from "react";
import { getStrapiData } from "@/utils/api";

interface MembershipData {
  badge_text: string;
  headline_main: string;
  headline_highlight: string;
  description: string;
  google_form_url: string;
}

const Membership = () => {
  const [data, setData] = useState<MembershipData | null>(null);

  useEffect(() => {
    getStrapiData('membership')
      .then((res) => {
        // Handle collection array vs single object
        const result = Array.isArray(res) ? res[0] : res;
        setData(result);
      })
      .catch((err) => console.error("Membership Fetch Error:", err));
  }, []);

  // Default values for initial load or if Strapi is empty
  const badge = data?.badge_text || "Community First";
  const mainText = data?.headline_main || "Be Part of the";
  const highlightText = data?.headline_highlight || "Movement.";
  const description = data?.description || "Join thousands of Muslim developers, designers, and tech leaders across Nigeria. Gain access to exclusive mentorship, high-impact networking, and faith-driven growth.";
  const formUrl = data?.google_form_url || "https://forms.gle/xxt81k7r8U86XJP28";

  return (
    <section id="membership" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px]" />
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="relative z-10 bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 backdrop-blur-md shadow-2xl">
          
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-emerald-500/30">
              {badge}
            </span>
          </div>

          {/* Headline - Maintained Style */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {mainText} <span className="text-emerald-500">{highlightText}</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <a 
              href={formUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-emerald-600 font-pj rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-900/30 transform hover:-translate-y-1"
            >
              Join the Community
              <svg 
                className="w-5 h-5 ml-3 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <p className="text-gray-500 text-sm mt-4">
              Free to join • Open to all levels • Faith & Tech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;