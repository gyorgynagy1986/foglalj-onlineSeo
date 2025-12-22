"use client";

import {
  Calendar,
  MessageSquare,
  ListChecks,
  Eye,
  Play,
  Sparkles,
  Palette,
  Repeat,
} from "lucide-react";
import Link from "next/link";

const primaryColor = "#0d5e4b";

const formTypes = [
  {
    id: "standard",
    name: "Standard Űrlap",
    description:
      "Hagyományos, egyszerű foglalási űrlap egy lapon minden mezővel. Gyors és hatékony.",
    icon: Calendar,
    features: [
      "Egyoldalas felület",
      "Gyors kitöltés",
      "Összes információ egyszerre",
      "Mobilbarát dizájn",
    ],
    previewUrl: "https://www.bukio.hu/booking/standard-foglalas",
    demoUrl: "https://www.bukio.hu/booking/standard-foglalas",
  },
  {
    id: "wizard",
    name: "Lépésenkénti Űrlap",
    description:
      "Többlépéses folyamat, amely szakaszokra bontva vezeti végig a felhasználót.",
    icon: ListChecks,
    features: [
      "Átlátható folyamat",
      "Fokozatos adatbevitel",
      "Haladásjelző sáv",
      "Alacsonyabb lemorzsolódás",
    ],
    previewUrl: "https://www.bukio.hu/booking/lepesenkenti-foglalas",
    demoUrl: "https://www.bukio.hu/booking/lepesenkenti-foglalas",
    popular: true,
  },
  {
    id: "chatbot",
    name: "Chatbot Űrlap",
    description:
      "Beszélgetés alapú foglalás AI-powered interakcióval. Modern és interaktív.",
    icon: MessageSquare,
    features: [
      "Természetes beszélgetés",
      "AI-vezérelt kérdések",
      "Személyre szabott élmény",
      "Intelligens javaslatok",
    ],
    previewUrl: "https://www.bukio.hu/booking/chatbot",
    demoUrl: "https://www.bukio.hu/booking/chatbot",
  },
];

const accountFeatures = [
  {
    icon: Repeat,
    title: "Korlátlan váltogatás",
    description:
      "Bármikor válts az űrlaptípusok között. Tedd azt, ami az éttermedhez legjobban passzol.",
  },
  {
    icon: Palette,
    title: "20+ előre készített szín",
    description:
      "Használd az összes megadott színskálánkat. Szépek, professzionálisak és teszteltek.",
  },
  {
    icon: Sparkles,
    title: "Saját arculat",
    description:
      "Kérésre összehangoztuk az űrlapokat az éttermed logójával és színeivel.",
  },
];

export default function BookingForms() {
  return (
    <section id="booking-forms" className="py-24 md:py-32 bg-[#f8faf9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-[#0d5e4b] rounded-full" />
            Űrlap típusok
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-gray-900 leading-tight mb-5 tracking-[-0.02em]">
            Foglalási <span className="text-[#0d5e4b]">űrlapok</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Válassz 3 különböző űrlap típus közül. Minden sablon teljesen
            testreszabható és azonnal használható.
          </p>
        </div>

        {/* Form Types */}
        <div className="grid md:grid-cols-3 gap-6">
          {formTypes.map((form) => {
            const Icon = form.icon;
            return (
              <div
                key={form.id}
                className={`group relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(13,94,75,0.15)] ${
                  form.popular
                    ? "border-[#0d5e4b] shadow-lg"
                    : "border-gray-100 hover:border-[#0d5e4b]/20"
                }`}
              >
                {/* Popular badge */}
                {form.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0d5e4b] text-white text-xs font-semibold rounded-full">
                    Népszerű
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0d5e4b] rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0d5e4b] transition-colors">
                    {form.name}
                  </h3>
                  <p className="text-gray-600 mb-5 text-[0.95rem] leading-relaxed">
                    {form.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {form.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-600"
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
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons - Mobile: stacked, Desktop: side by side */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {form.previewUrl ? (
                      <Link
                        href={form.previewUrl}
                        target="_blank"
                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 text-white text-center bg-[#0d5e4b] hover:bg-[#0a4a3a] hover:shadow-lg"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4" />
                          Megtekintés
                        </span>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base text-white opacity-50 cursor-not-allowed bg-[#0d5e4b]"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4" />
                          Megtekintés
                        </span>
                      </button>
                    )}
                    {form.demoUrl ? (
                      <Link
                        href={form.demoUrl}
                        target="_blank"
                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 border-2 border-[#0d5e4b] text-[#0d5e4b] text-center hover:bg-[#0d5e4b] hover:text-white"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Play className="w-4 h-4" />
                          Kipróbálás
                        </span>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base border-2 border-[#0d5e4b] text-[#0d5e4b] opacity-50 cursor-not-allowed"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Play className="w-4 h-4" />
                          Kipróbálás
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom - Account Features */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Saját fiókodban
              </h3>
              <p className="text-gray-500 text-sm">Minden csomag tartalmazza</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {accountFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center md:text-left">
                    <div className="w-10 h-10 mx-auto md:mx-0 mb-4 bg-[#0d5e4b]/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0d5e4b]" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
