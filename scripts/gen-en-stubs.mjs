#!/usr/bin/env node
/**
 * gen-en-stubs.mjs
 * Mirrors every /tn/** page.tsx route into /en/<route>/page.tsx as an
 * EnglishStub server component, so the locale switcher never 404s.
 * EN slugs stay identical to FR slugs — only the copy is English.
 * Never overwrites existing files under src/app/en/.
 */
import { readdirSync, statSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = "/Users/CEO/Claude/noho-tn";
const TN_DIR = path.join(ROOT, "src/app/tn");
const EN_DIR = path.join(ROOT, "src/app/en");
const CANONICAL_BASE = "https://nohomailboxtunis.com/en";

// Routes that get real English pages from other work — never stub these.
const EXCLUDED_ROUTES = new Set([
  "virtual-mailbox",
  "business",
  "tarifs",
  "contact",
  "appel",
  "shipping",
]);

/** Recursively collect page.tsx files under dir, returning route strings relative to TN_DIR. */
function collectRoutes(dir, prefix = "") {
  const routes = [];
  for (const entry of readdirSync(dir)) {
    if (entry === "_components") continue;
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      routes.push(...collectRoutes(full, prefix ? `${prefix}/${entry}` : entry));
    } else if (entry === "page.tsx" && prefix !== "") {
      // prefix === "" would be tn/page.tsx itself — the /en root already exists.
      routes.push(prefix);
    }
  }
  return routes;
}

// Full-slug overrides (checked first) for clean English titles.
const SLUG_MAP = {
  "a-propos": "About NOHO",
  faq: "FAQ",
  etudiants: "Students",
  temoignages: "Testimonials",
  outils: "Tools",
  templates: "Templates",
  diagnostic: "Diagnostic",
  notary: "Notary",
  partners: "Partners",
  privacy: "Privacy",
  security: "Security",
  services: "Services",
  terms: "Terms",
  track: "Track",
  delivery: "Delivery",
  retainer: "Retainer",
  blog: "Blog",
  agent: "Agent",
  jobs: "Jobs",
  student: "Student",
  ecom: "E-com",
  "suivi-mensuel": "Suivi Mensuel",
  "bundle-vs-diy": "Bundle vs DIY",
  "form-5472": "Form 5472",
  "residence-fiscale": "Tax residency",
  "roi-propriete-us": "US property ROI",
  "stripe-fees": "Stripe fees",
  "taxes-us-etat": "US taxes by state",
  "tnd-usd": "TND to USD",
  "banques-us": "US banks",
  "cross-border": "Cross-border",
  "etats-llc": "LLC states",
  "ein-status": "EIN status",
  "form-1583": "Form 1583",
  "hts-code": "HTS code",
  "llc-status": "LLC status",
  "form-5472-penalite": "Form 5472 penalty",
  "plafond-carte-technologique": "Carte technologique cap",
};

