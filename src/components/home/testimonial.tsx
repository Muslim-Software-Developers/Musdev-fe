"use client";

import { useEffect, useRef, useState } from "react";
import { getStrapiData } from "@/utils/api"; // Ensure this path is correct

// Custom Arrow Icons
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Fetch dynamic testimonials from Strapi
  useEffect(() => {
    const fetchData = async () => {
      const data = await getStrapiData("testimonials");
      if (data && data.length > 0) {
        setTestimonials(data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const nextSlide = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Reveal Animation Logic
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
  }, [loading]); // Re-run when loading finishes

  if (loading || testimonials.length === 0) return null;

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden font-quicksand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-500 border-y border-neutral-100 py-20 relative">
          <div className="max-w-3xl mx-auto text-center px-4">
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
                <svg className="w-10 h-10 text-emerald-500/20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
                </svg>
            </div>

            {/* Testimonial Content */}
            <div className="min-h-[200px] flex flex-col justify-center">
              <p className="text-xl md:text-2xl italic font-medium text-neutral-800 leading-relaxed mb-10 transition-all duration-500">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div>
                <p className="text-neutral-900 font-bold text-lg mb-1">{testimonials[active].name}</p>
                <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">{testimonials[active].role}</p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-8 mt-12">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-emerald-500 hover:text-emerald-500 transition-all group"
                  aria-label="Previous testimonial"
                >
                  <ArrowIcon className="rotate-180 group-active:-translate-x-1 transition-transform" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "bg-emerald-500 w-8" : "bg-neutral-200 w-2"}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-emerald-500 hover:text-emerald-500 transition-all group"
                  aria-label="Next testimonial"
                >
                  <ArrowIcon className="group-active:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}