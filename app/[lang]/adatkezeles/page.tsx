import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Mail,
  Phone,
  MapPin,
  Server,
  Cookie,
  Lock,
  FileText,
  Globe,
  UserCheck,
  AlertTriangle,
  BarChart3,
  Target,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Adatkezelési Tájékoztató | FoglaljOnline",
  description:
    "A FoglaljOnline adatkezelési tájékoztatója a GDPR (13–14. cikk) és az Infotv. előírásainak megfelelően.",
};

const EFFECTIVE_DATE = "2025. január 1.";
const COOKIE_POLICY_DATE = "2025. június 2.";

const CONTROLLER = {
  name: "Nagy György EV.",
  taxId: "59721639-1-26",
  address: "6726 Szeged, Közép kikötő sor 14/B",
  email: "hello@foglaljonline.hu",
  phone: "+36 30 656 4162",
};

const PROCESSORS = {
  resend: {
    name: "Resend, Inc.",
    purpose:
      "E-mail kézbesítés (kapcsolatfelvételi űrlap üzeneteinek továbbítása)",
    storage:
      "Európai Unió (Írország, eu-west-1 régió) – a szolgáltató beállításaitól függően",
    notes:
      "A szolgáltató a szolgáltatás nyújtásához alvállalkozókat (sub-processors) vehet igénybe. Egyes esetekben EGT-n kívüli hozzáférés/adattovábbítás is előfordulhat (pl. üzemeltetés, támogatás). Ilyenkor megfelelő garanciákat alkalmazunk (pl. EU Bizottság által elfogadott általános szerződési feltételek – SCC, illetve ahol alkalmazható, megfelelőségi mechanizmusok).",
    links: {
      dpa: "https://resend.com/legal/dpa",
      privacy: "https://resend.com/legal/privacy-policy",
    },
  },
  google: {
    name: "Google LLC / Google Ireland Limited",
    purpose: "Analitika és hirdetési szolgáltatások",
    storage: "Európai Unió / Egyesült Államok",
    notes:
      "A Google szolgáltatásai megfelelő garanciákkal működnek (EU-U.S. Data Privacy Framework, SCC).",
    links: {
      privacy: "https://policies.google.com/privacy",
      terms: "https://policies.google.com/terms",
    },
  },
};

// Cookie táblázatok
const ESSENTIAL_COOKIES = [
  {
    name: "cookie_consent",
    purpose: "Az Ön cookie preferenciáinak mentése",
    expiry: "1 év",
    category: "Preferencia",
  },
];

const ANALYTICS_COOKIES = [
  {
    name: "_ga",
    purpose: "Egyedi látogatók azonosítása",
    expiry: "2 év",
    provider: "Google Analytics",
  },
  {
    name: "_ga_4PGRRY8H9Y",
    purpose: "Session és kampány információk tárolása (GA4 property)",
    expiry: "2 év",
    provider: "Google Analytics",
  },
];

const MARKETING_COOKIES = [
  {
    name: "_gcl_au",
    purpose: "Google Ads automatikus címkézés, konverziókövetés",
    expiry: "90 nap",
    provider: "Google Ads",
  },
  {
    name: "DSID",
    purpose: "DoubleClick hirdetési azonosító",
    expiry: "2 hét",
    provider: "DoubleClick",
  },
  {
    name: "IDE",
    purpose: "Hirdetési célú felhasználó azonosítás, remarketing",
    expiry: "13-24 hónap",
    provider: "DoubleClick",
  },
  {
    name: "ar_debug",
    purpose: "Hirdetési rendszer hibakeresés",
    expiry: "90 nap",
    provider: "Google Ads",
  },
  {
    name: "__gfp_s_*",
    purpose: "Google Floodlight tracking",
    expiry: "~3 hónap",
    provider: "DoubleClick",
  },
  {
    name: "NID",
    purpose: "Google hálózati azonosító, hirdetési preferenciák",
    expiry: "6 hónap",
    provider: "Google",
  },
];