// Per-word map: acronym casing + common French slug words → English.
const WORD_MAP = {
  llc: "LLC", sarl: "SARL", suarl: "SUARL", us: "US", usa: "USA", tn: "TN",
  tnd: "TND", usd: "USD", eu: "EU", ein: "EIN", itin: "ITIN", cin: "CIN",
  kyc: "KYC", ssn: "SSN", bct: "BCT", mae: "MAE", dgi: "DGI", ide: "IDE",
  hts: "HTS", tva: "VAT", roi: "ROI", b2b: "B2B", oss: "OSS", diy: "DIY",
  vs: "vs", e2: "E-2", w2: "W-2", w7: "W-7", w9: "W-9", w8ben: "W-8BEN",
  ecom: "e-com", saas: "SaaS", smllc: "SMLLC", fatca: "FATCA", crs: "CRS",
  pdf: "PDF", faq: "FAQ", iv: "IV", caa: "CAA", r2: "R2", noho: "NOHO",
  khiari: "Khiari", ebay: "eBay", youtube: "YouTube", adsense: "AdSense",
  linkedin: "LinkedIn", github: "GitHub", lemonsqueezy: "Lemon Squeezy",
  taxjar: "TaxJar",
  // French → English
  tunisien: "Tunisian", tunisienne: "Tunisian", tunisiens: "Tunisians",
  tunisie: "Tunisia", tunis: "Tunis", francais: "French",
  americaine: "American", etudiants: "Students", etudiant: "Student",
  temoignages: "Testimonials", conformite: "Compliance", outils: "Tools",
  calculateurs: "Calculators", comparateurs: "Comparisons",
  penalite: "penalty", delais: "Timelines", reels: "real", reel: "real",
  reelle: "real", procedure: "procedure", detaillee: "detailed",
  etape: "step", etat: "state", etats: "states", fiscalite: "taxation",
  fiscal: "tax", fiscale: "tax", residence: "residency",
  propriete: "property", honnete: "honest", actualise: "updated",
  ferme: "closed", fermer: "Closing", ouvrir: "Opening",
  passer: "Switching", choisir: "Choosing", former: "forming",
  decembre: "December", evolution: "evolution", complete: "complete",
  complet: "complete", valeur: "value", annee: "year",
  developpeur: "developer", refuse: "refused", compte: "account",
  comptable: "accountant", fiscaliste: "tax advisor", acceptes: "accepted",
  renforce: "reinforced", partie: "Part", fondateur: "founder",
  arrivee: "arrival", jours: "days", premier: "First",
  salarie: "employee", piege: "trap", rappel: "reminder",
  traite: "Treaty", retour: "return", investisseur: "investor",
  exporteurs: "exporters", contourner: "bypassing",
  dissoudre: "dissolving", proprement: "cleanly", plafond: "cap",
  perso: "personal", cas: "Case", pratique: "study", pays: "countries",
  nouveau: "New", mexique: "Mexico", inverse: "reverse",
  statut: "status", elements: "elements", ligne: "line",
  integration: "integration", technique: "technical", quand: "When",
  dit: "says", te: "", non: "no", ne: "not", pas: "",
  banques: "banks", dossier: "file", carte: "Carte",
  technologique: "Technologique",
  // stopwords → lowercase English
  de: "of", du: "of", la: "the", le: "the", les: "the", et: "and",
  ou: "or", sans: "without", vers: "to", pour: "for", depuis: "from",
  avec: "with", sur: "on", par: "by", en: "in",
};

/** "residence-fiscale" → "Tax residency"; "form-5472-penalite" → "Form 5472 penalty". */
function slugToTitle(slug) {
  if (SLUG_MAP[slug]) return SLUG_MAP[slug];
  const words = slug
    .split("-")
    .map((w) => {
      if (w in WORD_MAP) return WORD_MAP[w];
      if (/^\d/.test(w)) return w; // numbers stay as-is
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .filter((w) => w !== "");
  const title = words.join(" ");
  // Ensure the title starts with an uppercase letter even if the first word is a stopword.
  return title.charAt(0).toUpperCase() + title.slice(1);
}

/** Human title for a route: derived from its last segment. */
function routeTitle(route) {
  const last = route.split("/").pop();
  return slugToTitle(last);
}

function escapeStr(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function pageSource(route, title) {
  const frHref = `/${route}`;
  const canonical = `${CANONICAL_BASE}/${route}`;
  return `import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "${escapeStr(title)}",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "${canonical}",
  },
};

export default function Page() {
  return <EnglishStub frHref="${frHref}" title="${escapeStr(title)}" />;
}
`;
}

const routes = collectRoutes(TN_DIR).sort();
let generated = 0;
const skippedExcluded = [];
const skippedExisting = [];

for (const route of routes) {
  if (EXCLUDED_ROUTES.has(route)) {
    skippedExcluded.push(route);
    continue;
  }
  const outDir = path.join(EN_DIR, route);
  const outFile = path.join(outDir, "page.tsx");
  if (existsSync(outFile)) {
    skippedExisting.push(route);
    continue;
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, pageSource(route, routeTitle(route)), "utf8");
  generated++;
}

console.log(`Generated ${generated} stub page(s) under src/app/en/`);
console.log(
  `Skipped (excluded routes): ${skippedExcluded.length}${skippedExcluded.length ? " — " + skippedExcluded.join(", ") : ""}`
);
console.log(
  `Skipped (already exist): ${skippedExisting.length}${skippedExisting.length ? " — " + skippedExisting.join(", ") : ""}`
);
