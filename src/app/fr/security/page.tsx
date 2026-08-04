import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Sécurité", url: "https://nohomailboxtunis.com/fr/security" },
]);

export const metadata: Metadata = {
  title: "Sécurité & confidentialité",
  description:
    "Comment NOHO protège ton courrier, tes documents et tes données. GDPR, INPDP tunisien, chiffrement, KYC, accès limité.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/security" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";
const BODY = "#EBF2FA";

// -------- Inline brand SVG icons (no emojis) --------

const IconShield = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 48 56" className={className} fill="none">
    <path d="M24 4 L4 14 L4 28 C4 40 12 50 24 54 C36 50 44 40 44 28 L44 14 Z" fill={CREAM} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <path d="M16 28 L22 34 L34 20" stroke={BLUE} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLock = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="8" y="22" width="32" height="22" rx="4" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M14 22 L14 14 C14 9 18 5 24 5 C30 5 34 9 34 14 L34 22" stroke={INK} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <circle cx="24" cy="32" r="3.5" fill={GOLD} stroke={INK} strokeWidth="1.8" />
    <path d="M24 32 L24 38" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconCamera = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="12" width="40" height="30" rx="4" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M16 12 L18 7 L30 7 L32 12" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="24" cy="27" r="9" fill="#fff" stroke={INK} strokeWidth="2.5" />
    <circle cx="24" cy="27" r="5" fill={BLUE} stroke={INK} strokeWidth="1.5" />
    <circle cx="38" cy="18" r="1.8" fill={GOLD} />
  </svg>
);

const IconId = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="10" width="40" height="28" rx="4" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <circle cx="16" cy="22" r="4.5" fill={BLUE} stroke={INK} strokeWidth="1.8" />
    <path d="M10 32 C10 28 13 26 16 26 C19 26 22 28 22 32" fill={BLUE} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M27 19 H40 M27 25 H38 M27 31 H35" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
    <rect x="4" y="10" width="6" height="28" fill={GOLD} stroke={INK} strokeWidth="2.5" />
  </svg>
);

const IconEU = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="20" fill={BLUE} stroke={INK} strokeWidth="2.5" />
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const x = 24 + 14 * Math.cos(angle);
      const y = 24 + 14 * Math.sin(angle);
      return (
        <path
          key={i}
          d={`M${x} ${y - 1.6} L${x + 0.5} ${y - 0.4} L${x + 1.6} ${y - 0.4} L${x + 0.7} ${y + 0.4} L${x + 1} ${y + 1.6} L${x} ${y + 0.9} L${x - 1} ${y + 1.6} L${x - 0.7} ${y + 0.4} L${x - 1.6} ${y - 0.4} L${x - 0.5} ${y - 0.4} Z`}
          fill={GOLD}
          stroke={INK}
          strokeWidth="0.4"
        />
      );
    })}
    <text x="24" y="29" textAnchor="middle" fontSize="9" fontWeight="900" fill={CREAM} fontFamily="system-ui, sans-serif">UE</text>
  </svg>
);

const IconTN = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="20" fill={GREEN} stroke={INK} strokeWidth="2.5" />
    <circle cx="24" cy="24" r="14" fill={CREAM} stroke={INK} strokeWidth="1.5" opacity="0.85" />
    <text x="24" y="28" textAnchor="middle" fontSize="10" fontWeight="900" fill={INK} fontFamily="system-ui, sans-serif">TN</text>
    <path d="M24 6 L25 10 L29 10 L26 12.5 L27 16 L24 14 L21 16 L22 12.5 L19 10 L23 10 Z" fill={GOLD} stroke={INK} strokeWidth="0.6" transform="translate(0 -2)" opacity="0" />
  </svg>
);

const IconUsers = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="17" cy="17" r="6" fill={BLUE} stroke={INK} strokeWidth="2.5" />
    <path d="M5 38 C5 30 10 26 17 26 C24 26 29 30 29 38" fill={BLUE} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="33" cy="20" r="5" fill={GOLD} stroke={INK} strokeWidth="2.5" />
    <path d="M25 38 C25 32 29 28 33 28 C38 28 43 32 43 38" fill={GOLD} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

const PILLARS = [
  { Icon: IconLock, t: "Courrier sous clé", d: "Boîte sécurisée à serrure individuelle. Personnel formé, badge accès, caméras 24/7." },
  { Icon: IconCamera, t: "Scan chiffré", d: "PDF chiffrés en transit (TLS 1.3) et au repos (AES-256). Hébergement US conforme SOC 2." },
  { Icon: IconId, t: "KYC strict", d: "Form 1583 obligatoire avant activation. Identité vérifiée par notre notaire commissionné." },
  { Icon: IconEU, t: "GDPR", d: "Données diaspora UE traitées sous GDPR. Droit d'accès, suppression, portabilité." },
  { Icon: IconTN, t: "INPDP TN", d: "Conformité Instance Nationale de Protection des Données Personnelles tunisienne." },
  { Icon: IconUsers, t: "Accès limité", d: "Seul le personnel autorisé voit ton dossier. Logs d'accès tracés. Pas de revente de données." },
];

export default function SecurityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconShield className="w-3.5 h-3.5" />
            Sécurité
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Ton courrier,{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              en sécurité
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Boîte physique sous clé, scan chiffré, conformité GDPR + INPDP
            tunisien. Six piliers de sécurité documentés.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILLARS.map((p) => {
              const Icon = p.Icon;
              return (
                <div key={p.t} className="p-5 rounded-2xl" style={{ background: CREAM }}>
                  <div className="mb-3"><Icon className="w-8 h-8" /></div>
                  <h3 className="font-black text-[15px] mb-2" style={{ color: INK }}>{p.t}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{p.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-[14px] leading-relaxed" style={{ color: INK }}>
          <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-baloo), sans-serif" }}>
            Tes droits
          </h2>
          <ul className="space-y-3 list-disc pl-6">
            <li><strong>Accès :</strong> demande la copie de toutes les données qu&apos;on a sur toi à tout moment.</li>
            <li><strong>Rectification :</strong> corrige toute information erronée.</li>
            <li><strong>Suppression :</strong> après la fin de ton contrat, on peut supprimer les données (sauf obligations légales de conservation).</li>
            <li><strong>Portabilité :</strong> reçois tes scans en archive téléchargeable.</li>
            <li><strong>Opposition :</strong> refuse l&apos;usage de tes données pour marketing (qu&apos;on n&apos;utilise pas par défaut).</li>
          </ul>
          <p className="mt-6 text-[13.5px]">
            Pour exercer un droit, écris à{" "}
            <a href="mailto:privacy@nohomailbox.org" className="font-bold underline" style={{ color: BLUE }}>
              privacy@nohomailbox.org
            </a>
            . Réponse sous 30 jours.
          </p>
        </div>
      </section>
    </>
  );
}
