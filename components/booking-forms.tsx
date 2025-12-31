"use client";

import {
  Calendar,
  MessageSquare,
  ListChecks,
  Eye,
  Play,
  Sparkles,
  Palette,
  Repeat,
} from "lucide-react";
import Link from "next/link";

interface BookingFormsProps {
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    formTypes: Array<{
      name: string;
      description: string;
      features: string[];
      popular?: string;
    }>;
    buttons: {
      preview: string;
      demo: string;
    };
    account: {
      title: string;
      subtitle: string;
      features: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

const formTypeIcons = [Calendar, ListChecks, MessageSquare];

const formTypeUrls = [
  {
    previewUrl: "https://www.bukio.hu/booking/standard-foglalas",
    demoUrl: "https://www.bukio.hu/booking/standard-foglalas",
  },
  {
    previewUrl: "https://www.bukio.hu/booking/lepesenkenti-foglalas",
    demoUrl: "https://www.bukio.hu/booking/lepesenkenti-foglalas",
    popular: true,
  },
  {
    previewUrl: "https://www.bukio.hu/booking/chatbot",
    demoUrl: "https://www.bukio.hu/booking/chatbot",
  },
];

const accountFeatureIcons = [Repeat, Palette, Sparkles];

export default function BookingForms({ dict }: BookingFormsProps) {
  return (
    <section id="booking-forms" className="py-24 md:py-32 bg-[#f8faf9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
            <span className="w-1.5 h-1.5 bg-[#0d5e4b] rounded-full" />
            {dict.badge}
          </div>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold text-gray-900 leading-tight mb-5 tracking-[-0.02em]">
            {dict.title}{" "}
            <span className="text-[#0d5e4b]">{dict.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {dict.description}
          </p>
        </div>

        {/* Form Types */}
        <div className="grid md:grid-cols-3 gap-6">
          {dict.formTypes.map((form, index) => {
            const Icon = formTypeIcons[index];
            const urls = formTypeUrls[index];
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(13,94,75,0.15)] ${
                  urls.popular
                    ? "border-[#0d5e4b] shadow-lg"
                    : "border-gray-100 hover:border-[#0d5e4b]/20"
                }`}
              >
                {/* Popular badge */}
                {urls.popular && form.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0d5e4b] text-white text-xs font-semibold rounded-full">
                    {form.popular}
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0d5e4b] rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0d5e4b] transition-colors">
                    {form.name}
                  </h3>
                  <p className="text-gray-600 mb-5 text-[0.95rem] leading-relaxed">
                    {form.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {form.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#0d5e4b]/10 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-[#0d5e4b]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Buttons - Mobile: stacked, Desktop: side by side */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {urls.previewUrl ? (
                      <Link
                        href={urls.previewUrl}
                        target="_blank"
                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 text-white text-center bg-[#0d5e4b] hover:bg-[#0a4a3a] hover:shadow-lg"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4" />
                          {dict.buttons.preview}
                        </span>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base text-white opacity-50 cursor-not-allowed bg-[#0d5e4b]"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4" />
                          {dict.buttons.preview}
                        </span>
                      </button>
                    )}
                    {urls.demoUrl ? (
                      <Link
                        href={urls.demoUrl}
                        target="_blank"
                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 border-2 border-[#0d5e4b] text-[#0d5e4b] text-center hover:bg-[#0d5e4b] hover:text-white"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Play className="w-4 h-4" />
                          {dict.buttons.demo}
                        </span>
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base border-2 border-[#0d5e4b] text-[#0d5e4b] opacity-50 cursor-not-allowed"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Play className="w-4 h-4" />
                          {dict.buttons.demo}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom - Account Features */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {dict.account.title}
              </h3>
              <p className="text-gray-500 text-sm">{dict.account.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {dict.account.features.map((feature, index) => {
                const Icon = accountFeatureIcons[index];
                return (
                  <div key={index} className="text-center md:text-left">
                    <div className="w-10 h-10 mx-auto md:mx-0 mb-4 bg-[#0d5e4b]/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0d5e4b]" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
