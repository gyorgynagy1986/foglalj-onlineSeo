// app/[lang]/funkciok/mobilbarat-felulet/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Tablet,
  Monitor,
  Zap,
  Check,
  ArrowRight,
  Users,
  Clock,
  Star,
  TrendingUp,
} from "lucide-react";
import { dictionariesFun } from "@/app/[lang]/dictionaries";

import phoneImage from "../../../../public/photos/phone.png";

interface MobilbaratPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: MobilbaratPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

  return {
    title: dict.mobilbarat.metadata.title,
    description: dict.mobilbarat.metadata.description,
  };
}

export default async function MobilbaratPage({ params }: MobilbaratPageProps) {
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
                {dict.mobilbarat.breadcrumbs.home}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/${lang}#features`}
                className="hover:text-[#0d5e4b] transition-colors"
              >
                {dict.mobilbarat.breadcrumbs.features}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              {dict.mobilbarat.breadcrumbs.current}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <Smartphone className="w-4 h-4" />
            {dict.mobilbarat.hero.badge}
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {dict.mobilbarat.hero.title}
            <span className="text-[#0d5e4b]">
              {" "}
              {dict.mobilbarat.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            {dict.mobilbarat.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`/${lang}#demo`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0d5e4b] text-white font-semibold rounded-xl hover:bg-[#0a4a3a] transition-all duration-300 hover:shadow-lg"
            >
              {dict.mobilbarat.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#0d5e4b] transition-all duration-300"
            >
              {dict.mobilbarat.hero.ctaSecondary}
            </Link>
          </div>
        </header>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {dict.mobilbarat.stats.map((stat: any, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#0d5e4b] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dict.mobilbarat.features.map((feature: any, index: number) => {
            const icons = [Smartphone, Tablet, Monitor, Zap];
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

        {/* Mobile Guest Experience */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-[400px] lg:min-h-[600px]">
                <Image
                  src={phoneImage}
                  alt={dict.mobilbarat.mobileExperience.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-7 h-7 text-blue-600" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {dict.mobilbarat.mobileExperience.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  {dict.mobilbarat.mobileExperience.description}
                </p>

                <div className="space-y-4">
                  {dict.mobilbarat.mobileExperience.features.map(
                    (feature: any, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-blue-600" />
                    <span className="font-bold text-blue-900">
                      {dict.mobilbarat.mobileExperience.highlight.title}
                    </span>
                  </div>
                  <p className="text-sm text-blue-800">
                    {dict.mobilbarat.mobileExperience.highlight.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tablet Restaurant Management */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-16 border border-emerald-100">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Tablet className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {dict.mobilbarat.tabletManagement.title}{" "}
                  <span className="text-[#0d5e4b]">
                    {dict.mobilbarat.tabletManagement.titleHighlight}
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  {dict.mobilbarat.tabletManagement.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {dict.mobilbarat.tabletManagement.features.map(
                  (feature: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-emerald-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="bg-white rounded-xl p-8 border border-emerald-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {dict.mobilbarat.tabletManagement.useCase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {dict.mobilbarat.tabletManagement.useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Device Showcase */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-10 md:p-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.mobilbarat.deviceShowcase.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.mobilbarat.deviceShowcase.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.mobilbarat.deviceShowcase.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {dict.mobilbarat.deviceShowcase.devices.map(
              (device: any, index: number) => {
                const icons = [Smartphone, Tablet, Monitor];
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`w-16 h-16 ${device.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-4">
                      {device.title}
                    </h3>
                    <ul className="space-y-2 text-left">
                      {device.features.map(
                        (feature: string, fIndex: number) => (
                          <li
                            key={fIndex}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <Check className="w-4 h-4 text-[#0d5e4b] flex-shrink-0" />
                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Performance Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-10 md:p-12 border border-gray-100 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-7 h-7 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {dict.mobilbarat.performance.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {dict.mobilbarat.performance.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {dict.mobilbarat.performance.items.map(
                  (item: any, index: number) => {
                    const icons = [Clock, Smartphone, TrendingUp, Star];
                    const Icon = icons[index];
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100"
                      >
                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0d5e4b] to-[#0a4a3a] rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dict.mobilbarat.finalCta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {dict.mobilbarat.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}#demo`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0d5e4b] font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              {dict.mobilbarat.finalCta.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              {dict.mobilbarat.finalCta.ctaSecondary}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
