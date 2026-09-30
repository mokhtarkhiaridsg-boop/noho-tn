/*
 * New 2026-09-30 (Tunisia SEO pass). Targets the forwarding intent French
 * speakers in Tunisia actually search with — "réexpédition colis USA
 * Tunisie", "acheter sur Amazon US livraison Tunisie", "adresse américaine
 * pour colis" (SERP research: forwarders rank for these, in French first).
 * /fr/virtual-mailbox stays the page for the mailbox itself; this one is for
 * people whose first need is getting a US purchase to Tunisia.
 */
import type { Metadata } from "next";
import Link from "next/link";
import ReexpeditionPage, { faqJsonLd, serviceJsonLd, type ReexpeditionCopy } from "@/components/landing/ReexpeditionPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const URL = "https://nohomailboxtunis.com/fr/reexpedition-colis-usa-tunisie";
const AR_URL = "https://nohomailboxtunis.com/ar/reexpedition-colis-usa-tunisie";

export const metadata: Metadata = {
  title: "Réexpédition de colis des États-Unis vers la Tunisie — adresse US réelle",
  description:
    "Commande sur Amazon, eBay ou tout site américain avec ton adresse NOHO Mailbox en Californie. On reçoit tes colis et on les réexpédie en Tunisie par USPS, UPS, FedEx ou DHL, au tarif du transporteur + 4 TND de manutention.",
  alternates: { canonical: URL, languages: { fr: URL, ar: AR_URL, "x-default": URL } },
  openGraph: {
    title: "Réexpédition de colis des États-Unis vers la Tunisie",
    description: "Une adresse US réelle pour tes achats en ligne, réexpédiés en Tunisie au tarif du transporteur.",
    url: URL,
    locale: "fr_TN",
    type: "website",
    images: ["https://nohomailboxtunis.com/opengraph-image"],
  },
};

