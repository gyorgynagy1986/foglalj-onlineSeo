// components/funkciok/AsztalTerkepDemo.tsx
"use client";

import { Clock, Bell, QrCode, Check } from "lucide-react";

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

interface AsztalTerkepDemoProps {
  dict: {
    title: string;
    subtitle: string;
    liveUpdate: string;
    scrollHint: string;
    legend: {
      confirmed: string;
      pending: string;
      arrived: string;
    };
    notifications: {
      newBooking: string;
      checkIn: string;
    };
  };
}

export default function AsztalTerkepDemo({ dict }: AsztalTerkepDemoProps) {
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
    <div className="relative w-full max-w-[100vw] overflow-hidden">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10 border border-gray-100 flex flex-col">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-5 py-3 border-b border-gray-100 bg-gray-50/80 gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm">
              <Clock className="w-4 h-4 text-gray-600" />
              <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                {dict.title}
              </span>
            </div>
            <div className="px-2 py-1 bg-gray-100 rounded-md text-[10px] text-gray-500">
              {dict.subtitle}
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full self-start sm:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-medium text-emerald-700">
              {dict.liveUpdate}
            </span>
          </div>
        </div>

        {/* Scroll Container */}
        <div className="overflow-x-auto custom-scrollbar">
          <div className="p-4 sm:p-6 min-w-[800px]">
            {/* Timeline Header */}
            <div className="flex mb-4 relative">
              <div className="w-24 shrink-0 sticky left-0 bg-white z-20"></div>
              <div className="flex-1 flex pl-2">
                {timeSlots.map((time, i) => (
                  <div
                    key={i}
                    className="flex-1 text-xs text-gray-400 font-medium border-l border-dashed border-gray-200 pl-2"
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {tables.map((table, idx) => (
                <div key={idx} className="flex items-center group relative">
                  {/* Left Column - Sticky */}
                  <div className="w-24 shrink-0 pr-3 sticky left-0 bg-white z-20 transition-colors group-hover:bg-gray-50/50">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-6 h-6 ${getCapacityColor(
                          table.capacity
                        )} text-white text-xs font-bold rounded flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        {table.capacity}
                      </span>
                      <div className="overflow-hidden">
                        <div className="text-xs font-medium text-gray-700 truncate">
                          {table.name}
                        </div>
                        <div className="w-10 h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                          <div
                            className="h-full bg-emerald-400"
                            style={{ width: `${table.usage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Bar */}
                  <div className="flex-1 h-12 bg-gray-50 rounded-lg relative border border-gray-100 group-hover:border-emerald-100 transition-colors">
                    <div className="absolute inset-0 flex pointer-events-none">
                      {timeSlots.map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 border-l border-dashed border-gray-200/50 first:border-l-0"
                        ></div>
                      ))}
                    </div>

                    {bookings
                      .filter(
                        (b) =>
                          b.table === table.name &&
                          b.capacity === table.capacity
                      )
                      .map((booking) => (
                        <div
                          key={booking.id}
                          className={`absolute top-1.5 bottom-1.5 rounded-md border flex items-center px-2 sm:px-3 text-xs font-medium overflow-hidden cursor-pointer hover:shadow-md transition-all z-[5] hover:z-10 ${getStatusStyles(
                            booking.status
                          )}`}
                          style={{
                            left: `${getTimePosition(booking.time)}%`,
                            width: `${getBookingWidth(booking.duration)}%`,
                          }}
                        >
                          <span className="truncate font-semibold">
                            {booking.name}
                          </span>
                          <span className="ml-1.5 opacity-70 shrink-0 hidden sm:inline">
                            · {booking.guests} fő
                          </span>
                        </div>
                      ))}

                    {/* Current Time Line */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-red-500/80 z-10 pointer-events-none"
                      style={{ left: "33%" }}
                    >
                      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-red-500 rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer / Legend */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 px-6 pb-6 pt-2 border-t border-gray-100 bg-white relative z-20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-emerald-400" />
            <span className="text-xs text-gray-600">
              {dict.legend.confirmed}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-amber-400" />
            <span className="text-xs text-gray-600">{dict.legend.pending}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-blue-400" />
            <span className="text-xs text-gray-600">{dict.legend.arrived}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400 ml-auto">
            <span className="opacity-50">{dict.scrollHint}</span> →
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="hidden md:flex absolute -top-[-20px] -right-[-10px] bg-white rounded-xl shadow-xl p-4 animate-[float_4s_ease-in-out_infinite] z-30 border border-gray-100 max-w-[200px] lg:max-w-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center relative flex-shrink-0">
            <Bell className="w-5 h-5 text-emerald-600" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900 leading-tight">
              {dict.notifications.newBooking}
            </div>
            <div className="text-xs text-gray-500 truncate">
              Szabó D. · 4 fő
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute -bottom-[-4px] right-6 bg-white rounded-xl shadow-xl p-4 animate-[float_6s_ease-in-out_infinite_0.5s] z-30 border border-gray-100 max-w-[200px] lg:max-w-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white flex-shrink-0">
            <QrCode className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900 leading-tight">
              {dict.notifications.checkIn}
            </div>
            <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium truncate">
              <Check className="w-3 h-3" /> Molnár Á.
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
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
