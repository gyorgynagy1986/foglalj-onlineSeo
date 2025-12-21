"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import Logo from "../public/photos/logo.svg";

const navLinks = [
  { href: "#home", label: "Kezdőlap" },
  { href: "#features", label: "Funkciók" },
  { href: "#pricing", label: "Árazás" },
  { href: "#testimonials", label: "Vélemények" },
  { href: "#faq", label: "GYIK" },
  { href: "#contact", label: "Kapcsolat" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        }`}
        role="navigation"
        aria-label="Fő navigáció"
      >
        <div className="flex items-center justify-between h-[72px] max-w-[1280px] mx-auto px-6 md:px-8">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 no-underline">
            <Image
              src={Logo}
              alt="FoglaljOnline logo - online foglalási rendszer"
              width={180}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex list-none gap-1 m-0 p-0" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  className="px-4 py-2 no-underline text-gray-600 font-medium text-[0.95rem] rounded-lg hover:text-[#0d5e4b] hover:bg-[#0d5e4b]/5 transition-all duration-200"
                  role="menuitem"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.95rem] font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-[#0d5e4b] text-white hover:bg-[#0a4a3a] hover:shadow-lg"
            >
              Ingyenes próba
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[998] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[72px] left-0 right-0 bottom-0 bg-white z-[999] lg:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Navigation Links */}
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
                  href={link.href}
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

          {/* Mobile CTA */}
          <div className="pt-6 space-y-3">
            <Link
              href="#demo"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-[#0d5e4b] text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ingyenes próba indítása
            </Link>
            <Link
              href="#contact"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-transparent text-[#0d5e4b] border-2 border-[#0d5e4b]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kapcsolat
            </Link>
          </div>

          {/* Mobile Footer Info */}
          <div className="pt-6 mt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              Kérdése van? Hívjon minket!
            </p>
            <a
              href="tel:+36306564162"
              className="block text-center text-[#0d5e4b] font-semibold mt-2 no-underline"
            >
              +36 30 656 4162
            </a>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
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
