// lib/blog/posts.ts
import { ReactNode } from 'react';

export interface BlogAuthor {
  name: string;
  role: string;
  image?: string;
}

export interface BlogFeaturedImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogPostData {
  slug: string;
  title: string;
  metaDescription: string;
  category: 'etterem-tulajdonosoknak' | 'vendegeknek' | 'gasztro-trendek';
  keywords: string[];
  author: BlogAuthor;
  publishDate: string;
  modifiedDate?: string;
  readingTime: number;
  featuredImage: BlogFeaturedImage;
  relatedPosts?: string[];
  excerpt: string;
}

export interface BlogPost extends BlogPostData {
  content: ReactNode;
}

// Kategória címkék
export const CATEGORY_LABELS: Record<string, string> = {
  'etterem-tulajdonosoknak': 'Étterem Tulajdonosoknak',
  'vendegeknek': 'Vendégeknek',
  'gasztro-trendek': 'Gasztro Trendek',
};