import type { Metadata } from "next";
import Link from "next/link";
import StorefrontIllustration from "@/components/StorefrontIllustration";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", url: "https://nohomailboxtunis.com/fr" },
  { name: "À propos", url: "https://nohomailboxtunis.com/fr/a-propos" },
]);

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "À propos de NOHO Mailbox — édition Tunisie",
  url: "https://nohomailboxtunis.com/fr/a-propos",
  inLanguage: "fr-TN",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://nohomailboxtunis.com/#org",
    name: "NOHO Mailbox",
    url: "https://nohomailboxtunis.com/fr",
    logo: "https://nohomailboxtunis.com/icon.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5062 Lankershim Blvd",
      addressLocality: "North Hollywood",
      addressRegion: "CA",
      postalCode: "91601",
      addressCountry: "US",
    },
    sameAs: ["https://nohomailbox.org"],
  },
};

export const metadata: Metadata = {
  title: "À propos de NOHO Mailbox — édition Tunisie",
  description:
    "NOHO Mailbox opère un storefront physique à North Hollywood, California depuis plusieurs années. L'édition Tunisie est dédiée aux fondateurs et étudiants tunisiens.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/a-propos" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto mb-6 max-w-xl rounded-3xl overflow-hidden" style={{ boxShadow: "0 12px 40px rgba(45,16,15,0.15)", background: "#FFF9F3" }}>
            <StorefrontIllustration className="w-full h-auto block" />
          </div>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            À propos
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            NOHO Mailbox opère un storefront physique au cœur de North
            Hollywood, California. L&apos;édition Tunisie sert
            spécifiquement les fondateurs et étudiants tunisiens — résidents
            comme diaspora.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto space-y-7 text-[15.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.85)" }}>
          <p>
            <strong>NOHO Mailbox</strong> est une entreprise basée à Los
            Angeles, opérant depuis un local commercial réel au 5062
            Lankershim Boulevard, North Hollywood, California. L&apos;entreprise
            est enregistrée auprès de l&apos;USPS comme CMRA (Commercial
            Mail Receiving Agency), avec une équipe sur place et un notaire
            californien attaché au storefront.
          </p>
          <p>
            <strong>L&apos;édition Tunisie (nohomailboxtunis.com)</strong> est dédiée à
            une population spécifique : les fondateurs tunisiens qui ont
            besoin d&apos;une infrastructure US sans présence physique aux
            États-Unis, et les étudiants tunisiens qui candidatent à des
            universités américaines. Le tarif est en dinars, calibré en
            parité de pouvoir d&apos;achat pour la Tunisie.
          </p>
          <p>
            <strong>L&apos;offre se décompose en trois plans principaux.</strong>{" "}
            Le Business (4 000 TND une fois) couvre la
            formation LLC, l&apos;EIN, l&apos;adresse postale réelle, le
            Form 1583, l&apos;identité de marque, le site web,
            l&apos;accompagnement Mercury et Stripe. Le Suivi mensuel
            (1 200 TND/mois, mois par mois) couvre la conformité
            annuelle, le courrier prioritaire, les mises à jour brand. Le
            Portail Étudiants (1 800 TND/année) couvre les candidatures
            universités US, l&apos;adresse pour SEVIS et I-20, la
            coordination visa F-1.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Nos principes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Tarif transparent", b: "Pas de scarcity manufacturée, pas de discount inventé, pas d'urgence fabriquée. Le prix est en dinars parce que c'est la monnaie de tes clients." },
              { t: "Honest Self-Disclosure", b: "Chaque page nomme les limites du service. Le diagnostic 5 questions peut te dire que NOHO n'est PAS la bonne chose pour ta situation." },
              { t: "Pas d'évasion fiscale", b: "On opère uniquement de la structure légale et déclarée. Si l'objectif est de cacher du revenu, NOHO n'est pas le bon interlocuteur." },
              { t: "Pas de garantie bancaire", b: "Mercury, Stripe, et autres fournisseurs tiers prennent leurs propres décisions. On accompagne le dossier ; on ne garantit pas l'approbation." },
              { t: "Storefront physique", b: "5062 Lankershim Blvd, ouvert au public. Une vraie adresse, pas une fiction." },
              { t: "Pas de bio personnelle", b: "NOHO est une équipe, pas une personne. Les pages parlent de ce que l'équipe livre, pas du parcours d'un individu." },
            ].map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl" style={{ background: "#fff" }}>
                <h3 className="font-black text-[16px] mb-2" style={{ color: INK }}>{p.t}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-extrabold mb-5"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Adresse et coordonnées
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl" style={{ background: CREAM }}>
              <h3 className="font-black text-[15px] mb-2" style={{ color: INK }}>Storefront</h3>
              <p className="text-[13.5px] leading-relaxed" style={{ color: INK }}>
                5062 Lankershim Blvd<br />
                North Hollywood, CA 91601<br />
                USA
              </p>
            </div>
            <div className="p-5 rounded-2xl" style={{ background: CREAM }}>
              <h3 className="font-black text-[15px] mb-2" style={{ color: INK }}>Canaux</h3>
              <p className="text-[13.5px] leading-relaxed" style={{ color: INK }}>
                WhatsApp : +1 818 506 7744<br />
                Email : hello@nohomailbox.org<br />
                Site US : <a href="https://nohomailbox.org" className="underline">nohomailbox.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: CREAM }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Démarrer
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Diagnostic 60 secondes — sans email — te dit quel plan
            correspond à ta situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/fr/diagnostic"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              Diagnostic 5 questions →
            </Link>
            <Link
              href="/fr/appel"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              Réserver l&apos;appel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
