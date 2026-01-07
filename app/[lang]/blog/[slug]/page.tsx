// app/[lang]/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs, getRelatedPosts } from '@/lib/blog/registry';
import BlogPostSchema from '@/components/blog/BlogPostSchema';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogCTA from '@/components/blog/BlogCTA';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  const langs = ['hu', 'en'];
  
  return langs.flatMap(lang =>
    slugs.map(slug => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  const baseUrl = 'https://foglaljonline.hu';
  const canonical = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | FoglaljOnline Blog`,
    description: post.metaDescription,
    keywords: post.keywords,

    alternates: {
      canonical: canonical,
    },

    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: canonical,
      siteName: 'FoglaljOnline',
      images: [
        {
          url: post.featuredImage.url,
          width: post.featuredImage.width,
          height: post.featuredImage.height,
          alt: post.featuredImage.alt,
        },
      ],
      locale: 'hu_HU',
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate || post.publishDate,
      authors: [post.author.name],
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.featuredImage.url],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedPosts ? getRelatedPosts(post.relatedPosts) : [];

  return (
    <>
      <BlogPostSchema post={post} />

      <article className="min-h-screen bg-white pt-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link href={`/${lang}`} className="hover:text-[#0d5e4b] transition-colors">
                  Főoldal
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/${lang}/blog`} className="hover:text-[#0d5e4b] transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{post.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-6">
              <time dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString('hu-HU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime} perc olvasás</span>
            </div>

            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              )}
              <div>
                <div className="font-semibold text-gray-900">{post.author.name}</div>
                <div className="text-sm text-gray-600">{post.author.role}</div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              width={post.featuredImage.width}
              height={post.featuredImage.height}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Post Content */}
          <div className="prose prose-lg prose-gray max-w-none mb-16 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0d5e4b] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-[#0d5e4b] prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg">
            {post.content}
          </div>

          {/* CTA */}
          <BlogCTA category={post.category} />

          {/* Related Posts */}
          {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
        </div>
      </article>
    </>
  );
}