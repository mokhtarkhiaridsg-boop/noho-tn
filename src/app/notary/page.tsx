import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "Notaire", url: "https://noho.tn/notary" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Notaire californien — NOHO",
  serviceType: "California Notary Public + Form 1583 + general notarization",
  provider: { "@type": "LocalBusiness", name: "NOHO Mailbox", address: { "@type": "PostalAddress", streetAddress: "5062 Lankershim Blvd", addressLocality: "North Hollywood", addressRegion: "CA", postalCode: "91601", addressCountry: "US" } },
  areaServed: "US",
  description:
    "Notaire commissionné en Californie sur place au storefront. Form 1583 USPS, notariat de documents généraux, RON (notariat à distance), apostille, traduction certifiée.",
};

export const metadata: Metadata = {
  title: "Notaire californien — Form 1583 + notariat général",
  description:
    "Notaire commissionné en Californie sur place au storefront 5062 Lankershim. Form 1583 USPS, notariat de documents généraux, RON (notariat à distance), apostille, traduction certifiée.",
  alternates: {
    canonical: "https://noho.tn/notary",
    languages: {
      "fr-TN": "https://noho.tn/notary",
      "ar-TN": "https://noho.tn/ar/notary",
      "x-default": "https://noho.tn/notary",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const GOLD = "#f8c84a";
const BODY = "#EBF2FA";

type IconCmp = (props: { className?: string }) => React.ReactElement;

const IconMailbox: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="22" y="32" width="6" height="14" rx="1" fill={BODY} stroke={INK} strokeWidth="2" />
    <rect x="16" y="44" width="18" height="3" rx="1" fill={BODY} stroke={INK} strokeWidth="2" />
    <rect x="6" y="14" width="36" height="22" rx="4" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M6 22 Q6 6 24 6 Q42 6 42 22" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="40" y="14" width="3" height="12" rx="1" fill={BLUE} />
  </svg>
);
const IconScroll: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M10 8 L34 8 C36 8 38 10 38 12 L38 36 C38 38 40 40 42 40 L14 40 C12 40 10 38 10 36 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 16 L32 16 M16 22 L32 22 M16 28 L26 28" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    <circle cx="36" cy="36" r="3" fill={GOLD} stroke={INK} strokeWidth="1.5" />
  </svg>
);
const IconLaptop: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="8" y="10" width="32" height="22" rx="2" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="12" y="14" width="24" height="14" rx="1" fill={CREAM} stroke={INK} strokeWidth="1.5" />
    <path d="M4 36 L44 36 L42 40 L6 40 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="24" cy="21" r="3" fill={BLUE} />
    <path d="M21 24 L27 24" stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconLock: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="10" y="20" width="28" height="22" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M16 20 L16 14 C16 9 19 6 24 6 C29 6 32 9 32 14 L32 20" stroke={INK} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="24" cy="29" r="3" fill={BLUE} />
    <path d="M24 32 L24 36" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
const IconGlobe: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="18" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <ellipse cx="24" cy="24" rx="8" ry="18" fill="none" stroke={INK} strokeWidth="2" />
    <path d="M6 24 L42 24 M9 14 L39 14 M9 34 L39 34" stroke={INK} strokeWidth="2" />
  </svg>
);
const IconClipboard: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="10" y="8" width="28" height="34" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="16" y="4" width="16" height="8" rx="2" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <path d="M16 20 L32 20 M16 26 L32 26 M16 32 L26 32" stroke={INK} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconWarn: IconCmp = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M12 3 L22 20 L2 20 Z" fill={GOLD} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 10 L12 14" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" fill={INK} />
  </svg>
);
const IconChat: IconCmp = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M3 6 C3 4.5 4.5 3 6 3 L18 3 C19.5 3 21 4.5 21 6 L21 15 C21 16.5 19.5 18 18 18 L9 18 L4 22 L4 18 C3.4 18 3 17.5 3 17 Z" fill={CREAM} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="9" cy="10.5" r="1.2" fill={INK} />
    <circle cx="13" cy="10.5" r="1.2" fill={INK} />
    <circle cx="17" cy="10.5" r="1.2" fill={INK} />
  </svg>
);
const IconScrollSm: IconCmp = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M5 4 L17 4 C18 4 19 5 19 6 L19 18 C19 19 20 20 21 20 L7 20 C6 20 5 19 5 18 Z" fill={CREAM} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8 9 L16 9 M8 13 L14 13" stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SERVICES: { Icon: IconCmp; t: string; b: string }[] = [
  { Icon: IconMailbox, t: "Form 1583 USPS", b: "Le formulaire obligatoire pour activer une adresse postale US CMRA. Signé devant un notaire en Tunisie OU lors d'un passage à LA. Notre notaire californien contre-signe l'original. 50 TND si déjà sur le storefront ; inclus si tu démarres une boîte virtuelle." },
  { Icon: IconScroll, t: "Notariat général de documents", b: "Acknowledgements, jurats, copy certifications. Pour contrats, procurations, attestations. 30 USD par signature notariée (tarif statutaire californien)." },
  { Icon: IconLaptop, t: "RON — Remote Online Notarization", b: "Notariat à distance via vidéo (autorisé en Californie depuis 2023). Tu signes depuis Tunis avec ton notaire local en parallèle. Idéal pour les documents qui demandent un notaire US spécifiquement." },
  { Icon: IconLock, t: "Apostille de documents US", b: "Pour utiliser un document notarié US en Tunisie ou ailleurs hors USA. On se charge du dépôt au California Secretary of State. Délai 2-3 semaines. 200 USD par document apostillé." },
  { Icon: IconGlobe, t: "Traduction certifiée AR/FR ↔ EN", b: "Pour les documents juridiques, académiques, médicaux. Traducteur agréé par l'ATA (American Translators Association). 30-50 USD par page traduite + tampon." },
  { Icon: IconClipboard, t: "Affidavits et déclarations sous serment", b: "Pour usage devant tribunal US ou consulat. Drafting + notarisation. 60-100 USD selon longueur." },
];

