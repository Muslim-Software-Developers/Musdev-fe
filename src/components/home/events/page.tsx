import { getStrapiData, getFileUrl } from "@/utils/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowRightIcon from "@/components/svgs/arrowRightIcon";

interface EventPageProps {
  params: { slug: string };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = params;

  // Fetch the specific event by slug
  // We use filters[slug][$eq] to find the exact match
  const events = await getStrapiData(`events?filters[slug][$eq]=${slug}&populate=*`);

  // Since getStrapiData returns an array for collection types
  const event = events?.[0];

  if (!event) {
    notFound();
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header / Breadcrumb */}
      <section className="bg-neutral-50 pt-32 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <Link 
            href="/#events" 
            className="text-emerald-600 font-bold text-sm flex items-center gap-2 mb-8 hover:gap-3 transition-all"
          >
            ← Back to Events
          </Link>
          <div className="inline-block bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-4">
            {event.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">📅</span> {formatDate(event.date)}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">⏰</span> {event.time}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">📍</span> {event.location}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Image & Description */}
          <div className="lg:col-span-2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-10 border border-gray-100">
              <img
                src={getFileUrl(event.image?.url)}
                alt={event.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="whitespace-pre-wrap">{event.description}</p>
            </div>
          </div>

          {/* Right Column: CTA Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-8 rounded-[2rem] bg-[#0a5e5c] text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Reserve your spot</h3>
              <p className="text-white/80 text-sm mb-8">
                Join the MusDev community for this exclusive event. Space is limited, so register early!
              </p>
              
              <button className="w-full flex items-center justify-center gap-2 bg-white text-[#0a5e5c] font-bold px-6 py-4 rounded-xl hover:bg-emerald-50 transition-all group mb-4">
                Register for Event
                <ArrowRightIcon stroke1="#0a5e5c" stroke2="#0a5e5c" />
              </button>
              
              <p className="text-center text-xs text-white/60">
                Free for all registered community members.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}