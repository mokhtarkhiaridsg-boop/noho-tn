"use client";

import { useMemo, useState } from "react";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";
const GOLD = "#f8c84a";

type StateKey = "CA" | "NY" | "TX" | "FL" | "WY";

type StateConfig = {
  name: string;
  hasIncomeTax: boolean;
  corporateRate: number;
  ecommerceNexusThreshold: number;
  ecommerceNexusTxnCount: number;
  salesTaxAvg: number;
  franchiseTaxFixed: number;
  notes: string;
};

const STATES: Record<StateKey, StateConfig> = {
  WY: {
    name: "Wyoming",
    hasIncomeTax: false,
    corporateRate: 0,
    ecommerceNexusThreshold: 100000,
    ecommerceNexusTxnCount: 200,
    salesTaxAvg: 4.0,
    franchiseTaxFixed: 60,
    notes: "État de formation par défaut. Pas d'income tax. Annual report 60 USD.",
  },
  CA: {
    name: "Californie",
    hasIncomeTax: true,
    corporateRate: 8.84,
    ecommerceNexusThreshold: 500000,
    ecommerceNexusTxnCount: 0,
    salesTaxAvg: 7.25,
    franchiseTaxFixed: 800,
    notes: "800 USD/an franchise tax minimum dès doing-business. Income tax 8.84% sur profits attribués à CA.",
  },
  NY: {
    name: "New York",
    hasIncomeTax: true,
    corporateRate: 6.5,
    ecommerceNexusThreshold: 500000,
    ecommerceNexusTxnCount: 100,
    salesTaxAvg: 8.875,
    franchiseTaxFixed: 25,
    notes: "Sales tax NYC = 8.875%. Income tax fed-state combined ~26% sur profits NY-source.",
  },
  TX: {
    name: "Texas",
    hasIncomeTax: false,
    corporateRate: 0,
    ecommerceNexusThreshold: 500000,
    ecommerceNexusTxnCount: 0,
    salesTaxAvg: 6.25,
    franchiseTaxFixed: 0,
    notes: "Pas d'income tax. Mais franchise tax (margin tax) 0.375-0.75% si revenue > 2.47M USD.",
  },
  FL: {
    name: "Floride",
    hasIncomeTax: false,
    corporateRate: 0,
    ecommerceNexusThreshold: 100000,
    ecommerceNexusTxnCount: 0,
    salesTaxAvg: 7.0,
    franchiseTaxFixed: 0,
    notes: "Pas d'income tax. Pas de franchise tax LLC. État favorable pour e-com.",
  },
};

