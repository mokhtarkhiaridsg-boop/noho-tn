"use client";

import Link from "next/link";
import { AiHeart, AiSparkle } from "@/components/AnimatedIcons";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   BRANDED SVG ICONS — ports verbatim from nohomailbox.org
   Light #EBF2FA · Blue #337485 · Ink #1A1714
   ───────────────────────────────────────────────────────────── */

const IconLLC = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="8" width="36" height="32" rx="5" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M13 20 H35 M13 27 H28" stroke="#337485" strokeWidth="2" strokeLinecap="round" />
    <circle cx="36" cy="14" r="7" fill="#337485" stroke="#1A1714" strokeWidth="1.5" />
    <path d="M33 14 L35.5 16.5 L39 11.5" stroke="#EBF2FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconEIN = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="8" y="6" width="32" height="36" rx="4" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <rect x="12" y="12" width="24" height="6" rx="2" fill="#337485" opacity="0.25" />
    <text x="24" y="33" textAnchor="middle" fill="#337485" fontSize="13" fontWeight="bold">EIN</text>
    <path d="M12 22 H36" stroke="#1A1714" strokeWidth="1" opacity="0.15" />
  </svg>
);

const IconFiling = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="10" width="36" height="30" rx="4" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <rect x="10" y="4" width="12" height="10" rx="3" fill="#337485" stroke="#1A1714" strokeWidth="1.5" />
    <rect x="26" y="4" width="12" height="10" rx="3" fill="#337485" stroke="#1A1714" strokeWidth="1.5" />
    <path d="M12 20 H36 M12 26 H30 M12 32 H34" stroke="#1A1714" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
  </svg>
);

const IconBrandBook = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M10 6 C10 4 12 2 14 2 L38 2 C40 2 42 4 42 6 L42 42 C42 44 40 46 38 46 L14 46 C12 46 10 44 10 42 Z" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M10 6 L10 42" stroke="#337485" strokeWidth="4" />
    <circle cx="26" cy="18" r="6" fill="#337485" opacity="0.6" />
    <rect x="18" y="28" width="18" height="3" rx="1.5" fill="#337485" opacity="0.35" />
    <rect x="20" y="34" width="14" height="3" rx="1.5" fill="#337485" opacity="0.2" />
  </svg>
);

const IconBrandAssets = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="2" y="8" width="28" height="22" rx="4" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <circle cx="13" cy="16" r="4" fill="#337485" opacity="0.5" />
    <path d="M4 26 L12 20 L19 25 L26 18 L29 22" stroke="#337485" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <rect x="20" y="20" width="26" height="22" rx="4" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M26 28 H40 M26 33 H36 M26 38 H34" stroke="#337485" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
  </svg>
);

const IconWebsite = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="8" width="40" height="28" rx="4" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M4 15 H44" stroke="#1A1714" strokeWidth="1.5" />
    <circle cx="10" cy="11.5" r="2" fill="#337485" />
    <circle cx="16" cy="11.5" r="2" fill="#337485" opacity="0.5" />
    <circle cx="22" cy="11.5" r="2" fill="#337485" opacity="0.25" />
    <rect x="8" y="18" width="14" height="8" rx="2" fill="#337485" opacity="0.2" />
    <path d="M26 19 H40 M26 23 H36 M26 27 H32" stroke="#337485" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <path d="M20 36 L24 40 L28 36" stroke="#1A1714" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSEO = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="20" cy="20" r="13" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M30 30 L42 42" stroke="#1A1714" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M14 20 L20 14 L26 20" stroke="#337485" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 14 L20 27" stroke="#337485" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconSocial = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="6" width="36" height="36" rx="10" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <circle cx="16" cy="18" r="4" fill="#337485" />
    <circle cx="32" cy="18" r="4" fill="#337485" opacity="0.55" />
    <circle cx="24" cy="34" r="4" fill="#337485" opacity="0.35" />
    <path d="M19.5 20 L29 20 M30 21.5 L26 31 M20 21.5 L22 31" stroke="#1A1714" strokeWidth="1.5" />
  </svg>
);

const IconGoogle = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="18" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M24 12 A12 12 0 1 0 36 24 L24 24" fill="#337485" stroke="#1A1714" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="5" fill="#EBF2FA" stroke="#1A1714" strokeWidth="1.5" />
    <path d="M17 9 L17 5 M31 9 L31 5 M11 17 L7 17 M11 31 L7 31" stroke="#337485" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
  </svg>
);

const IconMail12 = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="12" width="40" height="26" rx="5" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M6 14 L24 26 L42 14" stroke="#1A1714" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="38" cy="12" r="7" fill="#337485" stroke="#1A1714" strokeWidth="1.5" />
    <text x="38" y="15.5" textAnchor="middle" fill="#EBF2FA" fontSize="9" fontWeight="bold">12</text>
  </svg>
);

/* ── Suivi mensuel icons ───────────────────────────────────── */

const IconTarget = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="20" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <circle cx="24" cy="24" r="13" stroke="#337485" strokeWidth="2" opacity="0.4" />
    <circle cx="24" cy="24" r="6" fill="#337485" />
    <path d="M36 12 L28 20 M36 12 L36 18 M36 12 L30 12" stroke="#1A1714" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPalette = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 4 C12 4 4 14 4 24 C4 34 12 44 24 44 C26 44 28 42 28 40 C28 39 27.5 38 27 37.5 C26.5 37 26 36 26 35 C26 33 28 31 30 31 L34 31 C39.5 31 44 26.5 44 21 C44 11.6 35 4 24 4Z" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <circle cx="14" cy="20" r="3" fill="#337485" />
    <circle cx="22" cy="12" r="3" fill="#337485" opacity="0.7" />
    <circle cx="32" cy="14" r="3" fill="#337485" opacity="0.45" />
    <circle cx="14" cy="30" r="3" fill="#1A1714" opacity="0.3" />
  </svg>
);

const IconMegaphone = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M36 8 L36 40 L14 30 L14 18 Z" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" strokeLinejoin="round" />
    <rect x="8" y="18" width="6" height="12" rx="3" fill="#337485" stroke="#1A1714" strokeWidth="2" />
    <path d="M14 30 L16 40 L20 40 L18 30" fill="#337485" stroke="#1A1714" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="40" cy="10" r="3" fill="#337485" opacity="0.4" />
    <circle cx="42" cy="20" r="2" fill="#337485" opacity="0.25" />
  </svg>
);

const IconPrinter = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="18" width="36" height="18" rx="3" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M12 18 L12 6 L36 6 L36 18" stroke="#1A1714" strokeWidth="2" />
    <rect x="12" y="26" width="24" height="16" rx="2" fill="white" stroke="#1A1714" strokeWidth="1.5" />
    <path d="M16 31 H32 M16 35 H28 M16 39 H24" stroke="#337485" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <circle cx="36" cy="22" r="2.5" fill="#337485" />
  </svg>
);

const IconChart = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="6" width="36" height="36" rx="4" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <rect x="12" y="26" width="5" height="10" rx="1" fill="#337485" opacity="0.35" />
    <rect x="21" y="18" width="5" height="18" rx="1" fill="#337485" opacity="0.6" />
    <rect x="30" y="12" width="5" height="24" rx="1" fill="#337485" />
    <path d="M12 16 L20 20 L28 12 L36 8" stroke="#1A1714" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
  </svg>
);

const IconRefresh = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="18" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M16 18 A10 10 0 0 1 34 20" stroke="#337485" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 30 A10 10 0 0 1 14 28" stroke="#337485" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M34 16 L34 22 L28 22" stroke="#337485" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 26 L14 32 L20 32" stroke="#337485" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Category section icons ────────────────────────────────── */

const IconFormation = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <rect x="8" y="12" width="40" height="32" rx="5" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2.5" />
    <path d="M16 24 H40 M16 30 H32 M16 36 H28" stroke="#337485" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 8 L44 12 L40 16" stroke="#337485" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBrandCircle = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <circle cx="28" cy="28" r="22" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2.5" />
    <path d="M20 22 L28 16 L36 22 L36 34 L28 40 L20 34 Z" fill="#337485" opacity="0.2" stroke="#337485" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="28" cy="28" r="5" fill="#337485" />
  </svg>
);

const IconCode = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <rect x="6" y="10" width="44" height="32" rx="5" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2.5" />
    <path d="M6 18 H50" stroke="#1A1714" strokeWidth="2" />
    <circle cx="13" cy="14" r="2.5" fill="#337485" />
    <circle cx="20" cy="14" r="2.5" fill="#337485" opacity="0.5" />
    <path d="M18 28 L14 32 L18 36" stroke="#337485" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 28 L38 32 L34 36" stroke="#337485" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 26 L24 38" stroke="#337485" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconShare = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <rect x="6" y="6" width="44" height="44" rx="12" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2.5" />
    <circle cx="28" cy="18" r="5" fill="#337485" />
    <circle cx="16" cy="36" r="5" fill="#337485" opacity="0.55" />
    <circle cx="40" cy="36" r="5" fill="#337485" opacity="0.35" />
    <path d="M26 22 L19 32 M30 22 L37 32" stroke="#1A1714" strokeWidth="1.5" />
  </svg>
);

const IconPrintLarge = ({ className = "w-14 h-14" }: { className?: string }) => (
  <svg viewBox="0 0 56 56" className={className} fill="none">
    <rect x="6" y="20" width="44" height="22" rx="4" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2.5" />
    <path d="M14 20 L14 10 L42 10 L42 20" stroke="#1A1714" strokeWidth="2.5" />
    <rect x="14" y="28" width="28" height="18" rx="3" fill="white" stroke="#1A1714" strokeWidth="1.5" />
    <circle cx="42" cy="24" r="3" fill="#337485" />
    <path d="M18 33 H38 M18 37 H34 M18 41 H30" stroke="#337485" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

/* ── How-It-Works icons ────────────────────────────────────── */

const IconQuestion = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 mx-auto mb-4" fill="none">
    <circle cx="24" cy="24" r="20" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M17 24 Q17 16 24 16 Q31 16 31 21 Q31 26 24 26 L24 30" stroke="#337485" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="24" cy="36" r="2" fill="#337485" />
  </svg>
);

