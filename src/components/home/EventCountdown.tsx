import React, { useState, useEffect } from "react";
import { getStrapiData } from "@/utils/api";

interface CountdownData {
  event_name: string;
  short_description: string;
  date: string;
  registration_url?: string;
  event_image?: {
    url: string;
  };
}

const EventCountdown = () => {
  const [data, setData] = useState<CountdownData | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountdown = async () => {
      try {
        const res = await getStrapiData("the-countdown");
        const eventData = res?.data || res;
        if (eventData && eventData.event_name) {
          setData(eventData);
        }
      } catch (err) {
        console.error("Countdown fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountdown();
  }, []);

  useEffect(() => {
    if (!data?.date) return;

    const timer = setInterval(() => {
      const target = new Date(data.date).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        clearInterval(timer);
      } else {
        setIsExpired(false);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [data]);

  if (isLoading) return null;

  const formattedDate = data ? new Date(data.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  }) : "";

  return (
    <section className="py-24 bg-white px-6 font-quicksand">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-[#0a0a0a] rounded-[3.5rem] flex flex-col lg:flex-row items-stretch min-h-[550px] shadow-2xl">
          
          {/* Content Side */}
          <div className="flex-1 p-10 md:p-20 flex flex-col justify-center z-10 text-white">
            
            {!data ? (
              /* CASE: NO EVENT LOGGED */
              <div className="space-y-6 animate-in fade-in duration-700">
                <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-500 text-xs font-bold uppercase tracking-widest">
                  Stay Tuned
                </div>
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  Our next event is <span className="text-emerald-500">coming soon.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                  We are cooking up something big for the community. Follow us to be the first to know when we launch the next assembly.
                </p>
              </div>
            ) : isExpired ? (
              /* CASE: EVENT PASSED */
              <div className="space-y-6 animate-in fade-in duration-700">
                <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-500 text-xs font-bold uppercase tracking-widest">
                  Memory Lane
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Last event <span className="text-emerald-500">"{data.event_name}"</span> was held on {formattedDate}.
                </h2>
                <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                  It was an incredible gathering! We're already prepping the next one. Check back soon for the new countdown.
                </p>
                <div className="pt-4">
                  <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-emerald-600/20">
                    Get Notified for Next Launch
                  </button>
                </div>
              </div>
            ) : (
              /* CASE: ACTIVE COUNTDOWN */
              <div className="space-y-10 animate-in slide-in-from-left-4 duration-700">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-emerald-500/20">
                    Countdown to the next event.
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
                    {data.event_name}
                  </h2>
                  <p className="text-gray-400 text-lg max-w-md leading-relaxed font-medium">
                    {data.short_description}
                  </p>
                </div>

                {/* Countdown Timer Grid */}
                <div className="flex gap-4 md:gap-10">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Mins", value: timeLeft.mins },
                    { label: "Secs", value: timeLeft.secs },
                  ].map((unit) => (
                    <div key={unit.label} className="flex flex-col">
                      <div className="text-4xl md:text-6xl font-black tabular-nums tracking-tighter text-white">
                        {unit.value < 10 ? `0${unit.value}` : unit.value}
                        <span className="text-emerald-500">.</span>
                      </div>
                      <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  {data.registration_url ? (
                    <a 
                      href={data.registration_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-black font-black py-5 px-12 rounded-2xl transition-all shadow-2xl hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 text-lg"
                    >
                      Register Now
                    </a>
                  ) : (
                    <button className="bg-white/10 text-white/40 border border-white/10 font-black py-5 px-12 rounded-2xl transition-all cursor-not-allowed">
                      Registration Opening Soon
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Image Side */}
          <div className="lg:w-[45%] relative min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 lg:hidden" />
            <img 
              src={data?.event_image?.url || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000"} 
              alt="Event"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700 opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCountdown;