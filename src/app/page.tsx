import type { Metadata } from "next";
import TounsiHomeHero from "./_components/TounsiHomeHero";
import Reveal from "@/components/anim/Reveal";

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

      {/* Part 1 — the bridge: badge, headline, piliers, storefront + dashboard */}
      <TounsiHomeHero />

      {/* Part 2 — carriers: real logos, we receive from */}
      <section className="px-5 sm:px-6 py-16 sm:py-24" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow mb-8" style={{ color: "rgba(45,16,15,0.5)" }}>Nestacblou les colis mte3ek men</p>
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