const IconChecklist = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 mx-auto mb-4" fill="none">
    <rect x="8" y="8" width="32" height="32" rx="8" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" />
    <path d="M16 20 L21 25 L32 14" stroke="#337485" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 30 L21 35 L32 24" stroke="#337485" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
  </svg>
);

const IconRocket = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 mx-auto mb-4" fill="none">
    <path d="M24 6 C24 6 16 14 16 28 L20 32 L24 30 L28 32 L32 28 C32 14 24 6 24 6Z" fill="#EBF2FA" stroke="#1A1714" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="24" cy="20" r="4" fill="#337485" />
    <path d="M16 28 L10 30 L14 34 L16 28Z" fill="#337485" opacity="0.3" stroke="#1A1714" strokeWidth="1.5" />
    <path d="M32 28 L38 30 L34 34 L32 28Z" fill="#337485" opacity="0.3" stroke="#1A1714" strokeWidth="1.5" />
    <path d="M20 36 L24 42 L28 36" stroke="#337485" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Data ──────────────────────────────────────────────────── */

const packageServices = [
  { icon: <IconLLC />, label: "Création société US (LLC Wyoming/Delaware/NM) ou TN (SARL/SUARL via cabinet KHIARI)", cat: "Société" },
  { icon: <IconEIN />, label: "EIN auprès de l'IRS (ou matricule fiscal TN), démarches complètes", cat: "Société" },
  { icon: <IconFiling />, label: "Tous les dépôts d'incorporation, de conformité et règlementaires", cat: "Société" },
  { icon: <IconBrandBook />, label: "Livre de marque sur mesure — logo, palette de couleurs, typographie", cat: "Identité" },
  { icon: <IconBrandAssets />, label: "Assets de marque prêts pour web, social, print et packaging", cat: "Identité" },
  { icon: <IconWebsite />, label: "Site web mobile-first sur ton domaine, hébergement inclus", cat: "Digital" },
  { icon: <IconSEO />, label: "Fondations SEO — référencement local, indexation Google, méta", cat: "Digital" },
  { icon: <IconSocial />, label: "Profils sociaux créés, marqués et optimisés", cat: "Digital" },
  { icon: <IconGoogle />, label: "Google Business Profile vérifié pour dominer le local", cat: "Digital" },
  { icon: <IconMail12 />, label: "12 mois de réception, scan et réexpédition de courrier professionnel", cat: "Courrier" },
];

const brandMgmt = [
  { icon: <IconPalette />, title: "Gestion complète du site", desc: "On gère ton site de bout en bout — mises à jour de contenu, rafraîchissements design, performance, uptime — tu ne touches plus au back-office." },
  { icon: <IconPrinter />, title: "Print management", desc: "Cartes de visite, flyers, signalétique, packaging, menus, étiquettes — conçus, imprimés et rafraîchis selon ton calendrier." },
  { icon: <IconRefresh />, title: "Adaptation saisonnière", desc: "Ta marque reste actuelle. Ramadan, Eid, rentrée, fin d'année — on adapte visuels et offres automatiquement." },
  { icon: <IconMegaphone />, title: "Stratégie marketing exécutée", desc: "On ne se contente pas d'écrire le plan — on l'exécute. Campagnes, posts sociaux, emails, promos, lancements, tout chez nous." },
  { icon: <IconChart />, title: "Rapport de performance", desc: "Rapports mensuels sur le trafic, l'engagement et les conversions — tu sais toujours ce qui marche et ce qui suit." },
  { icon: <IconTarget />, title: "Audit cohérence de marque", desc: "Chaque point de contact revu contre ton système de marque pour garder le look, la voix et le message serrés partout." },
];

const serviceMenu = {
  "Business & juridique": [
    "Création LLC / Corp US", "Création SARL / SUARL TN", "EIN & matricule fiscal", "Plan d'affaires rédigé",
    "Conseil financier", "Préparation documents juridiques", "Rédaction de contrats", "Licences business",
    "Dépôt de marque (USPTO ou INNORPI)", "Assistance virtuelle",
  ],
  "Identité & design": [
    "Création de logo", "Charte graphique", "Stratégie de marque", "Design carte de visite",
    "Papier en-tête & papeterie", "Design packaging", "Design étiquettes", "Design flyer & brochure",
    "Banner & signalétique", "Design présentation",
  ],
  "Web & digital": [
    "Design de site web", "Développement web", "Landing page design", "Setup e-commerce",
    "Domaine & hébergement", "Maintenance de site", "Design UI app mobile", "Setup WordPress",
    "Optimisation vitesse site", "Audit accessibilité web",
  ],
  "Marketing & SEO": [
    "Setup & optimisation SEO", "Google Business Profile", "Setup réseaux sociaux", "Gestion réseaux sociaux",
    "Setup email marketing", "Stratégie de contenu", "Setup Google Ads", "SEO local & citations",
    "Outreach influenceurs", "Stratégie marketing",
  ],
  "Contenu & média": [
    "Copywriting FR/EN", "Rédaction blog", "Descriptions produits", "Montage vidéo",
    "Vidéos explicatives", "Retouche photo", "Setup podcast", "Voiceover",
    "Contenu réseaux sociaux", "Rédaction communiqué presse",
  ],
};

