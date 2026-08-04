"use client";

import { useState } from "react";

const INK = "#2D100F";
const RED = "#C73E2D";
const BLUE = "#337485";
const CREAM = "#F7E6C2";

export default function Form5472Calculator() {
  const [years, setYears] = useState(1);
  const [daysAfterNotice, setDaysAfterNotice] = useState(0);

  const basePenalty = 25_000 * years;
  const additionalThirtyDayBlocks = Math.ceil(Math.max(0, daysAfterNotice) / 30);
  const additionalPenalty = additionalThirtyDayBlocks * 25_000;
  const total = basePenalty + additionalPenalty;

  return (
    <div className="rounded-3xl overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.10)", boxShadow: "0 12px 32px rgba(45,16,15,0.08)" }}>
      <div className="p-6 sm:p-7">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] mb-1" style={{ color: BLUE }}>
          Estimation
        </p>
        <h2 className="font-extrabold mb-5 text-[20px]" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
          Saisis ta situation
        </h2>

        <label className="block mb-5">
          <span className="block text-[13px] font-bold mb-2" style={{ color: INK }}>
            Combien d&apos;années Form 5472 a été oublié ?
          </span>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value, 10))}
              className="flex-1"
              style={{ accentColor: INK }}
            />
            <span
              className="font-extrabold text-[18px] tabular-nums w-12 text-right"
              style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              {years}
            </span>
          </div>
        </label>

        <label className="block mb-6">
          <span className="block text-[13px] font-bold mb-2" style={{ color: INK }}>
            Jours écoulés depuis la mise en demeure IRS (0 si pas encore notifié)
          </span>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={365}
              step={30}
              value={daysAfterNotice}
              onChange={(e) => setDaysAfterNotice(parseInt(e.target.value, 10))}
              className="flex-1"
              style={{ accentColor: INK }}
            />
            <span
              className="font-extrabold text-[16px] tabular-nums w-16 text-right"
              style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              {daysAfterNotice} j
            </span>
          </div>
        </label>

        <div className="rounded-2xl p-5 sm:p-6" style={{ background: CREAM }}>
          <div className="flex justify-between items-baseline mb-2 text-[13px]" style={{ color: "rgba(45,16,15,0.7)" }}>
            <span>Pénalité de base ({years}× 25 000 USD)</span>
            <span className="font-bold tabular-nums" style={{ color: INK }}>{basePenalty.toLocaleString("fr-FR")} USD</span>
          </div>
          <div className="flex justify-between items-baseline mb-3 text-[13px]" style={{ color: "rgba(45,16,15,0.7)" }}>
            <span>Pénalité additionnelle ({additionalThirtyDayBlocks}× 25 000 USD)</span>
            <span className="font-bold tabular-nums" style={{ color: INK }}>{additionalPenalty.toLocaleString("fr-FR")} USD</span>
          </div>
          <div className="pt-3 border-t flex justify-between items-baseline" style={{ borderColor: "rgba(45,16,15,0.15)" }}>
            <span className="text-[13px] font-black uppercase tracking-[0.14em]" style={{ color: INK }}>
              Total estimé
            </span>
            <span
              className="font-extrabold text-[26px] tabular-nums"
              style={{ color: RED, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              {total.toLocaleString("fr-FR")} USD
            </span>
          </div>
        </div>

        <p className="text-[11px] mt-4 leading-relaxed" style={{ color: "rgba(45,16,15,0.55)" }}>
          Estimation indicative selon IRC §6038A(d). L&apos;IRS peut
          aussi appliquer des intérêts et frais administratifs. Pour ta
          situation exacte, consulte un CPA agréé.
        </p>
      </div>
    </div>
  );
}
