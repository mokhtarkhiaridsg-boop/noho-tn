import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "L'Agent", url: "https://noho.tn/agent" },
  { name: "Solution Application Emploi", url: "https://noho.tn/agent/jobs" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Solution Application Emploi — NOHO",
  serviceType: "US job application services for Tunisian professionals",
  provider: { "@type": "Organization", name: "NOHO Mailbox", url: "https://noho.tn" },
  areaServed: "TN",
  description:
    "CV US-style, LinkedIn US, numéro US sur applications, coordination interviews, visa H-1B/O-1/L-1, négociation d'offre.",
};

export const metadata: Metadata = {
  title: "Solution Application Emploi — Job US accompagné depuis Tunis",
  description:
    "CV US-style, LinkedIn US, numéro US sur applications, coordination interviews, visa H-1B/O-1/L-1, négociation d'offre, relocation US.",
  alternates: {
    canonical: "https://noho.tn/agent/jobs",
    languages: {
      "fr-TN": "https://noho.tn/agent/jobs",
      "ar-TN": "https://noho.tn/ar/agent/jobs",
      "x-default": "https://noho.tn/agent/jobs",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ color: CREAM }}>
      <rect x="6" y="16" width="36" height="26" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M18 16 L18 11 C18 9.5 19 8 21 8 L27 8 C29 8 30 9.5 30 11 L30 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 26 L42 26" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

const STEPS = [
  { n: "01", t: "CV bilingue FR-EN-AR", d: "Reformatage US ou TN selon ton marché cible, optimisation mots-clés ATS, LinkedIn bilingue avec adresse + numéro adaptés." },
  { n: "02", t: "Présence locale sur applications", d: "TN : numéro et adresse Tunis pour postes locaux ou remote depuis Tunisie. US : numéro et adresse Los Angeles pour postes US." },
  { n: "03", t: "Coordination interviews", d: "Calendrier tech (Zoom, Google Meet, Teams), créneaux ouvrés selon le fuseau, simulation d'interview avec coach FR/EN." },
  { n: "04", t: "Visa ou autorisation", d: "US : H-1B / O-1 / L-1 / EB-2 NIW coordonnés via avocat US partenaire. TN : titre de séjour pour travailleurs étrangers (rapatriement diaspora)." },
];

const TRUST = [
  { t: "Présence à Tunis", d: "Cabinet partenaire KHIARI pour les démarches TN — équivalences de diplômes, contrats locaux, titre de séjour de retour." },
  { t: "Adresse + numéro US", d: "5062 Lankershim Blvd + numéro US dédié forwardé sur ton TN. Les recruteurs US lisent une adresse locale, pas Tunis." },
  { t: "Avocat US partenaire", d: "Pour les pétitions H-1B/O-1/EB-2 NIW — coordination directe avec un avocat d'immigration US, pas de devinette." },
];

export default function JobsSolutionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <BriefcaseIcon className="inline-block w-4 h-4 align-[-3px] mr-1.5" />
            Solution Application Emploi · TN + US
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Emploi américain,{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              accompagné depuis Tunis
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Du CV US au visa de travail, en passant par les interviews et la
            négociation. Tout le pipeline d&apos;emploi US géré pour toi.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Comment ça marche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STEPS.map((s) => (
              <div key={s.n} className="p-5 rounded-2xl" style={{ background: CREAM }}>
                <p className="font-extrabold mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif", color: "#F0DBA9", fontSize: "2rem", lineHeight: 1 }}>
                  {s.n}
                </p>
                <h3 className="font-extrabold text-[15px] mb-2" style={{ color: INK }}>{s.t}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Pourquoi NOHO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TRUST.map((t) => (
              <div key={t.t} className="p-5 rounded-2xl" style={{ background: "#fff" }}>
                <h3 className="font-extrabold text-[15px] mb-2" style={{ color: INK }}>{t.t}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-10" style={{ background: "#fef3c7" }}>
        <div className="max-w-3xl mx-auto text-[13.5px] leading-relaxed" style={{ color: "#422006" }}>
          <p className="font-black mb-2">Transparence</p>
          <p>
            Les visas de travail US (H-1B, O-1, L-1, EB-2 NIW) sont
            attribués par USCIS et dépendent de ton profil, ton employeur et
            les quotas. NOHO coordonne l&apos;application via un avocat
            partenaire, mais ne garantit pas l&apos;approbation. On donne
            une lecture honnête de tes chances avant de démarrer.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Discute de ton profil professionnel
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Premier appel gratuit. On regarde ton CV, ton expérience et le
            type de poste US visé.
          </p>
          <Link
            href="/appel"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: GREEN, color: "#fff", boxShadow: "0 6px 28px rgba(45,122,74,0.35)" }}
          >
            Réserver l&apos;appel →
          </Link>
        </div>
      </section>
    </>
  );
}