const filterTabs = ["Tous", "Société", "Identité", "Digital", "Courrier"];
const serviceCategories = Object.keys(serviceMenu);

const CAT_TILES = [
  { key: "Business & juridique",   sub: "Société · EIN · Conformité",       Icon: IconFormation,   from: 700 },
  { key: "Identité & design",      sub: "Logo · Livre · Assets",            Icon: IconBrandCircle, from: 800 },
  { key: "Web & digital",          sub: "Sites · Apps · SEO",                Icon: IconCode,        from: 1200 },
  { key: "Marketing & SEO",        sub: "Local · Social · Ads",              Icon: IconShare,       from: 600 },
  { key: "Contenu & média",        sub: "Copy · Vidéo · Photo",              Icon: IconPrintLarge,  from: 400 },
  { key: "Courrier & adresse",     sub: "Boîte virtuelle · Scan",            Icon: IconMail12,      from: 100 },
];

const FEATURED_GIGS: Array<{
  title: string;
  cat: string;
  delivery: string;
  rating: number;
  reviews: number;
  from: number;
  Icon: (p: { className?: string }) => React.ReactElement;
  bullets: string[];
}> = [
  { title: "Création société US ou TN — bout en bout",                cat: "Business & juridique", delivery: "5-7 jours", rating: 5.0, reviews: 87,  from: 700,  Icon: IconLLC,       bullets: ["Dépôt étatique ou RCS TN", "EIN inclus", "Operating agreement"] },
  { title: "Livre de marque — logo, couleurs, typographie",            cat: "Identité & design",    delivery: "10 jours",  rating: 4.9, reviews: 64,  from: 800,  Icon: IconBrandBook, bullets: ["Logo + variantes", "Système typographique", "Palette de couleurs"] },
  { title: "Site web mobile-first avec hébergement",                   cat: "Web & digital",        delivery: "2 semaines", rating: 5.0, reviews: 52,  from: 1200, Icon: IconWebsite,   bullets: ["Domaine + hébergement", "5 sections", "Bases SEO"] },
  { title: "SEO local + Google Business Profile",                      cat: "Marketing & SEO",      delivery: "3-5 jours",  rating: 4.9, reviews: 41,  from: 600,  Icon: IconSEO,       bullets: ["GMB vérifié", "Méta + schema", "Première page ciblée"] },
  { title: "Adresse US réelle + 12 mois de courrier",                  cat: "Courrier & adresse",   delivery: "Le jour même", rating: 5.0, reviews: 312, from: 100,  Icon: IconMail12,    bullets: ["Adresse NoHo réelle", "Scan + réexpédition", "Retrait 6j/7"] },
  { title: "Présence sociale : profils, identité, premiers posts",     cat: "Marketing & SEO",      delivery: "5 jours",    rating: 4.8, reviews: 38,  from: 500,  Icon: IconSocial,    bullets: ["Toutes les grandes plateformes", "Covers brandées", "Contenu de démarrage"] },
];

/* ── Atoms ──────────────────────────────────────────────────── */
function StarRow({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold" style={{ color: "#2D100F" }}>
      <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="#F5A623" aria-hidden="true">
        <path d="M10 1.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1L10 15.4l-5.4 2.9 1-6.1L1.2 7.9l6.1-.9z" />
      </svg>
      <span className="tabular-nums">{rating.toFixed(1)}</span>
      <span className="font-normal" style={{ color: "#7A6B57" }}>({reviews})</span>
    </span>
  );
}

function NohoAvatar({ size = 36 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-extrabold"
      style={{
        width: size, height: size, background: "#2D100F", color: "#F7E6C2",
        fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
        fontSize: Math.round(size * 0.42), letterSpacing: "-0.02em",
        boxShadow: "0 0 0 2px #FFFFFF, 0 0 0 3px #F0DBA9",
      }}
      aria-hidden="true"
    >
      N
    </span>
  );
}

function SearchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="9" r="6" />
      <path d="m18 18-4.5-4.5" />
    </svg>
  );
}

