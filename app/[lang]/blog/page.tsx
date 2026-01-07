// app/[lang]/blog/page.tsx
import { getAllBlogPosts, CATEGORY_LABELS } from "@/lib/blog/registry";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | FoglaljOnline",
  description: "Tippek, tanácsok és hírek az étterem világából",
};

interface BlogPageProps {
  params: Promise<{ lang: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params;
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-[#f8faf9] pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-[#0d5e4b] rounded-full" />
            Blog
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-gray-900 mb-6 tracking-tight">
            Tippek és Tanácsok
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hasznos információk étterem tulajdonosoknak és vendégeknek
          </p>
        </header>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${lang}/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0d5e4b]/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Featured Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#0d5e4b] text-xs font-bold rounded-full shadow-sm">
                      {CATEGORY_LABELS[post.category]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0d5e4b] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <time dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString("hu-HU", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readingTime} perc</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
