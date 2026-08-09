import type { Metadata } from "next";
import HomeLanding from "@/components/landing/HomeLanding";

export const metadata: Metadata = {
  title: {
    absolute:
      "NOHO Mailbox Tunisie — Adresse US réelle, expédition, livraison, LLC",
  },
  description:
    "Adresse postale réelle aux États-Unis dès 35 TND/mois. Vraie adresse US dans un storefront physique, avec scan de courrier, réception colis (UPS/FedEx/Amazon), forwarding international vers Tunis. LLC américaine, notariat, expédition, livraison US. Paiement en dinars chez un cabinet d'avocat.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/fr",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr",
      "ar-TN": "https://nohomailboxtunis.com/ar",
      "aeb-TN": "https://nohomailboxtunis.com",
      "en": "https://nohomailboxtunis.com/en",
      "en-US": "https://nohomailbox.org",
    },
  },
  openGraph: {
    images: ["https://nohomailboxtunis.com/opengraph-image"],
    title: "NOHO Mailbox Tunisie — Adresse US réelle, LLC, expédition",
    description:
      "Adresse postale réelle aux États-Unis dès 35 TND/mois. LLC américaine 4 000 TND. Notaire californien. Paiement en dinars chez un cabinet d'avocat.",
    url: "https://nohomailboxtunis.com/fr",
    siteName: "NOHO Mailbox Tunisie",
    locale: "fr_TN",
    type: "website",
  },
};


const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NOHO Mailbox Tunisie",
  url: "https://nohomailboxtunis.com/fr",
  logo: "https://nohomailboxtunis.com/icon.svg",
  description:
    "Adresse US réelle, formation LLC, notariat, expédition et livraison US pour Tunisiens. Opéré depuis 5062 Lankershim Blvd, North Hollywood, CA, avec partenaire KHIARI à Tunis.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5062 Lankershim Blvd",
    addressLocality: "North Hollywood",
    addressRegion: "CA",
    postalCode: "91601",
    addressCountry: "US",
  },
  sameAs: ["https://nohomailbox.org"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NOHO Mailbox Tunisie",
  url: "https://nohomailboxtunis.com/fr",
  inLanguage: ["fr-TN", "ar-TN", "aeb-TN"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://nohomailboxtunis.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* The landing page — one shared clone of the nohomailbox.org
          landing (hero + track), copy driven by locale. */}
      <HomeLanding locale="fr" />
    </>
  );
}
