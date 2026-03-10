"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    id: "future-of-islamic-fintech",
    category: "Fintech",
    title: "The Future of Islamic Fintech in Nigeria",
    excerpt: "How Nigerian Muslim developers are building Shariah-compliant financial technology to serve over 90 million Muslims.",
    author: "Abdullahi Musa",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    image: "/images/fintech.jpg" // Direct path to public/images/fintech.jpg
  },
  {
    id: "ai-arabic-nlp",
    category: "AI & ML",
    title: "Building Arabic NLP Models for the Ummah",
    excerpt: "Exploring machine learning's role in improving Arabic processing.",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    image: "/images/aiml.jpg" // Direct path to public/images/aiml.jpg
  },
  {
    id: "career-guide",
    category: "Career",
    title: "A Muslim Developer's Guide to Big Tech",
    excerpt: "Navigating prayer times and halal culture in top tech companies.",
    date: "Jan 30, 2026",
    readTime: "8 min read",
    image: "/images/mdg.jpg" // Direct path to public/images/mdg.jpg
  },
  {
    id: "open-source",
    category: "Open Source",
    title: "Open Source Projects Serving the Muslim World",
    excerpt: "A curated list of projects built by and for the Ummah.",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    image: "/images/ops.jpg" // Direct path to public/images/ops.jpg
  }
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [featured, ...others] = posts;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
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
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Insights & Stories</span>
            <h2 className="font-bold text-neutral-900 text-4xl md:text-5xl tracking-tight">
              Our Blog
            </h2>
          </div>
          <Link href="#" className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-200 group flex items-center gap-2 text-emerald-600 font-bold">
            View all articles
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Featured Post */}
          <Link href={`#`} className="reveal-item opacity-0 translate-y-10 transition-all duration-700 lg:col-span-7 group">
            <div className="relative aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img
                src={featured.image} 
                alt={featured.title} 
             
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover" 
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white px-4 py-1.5 rounded-xl text-[10px] font-bold text-emerald-600 uppercase tracking-widest shadow-sm">
                  {featured.category}
                </span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
              {featured.title}
            </h3>
            <p className="text-neutral-500 text-lg mb-8 line-clamp-2 leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs border-2 border-white shadow-sm">
             
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">{featured.author}</p>
                <p className="text-xs text-neutral-400">{featured.date} • {featured.readTime}</p>
              </div>
            </div>
          </Link>

          {/* Sidebar Posts */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-10 lg:border-l border-neutral-100">
            {others.map((post, i) => (
              <Link 
                key={post.id} 
                href={`#`} 
                className={`reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-${(i + 3) * 100} group flex gap-6 items-start`}
              >
                <div className="relative w-24 h-24 md:w-32 md:h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={post.image} 
                    alt={post.title} 
                   
                    sizes="150px"
                    className="object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest block mb-2">{post.category}</span>
                  <h4 className="font-bold text-neutral-900 text-base md:text-lg mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-medium uppercase tracking-tighter">{post.date} • {post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}