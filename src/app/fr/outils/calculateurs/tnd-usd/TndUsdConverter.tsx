"use client";

import { useState, useMemo } from "react";

const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";
const CREAM = "#F7E6C2";

// Taux indicatif TND → USD (1 USD = ~3.10 TND mi-2026, varie)
const REF_RATE_TND_PER_USD = 3.1;

type Channel = {
  name: string;
  spreadPct: number;
  fixedFeeUsd: number;
  description: string;
  positive?: boolean;
};

const CHANNELS: Channel[] = [
  { name: "Wise Business", spreadPct: 0.5, fixedFeeUsd: 4, description: "Meilleur pour < 10 000 USD", positive: true },
  { name: "Mercury → BIAT (TND)", spreadPct: 2.5, fixedFeeUsd: 30, description: "Conversion forcée en TND" },
  { name: "Mercury → BIAT (devises)", spreadPct: 0, fixedFeeUsd: 30, description: "Compte en devises, pas de conversion", positive: true },
  { name: "Payoneer", spreadPct: 3.5, fixedFeeUsd: 0, description: "Pratique mais coûteux en volume" },
];

export default function TndUsdConverter() {
  const [direction, setDirection] = useState<"usd-to-tnd" | "tnd-to-usd">("usd-to-tnd");
  const [amount, setAmount] = useState(1000);

  const results = useMemo(() => {
    return CHANNELS.map((c) => {
      let received: number;
      if (direction === "usd-to-tnd") {
        const usdAfterFee = Math.max(0, amount - c.fixedFeeUsd);
        const effectiveRate = REF_RATE_TND_PER_USD * (1 - c.spreadPct / 100);
        received = usdAfterFee * effectiveRate;
      } else {
        const usdNeeded = amount / REF_RATE_TND_PER_USD;
        const usdWithSpread = usdNeeded * (1 + c.spreadPct / 100);
        received = usdWithSpread + c.fixedFeeUsd;
      }
      return { ...c, received };
    });
  }, [amount, direction]);

  const sortedResults = [...results].sort((a, b) =>
    direction === "usd-to-tnd" ? b.received - a.received : a.received - b.received
  );
  const best = sortedResults[0];
  const worst = sortedResults[sortedResults.length - 1];
  const delta = Math.abs(best.received - worst.received);

  return (
    <div className="rounded-3xl overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.10)", boxShadow: "0 12px 32px rgba(45,16,15,0.08)" }}>
      <div className="p-6 sm:p-7">
        {/* Direction toggle */}
        <div className="flex rounded-full p-1 mb-5 mx-auto w-fit" style={{ background: CREAM }}>
          <button
            type="button"
            onClick={() => setDirection("usd-to-tnd")}
            className="text-[12px] font-black uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-colors"
            style={{
              background: direction === "usd-to-tnd" ? INK : "transparent",
              color: direction === "usd-to-tnd" ? CREAM : INK,
            }}
          >
            USD → TND
          </button>
          <button
            type="button"
            onClick={() => setDirection("tnd-to-usd")}
            className="text-[12px] font-black uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-colors"
            style={{
              background: direction === "tnd-to-usd" ? INK : "transparent",
              color: direction === "tnd-to-usd" ? CREAM : INK,
            }}
          >
            TND → USD
          </button>
        </div>

        <label className="block mb-6">
          <span className="block text-[13px] font-bold mb-2" style={{ color: INK }}>
            Montant à envoyer / recevoir ({direction === "usd-to-tnd" ? "USD" : "TND"})
          </span>
          <div className="relative">
            <input
              type="number"
              value={amount}
              min={50}
              step={50}
              onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full text-[20px] font-extrabold tabular-nums px-4 py-3 rounded-xl"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                color: INK,
                background: CREAM,
                border: "1px solid rgba(45,16,15,0.15)",
              }}
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] font-bold"
              style={{ color: "rgba(45,16,15,0.55)" }}
            >
              {direction === "usd-to-tnd" ? "USD" : "TND"}
            </span>
          </div>
        </label>

        <p className="text-[11px] mb-5 text-center" style={{ color: "rgba(45,16,15,0.55)" }}>
          Taux de référence BCT indicatif : 1 USD ≈ {REF_RATE_TND_PER_USD} TND (mai 2026)
        </p>

        <div className="rounded-2xl overflow-hidden" style={{ background: CREAM }}>
          <ul>
            {sortedResults.map((r, i) => (
              <li
                key={r.name}
                className="px-5 py-4 flex justify-between items-baseline gap-3"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid rgba(45,16,15,0.08)",
                }}
              >
                <div className="min-w-0">
                  <p className="text-[13.5px] font-extrabold" style={{ color: INK }}>{r.name}</p>
                  <p className="text-[11.5px] mt-0.5" style={{ color: "rgba(45,16,15,0.6)" }}>{r.description}</p>
                </div>
                <span
                  className="text-[16px] font-extrabold tabular-nums whitespace-nowrap"
                  style={{
                    color: i === 0 ? GREEN : i === sortedResults.length - 1 ? RED : INK,
                    fontFamily: "var(--font-baloo), sans-serif",
                  }}
                >
                  {r.received.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} {direction === "usd-to-tnd" ? "TND" : "USD"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 p-4 rounded-xl text-[12.5px] leading-relaxed" style={{ background: "#fef3c7", color: "#422006" }}>
          <p>
            <strong>Différence meilleur → pire :</strong>{" "}
            {delta.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}{" "}
            {direction === "usd-to-tnd" ? "TND" : "USD"} sur {amount.toLocaleString("fr-FR")}
            {" "}{direction === "usd-to-tnd" ? "USD" : "TND"} envoyés. Choisir le bon canal compte.
          </p>
        </div>

        <p className="text-[11px] mt-4 leading-relaxed" style={{ color: "rgba(45,16,15,0.55)" }}>
          Estimations indicatives. Les frais réels varient selon le
          montant, la banque émettrice/réceptrice, et le jour. Vérifie
          le devis exact avant chaque transfert.
        </p>
      </div>
    </div>
  );
}
