import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/blog";

type Freq = "weekly" | "monthly" | "daily";
type Entry = { path: string; priority: number; freq?: Freq; alternates?: Record<string, string> };

const BASE = "https://nohomailboxtunis.com";
const abs = (p: string) => (p === "/" ? BASE : `${BASE}${p}`);

/*
 * The sitemap lists CANONICAL URLs only (SEO audit 2026-09-30).
 *
 * Before, every bare route was mirrored into /fr — including the 38 bare
 * routes that are a verbatim re-export of the French page, and the 74
 * /fr/blog URLs that canonicalise to /blog. Search Console reads a sitemap
 * full of non-canonical URLs as "Duplicate, Google chose different canonical"
 * and trusts the file less. Each route now appears exactly once per real
 * language version, in the list that matches how it is built:
 *
 *   PAIRS      — real derja at the bare path AND real French at /fr (and, where
 *                `ar` is set, reviewed indexable Arabic at /ar). Every version
 *                is listed with the same hreflang set as src/lib/seo.ts.
 *   FR_ONLY    — no derja copy yet: the bare path re-exports the French page
 *                and canonicalises to /fr, so only /fr is listed.
 *   BARE_ONLY  — the canonical is the bare URL (the blog, the signup form).
 *   AR_INDEXED — reviewed Arabic pages with no twin under the same route.
 *
 * The rest of /ar and all of /en stay noindex and out of the file: a sitemap
 * must not list noindexed URLs.
 */

// Keep in step with the pages that call localeAlternates(route, …).
const PAIRS: { route: string; priority: number; freq?: Freq; ar?: boolean }[] = [
  { route: "/", priority: 1.0, freq: "weekly" },
  { route: "/virtual-mailbox", priority: 0.98, freq: "weekly", ar: true },
  { route: "/shipping", priority: 0.9, freq: "weekly" },
  { route: "/tarifs", priority: 0.9 },
  { route: "/business", priority: 0.9, freq: "weekly" },
  { route: "/contact", priority: 0.7 },
  { route: "/appel", priority: 0.8 },
];

const FR_ONLY: Entry[] = [
  {
    path: "/fr/reexpedition-colis-usa-tunisie",
    priority: 0.95,
    freq: "weekly",
    alternates: {
      fr: abs("/fr/reexpedition-colis-usa-tunisie"),
      ar: abs("/ar/reexpedition-colis-usa-tunisie"),
      "x-default": abs("/fr/reexpedition-colis-usa-tunisie"),
    },
  },
  { path: "/fr/livraison", priority: 0.8 },
  { path: "/fr/delivery", priority: 0.6 },
  { path: "/fr/notary", priority: 0.8 },
  { path: "/fr/services", priority: 0.85, freq: "weekly" },
  { path: "/fr/etudiants", priority: 0.85, freq: "weekly" },
  { path: "/fr/agent", priority: 0.85, freq: "weekly" },
  { path: "/fr/agent/ecom", priority: 0.8 },
  { path: "/fr/agent/student", priority: 0.8 },
  { path: "/fr/agent/jobs", priority: 0.8 },
  { path: "/fr/suivi-mensuel", priority: 0.75 },
  { path: "/fr/outils", priority: 0.8, freq: "weekly" },
  { path: "/fr/outils/calculateurs/form-5472", priority: 0.75 },
  { path: "/fr/outils/calculateurs/tnd-usd", priority: 0.75 },
  { path: "/fr/outils/calculateurs/stripe-fees", priority: 0.75 },
  { path: "/fr/outils/calculateurs/roi-propriete-us", priority: 0.75 },
  { path: "/fr/outils/calculateurs/bundle-vs-diy", priority: 0.75 },
  { path: "/fr/outils/calculateurs/residence-fiscale", priority: 0.75 },
  { path: "/fr/outils/calculateurs/taxes-us-etat", priority: 0.75 },
  { path: "/fr/outils/comparateurs/banques-us", priority: 0.75 },
  { path: "/fr/outils/comparateurs/etats-llc", priority: 0.75 },
  { path: "/fr/outils/comparateurs/cross-border", priority: 0.75 },
  { path: "/fr/outils/lookups/llc-status", priority: 0.7 },
  { path: "/fr/outils/lookups/ein-status", priority: 0.7 },
  { path: "/fr/outils/lookups/hts-code", priority: 0.7 },
  { path: "/fr/outils/lookups/form-1583", priority: 0.75 },
  { path: "/fr/partners", priority: 0.6 },
  { path: "/fr/track", priority: 0.5 },
  { path: "/fr/security", priority: 0.5 },
  { path: "/fr/diagnostic", priority: 0.8, freq: "weekly" },
  { path: "/fr/faq", priority: 0.8 },
  { path: "/fr/a-propos", priority: 0.7 },
  { path: "/fr/guides/plafond-carte-technologique", priority: 0.75 },
  { path: "/fr/conformite/form-5472-penalite", priority: 0.75 },
  { path: "/fr/business/tn-vs-us", priority: 0.75 },
  { path: "/fr/privacy", priority: 0.3 },
  { path: "/fr/terms", priority: 0.3 },
];