function fmtUsd(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function TaxesUsEtatCalculator() {
  const [state, setState] = useState<StateKey>("CA");
  const [annualRevenue, setAnnualRevenue] = useState<number>(150000);
  const [revenueInState, setRevenueInState] = useState<number>(50000);
  const [hasNexus, setHasNexus] = useState<boolean>(true);
  const [profitMargin, setProfitMargin] = useState<number>(40);

  const cfg = STATES[state];

  const result = useMemo(() => {
    const annualProfit = annualRevenue * (profitMargin / 100);
    const profitInState = revenueInState * (profitMargin / 100);

    const incomeTax = hasNexus && cfg.hasIncomeTax ? profitInState * (cfg.corporateRate / 100) : 0;
    const franchiseTax = hasNexus ? cfg.franchiseTaxFixed : 0;
    const salesTaxCollected = hasNexus ? revenueInState * (cfg.salesTaxAvg / 100) : 0; // collected from customer, then remitted

    const total = incomeTax + franchiseTax;
    const effectiveRate = annualProfit > 0 ? (total / annualProfit) * 100 : 0;

    const nexusTriggered =
      annualRevenue >= cfg.ecommerceNexusThreshold ||
      (cfg.ecommerceNexusTxnCount > 0 && annualRevenue >= cfg.ecommerceNexusTxnCount * 100); // heuristic

    return { incomeTax, franchiseTax, salesTaxCollected, total, effectiveRate, annualProfit, profitInState, nexusTriggered };
  }, [state, annualRevenue, revenueInState, hasNexus, profitMargin, cfg]);

  return (
    <div className="space-y-6">
      {/* State picker */}
      <div className="p-5 rounded-2xl" style={{ background: CREAM }}>
        <label className="block text-[11.5px] font-black uppercase tracking-[0.14em] mb-3" style={{ color: INK }}>
          État à analyser
        </label>
        <div className="grid grid-cols-5 gap-2">
          {(Object.keys(STATES) as StateKey[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setState(s)}
              className="py-2.5 rounded-xl text-[13px] font-bold transition-colors"
              style={{
                background: state === s ? INK : "#fff",
                color: state === s ? CREAM : INK,
                border: "1px solid rgba(45,16,15,0.15)",
              }}
            >
              {s}
            </button>
          ))}
        </div>
        <p className="mt-3 text-[12.5px] italic" style={{ color: "rgba(45,16,15,0.7)" }}>
          {cfg.notes}
        </p>
      </div>

      {/* Inputs */}
      <div className="p-5 rounded-2xl" style={{ background: "#FAFAF8" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NumField label="CA total annuel (USD)" value={annualRevenue} set={setAnnualRevenue} step={1000} />
          <NumField label={`CA attribuable à ${cfg.name} (USD)`} value={revenueInState} set={setRevenueInState} step={1000} />
          <NumField label="Marge bénéficiaire (%)" value={profitMargin} set={setProfitMargin} step={5} max={100} />
          <div>
            <label className="block text-[11.5px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: INK }}>
              Tu as nexus dans cet état ?
            </label>
            <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid rgba(45,16,15,0.15)" }}>
              <button
                type="button"
                onClick={() => setHasNexus(false)}
                className="flex-1 py-2.5 text-[13px] font-bold transition-colors"
                style={{ background: !hasNexus ? INK : "#fff", color: !hasNexus ? CREAM : INK }}
              >
                Non
              </button>
              <button
                type="button"
                onClick={() => setHasNexus(true)}
                className="flex-1 py-2.5 text-[13px] font-bold transition-colors"
                style={{ background: hasNexus ? INK : "#fff", color: hasNexus ? CREAM : INK }}
              >
                Oui
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Nexus suggestion */}
      {result.nexusTriggered && !hasNexus && (
        <div className="p-5 rounded-2xl" style={{ background: GOLD, color: INK }}>
          <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1">
            Avertissement nexus
          </p>
          <p className="text-[13.5px] leading-relaxed">
            Avec ton CA actuel et le seuil de {cfg.name} ({fmtUsd(cfg.ecommerceNexusThreshold)} USD), tu déclenches probablement un nexus économique. Re-vérifie l&apos;option &quot;Oui&quot; ci-dessus pour voir l&apos;impact.
          </p>
        </div>
      )}

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl" style={{ background: CREAM }}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            Income tax {cfg.name}
          </p>
          <p className="text-[22px] font-extrabold" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            {fmtUsd(result.incomeTax)} USD
          </p>
        </div>
        <div className="p-4 rounded-2xl" style={{ background: CREAM }}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(45,16,15,0.6)" }}>
            Franchise tax annuel
          </p>
          <p className="text-[22px] font-extrabold" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            {fmtUsd(result.franchiseTax)} USD
          </p>
        </div>
        <div className="p-4 rounded-2xl" style={{ background: hasNexus ? RED : "#FAFAF8", color: hasNexus ? "#fff" : INK }}>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: hasNexus ? "rgba(255,255,255,0.7)" : "rgba(45,16,15,0.6)" }}>
            Total annuel à {cfg.name}
          </p>
          <p className="text-[22px] font-extrabold" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
            {fmtUsd(result.total)} USD
          </p>
        </div>
      </div>

      <div className="p-4 rounded-2xl" style={{ background: "#fff", borderLeft: `4px solid ${BLUE}` }}>
        <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: BLUE }}>
          Sales tax à collecter (pas à payer toi-même)
        </p>
        <p className="text-[16px] font-bold" style={{ color: INK }}>
          {fmtUsd(result.salesTaxCollected)} USD ({cfg.salesTaxAvg}% sur CA en état)
        </p>
        <p className="text-[12.5px] mt-1" style={{ color: "rgba(45,16,15,0.7)" }}>
          Cette somme est collectée auprès de tes clients et reversée à
          l&apos;État. Tu ne la prends pas dans tes poches — mais tu dois
          la collecter correctement, sinon pénalité.
        </p>
      </div>

      <p className="text-[12px] text-center" style={{ color: "rgba(45,16,15,0.55)" }}>
        Calcul indicatif. Taux 2026. Hors fed tax (LLC pass-through donc 0%
        fédéral pour non-US owner sans ECI). Hors complexités multi-state
        apportionment, R&D credit, etc. Pour calcul exact, consulte un
        CPA US partenaire NOHO.
      </p>
    </div>
  );
}

function NumField({ label, value, set, step = 1, max = 99999999 }: { label: string; value: number; set: (n: number) => void; step?: number; max?: number }) {
  return (
    <div>
      <label className="block text-[11.5px] font-black uppercase tracking-[0.12em] mb-1.5" style={{ color: INK }}>
        {label}
      </label>
      <input
        type="number"
        min={0}
        step={step}
        max={max}
        value={value}
        onChange={(e) => set(Math.max(0, Math.min(max, Number(e.target.value))))}
        className="w-full px-3 py-2.5 rounded-xl text-[14px] font-bold"
        style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.15)", color: INK }}
      />
    </div>
  );
}
