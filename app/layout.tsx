import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.foglaljonline.hu"),
  title: {
    default:
      "Online Asztalfoglalás Éttermeknek | Foglalási Rendszer Magyarország - FoglaljOnline",
    template: "%s | FoglaljOnline - Éttermi Foglalási Rendszer",
  },
  description:
    "Professzionális online asztalfoglalási rendszer magyar éttermeknek és vendéglátóhelyeknek. Intelligens foglaláskezelés, asztaltérkép, vendégadatbázis, automatikus email-emlékeztetők, üzleti analitika és jelentések. GDPR kompatibilis, 99.9% üzemidő, 24/7 magyar ügyfélszolgálat. 500+ elégedett étterem, 1M+ kezelt foglalás. Próbálja ki 30 napig ingyenesen!",
  keywords: [
    "asztalfoglalás",
    "online asztalfoglalás",
    "éttermi foglalási rendszer",
    "asztalfoglalási rendszer",
    "étterem szoftver",
    "vendéglátó szoftver",
    "foglaláskezelő rendszer",
    "éttermi adminisztráció",
    "asztaltérkép",
    "vendégadatbázis",
    "étterem automatizálás",
    "vendégkezelés",
    "éttermi analitika",
    "foglalási rendszer magyarország",
    "magyar asztalfoglalás",
    "étterem foglalás online",
    "vendéglátóhely foglalás",
    "reservation system hungary",
    "restaurant booking system",
    "éttermi értesítések",
    "foglalás emlékeztető",
    "étterem digitalizáció",
  ],
  authors: [
    { name: "FoglaljOnline" },
    { name: "Bukio", url: "https://www.bukio.hu" },
  ],
  creator: "FoglaljOnline by Bukio",
  publisher: "Bukio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://www.foglaljonline.hu",
    siteName: "FoglaljOnline - Éttermi Asztalfoglalási Rendszer",
    title:
      "Online Asztalfoglalás Éttermeknek | Professzionális Foglalási Rendszer",
    description:
      "Intelligens asztalfoglalási rendszer magyar éttermeknek. Automatizált foglaláskezelés, asztaltérkép, vendégprofilok, email automatizálás és részletes analitika. 500+ étterem már használja. 30 napos ingyenes próba, nincs setup díj!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FoglaljOnline - Online Asztalfoglalási Rendszer Éttermeknek",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 600,
        height: 600,
        alt: "FoglaljOnline Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Asztalfoglalás Éttermeknek | FoglaljOnline",
    description:
      "Professzionális foglalási rendszer magyar éttermeknek. Asztaltérkép, vendégkezelés, automatikus értesítések, analitika. 30 nap ingyen!",
    images: ["/og-image.png"],
    creator: "@foglaljonline",
    site: "@foglaljonline",
  },
  alternates: {
    canonical: "https://www.foglaljonline.hu",
    languages: {
      "hu-HU": "https://www.foglaljonline.hu",
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#10b981",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Business Software, Restaurant Management, SaaS",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "google-site-verification-code", // Add your verification code
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
  other: {
    "msapplication-TileColor": "#10b981",
    "theme-color": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "FoglaljOnline",
    "application-name": "FoglaljOnline",
    "mobile-web-app-capable": "yes",
    google: "notranslate",
    rating: "general",
    "revisit-after": "7 days",
    "geo.region": "HU",
    "geo.placename": "Hungary",
    "og:locale:alternate": "en_US",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "FoglaljOnline",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      description:
        "Professzionális online asztalfoglalási rendszer magyar éttermeknek és vendéglátóhelyeknek. Intelligens foglaláskezelés, asztaltérkép, vendégadatbázis, automatikus értesítések.",
      url: "https://www.foglaljonline.hu",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "9990",
        highPrice: "19990",
        priceCurrency: "HUF",
        offerCount: "3",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "500",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Online asztalfoglalás",
        "Asztaltérkép kezelés",
        "Vendégadatbázis",
        "Email automatizálás",
        "Üzleti analitika",
        "GDPR megfelelőség",
        "24/7 magyar támogatás",
      ],
    },
    {
      "@type": "Organization",
      name: "FoglaljOnline",
      url: "https://www.foglaljonline.hu",
      logo: "https://www.foglaljonline.hu/photos/logo.svg",
      sameAs: ["https://www.facebook.com/stdbromo"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+36-30-656-4162",
        contactType: "customer service",
        email: "hello@foglaljonline.hu",
        availableLanguage: ["Hungarian", "English"],
        areaServed: "HU",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "HU",
      },
    },
    {
      "@type": "WebSite",
      name: "FoglaljOnline",
      url: "https://www.foglaljonline.hu",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.foglaljonline.hu/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
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
        {
          "@type": "Question",
          name: "Milyen támogatást kapok?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Magyar nyelvű 24/7 támogatás emailen és telefonon, tudásbázis és rendszeres webinarok.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
