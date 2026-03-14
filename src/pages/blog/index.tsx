"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
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
  image: { url: string };
}

export default function BlogArchive() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, pageCount: 1 });

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://musdev-strappi-backend-1.onrender.com';
  
  const getImageUrl = (url: string) => {
    if (!url) return ""; 
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  };

  const fetchPosts = async (pageToFetch: number, isInitial: boolean = false) => {
    try {
      if (isInitial) setLoading(true);
      else setLoadingMore(true);

      // We use a pageSize of 7 for the first page (1 featured + 6 regular)
      // and 6 for subsequent pages to keep the grid even.
      const pageSize = 10; 
      const endpoint = `blog-posts?sort=published_date:desc&pagination[page]=${pageToFetch}&pagination[pageSize]=${pageSize}`;
      
      const res = await getStrapiData(endpoint);
      
      // CAREFUL API MAPPING: Strapi v4/v5 data structure check
      const rawData = res?.data || (Array.isArray(res) ? res : []);
      const meta = res?.meta?.pagination || { page: 1, pageCount: 1 };

      const formattedPosts = rawData.map((item: any) => {
        const attr = item.attributes || item;
        return {
          id: item.id,
          title: attr.title || "",
          excerpt: attr.excerpt || "",
          category: attr.category || "General",
          author_name: attr.author_name || "Admin",
          read_time: attr.read_time || "5 min",
          published_date: attr.published_date || "",
          is_featured: !!attr.is_featured,
          slug: attr.slug || "",
          image: {
            url: attr.image?.data?.attributes?.url || attr.image?.url || ""
          }
        };
      });

      setPosts(prev => isInitial ? formattedPosts : [...prev, ...formattedPosts]);
      setPagination(meta);
    } catch (error) {
      console.error("Error fetching blog archive:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchPosts(1, true);
  }, []);

  const handleLoadMore = () => {
    if (pagination.page < pagination.pageCount) {
      fetchPosts(pagination.page + 1);
    }
  };

  // Logic to identify the featured post and separate regular ones
  const featuredPost = posts.find(p => p.is_featured) || posts[0];
  const regularPosts = posts.filter(p => p.id !== featuredPost?.id);

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center font-quicksand text-emerald-600 font-bold">
      Loading Insights...
    </div>
  );

  return (
    <main className="min-h-screen bg-white pb-24 font-quicksand">
      <section className="pt-32 pb-16 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            The MusDev Journal
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight mb-6">
            Latest <span className="text-emerald-600">Insights.</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-2xl leading-relaxed">
            Exploring the intersection of Faith, Technology, and Innovation. 
            Interested in contributing? Send your articles to <a href="mailto:info@musdev.org" className="text-emerald-500 hover:underline">info@musdev.org</a>.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        {/* Only show featured section on the first page of results */}
        {featuredPost && pagination.page >= 1 && (
          <NextLink href={`/blog/${featuredPost.slug}`} className="group block mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 relative aspect-[16/9] overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-500 group-hover:shadow-emerald-900/10">
                <img
                  src={getImageUrl(featuredPost.image?.url)}
                  alt={featuredPost.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-2xl text-xs font-black text-emerald-700 uppercase tracking-widest shadow-xl">
                    Featured Story
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 group-hover:text-emerald-600 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-neutral-500 text-lg mb-8 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shadow-inner uppercase">
                    {featuredPost.author_name?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">{featuredPost.author_name}</p>
                    <p className="text-xs text-neutral-400 font-medium uppercase tracking-tighter">
                      {featuredPost.published_date} • {featuredPost.read_time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NextLink>
        )}

        <hr className="border-neutral-100 mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {regularPosts.map((post) => (
            <NextLink key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col h-full">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={getImageUrl(post.image?.url)}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 px-4 py-1.5 rounded-xl text-[10px] font-bold text-emerald-600 uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-neutral-500 text-base mb-6 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  {post.published_date}
                </span>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </NextLink>
          ))}
        </div>

        {/* Load More Button Section */}
        {pagination.page < pagination.pageCount && (
          <div className="mt-24 flex justify-center">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="bg-neutral-900 text-white px-12 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all flex items-center gap-3 disabled:opacity-50"
            >
              {loadingMore ? "Loading More..." : "Load More Insights"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}