// lib/blog/registry.ts - FRISSÍTVE
import { ReactNode, ComponentType } from "react";
import NoShowMiertPost from "@/components/blog/posts/NoShowMiert";
import EtteremDigitalizacioPost from "@/components/blog/posts/EtteremDigitalizacio";
import NoShowCsokkentesPost from "@/components/blog/posts/NoShowCsokkentes";
import EtteremForgalomNovelesPost from "@/components/blog/posts/EtteremForgalomNoveles";
import PapirVsDigitalisPost from "@/components/blog/posts/PapirVsDigitalis";

// Típusok
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
  category: "etterem-tulajdonosoknak" | "vendegeknek" | "gasztro-trendek";
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

export const CATEGORY_LABELS: Record<string, string> = {
  "etterem-tulajdonosoknak": "Étterem Tulajdonosoknak",
  vendegeknek: "Vendégeknek",
  "gasztro-trendek": "Gasztro Trendek",
};

// Blog post metadata registry
export const BLOG_POSTS: Record<string, BlogPostData> = {
  "miert-veszitenek-bevetelt-ettermek-no-show-miatt": {
    slug: "miert-veszitenek-bevetelt-ettermek-no-show-miatt",
    title: "Miért veszítenek az éttermek milliókat a no-show vendégek miatt?",
    metaDescription:
      "A no-show vendégek évente milliós bevételkiesést okoznak az éttermeknek. Fedezd fel, hogyan előzheted meg egyszerűen.",
    category: "etterem-tulajdonosoknak",
    keywords: [
      "no-show vendégek",
      "étterem bevételkiesés",
      "online foglalási rendszer",
      "asztalfoglalás",
    ],
    author: {
      name: "Kovács Péter",
      role: "Vendéglátás Szakértő",
    },
    publishDate: "2025-01-15",
    readingTime: 8,
    featuredImage: {
      url: "/photos/noshow.webp",
      alt: "Üres éttermi asztal foglalási táblával, online foglalási rendszer koncepció",
      width: 1200,
      height: 630,
    },
    // JAVÍTVA: Helyes új slug hivatkozás
    relatedPosts: [
      "no-show-csokkentes-tippek",
      "etterem-digitalizacio-2026-asztalfoglalo-rendszer",
    ],
    excerpt:
      "A no-show vendégek évente akár 7 millió forint bevételkiesést is okozhatnak egy átlagos étteremnek. Nézd meg, hogyan előzheted meg ezt egyszerűen!",
  },

  // JAVÍTVA: A kulcs most már megegyezik a slug-gal!
  "etterem-digitalizacio-2026-asztalfoglalo-rendszer": {
    slug: "etterem-digitalizacio-2026-asztalfoglalo-rendszer",
    title: "2026-ös Étterem Digitalizáció és Asztalfoglaló Rendszer Útmutató",
    metaDescription:
      "Teljes útmutató 2026-ös étterem digitalizációhoz. Online foglalás, automatikus emlékeztetők, QR-kódos check-in és mobilbarát megoldások.",
    category: "etterem-tulajdonosoknak",
    keywords: [
      "étterem digitalizáció",
      "online foglalás",
      "éttermi technológia",
      "vendéglátás 2026",
      "automatikus foglalás",
      "QR-kód étterem",
    ],
    author: {
      name: "FoglaljOnline Csapata",
      role: "",
    },
    publishDate: "2025-01-10",
    readingTime: 8,
    featuredImage: {
      url: "/photos/foglalj.webp",
      alt: "Modern étterem tablet kezelőfelülettel",
      width: 1200,
      height: 630,
    },
    relatedPosts: [
      "no-show-csokkentes-tippek",
      "miert-veszitenek-bevetelt-ettermek-no-show-miatt",
    ],
    excerpt:
      "Fedezd fel, hogyan segíthet a digitalizáció az étteremednek növekedni. Online foglalás, automatikus emlékeztetők, QR-kódos check-in és még sok más.",
  },

  "no-show-csokkentes-tippek": {
    slug: "no-show-csokkentes-tippek",
    title: "No-Show Csökkentés: 7 Bevált Módszer 70%-os Eredménnyel",
    metaDescription:
      "7 bevált módszer a no-show csökkentésére 70%-os eredménnyel. Email emlékeztetők, QR-kód, online lemondás és több praktikus tipp étteremtulajdonosoknak.",
    category: "etterem-tulajdonosoknak",
    keywords: [
      "no-show csökkentés",
      "éttermi no-show",
      "foglalás emlékeztető",
      "vendég meg nem jelenés",
      "étterem bevétel növelés",
      "automatikus emlékeztető",
    ],
    author: {
      name: "Szabó Márk",
      role: "Vendéglátási tanácsadó",
    },
    publishDate: "2025-01-12",
    readingTime: 9,
    featuredImage: {
      url: "/photos/n2.webp",
      alt: "Vendég ellenőrzi foglalását telefonon",
      width: 1200,
      height: 630,
    },
    // JAVÍTVA: A relatedPost itt is a régi címre mutatott
    relatedPosts: [
      "etterem-digitalizacio-2026-asztalfoglalo-rendszer",
      "miert-veszitenek-bevetelt-ettermek-no-show-miatt",
    ],
    excerpt:
      "A meg nem jelenő vendégek komoly bevételkiesést okoznak. Mutatjuk a 7 legjobb módszert, amivel 70%-kal csökkentheted a no-show arányt.",
  },

  "hogyan-novelje-etterem-forgalmat": {
    slug: "hogyan-novelje-etterem-forgalmat",
    title: "Hogyan növelheti étterme forgalmát 40%-kal online foglalással?",
    metaDescription:
      "Praktikus tippek és stratégiák az éttermi forgalom növeléséhez online foglalási rendszer segítségével.",
    category: "etterem-tulajdonosoknak",
    keywords: [
      "étterem forgalom növelés",
      "online foglalás",
      "marketing étteremnek",
      "vendégszám növelés",
    ],
    author: {
      name: "Kovács Péter",
      role: "Vendéglátás Szakértő",
    },
    publishDate: "2025-01-10",
    readingTime: 10,
    featuredImage: {
      url: "/photos/grow.webp",
      alt: "Telt étterem este",
      width: 1200,
      height: 630,
    },
    // JAVÍTVA: A kapcsolódó cikk hivatkozása
    relatedPosts: [
      "etterem-digitalizacio-2026-asztalfoglalo-rendszer",
      "no-show-csokkentes-tippek",
    ],
    excerpt:
      "Fedezd fel, hogyan növelheted éttermed forgalmát akár 40%-kal is egy professzionális online foglalási rendszer bevezetésével.",
  },

  "papir-naptar-vs-digitalis-foglalas": {
    slug: "papir-naptar-vs-digitalis-foglalas",
    title: "Papír naptár vs. Digitális foglalás: Mi a jobb 2025-ben?",
    metaDescription:
      "Összehasonlítjuk a hagyományos papír alapú és a modern digitális foglalási rendszereket. Melyik a nyerő?",
    category: "etterem-tulajdonosoknak",
    keywords: [
      "papír naptár",
      "digitális foglalás",
      "online asztalfoglalás",
      "étterem modernizáció",
    ],
    author: {
      name: "Nagy Anna",
      role: "Éttermi Technológia Tanácsadó",
    },
    publishDate: "2025-01-05",
    readingTime: 6,
    featuredImage: {
      url: "/photos/fuzet.webp",
      alt: "Papír foglalási könyv vs tablet",
      width: 1200,
      height: 630,
    },
    // JAVÍTVA: Kapcsolódó cikk hivatkozása
    relatedPosts: [
      "etterem-digitalizacio-2026-asztalfoglalo-rendszer",
      "no-show-csokkentes-tippek",
    ],
    excerpt:
      "A digitális foglalási rendszerek 85%-kal gyorsabbak és 70%-kal pontosabbak, mint a papír alapú megoldások. Nézd meg a részleteket!",
  },
};

