import type { Metadata } from "next";
import HomeLanding from "@/components/landing/HomeLanding";

export const metadata: Metadata = {
  title: {
    absolute: "NOHO Mailbox Tounes — L'adresse mte3ek fi America",
  },
  description:
    "Adresse 7a9i9ia fel America men 35 TND/chhar. Storefront physique fi North Hollywood, scan courrier, colis (UPS/FedEx/Amazon), ndezzou l Tounes. LLC américaine, notaire, étudiants. Tkhalles b dinar 3and cabinet d'avocat.",
  alternates: {
    canonical: "https://nohomailboxtunis.com",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr",
      "ar-TN": "https://nohomailboxtunis.com/ar",
      "aeb-TN": "https://nohomailboxtunis.com",
    },
  },
};


const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NOHO Mailbox Tunisie",
  url: "https://nohomailboxtunis.com",
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
  url: "https://nohomailboxtunis.com",
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

export default function TounsiHomePage() {
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
      <HomeLanding locale="tn" />
    </>
  );
}
