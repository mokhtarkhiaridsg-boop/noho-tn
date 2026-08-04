import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Outils", url: "https://nohomailboxtunis.com/fr/outils" },
  { name: "Comparateurs", url: "https://nohomailboxtunis.com/fr/outils#comparateurs" },
  { name: "États LLC", url: "https://nohomailboxtunis.com/fr/outils/comparateurs/etats-llc" },
]);

export const metadata: Metadata = {
  title: "Wyoming vs Delaware vs Nouveau-Mexique — comparateur états LLC",
  description:
    "Tableau comparatif des 3 états les plus utilisés par les fondateurs non-résidents : frais de création, frais annuels, anonymat, acceptation bancaire. Pour LLC TN-détenue.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/outils/comparateurs/etats-llc" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

type Row = {
  label: string;
  values: { wy: string; de: string; nm: string };
  best?: "wy" | "de" | "nm";
};

const ROWS: Row[] = [
  { label: "Frais de création", values: { wy: "100 USD", de: "90 USD", nm: "50 USD" }, best: "nm" },
  { label: "Rapport annuel", values: { wy: "60 USD/an", de: "300 USD/an", nm: "0 USD" }, best: "nm" },
  { label: "Délai de filing", values: { wy: "24-48h", de: "24h (rapide)", nm: "3-5 jours" }, best: "de" },
  { label: "Anonymat owner", values: { wy: "Oui (registered agent only)", de: "Oui", nm: "Maximal (zéro public)" }, best: "nm" },
  { label: "Acceptation Mercury", values: { wy: "Excellente", de: "Excellente", nm: "Bonne (questions sup.)" }, best: "wy" },
  { label: "Acceptation Stripe", values: { wy: "Excellente", de: "Excellente", nm: "Mitigée" }, best: "wy" },
  { label: "Préféré par VC US", values: { wy: "Non", de: "Oui (standard)", nm: "Non" }, best: "de" },
  { label: "Form 5472 obligatoire", values: { wy: "Oui", de: "Oui", nm: "Oui" } },
  { label: "Impôt fédéral LLC", values: { wy: "0% (pass-through)", de: "0% (pass-through)", nm: "0% (pass-through)" } },
  { label: "Impôt d'État sur non-résident", values: { wy: "0%", de: "0%", nm: "0%" } },
];

const SCENARIOS = [
  { title: "Bootstrap / services / e-com sans VC en vue", best: "wy", recommendation: "Wyoming", why: "Le meilleur ratio coût + acceptation. 60 USD/an, accepté partout, anonyme. 80% des fondateurs tunisiens.", color: BLUE },
  { title: "Vise levée VC dans les 18 mois", best: "de", recommendation: "Delaware", why: "Standard de l'écosystème VC US. Mais à faire en C-Corp via Stripe Atlas, pas en LLC. Notre Business (4 000 TND) ne couvre pas ce cas — on te le dit franchement.", color: INK },
  { title: "Investissement immobilier US, discrétion maximale", best: "nm", recommendation: "Nouveau-Mexique", why: "Zéro frais annuels, zéro public registry, idéal pour holding immobilier ou holding de marque. Friction bancaire — Mercury demande des questions sup.", color: GREEN },
];

export default function EtatsLlcComparatorPage() {
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
            <span>États LLC</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Wyoming vs Delaware vs Nouveau-Mexique —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              comparateur
            </span>
          </h1>
          <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Tableau honnête des 3 états les plus utilisés par les
            fondateurs non-résidents. Avec recommandation selon ton
            profil.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 sm:px-6 py-10 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="rounded-3xl overflow-hidden min-w-[520px]" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)", boxShadow: "0 12px 32px rgba(45,16,15,0.06)" }}>
            <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] gap-2 px-4 sm:px-6 py-3" style={{ background: INK, color: CREAM }}>
              <span className="text-[10px] font-black uppercase tracking-[0.14em] opacity-70">Critère</span>
              <span className="text-center text-[12px] font-black" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>Wyoming</span>
              <span className="text-center text-[12px] font-black" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>Delaware</span>
              <span className="text-center text-[12px] font-black" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>NM</span>
            </div>
            <ul>
              {ROWS.map((row, i) => (
                <li
                  key={row.label}
                  className="grid grid-cols-[1.5fr_repeat(3,1fr)] gap-2 items-start px-4 sm:px-6 py-3.5"
                  style={{ background: i % 2 === 0 ? "#fff" : "#FAFAF8", borderTop: i === 0 ? "none" : "1px solid rgba(45,16,15,0.05)" }}
                >
                  <p className="text-[13px] sm:text-[14px] font-bold" style={{ color: INK }}>{row.label}</p>
                  {(["wy", "de", "nm"] as const).map((k) => (
                    <p
                      key={k}
                      className="text-center text-[12px] sm:text-[13px] leading-tight"
                      style={{
                        color: row.best === k ? GREEN : "rgba(45,16,15,0.78)",
                        fontWeight: row.best === k ? 800 : 500,
                      }}
                    >
                      {row.values[k]}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-8" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Trois profils, trois recommandations
          </h2>
          <div className="space-y-3">
            {SCENARIOS.map((s) => (
              <div key={s.title} className="p-5 rounded-2xl" style={{ background: "#fff", borderLeft: `4px solid ${s.color}` }}>
                <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-1" style={{ color: s.color }}>
                  {s.title}
                </p>
                <h3 className="font-extrabold text-[17px] mb-1" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  → {s.recommendation}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article cross-link */}
      <section className="px-5 sm:px-6 py-10" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/fr/blog/wyoming-delaware-nouveau-mexique-choisir-etat-llc"
            className="inline-block font-black px-7 py-3.5 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM }}
          >
            Lire l&apos;article complet →
          </Link>
        </div>
      </section>
    </>
  );
}
