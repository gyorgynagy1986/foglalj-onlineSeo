import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
});

// A weboldal alap URL-je (fontos a canonical linkekhez)
const baseUrl = "https://www.foglaljonline.hu";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Online Asztalfoglalási Rendszer | FoglaljOnline",
    template: "%s | FoglaljOnline",
  },
  description:
    "Professzionális asztalfoglalási rendszer magyar éttermeknek. Intelligens asztaltérkép, vendégadatbázis, automata értesítők. Próbálja ki 30 napig ingyen!",
  keywords: [
    "asztalfoglalás",
    "éttermi szoftver",
    "foglalási rendszer",
    "asztaltérkép",
    "vendégkezelés",
    "étterem marketing",
  ],
  authors: [{ name: "FoglaljOnline" }],
  creator: "FoglaljOnline",
  publisher: "Bukio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: baseUrl,
    siteName: "FoglaljOnline",
    title: "Online Asztalfoglalási Rendszer Éttermeknek",
    description:
      "Automatizált foglaláskezelés, asztaltérkép és vendégprofilok. 500+ étterem választása. Próbálja ki 30 napig ingyen!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FoglaljOnline Szoftver Bemutató",
      },
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "FoglaljOnline",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      description:
        "Professzionális online asztalfoglalási rendszer magyar éttermeknek.",
      url: baseUrl,
      offers: {
        "@type": "AggregateOffer",
        lowPrice: 9990,
        highPrice: 19990,
        priceCurrency: "HUF",
        offerCount: 3,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "185",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Organization",
      name: "FoglaljOnline",
      url: baseUrl,
      logo: `${baseUrl}/icon.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+36-30-656-4162",
        contactType: "customer service",
        email: "hello@foglaljonline.hu",
        availableLanguage: ["Hungarian", "English"],
        areaServed: "HU",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Mennyi idő a bevezetés?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Átlagosan 1–2 munkanap, meglévő adatok importálása esetén 3–5 nap.",
          },
        },
        {
          "@type": "Question",
          name: "Van hűségidő?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nincs hűségidő. Csomagját bármikor módosíthatja vagy lemondhatja.",
          },
        },
      ],
    },
  ],
};

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ lang?: string }>;
}

export default async function RootLayout(props: RootLayoutProps) {
  // A params aszinkron feloldása (Next.js 15+ konvenció)
  const params = await props.params;
  const { children } = props;

  const { lang = "hu" } = params;

  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Navbar dict={dict.navbar} lang={lang} />

        {children}
        <Analytics />
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
