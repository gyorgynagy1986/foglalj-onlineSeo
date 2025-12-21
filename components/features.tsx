"use client";

import { useEffect, useRef } from "react";
import {
  Calendar,
  Users,
  BarChart3,
  Mail,
  Bell,
  Smartphone,
  Clock,
  Settings,
  TabletSmartphone,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Intelligens foglalási rendszer",
    description:
      "Automatizált asztalkezelés, területek kezelése és valós idejű kapacitás optimalizálás.",
  },
  {
    icon: Users,
    title: "Professzionális vendégkezelés",
    description:
      "Részletes vendégprofilok, foglalási előzmények és személyre szabott szolgáltatások.",
  },
  {
    icon: BarChart3,
    title: "Üzleti analitika",
    description:
      "Részletes jelentések, bevétel elemzés és teljesítmény mutatók valós időben.",
  },
  {
    icon: Mail,
    title: "Email automatizálás",
    description:
      "Automatikus emlékeztetők, megerősítések és visszajelzés kérések.",
  },
  {
    icon: Bell,
    title: "Böngésző értesítések",
    description:
      "Push értesítések új foglalásokról, módosításokról és lemondásokról valós időben.",
  },
  {
    icon: Smartphone,
    title: "QR-kódos bejelentkezés",
    description:
      "Vendégei egyedi QR-kódot kapnak – érkezéskor egyetlen beolvasással ellenőrizhető.",
  },
  {
    icon: Clock,
    title: "Dinamikus időszabályok",
    description:
      "Automatikusan állítsa be a foglalás időtartamát a vendégszám alapján.",
  },
  {
    icon: Settings,
    title: "Testreszabható szabályok",
    description:
      "Rugalmas nyitvatartás, speciális napok és egyedi foglalási feltételek.",
  },
  {
    icon: TabletSmartphone,
    title: "Mobilbarát felület",
    description:
      "Reszponzív design minden eszközön – vendégei bárhonnan foglalhatnak.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 md:py-32 bg-[#f8faf9]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="text-center max-w-[680px] mx-auto mb-16 fade-in opacity-0 translate-y-6 transition-all duration-600">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-[#0d5e4b] rounded-full" />
            Funkciók
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-gray-900 leading-tight mb-5 tracking-[-0.02em]">
            Minden, ami egy modern
            <span className="text-[#0d5e4b]"> étteremnek</span> kell
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Komplex megoldás a foglaláskezeléstől az üzleti analitikáig – egy
            helyen.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={index}
                className="group fade-in opacity-0 translate-y-6 transition-all duration-600 bg-white p-7 rounded-2xl border border-gray-100 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(13,94,75,0.15)] hover:border-[#0d5e4b]/20"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#0d5e4b] rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2.5 group-hover:text-[#0d5e4b] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[0.95rem] text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle arrow on hover */}
                <div className="mt-4 flex items-center gap-2 text-[#0d5e4b] text-sm font-medium opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Részletek
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center fade-in opacity-0 translate-y-6 transition-all duration-600">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-left">
              <p className="text-gray-900 font-semibold">
                Szeretné kipróbálni az összes funkciót?
              </p>
              <p className="text-gray-500 text-sm">
                30 napig ingyenesen, bankkártya nélkül.
              </p>
            </div>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-[#0d5e4b] text-white hover:bg-[#0a4a3a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
            >
              Ingyenes próba
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
