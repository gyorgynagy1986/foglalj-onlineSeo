// app/[lang]/funkciok/ertesitesek/page.tsx
"use client";

import {
  Bell,
  BellRing,
  MousePointerClick,
  Laptop,
  Smartphone,
  ArrowLeft,
  X,
  MoreHorizontal,
  Wifi,
  BatteryMedium,
  Signal,
} from "lucide-react";
import Link from "next/link";

interface NotificationsPageProps {
  dict: any;
  lang: string;
}

export default function NotificationsPageClient({
  dict,
  lang,
}: NotificationsPageProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* NAVIGATION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <nav className="text-xs md:text-sm text-gray-600 overflow-x-auto whitespace-nowrap pb-2">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href={`/${lang}`}
                  className="hover:text-[#0d5e4b] transition-colors"
                >
                  {dict.ertesitesek.breadcrumbs.home}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href={`/${lang}#features`}
                  className="hover:text-[#0d5e4b] transition-colors"
                >
                  {dict.ertesitesek.breadcrumbs.features}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">
                {dict.ertesitesek.breadcrumbs.current}
              </li>
            </ol>
          </nav>
          <Link
            href={`/${lang}#features`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#0d5e4b] transition-colors self-start md:self-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            {dict.ertesitesek.backButton}
          </Link>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="pt-10 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-emerald-50/70 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-8 border border-[#0d5e4b]/20">
            <BellRing className="w-4 h-4" />
            {dict.ertesitesek.hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {dict.ertesitesek.hero.title} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d5e4b] to-teal-500">
              {dict.ertesitesek.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {dict.ertesitesek.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0d5e4b] text-white font-bold rounded-xl hover:bg-[#0a4a3a] transition-all shadow-lg hover:shadow-emerald-500/30">
              <Bell className="w-5 h-5" />
              {dict.ertesitesek.hero.cta}
            </button>
          </div>
          <p className="text-md text-gray-500 mt-4">
            <MousePointerClick className="w-4 h-4 inline mr-1" />
            {dict.ertesitesek.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. DEMO: HOW IT WORKS */}
      <section className="py-20 bg-[#f8faf9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {dict.ertesitesek.demo.title} <br />
              <span className="text-[#0d5e4b]">
                {dict.ertesitesek.demo.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {dict.ertesitesek.demo.description}
            </p>

            <ul className="space-y-4">
              {dict.ertesitesek.demo.steps.map(
                (step: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[#0d5e4b] font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right: RESPONSIVE SIMULATION */}
          <div className="relative h-[500px] lg:h-[450px] rounded-3xl border-4 border-gray-800 lg:border-gray-300 lg:rounded-2xl shadow-2xl overflow-hidden group select-none bg-gray-900 lg:bg-gray-900 ring-4 ring-gray-900/10 lg:ring-0">
            {/* 1. Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] group-hover:scale-110"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop")',
              }}
            >
              <div className="absolute inset-0 bg-black/30 lg:bg-black/20" />
            </div>

            {/* === MOBILE SPECIFIC UI (Only visible on mobile: lg:hidden) === */}
            <div className="block lg:hidden absolute inset-0 pointer-events-none">
              {/* Mobile Status Bar */}
              <div className="flex justify-between items-center px-6 py-3 text-white text-xs font-medium">
                <span>14:32</span>
                <div className="flex gap-2 items-center">
                  <Signal className="w-3.5 h-3.5" />
                  <Wifi className="w-3.5 h-3.5" />
                  <BatteryMedium className="w-4 h-4" />
                </div>
              </div>

              {/* MOBILE PUSH NOTIFICATION (iOS style) */}
              <div className="absolute top-14 inset-x-3 z-30 animate-in slide-in-from-top-4 duration-700 fade-in pointer-events-auto">
                <div className="bg-white/85 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-3 border border-white/40">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                        </svg>
                      </div>
                      <span className="text-[13px] font-semibold text-gray-800 tracking-tight">
                        CHROME
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-500">
                      {dict.ertesitesek.notification.time}
                    </span>
                  </div>

                  {/* Content row */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                        {dict.ertesitesek.notification.initials}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 leading-tight">
                        {dict.ertesitesek.notification.title}
                      </h4>
                      <p className="text-[13px] text-gray-700 leading-snug mt-0.5">
                        <span className="font-semibold">
                          {dict.ertesitesek.notification.guestName}
                        </span>{" "}
                        {dict.ertesitesek.notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === DESKTOP SPECIFIC UI (Only visible on desktop: lg:block) === */}
            <div className="hidden lg:block absolute inset-0">
              {/* Desktop icons */}
              <div className="absolute top-6 left-6 flex flex-col gap-6">
                <div className="flex flex-col items-center gap-1 group/icon cursor-pointer hover:bg-white/10 p-2 rounded border border-transparent hover:border-white/20 transition-all">
                  <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <span className="text-white text-xs text-shadow drop-shadow-md font-medium">
                    Word
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 group/icon cursor-pointer hover:bg-white/10 p-2 rounded border border-transparent hover:border-white/20 transition-all">
                  <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">X</span>
                  </div>
                  <span className="text-white text-xs text-shadow drop-shadow-md font-medium">
                    Excel
                  </span>
                </div>
              </div>

              {/* Taskbar */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#1f1f1f]/95 backdrop-blur-md flex items-center px-4 justify-between border-t border-white/5 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 hover:bg-white/10 rounded flex items-center justify-center transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-sky-500 rounded-sm grid grid-cols-2 gap-0.5 p-0.5">
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                    </div>
                  </div>
                  <div className="h-6 w-px bg-white/10 mx-2"></div>
                  {/* Chrome Active */}
                  <div className="relative w-10 h-10 bg-white/10 rounded flex items-center justify-center cursor-pointer border-b-2 border-blue-400">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-red-500 via-yellow-400 to-green-500 border-2 border-[#1f1f1f]"></div>
                  </div>
                </div>
                <div className="text-white text-xs font-medium text-right leading-tight pr-2">
                  14:32 <br /> <span className="text-white/60">2025.01.21</span>
                </div>
              </div>

              {/* DESKTOP CHROME NOTIFICATION (Bottom right) */}
              <div className="absolute bottom-16 right-4 z-10 animate-in slide-in-from-right-full duration-700 fade-in">
                <div className="w-[380px] bg-[#f3f0ed] rounded-lg shadow-xl border border-white/40 font-sans select-none overflow-hidden">
                  {/* Header */}
                  <div className="px-3 pt-2 pb-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-red-500 via-yellow-500 to-green-500 shadow-sm border border-white/20"></div>
                      <span className="text-[12px] text-gray-700 font-normal">
                        Google Chrome
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <MoreHorizontal className="w-4 h-4 cursor-pointer hover:bg-black/5 rounded p-0.5 transition-colors" />
                      <X className="w-4 h-4 cursor-pointer hover:bg-red-500 hover:text-white rounded p-0.5 transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 pb-4 pt-1 flex gap-3.5 items-start">
                    {/* Logo SVG */}
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl shadow-sm overflow-hidden">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect width="100" height="100" fill="#10b981" />
                          <path
                            d="M25 20 H 75 A 8 8 0 0 1 83 28 V 32 A 8 8 0 0 1 75 40 H 45 V 42 H 68 A 8 8 0 0 1 76 50 V 54 A 8 8 0 0 1 68 62 H 45 V 75 A 8 8 0 0 1 37 83 H 33 A 8 8 0 0 1 25 75 V 20 Z"
                            fill="white"
                          />
                          <rect
                            x="60"
                            y="55"
                            width="8"
                            height="8"
                            rx="2"
                            fill="white"
                          />
                          <rect
                            x="72"
                            y="55"
                            width="8"
                            height="8"
                            rx="2"
                            fill="white"
                          />
                          <rect
                            x="84"
                            y="55"
                            width="8"
                            height="8"
                            rx="2"
                            fill="white"
                          />
                          <rect
                            x="60"
                            y="67"
                            width="8"
                            height="8"
                            rx="2"
                            fill="white"
                          />
                          <rect
                            x="72"
                            y="67"
                            width="8"
                            height="8"
                            rx="2"
                            fill="white"
                          />
                          <rect
                            x="84"
                            y="67"
                            width="8"
                            height="8"
                            rx="2"
                            fill="white"
                          />
                          <rect
                            x="60"
                            y="79"
                            width="8"
                            height="8"
                            rx="2"
                            fill="white"
                          />
                          <rect
                            x="72"
                            y="79"
                            width="8"
                            height="8"
                            rx="2"
                            fill="white"
                          />
                          <rect
                            x="84"
                            y="79"
                            width="8"
                            height="8"
                            rx="2"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col h-full pt-0.5">
                      <div className="leading-snug">
                        <p className="text-gray-900 text-[13px] font-normal leading-5">
                          <span className="font-semibold text-black">
                            {dict.ertesitesek.notification.guestName}
                          </span>{" "}
                          {dict.ertesitesek.notification.message}
                        </p>
                        <p className="text-gray-900 text-[13px] mt-1 font-normal">
                          {dict.ertesitesek.notification.title}
                        </p>
                      </div>
                      <p className="text-gray-500 text-[11px] mt-2">
                        www.bukio.hu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "ONE CLICK" SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-[#0d5e4b]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#0d5e4b]">
            <MousePointerClick className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {dict.ertesitesek.accessibility.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {dict.ertesitesek.accessibility.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            {dict.ertesitesek.accessibility.devices.map(
              (device: any, index: number) => {
                const icons = [Laptop, Smartphone, null];
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className={`p-4 bg-gray-50 rounded-xl flex flex-col items-center hover:bg-emerald-50 transition-colors ${
                      index === 2 ? "col-span-2 md:col-span-1" : ""
                    }`}
                  >
                    {Icon ? (
                      <Icon className="w-8 h-8 text-gray-400 mb-3" />
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center font-bold text-gray-400 mb-3">
                        T
                      </div>
                    )}
                    <span className="font-semibold text-gray-700">
                      {device}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-[#0d5e4b] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {dict.ertesitesek.finalCta.title}
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            {dict.ertesitesek.finalCta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href={`https://www.bukio.hu/auth/register?trigger=${lang}`}
              className="px-8 py-4 bg-white text-[#0d5e4b] font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
            >
              {dict.ertesitesek.finalCta.ctaPrimary}
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="px-8 py-4 bg-[#0a4a3a] text-white font-semibold rounded-xl border border-[#166352] hover:bg-[#083d30] transition-colors"
            >
              {dict.ertesitesek.finalCta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
