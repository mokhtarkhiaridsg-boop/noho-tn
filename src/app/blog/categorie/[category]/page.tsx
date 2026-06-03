import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, type ArticleMeta } from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

type CategoryKey = ArticleMeta["category"];

const CATEGORY_META: Record<
  CategoryKey,
  { label: string; tagline: string }
> = {
  business: {
    label: "Solution Business",
    tagline: "LLC, EIN, banking, conformité US et TN. Tout ce qui touche à la création + opération d'une société.",
  },
  ecom: {
    label: "E-commerce",
    tagline: "Amazon, Etsy, Shopify, FBA, douane TN→US. Vendre des produits depuis Tunis vers les US.",
  },
  etudiants: {
    label: "Étudiants",
    tagline: "Admission, F-1, OPT, exams. La voie étudiante vers les USA.",
  },
  jobs: {
    label: "Application emploi",
    tagline: "CV US, H-1B, O-1, négociation d'offre. La voie pro vers les USA.",
  },
  bct: {
    label: "BCT & TN compliance",
    tagline: "Carte technologique, rapatriement, BCT décembre 2025, fiscalité tunisienne.",
  },
  "us-compliance": {
    label: "US compliance",
    tagline: "Form 5472, rapports annuels, registered agent, Mercury KYC, Stripe approval.",
  },
  banque: {
    label: "Banking & finance",
    tagline: "Mercury, Stripe, Wise, Plan B waterfall. Comment gérer tes comptes US depuis Tunis.",
  },
  diaspora: {
    label: "Diaspora & culture",
    tagline: "Eid US-side, Ramadan, mosquée LA. Vivre tunisien aux US.",
  },
  outils: {
    label: "Outils & calculateurs",
    tagline: "Pour les outils interactifs, voir /outils.",
  },
  cas: {
    label: "Études de cas",
    tagline: "Clients anonymisés et résultats réels.",
  },
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((c) => ({ category: c }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_META[category as CategoryKey];
  if (!meta) return {};
  return {
    title: `${meta.label} — articles NOHO`,
    description: meta.tagline,
    alternates: { canonical: `https://noho.tn/blog/categorie/${category}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = CATEGORY_META[category as CategoryKey];
  if (!meta) notFound();

  const articles = ARTICLES.filter((a) => a.category === category).sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Accueil", url: "https://noho.tn" },
    { name: "Blog", url: "https://noho.tn/blog" },
    { name: meta.label, url: `https://noho.tn/blog/categorie/${category}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span className="mx-1.5">·</span>
            <span>{meta.label}</span>
          </div>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.875rem, 5vw, 3.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            {meta.label}
          </h1>
          <p className="text-[15.5px] leading-relaxed max-w-2xl" style={{ color: "rgba(45,16,15,0.78)" }}>
            {meta.tagline}
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-12 px-6 rounded-2xl" style={{ background: CREAM }}>
              <p className="text-[14.5px] leading-relaxed" style={{ color: INK }}>
                Aucun article publié pour l&apos;instant dans cette catégorie.
                D&apos;autres articles arrivent —{" "}
                <Link href="/contact" className="font-bold underline" style={{ color: BLUE }}>
                  écris-nous
                </Link>{" "}
                pour être notifié.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {articles.map((a) => (
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
                    <h2 className="font-extrabold text-[18px] sm:text-[20px] mb-2 leading-tight" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                      {a.title}
                    </h2>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{a.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-block font-black px-7 py-3.5 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM }}
            >
              ← Toutes les catégories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
