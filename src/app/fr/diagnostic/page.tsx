import type { Metadata } from "next";
import { DiagnosticClient } from "./diagnostic-client";

export const metadata: Metadata = {
  title: "Diagnostic LLC en 5 questions",
  description:
    "60 secondes, sans email, résultat immédiat. Te dit honnêtement si une LLC américaine fait sens pour ta situation tunisienne. Tarif en dinars.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/diagnostic" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function DiagnosticPage() {
  return (
    <>
      <section
        className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8"
        style={{ background: CREAM }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            Outil gratuit · Sans email · 60 secondes
          </span>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
            }}
          >
            Diagnostic LLC américaine —{" "}
            <span style={{ color: BLUE }}>en 5 questions</span>
          </h1>
          <p
            className="text-[16px] leading-relaxed max-w-xl mx-auto mb-4"
            style={{ color: "rgba(45,16,15,0.75)" }}
          >
            Cinq questions, 60 secondes, résultat honnête. Te dit si une
            LLC américaine fait sens pour ta situation — Business (4 000
            TND), Suivi mensuel (1 200 TND/mois), ou attendre.
          </p>
          <p
            className="text-[13px] italic max-w-md mx-auto"
            style={{ color: "rgba(45,16,15,0.55)" }}
          >
            Pas d&apos;email. Pas de capture. Tu lis ton résultat, tu décides.
          </p>
        </div>
      </section>

      <DiagnosticClient />

      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto">
          <p
            className="text-[11px] font-black uppercase tracking-[0.18em] mb-4 text-center"
            style={{ color: BLUE }}
          >
            Transparence
          </p>
          <h2
            className="font-extrabold text-center mb-6"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: INK,
              fontFamily: "var(--font-baloo), sans-serif",
            }}
          >
            Pourquoi ce diagnostic existe
          </h2>
          <div className="text-[15px] leading-relaxed space-y-4" style={{ color: "rgba(45,16,15,0.85)" }}>
            <p>
              La plupart des outils de capture en ligne te demandent ton
              email avant de te donner le résultat. Ce diagnostic ne capte
              pas ton email. Il te répond immédiatement, même si la
              réponse est «&nbsp;NOHO n&apos;est pas la bonne chose pour
              ta situation aujourd&apos;hui&nbsp;».
            </p>
            <p>
              Les techniques de persuasion utilisées sont nommées
              ouvertement dans le code : <em>foot-in-the-door</em>,{" "}
              <em>authority via honest self-disclosure</em>, <em>loss
              aversion réelle</em>, <em>identity attachment</em>. Pas
              d&apos;urgence inventée, pas de chiffres manufacturés.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-8" style={{ background: "#f5f1ea" }}>
        <div className="max-w-3xl mx-auto text-[11px] leading-relaxed" style={{ color: "rgba(45,16,15,0.55)" }}>
          <p>
            <strong>Information générale, pas un conseil fiscal.</strong>{" "}
            Le diagnostic propose une orientation structurelle basée sur
            tes réponses. Il ne se substitue pas à une consultation avec
            un fiscaliste tunisien agréé pour ta situation personnelle.
            NOHO Mailbox accompagne la structure US uniquement (LLC, EIN,
            adresse postale réelle, Form 1583, accompagnement bancaire).
          </p>
        </div>
      </section>
    </>
  );
}
