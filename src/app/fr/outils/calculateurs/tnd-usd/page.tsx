import type { Metadata } from "next";
import Link from "next/link";
import TndUsdConverter from "./TndUsdConverter";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Outils", url: "https://nohomailboxtunis.com/fr/outils" },
  { name: "Calculateurs", url: "https://nohomailboxtunis.com/fr/outils#calculateurs" },
  { name: "Convertisseur TND ↔ USD", url: "https://nohomailboxtunis.com/fr/outils/calculateurs/tnd-usd" },
]);

export const metadata: Metadata = {
  title: "Convertisseur TND ↔ USD — taux BCT et coûts cachés expliqués",
  description:
    "Convertisseur dinar tunisien vers dollar américain. Taux BCT officiel + ce que chaque banque te facture vraiment (Wise, Mercury, BIAT, Attijari). Comprends où l'argent s'évapore.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/outils/calculateurs/tnd-usd" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function TndUsdConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/fr" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/fr/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Convertisseur TND ↔ USD</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Convertisseur TND ↔ USD —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              le vrai taux
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Le taux interbancaire BCT n&apos;est pas le taux que tu
            payes. Voici ce que coûte chaque canal de conversion, pour
            que tu puisses comparer avant de transférer.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-10" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto">
          <TndUsdConverter />
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-[14.5px] leading-relaxed prose-noho" style={{ color: "#1F0807" }}>
          <h2>Où l&apos;argent s&apos;évapore</h2>
          <p>
            Quand tu reçois USD d&apos;un client US et que tu veux le
            convertir en dinar tunisien, il y a généralement 3 prélèvements
            successifs :
          </p>
          <ul>
            <li>
              <strong>Spread de change</strong> — la différence entre le
              taux d&apos;achat et le taux de vente. Les banques TN
              prennent 2-3% en moyenne. Wise prend ~0.4-0.6%.
            </li>
            <li>
              <strong>Frais fixes de virement</strong> — 10-25 USD par
              wire entrant sur ton compte TN, parfois autant côté banque
              émettrice.
            </li>
            <li>
              <strong>Conversion forcée</strong> — la BCT exige
              généralement que les USD reçus soient convertis en TND
              sous 7-10 jours (sauf compte en devises spécifique).
            </li>
          </ul>

          <h2>Les 4 canaux comparés</h2>
          <ul>
            <li>
              <strong>Wise (anciennement TransferWise)</strong> — spread
              le plus bas (~0.4%), frais fixes très bas. Le meilleur
              ratio pour transferts &lt; 10 000 USD.
            </li>
            <li>
              <strong>Mercury → wire SWIFT → BIAT/Attijari</strong> —
              spread BIAT/Attijari (2-3%), wire SWIFT 25-40 USD. Bon
              pour gros montants si tu veux que les fonds passent dans
              une banque tunisienne classique.
            </li>
            <li>
              <strong>Mercury → wire SWIFT → compte en devises BIAT</strong>
              {" "}— pas de conversion forcée. Tu gardes des USD sur ton
              compte TN.
            </li>
            <li>
              <strong>Payoneer / PayPal</strong> — frais à éviter pour
              gros volumes. ~3-5% all-in. Pratique pour les freelances
              avec petits montants fréquents.
            </li>
          </ul>

          <h2>Note sur les taux</h2>
          <p>
            Les taux ci-dessus sont des moyennes typiques 2026 et
            varient quotidiennement. Pour le taux exact du jour, vérifie
            sur{" "}
            <a href="https://www.bct.gov.tn" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: BLUE }}>
              bct.gov.tn
            </a>{" "}
            (taux de référence interbancaire) ou{" "}
            <a href="https://wise.com" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: BLUE }}>
              wise.com
            </a>{" "}
            (taux pratique chez Wise). Ce convertisseur est un guide
            d&apos;ordre de grandeur — pas un taux contractuel.
          </p>
        </div>
      </section>
    </>
  );
}
