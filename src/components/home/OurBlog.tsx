"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImage1 from "../../../public/images/fintech.jpg";
import HeroImage2 from "../../../public/images/aiml.jpg";
import HeroImage3 from "../../../public/images/mdg.jpg";
import HeroImage4 from "../../../public/images/ops.jpg";


// Reusable Placeholder for Dev
const BlogImagePlaceholder = ({ category }: { category: string }) => (
  <div className="w-full h-full bg-neutral-100 flex flex-col items-center justify-center border border-neutral-200">
    <svg className="w-10 h-10 text-neutral-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{category}</span>
  </div>
);

const posts = [
  {
    id: "future-of-islamic-fintech",
    category: "Fintech",
    title: "The Future of Islamic Fintech in Nigeria",
    excerpt: "How Nigerian Muslim developers are building Shariah-compliant financial technology to serve over 90 million Muslims.",
    author: "Abdullahi Musa",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    image:HeroImage1
  },
  {
    id: "ai-arabic-nlp",
    category: "AI & ML",
    title: "Building Arabic NLP Models for the Ummah",
    excerpt: "Exploring machine learning's role in improving Arabic processing.",
    date: "Feb 15, 2026",
    readTime: "5 min read",
        image:HeroImage2
  },
  {
    id: "career-guide",
    category: "Career",
    title: "A Muslim Developer's Guide to Big Tech",
    excerpt: "Navigating prayer times and halal culture in top tech companies.",
    date: "Jan 30, 2026",
    readTime: "8 min read",
       image:HeroImage3
  },
  {
    id: "open-source",
    category: "Open Source",
    title: "Open Source Projects Serving the Muslim World",
    excerpt: "A curated list of projects built by and for the Ummah.",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    image:HeroImage4
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
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Insights & Stories</span>
            <h2 className="font-bold text-neutral-900 text-4xl md:text-5xl tracking-tight">
              Our Blog
            </h2>
          </div>
          <Link href="#" className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-200 group flex items-center gap-2 text-primary font-bold">
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
          {/* <Link href={`/blog/${featured.id}`} className="reveal-item opacity-0 translate-y-10 transition-all duration-700 lg:col-span-7 group"> */}
            <div className="relative aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
       
                         <Image src={featured.image} alt={featured.title} fill className="object-cover" />
              <div className="absolute top-6 left-6">
                <span className="bg-white px-4 py-1.5 rounded-xl text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                  {featured.category}
                </span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors leading-tight">
              {featured.title}
            </h3>
            <p className="text-neutral-500 text-lg mb-8 line-clamp-2 leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-primary font-bold text-xs border-2 border-white shadow-sm">
                {/* {featured.author[0]} */}
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
              <Link key={post.id} href={`/blog/${post.id}`} className={`reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-${(i + 3) * 100} group flex gap-6 items-start`}>
                <div className="relative w-24 h-24 md:w-32 md:h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-2">{post.category}</span>
                  <h4 className="font-bold text-neutral-900 text-base md:text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
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