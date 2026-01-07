// components/blog/posts/EtteremForgalomNoveles.tsx
import Link from "next/link";

export default function EtteremForgalomNovelesPost() {
  return (
    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0d5e4b] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-[#0d5e4b]">
      {/* Bevezető szekció - SEO: H1-ben a fő ígéret + módszer */}
      <div className="bg-gradient-to-br from-[#0d5e4b]/5 to-emerald-50 rounded-2xl p-8 md:p-10 mb-12 border border-[#0d5e4b]/10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-0">
          Hogyan növeld 40%-kal éttermed forgalmát online asztalfoglalással?
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Az online foglalási rendszer nem csupán kényelmi funkció, hanem egy
          mérhető
          <strong className="text-[#0d5e4b]"> üzleti növekedési eszköz</strong>.
          Partnereink adatai alapján egy profi szoftver bevezetése után
          átlagosan <strong>30-40%-kal növekszik a vendégszám</strong> már az
          első negyedévben.
        </p>
      </div>

      {/* Statisztikák - SVG Ikonokkal */}
      <div className="my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Miért generál több bevételt az automatizálás?
        </h3>

        <div className="grid md:grid-cols-2 gap-6 not-prose">
          {/* 24/7 Kártya */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-600">
                  Foglalás fogadása zárva tartáskor is – éjjel és hétvégén
                </div>
              </div>
            </div>
          </div>

          {/* 60% Kártya */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">60%</div>
                <div className="text-sm text-gray-600">
                  a foglalásoknak nyitvatartási időn kívül érkezik be
                </div>
              </div>
            </div>
          </div>

          {/* 30 mp Kártya */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  30 mp
                </div>
                <div className="text-sm text-gray-600">
                  alatt lefoglalható egy asztal online, regisztráció nélkül
                </div>
              </div>
            </div>
          </div>

          {/* 40% Kártya */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0d5e4b] mb-1">
                  40%
                </div>
                <div className="text-sm text-gray-600">
                  átlagos forgalomnövekedés a rendszer bevezetése után
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        1. Elérhetőség 24/7: Ne veszíts vendéget zárás után
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A modern vendégek ritmusához igazodva az éttermednek akkor is
        elérhetőnek kell lennie, amikor a személyzet már hazament. Ha csak
        telefonon vagy elérhető, minden nem fogadott hívás egy{" "}
        <strong className="text-red-600">elvesztett üzleti lehetőség</strong>.
      </p>

      {/* Testimonial */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 my-10 border border-gray-200 not-prose">
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed">
          "A foglalások{" "}
          <strong className="text-[#0d5e4b] not-italic">
            60%-a délután 10 után érkezik
          </strong>{" "}
          – amikor amúgy zárva vagyunk. Ezt a forgalmat telefonnal soha nem
          tudtuk volna elérni, fizikailag lehetetlen lenne."
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0d5e4b] rounded-full flex items-center justify-center text-white font-bold text-lg">
            SJ
          </div>
          <div>
            <div className="font-bold text-gray-900">Simon János</div>
            <div className="text-sm text-gray-600">
              Trattoria Tulajdonos, Szeged
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        2. Azonnali foglalás = Magasabb konverzió
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A vendégek a legkisebb ellenállás felé mennek. A{" "}
        <Link
          href="/hu/funkciok/mobilbarat-felulet"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          mobilbarát felület
        </Link>{" "}
        biztosítja, hogy a látogatóból azonnal foglalás legyen, ne pedig egy
        "majd később visszahívom őket" gondolat.
      </p>

      {/* Összehasonlítás - Tiszta Design */}
      <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
        {/* Telefonos oszlop */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <h3 className="font-bold text-gray-700">Hagyományos módszer</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {[
                "Csak nyitvatartási időben",
                "Foglalt vonal = elveszett vendég",
                "Gyakori félreértések (név, idő)",
                "Nincs azonnali írásos visszaigazolás",
                "Átlagosan 3-5 perc / foglalás",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Online oszlop */}
        <div className="bg-white rounded-xl overflow-hidden border-2 border-[#0d5e4b]/20 shadow-lg relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-[#0d5e4b]"></div>
          <div className="bg-[#0d5e4b]/5 p-4 border-b border-[#0d5e4b]/10 flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 text-[#0d5e4b]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="font-bold text-[#0d5e4b]">Online Rendszer</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {[
                "24/7 elérhetőség (alvás közben is)",
                "Azonnali, automatikus rögzítés",
                "100% pontos adatok",
                "Professzionális visszaigazolás",
                "30 másodperc / foglalás",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-800 font-medium"
                >
                  <svg
                    className="w-5 h-5 text-[#0d5e4b] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        3. Marketing és No-Show Csökkentés
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Az{" "}
        <Link
          href="/hu/funkciok/automatikus-emlekeztetok"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          automatikus email emlékeztetők
        </Link>{" "}
        kettős célt szolgálnak: 70%-kal csökkentik a meg nem jelenéseket, és
        egyben
        <strong className="text-[#0d5e4b]"> marketing felületként</strong> is
        működnek, ahol bemutathatod az aktuális ajánlataidat.
      </p>

      {/* Email benefits - Icons */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm my-10 not-prose">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <svg
            className="w-6 h-6 text-[#0d5e4b]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Mit tartalmaz egy profi visszaigazoló email?
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "calendar", text: "Pontos foglalási adatok" },
            { icon: "map", text: "Térkép és útvonaltervezés" },
            { icon: "book-open", text: "Link a digitális étlaphoz" },
            { icon: "photograph", text: "Hangulatkeltő ételfotók" },
            { icon: "star", text: "Különleges ajánlatok kiemelése" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-[#0d5e4b]">
                {/* Egyszerűsített ikon renderelés a példa kedvéért */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium text-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        4. Modern Vendégélmény QR-kóddal
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A{" "}
        <Link
          href="/hu/funkciok/qr-kod-bejelentkezes"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          QR-kódos check-in
        </Link>{" "}
        profizmust sugároz. A vendégek látják, hogy az éttermed technológiailag
        fejlett, ami növeli a bizalmat és az elégedettséget.
      </p>

      {/* Profi tipp */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 my-12 border border-purple-100 not-prose">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-purple-900 mb-2">
              Vendégmegtartási tipp
            </h3>
            <p className="text-purple-800/90 leading-relaxed text-sm">
              A zökkenőmentes érkezés az első benyomás kulcsa. Egy gyors
              QR-kódos beléptetés
              <strong> 15-20%-kal növeli az újrafoglalási hajlandóságot</strong>
              , mert a vendég érzi: itt tisztelik az idejét.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        5. Kapacitásoptimalizálás = Több Bevétel
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A{" "}
        <Link
          href="/hu/funkciok/asztalterkep"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          digitális asztaltérkép
        </Link>{" "}
        segítségével kiküszöbölheted az "üresjáratokat" és a rosszul szervezett
        asztalokat. A rendszer optimalizálja a helykihasználást.
      </p>

      {/* Optimization cards */}
      <div className="grid md:grid-cols-3 gap-6 not-prose my-10">
        {[
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            ),
            title: "Gyorsabb forgás",
            desc: "Optimális asztalfoglalási idők",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            ),
            title: "Maximális kihasználtság",
            desc: "Intelligens asztalkombinálás",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
              />
            ),
            title: "Valós idejű adatok",
            desc: "Azonnali áttekintés a telítettségről",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-xl p-6 border border-blue-100 text-center hover:bg-blue-100 transition-colors"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {item.icon}
              </svg>
            </div>
            <div className="font-bold text-gray-900 mb-1">{item.title}</div>
            <div className="text-sm text-gray-600">{item.desc}</div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        6. Integráció: Google és Social Media
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Tedd lehetővé a foglalást ott, ahol a vendégeid megtalálnak. A "Foglalás
        Most" gomb elhelyezése a Google Business profilodon, Facebook és
        Instagram oldaladon
        <strong className="text-[#0d5e4b]">
          {" "}
          radikálisan lerövidíti a döntési utat
        </strong>
        .
      </p>

      {/* Integration showcase */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 my-10 border border-indigo-100 not-prose">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Google", color: "text-red-500" },
            { label: "Facebook", color: "text-blue-600" },
            { label: "Instagram", color: "text-pink-600" },
            { label: "Weboldal", color: "text-[#0d5e4b]" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col items-center gap-2"
            >
              <div className={`font-bold ${item.color} text-lg`}>
                {item.label}
              </div>
              <div className="text-xs text-gray-400">Integrált foglalás</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 flex items-center justify-center gap-2 text-indigo-900 text-sm font-medium">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Minden platformról egy központi naptárba érkeznek a foglalások
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Számokkal: Mennyit jelent 40% növekedés?
      </h2>

      {/* ROI calculation */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-10 my-10 border border-emerald-100 not-prose">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Példa ROI számítás:
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Napi vendég", val: "50 fő" },
            { label: "Átlagköltés", val: "5.000 Ft" },
            { label: "Napi bevétel", val: "250.000 Ft" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/60 rounded-xl p-4 border border-emerald-100"
            >
              <div className="text-xs text-gray-500 uppercase font-semibold">
                {stat.label}
              </div>
              <div className="font-bold text-gray-900 text-lg">{stat.val}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 border border-emerald-200 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 p-4 opacity-10">
            <svg
              className="w-24 h-24 text-emerald-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
              <path d="M10 10a1 1 0 112 0v5a1 1 0 11-2 0v-5zm1-3a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </div>

          <div className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-2">
            Eredmény a digitalizáció után
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">
                +20 vendég
                <span className="text-base text-gray-400 font-normal">
                  /nap
                </span>
              </div>
              <div className="text-emerald-900 font-medium">
                +100.000 Ft extra bevétel naponta
              </div>
            </div>
            <div className="bg-emerald-100 rounded-lg p-3 text-center">
              <div className="text-emerald-900 text-sm font-semibold">
                Éves többletbevétel:
              </div>
              <div className="text-2xl font-bold text-[#0d5e4b]">
                +36 Millió Ft
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-600 flex items-center justify-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Rendszer költsége mindössze:{" "}
          <strong className="text-[#0d5e4b]">havi 9.990 Ft</strong> (az extra
          bevétel 0.3%-a!)
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Hogyan Kezdj Neki a Bevezetésnek?
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A forgalomnövelés 4 egyszerű lépésben megvalósítható a rendszerünkkel:
      </p>

      {/* 4 step plan - Timeline style */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm my-10 not-prose">
        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {[
            {
              week: "1. hét",
              task: "Online foglalás aktiválása",
              desc: "Google Business, Facebook, Instagram linkek elhelyezése",
            },
            {
              week: "2. hét",
              task: "Automatikus kommunikáció",
              desc: "Visszaigazoló és emlékeztető emailek beállítása",
            },
            {
              week: "3. hét",
              task: "Vendégélmény modernizálása",
              desc: "QR-kódos érkeztetés bevezetése a bejáratnál",
            },
            {
              week: "4. hét",
              task: "Bevételoptimalizálás",
              desc: "Dinamikus időszabályok finomhangolása a statisztikák alapján",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active pb-8 last:pb-0"
            >
              {/* Icon dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#0d5e4b] shadow flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>

              <div className="w-full md:w-[calc(50%-2rem)] pl-16 md:pl-0 md:pr-10 md:text-right md:group-odd:pl-10 md:group-odd:text-left">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 group-hover:border-[#0d5e4b]/30 transition-colors">
                  <div className="text-xs uppercase tracking-wider text-[#0d5e4b] font-bold mb-1">
                    {step.week}
                  </div>
                  <div className="font-bold text-gray-900 mb-1">
                    {step.task}
                  </div>
                  <div className="text-sm text-gray-600">{step.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Összefoglalás
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Az online foglalási rendszer bevezetése{" "}
        <strong className="text-[#0d5e4b]">
          az egyik legmagasabb megtérülésű befektetés
        </strong>
        , amit egy étterem tehet. 40%-os forgalomnövekedés, drasztikusan
        csökkenő no-show, és modern vendégélmény - mindez egyetlen szoftverrel.
      </p>

      {/* Final checklist */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm my-10 not-prose">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <svg
            className="w-6 h-6 text-[#0d5e4b]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Miért éri meg belevágni?
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "24/7 elérhetőség = több foglalás",
            "Automatikus marketing (emlékeztetők)",
            "Modern, profi megjelenés a vendégek felé",
            "Optimalizált asztalforgatás",
            "Átlagosan 40% forgalomnövekedés",
            "ROI: 300-400x megtérülés",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-5 h-5 bg-[#0d5e4b] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-white"
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
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Záró CTA */}
      <div className="bg-[#0d5e4b] rounded-2xl p-10 text-center my-12 not-prose shadow-xl shadow-[#0d5e4b]/20">
        <p className="text-2xl md:text-3xl font-bold text-white mb-4">
          Növeld a forgalmat még ma!
        </p>
        <p className="text-emerald-100 mb-8 text-lg">
          30 napos ingyenes próba - látsd az eredményt a saját szemeddel
        </p>
        <Link
          href="#demo"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0d5e4b] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
        >
          Ingyenes próba indítása
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
