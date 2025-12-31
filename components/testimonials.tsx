"use client";

import { useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";

interface TestimonialsProps {
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    testimonial: {
      quote: string;
      highlight: string;
      author: {
        name: string;
        role: string;
        initials: string;
      };
    };
    trustIndicators: Array<{
      text: string;
    }>;
  };
}

export default function Testimonials({ dict }: TestimonialsProps) {
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
      id="testimonials"
      className="py-24 md:py-32 bg-[#f8faf9]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="text-center max-w-[680px] mx-auto mb-14 fade-in opacity-0 translate-y-6 transition-all duration-600">
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

        {/* Testimonial Card */}
        <article className="fade-in opacity-0 translate-y-6 transition-all duration-600 max-w-[720px] mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm text-center relative overflow-hidden">
          {/* Decorative quote icon */}
          <div className="absolute top-6 left-6 w-12 h-12 bg-[#0d5e4b]/10 rounded-xl flex items-center justify-center">
            <Quote className="w-6 h-6 text-[#0d5e4b]" />
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote text */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 relative z-[1]">
            „{dict.testimonial.quote}{" "}
            <span className="text-[#0d5e4b] font-semibold">
              {dict.testimonial.highlight}
            </span>
            "
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0d5e4b] flex items-center justify-center text-white font-bold text-lg">
              {dict.testimonial.author.initials}
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-0.5">
                {dict.testimonial.author.name}
              </h4>
              <p className="text-sm text-gray-500">
                {dict.testimonial.author.role}
              </p>
            </div>
          </div>

          {/* Subtle decorative element */}
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#0d5e4b]/5 rounded-full" />
        </article>

        {/* Trust indicators */}
        <div className="fade-in opacity-0 translate-y-6 transition-all duration-600 mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
          {dict.trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#0d5e4b]"
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
              <span className="text-gray-600">{indicator.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
