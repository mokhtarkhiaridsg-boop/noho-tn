import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Livraison US — Same-day Los Angeles, national UPS/FedEx",
  description:
    "Service de livraison locale et nationale aux États-Unis. Same-day dans le grand Los Angeles (à partir de 5 USD), routes récurrentes pour businesses. UPS, FedEx, DHL pour le reste des USA.",
  alternates: { canonical: "https://noho.tn/delivery" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const GOLD = "#f8c84a";
const BODY = "#EBF2FA";

type IconCmp = (props: { className?: string }) => React.ReactElement;

const IconBriefcase: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="14" width="36" height="26" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M18 14 L18 10 C18 8 19 7 21 7 L27 7 C29 7 30 8 30 10 L30 14" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M6 24 L42 24" stroke={INK} strokeWidth="2" />
    <rect x="21" y="22" width="6" height="4" rx="1" fill={BLUE} />
  </svg>
);
const IconFlower: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="16" r="6" fill={CREAM} stroke={INK} strokeWidth="2" />
    <circle cx="14" cy="22" r="6" fill={CREAM} stroke={INK} strokeWidth="2" />
    <circle cx="34" cy="22" r="6" fill={CREAM} stroke={INK} strokeWidth="2" />
    <circle cx="24" cy="28" r="6" fill={CREAM} stroke={INK} strokeWidth="2" />
    <circle cx="24" cy="22" r="3" fill={GOLD} stroke={INK} strokeWidth="1.5" />
    <path d="M24 30 L24 44 M24 38 C20 36 18 32 16 32 M24 38 C28 36 30 32 32 32" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);
const IconBalance: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 6 L24 42" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10 12 L38 12" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    <rect x="18" y="42" width="12" height="3" rx="1" fill={INK} />
    <path d="M10 12 L4 24 L16 24 Z" fill={BODY} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <path d="M38 12 L32 24 L44 24 Z" fill={BODY} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
const IconHospital: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="8" y="8" width="32" height="36" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M21 18 L27 18 L27 24 L33 24 L33 30 L27 30 L27 36 L21 36 L21 30 L15 30 L15 24 L21 24 Z" fill={BLUE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
const IconPrinter: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="18" width="36" height="18" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="12" y="8" width="24" height="12" rx="2" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <rect x="12" y="28" width="24" height="12" rx="2" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <circle cx="36" cy="24" r="1.5" fill={BLUE} />
    <path d="M16 32 L32 32 M16 36 L26 36" stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconBag: IconCmp = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M10 16 L38 16 L40 42 L8 42 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 16 L16 12 C16 8 19 5 24 5 C29 5 32 8 32 12 L32 16" stroke={INK} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M18 24 L30 24" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
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
const IconTruckSm: IconCmp = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <rect x="1" y="7" width="14" height="10" rx="1.5" fill={CREAM} stroke={INK} strokeWidth="1.8" />
    <path d="M15 10 L15 17 L22 17 L22 13 L19 10 Z" fill={CREAM} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="6" cy="18" r="2" fill={INK} />
    <circle cx="18" cy="18" r="2" fill={INK} />
  </svg>
);

const ZONES = [
  { z: "NoHo + Studio City + Burbank", price: "5 USD flat", time: "Sous 2h" },
  { z: "Tout LA County", price: "9-28 USD selon zone", time: "Same-day" },
  { z: "Orange County / Inland Empire", price: "35-60 USD", time: "Same-day ou next-day" },
  { z: "Reste de la Californie", price: "Tarif UPS / FedEx Ground", time: "1-3 jours" },
  { z: "Reste des USA", price: "Tarif UPS / FedEx / USPS", time: "2-5 jours" },
];

