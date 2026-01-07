// components/blog/posts/EtteremDigitalizacio.tsx
import Link from "next/link";

export default function EtteremDigitalizacioPost() {
  return (
    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0d5e4b] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-[#0d5e4b]">
      {/* Bevezető szekció - SEO: H1-ben a fő kulcsszó + Szoftver említése */}
      <div className="bg-gradient-to-br from-[#0d5e4b]/5 to-emerald-50 rounded-2xl p-8 md:p-10 mb-12 border border-[#0d5e4b]/10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-0">
          Miért elengedhetetlen egy online asztalfoglaló rendszer 2025-ben?
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Az éttermi iparág gyorsan változik. A vendégek már nem telefonálgatnak
          – elvárják az azonnali, online visszaigazolást. Ha éttermed nem
          rendelkezik
          <strong className="text-[#0d5e4b]">
            {" "}
            modern vendégkezelő szoftverrel
          </strong>
          , a konkurenciához küldöd a potenciális vendégeket.
        </p>
      </div>

      {/* Statisztikák - Kártyák */}
      <div className="my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          A számok nem hazudnak:
        </h3>

        <div className="grid md:grid-cols-2 gap-6 not-prose">
          {/* Kártya 1 */}
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">78%</div>
                <div className="text-sm text-gray-600">
                  vendég foglal mobilról
                </div>
              </div>
            </div>
          </div>

          {/* Kártya 2 */}
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">82%</div>
                <div className="text-sm text-gray-600">
                  elvárja az azonnali visszaigazolást
                </div>
              </div>
            </div>
          </div>

          {/* Kártya 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">65%</div>
                <div className="text-sm text-gray-600">
                  lemondja, ha nem tud online foglalni
                </div>
              </div>
            </div>
          </div>

          {/* Kártya 4 */}
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0d5e4b] mb-1">
                  40%
                </div>
                <div className="text-sm text-gray-600">
                  forgalomnövekedés a bevezetés után
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO: H2 kulcsszóra optimalizálva */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        1. Profi Online Asztalfoglaló Rendszer
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Az alapvető lépés egy automatizált foglalási motor beépítése a
        weboldaladra és közösségi médiádba. A vendégek így{" "}
        <strong className="text-[#0d5e4b]">
          bármikor, bárhonnan foglalhatnak
        </strong>{" "}
        – éjjel-nappal, hétvégén is, anélkül, hogy a személyzetet terhelnék.
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
        <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed font-medium">
          "Mióta használjuk az online foglalást,{" "}
          <strong className="text-[#0d5e4b] not-italic">
            40%-kal több vendégünk van
          </strong>
          . A foglalások 60%-a este 10 után érkezik – amikor telefonon már nem
          lennénk elérhetők!"
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0d5e4b] rounded-full flex items-center justify-center text-white font-bold text-lg">
            KI
          </div>
          <div>
            <div className="font-bold text-gray-900">Kovács István</div>
            <div className="text-sm text-gray-600">Tulajdonos, Budapest</div>
          </div>
        </div>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Egy jó éttermi szoftver automatikusan kezeli a kapacitást,
        megakadályozza a túlfoglalást, és{" "}
        <Link
          href="/hu/funkciok/testreszabhato-szabalyok"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          rugalmas nyitvatartási szabályokat
        </Link>{" "}
        támogat.
      </p>

      {/* SEO: H2 + kulcsszó: "Automatikus emlékeztetők" */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        2. Automatikus Email Emlékeztetők
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A no-show (meg nem jelenés) aránya átlagosan <strong>15-20%</strong>. Ez
        hatalmas bevételkiesés! Az{" "}
        <Link
          href="/hu/funkciok/automatikus-emlekeztetok"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          automatikus email emlékeztetők
        </Link>{" "}
        azonban <strong className="text-[#0d5e4b]">70%-kal csökkentik</strong> a
        mulasztásokat, mivel a rendszer időben figyelmezteti a vendéget.
      </p>

      {/* Email típusok */}
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
          Automatikus üzenetek a vendégélményért:
        </h3>
        <div className="space-y-4">
          {[
            { title: "Azonnali visszaigazolás", time: "Foglalás pillanatában" },
            { title: "Emlékeztető üzenet", time: "24 órával érkezés előtt" },
            { title: "Értékelés kérése", time: "Látogatás után másnap" },
            { title: "Státusz értesítések", time: "Módosításkor, lemondáskor" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-[#0d5e4b]/10 text-[#0d5e4b] rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO: H2 + kulcsszó: "Check-in rendszer" */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        3. QR-kódos Check-in és Vendégazonosítás
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A{" "}
        <Link
          href="/hu/funkciok/qr-kod-bejelentkezes"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          QR-kódos check-in rendszer
        </Link>{" "}
        gyorsítja a vendégfogadást és profi benyomást kelt. A vendég a
        foglaláskor kapott kóddal érkezik, amit a host egy pillanat alatt
        beolvas.
      </p>

      {/* QR info cards */}
      <div className="grid md:grid-cols-2 gap-4 not-prose my-10">
        {[
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            ),
            text: "Azonnali vendégazonosítás",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ),
            text: "Létszám és időpont ellenőrzés",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            ),
            text: "Allergiák és speciális kérések",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            ),
            text: "Automatikus asztal-hozzárendelés",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-700">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {item.icon}
              </svg>
            </div>
            <span className="text-gray-700 font-medium">{item.text}</span>
          </div>
        ))}
      </div>

      {/* SEO: H2 + kulcsszó: "Mobilbarát" + "Felhőalapú" */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        4. Felhőalapú, Mobilbarát Kezelőfelület
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A{" "}
        <Link
          href="/hu/funkciok/mobilbarat-felulet"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          mobilbarát felület
        </Link>{" "}
        lehetővé teszi, hogy az üzletvezetők és a személyzet bárhonnan kezelje a
        foglalásokat. Mivel a rendszer felhőalapú, nincs szükség drága
        hardverekre vagy bonyolult telepítésre.
      </p>

      {/* Profi tipp */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 my-12 border border-blue-100 not-prose">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
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
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              Technikai tipp
            </h3>
            <p className="text-blue-800/80 leading-relaxed text-sm">
              Érintésre optimalizált admin felület: a pincérek tableten is
              ugyanolyan gyorsan tudnak foglalást rögzíteni vagy módosítani,
              mint asztali gépen. Minden adat valós időben frissül minden
              eszközön.
            </p>
          </div>
        </div>
      </div>

      {/* SEO: H2 + kulcsszó: "Asztaltérkép", "Kapacitás" */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        5. Digitális Asztaltérkép és Kapacitáskezelés
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A vizuális{" "}
        <Link
          href="/hu/funkciok/asztalterkep"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          asztaltérkép
        </Link>{" "}
        segítségével egy pillantás alatt átlátható az étterem telítettsége. A
        rendszer figyeli a szabad helyeket, így a recepciósok munkája jóval
        egyszerűbbé válik.
      </p>

      {/* Features list */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm my-10 not-prose">
        <div className="space-y-4">
          {[
            "Drag & drop (húzd és ejtsd) asztalfoglalás",
            "Asztalok automatikus összekapcsolása csoportoknak",
            "Valós idejű kapacitásfigyelés",
            "Színkódolt foglalási státuszok",
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

      {/* SEO: H2 + kulcsszó: "Bevételoptimalizálás" */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        6. Bevételoptimalizálás Dinamikus Szabályokkal
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A{" "}
        <Link
          href="/hu/funkciok/dinamikus-idoszabalyok"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          dinamikus időszabályok
        </Link>{" "}
        segítségével maximalizálhatod az asztalfordulást és a bevételt a
        csúcsidőszakokban.
      </p>

      {/* Dynamic rules cards */}
      <div className="grid md:grid-cols-3 gap-4 not-prose my-10">
        {[
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ),
            title: "Turnuskezelés",
            desc: "vendégszám alapján",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            ),
            title: "Csúcsidő",
            desc: "foglalási korlátok",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            ),
            title: "Hétvégi",
            desc: "egyedi beállítások",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center hover:bg-gray-100 transition-colors"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-700">
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
        Mennyibe kerül a rendszer?
      </h2>

      {/* Pricing highlight */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-10 my-10 border border-emerald-200 not-prose text-center">
        <p className="text-lg text-gray-700 mb-4">
          Sok étteremtulajdonos azt hiszi, egy profi szoftver drága. Mi
          megcáfoljuk ezt.
        </p>
        <div className="text-5xl md:text-6xl font-bold text-[#0d5e4b] mb-2 tracking-tight">
          9.990 Ft
          <span className="text-2xl md:text-3xl text-emerald-700/60 font-medium">
            /hó
          </span>
        </div>
        <p className="text-xl text-gray-600 mb-8">
          Kevesebb, mint{" "}
          <strong className="text-[#0d5e4b]">napi egy cappuccino</strong> ára!
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full text-emerald-800 text-sm font-bold shadow-sm border border-emerald-100">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Komplett éttermi szoftvercsomag
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Hogyan kezdj neki a bevezetésnek?
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A váltás egyszerűbb, mint gondolnád. Rendszerünkkel akár 4 hét alatt
        teljesen digitalizálhatod a foglalási folyamatokat:
      </p>

      {/* Step by step */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm my-10 not-prose">
        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {[
            { week: "1. hét", task: "Online foglalás aktiválása" },
            { week: "2. hét", task: "Automatikus visszaigazolások beállítása" },
            { week: "3. hét", task: "QR-kódos check-in bevezetése" },
            { week: "4. hét", task: "Teljes kapacitásoptimalizálás" },
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
                  <div className="font-bold text-gray-900">{step.task}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final highlight */}
      <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border-l-4 border-blue-500 mb-12 not-prose flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
        <div className="text-4xl">🎁</div>
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-2">
            30 napos ingyenes próba – Kockázat nélkül
          </h3>
          <p className="text-blue-800/80 leading-relaxed text-sm md:text-base">
            Teszteld a rendszert saját éttermedben! Nincs hűségidő, nincs
            bankkártya adat megadása. Csak regisztrálsz, és azonnal használhatod
            a prémium funkciókat.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Összefoglalás
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Egy modern{" "}
        <strong className="text-[#0d5e4b]">
          online asztalfoglaló rendszer
        </strong>{" "}
        2025-ben már nem luxus, hanem versenyelőny. Az automatizált
        folyamatokkal időt spórolsz a személyzetnek, miközben több vendéget
        szolgálsz ki.
      </p>

      {/* Záró CTA - Erős igékkel */}
      <div className="bg-[#0d5e4b] rounded-2xl p-10 text-center my-12 not-prose shadow-xl shadow-[#0d5e4b]/20">
        <p className="text-2xl md:text-3xl font-bold text-white mb-4">
          Modernizáld éttermedet még ma!
        </p>
        <p className="text-emerald-100 mb-8 text-lg">
          Indítsd el a 30 napos ingyenes próbát, és lásd a különbséget!
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
