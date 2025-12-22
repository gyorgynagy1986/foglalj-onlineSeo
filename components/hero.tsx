"use client";

import Link from "next/link";
import {
  Check,
  Calendar,
  Users,
  Star,
  MessageSquareText,
  QrCode,
  BellRing,
  Clock,
} from "lucide-react";

export default function Hero() {
  // Fiktív foglalási adatok az idővonalon
  const bookings = [
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

  const tables = [
    { name: "1. asztal", capacity: 2, usage: 35 },
    { name: "2. asztal", capacity: 2, usage: 42 },
    { name: "1. asztal", capacity: 4, usage: 28 },
    { name: "2. asztal", capacity: 4, usage: 15 },
    { name: "1. asztal", capacity: 6, usage: 22 },
  ];

  const getTimePosition = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const startHour = 12;
    const totalHours = 9;
    const position = ((hours - startHour + minutes / 60) / totalHours) * 100;
    return Math.max(0, Math.min(position, 100));
  };

  const getBookingWidth = (duration: number) => {
    const totalHours = 9;
    return (duration / totalHours) * 100;
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "arrived":
        return "bg-gradient-to-r from-blue-100 to-blue-50 border-blue-300 text-blue-800";
      case "pending":
        return "bg-gradient-to-r from-amber-100 to-amber-50 border-amber-300 text-amber-800";
      default:
        return "bg-gradient-to-r from-emerald-100 to-emerald-50 border-emerald-300 text-emerald-800";
    }
  };

  const getCapacityColor = (capacity: number) => {
    switch (capacity) {
      case 2:
        return "bg-emerald-500";
      case 4:
        return "bg-teal-600";
      case 6:
        return "bg-violet-600";
      default:
        return "bg-emerald-500";
    }
  };

  const getTableBookings = (tableCapacity: number, tableName: string) => {
    return bookings.filter(
      (b) => b.capacity === tableCapacity && b.table === tableName
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a4a3a 0%, #0d5e4b 50%, #127a5b 100%)",
      }}
      role="main"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#15866a] opacity-20 blur-[120px]" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0d5e4b] opacity-30 blur-[100px]" />

      <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-32 pb-16 lg:py-24 max-w-[1400px] mx-auto px-6 md:px-8 w-full items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            Már 185+ magyar étterem választása
          </div>

          {/* Headline */}
          <h1 className="font-sans text-[clamp(2.5rem,5vw,3rem)] font-bold text-white leading-[1.1] mb-6 tracking-[-0.02em]">
            Online Asztalfoglalási Rendszer Éttermeknek
          </h1>

          {/* Description */}
          <p className="text-lg text-white/70 max-w-[580px] mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
            Csökkentse a no-show-t akár 70%-kal automatikus emlékeztetőkkel.
            Intelligens asztalkiosztás, azonnali értesítések, gyönyörű email
            sablonok –{" "}
            <strong className="text-white/90">5 perc alatt beállítható</strong>,
            magyar supporttal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
            <Link
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-white text-[#0d5e4b] hover:bg-emerald-50 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              <Calendar className="w-5 h-5" />
              Kipróbálom ingyen
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
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold no-underline rounded-xl cursor-pointer transition-all duration-300 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
            >
              Megnézem a funkciókat
            </Link>
          </div>

          {/* FEATURE HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/80 text-sm border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 lg:justify-start justify-center group cursor-default">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                <MessageSquareText className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Automata Értesítések</div>
                <div className="text-xs text-emerald-200/70">SMS + Email</div>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:justify-start justify-center group cursor-default">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                <Clock className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white">5 Perces Setup</div>
                <div className="text-xs text-emerald-200/70">
                  Technikai tudás nélkül
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:justify-start justify-center group cursor-default">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                <BellRing className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Magyar Support</div>
                <div className="text-xs text-emerald-200/70">
                  Valódi segítség, gyorsan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT - Timeline Visualization */}
        {/* Mobile Version */}
        <div className="lg:hidden relative mx-auto max-w-md">
          <div className="bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-100 bg-gray-50/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-semibold text-gray-700">
                  Mai foglalások
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-medium text-emerald-700">
                  Élő
                </span>
              </div>
            </div>

            {/* Compact Timeline */}
            <div className="p-3">
              {/* Time slots header */}
              <div className="flex mb-2 pl-14">
                {["12:00", "14:00", "16:00", "18:00", "20:00"].map(
                  (time, i) => (
                    <div
                      key={i}
                      className="flex-1 text-[8px] text-gray-400 font-medium"
                    >
                      {time}
                    </div>
                  )
                )}
              </div>

              {/* Compact table rows */}
              <div className="space-y-1.5">
                {[
                  {
                    capacity: 2,
                    name: "1. asztal",
                    bookings: [
                      {
                        name: "Tóth E.",
                        left: "22%",
                        width: "18%",
                        status: "confirmed",
                      },
                      {
                        name: "Varga B.",
                        left: "78%",
                        width: "18%",
                        status: "confirmed",
                      },
                    ],
                  },
                  {
                    capacity: 2,
                    name: "2. asztal",
                    bookings: [
                      {
                        name: "Molnár Á.",
                        left: "5%",
                        width: "22%",
                        status: "arrived",
                      },
                      {
                        name: "Kiss P.",
                        left: "33%",
                        width: "18%",
                        status: "confirmed",
                      },
                    ],
                  },
                  {
                    capacity: 4,
                    name: "1. asztal",
                    bookings: [
                      {
                        name: "Nagy Zs.",
                        left: "0%",
                        width: "22%",
                        status: "confirmed",
                      },
                      {
                        name: "Kovács M.",
                        left: "78%",
                        width: "22%",
                        status: "pending",
                      },
                    ],
                  },
                  {
                    capacity: 4,
                    name: "2. asztal",
                    bookings: [
                      {
                        name: "Szabó D.",
                        left: "11%",
                        width: "18%",
                        status: "arrived",
                      },
                    ],
                  },
                ].map((table, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <div className="w-12 shrink-0 flex items-center gap-1">
                      <span
                        className={`w-4 h-4 ${
                          table.capacity === 2
                            ? "bg-emerald-500"
                            : "bg-teal-600"
                        } text-white text-[8px] font-bold rounded flex items-center justify-center`}
                      >
                        {table.capacity}
                      </span>
                      <span className="text-[8px] text-gray-500 truncate">
                        {table.name}
                      </span>
                    </div>
                    <div className="flex-1 h-6 bg-gray-50 rounded relative border border-gray-100">
                      {/* Current time */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                        style={{ left: "33%" }}
                      >
                        <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      </div>
                      {/* Bookings */}
                      {table.bookings.map((booking, bIdx) => (
                        <div
                          key={bIdx}
                          className={`absolute top-0.5 bottom-0.5 rounded border text-[7px] font-medium flex items-center px-1 truncate ${
                            booking.status === "arrived"
                              ? "bg-blue-100 border-blue-300 text-blue-800"
                              : booking.status === "pending"
                              ? "bg-amber-100 border-amber-300 text-amber-800"
                              : "bg-emerald-100 border-emerald-300 text-emerald-800"
                          }`}
                          style={{ left: booking.left, width: booking.width }}
                        >
                          {booking.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-3 mt-3 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded bg-emerald-400"></div>
                  <span className="text-[8px] text-gray-500">
                    Visszaigazolt
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded bg-amber-400"></div>
                  <span className="text-[8px] text-gray-500">Függőben</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded bg-blue-400"></div>
                  <span className="text-[8px] text-gray-500">Megérkezett</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile floating notification */}
          <div className="absolute -top-3 -right-2 bg-white rounded-lg shadow-lg p-2 animate-[float_4s_ease-in-out_infinite] z-20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center relative">
                <BellRing className="w-3 h-3 text-emerald-600" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
              </div>
              <div>
                <div className="text-[9px] font-bold text-gray-900">
                  Új foglalás!
                </div>
                <div className="text-[7px] text-gray-500">4 fő · 20:00</div>
              </div>
            </div>
          </div>

          {/* Mobile QR check-in card */}
          <div className="absolute -bottom-3 -left-2 bg-white rounded-lg shadow-lg p-2 animate-[float_5s_ease-in-out_infinite_1s] z-20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gray-900 flex items-center justify-center">
                <QrCode className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-[9px] font-bold text-gray-900">
                  Check-in
                </div>
                <div className="flex items-center gap-0.5 text-[7px] text-emerald-600 font-medium">
                  <Check className="w-2 h-2" />
                  Megérkezett
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block relative">
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-gray-100 bg-gray-50/80">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-xs font-semibold text-gray-700">
                    Idővonal
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md">
                  <span className="text-[10px] text-gray-500">Ma</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-medium text-emerald-700">
                  Élő
                </span>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="p-4">
              {/* Time Header */}
              <div className="flex mb-3">
                <div className="w-20 shrink-0"></div>
                <div className="flex-1 flex">
                  {timeSlots.map((time, i) => (
                    <div
                      key={i}
                      className="flex-1 text-[10px] text-gray-400 font-medium"
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Beltér */}
              <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                <div className="w-3 h-3 bg-gray-200 rounded"></div>
                Beltér
              </div>

              {/* Table Rows */}
              <div className="space-y-2">
                {tables.map((table, tableIndex) => (
                  <div key={tableIndex} className="flex items-center group">
                    {/* Table Info */}
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
                          <div className="text-[10px] font-medium text-gray-700 leading-tight">
                            {table.name}
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-emerald-400 rounded-full"
                                style={{ width: `${table.usage}%` }}
                              ></div>
                            </div>
                            <span className="text-[8px] text-gray-400">
                              {table.usage}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex-1 h-9 bg-gray-50 rounded-lg relative border border-gray-100">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex">
                        {timeSlots.map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 border-r border-dashed border-gray-100 last:border-r-0"
                          ></div>
                        ))}
                      </div>

                      {/* Current time indicator */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                        style={{ left: "33%" }}
                      >
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>

                      {/* Bookings */}
                      {getTableBookings(table.capacity, table.name).map(
                        (booking) => (
                          <div
                            key={booking.id}
                            className={`absolute top-1 bottom-1 rounded-md border ${getStatusStyles(
                              booking.status
                            )} flex items-center px-2 text-[9px] font-medium overflow-hidden cursor-pointer hover:shadow-md transition-shadow z-[5]`}
                            style={{
                              left: `${getTimePosition(booking.time)}%`,
                              width: `${getBookingWidth(booking.duration)}%`,
                            }}
                          >
                            <span className="truncate">{booking.name}</span>
                            <span className="ml-1 opacity-70 shrink-0">
                              {booking.guests} fő
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-emerald-400"></div>
                  <span className="text-[9px] text-gray-500">
                    Visszaigazolt
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-amber-400"></div>
                  <span className="text-[9px] text-gray-500">Függőben</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-blue-400"></div>
                  <span className="text-[9px] text-gray-500">Megérkezett</span>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING CARD 1: New Booking Notification */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] p-3 animate-[float_4s_ease-in-out_infinite] z-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center relative">
                <BellRing className="w-4 h-4 text-emerald-600" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-900">
                  Új Foglalás!
                </div>
                <div className="text-[9px] text-gray-500">
                  Szabó Dániel · 4 fő · 20:00
                </div>
              </div>
            </div>
          </div>

          

          {/* FLOATING CARD 3: QR Check-in */}
          <div className="absolute -bottom-6 right-4 bg-white rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] p-3 animate-[float_6s_ease-in-out_infinite_0.5s] z-20">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center text-white">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-900">
                  QR Check-in
                </div>
                <div className="flex items-center gap-1 text-[9px] text-emerald-600 font-medium">
                  <Check className="w-3 h-3" />
                  Molnár Ádám megérkezett
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
