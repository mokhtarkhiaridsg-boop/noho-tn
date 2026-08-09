/**
 * Landing-page copy for the four locale trees.
 *
 * Owner 2026-08-04: the TN homepage is now a clone of the nohomailbox.org
 * landing page (hero + track), so all four locale homepages render ONE
 * component and differ only by the dictionary below. Previously each locale
 * had its own ~330-line copy-pasted hero file; those four files are gone.
 *
 * SOURCING RULE — nothing here is newly written by an AI. Every string is
 * either (a) lifted verbatim from copy that already shipped on this site,
 * (b) a truncation of an already-shipped string, or (c) a brand mark /
 * address that is identical in every language. Tunisian derja is never
 * self-written (it goes through the owner's ChatGPT advisor) and Arabic must
 * be fus7a with a native reviewer — so where no approved string exists yet,
 * the slot is marked with the REVIEW comment tag rather than invented. Grep
 * `NEEDS-COPY` to find every one of them.
 *
 * Client-safe by construction: the only import is a TYPE from @/lib/locale,
 * which is itself pure. Never import anything that reaches @/lib/prisma —
 * a prisma import in this module would blank every homepage.
 */
import type { Locale } from "@/lib/locale";

export type FeedRow = { icon: "box" | "mail" | "truck"; title: string; sub: string };

export type LandingCopy = {
  /** H1 renders as two spans: ink, then teal/sheen. */
  h1a: string;
  h1b: string;
  /** Ink pill under the H1. Address is a place name — identical everywhere. */
  pin: string;
  /** Hero paragraph. */
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** Eyebrow above the USPS/UPS/FedEx/DHL wordmark row. */
  carriers: string;
  carriersAria: string;
  photoAlt: string;
  /** Floating dashboard card. */
  dashAria: string;
  dashSuite: string;
  dashBadge: string;
  dashFooter: string;
  feed: FeedRow[];
  /** Track section. */
  trackEyebrow: string;
  trackH2a: string;
  trackH2b: string;
  trackSub?: string;
  trackLabel: string;
  trackPlaceholder: string;
  trackButton: string;
};

/** Identical in every locale — a street address, not prose. */
const PIN = "5062 Lankershim · North Hollywood, CA";
/** Brand marks. Never translated, in any locale. */
const CARRIER_EYEBROW_MARKS = "USPS · UPS · FedEx · DHL";

