// components/blog/posts/NoShowCsokkentes.tsx
import Link from "next/link";

export default function NoShowCsokkentesPost() {
  return (
    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0d5e4b] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-[#0d5e4b]">
      {/* Bevezető szekció - "Pain point" kiemelése */}
      <div className="bg-white rounded-2xl p-8 md:p-10 mb-12 border-2 border-red-100 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-5 -mr-10 -mt-10 pointer-events-none">
          <svg
            className="w-64 h-64 text-red-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-0 relative z-10">
          Mennyibe kerül valójában egy üres asztal?
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6 relative z-10">
          A no-show (meg nem jelenés) az éttermi iparág "csendes gyilkosa".
          Statisztikák szerint átlagosan{" "}
          <strong className="text-red-600">15-20% a no-show arány</strong> – ez
          azt jelenti, hogy <strong>minden 5. foglalás</strong> bevétel nélkül
          foglalja a helyet.
        </p>

        <div className="bg-red-50 rounded-xl p-6 border border-red-100 mb-0 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-600">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 tracking-tight">
                2.160.000 Ft
              </div>
              <div className="text-sm text-red-800 font-medium">
                éves veszteség egy átlagos étteremnél
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-0 border-t border-red-200 pt-4 mt-2">
            A jó hír: modern szoftveres megoldásokkal ez a szám{" "}
            <strong className="text-[#0d5e4b]">
              akár 70%-kal csökkenthető
            </strong>
            . Íme a 7 leghatékonyabb módszer.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        1. Automatikus Email Emlékeztetők
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Az{" "}
        <Link
          href="/hu/funkciok/automatikus-emlekeztetok"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          automatikus email emlékeztetők
        </Link>{" "}
        jelentik az első védvonalat. Sok vendég nem rosszindulatból nem jön el,
        egyszerűen csak elfelejti. Egy időzített emlékeztető{" "}
        <strong className="text-[#0d5e4b]">60-70%-kal csökkenti</strong> a
        mulasztásokat.
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
          "Mióta automatikus emlékeztetőket küldünk 24 órával a foglalás előtt,
          a no-show arányunk{" "}
          <strong className="text-[#0d5e4b] not-italic">
            18%-ról tartósan 5% alá csökkent
          </strong>
          . Rengeteg bosszúságtól kíméltük meg magunkat."
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0d5e4b] rounded-full flex items-center justify-center text-white font-bold text-lg">
            NP
          </div>
          <div>
            <div className="font-bold text-gray-900">Nagy Péter</div>
            <div className="text-sm text-gray-600">Étteremvezető, Debrecen</div>
          </div>
        </div>
      </div>

      {/* Email workflow */}
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
          Az ideális kommunikációs folyamat:
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Azonnali Visszaigazolás",
              desc: "A foglalás pillanatában (biztonságérzet)",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
            },
            {
              title: "Emlékeztető",
              desc: "24 órával az időpont előtt (memóriafrissítés)",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
            },
            {
              title: "Lemondási link",
              desc: "Minden üzenetben könnyen elérhető helyen",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              ),
            },
            {
              title: "Visszajelzés kérés",
              desc: "A látogatás után másnap (hűségépítés)",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="text-[#0d5e4b] bg-white p-2 rounded-lg shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {item.icon}
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        2. SMS Értesítések: A biztos célba érés
      </h2>

      <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 my-10 not-prose">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 text-center md:text-left">
            <div className="text-5xl font-bold text-blue-600 mb-1">98%</div>
            <div className="text-sm text-blue-800 font-medium uppercase tracking-wide">
              Megnyitási arány
            </div>
          </div>
          <div className="flex-1 border-l-0 md:border-l border-blue-200 md:pl-6">
            <p className="text-blue-900 mb-4 text-sm md:text-base">
              Míg az emailek elveszhetnek a promóciók között, az SMS-t szinte
              mindenki azonnal elolvassa. Rövid, tömör és hatékony.
            </p>
            <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm relative">
              <div className="absolute -top-2 -left-2 bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Példa SMS
              </div>
              <p className="text-sm text-gray-600 font-mono mb-0 mt-1">
                "Szia! Holnap 18:00-kor várunk az X Étteremben. Ha mégsem tudsz
                jönni, kérlek mondd le egy kattintással: [link]. Üdv, X Csapata"
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        3. Online Lemondás Egyszerűsítése
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Paradoxonnak tűnhet, de{" "}
        <strong className="text-[#0d5e4b]">
          ha megkönnyíted a lemondást, kevesebb lesz az üres asztalod
        </strong>
        . Ha a vendégnek telefonálnia kell a lemondáshoz, inkább nem szól. Ha
        egy gombnyomás az egész, időben jelez, és te újra értékesítheted az
        asztalt.
      </p>

      {/* Lemondási funkciók */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm my-10 not-prose">
        <div className="space-y-4">
          {[
            "Emailben és SMS-ben küldött 'egy klikkes' lemondási link",
            "Személyre szabott foglalás-kezelő felület vendégeknek",
            "Nincs szükség regisztrációra vagy belépésre a módosításhoz",
            "Automatikus értesítés a személyzetnek a felszabadult helyről",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
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

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        4. QR-kódos Rendszer Pszichológiája
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A{" "}
        <Link
          href="/hu/funkciok/qr-kod-bejelentkezes"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          QR-kódos rendszer
        </Link>{" "}
        pszichológiailag elkötelezi a vendéget. Ha kapnak egy "belépőjegyet" (a
        QR kódot), az agyunk tudat alatt nagyobb értéket tulajdonít az
        eseménynek.
      </p>

      <div className="grid md:grid-cols-3 gap-4 not-prose my-10">
        {[
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            ),
            title: "Belépőjegy hatás",
            desc: "A kód értéket képvisel",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            ),
            title: "Birtoklási vágy",
            desc: "A letöltéssel 'megszerezte'",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            ),
            title: "Ellenőrzöttség",
            desc: "Tudja, hogy a rendszer várja",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-purple-50 rounded-xl p-6 border border-purple-100 text-center hover:bg-purple-100 transition-colors"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm">
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
        5. Foglalási Biztosíték és Előleg
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Nagyobb csoportoknál (8+ fő) vagy kiemelt napokon (Valentin-nap,
        Szilveszter) az előleg vagy bankkártya-garancia kérése iparági
        standarddá vált.
      </p>

      {/* Előleg típusok */}
      <div className="grid md:grid-cols-3 gap-6 not-prose my-10">
        {[
          {
            title: "Fix összeg",
            desc: "pl. 5.000 Ft/fő levonása",
            icon: "cash",
          },
          {
            title: "Kártya garancia",
            desc: "Csak no-show esetén terhel",
            icon: "credit-card",
          },
          {
            title: "Százalékos",
            desc: "A végösszegből jóváírva",
            icon: "chart-pie",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 mb-4 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-[#0d5e4b] group-hover:text-white transition-colors">
              {/* Simplified icon logic for example */}
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="font-bold text-gray-900 mb-2">{item.title}</div>
            <div className="text-sm text-gray-600">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Profi tipp */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 my-12 border border-amber-200 not-prose">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
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
            <h3 className="text-lg font-bold text-amber-900 mb-2">
              Profi tipp
            </h3>
            <p className="text-amber-800/90 leading-relaxed text-sm">
              Tapasztalataink szerint már{" "}
              <strong>az előleg lehetőségének említése</strong> is
              <strong className="text-amber-900"> 80%-kal csökkenti</strong> a
              komolytalan foglalásokat, még akkor is, ha végül nem érvényesíted
              a terhelést. A pszichológiai gát a lényeg.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        6. A Törzsvendég Stratégia
      </h2>

      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-10 my-10 border border-emerald-100 not-prose">
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-emerald-600 mb-2 tracking-tight">
            90%
          </div>
          <p className="text-lg text-emerald-900 font-medium">
            Az ismétlődő vendégek <strong>90%-kal ritkábban</strong> maradnak
            távol bejelentés nélkül.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {[
            { text: "Személyre szabott hírlevelek" },
            { text: "Automatikus születésnapi kedvezmény" },
            { text: "Visszatérő vendég felismerése" },
            { text: "Digitális hűségprogram" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-emerald-100 flex items-center gap-3 shadow-sm"
            >
              <div className="text-emerald-500">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
        Megtérülési Számítás (ROI)
      </h2>

      {/* Számítás - Highlighted */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg my-10 not-prose relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-emerald-500"></div>

        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Mennyi pénzt hagysz az asztalon?
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">
              Jelenlegi helyzet
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Heti no-show (3 asztal)</span>
              <span className="font-bold text-red-500">-45.000 Ft</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Havi veszteség</span>
              <span className="font-bold text-red-500">-180.000 Ft</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-900 font-bold">
                Éves bevételkiesés
              </span>
              <span className="font-bold text-red-600 text-lg">
                2.160.000 Ft
              </span>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 flex flex-col justify-center text-center">
            <div className="text-sm text-emerald-800 font-medium mb-2">
              Rendszerünkkel (70% csökkenés):
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-1">
              1.512.000 Ft
            </div>
            <div className="text-emerald-900 text-sm font-bold uppercase tracking-wider">
              Megmentett éves bevétel
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
          A szoftver éves díja: 119.880 Ft. <br className="md:hidden" />
          <strong>A befektetés megtérülése (ROI): 12x-es!</strong>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        4 hetes bevezetési terv
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Nem kell egyszerre mindent bevezetned. Haladj lépésről lépésre a biztos
        sikerért:
      </p>

      {/* 4 hetes terv - Timeline */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm my-10 not-prose">
        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {[
            {
              week: "1. hét",
              task: "Online foglalás & Automatikus emailek",
              desc: "Az alapok beállítása, azonnali visszaigazolások",
            },
            {
              week: "2. hét",
              task: "Emlékeztetők finomhangolása",
              desc: "SMS és email időzítések tesztelése (24h vs 48h)",
            },
            {
              week: "3. hét",
              task: "Online lemondás egyszerűsítése",
              desc: "Lemondási okok bekérése a fejlesztéshez",
            },
            {
              week: "4. hét",
              task: "Biztosítékok bevezetése",
              desc: "Csak a kiemelt időszakokra vagy nagy csoportoknál",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active pb-8 last:pb-0"
            >
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

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Összegzés</h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        A no-show elleni harc nem szélmalomharc. A megfelelő digitális
        eszközökkel
        <strong className="text-[#0d5e4b]">
          {" "}
          minimalizálhatod a veszteséget
        </strong>
        , és kiszámíthatóbbá teheted az üzleted működését.
      </p>

      {/* Záró CTA */}
      <div className="bg-[#0d5e4b] rounded-2xl p-10 text-center my-12 not-prose shadow-xl shadow-[#0d5e4b]/20">
        <p className="text-2xl md:text-3xl font-bold text-white mb-4">
          Spórolj meg évi 1.5 millió forintot!
        </p>
        <p className="text-emerald-100 mb-8 text-lg">
          Indítsd el a 30 napos ingyenes próbát, és csökkentsd a no-show arányt
          azonnal.
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
