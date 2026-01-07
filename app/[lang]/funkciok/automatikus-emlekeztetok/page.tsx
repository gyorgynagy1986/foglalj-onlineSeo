// app/[lang]/funkciok/automatikus-emailek/page.tsx
import React from "react";
import { Metadata,  } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Globe,
  Edit3,
  Eye,
  CheckCircle,
  Clock,
  Bell,
  Languages,
  Sparkles,
  ArrowRight,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { dictionariesFun } from "@/app/[lang]/dictionaries";

import emailPhoto from "../../../../public/photos/email.png";

export const metadata: Metadata = {
  title: "Automatikus Email Emlékeztetők | FoglaljOnline",
  description:
    "4 nyelvű email sablonok, automata küldés, követés és szerkesztés. Csökkentsd a no-show arányt 70%-kal!",
};

interface AutomatikusEmlekeztokPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AutomatikusEmlekeztokPage({
  params,
}: AutomatikusEmlekeztokPageProps) {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8faf9] pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumbs */}
        <nav className="text-xs md:text-sm text-gray-600 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href={`/${lang}`}
                className="hover:text-[#0d5e4b] transition-colors"
              >
                {dict.automatikusEmailek.breadcrumbs.home}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/${lang}#features`}
                className="hover:text-[#0d5e4b] transition-colors"
              >
                {dict.automatikusEmailek.breadcrumbs.features}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              {dict.automatikusEmailek.breadcrumbs.current}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-xs md:text-sm mb-6">
            <Mail className="w-4 h-4" />
            {dict.automatikusEmailek.hero.badge}
          </div>

          <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-bold text-gray-900 mb-6 leading-tight tracking-tight px-2">
            {dict.automatikusEmailek.hero.title}
            <span className="text-[#0d5e4b] block md:inline">
              {" "}
              {dict.automatikusEmailek.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 px-2">
            {dict.automatikusEmailek.hero.description}
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-6 py-6 md:px-8 md:py-4 bg-emerald-50 rounded-2xl border border-emerald-200 mx-4 md:mx-auto md:inline-flex">
            {dict.automatikusEmailek.hero.stats.map((stat, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="w-full h-px md:w-px md:h-12 bg-emerald-200/50 md:bg-emerald-200" />
                )}

                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </header>

        {/* Email Types Grid */}
        <section className="mb-20">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.automatikusEmailek.emailTypes.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.automatikusEmailek.emailTypes.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              {dict.automatikusEmailek.emailTypes.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.automatikusEmailek.emailTypes.types.map(
              (type: any, index: number) => {
                const icons = [
                  CheckCircle,
                  Bell,
                  Mail,
                  Clock,
                  TrendingUp,
                  Sparkles,
                ];
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`w-14 h-14 ${type.color} rounded-xl flex items-center justify-center mb-5`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {type.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full whitespace-nowrap">
                        {type.timing}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Multilingual Support */}
        <section className="bg-gradient-to-br from-[#0d5e4b]/5 to-blue-50 rounded-3xl p-6 md:p-16 mb-20 border border-[#0d5e4b]/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-[#0d5e4b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Languages className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                {dict.automatikusEmailek.multilingual.title}{" "}
                <span className="text-[#0d5e4b]">
                  {dict.automatikusEmailek.multilingual.titleHighlight}
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                {dict.automatikusEmailek.multilingual.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {dict.automatikusEmailek.multilingual.languages.map(
                (language: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 md:p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-3xl md:text-4xl mb-3">
                      {language.flag}
                    </div>
                    <div className="font-bold text-gray-900 mb-1">
                      {language.name}
                    </div>
                    <div className="text-xs text-gray-500">{language.code}</div>
                  </div>
                )
              )}
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#0d5e4b]" />
                {dict.automatikusEmailek.multilingual.howItWorks.title}
              </h3>
              <ul className="space-y-3">
                {dict.automatikusEmailek.multilingual.howItWorks.points.map(
                  (item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Email Editor Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {dict.automatikusEmailek.editor.title}{" "}
                <span className="text-[#0d5e4b]">
                  {dict.automatikusEmailek.editor.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {dict.automatikusEmailek.editor.description}
              </p>

              <div className="space-y-4">
                {dict.automatikusEmailek.editor.features.map(
                  (feature: any, index: number) => {
                    const icons = [Sparkles, Edit3, Globe, Mail];
                    const Icon = icons[index];
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="w-10 h-10 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#0d5e4b]" />
                        </div>
                        <span className="font-medium text-gray-700 text-sm md:text-base">
                          {feature}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden min-h-[300px] md:h-full relative shadow-lg">
              <Image
                priority
                className="object-cover"
                fill
                src={emailPhoto}
                alt={dict.automatikusEmailek.editor.imageAlt}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Email Tracking Section */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-6 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                {dict.automatikusEmailek.tracking.title}{" "}
                <span className="text-[#0d5e4b]">
                  {dict.automatikusEmailek.tracking.titleHighlight}
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                {dict.automatikusEmailek.tracking.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {dict.automatikusEmailek.tracking.stats.map(
                (stat: any, index: number) => {
                  const icons = [Mail, Eye, BarChart3];
                  const Icon = icons[index];
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm"
                    >
                      <div
                        className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className={`w-7 h-7 ${stat.color}`} />
                      </div>
                      <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.title}</div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="mt-10 bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#0d5e4b]" />
                {dict.automatikusEmailek.tracking.features.title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {dict.automatikusEmailek.tracking.features.items.map(
                  (item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-700 text-sm md:text-base"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0d5e4b] to-[#0a4a3a] rounded-3xl p-8 md:p-16 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {dict.automatikusEmailek.finalCta.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {dict.automatikusEmailek.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://www.bukio.hu/auth/register?trigger=${lang}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0d5e4b] font-bold rounded-xl hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              {dict.automatikusEmailek.finalCta.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              {dict.automatikusEmailek.finalCta.ctaSecondary}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