export default function AdatkezelesPage() {
  return (
    <main className="min-h-screen bg-[#f8faf9]">
      {/* Header */}
      <div
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #0a4a3a 0%, #0d5e4b 50%, #127a5b 100%)",
        }}
      >
        <div className="max-w-[800px] mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Vissza a főoldalra
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Adatkezelési Tájékoztató
              </h1>
              <p className="text-white/60 mt-1">
                Hatályos: {EFFECTIVE_DATE} napjától visszavonásig
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Adatkezelő adatai */}
        <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#0d5e4b]" />
            Adatkezelő adatai
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#0d5e4b]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{CONTROLLER.name}</p>
                <p className="text-gray-600 text-sm">
                  Adószám: {CONTROLLER.taxId}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#0d5e4b]" />
              </div>
              <div>
                <p className="text-gray-600">{CONTROLLER.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#0d5e4b]" />
              </div>
              <div>
                <a
                  href={`mailto:${CONTROLLER.email}`}
                  className="text-[#0d5e4b] font-medium hover:underline"
                >
                  {CONTROLLER.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#0d5e4b]" />
              </div>
              <div>
                <a
                  href="tel:+36306564162"
                  className="text-[#0d5e4b] font-medium hover:underline"
                >
                  {CONTROLLER.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Jogi szövegek */}
        <div className="prose prose-gray max-w-none">
          {/* 1. Jogszabályi háttér */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              1. Jogszabályi háttér
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Jelen tájékoztató az Európai Parlament és a Tanács (EU) 2016/679
              rendelete (GDPR), valamint az információs önrendelkezési jogról és
              az információszabadságról szóló 2011. évi CXII. törvény (Infotv.)
              alapján készült.
            </p>
            <div className="mt-4 p-4 bg-[#0d5e4b]/5 rounded-xl border border-[#0d5e4b]/10">
              <p className="text-gray-700 text-sm m-0">
                <strong>Fogalmak röviden:</strong> „személyes adat" bármely,
                azonosított vagy azonosítható természetes személyre vonatkozó
                információ; „adatkezelés" a személyes adatokon végzett bármely
                művelet (pl. gyűjtés, tárolás, továbbítás, törlés).
              </p>
            </div>
          </section>

          {/* 2. Kezelt adatok köre */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              2. A kezelt adatok köre, célja, jogalapja
            </h2>

            <p className="text-gray-600 mb-4">
              A weboldalon kizárólag a kapcsolatfelvételi űrlapon keresztül
              gyűjtünk személyes adatokat, amelyeket Ön önkéntesen ad meg.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-gray-900 font-semibold border-b">
                  <tr>
                    <th className="p-3">Kezelt adat</th>
                    <th className="p-3">Cél</th>
                    <th className="p-3">Jogalap</th>
                    <th className="p-3">Kötelező?</th>
                    <th className="p-3">Megőrzés</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3">Név</td>
                    <td className="p-3">Megszólítás, azonosítás</td>
                    <td className="p-3 text-xs">
                      Szerződéskötést megelőző lépések (GDPR 6(1)b)
                    </td>
                    <td className="p-3">Igen</td>
                    <td className="p-3">3 hónap</td>
                  </tr>
                  <tr>
                    <td className="p-3">E-mail cím</td>
                    <td className="p-3">Kapcsolatfelvétel, válaszadás</td>
                    <td className="p-3 text-xs">
                      Szerződéskötést megelőző lépések (GDPR 6(1)b)
                    </td>
                    <td className="p-3">Igen</td>
                    <td className="p-3">3 hónap</td>
                  </tr>
                  <tr>
                    <td className="p-3">Üzenet tartalma</td>
                    <td className="p-3">Kérdés/igény megértése, válaszadás</td>
                    <td className="p-3 text-xs">
                      Szerződéskötést megelőző lépések (GDPR 6(1)b)
                    </td>
                    <td className="p-3">Igen</td>
                    <td className="p-3">3 hónap</td>
                  </tr>
                  <tr>
                    <td className="p-3">Telefonszám</td>
                    <td className="p-3">
                      Visszahívás kérése esetén kapcsolatfelvétel
                    </td>
                    <td className="p-3 text-xs">Hozzájárulás (GDPR 6(1)a)</td>
                    <td className="p-3">Nem</td>
                    <td className="p-3">3 hónap</td>
                  </tr>
                  <tr>
                    <td className="p-3">Étterem neve (opcionális)</td>
                    <td className="p-3">Üzenet kontextusának pontosítása</td>
                    <td className="p-3 text-xs">Hozzájárulás (GDPR 6(1)a)</td>
                    <td className="p-3">Nem</td>
                    <td className="p-3">3 hónap</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-[#0d5e4b]/5 rounded-xl border border-[#0d5e4b]/10">
              <p className="text-gray-700 text-sm mb-2">
                <strong>Az adatkezelés célja kizárólag:</strong> az Ön
                megkeresésére történő válaszadás és kapcsolatfelvétel.
              </p>
              <p className="text-gray-700 text-sm m-0">
                <strong>Marketing cél:</strong> az adatokat marketing célra nem
                használjuk, hírlevelet nem küldünk az űrlap alapján.
              </p>
            </div>
          </section>

          {/* 2.1 Kötelező adatszolgáltatás */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center">
                <UserCheck className="w-4 h-4 text-[#0d5e4b]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 m-0">
                2.1. Az adatszolgáltatás kötelező jellege
              </h2>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 text-sm m-0">
                A <strong>név</strong>, <strong>e-mail cím</strong> és{" "}
                <strong>üzenet</strong> megadása a kapcsolatfelvételhez
                szükséges. Amennyiben ezeket nem adja meg, nem tudunk érdemben
                válaszolni. A <strong>telefonszám</strong> és az{" "}
                <strong>étterem neve</strong> megadása opcionális.
              </p>
            </div>
          </section>

          {/* 3. Címzettek, adatfeldolgozók */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center">
                <Server className="w-4 h-4 text-[#0d5e4b]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 m-0">
                3. Címzettek és adatfeldolgozók
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Az űrlapon megadott adatokhoz elsődlegesen az Adatkezelő fér
              hozzá. A szolgáltatás biztosításához bizonyos technikai
              szolgáltatókat (adatfeldolgozókat) veszünk igénybe.
            </p>

            {/* Resend */}
            <div className="p-4 bg-[#f8faf9] rounded-xl border border-gray-100 mb-4">
              <p className="font-semibold text-gray-900 mb-2">
                E-mail kézbesítés
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Szolgáltató:</strong> {PROCESSORS.resend.name}
                <br />
                <strong>Cél:</strong> {PROCESSORS.resend.purpose}
                <br />
                <strong>Adattárolás / feldolgozás:</strong>{" "}
                {PROCESSORS.resend.storage}
              </p>

              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-emerald-800 text-sm m-0">
                  {PROCESSORS.resend.notes}
                </p>
              </div>

              <div className="mt-3 text-sm">
                <a
                  href={PROCESSORS.resend.links.dpa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d5e4b] hover:underline mr-4"
                >
                  Adatfeldolgozási megállapodás (DPA)
                </a>
                <a
                  href={PROCESSORS.resend.links.privacy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d5e4b] hover:underline"
                >
                  Adatvédelmi irányelvek
                </a>
              </div>
            </div>

            {/* Google */}
            <div className="p-4 bg-[#f8faf9] rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 mb-2">
                Analitika és hirdetések
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Szolgáltató:</strong> {PROCESSORS.google.name}
                <br />
                <strong>Cél:</strong> {PROCESSORS.google.purpose}
                <br />
                <strong>Adattárolás / feldolgozás:</strong>{" "}
                {PROCESSORS.google.storage}
              </p>

              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-emerald-800 text-sm m-0">
                  {PROCESSORS.google.notes}
                </p>
              </div>

              <div className="mt-3 text-sm">
                <a
                  href={PROCESSORS.google.links.privacy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d5e4b] hover:underline mr-4"
                >
                  Google Adatvédelmi irányelvek
                </a>
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d5e4b] hover:underline"
                >
                  Google Analytics letiltása
                </a>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-700 text-sm m-0">
                <strong>Egyéb címzettek:</strong> Személyes adatot harmadik fél
                részére nem értékesítünk. Hatósági megkeresés esetén (jogszabály
                alapján) kötelesek lehetünk adatokat átadni.
              </p>
            </div>
          </section>

          {/* 3.1 Nemzetközi adattovábbítás */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-[#0d5e4b]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 m-0">
                3.1. Nemzetközi adattovábbítás (EGT-n kívül)
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Alapesetben törekszünk arra, hogy a személyes adatok EGT-n belül
              kerüljenek feldolgozásra. Ugyanakkor egyes technikai szolgáltatók
              (pl. e-mail kézbesítés, Google szolgáltatások) esetében
              előfordulhat, hogy a szolgáltató szervezete vagy alvállalkozói
              EGT-n kívülről is hozzáférhetnek az adatokhoz.
            </p>

            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
              <p className="text-emerald-800 text-sm m-0">
                Ilyen esetben az adattovábbítás megfelelő garanciák mellett
                történik: EU Bizottság által elfogadott{" "}
                <strong>általános szerződési feltételek (SCC)</strong>, valamint
                az <strong>EU-U.S. Data Privacy Framework</strong> keretében.
              </p>
            </div>
          </section>

          {/* 4. Sütik (COOKIES) - Részletes */}
          <section
            id="sutik"
            className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center">
                <Cookie className="w-4 h-4 text-[#0d5e4b]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 m-0">
                4. Sütik (Cookies) és hasonló technológiák
              </h2>
            </div>

            <p className="text-gray-600 text-sm mb-2">
              Utolsó frissítés: {COOKIE_POLICY_DATE}
            </p>

            <div className="p-4 bg-[#0d5e4b]/5 rounded-xl border border-[#0d5e4b]/10 mb-6">
              <p className="text-gray-700 text-sm m-0">
                <strong>Mi az a cookie?</strong> A cookie-k kis szöveges fájlok,
                amelyeket a weboldal az Ön böngészőjében tárol. Ezek segítenek
                nekünk emlékezni az Ön preferenciáira és javítani a weboldalunk
                működését.
              </p>
            </div>

            {/* 4.1 Alapvető működési cookie-k */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="w-5 h-5 text-[#0d5e4b]" />
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  4.1. Alapvető működési cookie-k (Kötelező)
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Ezek a cookie-k elengedhetetlenek a weboldal megfelelő
                működéséhez. Nem kapcsolhatók ki.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                  <thead className="bg-gray-50 text-gray-900 font-semibold border-b">
                    <tr>
                      <th className="p-3">Cookie név</th>
                      <th className="p-3">Célja</th>
                      <th className="p-3">Lejárat</th>
                      <th className="p-3">Kategória</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {ESSENTIAL_COOKIES.map((cookie) => (
                      <tr key={cookie.name}>
                        <td className="p-3 font-mono text-xs">{cookie.name}</td>
                        <td className="p-3">{cookie.purpose}</td>
                        <td className="p-3">{cookie.expiry}</td>
                        <td className="p-3">{cookie.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4.2 Analitikai cookie-k */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  4.2. Analitikai cookie-k (Opcionális)
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Ezek segítenek megérteni, hogyan használják látogatóink a
                weboldalunkat. A Google Analytics 4 szolgáltatást használjuk.
              </p>

              <div className="overflow-x-auto mb-3">
                <table className="w-full text-left text-sm text-gray-600">
                  <thead className="bg-gray-50 text-gray-900 font-semibold border-b">
                    <tr>
                      <th className="p-3">Cookie név</th>
                      <th className="p-3">Célja</th>
                      <th className="p-3">Lejárat</th>
                      <th className="p-3">Szolgáltató</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {ANALYTICS_COOKIES.map((cookie) => (
                      <tr key={cookie.name}>
                        <td className="p-3 font-mono text-xs">{cookie.name}</td>
                        <td className="p-3">{cookie.purpose}</td>
                        <td className="p-3">{cookie.expiry}</td>
                        <td className="p-3">{cookie.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-blue-800 text-sm m-0">
                  <strong>Mit mérünk?</strong> Oldalmegtekintések száma,
                  látogatási időtartam, legnépszerűbb oldalak, forgalmi
                  források.
                </p>
              </div>
            </div>

            {/* 4.3 Marketing és hirdetési cookie-k */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg font-bold text-gray-900 m-0">
                  4.3. Marketing és hirdetési cookie-k (Opcionális)
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Ezek személyre szabott hirdetések megjelenítésére és
                hatékonyságuk mérésére szolgálnak. Google Ads és DoubleClick
                szolgáltatásokat használunk.
              </p>

              <div className="overflow-x-auto mb-3">
                <table className="w-full text-left text-sm text-gray-600">
                  <thead className="bg-gray-50 text-gray-900 font-semibold border-b">
                    <tr>
                      <th className="p-3">Cookie név</th>
                      <th className="p-3">Célja</th>
                      <th className="p-3">Lejárat</th>
                      <th className="p-3">Szolgáltató</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {MARKETING_COOKIES.map((cookie) => (
                      <tr key={cookie.name}>
                        <td className="p-3 font-mono text-xs">{cookie.name}</td>
                        <td className="p-3">{cookie.purpose}</td>
                        <td className="p-3">{cookie.expiry}</td>
                        <td className="p-3">{cookie.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-orange-800 text-sm m-0">
                  <strong>Mit csinálnak?</strong> Hirdetések személyre szabása,
                  konverziók követése, remarketing kampányok, hirdetési
                  hatékonyság mérése.
                </p>
              </div>
            </div>

            {/* 4.4 Az Ön választási lehetőségei */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                4.4. Az Ön választási lehetőségei
              </h3>

              <div className="p-4 bg-[#0d5e4b]/5 rounded-xl border border-[#0d5e4b]/10 mb-4">
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Consent Management:</strong> Weboldalunk Google
                  Consent Mode v2 technológiát használ, amely lehetővé teszi a
                  finomhangolt cookie kezelést.
                </p>
                <ul className="text-gray-600 text-sm m-0 pl-4 list-disc">
                  <li>Analitikai tárolás: Weboldal statisztikák</li>
                  <li>Hirdetési tárolás: Hirdetési cookie-k tárolása</li>
                  <li>
                    Hirdetési felhasználói adatok: Személyes adatok hirdetési
                    célokra
                  </li>
                  <li>
                    Hirdetés személyre szabás: Személyre szabott hirdetések
                  </li>
                  <li>Funkcionális tárolás: Alapvető weboldal funkciók</li>
                </ul>
              </div>

              <div className="grid gap-2 mb-4">
                {[
                  {
                    icon: "✅",
                    title: "Beleegyezés visszavonása",
                    desc: "Bármikor módosíthatja választásait",
                  },
                  {
                    icon: "✅",
                    title: "Kategóriák külön kezelése",
                    desc: "Csak a kívánt funkciókat engedélyezheti",
                  },
                  {
                    icon: "✅",
                    title: "Teljes átláthatóság",
                    desc: "Pontosan tudja, mit fogad el",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 p-3 bg-[#f8faf9] rounded-lg"
                  >
                    <span>{item.icon}</span>
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">
                        {item.title}:
                      </span>
                      <span className="text-gray-600 text-sm ml-1">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Beállítások módosítása:</strong>
                </p>
                <ol className="text-gray-600 text-sm m-0 pl-4 list-decimal">
                  <li>
                    Kattintson a <strong>[Cookie beállítások]</strong> gombra az
                    oldal alján
                  </li>
                  <li>Válassza ki a kívánt kategóriákat</li>
                  <li>Mentse el a változtatásokat</li>
                </ol>
              </div>
            </div>

            {/* 4.5 Böngésző beállítások */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                4.5. Böngésző beállítások
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Böngészőjében is beállíthatja a cookie kezelést:
              </p>
              <ul className="text-gray-600 text-sm pl-4 list-disc">
                <li>
                  <strong>Chrome:</strong> Beállítások → Adatvédelem és
                  biztonság → Cookie-k
                </li>
                <li>
                  <strong>Firefox:</strong> Beállítások → Adatvédelem és
                  biztonság
                </li>
                <li>
                  <strong>Safari:</strong> Safari → Preferenciák → Adatvédelem
                </li>
                <li>
                  <strong>Edge:</strong> Beállítások → Cookie-k és webhelyadatok
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Automatizált döntéshozatal */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              5. Automatizált döntéshozatal, profilalkotás
            </h2>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 m-0">
                A Google Ads és Analytics szolgáltatások automatikus
                profilalkotást végezhetnek hirdetési célokból. Ez az Ön
                hozzájárulásán alapul, és bármikor visszavonható a cookie
                beállításoknál.
              </p>
            </div>
          </section>

          {/* 6. Adatbiztonság */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center">
                <Lock className="w-4 h-4 text-[#0d5e4b]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 m-0">
                6. Adatbiztonság
              </h2>
            </div>

            <ul className="space-y-2">
              {[
                "SSL/TLS titkosítás minden adatátvitel során",
                "Hozzáférés-korlátozás: a beérkező megkeresésekhez csak az Adatkezelő fér hozzá",
                "Minimalizált adatkezelés: csak a válaszadáshoz szükséges adatokat kérjük",
                "Rendszeres frissítések és biztonsági beállítások alkalmazása a webes környezetben",
                "Google Consent Mode v2 a cookie-k jogszerű kezeléséhez",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0d5e4b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-[#0d5e4b]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-700 text-sm m-0">
                <strong>Fontos:</strong> az interneten történő adattovábbítás
                teljes biztonsága nem garantálható, de mindent megteszünk a
                kockázatok csökkentése érdekében.
              </p>
            </div>
          </section>

          {/* 6.1 Incidenskezelés */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-[#0d5e4b]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 m-0">
                6.1. Adatvédelmi incidensek kezelése
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-0">
              Adatvédelmi incidens gyanúja esetén haladéktalanul megvizsgáljuk
              az eseményt, megtesszük a szükséges technikai és szervezési
              intézkedéseket, és amennyiben jogszabály alapján szükséges,
              bejelentést teszünk a felügyeleti hatóságnál, valamint értesítjük
              az érintetteket.
            </p>
          </section>

          {/* 7. Adatmegőrzés */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              7. Adatmegőrzés időtartama
            </h2>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-gray-900 font-semibold border-b">
                  <tr>
                    <th className="p-3">Adattípus</th>
                    <th className="p-3">Megőrzési idő</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3">Kapcsolatfelvételi űrlap adatai</td>
                    <td className="p-3">
                      3 hónap (utolsó üzenetváltástól számítva)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Cookie consent preferenciák</td>
                    <td className="p-3">1 év</td>
                  </tr>
                  <tr>
                    <td className="p-3">Google Analytics adatok</td>
                    <td className="p-3">26 hónap (Google alapbeállítás)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Google Ads konverziós adatok</td>
                    <td className="p-3">
                      90 nap - 24 hónap (cookie típustól függően)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <p className="text-gray-700 text-sm m-0">
                <strong>Kivétel:</strong> ha jogi igény érvényesítése vagy
                védekezés miatt szükséges, az adatokat a szükséges ideig
                megőrizhetjük.
              </p>
            </div>
          </section>

          {/* 8. Érintetti jogok */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-[#0d5e4b]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 m-0">
                8. Az Ön jogai
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              A GDPR alapján Ön az alábbi jogokkal élhet:
            </p>

            <div className="grid gap-2 mb-6">
              {[
                {
                  title: "Hozzáférés joga",
                  desc: "Tájékoztatást kérhet adatai kezeléséről, és másolatot kérhet.",
                },
                {
                  title: "Helyesbítés joga",
                  desc: "Kérheti a pontatlan adatok javítását, kiegészítését.",
                },
                {
                  title: "Törlés joga",
                  desc: "Bizonyos esetekben kérheti adatai törlését (elfeledtetés).",
                },
                {
                  title: "Korlátozás joga",
                  desc: "Kérheti az adatkezelés korlátozását meghatározott esetekben.",
                },
                {
                  title: "Adathordozhatóság joga",
                  desc: "Kérheti adatai géppel olvasható formátumban történő kiadását (ahol alkalmazható).",
                },
                {
                  title: "Hozzájárulás visszavonása",
                  desc: "A hozzájáruláson alapuló adatkezelésnél bármikor visszavonhatja (pl. cookie-k, telefonszám).",
                },
              ].map((right) => {
                return (
                  <div
                    key={right.title}
                    className="flex items-center gap-3 p-3 bg-[#f8faf9] rounded-lg"
                  >
                    <div className="w-2 h-2 bg-[#0d5e4b] rounded-full flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">
                        {right.title}:
                      </span>
                      <span className="text-gray-600 text-sm ml-1">
                        {right.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 bg-[#0d5e4b]/5 border border-[#0d5e4b]/10 rounded-xl mb-6">
              <p className="text-gray-700 text-sm mb-2">
                <strong>Jogai gyakorlásához</strong> írjon a{" "}
                <a
                  href={`mailto:${CONTROLLER.email}`}
                  className="text-[#0d5e4b] underline"
                >
                  {CONTROLLER.email}
                </a>{" "}
                címre. Kérelmét főszabály szerint 30 napon belül teljesítjük.
              </p>
              <p className="text-gray-700 text-sm m-0">
                A kérelem teljesítése előtt – az Ön jogainak védelme érdekében –
                kérhetünk további információt a személyazonosság
                megerősítéséhez.
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Jogorvoslat
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Panasz esetén fordulhat a felügyeleti hatósághoz, illetve bírósági
              jogorvoslattal is élhet.
            </p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-1">
                Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
              </p>
              <p>Cím: 1055 Budapest, Falk Miksa utca 9-11.</p>
              <p>E-mail: ugyfelszolgalat@naih.hu</p>
              <p>Telefon: +36-1-391-1400</p>
              <p>
                Honlap:{" "}
                <a
                  href="https://www.naih.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d5e4b]"
                >
                  www.naih.hu
                </a>
              </p>
            </div>
          </section>

          {/* 9. Adatvédelmi tisztviselő */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              9. Adatvédelmi tisztviselő (DPO)
            </h2>
            <div className="p-4 bg-[#f8faf9] rounded-xl border border-gray-100">
              <p className="text-gray-700 text-sm m-0">
                A jelenlegi adatkezelési tevékenység jellege alapján külön
                adatvédelmi tisztviselő (DPO) kijelölése nem szükséges.
                Amennyiben a tevékenységünk jövőben megváltozik és DPO
                kijelölése kötelezővé válik, a DPO elérhetőségeit itt
                közzétesszük.
              </p>
            </div>
          </section>

          {/* 10. Harmadik féltől származó szolgáltatások */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              10. Harmadik féltől származó szolgáltatások
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              Weboldalunk a következő Google szolgáltatásokat használja:
            </p>

            <div className="grid gap-3 mb-4">
              {[
                {
                  name: "Google Analytics 4",
                  desc: "Weboldal statisztikák és látogatottság elemzése",
                },
                {
                  name: "Google Ads",
                  desc: "Hirdetési kampányok és konverziókövetés",
                },
                {
                  name: "Google Tag Manager",
                  desc: "Tag kezelő rendszer a scriptek központi kezelésére",
                },
              ].map((service) => (
                <div
                  key={service.name}
                  className="flex items-center gap-3 p-3 bg-[#f8faf9] rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#0d5e4b] rounded-full flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {service.name}:
                    </span>
                    <span className="text-gray-600 text-sm ml-1">
                      {service.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 11. Módosítások */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              11. A tájékoztató módosítása
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-0">
              Fenntartjuk a jogot, hogy a tájékoztatót a jogszabályi vagy
              szolgáltatási változásokhoz igazítsuk. A módosított tájékoztató a
              weboldalon történő közzététellel lép hatályba.
            </p>
          </section>

          {/* Kapcsolat CTA */}
          <section className="bg-[#0d5e4b] rounded-2xl p-6 md:p-8 text-center shadow-lg">
            <h2 className="text-xl font-bold text-white mb-3 mt-0">
              Kérdése van?
            </h2>
            <p className="text-white/70 mb-6 text-sm">
              Adatkezeléssel kapcsolatos kérdéseivel forduljon hozzánk
              bizalommal.
            </p>
            <a
              href={`mailto:${CONTROLLER.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0d5e4b] font-semibold rounded-xl hover:bg-emerald-50 transition-colors no-underline shadow-md"
            >
              <Mail className="w-5 h-5" />
              {CONTROLLER.email}
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
