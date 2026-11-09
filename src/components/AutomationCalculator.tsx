"use client";

import Link from "next/link";
import { useState } from "react";
import { calculateAutomationScenario, initialScenario, weeksPerYear } from "@/lib/automation-scenario";

const number = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
const money = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const sliders = [
  { id: "team", label: "Beteiligte Mitarbeitende", min: 1, max: 100, step: 1, unit: "" },
  { id: "hours", label: "Manuelle Stunden pro Person und Woche", min: 0, max: 40, step: 1, unit: " Std." },
  { id: "hourlyCost", label: "Arbeitskosten pro Stunde", min: 10, max: 150, step: 1, unit: " €" },
] as const;

export default function AutomationCalculator() {
  const [scenario, setScenario] = useState(initialScenario);
  const { hoursNow, hoursFreed, timeValue } = calculateAutomationScenario(scenario);

  return (
    <div className="overflow-hidden rounded-2xl border border-indigo-900/15 bg-white shadow-sm">
      <div className="min-w-0 p-5 sm:p-8">
        <h3 className="text-xl font-semibold">Ihre Ausgangslage</h3>
        <p className="mt-2 text-sm text-slate-600">Passen Sie die drei Werte an Ihr Team an.</p>
        <div className="mt-6 space-y-4">
          {sliders.map(({ id, label, min, max, step, unit }) => (
            <div key={id}>
              <div className="flex items-start justify-between gap-3 text-sm font-medium">
                <label htmlFor={`automation-${id}`}>{label}</label>
                <span className="shrink-0 tabular-nums text-indigo-800" aria-hidden>{number.format(scenario[id])}{unit}</span>
              </div>
              <input
                id={`automation-${id}`}
                type="range"
                min={min}
                max={max}
                step={step}
                value={scenario[id]}
                aria-valuetext={`${number.format(scenario[id])}${unit}`}
                onChange={(event) => setScenario({ ...scenario, [id]: event.target.valueAsNumber })}
                className="block h-9 w-full cursor-pointer accent-indigo-700"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-indigo-950 p-5 text-white sm:p-8">
        <div aria-live="polite">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-200">Ihr Aufwand heute</h3>
          <p className="mt-2 text-xl leading-snug sm:text-2xl">
            Ihr Team verbringt rund <strong className="tabular-nums">{number.format(hoursNow / 12)} Stunden im Monat</strong> mit manuellen Routineaufgaben. Das entspricht <strong className="tabular-nums">{money.format(hoursNow * scenario.hourlyCost / 12)} an Arbeitskosten</strong>.
          </p>
          <p className="mt-4 border-t border-indigo-200/25 pt-4 text-base leading-relaxed text-indigo-100">
            Bei {initialScenario.automation} % weniger manueller Bearbeitungszeit könnten pro Monat <strong className="tabular-nums text-white">{number.format(hoursFreed / 12)} Stunden</strong> frei werden. Ihr rechnerischer Wert liegt bei <strong className="tabular-nums text-white">{money.format(timeValue / 12)}</strong>.
          </p>
        </div>
        <Link href="/kontakt" className="cta-primary mt-5" data-track-event="cta_contact_click" data-track-label="Home Automatisierungsrechner">
          Kostenloses Erstgespräch
        </Link>
      </div>
      <p className="px-5 py-4 text-sm leading-6 text-slate-600 sm:px-8">
        Hochgerechnet mit {weeksPerYear} Wochen pro Jahr. Der Wert der frei werdenden Zeit wird zur Kosteneinsparung, soweit tatsächlich Ausgaben entfallen.
      </p>
    </div>
  );
}
