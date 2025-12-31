"use client";

import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  XCircle,
  Edit3,
  Trash2,
  MessageSquare,
  MoreVertical,
} from "lucide-react";

interface BookingManagementProps {
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    tabs: {
      all: string;
      today: string;
      pending: string;
    };
    statusLabels: {
      confirmed: string;
      pending: string;
      cancelled: string;
    };
    actions: {
      approve: string;
      reject: string;
      edit: string;
      delete: string;
      addNote: string;
    };
    bookingDetails: {
      guests: string;
      duration: string;
      hours: string;
      table: string;
      area: string;
    };
  };
}

interface Booking {
  id: string;
  time: string;
  duration: number;
  guestName: string;
  guestPhone: string;
  guestEmail?: string;
  guests: number;
  status: "confirmed" | "pending" | "cancelled";
  area: string;
  table?: string;
  note?: string;
}

// Fiktív foglalási adatok
const mockBookings: Booking[] = [
  {
    id: "1",
    time: "13:00",
    duration: 1,
    guestName: "Kovács Anna",
    guestPhone: "+36301234567",
    guestEmail: "kovacs.anna@email.com",
    guests: 2,
    status: "pending",
    area: "Terasz",
  },
  {
    id: "2",
    time: "13:30",
    duration: 1.5,
    guestName: "Nagy Péter",
    guestPhone: "+36309876543",
    guests: 6,
    status: "confirmed",
    area: "Beltér",
    table: "5-ös asztal",
  },
  {
    id: "3",
    time: "14:30",
    duration: 3,
    guestName: "Szabó Katalin",
    guestPhone: "+36307654321",
    guestEmail: "szabo.katalin@email.com",
    guests: 3,
    status: "confirmed",
    area: "Beltér",
    table: "4-es asztal",
    note: "Allergia: diófélék",
  },
  {
    id: "4",
    time: "15:00",
    duration: 2.5,
    guestName: "Horváth László",
    guestPhone: "+36205551234",
    guests: 3,
    status: "confirmed",
    area: "Terasz",
    table: "2-es asztal",
  },
  {
    id: "5",
    time: "17:00",
    duration: 2,
    guestName: "Tóth Éva",
    guestPhone: "+36204567890",
    guestEmail: "toth.eva@email.com",
    guests: 2,
    status: "confirmed",
    area: "Beltér",
    table: "7-es asztal",
  },
];

