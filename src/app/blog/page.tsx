import type { Metadata } from "next";
import Link from "next/link";
import { listArticles } from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Blog — Guides, comparateurs et cas pratiques pour Tunisiens",
  description:
    "Articles SEO sur la création de société US/TN, banque, Stripe, visa, conformité Form 5472, BCT, fiscalité. Tous les détails service-par-service.",
  alternates: { canonical: "https://noho.tn/blog" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";
const BODY = "#EBF2FA";

// -------- Inline brand SVG icons (no emojis) --------

const IconNote = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M10 6 L34 6 L40 12 L40 42 L10 42 Z" fill={CREAM} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M34 6 L34 12 L40 12" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 22 H32 M16 28 H32 M16 34 H26" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconBuilding = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="8" y="8" width="32" height="34" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="13" y="14" width="5" height="5" rx="1" fill={BLUE} />
    <rect x="22" y="14" width="5" height="5" rx="1" fill={BLUE} />
    <rect x="31" y="14" width="5" height="5" rx="1" fill={BLUE} opacity="0.6" />
    <rect x="13" y="23" width="5" height="5" rx="1" fill={BLUE} opacity="0.6" />
    <rect x="22" y="23" width="5" height="5" rx="1" fill={BLUE} />
    <rect x="31" y="23" width="5" height="5" rx="1" fill={BLUE} opacity="0.6" />
    <rect x="20" y="32" width="9" height="10" rx="1" fill={GOLD} stroke={INK} strokeWidth="1.5" />
  </svg>
);

const IconCart = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M6 10 L12 10 L16 32 L38 32 L42 16 L14 16" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 20 L40 20" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
    <path d="M19 25 L39 25" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
    <circle cx="19" cy="40" r="3.5" fill={GOLD} stroke={INK} strokeWidth="2" />
    <circle cx="35" cy="40" r="3.5" fill={GOLD} stroke={INK} strokeWidth="2" />
  </svg>
);

const IconGrad = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M4 18 L24 8 L44 18 L24 28 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M12 22 L12 34 C12 38 18 41 24 41 C30 41 36 38 36 34 L36 22" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M40 18 L40 30" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="40" cy="32" r="2.5" fill={GOLD} stroke={INK} strokeWidth="1.5" />
  </svg>
);

const IconBriefcase = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="14" width="36" height="28" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M18 14 L18 9 C18 7 19 6 21 6 L27 6 C29 6 30 7 30 9 L30 14" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    <path d="M6 24 L42 24" stroke={INK} strokeWidth="2" opacity="0.55" />
    <rect x="20" y="22" width="8" height="5" rx="1" fill={GOLD} stroke={INK} strokeWidth="1.5" />
  </svg>
);

const IconBank = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M4 18 L24 6 L44 18 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="4" y="18" width="40" height="3" fill={INK} />
    <rect x="9" y="22" width="3" height="16" fill={BLUE} />
    <rect x="17" y="22" width="3" height="16" fill={BLUE} />
    <rect x="28" y="22" width="3" height="16" fill={BLUE} />
    <rect x="36" y="22" width="3" height="16" fill={BLUE} />
    <rect x="4" y="38" width="40" height="4" fill={INK} />
    <circle cx="24" cy="14" r="2" fill={GOLD} />
  </svg>
);

const IconClipboard = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="10" y="8" width="28" height="34" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="17" y="4" width="14" height="8" rx="2" fill={GOLD} stroke={INK} strokeWidth="2" />
    <path d="M16 20 L20 24 L26 16" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 20 H34 M16 30 H34 M16 36 H30" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.45" />
  </svg>
);

const IconCard = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="12" width="40" height="26" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <rect x="4" y="18" width="40" height="5" fill={INK} />
    <rect x="9" y="29" width="10" height="5" rx="1" fill={GOLD} stroke={INK} strokeWidth="1.5" />
    <path d="M26 32 H38" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 35 H34" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
  </svg>
);

const IconHandshake = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M4 22 L14 18 L24 22 L34 18 L44 22 L44 32 L34 36 L24 32 L14 36 L4 32 Z" fill={BODY} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M14 18 L14 36 M34 18 L34 36" stroke={INK} strokeWidth="2" opacity="0.35" />
    <path d="M20 26 L24 30 L28 26" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconTools = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="20" width="36" height="22" rx="3" fill={BODY} stroke={INK} strokeWidth="2.5" />
    <path d="M14 20 L14 12 C14 9 16 7 19 7 L29 7 C32 7 34 9 34 12 L34 20" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    <path d="M14 32 L20 28 L20 36 Z" fill={BLUE} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="24" y="28" width="14" height="3" rx="1.5" fill={GOLD} stroke={INK} strokeWidth="1.2" />
    <circle cx="32" cy="34" r="2" fill={INK} />
  </svg>
);

