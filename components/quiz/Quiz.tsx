"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ChevronRight,
  ChevronLeft,
  Send,
  MapPin,
  User,
  Phone,
  CheckCircle2,
} from "lucide-react";
import {
  KitchenData,
  TAJIKISTAN_CITIES,
  KITCHEN_STYLES,
  LAYOUT_TYPES,
  MATERIALS,
  COUNTERTOPS,
  BUDGET_RANGES,
} from "./types";

const WHATSAPP_NUMBER = "+992904103311";

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<KitchenData>({
    style: "",
    layout: "",
    material: "",
    countertop: "",
    dimensions: "",
    budget: "",
    city: "",
    name: "",
    phone: "",
  });

  const totalSteps = 8;

  const updateData = (field: keyof KitchenData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const sendToWhatsApp = () => {
    const text = `Здравствуйте! Хочу заказать кухонный гарнитур.
Мои параметры:
- Стиль: ${data.style}
- Планировка: ${data.layout}
- Материал фасадов: ${data.material}
- Столешница: ${data.countertop}
- Размеры: ${data.dimensions}
- Бюджет: ${data.budget}
- Город: ${data.city}

Контактные данные:
- Имя: ${data.name}
- Телефон: ${data.phone}`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-serif italic text-stone-800">
              Выберите стиль вашей кухни
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {KITCHEN_STYLES.map((s) => (
                <div
                  key={s.id}
                  onClick={() => {
                    updateData("style", s.label);
                    nextStep();
                  }}
                  className={`option-card flex flex-col items-center justify-center text-center gap-2 ${data.style === s.label ? "active" : ""}`}
                >
                  <span className="text-3xl">{s.icon}</span>
                  <span className="font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-serif italic text-stone-800">
              Планировка кухни
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {LAYOUT_TYPES.map((l) => (
                <div
                  key={l.id}
                  onClick={() => {
                    updateData("layout", l.label);
                    nextStep();
                  }}
                  className={`option-card flex flex-col items-center justify-center text-center gap-2 ${data.layout === l.label ? "active" : ""}`}
                >
                  <span className="text-3xl">{l.icon}</span>
                  <span className="font-medium">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-serif italic text-stone-800">
              Материал фасадов
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {MATERIALS.map((m) => (
                <div
                  key={m.id}
                  onClick={() => {
                    updateData("material", m.label);
                    nextStep();
                  }}
                  className={`option-card flex flex-col items-center justify-center text-center gap-2 ${data.material === m.label ? "active" : ""}`}
                >
                  <span className="text-3xl">{m.icon}</span>
                  <span className="font-medium">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-2xl font-serif italic text-stone-800">
              Материал столешницы
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {COUNTERTOPS.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    updateData("countertop", c.label);
                    nextStep();
                  }}
                  className={`option-card flex flex-col items-center justify-center text-center gap-2 ${data.countertop === c.label ? "active" : ""}`}
                >
                  <span className="text-3xl">{c.icon}</span>
                  <span className="font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h2 className="text-2xl font-serif italic text-stone-800">
              Примерные размеры (м)
            </h2>
            <p className="text-stone-500 text-sm">
              Например: 3.5 x 2.4 или общая длина 4 метра
            </p>
            <input
              type="text"
              placeholder="Введите размеры..."
              value={data.dimensions}
              onChange={(e) => updateData("dimensions", e.target.value)}
              className="w-full p-4 border-2 border-stone-100 rounded-xl focus:border-accent outline-none transition-all"
            />
            <button
              disabled={!data.dimensions}
              onClick={nextStep}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Далее <ChevronRight size={20} />
            </button>
          </div>
        );
      case 6:
        return (
          <div>
            <h2 className="text-2xl font-serif italic text-stone-800">
              Ценовой сегмент
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {BUDGET_RANGES.map((b) => (
                <div
                  key={b.id}
                  onClick={() => {
                    updateData("budget", b.label);
                    nextStep();
                  }}
                  className={`option-card flex items-center gap-4 ${data.budget === b.label ? "active" : ""}`}
                >
                  <span className="text-3xl">{b.icon}</span>
                  <span className="font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <h2 className="text-2xl font-serif italic text-stone-800 flex items-center gap-2">
              <MapPin className="text-accent" /> Выберите ваш город
            </h2>
            <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto p-2">
              {TAJIKISTAN_CITIES.map((city) => (
                <div
                  key={city}
                  onClick={() => {
                    updateData("city", city);
                    nextStep();
                  }}
                  className={`option-card text-center py-3 ${data.city === city ? "active" : ""}`}
                >
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div>
            <h2 className="text-2xl font-serif italic text-stone-800">
              Контактные данные
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <User
                  className="absolute left-4 top-4 text-stone-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={data.name}
                  onChange={(e) => updateData("name", e.target.value)}
                  className="w-full p-4 pl-12 border-2 border-stone-100 rounded-xl focus:border-accent outline-none transition-all"
                />
              </div>
              <div className="relative">
                <Phone
                  className="absolute left-4 top-4 text-stone-400"
                  size={20}
                />
                <input
                  type="tel"
                  placeholder="Ваш номер телефона"
                  value={data.phone}
                  onChange={(e) => updateData("phone", e.target.value)}
                  className="w-full p-4 pl-12 border-2 border-stone-100 rounded-xl focus:border-accent outline-none transition-all"
                />
              </div>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl space-y-2 text-sm text-stone-600">
              <p className="font-semibold text-stone-800">Итого:</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <span>Стиль: {data.style}</span>
                <span>Город: {data.city}</span>
                <span>Бюджет: {data.budget}</span>
              </div>
            </div>
            <button
              disabled={!data.name || !data.phone}
              onClick={sendToWhatsApp}
              className="btn-primary w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
            >
              Отправить в WhatsApp <Send size={20} />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#fdfcfb]">
      <div className="w-full container">
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-stone-900">
            Расчет стоимости кухни
          </h1>
          <p className="text-stone-500">
            Ответьте на несколько вопросов и получите расчет
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 px-4">
          <div className="flex justify-between text-xs font-mono text-stone-400 mb-2 uppercase tracking-widest">
            <span>
              Шаг {step} из {totalSteps}
            </span>
            <span>{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5, ease: "circOut" }}
            />
          </div>
        </div>

        {/* Quiz Content */}
        <div className="quiz-card relative overflow-hidden min-h-[450px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="btn-secondary flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Назад
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2 text-stone-400 text-sm">
              <CheckCircle2 size={16} className="text-accent" />
              Бесплатный замер и дизайн-проект
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-stone-400 text-sm space-y-2">
          <p>© 2026 Кухонные Гарнитуры на Заказ в Таджикистане</p>
          <div className="flex justify-center gap-6">
            <span className="flex items-center gap-1">
              <CheckCircle2 size={14} /> Качество
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={14} /> Гарантия
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={14} /> Рассрочка
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
