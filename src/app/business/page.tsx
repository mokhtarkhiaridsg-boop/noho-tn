import type { Metadata } from "next";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import ConsultationForm from "@/components/ConsultationForm";
import Reveal from "@/components/anim/Reveal";

/*
 * Tounsi (derja, Latin script) version of /business.
 * Mirrors the FR condensed bundles-first landing 1:1 — hero + WhatsApp
 * consultation CTA, trust strip, two bundle poster cards, à-la-carte
 * line, consultation form. Layout stays LTR. Prices/claims sourced
 * from the FR page only: Business 4 000 TND once (14-21 jours),
 * Suivi mensuel 1 200 TND/mois sans engagement.
 */

export const metadata: Metadata = {
  title: "Business — lanci el société mte3ek, el ba9i 3lina",
  description:
    "Business 4 000 TND marra barka (14-21 jour) · Suivi mensuel 1 200 TND/chhar bla engagement.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/business",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/business",
      "ar-TN": "https://nohomailboxtunis.com/ar/business",
      "aeb-TN": "https://nohomailboxtunis.com/business",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const TEAL = "#337485";
const GOLD = "#C8A35A";
const GREEN = "#2D7A4A";

/* Four-point star flourish — same poster language as the homepage piliers. */
const Flourish = ({ color }: { color: string }) => (
  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 shrink-0" fill={color} aria-hidden="true">
    <path d="M6 0 L7.4 4.6 L12 6 L7.4 7.4 L6 12 L4.6 7.4 L0 6 L4.6 4.6 Z" />
  </svg>
);

const Check = ({ color = TEAL }: { color?: string }) => (
  <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0 mt-[3px]" fill="none" aria-hidden="true">
    <path d="M2 6.5 L5 9.5 L10 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── El zouz packages, mel awel — mouch marketplace. ── */
const BUNDLES = [
  {
    accent: TEAL,
    n: "01",
    eyebrow: "El package el kemel",
    title: "Business",
    price: "4 000 TND",
    per: "marra barka · yousel fi 14-21 nhar",
    hook: "Société US wala TN — syncée m3a cabinet d'avocat (Cabinet Khiari, Tunis).",
    features: [
      "LLC US (Wyoming / Delaware / NM) wala SARL·SUARL TN — el dossier syncé m3a el cabinet d'avocat",
      "EIN men 3and l'IRS (wala matricule fiscal TN) — el démarches el kol 3lina",
      "Livre de marque + site web 3al domaine mte3ek — el kol mte3ek 100 %",
      "12 chhar courrier fel 5062 Lankershim, Los Angeles (Form 1583 inclus)",
    ],
  },
  {
    accent: GOLD,
    n: "02",
    eyebrow: "Opérations continues",
    title: "Suivi mensuel",
    price: "1 200 TND",
    per: "/chhar · bla engagement",
    hook: "A7na ngériw, enti tconcentri.",
    features: [
      "Conformité US kol chhar + courrier prioritaire",
      "Site-ek ngériwh mel A lel Z, print management, adaptation saisonnière",
      "Marketing nexécutiwh bel services agentiques — ta7t supervision mta3 l'équipe",
      "Rapport de performance kol chhar",
    ],
  },
];

const TRUST = [
  "Services agentiques — IA + équipe humaine",
  "Same-day delivery fi Los Angeles",
  "Ligne de support bel tounsi — 3al WhatsApp",
  "LLC syncée m3a Cabinet Khiari",
];

const NEXT_STEPS = [
  { n: "01", t: "Nkalmouk fi 24h", d: "Bel email wala 3al WhatsApp, bel tounsi wala bel français." },
  { n: "02", t: "Appel b latech, 30 d9i9a", d: "Structure TN, US wala combo — recommandation b kol sara7a, mouch pitch." },
  { n: "03", t: "Plan wadhe7, el soum b dinar", d: "Ta3ref exactement chnowa, wa9tech, w b 9adech. Tkhalles 3and el cabinet d'avocat." },
];

const FORM_LABELS = {
  email: "Email",
  firstName: "Prénom",
  lastName: "Nom",
  reason: "3lech el appel",
  reasonPlaceholder: "LLC US, société TN, adresse, suivi mensuel…",
  submit: "Réserver — on t'appelle",
  successTitle: "Tsajlet.",
  successBody: "Nkalmouk fi 24h (ayem el khedma) bch n7addou l'appel.",
};

export default function TounsiBusinessPage() {
  return (
    <>
      {/* ── Part 1 — el packages mel awel, écran wa7ed condensé ── */}
      <section className="grain relative overflow-hidden px-5 sm:px-6 pt-8 pb-12" style={{ background: CREAM }}>
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="text-center">
            <p className="eyebrow mb-3" style={{ color: TEAL }}>NOHO Business Solutions</p>
            <h1
              className="font-extrabold mx-auto max-w-3xl"
              style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(1.9rem, 4vw, 3.1rem)", lineHeight: 1.02, letterSpacing: "-0.03em", color: INK }}
            >
              Lanci el société mte3ek,
              <span className="block text-sheen" style={{ fontFamily: "var(--font-pacifico), cursive", letterSpacing: 0, lineHeight: 1.2, paddingBottom: "0.08em" }}>
                el ba9i 3lina.
              </span>
            </h1>

            {/* CTAs — consultation lowel */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-4">
              <a
                href={waLink("business")}
                target="_blank"
                rel="noopener noreferrer"
                className="shine inline-flex items-center justify-center gap-2 font-bold px-[18px] py-2.5 rounded-xl text-[13.5px] whitespace-nowrap transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: GREEN, color: "#fff", boxShadow: "0 8px 22px rgba(45,122,74,0.30)" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.84 14.24c-.25.7-1.44 1.34-1.99 1.42-.53.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.36-5.16-4.56-.15-.2-1.23-1.64-1.23-3.12 0-1.49.78-2.22 1.06-2.52.28-.3.6-.38.8-.38.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5l-.45.53c-.15.15-.3.31-.13.6.18.3.78 1.28 1.67 2.07 1.15 1.02 2.12 1.34 2.42 1.49.3.15.47.13.64-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.72-.18 1.42Z" />
                </svg>
                Réserver une consultation gratuite
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-bold px-[18px] py-2.5 rounded-xl text-[13.5px] whitespace-nowrap transition-colors"
                style={{ color: INK, border: "1.5px solid rgba(45,16,15,0.22)" }}
              >
                <span className="u-draw">El services el kol</span>
              </Link>
            </div>

            {/* trust strip — satr wa7ed horizontal */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-8">
              {TRUST.map((t, i) => (
                <span key={t} className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap" style={{ color: "rgba(45,16,15,0.65)" }}>
                  {i > 0 && <span className="h-1 w-1 rotate-45" style={{ background: "rgba(45,16,15,0.3)" }} />}
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* el packages — posters certificat, fel wost */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {BUNDLES.map((b) => (
              <Reveal key={b.n}>
                <div
                  className="grain relative h-full rounded-[16px] px-5 pt-5 pb-5"
                  style={{ background: "#FDF6E4", border: "1.5px solid rgba(45,16,15,0.55)", boxShadow: "var(--shadow-md)" }}
                >
                  <span className="west-frame absolute inset-[6px] rounded-[11px] pointer-events-none" aria-hidden="true" style={{ color: b.accent }} />
                  <span
                    className="stamp-perf absolute top-3 right-3 grid place-items-center h-9 w-8 select-none rotate-[5deg]"
                    style={{ background: "#fffdf8", color: b.accent }}
                  >
                    <span className="text-[12px] font-extrabold leading-none" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>{b.n}</span>
                    <span className="text-[5px] font-black tracking-[0.12em] uppercase" style={{ color: "rgba(45,16,15,0.45)" }}>NOHO</span>
                  </span>

                  <p className="relative z-[1] flex items-center gap-1.5 mb-1">
                    <Flourish color={b.accent} />
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.16em]" style={{ color: b.accent }}>{b.eyebrow}</span>
                    <Flourish color={b.accent} />
                  </p>
                  <div className="relative z-[1] flex items-baseline gap-2.5 mb-1">
                    <h2 className="font-extrabold" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "22px", letterSpacing: "-0.02em", color: INK }}>
                      {b.title}
                    </h2>
                    <span className="font-extrabold text-[17px] tnum" style={{ fontFamily: "var(--font-baloo), sans-serif", color: b.accent }}>{b.price}</span>
                    <span className="text-[10.5px] font-bold" style={{ color: "rgba(45,16,15,0.55)" }}>{b.per}</span>
                  </div>
                  <p className="relative z-[1] text-[12.5px] mb-3" style={{ color: "rgba(45,16,15,0.72)", lineHeight: 1.5 }}>
                    {b.hook}
                  </p>
                  <ul className="relative z-[1] space-y-1.5 mb-4">
                    {b.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[12px]" style={{ color: "rgba(45,16,15,0.75)", lineHeight: 1.45 }}>
                        <Check color={b.accent} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#consultation"
                    className="btn-west relative z-[1] inline-flex items-center gap-1.5 font-bold text-[12.5px] px-4 py-2 rounded-xl"
                    style={{ color: INK, background: "#fffdf8", border: "1.5px solid rgba(45,16,15,0.8)" }}
                  >
                    Réserver la consultation
                    <svg className="arrow-nudge w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* à la carte — satr wa7ed hedi, mouch marketplace */}
          <p className="text-center mt-5 text-[11.5px]" style={{ color: "rgba(45,16,15,0.6)" }}>
            À la carte : marque + site 3 400 TND (2 800 lel clients Business) · société + EIN wa7adhom 700 TND + frais étatiques ·{" "}
            <Link href="/tarifs" className="u-draw font-bold" style={{ color: TEAL }}>el grille tarifaire el kemla</Link>
          </p>
        </div>
      </section>

      {/* ── Part 2 — a7jez l'appel: formulaire + chnowa yssir men ba3d ── */}
      <section id="consultation" className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#fff" }}>
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 sm:grid-cols-[1fr_0.9fr] gap-8 sm:gap-10 items-start">
          <Reveal>
            <div
              className="grain relative rounded-[16px] p-5 sm:p-6"
              style={{ background: "#FDF6E4", border: "1.5px solid rgba(45,16,15,0.55)", boxShadow: "var(--shadow-md)" }}
            >
              <span className="west-frame absolute inset-[6px] rounded-[11px] pointer-events-none" aria-hidden="true" style={{ color: TEAL }} />
              <div className="relative z-[1]">
                <p className="flex items-center gap-1.5 mb-1">
                  <Flourish color={TEAL} />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.16em]" style={{ color: TEAL }}>Consultation b latech · 30 d9i9a</span>
                  <Flourish color={TEAL} />
                </p>
                <h2 className="font-extrabold mb-1" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "22px", color: INK }}>
                  A7jez l&apos;appel mte3ek
                </h2>
                <p className="text-[12.5px] mb-4" style={{ color: "rgba(45,16,15,0.7)" }}>
                  5alli coordonnées mte3ek — nkalmouk bch n7addou el créneau.
                </p>
                <ConsultationForm locale="tn" labels={FORM_LABELS} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="font-extrabold mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "19px", color: INK }}>
              Chnowa yssir men ba3d
            </h3>
            <div className="space-y-4 mb-6">
              {NEXT_STEPS.map((s) => (
                <div key={s.n} className="flex items-start gap-3">
                  <span
                    className="grid place-items-center h-9 w-9 rounded-xl shrink-0 font-extrabold text-[13px]"
                    style={{ fontFamily: "var(--font-baloo), sans-serif", background: "rgba(51,116,133,0.10)", color: TEAL }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <p className="font-bold text-[14px]" style={{ color: INK }}>{s.t}</p>
                    <p className="text-[12.5px]" style={{ color: "rgba(45,16,15,0.65)", lineHeight: 1.5 }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[12.5px] mb-3" style={{ color: "rgba(45,16,15,0.65)" }}>
              T7eb fisa3 aktar? El ligne WhatsApp tjaweb bel tounsi wala bel français :
            </p>
            <a
              href={waLink("business")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-[18px] py-2.5 rounded-xl text-[13px] transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: GREEN, color: "#fff", boxShadow: "0 8px 22px rgba(45,122,74,0.30)" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Z" />
              </svg>
              +1 818 506 7744
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
