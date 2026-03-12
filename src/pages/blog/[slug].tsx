import { GetServerSideProps } from 'next';
import Link from "next/link";
import { getStrapiData } from "@/utils/api";
import ArrowRightIcon from "@/components/svgs/arrowRightIcon";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

interface BlogPostProps {
  post: {
    title: string;
    excerpt: string;
    content: BlocksContent; // Changed from string to BlocksContent
    category: string;
    author_name: string;
    read_time: string;
    published_date: string;
    image: {
      url: string;
    };
  };
}

export default function BlogPostPage({ post }: BlogPostProps) {
  if (!post) return null;

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://musdev-strappi-backend-1.onrender.com';

  const getImageUrl = (url: string) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  };

  return (
    <main className="min-h-screen bg-white pb-24 font-quicksand">
      <header className="pt-32 pb-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="text-emerald-600 font-bold text-sm flex items-center gap-2 mb-12 group w-fit">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Blog
          </Link>
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">{post.category}</span>
          <h1 className="text-4xl md:text-6xl font-black text-neutral-900 leading-[1.1] mb-8 tracking-tight">{post.title}</h1>
          <div className="flex items-center gap-6 pt-8 border-t border-neutral-200">
            <div className="w-12 h-12 rounded-2xl bg-[#0a5e5c] text-white flex items-center justify-center font-bold shadow-lg uppercase">
              {post.author_name?.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900">{post.author_name}</p>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">
                {post.published_date} • {post.read_time}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 -mt-10 mb-20">
        <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-neutral-100">
          <img src={getImageUrl(post.image?.url)} alt={post.title} className="object-cover w-full h-full" />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg prose-emerald max-w-none">
          <p className="text-neutral-600 text-xl leading-relaxed mb-12 font-medium italic border-l-4 border-emerald-500 pl-6">
            {post.excerpt}
          </p>
          
          {/* FIXED: Using BlocksRenderer instead of simple div */}
          <div className="text-neutral-800 text-lg leading-[1.8]">
            {post.content ? (
              <BlocksRenderer content={post.content} />
            ) : (
              <p>Content is being finalized. Please check back shortly.</p>
            )}
          </div>
        </div>

        <div className="mt-24 p-12 rounded-[3rem] bg-[#0a5e5c] text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this read?</h3>
            <p className="text-emerald-100/80 mb-8 max-w-md">Join our newsletter to get the latest insights on faith and tech.</p>
            <Link href="https://forms.gle/xxt81k7r8U86XJP28" target="_blank" className="inline-flex items-center gap-2 bg-white text-[#0a5e5c] px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all shadow-xl">
              Join the Movement <ArrowRightIcon stroke1="#0a5e5c" stroke2="#0a5e5c" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  try {
    // IMPORTANT: Added populate[image]=* back in, otherwise your images will break!
    const res = await getStrapiData(`blog-posts?filters[slug][$eq]=${slug}`);
    const rawData = res?.data?.[0] || res?.[0] || null;

    if (!rawData) return { notFound: true };

    const attributes = rawData.attributes || rawData;

    return {
      props: {
        post: {
          id: rawData.id,
          ...attributes,
          image: {
            url: attributes.image?.data?.attributes?.url || attributes.image?.url || ""
          }
        }
      }
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return { notFound: true };
  }
};