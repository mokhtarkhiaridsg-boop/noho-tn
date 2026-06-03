"use client";

/**
 * Interactive Get-a-Quote calculator for /shipping (Devis).
 * TN-localized rates in TND. Mirrors nohomailbox.org/shipping interactive feel.
 */
import { useState, useMemo } from "react";
import Link from "next/link";
import { AiTruck, AiClock, AiBolt } from "@/components/AnimatedIcons";

type Destination = "tunis" | "france" | "worldwide" | "us-local";
type Speed = "economique" | "standard" | "express";

const DEST_LABEL: Record<Destination, string> = {
  tunis: "Tunisie",
  france: "France / Europe",
  worldwide: "Reste du monde",
  "us-local": "Livraison locale LA",
};

const SPEED_LABEL: Record<Speed, string> = {
  economique: "Économique (USPS / UPS Standard)",
  standard: "Standard (UPS Worldwide)",
  express: "Express (DHL / FedEx International Priority)",
};

const ETA_DAYS: Record<Destination, Record<Speed, string>> = {
  tunis: { economique: "10-21 jours", standard: "5-9 jours", express: "2-4 jours" },
  france: { economique: "7-14 jours", standard: "4-7 jours", express: "2-3 jours" },
  worldwide: { economique: "10-21 jours", standard: "5-10 jours", express: "2-5 jours" },
  "us-local": { economique: "1-3 jours", standard: "0-1 jour", express: "0-3h same-day" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

function computeQuote(
  weightLb: number,
  destination: Destination,
  speed: Speed,
): { usdLow: number; usdHigh: number; tndLow: number; tndHigh: number } {
  // Base postal rates per lb (USD) — directional, calibrated against DHL/UPS/USPS Mar 2026.
  const ratePerLbUsd: Record<Destination, Record<Speed, [number, number]>> = {
    tunis: {
      economique: [4.5, 8],
      standard: [9, 16],
      express: [14, 26],
    },
    france: {
      economique: [3.5, 6.5],
      standard: [7, 13],
      express: [11, 20],
    },
    worldwide: {
      economique: [5, 10],
      standard: [11, 18],
      express: [16, 30],
    },
    "us-local": {
      economique: [0.5, 1.2],
      standard: [1, 2.2],
      express: [3, 5.5],
    },
  };
  const [low, high] = ratePerLbUsd[destination][speed];
  // Base fee + per-lb rate
  const baseFeeUsd = destination === "us-local" ? 4 : 12;
  const usdLow = Math.round(baseFeeUsd + low * Math.max(weightLb, 0.5));
  const usdHigh = Math.round(baseFeeUsd + high * Math.max(weightLb, 0.5));
  // Convert to TND at ~3.1 TND/USD (mai 2026, BCT taux directionnel)
  const fxRate = 3.1;
  const tndLow = Math.round(usdLow * fxRate);
  const tndHigh = Math.round(usdHigh * fxRate);
  return { usdLow, usdHigh, tndLow, tndHigh };
}

export default function QuoteClient() {
  const [weight, setWeight] = useState(2);
  const [destination, setDestination] = useState<Destination>("tunis");
  const [speed, setSpeed] = useState<Speed>("standard");

  const quote = useMemo(() => computeQuote(weight, destination, speed), [weight, destination, speed]);
  const eta = ETA_DAYS[destination][speed];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* INPUTS */}
      <div
        className="rounded-3xl p-6 sm:p-8"
        style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)", boxShadow: "0 12px 32px rgba(45,16,15,0.06)" }}
      >
        <h3
          className="font-extrabold text-[18px] mb-5 flex items-center gap-3"
          style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
        >
          <AiTruck className="w-12 h-8" />
          Décris ton colis
        </h3>

        {/* Weight */}
        <div className="mb-5">
          <label className="block text-[12px] font-black uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(45,16,15,0.6)" }}>
            Poids (lb)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={0.5}
              max={50}
              step={0.5}
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="flex-1 accent-[#337485]"
              aria-label="Poids du colis en livres"
            />
            <input
              type="number"
              min={0.5}
              max={50}
              step={0.5}
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value) || 0.5)}
              className="w-20 rounded-xl text-center font-black"
              style={{
                padding: "10px 12px",
                border: "2px solid #D8C8B4",
                background: "#FFF",
                color: INK,
                fontFamily: "var(--font-baloo), sans-serif",
              }}
            />
          </div>
          <p className="text-[11px] mt-2" style={{ color: "rgba(45,16,15,0.5)" }}>
            ≈ {(weight * 0.453592).toFixed(2)} kg
          </p>
        </div>

        {/* Destination */}
        <div className="mb-5">
          <label className="block text-[12px] font-black uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(45,16,15,0.6)" }}>
            Destination
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(DEST_LABEL) as Destination[]).map((d) => (
              <button
                key={d}
                onClick={() => setDestination(d)}
                className="px-3 py-2.5 rounded-xl font-bold text-[13px] transition-all text-left"
                style={{
                  background: destination === d ? INK : "rgba(45,16,15,0.04)",
                  color: destination === d ? CREAM : INK,
                  border: destination === d ? `2px solid ${INK}` : "2px solid transparent",
                }}
                aria-pressed={destination === d}
              >
                {DEST_LABEL[d]}
              </button>
            ))}
          </div>
        </div>

        {/* Speed */}
        <div className="mb-5">
          <label className="block text-[12px] font-black uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(45,16,15,0.6)" }}>
            Vitesse
          </label>
          <div className="space-y-2">
            {(Object.keys(SPEED_LABEL) as Speed[]).map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className="w-full px-4 py-3 rounded-xl text-left font-bold text-[13px] transition-all flex items-center justify-between"
                style={{
                  background: speed === s ? CREAM : "transparent",
                  color: INK,
                  border: speed === s ? `2px solid ${BLUE}` : "2px solid rgba(45,16,15,0.10)",
                }}
                aria-pressed={speed === s}
              >
                <span>{SPEED_LABEL[s]}</span>
                {s === "express" && <AiBolt className="w-5 h-5" />}
                {s === "economique" && <AiClock className="w-5 h-5" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* QUOTE PANEL */}
      <div
        className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
        style={{
          background: INK,
          color: CREAM,
          boxShadow: "0 20px 60px rgba(45,16,15,0.20)",
        }}
      >
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: GOLD }}>
            Devis estimé
          </p>
          <div className="mb-2">
            <span
              className="font-extrabold"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1,
              }}
            >
              {quote.tndLow}-{quote.tndHigh}
            </span>
            <span className="text-[18px] font-bold ml-2" style={{ color: "rgba(247,230,194,0.6)" }}>
              TND
            </span>
          </div>
          <p className="text-[13px]" style={{ color: "rgba(247,230,194,0.7)" }}>
            ≈ {quote.usdLow}-{quote.usdHigh} USD · {eta}
          </p>

          <div className="mt-6 space-y-2 text-[13px]">
            {[
              { l: "Poids", v: `${weight} lb (${(weight * 0.453592).toFixed(2)} kg)` },
              { l: "Destination", v: DEST_LABEL[destination] },
              { l: "Vitesse", v: SPEED_LABEL[speed] },
              { l: "Délai estimé", v: eta },
            ].map((row) => (
              <div
                key={row.l}
                className="flex items-start justify-between gap-2 py-2"
                style={{ borderBottom: "1px solid rgba(247,230,194,0.10)" }}
              >
                <span style={{ color: "rgba(247,230,194,0.6)" }}>{row.l}</span>
                <span className="font-bold text-right" style={{ color: CREAM }}>{row.v}</span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[11.5px] leading-relaxed" style={{ color: "rgba(247,230,194,0.55)" }}>
            Devis indicatif. Le devis final inclut les frais postaux exacts du
            transporteur + manutention NOHO + assurance optionnelle. Aucun markup
            sur les frais postaux.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <Link
            href="/appel"
            className="w-full inline-flex items-center justify-center gap-2 font-black px-5 py-4 rounded-2xl text-[14px]"
            style={{ background: GOLD, color: INK }}
          >
            Confirmer ce devis
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
              <path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-2xl text-[13px]"
            style={{ background: "rgba(247,230,194,0.10)", color: CREAM, border: "1px solid rgba(247,230,194,0.20)" }}
          >
            Demander un devis sur-mesure
          </Link>
        </div>
      </div>
    </div>
  );
}
