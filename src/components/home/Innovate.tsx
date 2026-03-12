import React, { useState } from "react";
import { postStrapiData } from "@/utils/api"; // Path to your helper file

const Innovate = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    // Create a clean object from the form fields
    const payload = {
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      project_name: formData.get("project_name"),
      project_link: formData.get("project_link"),
      portfolio_link: formData.get("portfolio_link"),
    };

    try {
      // Use the helper! It handles the URL, Token, and the { data: payload } wrap.
      await postStrapiData("innovation-submissions", payload);
      
      setStatus("success");
      (e.target as HTMLFormElement).reset(); 
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <section id="innovate" className="py-20 bg-[#0a0a0a] text-white px-6 relative overflow-hidden font-quicksand">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-semibold tracking-wide uppercase">
            Showcase Your Craft
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building the Future of <br />
            <span className="text-emerald-500">Halal Innovation</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Are you a Muslim developer building something impactful? Spotlight your genius on our dedicated Innovation Page.
          </p>
          
          <div className="relative mt-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
              alt="Innovation & Tech" 
              className="relative rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 object-cover h-[300px] w-full"
            />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input name="full_name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none" placeholder="Yusuf Jimoh" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none" placeholder="info@musdev.org" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Mobile Number</label>
              <input name="mobile" required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none" placeholder="+234..." />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Project Name</label>
              <input name="project_name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none" placeholder="MusDev Platform" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">Project/Download Link</label>
              <input name="project_link" type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none" placeholder="https://app.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn URL / Portfolio Link</label>
              <input name="portfolio_link" required type="url" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-emerald-500 outline-none" placeholder="linkedin.com/in/username" />
            </div>
            
            <div className="md:col-span-2 mt-4">
              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg disabled:opacity-50"
              >
                {status === "loading" ? "Submitting..." : "Submit for Spotlight"}
              </button>

              {status === "success" && (
                <p className="mt-4 text-emerald-500 text-sm font-bold text-center">
                  Alhamdulillah! Your project has been submitted for review.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-500 text-sm font-bold text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Innovate;