const IconChart = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="6" width="36" height="36" rx="4" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <rect x="11" y="28" width="5" height="10" rx="1" fill={BLUE} opacity="0.45" />
    <rect x="20" y="20" width="5" height="18" rx="1" fill={BLUE} opacity="0.7" />
    <rect x="29" y="12" width="5" height="26" rx="1" fill={BLUE} />
    <path d="M10 24 L18 18 L26 22 L36 8" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="36" cy="8" r="2" fill={GOLD} stroke={INK} strokeWidth="1.5" />
  </svg>
);

const CATEGORIES = [
  { slug: "business", name: "Solution Business", desc: "LLC, EIN, banking, conformité US et TN.", Icon: IconBuilding },
  { slug: "ecom", name: "E-commerce", desc: "Amazon, Etsy, Shopify, FBA, douane TN→US.", Icon: IconCart },
  { slug: "etudiants", name: "Étudiants", desc: "Admission, F-1, OPT, exams, apostille.", Icon: IconGrad },
  { slug: "jobs", name: "Application emploi", desc: "CV US, H-1B, O-1, négociation d'offre.", Icon: IconBriefcase },
  { slug: "bct", name: "BCT & TN compliance", desc: "Carte technologique, rapatriement, fiscalité TN.", Icon: IconBank },
  { slug: "us-compliance", name: "US compliance", desc: "Form 5472, rapports annuels, registered agent.", Icon: IconClipboard },
  { slug: "banque", name: "Banking & finance", desc: "Mercury, Stripe, Plan B waterfall.", Icon: IconCard },
  { slug: "diaspora", name: "Diaspora & culture", desc: "Eid US-side, Ramadan, mosquée LA.", Icon: IconHandshake },
  { slug: "outils", name: "Outils & calculateurs", desc: "Lien vers /outils.", Icon: IconTools },
  { slug: "cas", name: "Études de cas", desc: "Clients anonymisés et résultats réels.", Icon: IconChart },
];

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "Blog", url: "https://noho.tn/blog" },
]);

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconNote className="w-3.5 h-3.5" />
            Blog NOHO
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Guides, comparateurs et{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              vrais cas
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Tout ce qu&apos;on a appris en accompagnant des fondateurs,
            étudiants et professionnels tunisiens vers les USA. Articles
            détaillés par catégorie.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Articles récents
          </h2>
          <ul className="space-y-4 mb-12">
            {listArticles().map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="block p-6 rounded-2xl transition-all hover:-translate-y-1"
                  style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-2 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: BLUE }}>
                    <span>{a.categoryLabel}</span>
                    <span style={{ color: "rgba(45,16,15,0.35)" }}>·</span>
                    <span style={{ color: "rgba(45,16,15,0.55)" }}>
                      {new Date(a.publishedAt).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span style={{ color: "rgba(45,16,15,0.35)" }}>·</span>
                    <span style={{ color: "rgba(45,16,15,0.55)" }}>{a.readingMinutes} min</span>
                  </div>
                  <h3 className="font-extrabold text-[18px] sm:text-[20px] mb-2 leading-tight" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                    {a.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{a.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="text-center font-extrabold mb-8" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            10 catégories couvertes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((c) => {
              const Icon = c.Icon;
              const href = c.slug === "outils" ? "/outils" : `/blog/categorie/${c.slug}`;
              return (
                <Link
                  key={c.slug}
                  href={href}
                  className="p-5 rounded-2xl transition-all hover:-translate-y-1 block"
                  style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}
                >
                  <div className="mb-3"><Icon className="w-8 h-8" /></div>
                  <h3 className="font-black text-[15px] mb-2" style={{ color: INK }}>{c.name}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{c.desc}</p>
                </Link>
              );
            })}
          </div>
          <p className="text-center text-[13.5px] mt-10" style={{ color: "rgba(45,16,15,0.65)" }}>
            D&apos;autres articles arrivent.{" "}
            <Link href="/contact" className="font-bold underline" style={{ color: BLUE }}>
              Écris-nous
            </Link>{" "}
            pour recevoir les prochains guides par email.
          </p>
        </div>
      </section>
    </>
  );
}
