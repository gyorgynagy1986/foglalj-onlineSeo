// components/blog/BlogPostSchema.tsx

import { BlogPost } from "@/types/blog"; // Vagy ahova a típust mentetted a registry-ből

export default function BlogPostSchema({ post }: { post: BlogPost }) {
  const baseUrl = "https://foglaljonline.hu";

  // ✅ ÚJ SEGÉDFÜGGVÉNY:
  // Ez biztosítja, hogy minden kép URL abszolút legyen (https://...)
  // A Google nem szereti a relatív URL-eket (pl. /kep.png) a Schema-ban.
  const getAbsoluteUrl = (path?: string) => {
    if (!path) return undefined;
    return path.startsWith("http") ? path : `${baseUrl}${path}`;
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,

    // ✅ JAVÍTVA: Itt használjuk a segédfüggvényt
    image: {
      "@type": "ImageObject",
      url: getAbsoluteUrl(post.featuredImage.url),
      width: post.featuredImage.width,
      height: post.featuredImage.height,
    },

    datePublished: post.publishDate,
    dateModified: post.modifiedDate || post.publishDate,

    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      // ✅ JAVÍTVA: A szerző képénél is
      image: getAbsoluteUrl(post.author.image),
      worksFor: {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "FoglaljOnline",
      },
    },

    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "FoglaljOnline",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`, // Ez jó, ha a logo.png a public mappában van
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },

    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "hu-HU",

    // Breadcrumbs
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Főoldal",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${baseUrl}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `${baseUrl}/blog/${post.slug}`,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