export default function BookingManagement({ dict }: BookingManagementProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"all" | "today" | "pending">(
    "today"
  );
  const [bookings] = useState<Booking[]>(mockBookings);

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

  const getStatusColor = (status: Booking["status"]) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "cancelled":
        return "bg-red-50 text-red-700 border-red-200";
    }
  };

  const getStatusIcon = (status: Booking["status"]) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" />;
      case "pending":
        return <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />;
      case "cancelled":
        return <XCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="booking-management"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#f8faf9]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <header className="text-center max-w-[680px] mx-auto mb-12 md:mb-16 fade-in opacity-0 translate-y-6 transition-all duration-600">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#0d5e4b]/10 rounded-full text-[#0d5e4b] font-semibold text-xs md:text-sm mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 bg-[#0d5e4b] rounded-full" />
            {dict.badge}
          </div>
          <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold text-gray-900 leading-tight mb-4 md:mb-5 tracking-[-0.02em] px-4">
            {dict.title}
            <span className="text-[#0d5e4b]"> {dict.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed px-4">
            {dict.description}
          </p>
        </header>

        {/* Booking Dashboard */}
        <div className="fade-in opacity-0 translate-y-6 transition-all duration-600">
          {/* Tabs - Mobile Optimized */}
          <div className="mb-6 space-y-3 md:space-y-0">
            {/* Mobile: Scrollable tabs */}
            <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-2 min-w-max pb-3 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`flex-shrink-0 px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-300 ${
                    activeTab === "all"
                      ? "bg-[#0d5e4b] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {dict.tabs.all}
                </button>
                <button
                  onClick={() => setActiveTab("today")}
                  className={`flex-shrink-0 px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeTab === "today"
                      ? "bg-[#0d5e4b] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {dict.tabs.today}
                  <span className="px-2 py-0.5 bg-white/20 text-xs rounded-full">
                    {bookings.length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("pending")}
                  className={`flex-shrink-0 px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeTab === "pending"
                      ? "bg-[#0d5e4b] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {dict.tabs.pending}
                  <span className="px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">
                    1
                  </span>
                </button>
              </div>
            </div>

            {/* Desktop: Original tabs */}
            <div className="hidden md:flex items-center justify-between border-b border-gray-200">
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 ${
                    activeTab === "all"
                      ? "text-[#0d5e4b] border-[#0d5e4b]"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                >
                  {dict.tabs.all}
                </button>
                <button
                  onClick={() => setActiveTab("today")}
                  className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 ${
                    activeTab === "today"
                      ? "text-[#0d5e4b] border-[#0d5e4b]"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                >
                  {dict.tabs.today}
                  <span className="ml-2 px-2 py-0.5 bg-[#0d5e4b] text-white text-xs rounded-full">
                    {bookings.length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("pending")}
                  className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 ${
                    activeTab === "pending"
                      ? "text-[#0d5e4b] border-[#0d5e4b]"
                      : "text-gray-500 border-transparent hover:text-gray-700"
                  }`}
                >
                  {dict.tabs.pending}
                  <span className="ml-2 px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">
                    1
                  </span>
                </button>
              </div>

              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="hidden lg:inline">december 31., Szerda</span>
                <span className="lg:hidden">dec 31.</span>
              </div>
            </div>

            {/* Mobile: Date */}
            <div className="md:hidden flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>december 31., Szerda</span>
            </div>
          </div>

          {/* Bookings List */}
          <div className="space-y-3 md:space-y-4">
            {bookings.map((booking, index) => (
              <article
                key={booking.id}
                className="group bg-white rounded-xl md:rounded-2xl border border-gray-200 hover:border-[#0d5e4b]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 md:p-6">
                  {/* Mobile Layout */}
                  <div className="md:hidden space-y-3">
                    {/* Top Row: Time & Status */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Status indicator */}
                        <div
                          className={`w-1 h-12 rounded-full ${
                            booking.status === "confirmed"
                              ? "bg-emerald-500"
                              : booking.status === "pending"
                              ? "bg-amber-500"
                              : "bg-red-500"
                          }`}
                        />

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-lg font-bold text-gray-900">
                              {booking.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <span className="text-amber-500">⏱</span>
                            <span>
                              {booking.duration} {dict.bookingDetails.hours}
                            </span>
                          </div>
                        </div>
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {getStatusIcon(booking.status)}
                        {dict.statusLabels[booking.status]}
                      </span>
                    </div>

                    {/* Guest Name */}
                    <h3 className="text-base font-semibold text-gray-900">
                      {booking.guestName}
                    </h3>

                    {/* Guest Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span>{booking.guestPhone}</span>
                      </div>

                      {booking.guestEmail && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="truncate">{booking.guestEmail}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span>
                            {booking.guests} {dict.bookingDetails.guests}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{booking.area}</span>
                        </div>
                      </div>
                    </div>

                    {booking.table && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">
                        📍 {dict.bookingDetails.table}: {booking.table}
                      </div>
                    )}

                    {booking.note && (
                      <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <MessageSquare className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-amber-800">{booking.note}</p>
                      </div>
                    )}

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                      {booking.status === "pending" && (
                        <>
                          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
                            <CheckCircle2 className="w-4 h-4" />
                            {dict.actions.approve}
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                            <XCircle className="w-4 h-4" />
                            {dict.actions.reject}
                          </button>
                        </>
                      )}
                      <button className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-start justify-between gap-6">
                    {/* Left side - Time & Duration */}
                    <div className="flex items-start gap-4">
                      {/* Status indicator */}
                      <div
                        className={`w-1 h-full rounded-full ${
                          booking.status === "confirmed"
                            ? "bg-emerald-500"
                            : booking.status === "pending"
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                      />

                      {/* Time */}
                      <div className="min-w-[80px]">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-xl font-bold text-gray-900">
                            {booking.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <span className="text-amber-500">⏱</span>
                          <span>
                            {booking.duration} {dict.bookingDetails.hours}
                          </span>
                        </div>
                      </div>

                      {/* Guest Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0d5e4b] transition-colors">
                            {booking.guestName}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                              booking.status
                            )}`}
                          >
                            {getStatusIcon(booking.status)}
                            {dict.statusLabels[booking.status]}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span>{booking.guestPhone}</span>
                          </div>

                          {booking.guestEmail && (
                            <div className="flex items-center gap-2 text-gray-600">
                              <Mail className="w-4 h-4 text-gray-400" />
                              <span className="truncate">
                                {booking.guestEmail}
                              </span>
                            </div>
                          )}

                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span>
                              {booking.guests} {dict.bookingDetails.guests}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{booking.area}</span>
                          </div>
                        </div>

                        {booking.table && (
                          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">
                            📍 {dict.bookingDetails.table}: {booking.table}
                          </div>
                        )}

                        {booking.note && (
                          <div className="mt-3 flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                            <MessageSquare className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-amber-800">
                              {booking.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right side - Actions */}
                    <div className="flex items-center gap-2">
                      {booking.status === "pending" && (
                        <>
                          <button
                            className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            aria-label={dict.actions.approve}
                            title={dict.actions.approve}
                          >
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                          <button
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            aria-label={dict.actions.reject}
                            title={dict.actions.reject}
                          >
                            <XCircle className="w-5 h-5" />
                          </button>
                        </>
                      )}
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        aria-label={dict.actions.edit}
                        title={dict.actions.edit}
                      >
                        <Edit3 className="w-5 h-5" />
                      </button>
                      <button
                        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        aria-label={dict.actions.delete}
                        title={dict.actions.delete}
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom stats - Mobile Optimized */}
          <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-200 text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                {bookings.length}
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-0.5">
                {dict.tabs.today}
              </div>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-200 text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                {bookings.reduce((sum, b) => sum + b.guests, 0)}
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-0.5">
                {dict.bookingDetails.guests}
              </div>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-200 text-center">
              <div className="text-xl md:text-2xl font-bold text-emerald-600">
                {bookings.filter((b) => b.status === "confirmed").length}
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-0.5">
                {dict.statusLabels.confirmed}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add scrollbar hide utility to global CSS */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
