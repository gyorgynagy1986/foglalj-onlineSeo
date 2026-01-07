// components/blog/posts/PapirVsDigitalis.tsx
import Link from "next/link";

export default function PapirVsDigitalisPost() {
  return (
    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0d5e4b] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-[#0d5e4b]">
      {/* Bevezető szekció - SEO: Konkrét összehasonlítás a címben */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 mb-12 border border-gray-200 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-0">
          Papír Naptár vs. Digitális Asztalfoglaló Rendszer: Melyik éri meg
          2025-ben?
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-0">
          Sok étterem még mindig a hagyományos füzetet használja. Működik? Igen.
          De{" "}
          <strong className="text-[#0d5e4b]">
            mennyibe kerül valójában ez a "kényelem"
          </strong>
          ? Megvizsgáltuk a rejtett költségeket, a munkaidőt és az elveszett
          vendégeket. Az eredmény sokkoló.
        </p>
      </div>

      {/* Gyors összehasonlító tábla - Két kártyás elrendezés */}
      <div className="my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Azonnali összehasonlítás:
        </h3>

        <div className="grid md:grid-cols-2 gap-6 not-prose">
          {/* Papír Kártya - Veszteség fókusz */}
          <div className="bg-white rounded-2xl overflow-hidden border border-red-100 shadow-md">
            <div className="bg-red-50 p-6 border-b border-red-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-red-900 text-xl">
                Hagyományos Naptár
              </h3>
            </div>

            <div className="p-6 space-y-4">
              {[
                { label: "Sebesség", val: "Lassú (3-5 perc/hívás)", bad: true },
                { label: "Pontosság", val: "70% (gyakori hibák)", bad: true },
                {
                  label: "Elérhetőség",
                  val: "Csak nyitvatartási időben",
                  bad: true,
                },
                {
                  label: "Adatgyűjtés",
                  val: "Nincs (elveszett adatok)",
                  bad: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <span className="font-bold text-red-600 text-sm text-right">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Digitális Kártya - Nyereség fókusz */}
          <div className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-md relative">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0d5e4b] to-emerald-400"></div>
            <div className="bg-emerald-50 p-6 border-b border-emerald-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-3">
                <svg
                  className="w-8 h-8"
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
              </div>
              <h3 className="font-bold text-[#0d5e4b] text-xl">
                Online Rendszer
              </h3>
            </div>

            <div className="p-6 space-y-4">
              {[
                {
                  label: "Sebesség",
                  val: "Azonnali (automatikus)",
                  bad: false,
                },
                {
                  label: "Pontosság",
                  val: "100% (nincs félreértés)",
                  bad: false,
                },
                { label: "Elérhetőség", val: "24/7 (álmodban is)", bad: false },
                {
                  label: "Adatgyűjtés",
                  val: "Teljes (vendégprofilok)",
                  bad: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <span className="font-bold text-[#0d5e4b] text-sm text-right">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        A Papír Naptár Valós Ára
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Sokan azt hiszik, a papír és a toll olcsó. Ez a legnagyobb tévhit. A
        papír naptár <strong className="text-red-600">rejtett költségei</strong>{" "}
        havonta több százezer forintot vesznek ki a kasszából.
      </p>

      {/* Problémák részletezve - Kártyás elrendezés */}
      <div className="space-y-4 not-prose my-10">
        <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm flex gap-4">
          <div className="text-red-500 flex-shrink-0 mt-1">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              Időigényes adminisztráció
            </h4>
            <p className="text-gray-600 text-sm mb-2">
              20 foglalás x 4 perc = <strong>napi 1.5 óra</strong> telefonálás
              és írogatás.
            </p>
            <div className="text-xs font-bold text-red-600 uppercase tracking-wide">
              Költség: Havi ~45 óra munkaerő
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500 shadow-sm flex gap-4">
          <div className="text-orange-500 flex-shrink-0 mt-1">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              Emberi hibák
            </h4>
            <p className="text-gray-600 text-sm mb-2">
              Olvashatatlan kézírás, elfelejtett visszahívás, dupla foglalás.
            </p>
            <div className="text-xs font-bold text-orange-600 uppercase tracking-wide">
              Eredmény: Elégedetlen vendégek
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border-l-4 border-gray-500 shadow-sm flex gap-4">
          <div className="text-gray-500 flex-shrink-0 mt-1">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              Elérhetetlenség
            </h4>
            <p className="text-gray-600 text-sm mb-2">
              A vendégek 60%-a este és hétvégén foglalna, amikor nem veszed fel.
            </p>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">
              Veszteség: Heti 10-15 asztal
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Mit nyersz a digitalizációval?
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Azon túl, hogy megszűnik a káosz, egy modern{" "}
        <strong className="text-[#0d5e4b]">online foglalási rendszer</strong>
        konkrét üzleti előnyöket hoz:
      </p>

      {/* Előnyök Grid - SVG ikonokkal */}
      <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
        {[
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            ),
            title: "Villámgyors",
            desc: "Egy foglalás rögzítése 30 másodperc, emberi beavatkozás nélkül.",
            tag: "Időmegtakarítás",
            color: "blue",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ),
            title: "100% Pontos",
            desc: "Nincs több olvashatatlan név vagy rossz dátumra írt foglalás.",
            tag: "Hibamentes",
            color: "emerald",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            ),
            title: "24/7 Nyitva",
            desc: "Fogadj foglalásokat alvás közben is, a nap 24 órájában.",
            tag: "+40% Bevétel",
            color: "purple",
          },
          {
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            ),
            title: "Okos Statisztikák",
            desc: "Lásd pontosan, melyik nap a legerősebb és kik a törzsvendégeid.",
            tag: "Adatvezérelt",
            color: "indigo",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 border border-gray-200 hover:border-${item.color}-300 hover:shadow-md transition-all`}
          >
            <div
              className={`w-12 h-12 bg-${item.color}-50 text-${item.color}-600 rounded-lg flex items-center justify-center mb-4`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {item.icon}
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
            <span
              className={`text-xs font-bold text-${item.color}-700 bg-${item.color}-50 px-2 py-1 rounded`}
            >
              {item.tag}
            </span>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Esettanulmány: Bella Vista Étterem
      </h2>

      {/* Case study */}
      <div className="bg-white rounded-2xl p-8 md:p-10 my-10 border border-gray-200 shadow-sm not-prose relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-5">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-6 mb-8 border-b border-gray-100 pb-8">
            <div className="flex-1">
              <div className="text-xs font-bold text-red-500 uppercase tracking-wide mb-1">
                ELŐTTE (Papírral)
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  ❌{" "}
                  <span className="line-through">Napi 2.5 óra telefonálás</span>
                </li>
                <li className="flex gap-2">
                  ❌ <span className="line-through">20% no-show arány</span>
                </li>
                <li className="flex gap-2">
                  ❌ <span className="line-through">Kaotikus péntek esték</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block w-px bg-gray-200"></div>
            <div className="flex-1">
              <div className="text-xs font-bold text-[#0d5e4b] uppercase tracking-wide mb-1">
                UTÁNA (Digitálisan)
              </div>
              <ul className="space-y-2 text-sm text-gray-800 font-medium">
                <li className="flex gap-2 text-[#0d5e4b]">
                  ✓ <span>Napi 30 perc adminisztráció</span>
                </li>
                <li className="flex gap-2 text-[#0d5e4b]">
                  ✓ <span>6% no-show arány</span>
                </li>
                <li className="flex gap-2 text-[#0d5e4b]">
                  ✓ <span>44% forgalomnövekedés</span>
                </li>
              </ul>
            </div>
          </div>

          <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed">
            "A csapatom végre a vendégekkel foglalkozhat a telefonálás helyett.
            A forgalomnövekedésből a rendszer ára már az{" "}
            <strong className="text-[#0d5e4b] not-italic">
              első héten tízszeresen megtérült
            </strong>
            ."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
              BV
            </div>
            <div>
              <div className="font-bold text-gray-900">Bella Vista Étterem</div>
              <div className="text-sm text-gray-600">Budapest, 60 asztal</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Költségek: Az Igazság Pillanata
      </h2>

      {/* Költség kalkulátor - Dashboard stílus */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg my-10 not-prose overflow-hidden">
        <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 m-0">
            Havi Pénzügyi Egyenleg
          </h3>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8 md:divide-x md:divide-gray-100">
          {/* Veszteség oldal */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-red-500 uppercase">
              A Papír Ára (Veszteség)
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Extra munkaerő (2.5ó/nap)</span>
              <span className="font-medium">180.000 Ft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">No-show veszteség (20%)</span>
              <span className="font-medium">600.000 Ft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Elveszett éjszakai foglalás</span>
              <span className="font-medium">400.000 Ft</span>
            </div>
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-bold text-gray-900">ÖSSZES HIÁNY:</span>
              <span className="text-xl font-bold text-red-600">
                -1.180.000 Ft
              </span>
            </div>
          </div>

          {/* Nyereség oldal */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-[#0d5e4b] uppercase">
              Digitális Mérleg (Nyereség)
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Szoftver havidíj</span>
              <span className="font-medium text-red-500">-9.990 Ft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Megtakarított bérköltség</span>
              <span className="font-medium text-[#0d5e4b]">+150.000 Ft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Extra bevétel (teltház)</span>
              <span className="font-medium text-[#0d5e4b]">+3.000.000 Ft</span>
            </div>
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-bold text-gray-900">NETTO EREDMÉNY:</span>
              <span className="text-xl font-bold text-[#0d5e4b]">
                +3.140.000 Ft
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#0d5e4b] p-6 text-center text-white">
          <div className="text-sm opacity-90 mb-1">
            A digitális váltás értéke havonta:
          </div>
          <div className="text-3xl font-bold">+4.320.000 Ft különbség</div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Gyakori kifogások (és a valóság)
      </h2>

      {/* Gyakori kifogások */}
      <div className="space-y-4 not-prose my-10">
        {[
          {
            concern: '"Túl drága a rendszer..."',
            reality:
              "Havi 9.990 Ft vs. 1 millió Ft rejtett veszteség. Melyik a drága?",
          },
          {
            concern: '"A vendégeim nem értenek hozzá..."',
            reality:
              "A vendégek 78%-a már mobilról foglalna. Ők várják a legjobban.",
          },
          {
            concern: '"Bonyolult beállítani..."',
            reality:
              "A rendszerünk 'plug & play'. 30 perc alatt használatra kész.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-4 border border-gray-200"
          >
            <div className="flex items-start gap-3">
              <div className="text-gray-400 mt-1">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 italic mb-1">
                  {item.concern}
                </div>
                <div className="text-sm text-[#0d5e4b] font-medium flex gap-2">
                  <span>💡</span> {item.reality}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        A Váltás Lépései (4 Egyszerű Lépés)
      </h2>

      {/* Implementation steps - Vertical */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm my-10 not-prose">
        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-8 before:w-0.5 before:bg-gray-200">
          {[
            {
              title: "Regisztráció",
              time: "5 perc",
              desc: "Fiók létrehozása és étterem alapadatai.",
            },
            {
              title: "Beállítás",
              time: "20 perc",
              desc: "Nyitvatartás és asztalok felvitele a térképre.",
            },
            {
              title: "Tesztelés",
              time: "1 nap",
              desc: "Próbafoglalások a személyzettel.",
            },
            {
              title: "Élesítés",
              time: "Azonnal",
              desc: "A foglalási link megosztása Facebookon és Google-ön.",
            },
          ].map((item, index) => (
            <div key={index} className="relative flex gap-6">
              <div className="w-16 h-16 bg-white border-4 border-[#0d5e4b] rounded-full flex items-center justify-center text-[#0d5e4b] font-bold text-xl z-10 shadow-sm flex-shrink-0">
                {index + 1}
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Záró CTA */}
      <div className="bg-gradient-to-r from-[#0d5e4b] to-[#0a4a3a] rounded-2xl p-10 text-center my-12 not-prose shadow-xl shadow-[#0d5e4b]/20">
        <p className="text-2xl md:text-3xl font-bold text-white mb-4">
          Cseréld le a papírt, tartsd meg a profitot!
        </p>
        <p className="text-emerald-100 mb-8 text-lg">
          30 napig ingyen tesztelheted. Ha nem tetszik, visszakapod a füzetedet.
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
