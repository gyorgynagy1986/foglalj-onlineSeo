// app/[lang]/funkciok/dinamikus-idoszabalyok/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Users,
  Calendar,
  Settings,
  ArrowRight,
  Zap,
  TrendingUp,
  AlertCircle,
  Target,
} from "lucide-react";
import { dictionariesFun } from "@/app/[lang]/dictionaries";
import DinamikusIdoDemo from "./DinamikusIdoDemo";

interface DinamikusIdoPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: DinamikusIdoPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

  return {
    title: dict.dinamikusIdo.metadata.title,
    description: dict.dinamikusIdo.metadata.description,
  };
}

export default async function DinamikusIdoPage({
  params,
}: DinamikusIdoPageProps) {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8faf9] pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-8">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href={`/${lang}`}
                className="hover:text-[#0d5e4b] transition-colors"
              >
                {dict.dinamikusIdo.breadcrumbs.home}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/${lang}#features`}
                className="hover:text-[#0d5e4b] transition-colors"
              >
                {dict.dinamikusIdo.breadcrumbs.features}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              {dict.dinamikusIdo.breadcrumbs.current}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <Settings className="w-4 h-4" />
            {dict.dinamikusIdo.hero.badge}
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {dict.dinamikusIdo.hero.title}
            <span className="text-[#0d5e4b]">
              {" "}
              {dict.dinamikusIdo.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            {dict.dinamikusIdo.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`https://www.bukio.hu/auth/register?trigger=${lang}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0d5e4b] text-white font-semibold rounded-xl hover:bg-[#0a4a3a] transition-all duration-300 hover:shadow-lg"
            >
              {dict.dinamikusIdo.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`https://www.bukio.hu/auth/register?trigger=${lang}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#0d5e4b] transition-all duration-300"
            >
              {dict.dinamikusIdo.hero.ctaSecondary}
            </Link>
          </div>
        </header>

        {/* Interactive Demo */}
        <div className="mb-20">
          <DinamikusIdoDemo dict={dict} />
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dict.dinamikusIdo.features.map((feature: any, index: number) => {
            const icons = [Users, Calendar, Clock, Zap];
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How It Works Section */}
        <section className="bg-gradient-to-br from-[#0d5e4b]/5 to-emerald-50 rounded-3xl p-8 md:p-16 mb-20 border border-[#0d5e4b]/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {dict.dinamikusIdo.howItWorks.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.dinamikusIdo.howItWorks.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              {dict.dinamikusIdo.howItWorks.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {dict.dinamikusIdo.howItWorks.steps.map(
                (item: any, index: number) => {
                  const icons = [Users, Calendar, Clock];
                  const Icon = icons[index];
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-8 border border-gray-100 relative"
                    >
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0d5e4b] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                        {item.step}
                      </div>
                      <div className="w-12 h-12 bg-[#0d5e4b]/10 rounded-xl flex items-center justify-center mb-5 mt-4">
                        <Icon className="w-6 h-6 text-[#0d5e4b]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="bg-emerald-50 rounded-lg px-4 py-2 text-sm text-emerald-700 font-medium">
                        {item.example}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.dinamikusIdo.useCases.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.dinamikusIdo.useCases.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.dinamikusIdo.useCases.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dict.dinamikusIdo.useCases.cases.map(
              (useCase: any, index: number) => {
                const icons = [Zap, Users, Clock, Calendar];
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 ${useCase.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {useCase.description}
                    </p>
                    <div className="bg-blue-50 rounded-xl px-4 py-3 border border-blue-100">
                      <div className="text-xs text-blue-600 font-semibold mb-1">
                        {dict.dinamikusIdo.useCases.exampleLabel}
                      </div>
                      <div className="text-sm text-blue-900 font-medium">
                        {useCase.example}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Complex Example Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-10 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {dict.dinamikusIdo.complexExample.title}{" "}
                <span className="text-[#0d5e4b]">
                  {dict.dinamikusIdo.complexExample.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                {dict.dinamikusIdo.complexExample.subtitle}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {dict.dinamikusIdo.complexExample.situation.title}
                  </h3>
                  <p className="text-gray-600">
                    {dict.dinamikusIdo.complexExample.situation.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {dict.dinamikusIdo.complexExample.rules.map(
                  (rule: any, index: number) => {
                    const colors = [
                      "border-blue-500",
                      "border-emerald-500",
                      "border-purple-500",
                    ];
                    return (
                      <div
                        key={index}
                        className={`border-l-4 ${colors[index]} pl-4 py-2`}
                      >
                        <div className="font-bold text-gray-900 mb-1">
                          {rule.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {rule.description}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-emerald-900 mb-2">
                    {dict.dinamikusIdo.complexExample.result.title}
                  </div>
                  <div className="text-sm text-emerald-800 leading-relaxed">
                    {dict.dinamikusIdo.complexExample.result.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.dinamikusIdo.benefits.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.dinamikusIdo.benefits.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.dinamikusIdo.benefits.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dict.dinamikusIdo.benefits.items.map(
              (benefit: any, index: number) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-[#0d5e4b]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* Settings Flexibility Section */}
        <section className="bg-white rounded-2xl p-10 md:p-12 border border-gray-100 shadow-lg mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Settings className="w-7 h-7 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {dict.dinamikusIdo.settings.title}
              </h2>
              <p className="text-lg text-gray-600">
                {dict.dinamikusIdo.settings.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {dict.dinamikusIdo.settings.sections.map(
                (section: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100"
                  >
                    <h3 className="font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-[#0d5e4b] rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0d5e4b] to-[#0a4a3a] rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dict.dinamikusIdo.finalCta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {dict.dinamikusIdo.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://www.bukio.hu/auth/register?trigger=${lang}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0d5e4b] font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              {dict.dinamikusIdo.finalCta.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              {dict.dinamikusIdo.finalCta.ctaSecondary}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
