"use client";

import { useEffect, useRef } from "react";
import { CalendarCheck, Mail, Shield, Headphones } from "lucide-react";

const stats = [
  { value: "500K+", label: "Sikeres foglalás", icon: CalendarCheck },
  { value: "1M+", label: "Kiküldött email", icon: Mail },
  { value: "99.9%", label: "Üzemidő", icon: Shield },
  { value: "24/7", label: "Magyar támogatás", icon: Headphones },
];

export default function Stats() {
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
      className="py-20 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a4a3a 0%, #0d5e4b 50%, #127a5b 100%)",
      }}
      aria-label="Eredmények számokban"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-300/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Optional header */}
        <div className="text-center mb-12 fade-in opacity-0 translate-y-6 transition-all duration-600">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Megbíznak bennünk
          </h2>
          <p className="text-white/60">Számok, amikre büszkék vagyunk</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="fade-in opacity-0 translate-y-6 transition-all duration-600 text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-emerald-300" />
                  </div>

                  {/* Value */}
                  <div className="text-[2.5rem] md:text-5xl font-bold text-white mb-2 tracking-tight">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm md:text-base text-white/60 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
