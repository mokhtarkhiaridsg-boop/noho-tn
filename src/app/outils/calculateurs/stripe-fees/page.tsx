import type { Metadata } from "next";
import Link from "next/link";
import StripeFeesCalculator from "./StripeFeesCalculator";

export const metadata: Metadata = {
  title: "Calculateur frais Stripe vs Paddle vs Lemon Squeezy — combien tu perds vraiment",
  description:
    "Compare ce que tu gardes réellement après Stripe (2.9% + 0.30 $), Paddle MoR (5% + 0.50 $), Lemon Squeezy MoR (5% + 0.50 $) pour ton volume mensuel.",
  alternates: { canonical: "https://noho.tn/outils/calculateurs/stripe-fees" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function StripeFeesPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Frais Stripe vs Paddle vs LS</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Stripe vs Paddle vs Lemon Squeezy —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              calculateur
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Stripe est le moins cher en frais bruts, mais Paddle et Lemon
            Squeezy gèrent ta TVA EU + ton risk + tes chargebacks. Voici
            ce que ça coûte sur ton volume réel.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <StripeFeesCalculator />
        </div>
      </section>

      <section className="px-5 sm:px-6 py-10" style={{ background: CREAM }}>
        <div
          className="max-w-3xl mx-auto text-[15px] leading-[1.7] prose prose-noho"
          style={{ color: "#1F0807", fontFamily: "var(--font-baloo), sans-serif" }}
        >
          <h2>Ce que le calculateur ne montre pas</h2>
          <p>
            Stripe est le moins cher en frais visibles. Mais Stripe te
            fait porter trois charges invisibles :
          </p>
          <ul>
            <li><strong>TVA EU.</strong> Si tu vends à des clients EU, tu dois
              t&apos;enregistrer au OSS (One Stop Shop) à partir de 10 000
              €/an et collecter 20-27% de TVA selon le pays. Paddle et
              Lemon Squeezy le font pour toi (Merchant of Record).</li>
            <li><strong>Risk + chargebacks.</strong> Chaque dispute coûte 15 $
              chez Stripe (même si tu gagnes). Paddle et LS absorbent ce
              risque.</li>
            <li><strong>Sales tax US.</strong> Si tu déclenches nexus dans un
              état US (Wayfair, Wayfair, et après), tu dois collecter.
              Paddle et LS le font.</li>
          </ul>
          <p>
            Règle simple : si ton volume est &lt; 50 000 USD/an,{" "}
            <strong>Paddle ou Lemon Squeezy</strong> te fait gagner du
            temps qui vaut plus que les 2 points de marge perdus. Au-delà,
            Stripe est rentable si tu peux gérer compliance toi-même.
          </p>
        </div>
      </section>
    </>
  );
}