const BARE_ONLY: Entry[] = [
  { path: "/inscription", priority: 0.95, freq: "weekly" },
  { path: "/blog", priority: 0.8, freq: "weekly" },
];

const AR_INDEXED: Entry[] = [
  {
    path: "/ar/reexpedition-colis-usa-tunisie",
    priority: 0.9,
    freq: "weekly",
    alternates: {
      fr: abs("/fr/reexpedition-colis-usa-tunisie"),
      ar: abs("/ar/reexpedition-colis-usa-tunisie"),
      "x-default": abs("/fr/reexpedition-colis-usa-tunisie"),
    },
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [];

  for (const p of PAIRS) {
    const frPath = p.route === "/" ? "/fr" : `/fr${p.route}`;
    const arPath = p.route === "/" ? "/ar" : `/ar${p.route}`;
    const languages: Record<string, string> = { fr: abs(frPath), "x-default": abs(p.route) };
    if (p.ar) languages.ar = abs(arPath);
    entries.push({ path: p.route, priority: p.priority, freq: p.freq, alternates: languages });
    entries.push({ path: frPath, priority: Math.round(p.priority * 0.95 * 100) / 100, freq: p.freq, alternates: languages });
    if (p.ar) {
      entries.push({ path: arPath, priority: Math.round(p.priority * 0.9 * 100) / 100, freq: p.freq, alternates: languages });
    }
  }

  entries.push(...FR_ONLY, ...BARE_ONLY, ...AR_INDEXED);

  // Blog articles and category archives canonicalise to the bare URL.
  for (const a of ARTICLES) {
    entries.push({ path: `/blog/${a.slug}`, priority: 0.75, freq: "monthly" });
  }
  const categories = ["business", "ecom", "etudiants", "jobs", "bct", "us-compliance", "banque", "diaspora", "cas"];
  for (const c of categories) {
    entries.push({ path: `/blog/categorie/${c}`, priority: 0.6, freq: "weekly" });
  }

  /*
   * lastModified is emitted ONLY where a real date exists (blog articles).
   * A `new Date()` on every URL told Google the whole site changed on every
   * fetch, which teaches it to ignore lastmod entirely.
   */
  const articleDates = new Map(ARTICLES.map((a) => [`/blog/${a.slug}`, a.publishedAt]));

  return entries.map((p) => {
    const lastMod = articleDates.get(p.path);
    return {
      url: abs(p.path),
      ...(lastMod ? { lastModified: new Date(lastMod) } : {}),
      changeFrequency: (p.freq ?? "monthly") as Freq,
      priority: p.priority,
      ...(p.alternates ? { alternates: { languages: p.alternates } } : {}),
    };
  });
}
