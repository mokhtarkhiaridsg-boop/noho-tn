import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://noho.tn" },
  { name: "Business", url: "https://noho.tn/business" },
]);

export const metadata: Metadata = {
  title: "Business — Société US ou TN + Identité + Site, 4 000 TND",
  description:
    "Société américaine (Wyoming / Delaware / NM) ou tunisienne (SARL / SUARL via cabinet KHIARI), EIN, identité de marque, site web et 12 mois de courrier à notre adresse de Los Angeles — 4 000 TND tout compris. Pas de délégation impersonnelle.",
  openGraph: {
    title: "Business — NOHO Mailbox Tunisie",
    description:
      "Société US ou TN, EIN, marque, site, 12 mois de courrier à notre adresse de LA — 4 000 TND, une fois. Réserve un appel de 30 minutes.",
    url: "https://noho.tn/business",
  },
  alternates: {
    canonical: "https://noho.tn/business",
    languages: {
      "fr-TN": "https://noho.tn/business",
      "ar-TN": "https://noho.tn/ar/business",
      "en-US": "https://nohomailbox.org/business-solutions",
      "es-US": "https://nohomailbox.org/es/negocios",
    },
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business — Société + Identité + Site + Courrier",
  description:
    "Création complète de société (US Wyoming/Delaware/NM ou TN SARL/SUARL via cabinet KHIARI), EIN auprès de l'IRS, livre de marque (logo + couleurs + typographie + 50 cartes de visite), site web sur ton domaine, et 12 mois de courrier à notre adresse de Los Angeles.",
  provider: {
    "@type": "LocalBusiness",
    name: "NOHO Mailbox",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5062 Lankershim Blvd",
      addressLocality: "North Hollywood",
      addressRegion: "CA",
      postalCode: "91601",
      addressCountry: "US",
    },
    telephone: "+1-818-506-7744",
    url: "https://noho.tn",
  },
  areaServed: {
    "@type": "Country",
    name: "Tunisia",
  },
  offers: {
    "@type": "Offer",
    price: "4000",
    priceCurrency: "TND",
    availability: "https://schema.org/InStock",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qui est inclus dans le Business à 4 000 TND ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Création de société américaine (Wyoming / Delaware / Nouveau-Mexique) OU société tunisienne (SARL / SUARL via cabinet partenaire KHIARI), EIN auprès de l'IRS (ou matricule fiscal TN), livre de marque (logo, palette de couleurs, typographie), 50 cartes de visite imprimées, site web 5 pages sur ton domaine, et 12 mois de courrier à notre adresse 5062 Lankershim Blvd avec notarisation Form 1583 incluse.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend la livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Généralement 14 à 21 jours bout en bout. Le dépôt de la société prend 4 à 6 semaines à l'État côté US (ou environ 2 semaines au RCS TN), mais ton EIN, ton livre de marque, ton site web et ton adresse postale sont actifs sous 7 à 14 jours.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il des frais récurrents au-delà des 4 000 TND ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wyoming demande 60 USD/an de rapport annuel (frais étatique). Delaware demande 300 USD/an de franchise tax. New Mexico n'a aucun frais annuel. Après tes 12 mois de courrier inclus, le renouvellement de la boîte virtuelle est à 100 TND/mois sur le plan Business. Le renouvellement de domaine reste à ta charge (environ 35 TND/an). L'hébergement web est inclus la première année.",
      },
    },
    {
      "@type": "Question",
      name: "Qui possède la marque et les actifs du site web ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toi — à 100 %. On te livre tous les fichiers source (logo SVG, livre de marque PDF, code du site web), et le domaine est enregistré à ton nom. Aucun lock-in de notre côté.",
      },
    },
    {
      "@type": "Question",
      name: "Peux-tu choisir TN, US, ou les deux en parallèle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. On crée ta société dans la juridiction qui colle à ton activité — Wyoming par défaut pour la plupart (LLC anonyme, frais annuels les plus bas, acceptation bancaire la plus large), Delaware pour les startups qui visent une levée VC, Nouveau-Mexique pour la confidentialité maximale, ou SARL / SUARL tunisienne via notre cabinet partenaire KHIARI. Tu peux aussi avoir les deux en parallèle (TN + US) si ton modèle l'exige.",
      },
    },
    {
      "@type": "Question",
      name: "Peux-tu prendre juste une partie de la Solution ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Services individuels : marque + site uniquement (2 800 TND pour les clients Business actuels, 3 400 TND pour les nouveaux clients) ; formation de société + EIN uniquement (700 TND + frais étatiques) ; Suivi mensuel à 1 200 TND/mois.",
      },
    },
  ],
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {children}
    </>
  );
}
