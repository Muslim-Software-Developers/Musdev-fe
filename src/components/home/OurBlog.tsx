"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getStrapiData } from "@/utils/api";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author_name: string;
  read_time: string;
  published_date: string;
  is_featured: boolean;
  slug: string;
  image: {
    url: string;
  };
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch latest 4 posts, sorting by date
    getStrapiData('blog-posts?&sort=published_date:desc&pagination[limit]=4')
      .then((res) => {
        setPosts(res || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading || !posts.length) return;

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
  }, [loading, posts]);

  // Logic to separate the Featured post from the list
  const featuredPost = posts.find(p => p.is_featured) || posts[0];
  const otherPosts = posts.filter(p => p.id !== featuredPost?.id);

  if (loading || !posts.length) return null;

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Insights & Stories</span>
            <h2 className="font-bold text-neutral-900 text-4xl md:text-5xl tracking-tight">Our Blog</h2>
          </div>
          <Link href="/blog" className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-200 group flex items-center gap-2 text-emerald-600 font-bold">
            View all articles
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Featured Post (Big Slot) */}
          <Link href={`/blog/${featuredPost.slug}`} className="reveal-item opacity-0 translate-y-10 transition-all duration-700 lg:col-span-7 group">
            <div className="relative aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${featuredPost.image?.url}`} 
                alt={featuredPost.title} 
                className="object-cover w-full h-full" 
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white px-4 py-1.5 rounded-xl text-[10px] font-bold text-emerald-600 uppercase tracking-widest shadow-sm">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
              {featuredPost.title}
            </h3>
            <p className="text-neutral-500 text-lg mb-8 line-clamp-2 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs border-2 border-white shadow-sm uppercase">
                {featuredPost.author_name?.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">{featuredPost.author_name}</p>
                <p className="text-xs text-neutral-400">
                    {new Date(featuredPost.published_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {featuredPost.read_time}
                </p>
              </div>
            </div>
          </Link>

          {/* Sidebar Posts (Small Slots) */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-10 lg:border-l border-neutral-100">
            {otherPosts.map((post, i) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`} 
                className="reveal-item opacity-0 translate-y-10 transition-all duration-700 group flex gap-6 items-start"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${post.image?.url}`} 
                    alt={post.title} 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="flex-1">
                  <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest block mb-2">{post.category}</span>
                  <h4 className="font-bold text-neutral-900 text-base md:text-lg mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-medium uppercase tracking-tighter">
                    {new Date(post.published_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {post.read_time}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}