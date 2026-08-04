import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Témoignages", url: "https://nohomailboxtunis.com/fr/temoignages" },
]);

export const metadata: Metadata = {
  title: "Témoignages — Clients tunisiens qui opèrent en USD depuis Tunis",
  description:
    "Ce que disent nos clients tunisiens : fondateurs e-commerce, étudiants admis en université US, candidats à l'emploi US accompagnés.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/temoignages" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

// -------- Inline brand SVG icon (no emojis) --------

const IconStar = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 2 L14.6 8.6 L21.6 9.2 L16.3 13.9 L17.9 20.8 L12 17.2 L6.1 20.8 L7.7 13.9 L2.4 9.2 L9.4 8.6 Z"
      fill={GOLD}
      stroke={INK}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TemoignagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            <IconStar className="w-3.5 h-3.5" />
            Témoignages
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Ce que disent nos{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              clients
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Premiers cas anonymisés, premières vraies trajectoires.
            Études de cas complètes en cours de rédaction.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-7 rounded-3xl text-center" style={{ background: CREAM }}>
            <p className="text-[14.5px] leading-relaxed mb-5" style={{ color: "rgba(45,16,15,0.85)" }}>
              On préfère publier <strong>quelques témoignages réels</strong>{" "}
              avec consentement, plutôt qu&apos;un tableau de témoignages
              inventés. Premières études de cas en cours de rédaction avec
              nos premiers clients (avec leur permission). Honest
              Self-Disclosure : on ne publiera jamais un témoignage non
              vérifié.
            </p>
            <Link
              href="/fr/contact"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[14px]"
              style={{ background: INK, color: CREAM }}
            >
              Devenir client référent →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
