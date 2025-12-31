"use client";

import Link from "next/link";
import {
  Check,
  Calendar,
  Star,
  MessageSquareText,
  QrCode,
  BellRing,
  Clock,
} from "lucide-react";

// --- Típusdefiníciók ---
interface Booking {
  id: number;
  name: string;
  guests: number;
  time: string;
  duration: number;
  table: string;
  capacity: number;
  status: "confirmed" | "arrived" | "pending";
}

// JAVÍTÁS: Itt kivettük a "hero" beágyazást, a komponens közvetlenül az adatokat kapja
interface HeroProps {
  lang: string;
  dict: {
    badge: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    features: {
      notifications: string;
      notificationsSub: string;
      setup: string;
      setupSub: string;
      support: string;
      supportSub: string;
    };
    timeline: {
      headerTitle: string;
      mobileTitle: string;
      today: string;
      live: string;
      indoor: string;
      guests: string;
      newBooking: string;
      checkIn: string;
      arrivedMsg: string;
      status: {
        confirmed: string;
        pending: string;
        arrived: string;
      };
    };
  };
}

export default function Hero({ dict, lang }: HeroProps) {
  // --- Adatok ---
  const bookings: Booking[] = [
    {
      id: 1,
      name: "Tóth Eszter",
      guests: 2,
      time: "14:00",
      duration: 1.5,
      table: "1. asztal",
      capacity: 2,
      status: "confirmed",
    },
    {
      id: 2,
      name: "Varga Bence",
      guests: 2,
      time: "19:00",
      duration: 1.5,
      table: "1. asztal",
      capacity: 2,
      status: "confirmed",
    },
    {
      id: 3,
      name: "Molnár Ádám",
      guests: 2,
      time: "12:30",
      duration: 2,
      table: "2. asztal",
      capacity: 2,
      status: "arrived",
    },
    {
      id: 4,
      name: "Kiss Petra",
      guests: 2,
      time: "15:00",
      duration: 1.5,
      table: "2. asztal",
      capacity: 2,
      status: "confirmed",
    },
    {
      id: 5,
      name: "Nagy Zsófia",
      guests: 4,
      time: "12:00",
      duration: 2,
      table: "1. asztal",
      capacity: 4,
      status: "confirmed",
    },
    {
      id: 6,
      name: "Kovács Máté",
      guests: 4,
      time: "19:00",
      duration: 2,
      table: "1. asztal",
      capacity: 4,
      status: "pending",
    },
    {
      id: 7,
      name: "Szabó Dániel",
      guests: 3,
      time: "13:00",
      duration: 1.5,
      table: "2. asztal",
      capacity: 4,
      status: "arrived",
    },
    {
      id: 8,
      name: "Farkas Família",
      guests: 6,
      time: "14:30",
      duration: 2.5,
      table: "1. asztal",
      capacity: 6,
      status: "confirmed",
    },
  ];

  const tables = [
    { name: "1. asztal", capacity: 2, usage: 35 },
    { name: "2. asztal", capacity: 2, usage: 42 },
    { name: "1. asztal", capacity: 4, usage: 28 },
    { name: "2. asztal", capacity: 4, usage: 15 },
    { name: "1. asztal", capacity: 6, usage: 22 },
  ];

  const timeSlots = [
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  // JAVÍTÁS: Itt már nem használjuk a dict.hero prefixet
  const features = [
    {
      icon: MessageSquareText,
      title: dict.features.notifications,
      sub: dict.features.notificationsSub,
    },
    { icon: Clock, title: dict.features.setup, sub: dict.features.setupSub },
    {
      icon: BellRing,
      title: dict.features.support,
      sub: dict.features.supportSub,
    },
  ];

  // --- Segédfüggvények ---
  const getTimePosition = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return Math.max(0, Math.min(((h - 12 + m / 60) / 9) * 100, 100));
  };

  const getBookingWidth = (duration: number) => (duration / 9) * 100;

  const getStatusStyles = (status: Booking["status"]) => {
    switch (status) {
      case "arrived":
        return "bg-blue-100 border-blue-300 text-blue-800";
      case "pending":
        return "bg-amber-100 border-amber-300 text-amber-800";
      default:
        return "bg-emerald-100 border-emerald-300 text-emerald-800";
    }
  };

  const getCapacityColor = (cap: number) => {
    if (cap === 2) return "bg-emerald-500";
    if (cap === 4) return "bg-teal-600";
    return "bg-violet-600";
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0d5e4b]"
    >
      {/* Háttér Gradiens */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a4a3a] via-[#0d5e4b] to-[#127a5b]" />

      {/* SVG Minta */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Fények */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#15866a] opacity-20 blur-[120px]" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0d5e4b] opacity-30 blur-[100px]" />

      <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-32 pb-16 lg:py-24 max-w-[1400px] mx-auto px-6 md:px-8 w-full items-center">
        {/* === BAL OLDAL (Szöveg) === */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            {dict.badge} {/* JAVÍTÁS: dict.hero.badge helyett */}
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,3rem)] font-bold text-white leading-[1.1] mb-6">
            {dict.title}
          </h1>

          <p className="text-lg text-white/70 max-w-[580px] mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
            {dict.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
            <Link
              href={`/${lang}#demo`}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-white text-[#0d5e4b] hover:bg-emerald-50 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              {dict.ctaPrimary}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            <Link
              href={`/${lang}#features`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-transparent text-white border-2 border-white/30 hover:bg-white/10"
            >
              {dict.ctaSecondary}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/80 text-sm border-t border-white/10 pt-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 lg:justify-start justify-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                  <item.icon className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">{item.title}</div>
                  <div className="text-xs text-emerald-200/70">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === JOBB OLDAL (Timeline Vizualizáció) === */}
        <div>
          {/* MOBILE VIEW */}
          <div className="lg:hidden relative mx-auto max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-100 bg-gray-50/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-semibold text-gray-700">
                  {dict.timeline.mobileTitle}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-medium text-emerald-700">
                  {dict.timeline.live}
                </span>
              </div>
            </div>

            <div className="p-3 space-y-2">
              <div className="flex mb-2 pl-12">
                {["12", "14", "16", "18", "20"].map((t, i) => (
                  <div key={i} className="flex-1 text-[8px] text-gray-400">
                    {t}:00
                  </div>
                ))}
              </div>
              {tables.slice(0, 3).map((table, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-10 text-[8px] font-bold text-gray-500">
                    {table.name}
                  </div>
                  <div className="flex-1 h-6 bg-gray-50 rounded relative border border-gray-100">
                    {bookings
                      .filter(
                        (b) =>
                          b.table === table.name &&
                          b.capacity === table.capacity
                      )
                      .map((b) => (
                        <div
                          key={b.id}
                          className={`absolute top-0.5 bottom-0.5 rounded px-1 text-[7px] truncate ${getStatusStyles(
                            b.status
                          )}`}
                          style={{
                            left: `${getTimePosition(b.time)}%`,
                            width: `${getBookingWidth(b.duration)}%`,
                          }}
                        >
                          {b.name}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden lg:block relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10">
              <div className="flex justify-between items-center px-5 py-3 border-b border-gray-100 bg-gray-50/80">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-700">
                      {dict.timeline.headerTitle}
                    </span>
                  </div>
                  <div className="px-2 py-1 bg-gray-100 rounded-md text-[10px] text-gray-500">
                    {dict.timeline.today}
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-medium text-emerald-700">
                    {dict.timeline.live}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex mb-3 pl-20">
                  {timeSlots.map((time, i) => (
                    <div
                      key={i}
                      className="flex-1 text-[10px] text-gray-400 font-medium border-l border-dashed border-gray-200 pl-1"
                    >
                      {time}
                    </div>
                  ))}
                </div>

                <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold text-gray-500 uppercase">
                  <div className="w-3 h-3 bg-gray-200 rounded"></div>{" "}
                  {dict.timeline.indoor}
                </div>

                <div className="space-y-2">
                  {tables.map((table, idx) => (
                    <div key={idx} className="flex items-center group">
                      <div className="w-20 shrink-0 pr-2">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-5 h-5 ${getCapacityColor(
                              table.capacity
                            )} text-white text-[10px] font-bold rounded flex items-center justify-center`}
                          >
                            {table.capacity}
                          </span>
                          <div>
                            <div className="text-[10px] font-medium text-gray-700">
                              {table.name}
                            </div>
                            <div className="w-8 h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
                              <div
                                className="h-full bg-emerald-400"
                                style={{ width: `${table.usage}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 h-9 bg-gray-50 rounded-lg relative border border-gray-100">
                        {bookings
                          .filter(
                            (b) =>
                              b.table === table.name &&
                              b.capacity === table.capacity
                          )
                          .map((booking) => (
                            <div
                              key={booking.id}
                              className={`absolute top-1 bottom-1 rounded-md border flex items-center px-2 text-[9px] font-medium overflow-hidden cursor-pointer hover:shadow-md transition-shadow z-[5] ${getStatusStyles(
                                booking.status
                              )}`}
                              style={{
                                left: `${getTimePosition(booking.time)}%`,
                                width: `${getBookingWidth(booking.duration)}%`,
                              }}
                            >
                              <span className="truncate">{booking.name}</span>
                              <span className="ml-1 opacity-70 shrink-0 hidden xl:inline">
                                {" "}
                                · {booking.guests} {dict.timeline.guests}
                              </span>
                            </div>
                          ))}
                        <div
                          className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                          style={{ left: "33%" }}
                        >
                          <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded bg-emerald-400" />{" "}
                    <span className="text-[9px] text-gray-500">
                      {dict.timeline.status.confirmed}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded bg-amber-400" />{" "}
                    <span className="text-[9px] text-gray-500">
                      {dict.timeline.status.pending}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded bg-blue-400" />{" "}
                    <span className="text-[9px] text-gray-500">
                      {dict.timeline.status.arrived}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-[float_4s_ease-in-out_infinite] z-20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center relative">
                  <BellRing className="w-4 h-4 text-emerald-600" />
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-900">
                    {dict.timeline.newBooking}
                  </div>
                  <div className="text-[9px] text-gray-500">
                    Szabó D. · 4 {dict.timeline.guests} · 20:00
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-4 bg-white rounded-xl shadow-lg p-3 animate-[float_6s_ease-in-out_infinite_0.5s] z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center text-white">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-900">
                    {dict.timeline.checkIn}
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-600 font-medium">
                    <Check className="w-3 h-3" /> Molnár Á.{" "}
                    {dict.timeline.arrivedMsg}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
