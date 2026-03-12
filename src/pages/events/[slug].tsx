import { GetServerSideProps } from 'next';
import Link from "next/link";
import { getStrapiData, getFileUrl } from "@/utils/api";
import ArrowRightIcon from "@/components/svgs/arrowRightIcon";

interface EventPageProps {
  event: any;
}

export default function EventDetailPage({ event }: EventPageProps) {
  if (!event) return null;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "TBA";
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long", 
      month: "long", 
      day: "numeric", 
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-neutral-50 pt-32 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/#events" className="text-emerald-600 font-bold text-sm flex items-center gap-2 mb-8 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Events
          </Link>
          <div className="inline-block bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-4">
            {event.category || "Community Event"}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-500 font-medium">
            <span>📅 {formatDate(event.date)}</span>
            <span>⏰ {event.time}</span>
            <span>📍 {event.location}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-10 border border-gray-100">
              {event.image?.url ? (
                <img
                  src={getFileUrl(event.image.url)}
                  alt={event.title}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full h-64 bg-emerald-900 flex items-center justify-center text-white font-bold">
                  MusDev
                </div>
              )}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
              {event.description}
            </p>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 rounded-[2rem] bg-[#0a5e5c] text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Join Us</h3>
              <p className="text-white/80 text-sm mb-8">Space is limited, so register early!</p>
            <div className="lg:col-span-1">
  <div className="sticky top-32 p-8 rounded-[2rem] bg-[#0a5e5c] text-white shadow-xl">
    <h3 className="text-xl font-bold mb-4">Join Us</h3>
    <p className="text-white/80 text-sm mb-8">
      {event.event_googleform_url 
        ? "Secure your spot by filling out the registration form below." 
        : "Space is limited. Registration for this event will open shortly."}
    </p>
    
    {event.event_googleform_url ? (
      <a 
        href={event.event_googleform_url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-white text-[#0a5e5c] font-bold px-6 py-4 rounded-xl hover:bg-emerald-50 transition-all group"
      >
        Register Now
        <ArrowRightIcon stroke1="#0a5e5c" stroke2="#0a5e5c" />
      </a>
    ) : (
      <button 
        disabled
        className="w-full flex items-center justify-center gap-2 bg-white/20 text-white/50 font-bold px-6 py-4 rounded-xl cursor-not-allowed"
      >
        Registration Closed
      </button>
    )}

    <p className="text-center text-[10px] text-white/50 mt-4">
      {event.event_googleform_url ? "Links to an external Google Form" : "Check back later for updates"}
    </p>
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
  const { slug } = context.params as { slug: string };

  try {
    // We use the slug filter to find the specific event
    const res = await getStrapiData(`events?filters[slug][$eq]=${slug}`);
    
    // Strapi returns an array for collection types
    const event = res?.[0] || null;

    if (!event) {
      return { 
        notFound: true 
      };
    }

    return {
      props: { 
        event 
      },
    };
  } catch (error) {
    console.error("Fetch error on slug page:", error);
    return { 
      notFound: true 
    };
  }
};