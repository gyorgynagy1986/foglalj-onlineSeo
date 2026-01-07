// app/[lang]/funkciok/testreszabhato-szabalyok/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  Settings,
  Clock,
  Calendar,
  Check,
  ArrowRight,
  Users,
  Zap,
  Target,
  XCircle,
  Shield,
  Combine,
  TrendingUp,
  Bell,
  Mail,
} from "lucide-react";
import { dictionariesFun } from "@/app/[lang]/dictionaries";
import SzabalyokDemo from "./SzabalyokDemo";

interface SzabalyokPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: SzabalyokPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

  return {
    title: dict.szabalyok.metadata.title,
    description: dict.szabalyok.metadata.description,
  };
}

export default async function SzabalyokPage({ params }: SzabalyokPageProps) {
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
                {dict.szabalyok.breadcrumbs.home}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/${lang}#features`}
                className="hover:text-[#0d5e4b] transition-colors"
              >
                {dict.szabalyok.breadcrumbs.features}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              {dict.szabalyok.breadcrumbs.current}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <Settings className="w-4 h-4" />
            {dict.szabalyok.hero.badge}
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {dict.szabalyok.hero.title}
            <span className="text-[#0d5e4b]">
              {" "}
              {dict.szabalyok.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            {dict.szabalyok.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`/${lang}#demo`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0d5e4b] text-white font-semibold rounded-xl hover:bg-[#0a4a3a] transition-all duration-300 hover:shadow-lg"
            >
              {dict.szabalyok.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#0d5e4b] transition-all duration-300"
            >
              {dict.szabalyok.hero.ctaSecondary}
            </Link>
          </div>
        </header>

        {/* Interactive Demo */}
        <div className="mb-20">
          <SzabalyokDemo dict={dict} />
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dict.szabalyok.mainFeatures.map((feature: any, index: number) => {
            const icons = [Clock, Combine, TrendingUp, Users];
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

        {/* All Rules Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.szabalyok.allRules.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.szabalyok.allRules.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.szabalyok.allRules.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {dict.szabalyok.allRules.categories.map(
              (category: any, index: number) => {
                const icons = [Clock, Combine, Shield, XCircle, Mail, Clock];
                const CategoryIcon = icons[index];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}
                      >
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.category}
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.rules.map((rule: any, ruleIndex: number) => (
                        <div
                          key={ruleIndex}
                          className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#0d5e4b] rounded-full flex-shrink-0 mt-2" />
                            <div>
                              <div className="font-semibold text-gray-900 text-sm mb-1">
                                {rule.name}
                              </div>
                              <div className="text-xs text-gray-600 leading-relaxed">
                                {rule.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Complex Example Section */}
        <section className="bg-gradient-to-br from-[#0d5e4b]/5 to-emerald-50 rounded-3xl p-8 md:p-16 mb-20 border border-[#0d5e4b]/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {dict.szabalyok.complexExample.title}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              {dict.szabalyok.complexExample.subtitle}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dict.szabalyok.complexExample.sections.map(
                (section: any, index: number) => {
                  const icons = [
                    Calendar,
                    Shield,
                    Combine,
                    XCircle,
                    Mail,
                    Users,
                  ];
                  const SectionIcon = icons[index];
                  return (
                    <div
                      key={index}
                      className={`bg-white rounded-xl p-6 border ${section.color}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <SectionIcon className="w-5 h-5 text-gray-700" />
                        </div>
                        <h3 className="font-bold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {section.items.map(
                          (item: string, itemIndex: number) => (
                            <li
                              key={itemIndex}
                              className="text-sm text-gray-700 leading-relaxed"
                            >
                              • {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  );
                }
              )}
            </div>

            <div className="mt-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-emerald-900 mb-2">
                    {dict.szabalyok.complexExample.automation.title}
                  </div>
                  <div className="text-sm text-emerald-800 leading-relaxed">
                    {dict.szabalyok.complexExample.automation.description}
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
              {dict.szabalyok.benefits.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.szabalyok.benefits.titleHighlight}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dict.szabalyok.benefits.items.map(
              (benefit: any, index: number) => {
                const icons = [Target, Zap, Shield, Users, TrendingUp, Bell];
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-[#0d5e4b]/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#0d5e4b]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0d5e4b] to-[#0a4a3a] rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dict.szabalyok.finalCta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {dict.szabalyok.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}#demo`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0d5e4b] font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              {dict.szabalyok.finalCta.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              {dict.szabalyok.finalCta.ctaSecondary}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
