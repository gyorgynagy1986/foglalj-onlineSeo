"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "Mennyi idő a bevezetés?",
    answer:
      "Átlagosan 1–2 munkanap alatt beüzemeljük a rendszert. Meglévő adatok importálása esetén 3–5 napot vesz igénybe a teljes migráció. A bevezetés során végig segítünk.",
  },
  {
    question: "Mi történik a próbaidőszak után?",
    answer:
      "A 30 napos próbaidőszak végén elemezzük a használatot és személyre szabott árajánlatot készítünk. Nincs automatikus számlázás – csak akkor fizetsz, ha elégedett vagy és folytatni szeretnéd.",
  },
  {
    question: "Van hűségidő vagy hosszú távú szerződés?",
    answer:
      "Nincs hűségidő. A szolgáltatás havi alapon működik és bármikor lemondható. Nem kötünk hosszú távú szerződéseket – a minőséggel szeretnénk megtartani ügyfeleinket.",
  },
  {
    question: "Hogyan működik pontosan az árazás?",
    answer:
      "Csak azért fizetsz, amit ténylegesen használsz. Az árat a foglalások száma, az éttermek és területek mennyisége, valamint a használt funkciók határozzák meg. Nincsenek rejtett költségek.",
  },
  {
    question: "Milyen támogatást kapok?",
    answer:
      "Magyar nyelvű email és telefonos támogatás érhető el. Emellett részletes dokumentációt és videó oktatóanyagokat biztosítunk. Prémium ügyfeleknek dedikált account manager is jár.",
  },
  {
    question: "Lehet-e importálni meglévő adatokat?",
    answer:
      "Igen, segítünk az adatok migrációjában más rendszerekből. CSV és Excel importálás is elérhető. Vendéglisták, foglalási előzmények – mindent áthozunk.",
  },
  {
    question: "A rendszer GDPR kompatibilis?",
    answer:
      "Igen, teljes mértékben megfelelünk a GDPR előírásainak. Az adatok EU-n belüli szervereken tárolódnak, és biztosítjuk az összes szükséges adatvédelmi funkciót.",
  },
  {
    question: "Használhatom mobiltelefonról is?",
    answer:
      "Igen, a rendszer teljesen reszponzív és mobilbarát. Mind az admin felület, mind a vendégek foglalási felülete tökéletesen működik telefonon és tableten is.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-20 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <header
          className={`text-center max-w-[680px] mx-auto mb-14 transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-accent-dark)] font-semibold text-[0.9rem] uppercase tracking-wider mb-3">
            Gyakori kérdések
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--color-dark)] leading-tight mb-4 tracking-tight">
            Minden, amit tudni érdemes
          </h2>
          <p className="text-lg text-[var(--color-gray-600)] leading-relaxed">
            A legfontosabb kérdések és válaszok a szolgáltatásról.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 max-w-[800px] mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-600 bg-[var(--color-gray-100)] rounded-2xl overflow-hidden hover:bg-[var(--color-cream)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-5 bg-none border-none cursor-pointer text-left font-sans text-base font-semibold text-[var(--color-dark)] transition-colors duration-150 hover:text-[var(--color-accent-dark)]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full bg-white text-[var(--color-accent-dark)] font-bold text-xl flex-shrink-0 transition-transform duration-[250ms] ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-[0.95rem] text-[var(--color-gray-600)] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
