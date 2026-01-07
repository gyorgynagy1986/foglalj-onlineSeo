// app/[lang]/funkciok/analitika/page.tsx
import {
  BarChart3,
  TrendingUp,
  PieChart,
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { dictionariesFun } from "@/app/[lang]/dictionaries";

import analitikaPhoto from "../../../../public/photos/analitika.png";

interface AnalyticsPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AnalyticsPage({ params }: AnalyticsPageProps) {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

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
                  {dict.analitika.breadcrumbs.home}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href={`/${lang}#features`}
                  className="hover:text-[#0d5e4b] transition-colors"
                >
                  {dict.analitika.breadcrumbs.features}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">
                {dict.analitika.breadcrumbs.current}
              </li>
            </ol>
          </nav>
          <Link
            href={`/${lang}#features`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#0d5e4b] transition-colors self-start md:self-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            {dict.analitika.backButton}
          </Link>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="pt-10 pb-20 px-6 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-50/60 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-50/60 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-8 border border-[#0d5e4b]/20">
            <BarChart3 className="w-4 h-4" />
            {dict.analitika.hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {dict.analitika.hero.title} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d5e4b] to-emerald-600">
              {dict.analitika.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {dict.analitika.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0d5e4b] text-white font-bold rounded-xl hover:bg-[#0a4a3a] transition-all shadow-lg hover:shadow-emerald-500/30"
            >
              {dict.analitika.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MAIN SCREENSHOT */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>

          <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 aspect-[16/9] flex items-center justify-center">
            <Image
              src={analitikaPhoto}
              fill
              className="object-cover"
              alt={dict.analitika.screenshot.alt}
            />
          </div>
        </div>
      </section>

      {/* 3. FEATURES DETAIL */}
      <section className="py-24 bg-[#f8faf9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {dict.analitika.features.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dict.analitika.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.analitika.features.cards.map((card: any, index: number) => {
              const icons = [CalendarClock, TrendingUp, PieChart, Users];
              const Icon = icons[index];
              const bgColors = [
                "bg-emerald-50 text-emerald-600 group-hover:bg-[#0d5e4b]",
                "bg-teal-50 text-teal-600 group-hover:bg-teal-600",
                "bg-green-50 text-green-600 group-hover:bg-green-600",
                "bg-[#0d5e4b]/10 text-[#0d5e4b] group-hover:bg-[#0d5e4b]",
              ];
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 ${bgColors[index]} rounded-lg flex items-center justify-center mb-4 group-hover:text-white transition-colors`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {card.description}
                  </p>
                  <div
                    className={`text-xs font-semibold ${card.badgeColor} p-2 rounded inline-block`}
                  >
                    {card.example}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OPTIMIZATION SECTION */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {dict.analitika.optimization.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {dict.analitika.optimization.description}
            </p>
            <ul className="space-y-6">
              {dict.analitika.optimization.points.map(
                (point: any, index: number) => {
                  const bgColors = [
                    "bg-emerald-100 text-emerald-600",
                    "bg-teal-100 text-teal-600",
                  ];
                  return (
                    <li key={index} className="flex items-start gap-4">
                      <div
                        className={`w-8 h-8 rounded-full ${bgColors[index]} flex items-center justify-center shrink-0 mt-1`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {point.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {point.description}
                        </p>
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Right: Charts */}
          <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-50 to-teal-50 rounded-full blur-3xl -z-10" />

            <div className="grid grid-cols-2 gap-4 p-5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 shadow-xl">
              {/* Mini Chart 1: Revenue */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 col-span-2 sm:col-span-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wide">
                    <Wallet className="w-3.5 h-3.5 text-emerald-500" />{" "}
                    {dict.analitika.charts.revenue.label}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {dict.analitika.charts.revenue.growth}
                  </span>
                </div>
                <div className="flex items-end gap-2 h-24 mt-2 px-1">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-emerald-50 rounded-t-sm relative group overflow-hidden"
                    >
                      <div
                        className="absolute bottom-0 w-full bg-emerald-500 rounded-t-sm transition-all duration-1000 group-hover:bg-[#0d5e4b]"
                        style={{ height: `${h}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-gray-400 font-medium">
                  {dict.analitika.charts.revenue.days.map(
                    (day: string, i: number) => (
                      <span key={i}>{day}</span>
                    )
                  )}
                </div>
              </div>

              {/* Mini Chart 2: Visitors */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 col-span-2 sm:col-span-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wide">
                    <Users className="w-3.5 h-3.5 text-teal-500" />{" "}
                    {dict.analitika.charts.visitors.label}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {dict.analitika.charts.visitors.total}{" "}
                  <span className="text-sm font-normal text-gray-400">
                    {dict.analitika.charts.visitors.unit}
                  </span>
                </div>

                <div className="h-16 w-full relative overflow-hidden mt-2">
                  <svg
                    viewBox="0 0 100 40"
                    className="w-full h-full overflow-visible preserve-3d"
                  >
                    <defs>
                      <linearGradient
                        id="gradientGreen"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#0d9488"
                          stopOpacity="0.5"
                        />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 35 Q 20 38, 40 20 T 100 5"
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 35 Q 20 38, 40 20 T 100 5 V 40 H 0 Z"
                      fill="url(#gradientGreen)"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </div>

              {/* Mini Chart 3: KPI Cards */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 col-span-2 flex items-center justify-around divide-x divide-gray-100">
                {dict.analitika.charts.kpis.map((kpi: any, index: number) => (
                  <div key={index} className="text-center px-2">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">
                      {kpi.label}
                    </div>
                    <div
                      className={`text-xl md:text-2xl font-bold ${
                        kpi.highlight ? "text-emerald-600" : "text-gray-900"
                      }`}
                    >
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-[#0d5e4b] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {dict.analitika.finalCta.title}
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            {dict.analitika.finalCta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href={`https://www.bukio.hu/auth/register?trigger=${lang}`}
              className="px-8 py-4 bg-white text-[#0d5e4b] font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
            >
              {dict.analitika.finalCta.ctaPrimary}
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="px-8 py-4 bg-[#0a4a3a] text-white font-semibold rounded-xl border border-[#166352] hover:bg-[#083d30] transition-colors"
            >
              {dict.analitika.finalCta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
