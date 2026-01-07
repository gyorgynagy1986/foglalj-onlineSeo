// app/[lang]/funkciok/qr-kod-bejelentkezes/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  QrCode,
  Smartphone,
  Zap,
  Shield,
  Check,
  ArrowRight,
  Download,
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
  FileText,
} from "lucide-react";
import { dictionariesFun } from "@/app/[lang]/dictionaries";
import QrKodDemo from "./QrKodDemo";

interface QrKodPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: QrKodPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await dictionariesFun[lang as keyof typeof dictionariesFun]();

  return {
    title: dict.qrKod.metadata.title,
    description: dict.qrKod.metadata.description,
  };
}

export default async function QrKodPage({ params }: QrKodPageProps) {
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
                {dict.qrKod.breadcrumbs.home}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/${lang}#features`}
                className="hover:text-[#0d5e4b] transition-colors"
              >
                {dict.qrKod.breadcrumbs.features}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              {dict.qrKod.breadcrumbs.current}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <QrCode className="w-4 h-4" />
            {dict.qrKod.hero.badge}
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {dict.qrKod.hero.title}
            <span className="text-[#0d5e4b]">
              {" "}
              {dict.qrKod.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            {dict.qrKod.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`/${lang}#demo`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0d5e4b] text-white font-semibold rounded-xl hover:bg-[#0a4a3a] transition-all duration-300 hover:shadow-lg"
            >
              {dict.qrKod.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#0d5e4b] transition-all duration-300"
            >
              {dict.qrKod.hero.ctaSecondary}
            </Link>
          </div>
        </header>

        {/* Interactive QR Demo */}
        <div className="mb-20">
          <QrKodDemo dict={dict} />
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dict.qrKod.features.map((feature: any, index: number) => {
            const icons = [Zap, Smartphone, Shield, Download];
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
              {dict.qrKod.howItWorks.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.qrKod.howItWorks.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              {dict.qrKod.howItWorks.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {dict.qrKod.howItWorks.steps.map((item: any, index: number) => {
                const icons = [CheckCircle2, Download, Smartphone];
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
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guest Experience Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-10 md:p-12 border border-gray-100 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {dict.qrKod.guestExperience.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {dict.qrKod.guestExperience.description}
                </p>
                <ul className="space-y-4">
                  {dict.qrKod.guestExperience.features.map(
                    (item: any, index: number) => {
                      const icons = [
                        CheckCircle2,
                        FileText,
                        QrCode,
                        Smartphone,
                      ];
                      const Icon = icons[index];
                      return (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-600">
                              {item.desc}
                            </div>
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
              <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <QrCode className="w-40 h-40 text-blue-400 mx-auto mb-6" />
                  <div className="bg-white rounded-xl px-6 py-3 inline-block shadow-lg">
                    <p className="text-sm text-gray-500 mb-1">
                      {dict.qrKod.guestExperience.example.name}
                    </p>
                    <p className="font-bold text-gray-900">
                      {dict.qrKod.guestExperience.example.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.qrKod.benefits.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.qrKod.benefits.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.qrKod.benefits.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dict.qrKod.benefits.items.map((benefit: any, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-[#0d5e4b]" />
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
            ))}
          </div>
        </section>

        {/* Security & Efficiency Section */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-10 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {dict.qrKod.security.title}{" "}
                <span className="text-[#0d5e4b]">
                  {dict.qrKod.security.titleHighlight}
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                {dict.qrKod.security.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {dict.qrKod.security.features.map(
                (feature: any, index: number) => {
                  const icons = [Shield, Clock];
                  const Icon = icons[index];
                  const colors = ["bg-purple-50", "bg-blue-50"];
                  const iconColors = ["text-purple-600", "text-blue-600"];
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-gray-100"
                    >
                      <div
                        className={`w-12 h-12 ${colors[index]} rounded-lg flex items-center justify-center mb-4`}
                      >
                        <Icon className={`w-6 h-6 ${iconColors[index]}`} />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* Real Use Cases */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.qrKod.useCases.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.qrKod.useCases.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.qrKod.useCases.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dict.qrKod.useCases.cases.map((useCase: any, index: number) => {
              const icons = [Zap, Sparkles, Smartphone];
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 ${useCase.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {useCase.scenario}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0d5e4b] to-[#0a4a3a] rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dict.qrKod.finalCta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {dict.qrKod.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}#demo`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0d5e4b] font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              {dict.qrKod.finalCta.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              {dict.qrKod.finalCta.ctaSecondary}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
