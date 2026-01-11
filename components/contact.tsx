"use client";

// TypeScript típus a gtag-hez
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

import type React from "react";
import { useState, useEffect, useRef, useTransition } from "react";
import {
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { sendContactEmail } from "@/lib/actions/contact";

interface ContactProps {
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    contactInfo: {
      phoneLabel: string;
      phoneNumber: string;
      emailLabel: string;
      emailAddress: string;
    };
    responseTime: {
      label: string;
      text: string;
    };
    form: {
      title: string;
      fields: {
        name: {
          label: string;
          placeholder: string;
        };
        company: {
          label: string;
          placeholder: string;
        };
        email: {
          label: string;
          placeholder: string;
        };
        phone: {
          label: string;
          placeholder: string;
        };
        message: {
          label: string;
          placeholder: string;
        };
      };
      gdpr: {
        text: string;
        linkText: string;
      };
      submit: {
        idle: string;
        sending: string;
      };
      required: string;
    };
    feedback: {
      success: string;
      error: string;
      validationError: string;
    };
  };
}

export default function Contact({ dict }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    gdpr: false,
  });
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!formData.name || !formData.email || !formData.gdpr) {
      setFeedback({
        type: "error",
        message: dict.feedback.validationError,
      });
      return;
    }

    startTransition(async () => {
      const result = await sendContactEmail({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      if (result.success) {
        // Google Ads konverzió követés
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-824358872/YTHLCLi51d8bENjviokD",
          });
        }

        setFeedback({
          type: "success",
          message: dict.feedback.success,
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          gdpr: false,
        });
      } else {
        setFeedback({
          type: "error",
          message: result.error || dict.feedback.error,
        });
      }
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 bg-[#f8faf9]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Contact info */}
          <div className="fade-in opacity-0 translate-y-6 transition-all duration-600">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-sm mb-6">
              <span className="w-1.5 h-1.5 bg-[#0d5e4b] rounded-full" />
              {dict.badge}
            </div>

            <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-gray-900 mb-4 tracking-[-0.02em]">
              {dict.title}{" "}
              <span className="text-[#0d5e4b]">{dict.titleHighlight}</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {dict.subtitle}
            </p>

            <div className="flex flex-col gap-4">
              {/* Phone */}

              <a
                href={`tel:${dict.contactInfo.phoneNumber.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 transition-all duration-300 hover:border-[#0d5e4b]/20 hover:shadow-[0_10px_30px_-10px_rgba(13,94,75,0.15)]"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#0d5e4b] rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    {dict.contactInfo.phoneLabel}
                  </div>
                  <div className="font-semibold text-gray-900 group-hover:text-[#0d5e4b] transition-colors">
                    {dict.contactInfo.phoneNumber}
                  </div>
                </div>
              </a>

              {/* Email */}

              <a
                href={`mailto:${dict.contactInfo.emailAddress}`}
                className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 transition-all duration-300 hover:border-[#0d5e4b]/20 hover:shadow-[0_10px_30px_-10px_rgba(13,94,75,0.15)]"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#0d5e4b] rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    {dict.contactInfo.emailLabel}
                  </div>
                  <div className="font-semibold text-gray-900 group-hover:text-[#0d5e4b] transition-colors">
                    {dict.contactInfo.emailAddress}
                  </div>
                </div>
              </a>
            </div>

            {/* Response time note */}
            <div className="mt-8 p-4 bg-[#0d5e4b]/5 rounded-xl border border-[#0d5e4b]/10">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-[#0d5e4b]">
                  {dict.responseTime.label}
                </span>{" "}
                {dict.responseTime.text}
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <form
            onSubmit={handleSubmit}
            className="fade-in opacity-0 translate-y-6 transition-all duration-600 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              {dict.form.title}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {dict.form.fields.name.label}{" "}
                  <span className="text-red-500">{dict.form.required}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={dict.form.fields.name.placeholder}
                  className="w-full px-4 py-3 text-[0.95rem] border border-gray-200 rounded-xl bg-white transition-all duration-200 focus:outline-none focus:border-[#0d5e4b] focus:ring-2 focus:ring-[#0d5e4b]/10"
                  required
                  disabled={isPending}
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {dict.form.fields.company.label}
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder={dict.form.fields.company.placeholder}
                  className="w-full px-4 py-3 text-[0.95rem] border border-gray-200 rounded-xl bg-white transition-all duration-200 focus:outline-none focus:border-[#0d5e4b] focus:ring-2 focus:ring-[#0d5e4b]/10"
                  disabled={isPending}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {dict.form.fields.email.label}{" "}
                <span className="text-red-500">{dict.form.required}</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={dict.form.fields.email.placeholder}
                className="w-full px-4 py-3 text-[0.95rem] border border-gray-200 rounded-xl bg-white transition-all duration-200 focus:outline-none focus:border-[#0d5e4b] focus:ring-2 focus:ring-[#0d5e4b]/10"
                required
                disabled={isPending}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {dict.form.fields.phone.label}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder={dict.form.fields.phone.placeholder}
                className="w-full px-4 py-3 text-[0.95rem] border border-gray-200 rounded-xl bg-white transition-all duration-200 focus:outline-none focus:border-[#0d5e4b] focus:ring-2 focus:ring-[#0d5e4b]/10"
                disabled={isPending}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {dict.form.fields.message.label}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={dict.form.fields.message.placeholder}
                rows={4}
                className="w-full px-4 py-3 text-[0.95rem] border border-gray-200 rounded-xl bg-white transition-all duration-200 focus:outline-none focus:border-[#0d5e4b] focus:ring-2 focus:ring-[#0d5e4b]/10 resize-y min-h-[120px]"
                disabled={isPending}
              />
            </div>

            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="gdpr"
                checked={formData.gdpr}
                onChange={(e) =>
                  setFormData({ ...formData, gdpr: e.target.checked })
                }
                className="w-5 h-5 mt-0.5 rounded border-gray-300 text-[#0d5e4b] focus:ring-[#0d5e4b] flex-shrink-0"
                required
                disabled={isPending}
              />
              <label
                htmlFor="gdpr"
                className="text-sm text-gray-600 leading-relaxed"
              >
                {dict.form.gdpr.text}{" "}
                <a
                  href="/adatkezeles"
                  className="text-[#0d5e4b] font-medium hover:underline"
                >
                  {dict.form.gdpr.linkText}
                </a>
                . <span className="text-red-500">{dict.form.required}</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 bg-[#0d5e4b] text-white hover:bg-[#0a4a3a] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {dict.form.submit.sending}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {dict.form.submit.idle}
                </>
              )}
            </button>

            {/* Feedback message */}
            {feedback && (
              <div
                className={`mt-4 p-4 rounded-xl flex items-start gap-3 ${
                  feedback.type === "success"
                    ? "bg-emerald-50 border border-emerald-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                {feedback.type === "success" ? (
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <p
                  className={`text-sm ${
                    feedback.type === "success"
                      ? "text-emerald-700"
                      : "text-red-700"
                  }`}
                >
                  {feedback.message}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
