import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "L'Agent", url: "https://nohomailboxtunis.com/fr/agent" },
  { name: "Solution Étudiants", url: "https://nohomailboxtunis.com/fr/agent/student" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Solution Étudiants — NOHO",
  serviceType: "US university admission services for Tunisian students",
  provider: { "@type": "Organization", name: "NOHO Mailbox", url: "https://nohomailboxtunis.com/fr" },
  areaServed: "TN",
  description:
    "Admission Common App, visa F-1, TOEFL/SAT/GRE, WES credentials, apostille TN-US, accueil aéroport.",
};

export const metadata: Metadata = {
  title: "Solution Étudiants — Université US end-to-end depuis Tunis",
  description:
    "Admission Common App, visa F-1, TOEFL/SAT/GRE, WES credentials, apostille TN-US, accueil aéroport. Tout le pipeline étudiant US depuis Tunis.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/fr/agent/student",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/agent/student",
      "ar-TN": "https://nohomailboxtunis.com/ar/agent/student",
      "x-default": "https://nohomailboxtunis.com/agent/student",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";

function CapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ color: CREAM }}>
      <path d="M4 20 L24 12 L44 20 L24 28 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none" />
      <path d="M12 24 L12 34 C12 36 17 39 24 39 C31 39 36 36 36 34 L36 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 22 L42 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const STEPS = [
  { n: "01", t: "Admission + exams", d: "US : Common App / Coalition, coaching essais, recommendation letters, prep TOEFL/SAT/GRE/GMAT. TN : dossier universités tunisiennes / privées, équivalences." },
  { n: "02", t: "Visa ou autorisation", d: "US : F-1 (I-20, DS-160, interview prep, SEVIS). TN : titre de séjour étudiant, équivalence diplôme étranger pour entrer en université TN." },
  { n: "03", t: "Documents officiels", d: "Apostille TN ↔ US, traduction assermentée AR/FR ↔ EN, WES/ECE credential evaluation, légalisation à Tunis." },
  { n: "04", t: "Accueil à l'arrivée", d: "Côté US : aéroport LAX/BUR, Airbnb transition, guide local LA premier mois. Côté TN : logement étudiant Tunis, démarches CIN et CIN étranger." },
];

const TRUST = [
  { t: "Équipe à Tunis", d: "Cabinet partenaire KHIARI à Tunis pour apostilles, traductions, démarches universitaires TN et équivalences." },
  { t: "Adresse US pour I-20", d: "5062 Lankershim, North Hollywood — adresse réelle pour ton dossier SEVIS et tout courrier universitaire US." },
  { t: "Accueil des deux côtés", d: "Tu arrives à Tunis ou à LA, notre équipe est sur place. Aéroport, premier mois, démarches administratives." },
];

export default function StudentSolutionPage() {
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
            <CapIcon className="inline-block w-4 h-4 align-[-3px] mr-1.5" />
            Solution Étudiants
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Université TN ou US,{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              accompagnée des deux côtés
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            De l&apos;admission au visa, de l&apos;apostille à l&apos;accueil
            aéroport. Pipeline étudiant complet — Tunisie, USA, ou les deux.
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
            L&apos;admission universitaire dépend de ton dossier académique
            et de tes scores. NOHO accompagne et coordonne la candidature,
            mais ne garantit pas l&apos;acceptation. Le visa F-1 dépend de
            l&apos;ambassade — on prépare le dossier optimal et coache
            l&apos;interview.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Parle-nous de ton projet d&apos;études
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Premier appel gratuit. On évalue ton dossier et ton timing
            d&apos;admission.
          </p>
          <Link
            href="/fr/appel"
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
