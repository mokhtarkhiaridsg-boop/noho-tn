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
    "Commande sur Amazon, eBay ou tout site américain avec une adresse NOHO Mailbox en Californie. On reçoit tes colis et on les réexpédie en Tunisie par USPS, UPS, FedEx ou DHL, au tarif du transporteur. Frais de service et éligibilité confirmés avant tout paiement.",
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
  ctaSignup: "Demander mon ouverture →",
  ctaWhatsApp: "Poser une question sur WhatsApp",
  stepsTitle: "Comment ça marche",
  steps: [
    { t: "Tu fais confirmer ton ouverture", b: "Tu envoies ta demande en ligne, sans paiement. Contacte-nous pour confirmer la vérification d'identité, les options de paiement et l'activation depuis la Tunisie avant de payer. L'équipe te confirme aussi par écrit le forfait, le prix et la devise." },
    { t: "Tu commandes", b: "Adresse de livraison : 5062 Lankershim Blvd, Suite [ton numéro], North Hollywood, CA 91601, avec ton nom exact." },
    { t: "On reçoit ton colis", b: "Il arrive physiquement dans notre local et apparaît sur ton espace avec une photo de l'extérieur." },
    { t: "Tu choisis l'envoi", b: "Transporteur et service, regroupement de plusieurs colis si ton forfait l'inclut. Tu vois le prix du transport avant de valider." },
    { t: "Il part vers la Tunisie", b: "On prépare les documents douaniers avec la valeur réelle déclarée et tu reçois le numéro de suivi. Les droits éventuels sont payés à l'arrivée en Tunisie." },
  ],
  costTitle: "Ce que tu paies",
  costRows: [
    { item: "L'adresse", price: "Forfait et prix confirmés par écrit avant tout paiement" },
    { item: "La réexpédition", price: "Tarif du transporteur, plus des frais de service confirmés avant l'envoi" },
    { item: "Le stockage au-delà de la durée incluse", price: "Selon ton forfait, confirmé avant tout paiement" },
    { item: "La douane tunisienne", price: "Droits et taxes éventuels payés par toi à l'arrivée, jamais inclus dans nos prix" },
  ],
  costNote: (
    <>
      Aucun paiement avant la confirmation de ton éligibilité. Pour payer tes achats sur les sites américains, ta carte
      technologique internationale a un plafond annuel : voir{" "}
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
    { q: "Faut-il un abonnement ?", a: "Les options disponibles pour la Tunisie, leurs prix et leur devise te sont confirmés par écrit avant tout paiement. Rien n'est facturé avant la confirmation de ton éligibilité." },
    { q: "Faut-il le Form 1583 ?", a: "Pour recevoir du courrier et des colis à ton nom, oui : l'USPS exige le PS Form 1583 et deux pièces d'identité, dont une avec photo (un passeport étranger est accepté). Selon les règles USPS (DMM 508.1.8.3), la signature se fait en présence d'un employé du CMRA, physiquement ou par vidéo en temps réel, ou devant un notaire commissionné aux États-Unis ; un notaire tunisien ne remplit pas cette condition. Contacte-nous pour confirmer la vérification d'identité, les options de paiement et l'activation depuis la Tunisie avant de payer." },
    { q: "Combien coûte l'envoi d'un colis vers la Tunisie ?", a: "Le tarif du transporteur, plus des frais de service que l'équipe te confirme avant l'envoi. Estimations indicatives des transporteurs pour 1 kg : environ 35 à 50 USD par USPS Priority Mail International, environ 80 USD par UPS, environ 110 USD par DHL Express. Regrouper plusieurs colis en un seul envoi réduit souvent le total." },
    { q: "Et la douane tunisienne ?", a: "La douane tunisienne peut appliquer des droits et taxes à l'arrivée, selon la nature et la valeur du contenu. Tu les paies à la réception. Les règles officielles sont sur douane.gov.tn." },
    { q: "Combien de temps garde-t-on mon colis ?", a: "La durée de stockage gratuite et le prix au-delà dépendent de ton forfait ; l'équipe te les confirme par écrit avant tout paiement." },
  ],
  endTitle: "Prêt à commander aux États-Unis ?",
  endBody: "Envoie ta demande sans paiement, ou pose ta question sur WhatsApp avant de commander.",
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