// Component registry
export const BLOG_POST_COMPONENTS: Record<string, ComponentType> = {
  "miert-veszitenek-bevetelt-ettermek-no-show-miatt": NoShowMiertPost,
  "etterem-digitalizacio-2026-asztalfoglalo-rendszer": EtteremDigitalizacioPost,
  "no-show-csokkentes-tippek": NoShowCsokkentesPost,
  "hogyan-novelje-etterem-forgalmat": EtteremForgalomNovelesPost,
  "papir-naptar-vs-digitalis-foglalas": PapirVsDigitalisPost,
};

// ... (Helper functions maradnak változatlanul) ...
export function getAllBlogPosts(): BlogPostData[] {
  return Object.values(BLOG_POSTS).sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getBlogPost(slug: string): BlogPost | null {
  const postData = BLOG_POSTS[slug];
  const PostComponent = BLOG_POST_COMPONENTS[slug];

  if (!postData || !PostComponent) {
    return null;
  }

  return {
    ...postData,
    content: <PostComponent />,
  };
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(BLOG_POSTS);
}

export function getRelatedPosts(slugs: string[]): BlogPostData[] {
  return slugs.map((slug) => BLOG_POSTS[slug]).filter(Boolean);
}

export function getBlogPostsByCategory(category: string): BlogPostData[] {
  return getAllBlogPosts().filter((post) => post.category === category);
}
