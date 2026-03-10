import React from "react";
// Import original sections to keep them ready for launch
// import Hero from "./hero";
// import OurBlog from "./OurBlog";
// import Programs from "./Programs";
// import EventsPreviewSection from "./EventsPreviewSection";
// import Testimonial from "./testimonial";
// import GetTogetherSection from "./GetTogetherSection";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../svgs";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-800/10 rounded-full blur-[120px]" />

      <div className="z-10 text-center px-6">
        {/* Logo Branding */}
        <div className="mb-8 animate-fade-in">
          {/* <img 
            src="/images/Logo.PNG" 
            alt="MusDev Logo" 
            className="h-20 mx-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          /> */}
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          UNDER CONSTRUCTION: Something <span className="text-emerald-500">Exceptional</span> is Brewing
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Muslims in Tech(Musdev). Nigeria's #1 Muslim Tech Community is currently upgrading. 
          We are fine-tuning our platform to better serve the ummah through innovation and excellence.
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-medium mb-12">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Phase: Final Polish & Optimization
        </div>
        

        {/* Newsletter / Notification */}
        {/* <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input 
            type="email" 
            placeholder="Enter your email for early access" 
            className="w-full md:w-80 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all"
          />
          <button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-900/20">
            Notify Me
          </button>
        </div> */}
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 text-gray-500 text-sm tracking-widest uppercase">
          <div className="flex items-center gap-4">
                      {[
                        { icon: <TwitterIcon />, href: "https://x.com/musdevofficial" },
                        { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/79099434" },
                        { icon: <InstagramIcon />, href: "#" }, // Keep as # or update if needed
                        { icon: <FacebookIcon />, href: "https://www.facebook.com/musdev.org" },
                      ].map((social, idx) => (
                        <a 
                          key={idx} 
                          href={social.href} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:text-[#0a5e5c] transition-all"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
        <div>Built by the Ummah • For the Ummah</div>
      </div>
    </div>
  );
};

export default HomePage;