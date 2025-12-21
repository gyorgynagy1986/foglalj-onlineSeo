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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Adatkezelési Tájékoztató | FoglaljOnline",
  description:
    "A FoglaljOnline adatkezelési tájékoztatója a GDPR és az Infotv. előírásainak megfelelően.",
};

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
                Hatályos: 2025. január 1-től visszavonásig
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
                <p className="font-semibold text-gray-900">Nagy György EV.</p>
                <p className="text-gray-600 text-sm">Adószám: 59721639-1-26</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#0d5e4b]" />
              </div>
              <div>
                <p className="text-gray-600">6726 Szeged, Pillich K. u. 41.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#0d5e4b]" />
              </div>
              <div>
                <a
                  href="mailto:hello@foglaljonline.hu"
                  className="text-[#0d5e4b] font-medium hover:underline"
                >
                  hello@foglaljonline.hu
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
                  +36 30 656 4162
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Jogi szövegek */}
        <div className="prose prose-gray max-w-none">
          {/* 1. Általános fogalmak */}
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
          </section>

          {/* 2. Kezelt adatok köre */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              2. A kezelt adatok köre és célja
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
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3">Név</td>
                    <td className="p-3">Megszólítás, azonosítás</td>
                    <td className="p-3 text-xs">Hozzájárulás (GDPR 6(1)a)</td>
                  </tr>
                  <tr>
                    <td className="p-3">E-mail cím</td>
                    <td className="p-3">Kapcsolatfelvétel, válaszadás</td>
                    <td className="p-3 text-xs">Hozzájárulás (GDPR 6(1)a)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Telefonszám</td>
                    <td className="p-3">Kapcsolatfelvétel</td>
                    <td className="p-3 text-xs">Hozzájárulás (GDPR 6(1)a)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Étterem neve (opcionális)</td>
                    <td className="p-3">Személyre szabott ajánlat</td>
                    <td className="p-3 text-xs">Hozzájárulás (GDPR 6(1)a)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Üzenet tartalma</td>
                    <td className="p-3">Kérdés/igény megértése</td>
                    <td className="p-3 text-xs">Hozzájárulás (GDPR 6(1)a)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-[#0d5e4b]/5 rounded-xl border border-[#0d5e4b]/10">
              <p className="text-gray-700 text-sm">
                <strong>Az adatkezelés célja kizárólag:</strong> Az Ön
                megkeresésére történő válaszadás és kapcsolatfelvétel. Az
                adatokat harmadik félnek nem adjuk át, marketing célra nem
                használjuk.
              </p>
            </div>
          </section>

          {/* 3. Adatfeldolgozó */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center">
                <Server className="w-4 h-4 text-[#0d5e4b]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 m-0">
                3. Adatfeldolgozó
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              A kapcsolatfelvételi űrlap adatainak továbbításához az alábbi
              szolgáltatót vesszük igénybe:
            </p>

            <div className="p-4 bg-[#f8faf9] rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 mb-2">E-mail küldés</p>
              <p className="text-gray-600 text-sm mb-3">
                <strong>Szolgáltató:</strong> Resend, Inc.
                <br />
                <strong>Adattárolás helye:</strong> Európai Unió (Írország,
                eu-west-1 régió)
              </p>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-emerald-800 text-sm">
                  A Resend GDPR-kompatibilis szolgáltató, az adatok kizárólag
                  EU-n belül kerülnek tárolásra.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Sütik */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center">
                <Cookie className="w-4 h-4 text-[#0d5e4b]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 m-0">
                4. Sütik (Cookies)
              </h2>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
              <p className="text-emerald-800 font-medium">
                A weboldal nem használ sütiket.
              </p>
              <p className="text-emerald-700/80 text-sm mt-1">
                Nem helyezünk el cookie-t, local storage-t vagy egyéb nyomkövető
                technológiát az Ön eszközén. Nem végzünk profilalkotást.
              </p>
            </div>
          </section>

          {/* 5. Automatizált döntéshozatal */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              5. Automatizált döntéshozatal
            </h2>
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
              <p className="text-emerald-800">
                Nem alkalmazunk automatizált döntéshozatalt vagy profilalkotást
                (GDPR 22. cikk).
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
                "Adatok tárolása kizárólag EU-n belüli szervereken",
                "Hozzáférés kizárólag az Adatkezelő részére",
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
          </section>

          {/* 7. Adatmegőrzés */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              7. Adatmegőrzés időtartama
            </h2>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800">
                A kapcsolatfelvételi űrlapon megadott adatokat az utolsó
                üzenetváltástól számított <strong>3 hónapig</strong> őrizzük
                meg, amennyiben nem jön létre üzleti kapcsolat. Ezt követően az
                adatokat véglegesen töröljük.
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
                  desc: "Tájékoztatást kérhet adatai kezeléséről",
                },
                {
                  title: "Helyesbítés joga",
                  desc: "Kérheti pontatlan adatai javítását",
                },
                { title: "Törlés joga", desc: "Kérheti adatai törlését" },
                {
                  title: "Korlátozás joga",
                  desc: "Kérheti az adatkezelés korlátozását",
                },
                {
                  title: "Adathordozhatóság joga",
                  desc: "Kérheti adatai géppel olvasható formátumban",
                },
                {
                  title: "Hozzájárulás visszavonása",
                  desc: "Bármikor, indokolás nélkül visszavonhatja",
                },
              ].map((right) => (
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
              ))}
            </div>

            <div className="p-4 bg-[#0d5e4b]/5 border border-[#0d5e4b]/10 rounded-xl mb-6">
              <p className="text-gray-700 text-sm">
                <strong>Jogai gyakorlásához</strong> írjon a{" "}
                <a
                  href="mailto:hello@foglaljonline.hu"
                  className="text-[#0d5e4b] underline"
                >
                  hello@foglaljonline.hu
                </a>{" "}
                címre. Kérelmét 30 napon belül teljesítjük.
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Jogorvoslat
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Panasz esetén fordulhat a felügyeleti hatósághoz:
            </p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-1">
                Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
              </p>
              <p>Cím: 1055 Budapest, Falk Miksa utca 9-11.</p>
              <p>E-mail: ugyfelszolgalat@naih.hu</p>
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
              href="mailto:hello@foglaljonline.hu"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0d5e4b] font-semibold rounded-xl hover:bg-emerald-50 transition-colors no-underline shadow-md"
            >
              <Mail className="w-5 h-5" />
              hello@foglaljonline.hu
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
