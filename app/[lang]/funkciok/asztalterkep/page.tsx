// app/[lang]/funkciok/asztalterkep/page.tsx
import Link from "next/link";
import {
  Table2,
  Smartphone,
  Download,
  Clock,
  Users,
  MapPin,
  Check,
  ArrowRight,
  Eye,
} from "lucide-react";
import AsztalTerkepDemo from "./AsztalTerkepDemo";
import { dictionariesFun } from "@/app/[lang]/dictionaries"; // Feltételezve, hogy itt található

interface AsztalTerkepPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AsztalTerkepPage({
  params,
}: AsztalTerkepPageProps) {
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
                {dict.asztalterkep.breadcrumbs.home}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/${lang}#features`}
                className="hover:text-[#0d5e4b] transition-colors"
              >
                {dict.asztalterkep.breadcrumbs.features}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">
              {dict.asztalterkep.breadcrumbs.current}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <Table2 className="w-4 h-4" />
            {dict.asztalterkep.hero.badge}
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {dict.asztalterkep.hero.title}{" "}
            <span className="text-[#0d5e4b]">
              {dict.asztalterkep.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            {dict.asztalterkep.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`https://www.bukio.hu/auth/register`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0d5e4b] text-white font-semibold rounded-xl hover:bg-[#0a4a3a] transition-all duration-300 hover:shadow-lg"
            >
              {dict.asztalterkep.hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`https://www.bukio.hu/auth/register`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#0d5e4b] transition-all duration-300"
            >
              {dict.asztalterkep.hero.ctaSecondary}
            </Link>
          </div>
        </header>

        {/* Interactive Timeline Demo */}
        <div className="mb-20">
          <AsztalTerkepDemo dict={dict.asztalterkep.demo} />
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dict.asztalterkep.features.map((feature: any, index: number) => {
            const icons = [Table2, Download, Smartphone, Eye];
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon className="w-7 h-7" />
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

        {/* Booking Information Section */}
        <section className="bg-gradient-to-br from-[#0d5e4b]/5 to-emerald-50 rounded-3xl p-5 md:p-16 mb-20 border border-[#0d5e4b]/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {dict.asztalterkep.bookingInfo.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.asztalterkep.bookingInfo.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              {dict.asztalterkep.bookingInfo.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {dict.asztalterkep.bookingInfo.items.map(
                (item: any, index: number) => {
                  const icons = [Users, Clock, MapPin, Clock];
                  const Icon = icons[index];
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#0d5e4b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#0d5e4b]" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 mb-1">
                            {item.label}
                          </div>
                          <div className="font-semibold text-gray-900">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* Export Features */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-10 md:p-12 border border-gray-100 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <Download className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {dict.asztalterkep.export.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {dict.asztalterkep.export.description}
                </p>
                <ul className="space-y-3">
                  {dict.asztalterkep.export.features.map(
                    (item: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-emerald-600" />
                        </div>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="flex-1 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <Download className="w-32 h-32 text-emerald-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Design Section */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.asztalterkep.responsive.title}{" "}
              <span className="text-[#0d5e4b]">
                {dict.asztalterkep.responsive.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.asztalterkep.responsive.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {dict.asztalterkep.responsive.devices.map(
              (device: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl pb-4 text-center border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{device.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {device.title}
                  </h3>
                  <p className="text-sm text-gray-600">{device.desc}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0d5e4b] to-[#0a4a3a] rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dict.asztalterkep.finalCta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {dict.asztalterkep.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://www.bukio.hu/auth/register?trigger=${lang}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0d5e4b] font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              {dict.asztalterkep.finalCta.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              {dict.asztalterkep.finalCta.ctaSecondary}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
