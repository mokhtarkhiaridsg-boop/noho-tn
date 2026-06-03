import type { Metadata } from "next";
import Link from "next/link";
import BundleVsDiyCalculator from "./BundleVsDiyCalculator";

export const metadata: Metadata = {
  title: "Business NOHO vs DIY — calculateur d'économies",
  description:
    "Combien tu économises (ou perds) à faire ta LLC US toi-même au lieu de prendre Business à 4 000 TND. Le calcul brut + le coût opportunité du temps.",
  alternates: { canonical: "https://noho.tn/outils/calculateurs/bundle-vs-diy" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function BundleVsDiyPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Business vs DIY</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Business vs DIY —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              calculateur
            </span>{" "}
            d&apos;économies
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            On ne va pas te dire que NOHO est moins cher en cash brut.
            Voici la math honnête : ce que tu dépenses en DIY + le coût
            réel de ton temps + le risque d&apos;erreur compliance.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <BundleVsDiyCalculator />
        </div>
      </section>

      <section className="px-5 sm:px-6 py-10" style={{ background: CREAM }}>
        <div
          className="max-w-3xl mx-auto text-[15px] leading-[1.7] prose prose-noho"
          style={{ color: "#1F0807", fontFamily: "var(--font-baloo), sans-serif" }}
        >
          <h2>Ce que ce calculateur inclut</h2>
          <ul>
            <li>Frais étatiques (Wyoming/Delaware/NM)</li>
            <li>Registered agent annuel</li>
            <li>EIN obtention (gratuit IRS, mais ~6-11 semaines pour
              non-résident sans coordination)</li>
            <li>Mailbox US réelle CMRA (sinon Mercury rejette)</li>
            <li>Form 1583 notarisation</li>
            <li>Form 5472 + 1120 annuel via CPA</li>
            <li>Coût temps en heures × taux horaire</li>
            <li>Risque d&apos;erreur Mercury/Stripe rejection (re-soumission délai)</li>
          </ul>

          <h2>Ce qu&apos;il n&apos;inclut PAS</h2>
          <ul>
            <li>L&apos;identité de marque + le site (inclus dans Solution
              Business, mais souvent skippé en DIY = revenu perdu)</li>
            <li>Le Suivi mensuel optionnel (1 200 TND/mois) — outil
              séparé</li>
            <li>L&apos;intervention d&apos;un avocat US si dispute
              juridique</li>
          </ul>

          <h2>L&apos;effet caché du DIY</h2>
          <p>
            Le coût réel du DIY n&apos;est pas le cash sorti — c&apos;est
            les <strong>4 à 8 semaines</strong> où ton dossier traîne
            entre IRS, USPS, Mercury, Stripe. Pendant ce temps, tu ne
            factures pas ton premier client. Si ton CA-cible est de
            10K USD/mois et tu retardes le lancement de 6 semaines, tu
            perds environ 15 000 USD d&apos;opportunité.
          </p>
          <p>
            C&apos;est pour ça que les fondateurs qui calculent
            uniquement le cash &quot;LegalZoom à 99 USD&quot; vs &quot;NOHO à 4 000 TND&quot; ratent
            l&apos;essentiel. Le bon calcul intègre <strong>quand</strong>{" "}
            tu encaisses ton premier USD.
          </p>
        </div>
      </section>
    </>
  );
}
