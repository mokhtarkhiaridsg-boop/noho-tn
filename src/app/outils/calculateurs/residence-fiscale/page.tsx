import type { Metadata } from "next";
import Link from "next/link";
import ResidenceFiscaleCalculator from "./ResidenceFiscaleCalculator";

export const metadata: Metadata = {
  title: "Calculateur résidence fiscale TN / FR / US — où es-tu taxable ?",
  description:
    "Test de résidence fiscale entre Tunisie (183 jours / centre d'intérêts), France (CGI 4 B), US (substantial presence). Indicateur, pas conseil fiscal.",
  alternates: { canonical: "https://noho.tn/outils/calculateurs/residence-fiscale" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function ResidenceFiscalePage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Résidence fiscale</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Calculateur résidence fiscale —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              TN / FR / US
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Tu vis entre Tunis et Paris. Ou entre Tunis et LA. Ou tu fais
            le tour. Voici un indicateur de ta probable résidence fiscale
            selon les critères Tunisie / France / États-Unis.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <ResidenceFiscaleCalculator />
        </div>
      </section>

      <section className="px-5 sm:px-6 py-10" style={{ background: CREAM }}>
        <div
          className="max-w-3xl mx-auto text-[15px] leading-[1.7] prose prose-noho"
          style={{ color: "#1F0807", fontFamily: "var(--font-baloo), sans-serif" }}
        >
          <h2>Les règles appliquées</h2>
          <ul>
            <li>
              <strong>Tunisie</strong> : article 2 du Code IRPP. Résident
              si présence ≥ 183 jours sur l&apos;année OU centre des
              intérêts économiques principal en TN OU domicile permanent
              en TN.
            </li>
            <li>
              <strong>France</strong> : article 4 B du Code Général des
              Impôts. 4 critères alternatifs (foyer, séjour principal,
              activité professionnelle principale, centre des intérêts
              économiques).
            </li>
            <li>
              <strong>États-Unis</strong> : Substantial Presence Test IRC
              §7701(b). Présence ≥ 31 jours dans l&apos;année courante ET
              somme pondérée ≥ 183 jours sur 3 ans (année courante × 1 +
              année N-1 × 1/3 + année N-2 × 1/6).
            </li>
          </ul>

          <h2>Quand 2 pays te réclament — les traités</h2>
          <p>
            Si tu réponds aux critères de 2 pays simultanément, les
            traités bilatéraux s&apos;appliquent :
          </p>
          <ul>
            <li>
              <strong>Tunisie-France</strong> (1973, amendé) : tiebreakers
              dans l&apos;ordre — foyer d&apos;habitation permanent →
              centre des intérêts vitaux → séjour habituel → nationalité.
            </li>
            <li>
              <strong>Tunisie-États-Unis</strong> (1985, signé Washington,
              en vigueur 1990) : tiebreakers similaires.
            </li>
            <li>
              <strong>France-États-Unis</strong> (1994, amendé) : tiebreakers
              + clause savings (les US continuent d&apos;imposer leurs
              citoyens même résidents fiscaux français).
            </li>
          </ul>

          <h2>Honnête self-disclosure</h2>
          <p>
            Ce calculateur est un <strong>indicateur de probabilité</strong>{" "}
            pour structurer ton dossier. Il ne remplace pas une
            consultation avec un avocat fiscaliste ou un expert-comptable
            agréé en TN, FR, ou US. Si ta situation est ambiguë (entre 2
            pays), consulte avant de déclarer. Les erreurs de résidence
            fiscale coûtent généralement 30-60% du revenu en pénalités +
            redressement.
          </p>
        </div>
      </section>
    </>
  );
}
