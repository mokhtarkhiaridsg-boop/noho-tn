import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/anim/Reveal";

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

const CREAM = "#F7E6C2";

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

      {/* Part 1 — the bridge: badge, headline, piliers, storefront + dashboard */}
      <HomeHero />

      {/* Part 2 — carriers: real logos, we receive from */}
      <section className="px-5 sm:px-6 py-16 sm:py-24" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow mb-8" style={{ color: "rgba(45,16,15,0.5)" }}>On reçoit tes colis de</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {[
                { src: "/carriers/fedex.svg", alt: "FedEx", h: 40, w: 150 },
                { src: "/carriers/ups.svg", alt: "UPS", h: 60, w: 68 },
                { src: "/carriers/usps.svg", alt: "USPS", h: 46, w: 120 },
                { src: "/carriers/dhl.svg", alt: "DHL", h: 30, w: 180 },
              ].map((c) => (
                <span
                  key={c.alt}
                  className="inline-flex items-center justify-center h-[72px] w-[45%] max-w-48 sm:w-48 px-4 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)", boxShadow: "var(--shadow-sm)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.src} alt={c.alt} className="object-contain" style={{ maxHeight: c.h, maxWidth: c.w, width: "auto", height: "auto", opacity: 0.9 }} />
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
