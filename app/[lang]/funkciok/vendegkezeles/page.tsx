// app/[lang]/funkciok/vendegkezeles/page.tsx
import {
  Users,
  ShieldAlert,
  History,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { dictionariesFun } from "@/app/[lang]/dictionaries";

import warningPhoto from "../../../../public/photos/warning.jpg";
import userInfo from "../../../../public/photos/userinfo.jpg";

interface VendegkezelesPageProps {
  params: Promise<{ lang: string }>;
}

export default async function VendegkezelesPage({
  params,
}: VendegkezelesPageProps) {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

  // Check if vendegkezeles exists in dict, otherwise use a fallback
  if (!("vendegkezeles" in dict)) {
    console.error("vendegkezeles translations not found in dictionary");
  }

  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Breadcrumbs */}
          <nav className="text-xs md:text-sm text-gray-600 overflow-x-auto whitespace-nowrap pb-2">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href={`/${lang}`}
                  className="hover:text-emerald-600 transition-colors"
                >
                  {dict.vendegkezeles.breadcrumbs.home}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href={`/${lang}#features`}
                  className="hover:text-emerald-600 transition-colors"
                >
                  {dict.vendegkezeles.breadcrumbs.features}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">
                {dict.vendegkezeles.breadcrumbs.current}
              </li>
            </ol>
          </nav>

          {/* Back button */}
          <Link
            href={`/${lang}#features`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors self-start md:self-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            {dict.vendegkezeles.backButton}
          </Link>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="pt-10 pb-20 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 font-semibold text-sm mb-8 border border-emerald-100">
            <Users className="w-4 h-4" />
            {dict.vendegkezeles.hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {dict.vendegkezeles.hero.title} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              {dict.vendegkezeles.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {dict.vendegkezeles.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://www.bukio.hu/auth/register`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30"
            >
              {dict.vendegkezeles.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WARNING SYSTEM */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-[16/5] relative bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <Image
                src={warningPhoto}
                alt={dict.vendegkezeles.warningSystem.imageAlt}
                fill
                className="object-contain p-6"
                sizes="(min-width: 1024px) 80vw, 95vw"
              />
            </div>

            <div className="absolute -top-6 -right-6 bg-red-100 text-red-700 px-5 py-3 rounded-xl flex items-center gap-3 font-bold shadow-xl border border-white animate-bounce-slow hidden md:flex">
              <ShieldAlert className="w-6 h-6" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-70">
                  {dict.vendegkezeles.warningSystem.alertBadge}
                </div>
                <div>{dict.vendegkezeles.warningSystem.alertText}</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {dict.vendegkezeles.warningSystem.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {dict.vendegkezeles.warningSystem.description}
            </p>

            <div className="space-y-6">
              {dict.vendegkezeles.warningSystem.features.map(
                (feature: any, index: number) => {
                  const icons = [ShieldAlert, History];
                  const Icon = icons[index];
                  const colors = [
                    "bg-red-100 text-red-600",
                    "bg-amber-100 text-amber-600",
                  ];
                  return (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`w-12 h-12 ${colors[index]} rounded-xl flex items-center justify-center shrink-0`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED PROFILE */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {dict.vendegkezeles.detailedProfile.title}
              <br />
              <span className="text-emerald-600">
                {dict.vendegkezeles.detailedProfile.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {dict.vendegkezeles.detailedProfile.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {dict.vendegkezeles.detailedProfile.cards.map(
                (card: any, index: number) => {
                  const icons = [TrendingUp, MessageSquare];
                  const Icon = icons[index];
                  const colors = ["text-emerald-600", "text-blue-600"];
                  return (
                    <div
                      key={index}
                      className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className={`${colors[index]} mb-3`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="font-bold text-gray-900 mb-1">
                        {card.title}
                      </div>
                      <p className="text-sm text-gray-500">
                        {card.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>

            <ul className="space-y-3">
              {dict.vendegkezeles.detailedProfile.features.map(
                (item: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] relative bg-gray-50 rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
              <Image
                src={userInfo}
                alt={dict.vendegkezeles.detailedProfile.imageAlt}
                fill
                className="object-contain p-6"
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. BLOG TEASER */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {dict.vendegkezeles.blogTeaser.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {dict.vendegkezeles.blogTeaser.description}
            </p>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-sm border border-blue-100 hover:bg-blue-50 transition-colors cursor-not-allowed opacity-70">
              {dict.vendegkezeles.blogTeaser.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {dict.vendegkezeles.finalCta.title}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {dict.vendegkezeles.finalCta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://www.bukio.hu/auth/register?trigger=${lang}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0d5e4b] text-white font-bold rounded-xl hover:bg-[#0a4a3a] transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 w-full sm:w-auto"
            >
              {dict.vendegkezeles.finalCta.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              {dict.vendegkezeles.finalCta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
