"use client"

import Link from "next/link"
import { Check, BarChart3, Calendar, Users } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a4a3a 0%, #0d5e4b 50%, #127a5b 100%)' }}
      role="main"
    >
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Gradient orbs for depth */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#15866a] opacity-20 blur-[120px]" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0d5e4b] opacity-30 blur-[100px]" />

      <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pt-32 pb-16 lg:py-24 max-w-[1280px] mx-auto px-6 md:px-8 w-full items-center">
        
        {/* Left content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
            #1 Foglalási rendszer Magyarországon
          </div>

          <h1 className="font-sans text-[clamp(2.5rem,5vw,3.75rem)] font-bold text-white leading-[1.1] mb-6 tracking-[-0.02em]">
            Asztalfoglalás
            <span className="block text-emerald-300">egyszerűen.</span>
          </h1>

          <p className="text-lg text-white/70 max-w-[520px] mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
            Kezelje foglalásait hatékonyan, növelje bevételeit és tegye elégedetté vendégeit – modern, magyar nyelvű éttermi rendszer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
            <Link
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-white text-[#0d5e4b] hover:bg-emerald-50 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              <Calendar className="w-5 h-5" />
              30 napos ingyenes próba
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
            >
              Tudjon meg többet
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-start text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-300" />
              GDPR kompatibilis
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-300" />
              Magyar támogatás
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-300" />
              99.9% üzemidő
            </span>
          </div>
        </div>

        {/* Right - Dashboard preview */}
        <div className="hidden lg:block relative">
          {/* Main card */}
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0d5e4b] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Foglalás Kezelő</div>
                  <div className="text-xs text-gray-500">Mai nap áttekintése</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-emerald-700">Aktív</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <div className="text-xs text-gray-500 mt-1">Mai foglalás</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-[#0d5e4b]">85%</div>
                  <div className="text-xs text-gray-500 mt-1">Foglaltság</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">96</div>
                  <div className="text-xs text-gray-500 mt-1">Vendég</div>
                </div>
              </div>

              {/* Booking items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-[#0d5e4b]/30 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0d5e4b]/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#0d5e4b]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Kovács Péter</h4>
                      <p className="text-xs text-gray-500">4 fő · 19:00 · Főterem</p>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                    Megerősítve
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-[#0d5e4b]/30 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                      <Users className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Nagy Anna</h4>
                      <p className="text-xs text-gray-500">2 fő · 12:30 · Terasz</p>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
                    Függőben
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card - Revenue */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-4 animate-[float_3s_ease-in-out_infinite]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Bevétel</div>
                <div className="text-lg font-bold text-emerald-600">+34%</div>
              </div>
            </div>
          </div>

          {/* Floating card - New booking notification */}
          <div className="absolute -bottom-2 -left-6 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-4 animate-[float_3s_ease-in-out_infinite_0.5s]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0d5e4b] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Új foglalás</div>
                <div className="text-sm font-semibold text-gray-900">+3 ma</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}