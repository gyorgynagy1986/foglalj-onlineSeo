// app/[lang]/funkciok/qr-kod-bejelentkezes/QrKodDemo.tsx
"use client";

import { useState } from "react";
import { QrCode, CheckCircle2, Smartphone, Download } from "lucide-react";

interface QrKodDemoProps {
  dict: any;
}

export default function QrKodDemo({ dict }: QrKodDemoProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = dict.qrKod.demo.steps;

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {dict.qrKod.demo.title}{" "}
          <span className="text-[#0d5e4b]">
            {dict.qrKod.demo.titleHighlight}
          </span>
        </h2>
        <p className="text-lg text-gray-600">{dict.qrKod.demo.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {steps.map((step: any, index: number) => {
          const icons = [CheckCircle2, QrCode, Download, Smartphone];
          const Icon = icons[index];
          return (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                activeStep === index
                  ? "border-[#0d5e4b] bg-[#0d5e4b]/5 shadow-lg scale-105"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-gray-900 mb-1">{step.title}</div>
              <div className="text-sm text-gray-600">{step.description}</div>
            </button>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
        {activeStep === 0 && (
          <div className="text-center max-w-md">
            <CheckCircle2 className="w-24 h-24 text-blue-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {dict.qrKod.demo.details[0].title}
            </h3>
            <p className="text-gray-600">
              {dict.qrKod.demo.details[0].description}
            </p>
          </div>
        )}

        {activeStep === 1 && (
          <div className="text-center max-w-md">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6 inline-block">
              <QrCode className="w-32 h-32 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {dict.qrKod.demo.details[1].title}
            </h3>
            <p className="text-gray-600">
              {dict.qrKod.demo.details[1].description}
            </p>
          </div>
        )}

        {activeStep === 2 && (
          <div className="text-center max-w-md">
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-md inline-flex items-center gap-3">
                <Download className="w-8 h-8 text-purple-500" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">
                    {dict.qrKod.demo.files.pdf}
                  </div>
                  <div className="text-sm text-gray-500">124 KB</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md inline-flex items-center gap-3">
                <Download className="w-8 h-8 text-purple-500" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">
                    {dict.qrKod.demo.files.qr}
                  </div>
                  <div className="text-sm text-gray-500">48 KB</div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {dict.qrKod.demo.details[2].title}
            </h3>
            <p className="text-gray-600">
              {dict.qrKod.demo.details[2].description}
            </p>
          </div>
        )}

        {activeStep === 3 && (
          <div className="text-center max-w-md">
            <div className="relative mb-6">
              <Smartphone className="w-32 h-32 text-amber-500 mx-auto" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <QrCode className="w-16 h-16 text-amber-300" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {dict.qrKod.demo.details[3].title}
            </h3>
            <p className="text-gray-600">
              {dict.qrKod.demo.details[3].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}