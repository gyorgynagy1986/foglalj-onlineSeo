// app/[lang]/funkciok/dinamikus-idoszabalyok/DinamikusIdoDemo.tsx
"use client";

import { useState } from "react";
import { Users, Calendar, Clock, Check } from "lucide-react";

type RuleType = "default" | "weekend" | "large-group" | "peak-hours";

interface Rule {
  id: RuleType;
  name: string;
  guests: string;
  days: string;
  hours: string;
  durations: string[];
  color: string;
}

interface DinamikusIdoDemoProps {
  dict: any;
}

export default function DinamikusIdoDemo({ dict }: DinamikusIdoDemoProps) {
  const [activeRule, setActiveRule] = useState<RuleType>("default");

  const rules: Rule[] = dict.dinamikusIdo.demo.rules;

  const currentRule = rules.find((r: Rule) => r.id === activeRule)!;

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {dict.dinamikusIdo.demo.title}{" "}
          <span className="text-[#0d5e4b]">
            {dict.dinamikusIdo.demo.titleHighlight}
          </span>
        </h2>
        <p className="text-lg text-gray-600">
          {dict.dinamikusIdo.demo.subtitle}
        </p>
      </div>

      {/* Rule Buttons */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        {rules.map((rule: Rule) => (
          <button
            key={rule.id}
            onClick={() => setActiveRule(rule.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
              activeRule === rule.id
                ? "border-[#0d5e4b] bg-[#0d5e4b]/5 shadow-lg scale-105"
                : "border-gray-200 hover:border-gray-300 hover:shadow-md"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${rule.color} flex items-center justify-center mb-3`}
            >
              <Check className="w-5 h-5 text-white" />
            </div>
            <div className="font-bold text-gray-900 text-sm mb-1">
              {rule.name}
            </div>
            <div className="text-xs text-gray-600">{rule.guests}</div>
          </button>
        ))}
      </div>

      {/* Active Rule Display */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-sm text-gray-500">
                {dict.dinamikusIdo.demo.labels.guests}
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900">
              {currentRule.guests}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-sm text-gray-500">
                {dict.dinamikusIdo.demo.labels.days}
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900">
              {currentRule.days}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-sm text-gray-500">
                {dict.dinamikusIdo.demo.labels.hours}
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900">
              {currentRule.hours}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="text-sm text-gray-500 mb-4 font-semibold">
            {dict.dinamikusIdo.demo.durationsLabel}
          </div>
          <div className="flex flex-wrap gap-3">
            {currentRule.durations.map((duration: string, index: number) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-lg bg-gradient-to-br ${currentRule.color} text-white font-semibold shadow-md hover:shadow-lg transition-shadow`}
              >
                {duration}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-emerald-50 rounded-xl p-4 border border-emerald-200">
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-emerald-800">
              {dict.dinamikusIdo.demo.explanation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
