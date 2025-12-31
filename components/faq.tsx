"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQProps {
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    cta: {
      text: string;
      button: string;
    };
  };
}

export default function FAQ({ dict }: FAQProps) {
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
    <section ref={sectionRef} id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <header
          className={`text-center max-w-[680px] mx-auto mb-14 transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-[#0d5e4b] rounded-full" />
            {dict.badge}
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-gray-900 leading-tight mb-5 tracking-[-0.02em]">
            {dict.title}{" "}
            <span className="text-[#0d5e4b]">{dict.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {dict.subtitle}
          </p>
        </header>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 gap-3 max-w-[800px] mx-auto">
          {dict.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-500 rounded-2xl overflow-hidden border ${
                  isOpen
                    ? "bg-white border-[#0d5e4b]/20 shadow-[0_10px_40px_-10px_rgba(13,94,75,0.15)]"
                    : "bg-[#f8faf9] border-transparent hover:border-gray-200"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                }}
              >
                <button
                  className="flex items-center justify-between w-full px-6 py-5 bg-transparent border-none cursor-pointer text-left font-sans"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-semibold transition-colors duration-200 ${
                      isOpen ? "text-[#0d5e4b]" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0d5e4b] text-white rotate-0"
                        : "bg-white text-[#0d5e4b] rotate-0"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-[0.95rem] text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
        >
          <p className="text-gray-600 mb-4">{dict.cta.text}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-[#0d5e4b] font-semibold rounded-xl border-2 border-[#0d5e4b] hover:bg-[#0d5e4b] hover:text-white transition-all duration-300"
          >
            {dict.cta.button}
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
    </section>
  );
}