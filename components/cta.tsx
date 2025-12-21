"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="py-24 md:py-32 text-white text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a4a3a 0%, #0d5e4b 50%, #127a5b 100%)' }}
    >
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-300/10 rounded-full blur-[120px]" />

      <div className="relative z-[2] max-w-[680px] mx-auto px-6 fade-in opacity-0 translate-y-6 transition-all duration-600">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
          30 napos ingyenes próba
        </div>

        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-5 tracking-[-0.02em] leading-tight">
          Készen áll a váltásra?
        </h2>
        <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg mx-auto">
          Csatlakozzon több mint 500 elégedett étterem tulajdonosához. Kezdje el még ma!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link
            href="https://www.bukio.hu/auth/register"
            target="_blank"
            rel="noopener nofollow"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-white text-[#0d5e4b] hover:bg-emerald-50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          >
            Ingyenes próba indítása
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
          >
            Beszéljünk róla
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm text-white/60">
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-300" />
            Nincs setup díj
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-300" />
            Bármikor lemondható
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-300" />
            Magyar ügyfélszolgálat
          </span>
        </div>
      </div>
    </section>
  )
}