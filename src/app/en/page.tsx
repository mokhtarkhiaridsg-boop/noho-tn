import type { Metadata } from "next";
import HomeLanding from "@/components/landing/HomeLanding";

export const metadata: Metadata = {
  title: {
    absolute: "NOHO Mailbox Tunisia — Your US address, wherever you are",
  },
  description:
    "A real US address from 35 TND/month. Physical storefront in North Hollywood, mail scanning, packages (UPS/FedEx/Amazon), shipping to Tunisia. American LLC, notary, students. Pay in dinars at a law office.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/en",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr",
      "ar-TN": "https://nohomailboxtunis.com/ar",
      "aeb-TN": "https://nohomailboxtunis.com",
      en: "https://nohomailboxtunis.com/en",
    },
  },
  robots: { index: false, follow: true },
};


const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NOHO Mailbox Tunisia",
  url: "https://nohomailboxtunis.com/en",
  logo: "https://nohomailboxtunis.com/icon.svg",
  description:
    "Real US address, LLC formation, notary, US shipping and delivery for Tunisians. Operated from 5062 Lankershim Blvd, North Hollywood, CA, with partner KHIARI in Tunis.",
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
  name: "NOHO Mailbox Tunisia",
  url: "https://nohomailboxtunis.com/en",
  inLanguage: ["fr-TN", "ar-TN", "aeb-TN", "en"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://nohomailboxtunis.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function EnglishHomePage() {
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
      <HomeLanding locale="en" />
    </>
  );
}
