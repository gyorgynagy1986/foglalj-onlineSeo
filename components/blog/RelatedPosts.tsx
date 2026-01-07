// components/blog/RelatedPosts.tsx

import Link from 'next/link'
import Image from 'next/image'

interface RelatedPostsProps {
  posts: Array<{
    slug: string
    title: string
    excerpt: string
    category: string
    publishDate: string
    readingTime: number
    featuredImage: {
      url: string
      alt: string
    }
  }>
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null
  }
  
  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-8">
        📚 Kapcsolódó cikkek
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-5">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {getCategoryLabel(post.category)}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('hu-HU', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
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
    </section>
  )
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'etterem-tulajdonosoknak': 'Étterem Tulajdonosoknak',
    'vendegeknek': 'Vendégeknek',
    'gasztro-trendek': 'Gasztro Trendek',
  }
  return labels[category] || category
}