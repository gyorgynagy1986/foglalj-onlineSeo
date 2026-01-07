// app/[lang]/funkciok/testreszabhato-szabalyok/SzabalyokDemo.tsx
"use client";

import { useState } from "react";
import { Calendar, Clock, Ban, Users, Check, AlertCircle } from "lucide-react";

type RuleCategory = "weekly" | "special" | "closure" | "duration";

interface Rule {
  id: RuleCategory;
  name: string;
  description: string;
  icon: any;
  color: string;
  example: {
    title: string;
    details: string[];
    visualType: "schedule" | "list" | "grid";
  };
}

interface SzabalyokDemoProps {
  dict: any;
}

export default function SzabalyokDemo({ dict }: SzabalyokDemoProps) {
  const [activeRule, setActiveRule] = useState<RuleCategory>("weekly");

  const rules: Rule[] = dict.szabalyok.demo.rules.map((rule: any) => ({
    ...rule,
    icon: [Calendar, AlertCircle, Ban, Users][
      ["weekly", "special", "closure", "duration"].indexOf(rule.id)
    ],
  }));

  const currentRule = rules.find((r: Rule) => r.id === activeRule)!;
  const Icon = currentRule.icon;

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {dict.szabalyok.demo.title}{" "}
          <span className="text-[#0d5e4b]">
            {dict.szabalyok.demo.titleHighlight}
          </span>
        </h2>
        <p className="text-lg text-gray-600">{dict.szabalyok.demo.subtitle}</p>
      </div>

      {/* Rule Type Buttons */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        {rules.map((rule: Rule) => {
          const RuleIcon = rule.icon;
          return (
            <button
              key={rule.id}
              onClick={() => setActiveRule(rule.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                activeRule === rule.id
                  ? "border-[#0d5e4b] bg-[#0d5e4b]/5 shadow-lg scale-105"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${rule.color} flex items-center justify-center mb-3`}
              >
                <RuleIcon className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-gray-900 text-sm mb-1">
                {rule.name}
              </div>
              <div className="text-xs text-gray-600">{rule.description}</div>
            </button>
          );
        })}
      </div>

      {/* Active Rule Display */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${currentRule.color} flex items-center justify-center`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {currentRule.example.title}
            </h3>
            <p className="text-gray-600">{currentRule.description}</p>
          </div>
        </div>

        {/* Weekly Schedule View */}
        {currentRule.example.visualType === "schedule" && (
          <div className="space-y-3">
            {dict.szabalyok.demo.scheduleData.map(
              (schedule: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {schedule.day}
                      </div>
                      <div className="text-sm text-gray-600">
                        {dict.szabalyok.demo.scheduleLabels.opening}{" "}
                        {schedule.hours}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      {dict.szabalyok.demo.scheduleLabels.kitchen}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {schedule.kitchen}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* List View */}
        {currentRule.example.visualType === "list" && (
          <div className="space-y-3">
            {currentRule.example.details.map(
              (detail: string, index: number) => {
                const isClosedDay = detail
                  .toLowerCase()
                  .includes(dict.szabalyok.demo.keywords.closed.toLowerCase());
                const isModified = detail
                  .toLowerCase()
                  .includes(
                    dict.szabalyok.demo.keywords.modified.toLowerCase()
                  );
                const isSpecial = detail
                  .toLowerCase()
                  .includes(dict.szabalyok.demo.keywords.only.toLowerCase());

                return (
                  <div
                    key={index}
                    className={`rounded-xl p-6 border flex items-center gap-4 ${
                      isClosedDay
                        ? "bg-red-50 border-red-200"
                        : isSpecial
                        ? "bg-amber-50 border-amber-200"
                        : isModified
                        ? "bg-emerald-50 border-emerald-200"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isClosedDay
                          ? "bg-red-100"
                          : isSpecial
                          ? "bg-amber-100"
                          : "bg-emerald-100"
                      }`}
                    >
                      {isClosedDay ? (
                        <Ban className="w-5 h-5 text-red-600" />
                      ) : isSpecial ? (
                        <Users className="w-5 h-5 text-amber-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-emerald-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-semibold ${
                          isClosedDay
                            ? "text-red-900"
                            : isSpecial
                            ? "text-amber-900"
                            : "text-emerald-900"
                        }`}
                      >
                        {detail}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}

        {/* Grid View */}
        {currentRule.example.visualType === "grid" && (
          <div className="grid md:grid-cols-2 gap-4">
            {currentRule.example.details.map(
              (detail: string, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {currentRule.id === "closure" ? (
                        <Ban className="w-5 h-5 text-purple-600" />
                      ) : (
                        <Users className="w-5 h-5 text-amber-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm leading-relaxed">
                        {detail}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* Info Box */}
        <div className="mt-6 bg-emerald-50 rounded-xl p-4 border border-emerald-200">
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-emerald-800">
              <span className="font-semibold">
                {dict.szabalyok.demo.autoApplication.label}
              </span>{" "}
              {dict.szabalyok.demo.autoApplication[currentRule.id]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
