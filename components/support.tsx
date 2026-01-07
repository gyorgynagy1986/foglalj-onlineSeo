"use client";

import { useEffect, useRef } from "react";
import {
  Headset,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Server,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import supportPhoto from "../public/photos/support.png";

// Típusdefiníció a nyelvi fájlhoz
interface SupportProps {
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    features: {
      support: {
        title: string;
        description: string;
      };
      monitoring: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
    };
    cta: string;
  };
}

export default function Support({ dict }: SupportProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Ugyanaz a fade-in animáció, mint a többi komponensnél
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
      id="support"
      className="py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- BAL OLDAL: SZÖVEG --- */}
          <div className="order-2 lg:order-1 fade-in opacity-0 translate-y-6 transition-all duration-600">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
              <Activity className="w-4 h-4" />
              {dict.badge}
            </div>

            {/* Címsor */}
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-gray-900 leading-tight mb-6 tracking-[-0.02em]">
              {dict.title}
              <span className="text-[#0d5e4b]"> {dict.titleHighlight}</span>
            </h2>

            {/* Leírás */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {dict.description}
            </p>

            {/* Lista elemek */}
            <div className="space-y-8">
              {/* 1. Ügyfélszolgálat */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#0d5e4b]/10 rounded-xl text-[#0d5e4b]">
                  <Headset className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {dict.features.support.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {dict.features.support.description}
                  </p>
                </div>
              </div>

              {/* 2. Monitorozás */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl text-blue-600">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {dict.features.monitoring.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {dict.features.monitoring.description}
                  </p>
                </div>
              </div>

              {/* 3. Biztonság */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-xl text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {dict.features.security.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {dict.features.security.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Opcionális CTA gomb vagy Link */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-[#0d5e4b] font-bold hover:gap-3 transition-all"
              >
                {dict.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* --- JOBB OLDAL: KÉP HELYE --- */}
          <div className="order-1 lg:order-2 fade-in opacity-0 translate-y-6 transition-all duration-600 delay-200">
            <div className="relative">
              {/* Dekoratív háttér elem (Blob/Circle) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#0d5e4b]/5 to-blue-50 rounded-full blur-3xl -z-10" />

              {/* KÉP KONTÉNER - Ide tedd majd a képedet */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white aspect-[4/3] group">
                <Image
                  src={supportPhoto}
                  alt="Ügyfélszolgálat"
                  fill
                  className="object-cover"
                />


                {/* Lebegő kártya effekt (opcionális díszítés) */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 animate-[float_4s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full absolute top-0 right-0 animate-ping" />
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        Rendszer állapota: Kiváló
                      </div>
                      <div className="text-xs text-gray-500">
                        Minden szolgáltatás 100%-on üzemel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lebegő animáció definíciója */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