const COPY: ReexpeditionCopy = {
  lang: "fr",
  kicker: "Colis USA → Tunisie",
  h1: "Réexpédition de colis des États-Unis vers la Tunisie",
  intro:
    "Commande sur Amazon, eBay ou n'importe quel site américain avec ton adresse NOHO Mailbox à North Hollywood (Californie). On reçoit le colis dans notre local, tu le vois sur ton espace en ligne, et on te le réexpédie en Tunisie avec le transporteur que tu choisis, au tarif du transporteur.",
  chips: ["Adresse de rue réelle, pas une boîte postale", "USPS · UPS · FedEx · DHL", "Prix du transport affiché avant l'envoi"],
  ctaSignup: "Ouvrir mon adresse US →",
  ctaWhatsApp: "Poser une question sur WhatsApp",
  stepsTitle: "Comment ça marche",
  steps: [
    { t: "Tu ouvres ton adresse", b: "Inscription en ligne. Pour les colis UPS, FedEx, DHL et Amazon, le forfait Free suffit ; pour recevoir aussi l'USPS et du courrier, choisis un forfait payant (Form 1583 exigé par l'USPS)." },
    { t: "Tu commandes", b: "Adresse de livraison : 5062 Lankershim Blvd, Suite [ton numéro], North Hollywood, CA 91601, avec ton nom exact." },
    { t: "On reçoit ton colis", b: "Il arrive physiquement dans notre local et apparaît sur ton espace avec une photo de l'extérieur." },
    { t: "Tu choisis l'envoi", b: "Transporteur et service, regroupement de plusieurs colis si ton forfait l'inclut. Tu vois le prix du transport avant de valider." },
    { t: "Il part vers la Tunisie", b: "On prépare les documents douaniers avec la valeur réelle déclarée et tu reçois le numéro de suivi. Les droits éventuels sont payés à l'arrivée en Tunisie." },
  ],
  costTitle: "Ce que tu paies",
  costRows: [
    { item: "L'adresse", price: "Free (0 TND, à l'usage) · Basic 35 · Standard 75 · Premium 150 TND/mois" },
    { item: "La réexpédition à la demande", price: "Tarif du transporteur + 4 TND de manutention par envoi" },
    { item: "Le regroupement de colis", price: "Inclus dans Standard et Premium" },
    { item: "Le stockage au-delà de la durée incluse", price: "6 TND par colis et par semaine" },
    { item: "La douane tunisienne", price: "Droits et taxes éventuels payés par toi à l'arrivée, jamais inclus dans nos prix" },
  ],
  costNote: (
    <>
      Les forfaits sont facturés en dinars tunisiens. Les formules de réexpédition hebdomadaire et urgente ont leur propre prix, détaillé sur{" "}
      <Link href="/fr/tarifs" className="underline font-bold">la page tarifs</Link>. Pour payer tes achats sur les sites
      américains, ta carte technologique internationale a un plafond annuel : voir{" "}
      <Link href="/fr/guides/plafond-carte-technologique" className="underline font-bold">notre guide</Link>.
    </>
  ),
  carriersTitle: "Transporteurs et délais indicatifs",
  carriersHead: ["Transporteur", "Délai indicatif", "Estimation pour 1 kg"],
  carriers: [
    { name: "USPS Priority Mail International", time: "1 à 2 semaines", price: "environ 35 à 50 USD" },
    { name: "UPS", time: "2 à 5 jours ouvrés", price: "environ 80 USD" },
    { name: "FedEx", time: "2 à 5 jours ouvrés", price: "selon devis" },
    { name: "DHL Express", time: "2 à 5 jours ouvrés", price: "environ 110 USD" },
  ],
  carriersNote:
    "Délais et prix indicatifs des transporteurs, hors dédouanement en Tunisie. Le prix réel dépend du poids, des dimensions et du service, et tu le vois avant de valider. Aucun délai n'est garanti.",
  notTitle: "Ce qu'on ne fait pas",
  notList: [
    "On n'a pas d'entrepôt en Tunisie : ton colis est reçu et expédié depuis notre local de North Hollywood.",
    "On ne dédouane pas le colis et on ne paie pas les droits à ta place.",
    "On ne sous-déclare jamais la valeur d'un colis.",
    "Certains articles ne peuvent pas voyager (matières dangereuses, produits interdits à l'import) : chaque envoi passe une vérification avant le devis.",
    "Aucun délai de livraison n'est garanti.",
  ],
  faqTitle: "Questions fréquentes",
  faq: [
    { q: "Pourquoi passer par une adresse aux États-Unis ?", a: "Beaucoup de vendeurs américains ne livrent pas en Tunisie. Avec une adresse aux États-Unis, tu commandes comme un client américain, puis on te réexpédie le colis." },
    { q: "Faut-il un abonnement ?", a: "Non. Le forfait Free accepte les colis UPS, FedEx, DHL et Amazon sans abonnement : chaque service est débité de ton wallet prépayé. Pour recevoir l'USPS et du courrier, il faut un forfait payant." },
    { q: "Faut-il le Form 1583 ?", a: "Pour les forfaits payants, oui : l'USPS l'exige avec deux pièces d'identité, et la signature doit se faire devant un employé de NOHO Mailbox ou devant un notaire commissionné aux États-Unis (un notaire tunisien n'est pas accepté). Le forfait Free, sans USPS, ne demande pas le Form 1583, mais une vérification d'identité reste nécessaire. Écris-nous pour la marche à suivre." },
    { q: "Combien coûte l'envoi d'un colis vers la Tunisie ?", a: "Le tarif du transporteur, plus 4 TND de manutention par envoi. À titre indicatif pour 1 kg : environ 35 à 50 USD par USPS Priority Mail International, environ 80 USD par UPS, environ 110 USD par DHL Express. Regrouper plusieurs colis en un seul envoi réduit souvent le total." },
    { q: "Et la douane tunisienne ?", a: "La douane tunisienne peut appliquer des droits et taxes à l'arrivée, selon la nature et la valeur du contenu. Tu les paies à la réception. Les règles officielles sont sur douane.gov.tn." },
    { q: "Combien de temps garde-t-on mon colis ?", a: "30 jours avec Basic, 60 avec Standard, 90 avec Premium, puis 6 TND par colis et par semaine. Pour le forfait Free, l'équipe te donne la durée à l'inscription." },
  ],
  endTitle: "Prêt à commander aux États-Unis ?",
  endBody: "Ouvre ton adresse en ligne, ou pose ta question sur WhatsApp avant de commander.",
  endSecondary: { href: "/fr/virtual-mailbox", label: "Voir les forfaits d'adresse" },
  trackFrom: "fr_reexpedition",
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "Réexpédition colis USA → Tunisie", url: URL },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(COPY, URL)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(COPY)) }} />
      <ReexpeditionPage copy={COPY} />
    </>
  );
}
