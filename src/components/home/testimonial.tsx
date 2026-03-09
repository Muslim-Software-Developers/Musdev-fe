"use client";

import { useEffect, useRef, useState } from "react";

// Custom Arrow Icons
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
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
  const [isFading, setIsFading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSlideChange = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setActive(index);
      setIsFading(false);
    }, 200);
  };

  const nextSlide = () => handleSlideChange((active + 1) % testimonials.length);
  const prevSlide = () => handleSlideChange((active - 1 + testimonials.length) % testimonials.length);

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
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden border-t border-neutral-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="reveal-item opacity-0 translate-y-10 transition-all duration-700 text-[#0a5e5c] font-bold tracking-widest uppercase text-xs mb-3 block">
            Success Stories
          </span>
          <h2 className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-100 font-black text-neutral-900 text-3xl md:text-4xl tracking-tight">
            Trusted by the Community
          </h2>
        </div>

        {/* Testimonial Slider Section */}
        <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-200 border-y border-neutral-100 py-12 relative">
          <div className="max-w-3xl mx-auto text-center px-4">
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
                <svg className="w-8 h-8 text-[#0a5e5c]/10" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
                </svg>
            </div>

            {/* Testimonial Content */}
            <div className="min-h-[180px] flex flex-col justify-center">
              <p className={`text-lg md:text-xl italic font-medium text-neutral-800 leading-relaxed mb-8 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-neutral-900 font-bold text-base mb-0.5">{testimonials[active].name}</p>
                <p className="text-[#0a5e5c] font-bold text-[11px] uppercase tracking-widest">{testimonials[active].role}</p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-[#0a5e5c] hover:text-[#0a5e5c] transition-all group active:scale-90"
                  aria-label="Previous testimonial"
                >
                  <ArrowIcon className="rotate-180 transition-transform" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleSlideChange(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${active === i ? "bg-[#0a5e5c] w-6" : "bg-neutral-200 w-1.5"}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-[#0a5e5c] hover:text-[#0a5e5c] transition-all group active:scale-90"
                  aria-label="Next testimonial"
                >
                  <ArrowIcon className="transition-transform" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}