const FORM_1583_STEPS = [
  { n: 1, t: "On t'envoie le Form 1583 pré-rempli", b: "Une fois ton forfait boîte virtuelle choisi, on prépare le Form 1583 avec ton nom, l'adresse NOHO, et les bonnes mentions USPS." },
  { n: 2, t: "Tu signes devant un notaire tunisien", b: "Cabinet de notaire en Tunisie — n'importe lequel. Le notaire vérifie ton identité (CIN ou passeport) et appose son sceau." },
  { n: 3, t: "Tu nous envoies l'original signé", b: "Par DHL Express depuis la Tunisie vers le 5062 Lankershim (~50 USD, 2-3 jours). Tu gardes une copie scannée." },
  { n: 4, t: "Notre notaire californien contre-signe", b: "À la réception, notre notaire CA appose sa signature et son sceau sur le Form 1583. C'est l'étape qui rend le formulaire valable USPS." },
  { n: 5, t: "Dépôt USPS et activation", b: "On dépose le Form 1583 final à la poste USPS. Ton adresse est officiellement active. Notification dashboard immédiate." },
];

export default function NotaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconScrollSm className="w-4 h-4" />
            Notaire californien · sur place au storefront
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Services de notaire
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Notaire commissionné en Californie, présent au storefront 5062
            Lankershim Blvd. Form 1583 USPS, notariat de documents, RON,
            apostille, traduction certifiée.
          </p>
        </div>
      </section>

      {/* 6 SERVICES */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            6 services notariaux
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.t} className="p-5 rounded-2xl" style={{ background: CREAM }}>
                <div className="mb-3"><s.Icon className="w-8 h-8" /></div>
                <h3 className="font-black text-[15px] mb-2" style={{ color: INK }}>{s.t}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM 1583 PROCESS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Le formulaire principal
          </p>
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Form 1583 USPS — la procédure
          </h2>
          <div className="space-y-3">
            {FORM_1583_STEPS.map((s) => (
              <div key={s.n} className="flex gap-4 p-5 rounded-2xl" style={{ background: "#fff" }}>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-[18px]"
                  style={{ background: INK, color: CREAM, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {s.n}
                </div>
                <div>
                  <h3 className="font-black text-[15.5px] mb-1" style={{ color: INK }}>{s.t}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.b}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl mt-7" style={{ background: "#fff5f3", borderLeft: `3px solid #C73E2D` }}>
            <p className="font-black text-[14px] mb-2 inline-flex items-center gap-2" style={{ color: "#C73E2D" }}><IconWarn className="w-5 h-5" /> Ne JAMAIS faire :</p>
            <ul className="space-y-1.5 text-[13.5px] list-disc pl-5" style={{ color: "#422006" }}>
              <li>Scanner le Form 1583 signé sans envoyer l&apos;original — USPS rejette les scans</li>
              <li>Faire signer par quelqu&apos;un d&apos;autre que toi — USPS vérifie l&apos;identité</li>
              <li>Modifier les champs après notarisation — invalide le notariat</li>
              <li>Utiliser un notaire qui ne dispose pas du sceau officiel tunisien — invalide</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RON DETAIL */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-extrabold mb-3"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            RON — Notariat à distance (vidéo)
          </h2>
          <p className="text-[15px] leading-relaxed mb-5" style={{ color: "rgba(45,16,15,0.85)" }}>
            Depuis janvier 2023, la Californie autorise le Remote Online
            Notarization (RON) — un notaire californien peut notariser un
            document via session vidéo sécurisée. Tu n&apos;as pas besoin de
            te déplacer en Californie.
          </p>
          <h3 className="font-black text-[16px] mb-3" style={{ color: INK }}>Comment ça marche :</h3>
          <ol className="list-decimal pl-6 space-y-2 text-[14px] leading-relaxed" style={{ color: INK }}>
            <li>Tu nous envoies le document à notariser (PDF) + ta pièce d&apos;identité</li>
            <li>On planifie une session RON via une plateforme agréée (Notarize.com, OneNotary, BlueNotary)</li>
            <li>Session vidéo 15-20 min : vérification d&apos;identité par AI + questions KBA + visualisation de la signature live</li>
            <li>Document signé + notarisé + horodaté + livré au format PDF avec scellé électronique</li>
            <li>Acceptation : tous les états US, la majorité des pays via apostille</li>
          </ol>
          <p className="text-[13px] italic mt-4" style={{ color: "rgba(45,16,15,0.55)" }}>
            Tarif RON : 60-90 USD par document selon complexité + frais
            apostille si requis (200 USD).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: CREAM }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Demander une notarisation
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Form 1583, contrat, procuration, RON — décris ton besoin, on
            confirme le tarif et le délai.
          </p>
          <a
            href="https://wa.me/18185067744?text=Bonjour%2C%20j%27ai%20besoin%20d%27une%20notarisation.%20Type%20de%20document%20%3A%20"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: GREEN, color: "#fff", boxShadow: "0 6px 28px rgba(45,122,74,0.35)" }}
          >
            <IconChat className="w-5 h-5" />
            Demander via WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
