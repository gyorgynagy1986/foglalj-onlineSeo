import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { GoogleAnalytics } from "@next/third-parties/google";
import ConsentInitializer from "@/components/banner/ConsentInitializer";
import CookieBanner from "@/components/banner/CookieBanner";

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

// Base URLs per language
const baseUrls: Record<string, string> = {
  hu: "https://www.foglaljonline.hu",
  en: "https://www.bookonline.com",
  de: "https://www.bucheonline.de",
  es: "https://www.reservaonline.es",
};

// Metadata translations
const metadataTranslations: Record<
  string,
  {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogLocale: string;
  }
> = {
  hu: {
    title: "Online Asztalfoglalási Rendszer | FoglaljOnline",
    titleTemplate: "%s | FoglaljOnline",
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
    ogTitle: "Online Asztalfoglalási Rendszer Éttermeknek",
    ogDescription:
      "Automatizált foglaláskezelés, asztaltérkép és vendégprofilok. 500+ étterem választása. Próbálja ki 30 napig ingyen!",
    ogLocale: "hu_HU",
  },
  en: {
    title: "Online Table Reservation System | BookOnline",
    titleTemplate: "%s | BookOnline",
    description:
      "Professional table reservation system for restaurants. Smart table maps, guest database, automatic notifications. Try free for 30 days!",
    keywords: [
      "table reservation",
      "restaurant software",
      "booking system",
      "table map",
      "guest management",
      "restaurant marketing",
    ],
    ogTitle: "Online Table Reservation System for Restaurants",
    ogDescription:
      "Automated booking management, table maps and guest profiles. Trusted by 500+ restaurants. Try free for 30 days!",
    ogLocale: "en_US",
  },
  de: {
    title: "Online-Tischreservierungssystem | BucheOnline",
    titleTemplate: "%s | BucheOnline",
    description:
      "Professionelles Tischreservierungssystem für Restaurants. Intelligenter Tischplan, Gästedatenbank, automatische Benachrichtigungen. 30 Tage kostenlos testen!",
    keywords: [
      "Tischreservierung",
      "Restaurant-Software",
      "Buchungssystem",
      "Tischplan",
      "Gästeverwaltung",
      "Restaurant-Marketing",
    ],
    ogTitle: "Online-Tischreservierungssystem für Restaurants",
    ogDescription:
      "Automatisierte Buchungsverwaltung, Tischpläne und Gästeprofile. Über 500 Restaurants vertrauen uns. 30 Tage kostenlos testen!",
    ogLocale: "de_DE",
  },
  es: {
    title: "Sistema de Reservas de Mesas Online | ReservaOnline",
    titleTemplate: "%s | ReservaOnline",
    description:
      "Sistema profesional de reservas de mesas para restaurantes. Mapas de mesas inteligentes, base de datos de clientes, notificaciones automáticas. ¡Prueba gratis 30 días!",
    keywords: [
      "reserva de mesas",
      "software para restaurantes",
      "sistema de reservas",
      "mapa de mesas",
      "gestión de clientes",
      "marketing para restaurantes",
    ],
    ogTitle: "Sistema de Reservas de Mesas Online para Restaurantes",
    ogDescription:
      "Gestión automatizada de reservas, mapas de mesas y perfiles de clientes. Más de 500 restaurantes confían en nosotros. ¡Prueba gratis 30 días!",
    ogLocale: "es_ES",
  },
};

// Brand names per language
const brandNames: Record<string, string> = {
  hu: "FoglaljOnline",
  en: "BookOnline",
  de: "BucheOnline",
  es: "ReservaOnline",
};

interface LayoutProps {
  params: Promise<{ lang?: string }>;
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang = "hu" } = await params;
  const meta = metadataTranslations[lang] || metadataTranslations.hu;
  const baseUrl = baseUrls[lang] || baseUrls.hu;
  const brandName = brandNames[lang] || brandNames.hu;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: meta.title,
      template: meta.titleTemplate,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: brandName }],
    creator: brandName,
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
      locale: meta.ogLocale,
      url: baseUrl,
      siteName: brandName,
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${brandName} Software Preview`,
        },
      ],
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        hu: baseUrls.hu,
        en: baseUrls.en,
        de: baseUrls.de,
        es: baseUrls.es,
        "x-default": baseUrls.en,
      },
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png" }],
    },
  };
}

// Generate JSON-LD based on language
function generateJsonLd(lang: string) {
  const baseUrl = baseUrls[lang] || baseUrls.hu;
  const brandName = brandNames[lang] || brandNames.hu;
  const meta = metadataTranslations[lang] || metadataTranslations.hu;

  const faqTranslations: Record<
    string,
    Array<{ question: string; answer: string }>
  > = {
    hu: [
      {
        question: "Mennyi idő a bevezetés?",
        answer:
          "Átlagosan 1–2 munkanap, meglévő adatok importálása esetén 3–5 nap.",
      },
      {
        question: "Van hűségidő?",
        answer:
          "Nincs hűségidő. Csomagját bármikor módosíthatja vagy lemondhatja.",
      },
    ],
    en: [
      {
        question: "How long does implementation take?",
        answer:
          "Average 1-2 business days, 3-5 days if importing existing data.",
      },
      {
        question: "Is there a commitment period?",
        answer:
          "No commitment period. You can modify or cancel your plan anytime.",
      },
    ],
    de: [
      {
        question: "Wie lange dauert die Implementierung?",
        answer:
          "Durchschnittlich 1-2 Werktage, bei Import bestehender Daten 3-5 Tage.",
      },
      {
        question: "Gibt es eine Bindungsfrist?",
        answer:
          "Keine Bindungsfrist. Sie können Ihren Plan jederzeit ändern oder kündigen.",
      },
    ],
    es: [
      {
        question: "¿Cuánto tiempo tarda la implementación?",
        answer:
          "Promedio de 1-2 días hábiles, 3-5 días si se importan datos existentes.",
      },
      {
        question: "¿Hay período de compromiso?",
        answer:
          "Sin período de compromiso. Puede modificar o cancelar su plan en cualquier momento.",
      },
    ],
  };

  const faqs = faqTranslations[lang] || faqTranslations.hu;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: brandName,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        description: meta.description,
        url: baseUrl,
        offers: {
          "@type": "AggregateOffer",
          lowPrice: lang === "hu" ? 9990 : 29,
          highPrice: lang === "hu" ? 19990 : 59,
          priceCurrency: lang === "hu" ? "HUF" : "EUR",
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
        name: brandName,
        url: baseUrl,
        logo: `${baseUrl}/icon.svg`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+36-30-656-4162",
          contactType: "customer service",
          email: `hello@${brandName.toLowerCase()}.${lang === "hu" ? "hu" : lang === "de" ? "de" : lang === "es" ? "es" : "com"}`,
          availableLanguage: ["Hungarian", "English", "German", "Spanish"],
          areaServed:
            lang === "hu"
              ? "HU"
              : lang === "de"
                ? "DE"
                : lang === "es"
                  ? "ES"
                  : "US",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ lang?: string }>;
}

export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params;
  const { children } = props;
  const { lang = "hu" } = params;

  const dict = await getDictionary(lang);
  const jsonLd = generateJsonLd(lang);

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
        <ConsentInitializer />
        <Navbar dict={dict.navbar} lang={lang} />
        <GoogleAnalytics gaId="G-4PGRRY8H9Y" />
        <CookieBanner />

        {children}
        <Analytics />
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
