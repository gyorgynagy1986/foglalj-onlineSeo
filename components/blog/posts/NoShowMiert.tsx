// components/blog/posts/NoShowMiert.tsx
import Image from "next/image";
import Link from "next/link";

export default function NoShowMiertPost() {
  return (
    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#0d5e4b] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-[#0d5e4b]">
      {/* Bevezető szekció - SEO: Definíció + Pénzügyi vonzata */}
      <div className="bg-white rounded-2xl p-8 md:p-10 mb-12 border-2 border-red-100 shadow-sm relative overflow-hidden">
        {/* Háttér dekoráció */}
        <div className="absolute right-0 top-0 opacity-5 -mr-16 -mt-16 pointer-events-none">
          <svg
            className="w-80 h-80 text-red-600"
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
          Miért veszítenek az éttermek milliókat a no-show miatt?
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-0 relative z-10">
          A <strong className="text-red-600">no-show</strong> (meg nem jelenés)
          azt jelenti, hogy a vendég asztalt foglal, de nem érkezik meg, és nem
          is mondja le. Ez nem csupán udvariatlanság – ez egy{" "}
          <strong className="text-gray-900">mérhető pénzügyi veszteség</strong>,
          ami az alapanyagköltségtől a személyzet béréig mindent érint.
        </p>
      </div>

      {/* Statisztikák - Kártyák */}
      <div className="my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          A számok sokkolóak:
        </h3>

        <div className="grid md:grid-cols-2 gap-6 not-prose">
          {/* 15-20% Kártya */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 text-red-600 group-hover:bg-red-100 transition-colors">
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
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  15-20%
                </div>
                <div className="text-sm text-gray-600">
                  az átlagos no-show arány a magyar vendéglátásban
                </div>
              </div>
            </div>
          </div>

          {/* 20k Kártya */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-600 group-hover:bg-amber-100 transition-colors">
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
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ~20.000 Ft
                </div>
                <div className="text-sm text-gray-600">
                  azonnali bevételkiesés egyetlen 4 fős asztalnál
                </div>
              </div>
            </div>
          </div>

          {/* 600k Kártya */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 text-gray-600 group-hover:bg-gray-200 transition-colors">
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
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ~600.000 Ft
                </div>
                <div className="text-sm text-gray-600">
                  havi kiesés egy átlagos (50 vendég/nap) étteremnél
                </div>
              </div>
            </div>
          </div>

          {/* 7m Kártya */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 text-red-600 group-hover:bg-red-200 transition-colors">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0d5e4b] mb-1">
                  7+ millió Ft
                </div>
                <div className="text-sm text-gray-600">
                  éves bevételkiesés összesen (egy új autó ára!)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Miért nem jelennek meg a vendégek?
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Kutatások szerint a legtöbb no-show nem rosszindulatú, hanem egyszerű
        <em className="text-[#0d5e4b] font-semibold not-italic">
          {" "}
          emberi mulasztás
        </em>
        . Az okok ismerete segít a megelőzésben:
      </p>

      {/* Okok - Interaktív lista SVG-vel */}
      <div className="space-y-4 not-prose my-10">
        {[
          {
            pct: "65%",
            reason: "Elfelejtik",
            desc: "Különösen, ha 2+ nappal előre foglaltak.",
            color: "red",
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
            pct: "20%",
            reason: "Tervváltozás",
            desc: "Közbejött valami, de nem érzik fontosnak a lemondást.",
            color: "orange",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            ),
          },
          {
            pct: "10%",
            reason: "Többszörös foglalás",
            desc: "Több helyre foglalnak, és az utolsó pillanatban döntenek.",
            color: "yellow",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            ),
          },
          {
            pct: "5%",
            reason: "Szándékos",
            desc: "Sajnos előfordul, de ritka.",
            color: "gray",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 border-l-4 border-${item.color}-500 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4`}
          >
            <div className={`text-${item.color}-500 flex-shrink-0 mt-1`}>
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {item.icon}
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <span className={`text-2xl font-bold text-${item.color}-600`}>
                  {item.pct}
                </span>
                <h4 className="text-lg font-bold text-gray-900">
                  {item.reason}
                </h4>
              </div>
              <p className="text-gray-600 text-sm mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Profi tipp - Kiemelő doboz */}
      <div className="bg-gradient-to-r from-emerald-50 to-[#0d5e4b]/10 rounded-2xl p-8 my-12 border border-emerald-200 not-prose">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#0d5e4b] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
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
            <h3 className="text-xl font-bold text-[#0d5e4b] mb-2">
              A megoldás egyszerűbb, mint gondolnád
            </h3>
            <p className="text-gray-800/90 leading-relaxed text-sm md:text-base">
              Mivel a fő ok a feledékenység, a megoldás az emlékeztetés. Egy
              automatizált rendszer
              <strong className="text-[#0d5e4b]">
                {" "}
                70%-kal csökkentheti
              </strong>{" "}
              a no-show arányt pusztán azzal, hogy 24 órával előtte küld egy
              SMS-t vagy emailt.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Hogyan előzheted meg a bevételkiesést?
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A modern{" "}
        <Link
          href="/funkciok/asztalterkep"
          className="text-[#0d5e4b] font-semibold hover:underline"
        >
          {" "}
          online foglalási rendszerek
        </Link>
        három védvonalat alkalmaznak a no-show ellen:
      </p>

      {/* Funkciók lista - Modern checklist */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mt-10 mb-6 not-prose">
        <div className="space-y-4">
          {[
            {
              text: "Automatikus emlékeztető 24 órával előtte",
              sub: "Így a vendégnek van ideje lemondani, ha változott a terv.",
            },
            {
              text: "Egyszerű, 1-kattintásos lemondás",
              sub: "Ha könnyű lemondani, szólni fognak. Ha telefonálni kell, inkább nem szólnak.",
            },
            {
              text: "QR-kódos visszaigazolás",
              sub: "A kód 'birtoklása' pszichológiailag növeli az elköteleződést.",
            },
            {
              text: "Feketelista funkció",
              sub: "A rendszer kiszűri a sorozatosan meg nem jelenő vendégeket.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-6 h-6 bg-[#0d5e4b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
              <div>
                <div className="font-bold text-gray-900">{item.text}</div>
                <div className="text-sm text-gray-500">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Valós példa: Bella Vista Étterem
      </h2>

      {/* Testimonial - Kiemelő kártya */}
      <div className="bg-white rounded-2xl p-8 md:p-10 my-10 border border-gray-200 shadow-lg not-prose relative">
        <div className="absolute top-0 right-0 p-6 opacity-10">
          <svg
            className="w-20 h-20 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01697C7.9124 16 7.01697 16.8954 7.01697 18V21H2.01697V7.00001L10.517 2.00001L19.017 7.00001V21H14.017ZM12.017 10H9.01697C8.46468 10 8.01697 10.4477 8.01697 11V13C8.01697 13.5523 8.46468 14 9.01697 14H12.017C12.5693 14 13.017 13.5523 13.017 13V11C13.017 10.4477 12.5693 10 12.017 10Z" />
          </svg>
        </div>

        <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed relative z-10">
          "Mióta használjuk az automatikus emlékeztetőket, a no-show arányunk
          <strong className="text-[#0d5e4b] not-italic px-1">
            18%-ról 4%-ra csökkent
          </strong>
          . Ez havi szinten kb.{" "}
          <strong className="text-[#0d5e4b] not-italic px-1">
            800.000 Ft plusz bevételt
          </strong>{" "}
          jelent, miközben a recepciósunk napi 1 óra telefonálást spórol meg."
        </blockquote>

        <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
          <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
            NG
          </div>
          <div>
            <div className="font-bold text-gray-900">Nagy Gábor</div>
            <div className="text-sm text-gray-600">
              Tulajdonos, Bella Vista Étterem
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
        Összefoglalás
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        A no-show vendégek komoly bevételkiesést okoznak, de ez nem egy
        "velejáró rossz", amibe bele kell törődni. Digitális eszközökkel a
        veszteség minimalizálható.
      </p>

      {/* Összefoglaló lépések */}
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner my-10 not-prose">
        <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
          A 3 lépéses stratégia:
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              text: "Emlékeztetők",
              desc: "Automatikus Email & SMS",
            },
            { step: "2", text: "Lemondás", desc: "Legyen 1 kattintás" },
            { step: "3", text: "Várólista", desc: "Azonnali újratöltés" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-gray-200 text-center"
            >
              <div className="w-8 h-8 bg-[#0d5e4b] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                {item.step}
              </div>
              <div className="font-bold text-gray-900">{item.text}</div>
              <div className="text-xs text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Záró CTA */}
      <div className="bg-[#0d5e4b] rounded-2xl p-10 text-center my-12 not-prose shadow-xl shadow-[#0d5e4b]/20">
        <p className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ne hagyd, hogy a pénzed elússzon!
        </p>
        <p className="text-emerald-100 mb-8 text-lg">
          Próbáld ki kockázatmentesen a rendszert, és csökkentsd a no-showt már
          az első héten.
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
