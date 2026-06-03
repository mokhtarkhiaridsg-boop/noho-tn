import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "Contact", url: "https://noho.tn/contact" },
]);

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — NOHO Mailbox Tunisie",
  url: "https://noho.tn/contact",
  inLanguage: "fr-TN",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://noho.tn/#org",
    name: "NOHO Mailbox",
    url: "https://noho.tn",
    email: "hello@nohomailbox.org",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@nohomailbox.org",
        areaServed: ["TN", "FR", "MA", "DZ", "US"],
        availableLanguage: ["French", "Arabic", "English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "5062 Lankershim Blvd",
      addressLocality: "North Hollywood",
      addressRegion: "CA",
      postalCode: "91601",
      addressCountry: "US",
    },
  },
};

export const metadata: Metadata = {
  title: "Contact — NOHO Mailbox Tunisie",
  description:
    "Trois canaux pour nous joindre depuis la Tunisie : WhatsApp (réponse 2h), email (réponse 24h), formulaire de contact. Storefront physique à Los Angeles.",
  alternates: {
    canonical: "https://noho.tn/contact",
    languages: {
      "fr-TN": "https://noho.tn/contact",
      "ar-TN": "https://noho.tn/ar/contact",
      "x-default": "https://noho.tn/contact",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";

function IconChat({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M6 12 C6 9 8 7 11 7 L37 7 C40 7 42 9 42 12 L42 30 C42 33 40 35 37 35 L18 35 L8 44 L8 35 C7 35 6 34 6 33 Z" fill="#fff" fillOpacity="0.95" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="18" cy="21" r="2" fill={INK} />
      <circle cx="24" cy="21" r="2" fill={INK} />
      <circle cx="30" cy="21" r="2" fill={INK} />
    </svg>
  );
}
function IconEnv({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <rect x="4" y="10" width="40" height="28" rx="3" fill={CREAM} stroke={INK} strokeWidth="2.5" />
      <path d="M5 13 L24 28 L43 13" stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <circle cx="36" cy="32" r="3" fill={BLUE} stroke={INK} strokeWidth="1.5" />
    </svg>
  );
}
function IconForm({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <rect x="10" y="8" width="28" height="34" rx="3" fill="#fff" stroke={INK} strokeWidth="2.5" />
      <rect x="16" y="4" width="16" height="8" rx="2" fill={CREAM} stroke={INK} strokeWidth="2.5" />
      <path d="M16 20 L32 20 M16 26 L32 26 M16 32 L24 32" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M28 34 L32 38" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            Trois canaux · réponse garantie
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Contact
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Trois moyens de nous joindre selon ton canal préféré. Tous
            mènent au même appel de 30 minutes si la situation s&apos;y
            prête.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href="https://wa.me/18185067744?text=Bonjour%20l%27%C3%A9quipe%20NOHO%20Mailbox%20Tunisie%2C"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02]"
            style={{ background: GREEN, color: "#fff", boxShadow: "0 8px 30px rgba(45,122,74,0.25)" }}
          >
            <div className="mb-3"><IconChat className="w-10 h-10" /></div>
            <h3 className="font-extrabold text-[20px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              WhatsApp
            </h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              Le canal préféré pour la diaspora tunisienne. Réponse sous 2h
              en moyenne pendant les heures de bureau LA (9h-18h heure de
              Los Angeles).
            </p>
            <p className="font-black text-[14px]">+1 818 506 7744</p>
          </a>

          <a
            href="mailto:hello@nohomailbox.org?subject=Demande%20d%27information%20depuis%20noho.tn"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 8px 30px rgba(45,16,15,0.25)" }}
          >
            <div className="mb-3"><IconEnv className="w-10 h-10" /></div>
            <h3 className="font-extrabold text-[20px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              Email
            </h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              Pour les demandes structurées qui demandent une réponse
              écrite (compliance, documents, devis). Réponse sous 24h.
            </p>
            <p className="font-black text-[14px]">hello@nohomailbox.org</p>
          </a>

          <a
            href="https://nohomailbox.org/contact"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02]"
            style={{ background: CREAM, color: INK, border: `1px solid ${INK}` }}
          >
            <div className="mb-3"><IconForm className="w-10 h-10" /></div>
            <h3 className="font-extrabold text-[20px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              Formulaire
            </h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              Le formulaire de contact officiel du site principal
              nohomailbox.org. Réponse sous 48h. Préfère WhatsApp si
              c&apos;est urgent.
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
                Ouvert au public. Tu peux venir si tu passes à Los Angeles.
                Si tu es en Tunisie, l&apos;adresse sert d&apos;ancre US
                pour ta LLC.
              </p>
            </div>
            <div className="p-6 rounded-2xl" style={{ background: "#fff" }}>
              <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>
                Heures de réponse (heure de Tunis)
              </h3>
              <ul className="space-y-1.5 text-[14px] leading-relaxed" style={{ color: INK }}>
                <li><strong>WhatsApp :</strong> 17h-03h (heure de Tunis)</li>
                <li><strong>Email :</strong> sous 24h en jours ouvrés</li>
                <li><strong>Appel visio :</strong> sur réservation, créneaux 18h-23h Tunis</li>
              </ul>
              <p className="text-[12px] mt-3 italic" style={{ color: "rgba(45,16,15,0.55)" }}>
                Capacité limitée à 4 appels/jour. Délai 3-7 jours quand
                plein.
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
            Plus rapide encore — l&apos;appel direct
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Si tu sais déjà que tu veux discuter d&apos;une LLC, du
            Suivi mensuel, ou du Portail Étudiants — réserve directement
            l&apos;appel de 30 minutes.
          </p>
          <Link
            href="/appel"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            Réserver l&apos;appel de 30 min →
          </Link>
        </div>
      </section>
    </>
  );
}
