#!/usr/bin/env node
/**
 * gen-tn-stubs.mjs
 * Mirrors every /ar/** page.tsx route into /tn/<route>/page.tsx as a
 * TounsiStub server component, so the language switcher never 404s.
 * Never overwrites existing files under src/app/tn/.
 */
import { readdirSync, statSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = "/Users/CEO/Claude/noho-tn";
const AR_DIR = path.join(ROOT, "src/app/ar");
const TN_DIR = path.join(ROOT, "src/app/tn");
const CANONICAL_BASE = "https://nohomailboxtunis.com/tn";

// Routes that get real derja pages from other work — never stub these.
const EXCLUDED_ROUTES = new Set([
  "virtual-mailbox",
  "tarifs",
  "business",
  "contact",
  "appel",
]);

/** Recursively collect page.tsx files under dir, returning route strings relative to AR_DIR. */
function collectRoutes(dir, prefix = "") {
  const routes = [];
  for (const entry of readdirSync(dir)) {
    if (entry === "_components") continue;
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      routes.push(...collectRoutes(full, prefix ? `${prefix}/${entry}` : entry));
    } else if (entry === "page.tsx" && prefix !== "") {
      // prefix === "" would be ar/page.tsx itself — excluded.
      routes.push(prefix);
    }
  }
  return routes;
}

// Known slugs/words that need accents or special casing in titles.
const WORD_MAP = {
  a: "à",
  "a-propos": "À propos",
  faq: "FAQ",
  llc: "LLC",
  sarl: "SARL",
  suarl: "SUARL",
  us: "US",
  usa: "USA",
  tn: "TN",
  tnd: "TND",
  usd: "USD",
  eu: "EU",
  ein: "EIN",
  itin: "ITIN",
  cin: "CIN",
  kyc: "KYC",
  ssn: "SSN",
  bct: "BCT",
  mae: "MAE",
  dgi: "DGI",
  ide: "IDE",
  hts: "HTS",
  tva: "TVA",
  roi: "ROI",
  b2b: "B2B",
  oss: "OSS",
  diy: "DIY",
  vs: "vs",
  e2: "E-2",
  w2: "W-2",
  w7: "W-7",
  w9: "W-9",
  w8ben: "W-8BEN",
  ecom: "E-com",
  saas: "SaaS",
  smllc: "SMLLC",
  fatca: "FATCA",
  crs: "CRS",
  pdf: "PDF",
  etudiants: "Étudiants",
  etudiant: "Étudiant",
  temoignages: "Témoignages",
  conformite: "Conformité",
  penalite: "Pénalité",
  delais: "Délais",
  reels: "Réels",
  procedure: "Procédure",
  detaillee: "Détaillée",
  etape: "Étape",
  etat: "État",
  etats: "États",
  fiscalite: "Fiscalité",
  residence: "Résidence",
  propriete: "Propriété",
  honnete: "Honnête",
  actualise: "Actualisé",
  ferme: "Fermé",
  decembre: "Décembre",
  evolution: "Évolution",
  complete: "Complète",
  valeur: "Valeur",
  reelle: "Réelle",
  annee: "Année",
  developpeur: "Développeur",
  americaine: "Américaine",
  refuse: "Refusé",
  te: "te",
  ne: "ne",
  pas: "pas",
  par: "par",
  de: "de",
  du: "du",
  la: "la",
  le: "le",
  les: "les",
  en: "en",
  et: "et",
  sans: "sans",
  vers: "vers",
  pour: "pour",
  depuis: "depuis",
  avec: "avec",
  sur: "sur",
  dit: "dit",
};

/** "a-propos" → "À propos"; "form-5472-penalite" → "Form 5472 Pénalité". */
function slugToTitle(slug) {
  if (WORD_MAP[slug] && /^[A-ZÀ]/.test(WORD_MAP[slug])) return WORD_MAP[slug];
  const words = slug.split("-").map((w) => {
    if (WORD_MAP[w]) return WORD_MAP[w];
    if (/^\d/.test(w)) return w; // numbers stay as-is
    return w.charAt(0).toUpperCase() + w.slice(1);
  });
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
import TounsiStub from "@/app/tn/_components/TounsiStub";

export const metadata: Metadata = {
  title: "${escapeStr(title)}",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "${canonical}",
  },
};

export default function Page() {
  return <TounsiStub frHref="${frHref}" title="${escapeStr(title)}" />;
}
`;
}

const routes = collectRoutes(AR_DIR).sort();
let generated = 0;
const skippedExcluded = [];
const skippedExisting = [];

for (const route of routes) {
  if (EXCLUDED_ROUTES.has(route)) {
    skippedExcluded.push(route);
    continue;
  }
  const outDir = path.join(TN_DIR, route);
  const outFile = path.join(outDir, "page.tsx");
  if (existsSync(outFile)) {
    skippedExisting.push(route);
    continue;
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, pageSource(route, routeTitle(route)), "utf8");
  generated++;
}

console.log(`Generated ${generated} stub page(s) under src/app/tn/`);
console.log(
  `Skipped (excluded routes): ${skippedExcluded.length}${skippedExcluded.length ? " — " + skippedExcluded.join(", ") : ""}`
);
console.log(
  `Skipped (already exist): ${skippedExisting.length}${skippedExisting.length ? " — " + skippedExisting.join(", ") : ""}`
);