export default function BusinessPage() {
  const [filter, setFilter] = useState("Tous");
  const [activeServiceCat, setActiveServiceCat] = useState(serviceCategories[0]);
  const [query, setQuery] = useState("");
  const filtered = filter === "Tous" ? packageServices : packageServices.filter((s) => s.cat === filter);

  const searchResults = query.trim().length > 0
    ? Object.entries(serviceMenu).flatMap(([cat, items]) =>
        items
          .filter((it) => it.toLowerCase().includes(query.trim().toLowerCase()))
          .map((it) => ({ cat, label: it }))
      ).slice(0, 8)
    : [];

  return (
    <div className="perspective-container" style={{ background: "#FFFDF8" }}>
      {/* ─── HERO ─── */}
      <section
        className="relative px-5 sm:px-6 pt-12 pb-14 sm:pt-20 sm:pb-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at top, #F7E6C2 0%, #F0DBA9 45%, #E8DDD0 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#2D100F 1px, transparent 1px)", backgroundSize: "22px 22px" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-5 text-[10.5px] font-bold uppercase tracking-[0.14em]"
            style={{ background: "rgba(231,0,19,0.10)", color: "#B11D26", border: "1px solid rgba(231,0,19,0.28)" }}
          >
            <AiHeart className="w-3 h-3" />
            Équipe familiale à NoHo · depuis 2017
          </div>

          <h1
            className="font-extrabold tracking-tight"
            style={{
              fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif",
              color: "#2D100F",
              fontSize: "clamp(2rem, 6vw, 3.75rem)",
              lineHeight: 1.05,
            }}
          >
            Le bon service pour ton{" "}
            <span
              style={{
                fontFamily: "var(--font-pacifico), 'Pacifico', cursive",
                color: "#337485",
                fontWeight: 400,
              }}
            >
              business
            </span>
          </h1>

          <p
            className="mt-3 sm:mt-4 max-w-xl mx-auto text-[14.5px] sm:text-base"
            style={{ color: "#5C4540" }}
          >
            Vraie équipe locale, pas un marketplace. Société (TN ou US),
            identité, sites, courrier & plus — chez nous, facturé une fois.
          </p>

          {/* Search bar */}
          <div className="mt-6 sm:mt-8 mx-auto max-w-2xl">
            <div
              className="relative flex items-center rounded-full overflow-hidden bg-white"
              style={{ border: "1px solid #E8DDD0", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 14px 36px rgba(45,16,15,0.10)" }}
            >
              <span className="absolute left-4 sm:left-5 pointer-events-none" style={{ color: "#7A6B57" }}>
                <SearchIcon />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Essaye « LLC », « logo », « site », « courrier »…"
                className="flex-1 pl-11 sm:pl-12 pr-2 sm:pr-3 py-3 sm:py-4 text-[15px] sm:text-base bg-transparent focus:outline-none"
                style={{ color: "#2D100F", fontFamily: "var(--font-baloo), system-ui, sans-serif" }}
                aria-label="Rechercher un service"
              />
              <Link
                href="/contact"
                className="hidden sm:inline-flex shrink-0 items-center gap-2 px-5 py-3 mr-1.5 rounded-full font-bold text-[13px] uppercase tracking-wider text-white transition-colors"
                style={{ background: "#2D100F" }}
              >
                Rechercher
              </Link>
            </div>

            {/* Live result drop */}
            {searchResults.length > 0 && (
              <ul
                className="mt-2 text-left rounded-2xl bg-white overflow-hidden"
                style={{ border: "1px solid #E8DDD0", boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 16px 40px rgba(45,16,15,0.10)" }}
              >
                {searchResults.map((r) => (
                  <li key={`${r.cat}-${r.label}`}>
                    <Link
                      href="/contact"
                      className="flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-[#FFF9F3]"
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#337485" }} />
                        <span className="font-semibold truncate" style={{ color: "#2D100F" }}>{r.label}</span>
                      </span>
                      <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] shrink-0" style={{ color: "#7A6B57" }}>
                        {r.cat}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* Popular pills */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5">
              <span className="text-[11px] font-bold uppercase tracking-wider self-center" style={{ color: "#7A6B57" }}>
                Populaire :
              </span>
              {["Création LLC", "Logo", "Site web", "Google Business", "Boîte virtuelle"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setQuery(p.split(" ")[0])}
                  className="text-[12px] font-semibold px-3 py-1.5 rounded-full transition-colors hover:bg-[#FFFDF8]"
                  style={{ background: "rgba(255,255,255,0.6)", color: "#2D100F", border: "1px solid #E8DDD0" }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-8 sm:mt-10 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px]" style={{ color: "#5C4540" }}>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
              500+ services livrés
            </span>
            <span className="inline-flex items-center gap-1.5">
              <StarRow rating={4.9} reviews={312} />
              avis locaux
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#337485" }} />
              Une équipe, une facture
            </span>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY TILES ─── */}
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#FFFDF8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 flex-wrap mb-6 sm:mb-8">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif",
                color: "#2D100F",
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
              }}
            >
              Parcourir par catégorie
            </h2>
            <span
              className="text-[16px]"
              style={{ fontFamily: "var(--font-pacifico), 'Pacifico', cursive", color: "#337485" }}
            >
              choisis le bon coup de main
            </span>
            <span className="text-[12px] ml-auto self-end" style={{ color: "#7A6B57" }}>
              {Object.values(serviceMenu).flat().length}+ services · livrés depuis NoHo
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {CAT_TILES.map((t) => (
              <Link
                key={t.key}
                href="#menu"
                onClick={() => {
                  const k = t.key === "Courrier & adresse" ? "Business & juridique" : t.key;
                  if (serviceCategories.includes(k)) setActiveServiceCat(k);
                }}
                className="group flex flex-col items-center text-center rounded-2xl p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8DDD0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 22px rgba(45,16,15,0.06)",
                }}
              >
                <span
                  className="mb-3 inline-flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                  style={{ width: 64, height: 64, background: "#F7E6C2" }}
                >
                  <t.Icon className="w-9 h-9" />
                </span>
                <p
                  className="text-[13px] sm:text-sm font-extrabold"
                  style={{ color: "#2D100F", fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif" }}
                >
                  {t.key}
                </p>
                <p className="text-[11px] mt-0.5" style={{ color: "#7A6B57" }}>{t.sub}</p>
                <p className="text-[11px] mt-2 font-bold" style={{ color: "#337485" }}>
                  dès {t.from} TND
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOP GIGS ─── */}
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#FFF9F3" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 flex-wrap mb-6 sm:mb-8">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif",
                color: "#2D100F",
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
              }}
            >
              Les plus demandés
            </h2>
            <span
              className="text-[16px]"
              style={{ fontFamily: "var(--font-pacifico), 'Pacifico', cursive", color: "#337485" }}
            >
              ce que commandent les locaux
            </span>
            <Link href="#menu" className="ml-auto text-[13px] font-bold inline-flex items-center gap-1" style={{ color: "#337485" }}>
              Tout voir
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none"><path d="M3 8 H13 M10 5 L13 8 L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FEATURED_GIGS.map((g) => (
              <Link
                key={g.title}
                href="/contact"
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8DDD0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 22px rgba(45,16,15,0.06)",
                }}
              >
                <div
                  className="relative aspect-[16/9] flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #F7E6C2 0%, #FFFDF8 100%)" }}
                >
                  <g.Icon className="w-20 h-20 sm:w-24 sm:h-24 transition-transform group-hover:scale-110" />
                  <span
                    className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9.5px] font-extrabold uppercase tracking-[0.14em]"
                    style={{ background: "#2D100F", color: "#F7E6C2" }}
                  >
                    NoHo
                  </span>
                  <span
                    className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em]"
                    style={{ background: "rgba(255,255,255,0.92)", color: "#337485", border: "1px solid #E8DDD0" }}
                  >
                    {g.cat.split(" & ")[0]}
                  </span>
                </div>

                <div className="flex-1 flex flex-col p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <NohoAvatar size={32} />
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-extrabold truncate" style={{ color: "#2D100F" }}>
                        NOHO Mailbox
                      </p>
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#337485" }}>
                        Local · Vérifié
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-[14.5px] sm:text-[15px] font-bold leading-snug line-clamp-2 mb-3"
                    style={{ color: "#2D100F", fontFamily: "var(--font-baloo), system-ui, sans-serif" }}
                  >
                    {g.title}
                  </p>

                  <ul className="space-y-1 mb-3">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-1.5 text-[12px]" style={{ color: "#5C4540" }}>
                        <svg viewBox="0 0 16 16" className="w-3 h-3 shrink-0 mt-1" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8 L7 12 L13 4" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid #F0DBA9" }}>
                    <StarRow rating={g.rating} reviews={g.reviews} />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#7A6B57" }}>
                      {g.delivery}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#7A6B57" }}>
                      À partir de
                    </span>
                    <span
                      className="font-extrabold tabular-nums"
                      style={{
                        color: "#2D100F",
                        fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
                        fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
                      }}
                    >
                      {g.from} TND
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL-INCLUSIVE PACKAGE ─── */}
      <section id="package" className="px-5 sm:px-6 py-14 sm:py-20" style={{ background: "#FFFDF8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em]"
              style={{ background: "#2D100F", color: "#F7E6C2" }}
            >
              <AiSparkle className="w-3 h-3" />
              Solution complète
            </span>
            <h2
              className="mt-3 font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif",
                color: "#2D100F",
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              }}
            >
              Le bundle Business tout-en-un
            </h2>
            <p className="mt-2 max-w-xl mx-auto text-[14.5px] sm:text-base" style={{ color: "#5C4540" }}>
              Dix services. Une facture. Tout ce qu&apos;il faut du jour 1 au jour du lancement. TN ou US — c&apos;est toi qui choisis.
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5 sm:gap-6 rounded-3xl overflow-hidden"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8DDD0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 18px 46px rgba(45,16,15,0.10)",
            }}
          >
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <NohoAvatar size={44} />
                <div>
                  <p className="text-[13px] font-extrabold" style={{ color: "#2D100F" }}>
                    NOHO Mailbox · Équipe locale
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <StarRow rating={5.0} reviews={87} />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#337485" }}>
                      Top noté
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {filterTabs.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setFilter(t)}
                    className="text-[11.5px] font-bold px-3 py-1.5 rounded-full transition-colors"
                    style={{
                      background: filter === t ? "#2D100F" : "#FFF9F3",
                      color: filter === t ? "#F7E6C2" : "#2D100F",
                      border: `1px solid ${filter === t ? "#2D100F" : "#E8DDD0"}`,
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filtered.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-start gap-3 rounded-xl p-3"
                    style={{ background: "#FFF9F3", border: "1px solid #F0DBA9" }}
                  >
                    <span
                      className="shrink-0 inline-flex items-center justify-center rounded-lg"
                      style={{ width: 40, height: 40, background: "#FFFFFF", border: "1px solid #E8DDD0" }}
                    >
                      {s.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#337485" }}>
                        {s.cat}
                      </p>
                      <p className="text-[12.5px] leading-snug mt-0.5" style={{ color: "#2D100F" }}>
                        {s.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <aside
              className="p-5 sm:p-7 flex flex-col justify-between"
              style={{
                background: "linear-gradient(160deg, #F7E6C2 0%, #F0DBA9 100%)",
                borderLeft: "1px solid #E8DDD0",
              }}
            >
              <div>
                <p className="text-[10.5px] font-bold uppercase tracking-[0.18em]" style={{ color: "#5C4540" }}>
                  Solution · 10 services
                </p>
                <p
                  className="font-extrabold tracking-tight tabular-nums leading-none mt-2"
                  style={{
                    color: "#2D100F",
                    fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
                    fontSize: "clamp(2.75rem, 9vw, 4.25rem)",
                  }}
                >
                  4 000 TND
                </p>
                <p className="text-[12.5px] mt-2" style={{ color: "#5C4540" }}>
                  Forfait unique · pas d&apos;abonnement
                </p>

                <ul className="mt-5 space-y-2 text-[13px]" style={{ color: "#2D100F" }}>
                  {[
                    "Livraison 2 semaines, bout en bout",
                    "Révisions illimitées pendant la build",
                    "100% équipe locale — aucun offshoring",
                    "12 mois de boîte virtuelle inclus",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 mt-1 shrink-0" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8 L7 12 L13 4" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-xl text-white transition-colors"
                style={{ background: "#2D100F" }}
              >
                Commander la Solution
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none"><path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── SUIVI MENSUEL ─── */}
      <section id="suivi-mensuel" className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#FFF9F3" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 flex-wrap mb-6 sm:mb-8">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif",
                color: "#2D100F",
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
              }}
            >
              Suivi mensuel
            </h2>
            <span
              className="text-[16px]"
              style={{ fontFamily: "var(--font-pacifico), 'Pacifico', cursive", color: "#337485" }}
            >
              on gère, tu te concentres
            </span>
            <span className="text-[12px] ml-auto self-end" style={{ color: "#7A6B57" }}>
              Mensuel · annulable à tout moment
            </span>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 sm:gap-6 rounded-3xl overflow-hidden"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8DDD0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 18px 46px rgba(45,16,15,0.10)",
            }}
          >
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <NohoAvatar size={40} />
                <div>
                  <p className="text-[13px] font-extrabold" style={{ color: "#2D100F" }}>
                    NOHO Mailbox · Studio
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <StarRow rating={4.9} reviews={26} />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#337485" }}>
                      Suivi mensuel
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[14.5px] font-bold leading-snug mb-2" style={{ color: "#2D100F" }}>
                Gestion complète de marque — site, prints, adaptations saisonnières, exécution marketing
              </p>
              <p className="text-[12.5px] mb-4" style={{ color: "#5C4540" }}>
                Une marque forte n&apos;est pas un logo — c&apos;est un système. On le construit, on le protège, on le fait tourner et on le fait évoluer chaque mois pour que tu puisses te concentrer sur ton métier.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {brandMgmt.map((svc) => (
                  <div
                    key={svc.title}
                    className="flex items-start gap-3 rounded-xl p-3"
                    style={{ background: "#FFF9F3", border: "1px solid #F0DBA9" }}
                  >
                    <span className="shrink-0">{svc.icon}</span>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-extrabold leading-tight" style={{ color: "#2D100F" }}>
                        {svc.title}
                      </p>
                      <p className="text-[11.5px] leading-snug mt-0.5" style={{ color: "#5C4540" }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside
              className="p-5 sm:p-7 flex flex-col justify-between"
              style={{
                background: "linear-gradient(160deg, #2D100F 0%, #1F0807 100%)",
                color: "#F7E6C2",
              }}
            >
              <div>
                <p className="text-[10.5px] font-bold uppercase tracking-[0.18em]" style={{ color: "#F0DBA9" }}>
                  Suivi mensuel
                </p>
                <p
                  className="font-extrabold tracking-tight tabular-nums leading-none mt-2"
                  style={{
                    fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
                    fontSize: "clamp(2.5rem, 8vw, 3.75rem)",
                    color: "#F7E6C2",
                  }}
                >
                  1 200 TND
                </p>
                <p className="text-[12.5px] mt-2" style={{ color: "#F0DBA9" }}>
                  par mois · annulable à tout moment
                </p>
                <ul className="mt-5 space-y-2 text-[12.5px]" style={{ color: "#F7E6C2" }}>
                  {["Opérateur de marque dédié", "Revue trimestrielle de performance", "File prioritaire"].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 mt-1 shrink-0" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8 L7 12 L13 4" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-xl transition-colors"
                style={{ background: "#F7E6C2", color: "#2D100F" }}
              >
                Démarrer le Suivi
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none"><path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── FULL SERVICE MENU ─── */}
      <section id="menu" className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#FFFDF8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 flex-wrap mb-6">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif",
                color: "#2D100F",
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
              }}
            >
              Tous les services
            </h2>
            <span
              className="text-[16px]"
              style={{ fontFamily: "var(--font-pacifico), 'Pacifico', cursive", color: "#337485" }}
            >
              cinquante+ façons d&apos;aider
            </span>
            <span className="text-[12px] ml-auto self-end" style={{ color: "#7A6B57" }}>
              {Object.values(serviceMenu).flat().length} services · clique pour réserver
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1 -mx-1 px-1">
            {serviceCategories.map((cat) => {
              const active = activeServiceCat === cat;
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setActiveServiceCat(cat)}
                  className="shrink-0 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider px-3.5 sm:px-4 py-2 rounded-full transition-colors"
                  style={{
                    background: active ? "#2D100F" : "#FFFFFF",
                    color: active ? "#F7E6C2" : "#2D100F",
                    border: `1px solid ${active ? "#2D100F" : "#E8DDD0"}`,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
            {serviceMenu[activeServiceCat as keyof typeof serviceMenu].map((svc) => (
              <Link
                key={svc}
                href="/contact"
                className="group flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8DDD0",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
                }}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#337485" }} />
                  <span className="text-[13.5px] sm:text-sm font-semibold truncate" style={{ color: "#2D100F" }}>
                    {svc}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider shrink-0" style={{ color: "#337485" }}>
                  Devis
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none">
                    <path d="M3 8 H13 M10 5 L13 8 L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <p className="text-center text-[12.5px] mt-8" style={{ color: "#5C4540" }}>
            Tu ne trouves pas ?{" "}
            <Link href="/contact" className="font-bold underline" style={{ color: "#337485" }}>
              Écris-nous
            </Link>{" "}
            — on l&apos;offre probablement.
          </p>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#FFF9F3" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif",
                color: "#2D100F",
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
              }}
            >
              Comment ça marche
            </h2>
            <p className="mt-1 text-[14px]" style={{ color: "#5C4540" }}>
              Trois étapes de « j&apos;ai une idée » au jour du lancement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              { step: "01", icon: <IconQuestion />,  title: "Consultation gratuite", desc: "Dis-nous où tu en es et où tu veux aller. On cadre et on envoie un devis clair — aucune obligation." },
              { step: "02", icon: <IconChecklist />, title: "On exécute",            desc: "Société, marque, développement, chaque dépôt — chez notre équipe locale. Tu restes informé sans plonger dans les détails." },
              { step: "03", icon: <IconRocket />,    title: "Tu lances",             desc: "Tu reçois tes assets de marque, ton site live, ton courrier activé et tout ce qu&apos;il faut pour ouvrir." },
            ].map((s) => (
              <div
                key={s.step}
                className="text-center p-6 sm:p-7 rounded-2xl"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8DDD0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 22px rgba(45,16,15,0.06)",
                }}
              >
                {s.icon}
                <p
                  className="font-extrabold tabular-nums"
                  style={{
                    fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
                    color: "#F0DBA9",
                    fontSize: "clamp(2.25rem, 6vw, 3rem)",
                    lineHeight: 1,
                  }}
                >
                  {s.step}
                </p>
                <p className="font-extrabold text-[15px] mt-2" style={{ color: "#2D100F" }}>
                  {s.title}
                </p>
                <p className="text-[12.5px] leading-relaxed mt-1.5" style={{ color: "#5C4540" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="px-5 sm:px-6 py-14 sm:py-20"
        style={{ background: "linear-gradient(160deg, #2D100F 0%, #1F0807 100%)", color: "#F7E6C2" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-extrabold tracking-tight"
            style={{
              fontFamily: "var(--font-baloo), 'Baloo 2', system-ui, sans-serif",
              color: "#F7E6C2",
              fontSize: "clamp(1.875rem, 6vw, 3rem)",
              lineHeight: 1.05,
            }}
          >
            Construisons quelque chose{" "}
            <span style={{ fontFamily: "var(--font-pacifico), 'Pacifico', cursive", color: "#F0DBA9", fontWeight: 400 }}>
              ensemble
            </span>
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-base" style={{ color: "#F0DBA9" }}>
            Solution complète, Suivi mensuel, ou un service unique — la première conversation est toujours gratuite.
          </p>
          <p className="mt-2 text-[12px]" style={{ color: "rgba(247,230,194,0.7)" }}>
            Aucun engagement · Devis personnalisé sous 24 heures
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <Link
              href="/appel"
              className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl transition-colors"
              style={{ background: "#F7E6C2", color: "#2D100F" }}
            >
              Réserver un appel gratuit
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none"><path d="M4 10 H16 M12 6 L16 10 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl transition-colors"
              style={{ background: "rgba(247,230,194,0.10)", color: "#F7E6C2", border: "1px solid rgba(247,230,194,0.30)" }}
            >
              Voir les plans boîte virtuelle
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
