import type { Metadata } from "next";
import Link from "next/link";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

/*
 * Tounsi (derja, Latin script) version of /contact.
 * Mirrors the condensed /ar/contact structure, LTR, derja copy.
 * Claims sourced from the FR page: WhatsApp ~2h, email 24h, form 48h,
 * Tunis-time response windows, 4 calls/day capacity.
 */

export const metadata: Metadata = {
  title: "Contact — NOHO Mailbox Tounes",
  description:
    "Tlata canaux bch tousel l'équipe mel Tounes: WhatsApp (réponse fi 2h), email (réponse fi 24h), formulaire de contact. Storefront physique fi Los Angeles.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/contact",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/contact",
      "ar-TN": "https://nohomailboxtunis.com/ar/contact",
      "aeb-TN": "https://nohomailboxtunis.com/contact",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";

const IconChat = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M8 12 C8 9 10 7 13 7 L35 7 C38 7 40 9 40 12 L40 28 C40 31 38 33 35 33 L20 33 L12 40 L12 33 C10 33 8 31 8 28 Z" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="18" cy="20" r="2" fill={BLUE} />
    <circle cx="24" cy="20" r="2" fill={BLUE} />
    <circle cx="30" cy="20" r="2" fill={BLUE} />
  </svg>
);

const IconEnvelope = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <rect x="6" y="12" width="36" height="24" rx="3" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M8 14 L24 26 L40 14" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const IconForm = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <rect x="10" y="6" width="28" height="36" rx="3" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M16 14 H32 M16 20 H32 M16 26 H28" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 34 L20 38 L30 28" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TounsiContactPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            Tlata canaux · réponse garantie
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Contact
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Tlata touro9 bch ta7ki m3ana — ekhtar el canal elli yerta7lek.
            El kol ywasslou l nafs l&apos;appel mta3 30 d9i9a ken el wadh3
            yestahel.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href={waLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02]"
            style={{ background: GREEN, color: "#fff", boxShadow: "0 8px 30px rgba(45,122,74,0.25)" }}
          >
            <div className="mb-3"><IconChat /></div>
            <h3 className="font-extrabold text-[20px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              WhatsApp
            </h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              El canal el mufadhal 3and la diaspora tounsia. Réponse fi 2h
              en moyenne wa9t bureau LA (9h-18h heure Los Angeles).
            </p>
            <p className="font-black text-[14px]">{WHATSAPP_DISPLAY}</p>
          </a>

          <a
            href="mailto:hello@nohomailbox.org?subject=Demande%20d%27information%20depuis%20nohomailboxtunis.com%2Ftn"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 8px 30px rgba(45,16,15,0.25)" }}
          >
            <div className="mb-3"><IconEnvelope /></div>
            <h3 className="font-extrabold text-[20px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              Email
            </h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              Lel demandes structurées elli yesta7a9ou réponse écrite
              (compliance, documents, devis). Réponse fi 24h.
            </p>
            <p className="font-black text-[14px]">hello@nohomailbox.org</p>
          </a>

          <a
            href="https://nohomailbox.org/contact"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02]"
            style={{ background: CREAM, color: INK, border: `1px solid ${INK}` }}
          >
            <div className="mb-3"><IconForm /></div>
            <h3 className="font-extrabold text-[20px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              Formulaire
            </h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              El formulaire officiel mta3 el site principal nohomailbox.org.
              Réponse fi 48h. Ken el 7aja urgente, WhatsApp khir.
            </p>
            <p className="font-black text-[14px]">nohomailbox.org/contact</p>
          </a>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl" style={{ background: "#fff" }}>
              <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>
                Storefront physique
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>
                5062 Lankershim Blvd<br />
                North Hollywood, CA 91601<br />
                USA
              </p>
              <p className="text-[12px] mt-3 italic" style={{ color: "rgba(45,16,15,0.55)" }}>
                Ma7al maftou7 lel public. Tnajem tji ken ta3addi 3ala Los
                Angeles. Ken enti fi Tounes, l&apos;adresse hiya l&apos;ancre
                US mta3 el LLC mte3ek.
              </p>
            </div>
            <div className="p-6 rounded-2xl" style={{ background: "#fff" }}>
              <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>
                Wa9t el réponse (heure de Tounes)
              </h3>
              <ul className="space-y-1.5 text-[14px] leading-relaxed" style={{ color: INK }}>
                <li><strong>WhatsApp :</strong> 17h-03h (heure de Tounes)</li>
                <li><strong>Email :</strong> fi 24h fi ayem el khedma</li>
                <li><strong>Appel visio :</strong> b réservation, créneaux 18h-23h Tounes</li>
              </ul>
              <p className="text-[12px] mt-3 italic" style={{ color: "rgba(45,16,15,0.55)" }}>
                Capacité limitée l 4 appels/jour. Ken el calendrier m3abbi,
                estanna 3-7 iyem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Asra3 men hakka — l&apos;appel direct
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Ken ta3ref déjà elli t7eb ta7ki 3lih: LLC, el Suivi mensuel, wala
            el Portail Étudiants — a7jez direct l&apos;appel mta3 30 d9i9a.
          </p>
          <a
            href={waLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
