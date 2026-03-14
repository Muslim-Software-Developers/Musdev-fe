"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getStrapiData } from "@/utils/api";

interface Innovation {
  id: number;
  project_name: string;
  project_description: string;
  full_name: string;
  email: string;
  mobile: string;
  project_link: string;
  portfolio_link: string;
  slug: string;
}

export default function InnovationDetail() {
  const router = useRouter();
  const { slug } = router.query; // Grabbing slug from Pages Router
  const [project, setProject] = useState<Innovation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;
      
      try {
        // Querying Strapi by slug filter instead of ID
        const res = await getStrapiData(`innovation-submissions?filters[slug][$eq]=${slug}`);
        
        // Strapi returns an array for filtered queries, so we take the first item
        if (res && res.length > 0) {
          setProject(res[0]);
        }
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) return <div className="min-h-screen bg-white flex items-center justify-center font-quicksand text-emerald-600 font-bold">Loading Innovation...</div>;
  if (!project) return <div className="min-h-screen flex items-center justify-center font-quicksand">Project not found.</div>;

  return (
    <main className="bg-white font-quicksand min-h-screen pb-24">
      {/* Dynamic Header / Hero */}
      <section className="pt-32 pb-16 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/innovations" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm mb-8 group">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Back to The Forge
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-[2rem] bg-emerald-600 flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-emerald-600/30">
                {project.project_name[0]}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{project.project_name}</h1>
                <p className="text-emerald-600 font-bold">Built by {project.full_name}</p>
              </div>
            </div>

            <a 
              href={project.project_link} 
              target="_blank" 
              className="bg-neutral-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all text-center shadow-lg shadow-neutral-900/10"
            >
              Visit Project ↗
            </a>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Story */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-6">The Innovation</h2>
              <div className="prose prose-lg max-w-none text-neutral-600 leading-relaxed whitespace-pre-wrap">
                {project.project_description}
              </div>
            </div>

            {/* Visual Divider / Quote Block */}
            <div className="p-10 rounded-[3rem] bg-emerald-50 border border-emerald-100 relative overflow-hidden">
               <div className="relative z-10">
                 <p className="text-emerald-900 text-xl font-medium italic leading-relaxed">
                   "We are shaping the future of tech through the lens of our values, one line of code at a time."
                 </p>
               </div>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-10">
            <div className="p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100">
              <h3 className="text-neutral-900 font-bold mb-6">Builder Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Portfolio</p>
                  <a href={project.portfolio_link} target="_blank" className="text-emerald-600 font-bold hover:underline break-all">
                    View Professional Profile
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Contact</p>
                  <p className="text-neutral-900 font-medium">{project.email}</p>
                </div>
              </div>
            </div>

            {/* Community Callout */}
            <div className="p-8 rounded-[2.5rem] bg-emerald-600 text-white shadow-xl shadow-emerald-600/20">
              <h3 className="font-bold mb-3">Inspired by this?</h3>
              <p className="text-emerald-50 text-sm leading-relaxed mb-6">
                Are you building something for the Ummah? We'd love to spotlight your work here.
              </p>
              <Link href="/#innovate" className="block w-full text-center py-3 bg-white text-emerald-600 font-bold rounded-xl text-sm">
                Submit Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}