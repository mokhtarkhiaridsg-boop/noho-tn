import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import TrackRouter from "@/components/landing/TrackRouter";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Suivre un colis", url: "https://nohomailboxtunis.com/fr/track" },
]);

export const metadata: Metadata = {
  title: "Suivre un colis ou un courrier",
  description:
    "Suivi en temps réel de ton courrier reçu à NOHO Mailbox ou de tes expéditions sortantes (USPS, UPS, FedEx, DHL).",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/track" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";
const BODY = "#EBF2FA";

// -------- Inline brand SVG icons (no emojis) --------

const IconSearch = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="20" cy="20" r="13" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <path d="M30 30 L42 42" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M14 20 H26" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconMail = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="12" width="40" height="26" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M6 14 L24 26 L42 14" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    <circle cx="38" cy="12" r="6" fill={GOLD} stroke={INK} strokeWidth="2" />
    <path d="M35 12 L37 14 L41 10" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTruck = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className} fill="none">
    <rect x="2" y="8" width="34" height="20" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M36 15 L36 28 L54 28 L54 20 L46 15 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="39" y="18" width="7" height="5" rx="1" fill={BLUE} opacity="0.5" stroke={INK} strokeWidth="1.2" />
    <line x1="2" y1="28" x2="54" y2="28" stroke={INK} strokeWidth="2" />
    <circle cx="15" cy="30" r="5" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <circle cx="15" cy="30" r="2" fill={INK} />
    <circle cx="45" cy="30" r="5" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <circle cx="45" cy="30" r="2" fill={INK} />
    <path d="M6 14 H14 M6 18 H12" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconChat = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M6 10 C6 8 8 6 10 6 L38 6 C40 6 42 8 42 10 L42 30 C42 32 40 34 38 34 L20 34 L12 42 L12 34 L10 34 C8 34 6 32 6 30 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="16" cy="20" r="2.5" fill={BLUE} />
    <circle cx="24" cy="20" r="2.5" fill={BLUE} />
    <circle cx="32" cy="20" r="2.5" fill={GREEN} />
  </svg>
);

function TrackLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconSearch className="w-3.5 h-3.5" />
            Suivi de courrier
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Suivre ton{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              courrier
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Trois options : ton dashboard NOHO pour les arrivées, ton numéro
            de suivi USPS/UPS/FedEx/DHL pour les expéditions, ou contact
            direct WhatsApp.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="p-5 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-black text-[16px] mb-2 flex items-center gap-2" style={{ color: INK }}>
              <IconMail className="w-6 h-6" />
              Courrier reçu à NOHO
            </h2>
            <p className="text-[13.5px] leading-relaxed mb-3" style={{ color: "rgba(45,16,15,0.78)" }}>
              Connecte-toi au dashboard de ton compte mailbox pour voir
              chaque pli reçu avec photo, date et options (scan / forward /
              shred).
            </p>
            <a
              href="https://nohomailbox.org/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-black px-6 py-3 rounded-xl text-[13px]"
              style={{ background: INK, color: CREAM }}
            >
              Ouvrir le dashboard ↗
            </a>
          </div>

          <div className="p-5 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-black text-[16px] mb-2 flex items-center gap-2" style={{ color: INK }}>
              <IconTruck className="w-7 h-7" />
              Expédition sortante (USPS / UPS / FedEx / DHL)
            </h2>
            <p className="text-[13.5px] leading-relaxed mb-3" style={{ color: "rgba(45,16,15,0.78)" }}>
              Utilise le numéro de suivi qu&apos;on t&apos;a envoyé par
              WhatsApp ou email :
            </p>
            <ul className="text-[13px] space-y-1.5 list-disc pl-5" style={{ color: INK }}>
              <li>USPS : <a href="https://tools.usps.com/go/TrackConfirmAction_input" target="_blank" rel="noopener noreferrer" className="underline">tools.usps.com</a></li>
              <li>UPS : <a href="https://www.ups.com/track" target="_blank" rel="noopener noreferrer" className="underline">ups.com/track</a></li>
              <li>FedEx : <a href="https://www.fedex.com/fedextrack/" target="_blank" rel="noopener noreferrer" className="underline">fedex.com/fedextrack</a></li>
              <li>DHL : <a href="https://www.dhl.com/global-en/home/tracking.html" target="_blank" rel="noopener noreferrer" className="underline">dhl.com/tracking</a></li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-black text-[16px] mb-2 flex items-center gap-2" style={{ color: INK }}>
              <IconChat className="w-6 h-6" />
              Contact direct
            </h2>
            <p className="text-[13.5px] leading-relaxed mb-3" style={{ color: "rgba(45,16,15,0.78)" }}>
              Pas reçu le numéro de suivi ? Écris-nous, on retrouve.
            </p>
            <Link
              href="/fr/contact"
              className="inline-block font-black px-6 py-3 rounded-xl text-[13px]"
              style={{ background: INK, color: CREAM }}
            >
              Contacter NOHO →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * The homepage track form submits here as `?n=<number>`. With a number we
 * render the shared carrier-detection router; with none, the original
 * link-out page below stands unchanged.
 */
export default async function TrackPage({
  searchParams,
}: {
  searchParams?: Promise<{ n?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  if ((sp.n ?? "").trim()) {
    return <TrackRouter locale="fr" searchParams={searchParams} />;
  }
  return <TrackLanding />;
}