export const LANDING_COPY: Record<Locale, LandingCopy> = {
  /* ── Tounsi (derja, Latin script) — the default locale, bare path ──
     Hero copy is the shipped derja. The TRACK block is French: this repo
     already serves /track in French at the default locale for exactly this
     reason (see src/app/track/page.tsx — "this route has no derja copy
     yet"), and inventing derja here is not allowed. NEEDS-COPY: derja for
     the five track strings, via the ChatGPT advisor. */
  tn: {
    h1a: "L'adresse mte3ek fi America,",
    h1b: "win ma kont.",
    pin: PIN,
    // Truncation of the shipped metadata description (src/app/page.tsx).
    sub: "Adresse 7a9i9ia fel America men 35 TND/chhar. Storefront physique fi North Hollywood, scan courrier, colis (UPS/FedEx/Amazon), ndezzou l Tounes.",
    // Transactional surfaces stay French on every locale (Navbar.tsx).
    ctaPrimary: "Inscription →",
    ctaSecondary: "WhatsApp",
    carriers: "Nestacblou les colis mte3ek men",
    carriersAria: "Nestacblou les colis mte3ek men",
    photoAlt: "El storefront NOHO fi 5062 Lankershim Blvd, North Hollywood, CA",
    dashAria: "El courrier mte3ek, live fel dashboard",
    dashSuite: "Suite #122",
    dashBadge: "2 jded",
    dashFooter: "el courrier mte3ek →",
    feed: [
      { icon: "box", title: "UPS · Colis wsel", sub: "Scan · Ndezzouh l Tounes" },
      { icon: "mail", title: "Jwab · scanné", sub: "PDF fel dashboard mte3ek" },
    ],
    trackEyebrow: CARRIER_EYEBROW_MARKS,
    trackH2a: "Suivre ton", // NEEDS-COPY (derja)
    trackH2b: "courrier", // NEEDS-COPY (derja)
    trackSub: "Suivi en temps réel de tes expéditions (USPS, UPS, FedEx, DHL).", // NEEDS-COPY (derja)
    trackLabel: "Numéro de suivi", // NEEDS-COPY (derja)
    trackPlaceholder: "Colle ton numéro de suivi", // NEEDS-COPY (derja)
    trackButton: "Suivre", // NEEDS-COPY (derja)
  },

  /* ── Français ── */
  fr: {
    // FR ships the derja headline verbatim (it always has — HomeHero.tsx).
    h1a: "L'adresse mte3ek fi America,",
    h1b: "win ma kont.",
    pin: PIN,
    sub: "Adresse postale réelle aux États-Unis dès 35 TND/mois, avec scan de courrier, réception colis (UPS/FedEx/Amazon) et forwarding vers Tunis.",
    ctaPrimary: "Inscription →",
    ctaSecondary: "WhatsApp",
    carriers: "On reçoit tes colis de",
    carriersAria: "On reçoit tes colis de",
    photoAlt: "Le storefront NOHO au 5062 Lankershim Blvd, North Hollywood, CA",
    dashAria: "Ton courrier, en direct sur ton dashboard",
    dashSuite: "Suite #122",
    dashBadge: "2 nouveaux",
    dashFooter: "ton courrier →",
    feed: [
      { icon: "box", title: "UPS · Colis reçu", sub: "Scan · Expédié en Tunisie" },
      { icon: "mail", title: "Lettre · scannée", sub: "PDF sur ton dashboard" },
    ],
    trackEyebrow: CARRIER_EYEBROW_MARKS,
    trackH2a: "Suivre ton",
    trackH2b: "courrier",
    trackSub: "Suivi en temps réel de tes expéditions (USPS, UPS, FedEx, DHL).",
    trackLabel: "Numéro de suivi",
    trackPlaceholder: "Colle ton numéro de suivi",
    trackButton: "Suivre",
  },

  /* ── العربية — fus7a. RTL. Pacifico has no Arabic glyphs, so the accent
     span falls back to Noto in the components. NEEDS-COPY: a native fus7a
     reviewer for the track subhead (omitted rather than invented) and for
     the placeholder/label wording. /ar stays noindex until that lands. */
  ar: {
    h1a: "عنوانك في أمريكا،",
    h1b: "أينما كنت.",
    pin: PIN,
    sub: "عنوان بريدي حقيقي في الولايات المتحدة ابتداءً من 35 TND شهرياً، مع مسح ضوئي للبريد، استلام الطرود (UPS/FedEx/Amazon)، وشحن إلى تونس.",
    ctaPrimary: "Inscription →",
    ctaSecondary: "WhatsApp",
    carriers: "نستقبل طرودك من",
    carriersAria: "نستقبل طرودك من",
    photoAlt: "متجر NOHO في ⁦5062 Lankershim Blvd, North Hollywood, CA⁩",
    dashAria: "بريدك مباشرة على لوحة التحكم",
    dashSuite: "Suite #122",
    dashBadge: "2 جديد",
    dashFooter: "بريدك ←",
    feed: [
      { icon: "box", title: "UPS · طرد وصل", sub: "مسح ضوئي · نرسله إلى تونس" },
      { icon: "mail", title: "رسالة · تم مسحها", sub: "PDF في لوحة تحكمك" },
    ],
    trackEyebrow: CARRIER_EYEBROW_MARKS,
    // From the shipped title "تتبع بريدك" (src/app/ar/track/page.tsx).
    trackH2a: "تتبع",
    trackH2b: "بريدك",
    trackSub: undefined, // NEEDS-COPY (fus7a) — omitted, never invented.
    trackLabel: "تتبع بريدك",
    trackPlaceholder: "USPS, UPS, FedEx, DHL",
    trackButton: "تتبع",
  },

  /* ── English — /en is noindex; US strings port verbatim except the
     NoHo-only same-day claim, which is wrong for this market. ── */
  en: {
    h1a: "Your US address,",
    h1b: "wherever you are.",
    pin: PIN,
    sub: "A real US address from 35 TND/month, with mail scanning, package receiving (UPS/FedEx/Amazon) and shipping to Tunisia.",
    ctaPrimary: "Inscription →",
    ctaSecondary: "WhatsApp",
    carriers: "We receive your packages from",
    carriersAria: "We receive your packages from",
    photoAlt: "The NOHO storefront at 5062 Lankershim Blvd, North Hollywood, CA",
    dashAria: "Your mail, live on your dashboard",
    dashSuite: "Suite #122",
    dashBadge: "2 new",
    dashFooter: "your mail →",
    feed: [
      { icon: "box", title: "UPS · Package arrived", sub: "Scan · Shipping to Tunisia" },
      { icon: "mail", title: "Letter · scanned", sub: "PDF in your dashboard" },
    ],
    trackEyebrow: CARRIER_EYEBROW_MARKS,
    trackH2a: "Track your",
    trackH2b: "shipment",
    trackSub: "Paste a tracking number and we'll spot the carrier and follow it to the door.",
    trackLabel: "Tracking number",
    trackPlaceholder: "USPS, UPS, FedEx, DHL — paste any tracking number",
    trackButton: "Track",
  },
};

