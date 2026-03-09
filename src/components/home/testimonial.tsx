"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Custom Arrow Icons
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const BlogImagePlaceholder = ({ label }: { label: string }) => (
  <div className="w-full h-full bg-emerald-800/20 flex flex-col items-center justify-center border border-emerald-500/30 rounded-3xl">
    <div className="w-16 h-16 bg-white/10 rounded-full mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    </div>
    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-300">{label}</span>
  </div>
);

const testimonials = [
  {
    quote: "MusDev completely changed my career trajectory. Through their mentorship program, I landed my first developer role at a top Lagos fintech company within 3 months.",
    name: "Yusuf Abdulrahman",
    role: "Frontend Developer, Kuda Bank",
  },
  {
    quote: "Being part of MusDev means I never have to choose between my faith and my career. The community understands and supports both — it's truly one of a kind.",
    name: "Aminat Oladele",
    role: "Product Manager, Paystack",
  },
  {
    quote: "The hackathon I participated in through MusDev led to me co-founding my startup. The network and skills I gained there were invaluable to our early growth.",
    name: "Musa Aliyu",
    role: "Co-founder, HalalCart",
  }
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
      

        {/* Testimonial Slider Section */}
        <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-500 border-y border-neutral-100 py-20 relative">
          <div className="max-w-3xl mx-auto text-center px-4">
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
                <svg className="w-10 h-10 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
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
                <p className="text-primary font-semibold text-sm uppercase tracking-widest">{testimonials[active].role}</p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-8 mt-12">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-primary hover:text-primary transition-all group"
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
                      className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "bg-primary w-8" : "bg-neutral-200 w-2"}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-primary hover:text-primary transition-all group"
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