import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Adatkezelési Tájékoztató | FoglaljOnline",
  description:
    "A FoglaljOnline adatkezelési tájékoztatója a GDPR előírásainak megfelelően.",
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
                Utolsó frissítés: 2025. január
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Adatkezelő adatai */}
        <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
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

        {/* Content sections */}
        <div className="prose prose-gray max-w-none">
          {/* 1. GDPR */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              1. Általános fogalmak
            </h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              1.1 GDPR
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Az Általános Adatvédelmi Rendelet (GDPR) az Európai Unióban (EU)
              és az Európai Gazdasági Térségben (EGT) élő személyek
              adatvédelméről és magánéletének védelméről szóló uniós
              jogrendelet. Kitér a személyes adatok EU-n és EGT-n kívüli
              exportjára is.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A GDPR célja, hogy az egyének nagyobb ellenőrzést biztosítsanak
              személyes adataik felett, és harmonizálják az adatvédelmi
              jogszabályokat az EU-ban.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              1.2 GDPR általános fogalmak
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-[#f8faf9] rounded-xl">
                <p className="font-semibold text-gray-900 mb-1">
                  Személyes adat
                </p>
                <p className="text-gray-600 text-sm">
                  Minden olyan információ, amely egy azonosított vagy
                  azonosítható természetes személlyel kapcsolatos. Ez magában
                  foglalja a neveket, címeket, e-mail címeket és minden egyéb
                  személyes adatot.
                </p>
              </div>
              <div className="p-4 bg-[#f8faf9] rounded-xl">
                <p className="font-semibold text-gray-900 mb-1">Érintett</p>
                <p className="text-gray-600 text-sm">
                  Az a természetes személy, akinek személyes adatait kezelik. A
                  GDPR számos jogot biztosít az érintettek számára.
                </p>
              </div>
              <div className="p-4 bg-[#f8faf9] rounded-xl">
                <p className="font-semibold text-gray-900 mb-1">Adatkezelés</p>
                <p className="text-gray-600 text-sm">
                  Minden olyan művelet vagy műveletsor, amelyet a személyes
                  adatokon hajtanak végre, mint például gyűjtés, felhasználás,
                  nyilvánosságra hozatal vagy megsemmisítés.
                </p>
              </div>
              <div className="p-4 bg-[#f8faf9] rounded-xl">
                <p className="font-semibold text-gray-900 mb-1">Adatkezelő</p>
                <p className="text-gray-600 text-sm">
                  Az a természetes vagy jogi személy, aki meghatározza a
                  személyes adatok kezelésének céljait és eszközeit.
                </p>
              </div>
              <div className="p-4 bg-[#f8faf9] rounded-xl">
                <p className="font-semibold text-gray-900 mb-1">Hozzájárulás</p>
                <p className="text-gray-600 text-sm">
                  Az érintett akaratának önkéntes, konkrét, tájékozott és
                  félreérthetetlen kinyilvánítása a személyes adatok
                  kezeléséhez.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Személyes adatok gyűjtése */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              2. Személyes adatok gyűjtése
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Személyes adatokat gyűjthetünk a látogatóktól (érintett), amikor
              azok a weboldalunkon található kapcsolatfelvételi űrlapot vagy
              foglalási rendszert használják.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              Az általunk gyűjtött személyes adatok:
            </p>
            <ul className="list-none p-0 m-0 space-y-2">
              {[
                "Név",
                "E-mail cím",
                "Telefonszám",
                "Étterem neve (opcionális)",
                "Üzenet tartalma",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0d5e4b]/10 flex items-center justify-center flex-shrink-0">
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

          {/* 3. Adatkezelés jogalapja */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              3. Adatkezelés jogalapja
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Az érintett hozzájárulási nyilatkozata a kapcsolatfelvételi űrlap
              kitöltése során. A foglalási rendszer használata esetén a
              szolgáltatás nyújtásához szükséges adatkezelés jogalapja a
              szerződés teljesítése.
            </p>
          </section>

          {/* 4. Adatok felhasználása */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              4. A személyes adatok felhasználása
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Az általunk gyűjtött személyes adatokat az alábbi célokra
              használjuk:
            </p>
            <ul className="list-none p-0 m-0 space-y-2">
              {[
                "Kapcsolatfelvételi űrlapon érkező üzenetek megválaszolása",
                "Foglalási szolgáltatás nyújtása",
                "Foglalással kapcsolatos értesítések küldése",
                "Ügyfélszolgálati támogatás biztosítása",
                "Szolgáltatás fejlesztése",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0d5e4b]/10 flex items-center justify-center flex-shrink-0">
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
            <p className="text-gray-600 leading-relaxed mt-4">
              A személyes adatokat nem osztjuk meg harmadik felekkel, kivéve, ha
              azt a törvény előírja.
            </p>
          </section>

          {/* 5. Adatmegőrzés */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              5. Adatmegőrzés
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A személyes adatokat addig őrizzük meg, amíg az ügyfél által kért
              szolgáltatások nyújtásához és a jogi kötelezettségek
              teljesítéséhez szükséges.
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 text-sm">
                <strong>Fontos:</strong> A kapcsolatfelvételi űrlapon keresztül
                érkező üzeneteket, beleértve minden megadott adatot (név, e-mail
                cím, telefonszám) <strong>3 hónapon belül</strong> véglegesen
                töröljük, amennyiben nem jön létre üzleti kapcsolat.
              </p>
            </div>
          </section>

          {/* 6. Adatbiztonság */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              6. Adatbiztonság
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Személyes adatai korlátozott hozzáférésű, ellenőrzött
              létesítményekben elhelyezett szervereken kerülnek tárolásra.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Számos technológia és eljárás kerül alkalmazásra annak érdekében,
              hogy személyes adatai védve legyenek a visszaéléstől, jogosulatlan
              hozzáféréstől, nyilvánosságra hozataltól és megváltoztatástól. Az
              Ön személyes adatainak védelme érdekében ésszerű óvintézkedéseket
              teszünk, és követjük az iparág legjobb gyakorlatait.
            </p>
          </section>

          {/* 7. Érintettek jogai */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              7. Az érintettek jogai
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A GDPR értelmében az érintettek a következő jogokkal rendelkeznek:
            </p>
            <div className="grid gap-3">
              {[
                {
                  title: "Tájékoztatáshoz való jog",
                  desc: "Joguk van arra, hogy tájékoztatást kapjanak személyes adataik gyűjtéséről és felhasználásáról.",
                },
                {
                  title: "Hozzáféréshez való jog",
                  desc: "A személyes adataikhoz való hozzáférés joga.",
                },
                {
                  title: "Helyesbítéshez való jog",
                  desc: "A személyes adataik helyesbítéséhez való jog.",
                },
                {
                  title: "Törléshez való jog",
                  desc: "Személyes adataik törléséhez való jog „elfeledtetéshez való jog",
                },
                {
                  title: "Korlátozáshoz való jog",
                  desc: "Személyes adataik feldolgozásának korlátozásához való jog.",
                },
                {
                  title: "Adathordozhatósághoz való jog",
                  desc: "Az adathordozhatósághoz való jog.",
                },
                {
                  title: "Tiltakozáshoz való jog",
                  desc: "A személyes adatok feldolgozása elleni tiltakozáshoz való jog.",
                },
              ].map((right) => (
                <div key={right.title} className="p-4 bg-[#f8faf9] rounded-xl">
                  <p className="font-semibold text-gray-900 mb-1">
                    {right.title}
                  </p>
                  <p className="text-gray-600 text-sm">{right.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Ha ezen jogok bármelyikével élni kíván, kérjük, lépjen kapcsolatba
              velünk a weboldalon elhelyezett kapcsolatfelvételi űrlap
              segítségével vagy a{" "}
              <a
                href="mailto:hello@foglaljonline.hu"
                className="text-[#0d5e4b] font-medium hover:underline"
              >
                hello@foglaljonline.hu
              </a>{" "}
              email címen.
            </p>
          </section>

          {/* 8. Módosítások */}
          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">
              8. A jelen adatvédelmi szabályzat módosításai
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Időről időre frissíthetjük ezt az adatvédelmi szabályzatot.
              Javasoljuk a felhasználóknak, hogy rendszeresen tekintsék át ezt
              az adatvédelmi szabályzatot a frissítések miatt.
            </p>
          </section>

          {/* Kapcsolat */}
          <section className="bg-[#0d5e4b] rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3 mt-0">
              Kérdése van?
            </h2>
            <p className="text-white/70 mb-6">
              Ha bármilyen kérdése van a jelen adatvédelmi irányelvvel vagy a
              személyes adatok kezelésével kapcsolatban, vegye fel velünk a
              kapcsolatot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@foglaljonline.hu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0d5e4b] font-semibold rounded-xl hover:bg-emerald-50 transition-colors no-underline"
              >
                <Mail className="w-5 h-5" />
                hello@foglaljonline.hu
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors no-underline"
              >
                Kapcsolatfelvétel
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
