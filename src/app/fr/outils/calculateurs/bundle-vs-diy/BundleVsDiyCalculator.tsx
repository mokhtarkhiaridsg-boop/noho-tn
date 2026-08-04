"use client";

import { useMemo, useState } from "react";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";
const GOLD = "#f8c84a";

const TND_PER_USD = 3.1; // mai 2026

function fmtTnd(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " TND";
}

export default function BundleVsDiyCalculator() {
  const [hourlyRate, setHourlyRate] = useState<number>(50); // USD/hr Mokhtar's rate-equivalent
  const [hoursDiy, setHoursDiy] = useState<number>(40); // hours to DIY
  const [delayWeeks, setDelayWeeks] = useState<number>(6);
  const [monthlyRevenueTarget, setMonthlyRevenueTarget] = useState<number>(8000); // USD/mo

  const diy = useMemo(() => {
    const diyCashUsd =
      150 + // WY filing
      125 + // RA Year 1
      770 + // Form 5472 CPA Year 1
      900 + // Mailbox CMRA (avg 75 USD x 12 mo, simplified)
      40 + // Form 1583 notarisation
      0; // EIN gratuit

    const diyCashTnd = diyCashUsd * TND_PER_USD;
    const timeCostUsd = hoursDiy * hourlyRate;
    const timeCostTnd = timeCostUsd * TND_PER_USD;
    const delayRevenueLossUsd = (delayWeeks / 4) * monthlyRevenueTarget;
    const delayRevenueLossTnd = delayRevenueLossUsd * TND_PER_USD;

    const totalTnd = diyCashTnd + timeCostTnd + delayRevenueLossTnd;
    return { diyCashUsd, diyCashTnd, timeCostUsd, timeCostTnd, delayRevenueLossUsd, delayRevenueLossTnd, totalTnd };
  }, [hourlyRate, hoursDiy, delayWeeks, monthlyRevenueTarget]);

  const noho = useMemo(() => {
    const bundleTnd = 4000;
    // Suivi mensuel optional, NOT included in default comparison
    const hoursClient = 5; // ~5 hours of client time during 14-day NOHO process
    const timeCostTnd = hoursClient * hourlyRate * TND_PER_USD;
    const delayWeeksNoho = 2; // 14 days
    const delayRevenueLossTnd = (delayWeeksNoho / 4) * monthlyRevenueTarget * TND_PER_USD;

    const totalTnd = bundleTnd + timeCostTnd + delayRevenueLossTnd;
    return { bundleTnd, timeCostTnd, delayRevenueLossTnd, totalTnd };
  }, [hourlyRate, monthlyRevenueTarget]);

  const savings = diy.totalTnd - noho.totalTnd;
  const isNohoBetter = savings > 0;

  const inputs: { label: string; value: number; set: (n: number) => void; min: number; step: number; suffix: string }[] = [
    { label: "Ton taux horaire (USD/h)", value: hourlyRate, set: setHourlyRate, min: 0, step: 5, suffix: "USD/h" },
    { label: "Heures DIY estimées", value: hoursDiy, set: setHoursDiy, min: 0, step: 5, suffix: "heures" },
    { label: "Délai DIY (semaines)", value: delayWeeks, set: setDelayWeeks, min: 0, step: 1, suffix: "sem" },
    { label: "CA mensuel cible (USD/mois)", value: monthlyRevenueTarget, set: setMonthlyRevenueTarget, min: 0, step: 500, suffix: "USD/mois" },
  ];

  return (
    <div className="space-y-7">
      {/* Inputs */}
      <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inputs.map((inp) => (
            <div key={inp.label}>
              <label className="block text-[11.5px] font-black uppercase tracking-[0.12em] mb-1.5" style={{ color: INK }}>
                {inp.label}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={inp.min}
                  step={inp.step}
                  value={inp.value}
                  onChange={(e) => inp.set(Math.max(inp.min, Number(e.target.value)))}
                  className="flex-1 px-3 py-2.5 rounded-xl text-[14px] font-bold"
                  style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.15)", color: INK }}
                />
                <span className="text-[11px] font-bold" style={{ color: "rgba(45,16,15,0.55)" }}>{inp.suffix}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] mt-4" style={{ color: "rgba(45,16,15,0.55)" }}>
          Taux change : 1 USD ≈ {TND_PER_USD} TND (mai 2026).
        </p>
      </div>

      {/* Verdict */}
      <div
        className="p-6 rounded-2xl"
        style={{ background: "#fff", borderLeft: `4px solid ${isNohoBetter ? GREEN : RED}` }}
      >
        <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: isNohoBetter ? GREEN : RED }}>
          Verdict
        </p>
        <h3 className="font-extrabold text-[24px] mb-2" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
          {isNohoBetter
            ? `Business économise ${fmtTnd(Math.abs(savings))}`
            : `DIY est moins cher de ${fmtTnd(Math.abs(savings))}`
          }
        </h3>
        <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>
          {isNohoBetter
            ? `Au-delà du cash, NOHO te lance 4 semaines plus tôt et limite les heures perdues à reconstituer un dossier KYC propre.`
            : `Si tu valorises peu ton temps et ton délai de lancement, le DIY peut faire sens sur le pur cash. Mais relis le contexte ci-dessous.`}
        </p>
      </div>

      {/* Side-by-side breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl" style={{ background: "#FAFAF8" }}>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-3" style={{ color: INK }}>
            DIY (faire toi-même)
          </p>
          <div className="space-y-2 text-[13px]" style={{ color: INK }}>
            <div className="flex justify-between"><span>Cash sorties</span><span className="font-bold">{fmtTnd(diy.diyCashTnd)}</span></div>
            <div className="flex justify-between"><span>Coût temps</span><span className="font-bold">{fmtTnd(diy.timeCostTnd)}</span></div>
            <div className="flex justify-between"><span>Délai de lancement</span><span className="font-bold">{fmtTnd(diy.delayRevenueLossTnd)}</span></div>
            <div className="flex justify-between pt-2 mt-1 border-t border-black/10">
              <span className="font-black">Total</span>
              <span className="font-black text-[15px]">{fmtTnd(diy.totalTnd)}</span>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-2xl" style={{ background: GOLD, color: INK }}>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-3" style={{ color: INK }}>
            NOHO Business
          </p>
          <div className="space-y-2 text-[13px]">
            <div className="flex justify-between"><span>Forfait Business</span><span className="font-bold">{fmtTnd(noho.bundleTnd)}</span></div>
            <div className="flex justify-between"><span>Coût temps client (≈5h)</span><span className="font-bold">{fmtTnd(noho.timeCostTnd)}</span></div>
            <div className="flex justify-between"><span>Délai de lancement (~2 sem)</span><span className="font-bold">{fmtTnd(noho.delayRevenueLossTnd)}</span></div>
            <div className="flex justify-between pt-2 mt-1 border-t border-black/15">
              <span className="font-black">Total</span>
              <span className="font-black text-[15px]">{fmtTnd(noho.totalTnd)}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[12px] text-center" style={{ color: "rgba(45,16,15,0.55)" }}>
        Hors Suivi mensuel optionnel (1 200 TND/mois) qui couvre Form
        5472, annual report, et accompagnement compliance. Hors marque +
        site web (inclus dans Business, calculés à 0 en DIY mais
        à reconstituer si lancement réel).
      </p>

      <div className="text-center">
        <a
          href="/fr/business"
          className="inline-block font-black px-7 py-3.5 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
          style={{ background: INK, color: CREAM }}
        >
          Voir Business →
        </a>
      </div>
    </div>
  );
}
