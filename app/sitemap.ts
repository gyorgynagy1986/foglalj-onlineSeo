// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://foglaljonline.hu";
  const locales = ["hu", "en", "es", "de"];

  const staticPages = [
    "",
  ];

  const funkcioPages = [
    "asztalterkep",
    "automatikus-emlekeztetok",
    "bongeszo-ertesitesek",
    "dinamikus-idoszabalyok",
    "mobilbarat-felulet",
    "qr-kod-bejelentkezes",
    "testreszabhato-szabalyok",
    "uzleti-jelentesek",
    "vendegkezeles",
  ];

  const blogSlugs = [
    "miert-veszitenek-bevetelt-ettermek-no-show-miatt",
    "etterem-digitalizacio-2026-asztalfoglalo-rendszer",
    "no-show-csokkentes-tippek",
    "hogyan-novelje-etterem-forgalmat",
    "papir-naptar-vs-digitalis-foglalas",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Statikus oldalak - minden nyelven
  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  // Funkció oldalak - minden nyelven
  for (const funkcio of funkcioPages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/funkciok/${funkcio}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Blog - csak magyarul
  for (const slug of blogSlugs) {
    entries.push({
      url: `${baseUrl}/hu/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
