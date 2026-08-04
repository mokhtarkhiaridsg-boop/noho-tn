import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nohomailboxtunis.com";
  const now = new Date();
  const pages: { path: string; priority: number; freq?: "weekly" | "monthly" | "daily" }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/virtual-mailbox", priority: 0.98, freq: "weekly" },
    { path: "/shipping", priority: 0.92, freq: "weekly" },
    { path: "/livraison", priority: 0.94, freq: "weekly" },
    { path: "/notary", priority: 0.88 },
    { path: "/services", priority: 0.9, freq: "weekly" },
    { path: "/etudiants", priority: 0.85, freq: "weekly" },
    { path: "/business", priority: 0.95, freq: "weekly" },
    { path: "/agent", priority: 0.95, freq: "weekly" },
    { path: "/agent/ecom", priority: 0.92, freq: "weekly" },
    { path: "/agent/student", priority: 0.92, freq: "weekly" },
    { path: "/agent/jobs", priority: 0.92, freq: "weekly" },
    { path: "/suivi-mensuel", priority: 0.78, freq: "monthly" },
    { path: "/tarifs", priority: 0.88 },
    { path: "/outils", priority: 0.85, freq: "weekly" },
    { path: "/outils/calculateurs/form-5472", priority: 0.82, freq: "monthly" },
    { path: "/outils/calculateurs/tnd-usd", priority: 0.82, freq: "monthly" },
    { path: "/outils/calculateurs/stripe-fees", priority: 0.82, freq: "monthly" },
    { path: "/outils/calculateurs/roi-propriete-us", priority: 0.82, freq: "monthly" },
    { path: "/outils/calculateurs/bundle-vs-diy", priority: 0.82, freq: "monthly" },
    { path: "/outils/calculateurs/residence-fiscale", priority: 0.82, freq: "monthly" },
    { path: "/outils/comparateurs/banques-us", priority: 0.82, freq: "monthly" },
    { path: "/outils/comparateurs/etats-llc", priority: 0.82, freq: "monthly" },
    { path: "/outils/comparateurs/cross-border", priority: 0.82, freq: "monthly" },
    { path: "/outils/templates", priority: 0.78, freq: "monthly" },
    { path: "/outils/lookups/llc-status", priority: 0.78, freq: "monthly" },
    { path: "/outils/lookups/ein-status", priority: 0.78, freq: "monthly" },
    { path: "/outils/lookups/hts-code", priority: 0.78, freq: "monthly" },
    { path: "/outils/lookups/form-1583", priority: 0.78, freq: "monthly" },
    { path: "/outils/calculateurs/taxes-us-etat", priority: 0.82, freq: "monthly" },
    { path: "/blog", priority: 0.85, freq: "weekly" },
    { path: "/partners", priority: 0.7, freq: "monthly" },
    { path: "/temoignages", priority: 0.7, freq: "monthly" },
    { path: "/track", priority: 0.5, freq: "monthly" },
    { path: "/security", priority: 0.5, freq: "monthly" },
    { path: "/diagnostic", priority: 0.9, freq: "weekly" },
    { path: "/appel", priority: 0.9, freq: "weekly" },
    { path: "/contact", priority: 0.7 },
    { path: "/faq", priority: 0.8 },
    { path: "/a-propos", priority: 0.7 },
    { path: "/guides/plafond-carte-technologique", priority: 0.8 },
    { path: "/conformite/form-5472-penalite", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  // Blog articles
  for (const a of ARTICLES) {
    pages.push({ path: `/blog/${a.slug}`, priority: 0.82, freq: "monthly" });
  }

  // Blog category archives
  const categories = ["business", "ecom", "etudiants", "jobs", "bct", "us-compliance", "banque", "diaspora", "cas"];
  for (const c of categories) {
    pages.push({ path: `/blog/categorie/${c}`, priority: 0.7, freq: "weekly" });
  }

  /*
   * The bare paths above are the DEFAULT locale (Tounsi). French is a real,
   * indexable tree at /fr, so it is mirrored here at a slightly lower priority
   * — the root URL is the canonical one for every shared route.
   *
   * /ar and /en stay out: they are still noindex, and a sitemap must not list
   * noindexed URLs (Search Console flags "submitted URL marked noindex").
   */
  const frPages = pages.map((p) => ({
    path: p.path === "/" ? "/fr" : `/fr${p.path}`,
    priority: Math.round(p.priority * 0.9 * 100) / 100,
    freq: p.freq,
  }));

  return [...pages, ...frPages].map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: (p.freq ?? "monthly") as "weekly" | "monthly",
    priority: p.priority,
  }));
}
