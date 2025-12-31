"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Rocket, Search, Briefcase, ArrowRight, Check } from "lucide-react";

interface PricingProps {
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
      features: string[];
      currentBadge?: string;
    }>;
    cta: {
      title: string;
      subtitle: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };
}

const stepIcons = [Rocket, Search, Briefcase];

const stepConfig = [
  { featured: false },
  { featured: true },
  { featured: false },
];

export default function Pricing({ dict }: PricingProps) {
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
    <section ref={sectionRef} id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="text-center max-w-[680px] mx-auto mb-16 fade-in opacity-0 translate-y-6 transition-all duration-600">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-[#0d5e4b] rounded-full" />
            {dict.badge}
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-gray-900 leading-tight mb-5 tracking-[-0.02em]">
            {dict.title}{" "}
            <span className="text-[#0d5e4b]">{dict.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {dict.description}
          </p>
        </header>

        {/* Steps connector line - visible on desktop */}
        <div className="hidden md:block relative mb-8">
          <div className="absolute top-6 left-[16.67%] right-[16.67%] h-0.5 bg-gray-200">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0d5e4b] via-[#0d5e4b] to-gray-200"
              style={{ width: "50%" }}
            />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {dict.steps.map((step, index) => {
            const Icon = stepIcons[index];
            const config = stepConfig[index];
            return (
              <div
                key={index}
                className={`fade-in opacity-0 translate-y-6 transition-all duration-600 group relative bg-white border rounded-2xl p-8 hover:shadow-[0_20px_40px_-12px_rgba(13,94,75,0.15)] ${
                  config.featured
                    ? "border-[#0d5e4b] shadow-lg md:-mt-4 md:mb-4"
                    : "border-gray-100 hover:border-[#0d5e4b]/20"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step number */}
                <span
                  className={`absolute -top-4 left-8 w-8 h-8 flex items-center justify-center font-bold text-sm rounded-full transition-colors ${
                    config.featured
                      ? "bg-[#0d5e4b] text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-[#0d5e4b] group-hover:text-white"
                  }`}
                >
                  {index + 1}
                </span>

                {/* Featured badge */}
                {config.featured && step.currentBadge && (
                  <span className="absolute -top-4 right-8 px-3 py-1 bg-emerald-50 text-[#0d5e4b] text-xs font-semibold rounded-full">
                    {step.currentBadge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#0d5e4b] rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0d5e4b] transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-[0.95rem]">
                  {step.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {step.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#0d5e4b]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#0d5e4b]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in opacity-0 translate-y-6 transition-all duration-600">
          <div
            className="relative overflow-hidden rounded-2xl p-10 md:p-12"
            style={{
              background:
                "linear-gradient(135deg, #0a4a3a 0%, #0d5e4b 50%, #127a5b 100%)",
            }}
          >
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {dict.cta.title}
              </h3>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                {dict.cta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://www.bukio.hu/auth/register"
                  target="_blank"
                  rel="noopener nofollow"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-white text-[#0d5e4b] hover:bg-emerald-50 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                >
                  {dict.cta.primaryButton}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
                >
                  {dict.cta.secondaryButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
