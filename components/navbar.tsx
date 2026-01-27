"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, Check } from "lucide-react";
import Logo from "../public/photos/logo.svg";

interface NavbarProps {
  lang: string;
  dict: {
    links: {
      home: string;
      features: string;
      pricing: string;
      testimonials: string;
      faq: string;
      contact: string;
    };
    cta: string;
    ctaMobile: string;
    ariaNav: string;
    ariaMenuOpen: string;
    ariaMenuClose: string;
    questions: string;
    langSwitcher: {
      label: string;
      languages: {
        hu: string;
        en: string;
        de: string;
        es: string;
      };
    };
  };
}

const languages = [
  { code: "hu", name: "Magyar", flag: "🇭🇺" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: dict.links.home },
    { href: "#features", label: dict.links.features },
    { href: "#pricing", label: dict.links.pricing },
    { href: "#testimonials", label: dict.links.testimonials },
    { href: "#faq", label: dict.links.faq },
    { href: "#contact", label: dict.links.contact },
  ];

  const currentLanguage =
    languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".lang-switcher")) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isLangMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        }`}
        role="navigation"
        aria-label={dict.ariaNav}
      >
        <div className="flex items-center justify-between h-[72px] max-w-[1280px] mx-auto px-6 md:px-8">
          {/* Logo */}
          <Link
            href={`/${lang}#home`}
            className="flex items-center gap-3 no-underline"
          >
            <Image
              src={Logo}
              alt="FoglaljOnline logo"
              width={180}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex list-none gap-1 m-0 p-0" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={`/${lang}${link.href}`}
                  className="px-4 py-2 no-underline text-gray-600 font-medium text-[0.95rem] rounded-lg hover:text-[#0d5e4b] hover:bg-[#0d5e4b]/5 transition-all duration-200"
                  role="menuitem"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher - Desktop */}
            <div className="lang-switcher relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 font-medium text-[0.95rem] rounded-lg hover:bg-gray-100 transition-all duration-200"
                aria-label={dict.langSwitcher.label}
              >
                <Globe className="w-4 h-4" />
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="hidden xl:inline">{currentLanguage.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLangMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Language Dropdown - Desktop */}
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((language) => (
                    <Link
                      key={language.code}
                      href={`/${language.code}`}
                      className={`flex items-center justify-between px-4 py-2.5 text-gray-700 no-underline hover:bg-gray-50 transition-colors ${
                        lang === language.code ? "bg-[#0d5e4b]/5" : ""
                      }`}
                      onClick={() => setIsLangMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{language.flag}</span>
                        <span className="font-medium">{language.name}</span>
                      </div>
                      {lang === language.code && (
                        <Check className="w-4 h-4 text-[#0d5e4b]" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${lang}#demo`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.95rem] font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-[#0d5e4b] text-white hover:bg-[#0a4a3a] hover:shadow-lg"
            >
              {dict.cta}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen ? dict.ariaMenuClose : dict.ariaMenuOpen
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[72px] left-0 right-0 bottom-0 bg-white z-[999] lg:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <ul className="list-none p-0 m-0 flex-1">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="border-b border-gray-100"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.05}s forwards`
                    : "none",
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              >
                <Link
                  href={`/${lang}${link.href}`}
                  className="flex items-center justify-between py-4 text-gray-900 no-underline font-semibold text-lg hover:text-[#0d5e4b] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Language Switcher */}
          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3 text-gray-500 text-sm font-medium">
              <Globe className="w-4 h-4" />
              {dict.langSwitcher.label}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((language) => (
                <Link
                  key={language.code}
                  href={`/${language.code}`}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 no-underline transition-all ${
                    lang === language.code
                      ? "border-[#0d5e4b] bg-[#0d5e4b]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-2xl">{language.flag}</span>
                  <div className="flex-1">
                    <span
                      className={`font-medium ${
                        lang === language.code
                          ? "text-[#0d5e4b]"
                          : "text-gray-700"
                      }`}
                    >
                      {language.name}
                    </span>
                  </div>
                  {lang === language.code && (
                    <Check className="w-5 h-5 text-[#0d5e4b]" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <Link
              href={`/${lang}#demo`}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-[#0d5e4b] text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.ctaMobile}
            </Link>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              {dict.questions}
            </p>
            <Link
              href="tel:+36306564162"
              className="block text-center text-[#0d5e4b] font-semibold mt-2 no-underline"
            >
              +36 30 656 4162
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