const USE_CASES: { Icon: IconCmp; t: string; b: string }[] = [
  { Icon: IconBriefcase, t: "LLC tunisien avec clients US", b: "Tu as monté une LLC américaine et tu fais du e-commerce ou du B2B vers les USA. Tes commandes locales LA passent par notre livraison same-day." },
  { Icon: IconFlower, t: "Florists / boutiques tunisiennes en LA", b: "Si tu as une boutique de fouta, harissa, dattes à Los Angeles — on livre tes commandes auprès des clients américains." },
  { Icon: IconBalance, t: "Cabinets juridiques tunisiens", b: "Document filing court, signification d'actes, dépôt de documents — courriers urgents inter-cabinets en LA County." },
  { Icon: IconHospital, t: "Cabinets médicaux", b: "Échantillons labo, dossiers médicaux entre cabinets, fournitures spécialisées — same-day discret." },
  { Icon: IconPrinter, t: "Print shops & studios", b: "Livraison de tirages, maquettes, prototypes à tes clients commerciaux LA. Service récurrent ou ponctuel." },
  { Icon: IconBag, t: "E-commerce boutique", b: "Petites séries de produits made-in-Tunisia vers clients US à Los Angeles. Forfait routes récurrentes disponible." },
];

const RECURRING = [
  { t: "Daily route", b: "Une livraison/jour, 5j/semaine. Pour cabinets pro qui envoient régulièrement. ~150-300 USD/mois selon zone." },
  { t: "Weekly route", b: "Une livraison/semaine, jour fixe. Pour boutiques avec rythme régulier. ~80-150 USD/mois." },
  { t: "On-demand", b: "À la commande. Pas d'abonnement. Devis case par case. Idéal pour usage occasionnel." },
];

export default function DeliveryPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconTruckSm className="w-4 h-4" />
            Same-day Los Angeles · National USA
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Livraison US
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Service de livraison locale et nationale aux États-Unis. Same-day
            dans le grand Los Angeles. UPS, FedEx, DHL pour le reste des USA.
            Pour fondateurs tunisiens avec clients ou business US.
          </p>
        </div>
      </section>

      {/* PRICING ZONES */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Tarifs par zone (en USD)
          </h2>
          <p className="text-center text-[14px] mb-10" style={{ color: "rgba(45,16,15,0.65)" }}>
            Tarifs en dollars parce que la livraison se passe physiquement
            aux USA. Devis en TND disponible sur demande pour facturation
            tunisienne.
          </p>
          <div className="space-y-3">
            {ZONES.map((z) => (
              <div key={z.z} className="p-5 rounded-2xl flex flex-wrap items-baseline justify-between gap-3" style={{ background: CREAM }}>
                <h3 className="font-black text-[16px]" style={{ color: INK }}>{z.z}</h3>
                <div className="flex gap-4 text-[13.5px]">
                  <span className="font-black" style={{ color: BLUE }}>{z.time}</span>
                  <span className="font-black" style={{ color: GREEN }}>{z.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Qui utilise la livraison US ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USE_CASES.map((u) => (
              <div key={u.t} className="p-5 rounded-2xl" style={{ background: "#fff" }}>
                <div className="mb-3"><u.Icon className="w-8 h-8" /></div>
                <h3 className="font-black text-[15px] mb-2" style={{ color: INK }}>{u.t}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{u.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECURRING ROUTES */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Routes récurrentes
          </p>
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Trois rythmes selon ton activité
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RECURRING.map((r) => (
              <div key={r.t} className="p-6 rounded-2xl" style={{ background: CREAM }}>
                <h3 className="font-black text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>{r.t}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{r.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: CREAM }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Devis pour ta route
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Décris ta zone, ta fréquence, ton volume. On revient avec un
            tarif transparent.
          </p>
          <a
            href="https://wa.me/18185067744?text=Bonjour%2C%20j%27aimerais%20un%20devis%20de%20livraison%20US.%20Voici%20mes%20besoins%20%3A%20"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: GREEN, color: "#fff", boxShadow: "0 6px 28px rgba(45,122,74,0.35)" }}
          >
            <IconChat className="w-5 h-5" />
            Devis WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
