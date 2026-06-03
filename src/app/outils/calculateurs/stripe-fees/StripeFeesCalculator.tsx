"use client";

import { useMemo, useState } from "react";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

type Processor = {
  key: "stripe" | "paddle" | "ls";
  label: string;
  percent: number;
  fixed: number;
  note: string;
  pros: string;
  cons: string;
};

const PROCESSORS: Processor[] = [
  {
    key: "stripe",
    label: "Stripe",
    percent: 0.029,
    fixed: 0.3,
    note: "Tu gères TVA + sales tax + chargebacks toi-même",
    pros: "Frais les plus bas, payouts directs Mercury, contrôle complet",
    cons: "TVA EU à 10 000 € → OSS obligatoire. 15 $ par dispute. Pas de support compliance.",
  },
  {
    key: "paddle",
    label: "Paddle (MoR)",
    percent: 0.05,
    fixed: 0.5,
    note: "Paddle est le Merchant of Record — gère tout",
    pros: "TVA EU + sales tax US + chargebacks + risk gérés. Idéal SaaS, info-produits, downloads.",
    cons: "5% + 0.50 $/txn. Approbation parfois lente. Branding Paddle visible sur invoice.",
  },
  {
    key: "ls",
    label: "Lemon Squeezy (MoR)",
    percent: 0.05,
    fixed: 0.5,
    note: "MoR comme Paddle, rachat par Stripe en 2024",
    pros: "TVA + sales tax + dispute géré. Setup simple, dashboard moderne. Bon pour creators / indies.",
    cons: "5% + 0.50 $/txn. Souscription max 25 000 USD/txn. Limité hors info-produits.",
  },
];

function fmt(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function StripeFeesCalculator() {
  const [revenue, setRevenue] = useState<number>(10000);
  const [txns, setTxns] = useState<number>(50);

  const avgTxn = txns > 0 ? revenue / txns : 0;

  const results = useMemo(() => {
    return PROCESSORS.map((p) => {
      const fees = revenue * p.percent + txns * p.fixed;
      const net = revenue - fees;
      const effectivePct = revenue > 0 ? (fees / revenue) * 100 : 0;
      return { ...p, fees, net, effectivePct };
    });
  }, [revenue, txns]);

  const bestNet = Math.max(...results.map((r) => r.net));

  return (
    <div className="space-y-7">
      {/* Inputs */}
      <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-[12px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: INK }}>
              Chiffre d&apos;affaires mensuel (USD)
            </label>
            <input
              type="number"
              min={0}
              step={100}
              value={revenue}
              onChange={(e) => setRevenue(Math.max(0, Number(e.target.value)))}
              className="w-full px-4 py-3 rounded-xl text-[16px] font-bold"
              style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.15)", color: INK }}
            />
          </div>
          <div>
            <label className="block text-[12px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: INK }}>
              Nombre de transactions / mois
            </label>
            <input
              type="number"
              min={1}
              step={1}
              value={txns}
              onChange={(e) => setTxns(Math.max(1, Number(e.target.value)))}
              className="w-full px-4 py-3 rounded-xl text-[16px] font-bold"
              style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.15)", color: INK }}
            />
          </div>
        </div>
        <p className="text-[12.5px] mt-4" style={{ color: "rgba(45,16,15,0.65)" }}>
          Transaction moyenne : <strong>{fmt(avgTxn)} USD</strong>
        </p>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {results.map((r) => {
          const isBest = r.net === bestNet;
          return (
            <div
              key={r.key}
              className="p-5 rounded-2xl"
              style={{
                background: "#fff",
                border: isBest ? `2px solid ${GREEN}` : "1px solid rgba(45,16,15,0.08)",
                boxShadow: isBest ? "0 8px 24px rgba(45,122,74,0.12)" : "0 2px 8px rgba(45,16,15,0.04)",
              }}
            >
              <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-extrabold text-[18px]" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                    {r.label}
                  </h3>
                  {isBest && (
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.14em] px-2 py-1 rounded" style={{ background: GREEN, color: "#fff" }}>
                      Meilleur net
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-black uppercase tracking-[0.14em]" style={{ color: "rgba(45,16,15,0.6)" }}>
                    Net après frais
                  </p>
                  <p className="text-[22px] font-extrabold" style={{ color: isBest ? GREEN : INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                    {fmt(r.net)} USD
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12.5px] mb-3">
                <div>
                  <p className="font-black uppercase tracking-[0.12em] text-[10px] mb-0.5" style={{ color: "rgba(45,16,15,0.55)" }}>
                    Frais bruts
                  </p>
                  <p className="font-bold" style={{ color: INK }}>{fmt(r.fees)} USD</p>
                </div>
                <div>
                  <p className="font-black uppercase tracking-[0.12em] text-[10px] mb-0.5" style={{ color: "rgba(45,16,15,0.55)" }}>
                    Taux effectif
                  </p>
                  <p className="font-bold" style={{ color: INK }}>{r.effectivePct.toFixed(2)} %</p>
                </div>
                <div>
                  <p className="font-black uppercase tracking-[0.12em] text-[10px] mb-0.5" style={{ color: "rgba(45,16,15,0.55)" }}>
                    Formule
                  </p>
                  <p className="font-bold text-[11.5px]" style={{ color: INK }}>
                    {(r.percent * 100).toFixed(1)}% + {r.fixed.toFixed(2)} $/txn
                  </p>
                </div>
              </div>
              <div className="space-y-1.5 text-[12.5px] leading-relaxed">
                <p style={{ color: INK }}>
                  <span className="font-bold" style={{ color: GREEN }}>+ </span>
                  {r.pros}
                </p>
                <p style={{ color: INK }}>
                  <span className="font-bold" style={{ color: RED }}>− </span>
                  {r.cons}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[12px] text-center" style={{ color: "rgba(45,16,15,0.55)" }}>
        Tarifs Stripe et Paddle/LS publics, mai 2026. Hors frais de
        change FX (~1-2% supplémentaires si carte non-USD). Le calcul
        n&apos;inclut pas les coûts cachés de compliance (OSS EU, sales
        tax US) qui font basculer la décision pour les volumes &lt; 50K
        USD/an.
      </p>
    </div>
  );
}
