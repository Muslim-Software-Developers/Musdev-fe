import { GetServerSideProps } from 'next';
import Link from "next/link";
import { getStrapiData } from "@/utils/api";
import ArrowRightIcon from "@/components/svgs/arrowRightIcon";

interface ProgramPageProps {
  program: {
    header: string;
    content: string;
    icon_name: string;
    UID: string; // Updated from slug to UID
  };
}

export default function ProgramDetailPage({ program }: ProgramPageProps) {
  if (!program) return null;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-neutral-50 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link 
            href="/#programs" 
            className="text-emerald-600 font-bold text-sm flex items-center gap-2 mb-12 group w-fit"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Programs
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="w-20 h-20 rounded-3xl bg-[#0a5e5c] text-white flex items-center justify-center shadow-xl shrink-0">
               <span className="text-3xl font-bold uppercase">{program.header?.charAt(0)}</span>
            </div>
            <div>
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-3 block">
                Official Program
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                {program.header}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Program</h2>
            <div className="prose prose-emerald max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
                {program.content}
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-6 rounded-[2rem] bg-emerald-50 border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 mb-2">Community Driven</h4>
                  <p className="text-sm text-emerald-700/80">Tailored specifically for the needs of Muslim professionals in the tech industry.</p>
               </div>
               <div className="p-6 rounded-[2rem] bg-neutral-50 border border-neutral-100">
                  <h4 className="font-bold text-neutral-900 mb-2">Expert Led</h4>
                  <p className="text-sm text-neutral-600">Guided by seasoned industry leaders with years of practical experience.</p>
               </div>
            </div>
          </div>

          {/* Right Column: CTA Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 rounded-[2.5rem] bg-[#0a5e5c] text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Get Involved</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Interested in joining or supporting this program? Click below to reach out to the MusDev team.
              </p>
              
             <a
  href={`mailto:info@musdev.org?subject=Inquiry about ${program.header}`}
  className="w-full flex items-center justify-center gap-2 bg-white text-[#0a5e5c] font-bold px-6 py-4 rounded-2xl hover:bg-emerald-50 transition-all group shadow-lg"
>
  Inquire Now
  <ArrowRightIcon stroke1="#0a5e5c" stroke2="#0a5e5c" />
</a>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                 <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">Share Program</p>
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all">🐦</div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all">🔗</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // 'slug' here comes from the filename [slug].tsx
  const { slug } = context.params as { slug: string };

  try {
    // UPDATED: We now filter by the field name 'UID' instead of 'slug'
    const res = await getStrapiData(`programs?filters[UID][$eq]=${slug}`);
    const program = res?.[0] || null;

    if (!program) {
      return { 
        notFound: true 
      };
    }

    return {
      props: { 
        program 
      },
    };
  } catch (error) {
    console.error("Fetch error on Program detail page:", error);
    return { 
      notFound: true 
    };
  }
};