/**
 * Copy for the /track?n= router page (TrackRouter.tsx). Same sourcing rule as
 * above. The US original offers "call us at (818) 506-7744"; here the help
 * line is WhatsApp — a US number is not a realistic call for a Tunisian
 * visitor, and WhatsApp reaches the same line.
 */
export type TrackPageCopy = {
  eyebrow: string;
  emptyTitle: string;
  emptySub: string;
  submit: string;
  retry: string;
  inputLabel: string;
  foundEyebrow: string;
  openOn: string;
  unknownEyebrow: string;
  unknownTitle: string;
  unknownSub: string;
  youEntered: string;
  helpWhatsApp: string;
  backToShipping: string;
};

const TRACK_FR: TrackPageCopy = {
  eyebrow: "Suivi de courrier",
  emptyTitle: "Colle ton numéro de suivi",
  emptySub:
    "N'importe quel numéro USPS / UPS / FedEx / DHL marche. On détecte le transporteur et on t'envoie direct sur sa page de suivi.",
  submit: "Suivre →",
  retry: "Réessayer →",
  inputLabel: "Numéro de suivi",
  foundEyebrow: "Transporteur détecté",
  openOn: "Suivre sur",
  unknownEyebrow: "Transporteur non reconnu",
  unknownTitle: "Ça ne ressemble pas à un numéro USPS / UPS / FedEx / DHL",
  unknownSub: "Vérifie les chiffres et réessaye, ou écris-nous et on le retrouve :",
  youEntered: "Tu as saisi :",
  helpWhatsApp: "Contacter NOHO sur WhatsApp →",
  backToShipping: "Demander un devis d'expédition",
};

export const TRACK_PAGE_COPY: Record<Locale, TrackPageCopy> = {
  // NEEDS-COPY (derja): this repo already serves /track in French at the
  // default locale for exactly this reason — see src/app/track/page.tsx.
  tn: TRACK_FR,
  fr: TRACK_FR,
  ar: {
    eyebrow: "تتبع البريد",
    emptyTitle: "تتبع بريدك",
    emptySub: "USPS · UPS · FedEx · DHL",
    submit: "تتبع ←",
    retry: "إعادة المحاولة ←",
    inputLabel: "تتبع بريدك",
    foundEyebrow: "تتبع البريد",
    openOn: "تتبع عبر",
    unknownEyebrow: "تتبع البريد",
    unknownTitle: "USPS / UPS / FedEx / DHL",
    unknownSub: "", // NEEDS-COPY (fus7a) — omitted rather than invented.
    youEntered: "",
    helpWhatsApp: "تواصل معنا عبر واتساب ←",
    backToShipping: "الشحن",
  },
  en: {
    eyebrow: "Tracking",
    emptyTitle: "Paste your tracking number",
    emptySub:
      "Any USPS / UPS / FedEx / DHL number works. We'll spot the carrier and send you straight to its tracking page.",
    submit: "Track →",
    retry: "Try again →",
    inputLabel: "Tracking number",
    foundEyebrow: "Carrier detected",
    openOn: "Track on",
    unknownEyebrow: "We can't tell which carrier",
    unknownTitle: "That doesn't look like a USPS / UPS / FedEx / DHL number",
    unknownSub: "Double-check the digits and try again, or message us and we'll look it up:",
    youEntered: "You entered:",
    helpWhatsApp: "Message NOHO on WhatsApp →",
    backToShipping: "Get a shipping quote instead",
  },
};
