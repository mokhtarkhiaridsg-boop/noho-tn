"use client";

import { useMemo, useState } from "react";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

function fmt(n: number, dec = 0) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

export default function RoiCalculator() {
  const [price, setPrice] = useState<number>(250000);
  const [monthlyRent, setMonthlyRent] = useState<number>(2200);
  const [downPaymentPct, setDownPaymentPct] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [propTaxPct, setPropTaxPct] = useState<number>(1.2);
  const [insurance, setInsurance] = useState<number>(1500);
  const [mgmtPct, setMgmtPct] = useState<number>(10);
  const [vacancyPct, setVacancyPct] = useState<number>(6);
  const [maintPct, setMaintPct] = useState<number>(1.5);

  const result = useMemo(() => {
    const grossRent = monthlyRent * 12;
    const vacancyLoss = grossRent * (vacancyPct / 100);
    const mgmtCost = grossRent * (mgmtPct / 100);
    const propTax = price * (propTaxPct / 100);
    const maintenance = price * (maintPct / 100);

    const totalOpex = vacancyLoss + mgmtCost + propTax + insurance + maintenance;
    const noi = grossRent - totalOpex;
    const capRate = price > 0 ? (noi / price) * 100 : 0;

    // Mortgage payment (30-year fixed)
    const loanAmount = price * (1 - downPaymentPct / 100);
    const monthlyRate = interestRate / 100 / 12;
    const nMonths = 30 * 12;
    const monthlyPi = loanAmount === 0
      ? 0
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, nMonths))
        / (Math.pow(1 + monthlyRate, nMonths) - 1);
    const annualDebtService = monthlyPi * 12;

    const cashFlow = noi - annualDebtService;
    const closingCosts = price * 0.04; // ~4% closing
    const cashInvested = price * (downPaymentPct / 100) + closingCosts;
    const cashOnCash = cashInvested > 0 ? (cashFlow / cashInvested) * 100 : 0;

    return {
      grossRent,
      vacancyLoss,
      mgmtCost,
      propTax,
      insurance,
      maintenance,
      noi,
      capRate,
      annualDebtService,
      cashFlow,
      cashInvested,
      cashOnCash,
    };
  }, [price, monthlyRent, downPaymentPct, interestRate, propTaxPct, insurance, mgmtPct, vacancyPct, maintPct]);

  const verdict = result.cashOnCash >= 8
    ? { color: GREEN, label: "Bon investissement", text: `Cash-on-cash de ${result.cashOnCash.toFixed(1)}% au-dessus du seuil 8%. Continue le diligence : inspection, title search, property manager check.` }
    : result.cashOnCash >= 4
    ? { color: BLUE, label: "Acceptable", text: `Cash-on-cash de ${result.cashOnCash.toFixed(1)}%. Marginal. Cherche un meilleur cap rate ou négocie le prix d'achat.` }
    : { color: RED, label: "Faible rendement", text: `Cash-on-cash de ${result.cashOnCash.toFixed(1)}% sous le seuil 4%. À ce niveau, mieux vaut un US Treasury à 4-5% sans risque immobilier.` };

  const inputs: { label: string; value: number; set: (n: number) => void; min: number; step: number; suffix: string }[] = [
    { label: "Prix d'achat (USD)", value: price, set: setPrice, min: 0, step: 5000, suffix: "USD" },
    { label: "Loyer mensuel (USD)", value: monthlyRent, set: setMonthlyRent, min: 0, step: 50, suffix: "USD" },
    { label: "Down payment", value: downPaymentPct, set: setDownPaymentPct, min: 0, step: 5, suffix: "%" },
    { label: "Taux d'intérêt mortgage", value: interestRate, set: setInterestRate, min: 0, step: 0.25, suffix: "%" },
    { label: "Property tax annuel", value: propTaxPct, set: setPropTaxPct, min: 0, step: 0.1, suffix: "% du prix" },
    { label: "Assurance landlord", value: insurance, set: setInsurance, min: 0, step: 100, suffix: "USD/an" },
    { label: "Property mgmt", value: mgmtPct, set: setMgmtPct, min: 0, step: 1, suffix: "% du loyer" },
    { label: "Vacancy", value: vacancyPct, set: setVacancyPct, min: 0, step: 1, suffix: "% du loyer" },
    { label: "Maintenance", value: maintPct, set: setMaintPct, min: 0, step: 0.5, suffix: "% du prix" },
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
      </div>

      {/* Verdict */}
      <div
        className="p-6 rounded-2xl"
        style={{ background: "#fff", borderLeft: `4px solid ${verdict.color}` }}
      >
        <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: verdict.color }}>
          Verdict
        </p>
        <h3 className="font-extrabold text-[20px] mb-2" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
          {verdict.label}
        </h3>
        <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>
          {verdict.text}
        </p>
      </div>

      {/* Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl" style={{ background: CREAM }}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            Cap rate
          </p>
          <p className="text-[26px] font-extrabold" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            {result.capRate.toFixed(2)} %
          </p>
        </div>
        <div className="p-4 rounded-2xl" style={{ background: CREAM }}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            Cash-on-cash
          </p>
          <p className="text-[26px] font-extrabold" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            {result.cashOnCash.toFixed(2)} %
          </p>
        </div>
        <div className="p-4 rounded-2xl" style={{ background: "#FAFAF8" }}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            NOI annuel
          </p>
          <p className="text-[20px] font-extrabold" style={{ color: INK }}>
            {fmt(result.noi)} USD
          </p>
        </div>
        <div className="p-4 rounded-2xl" style={{ background: "#FAFAF8" }}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            Cash flow après dette
          </p>
          <p className="text-[20px] font-extrabold" style={{ color: result.cashFlow >= 0 ? GREEN : RED }}>
            {result.cashFlow >= 0 ? "+" : ""}{fmt(result.cashFlow)} USD
          </p>
        </div>
        <div className="p-4 rounded-2xl" style={{ background: "#FAFAF8" }}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            Cash investi (down + closing)
          </p>
          <p className="text-[16px] font-bold" style={{ color: INK }}>
            {fmt(result.cashInvested)} USD
          </p>
        </div>
        <div className="p-4 rounded-2xl" style={{ background: "#FAFAF8" }}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            Mortgage annuel (P+I)
          </p>
          <p className="text-[16px] font-bold" style={{ color: INK }}>
            {fmt(result.annualDebtService)} USD
          </p>
        </div>
      </div>

      <p className="text-[11.5px] text-center" style={{ color: "rgba(45,16,15,0.55)" }}>
        Hors appréciation du capital, dépréciation fiscale, et frais
        annexes (échec locataire, capital expenditure, taxes municipales
        spéciales). Le rendement total réel est généralement 30-50% plus
        bas que les chiffres affichés par les agents.
      </p>
    </div>
  );
}
