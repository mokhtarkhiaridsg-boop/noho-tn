import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, ARTICLES } from "@/lib/blog";
import { ouvrirLlcTunisie14Jours } from "./articles/ouvrir-llc-tunisie-14-jours";
import { mercuryBankDepuisTunis } from "./articles/mercury-bank-depuis-tunis-dossier-renforce";
import { stripeTunisieContourner } from "./articles/stripe-tunisie-refuse-contourner-llc-us";
import { form5472Penalite } from "./articles/form-5472-penalite-25000-usd";
import { wyomingDelawareNm } from "./articles/wyoming-delaware-nouveau-mexique-choisir-etat-llc";
import { apostilleTnUs } from "./articles/apostille-tn-us-guide-complet";
import { itinW7DepuisTunisie } from "./articles/itin-w7-depuis-tunisie-sans-ssn";
import { carteTechnologique } from "./articles/carte-technologique-tunisienne-plafond-1000-tnd";
import { autoentrepreneurVsLlc } from "./articles/autoentrepreneur-tunisien-vs-llc-americaine";
import { mercuryCompteFerme } from "./articles/mercury-compte-ferme-plan-b";
import { wyomingAnnualReport } from "./articles/wyoming-annual-report-60-usd";
import { bctDecembre2025 } from "./articles/bct-decembre-2025-compte-usd-resident";
import { w8benVsW9 } from "./articles/w8ben-vs-w9-non-us-person";
import { mercuryKycDossier } from "./articles/mercury-kyc-dossier-renforce-9-elements";
import { stripeApproval9ItemStack } from "./articles/stripe-approval-9-item-stack-detail";
import { registeredAgentPiege } from "./articles/registered-agent-piege-rappel";
import { traiteTunisieUsa1985 } from "./articles/traite-fiscal-tunisie-usa-1985";
import { ossEuTvaSaas } from "./articles/oss-eu-tva-saas-exporteurs";
import { carteTechnologiqueBusiness } from "./articles/carte-technologique-business-vs-perso";
import { salesTaxNexusEtat } from "./articles/sales-tax-nexus-us-par-etat";
import { tunisianAmericanMoat } from "./articles/tunisian-american-operator-moat";
import { stripeAtlasVsNohoDeepDive } from "./articles/stripe-atlas-vs-noho-deep-dive";
import { operatingAgreementWyoming } from "./articles/operating-agreement-wyoming-smllc";
import { quandNePasFormerLlc } from "./articles/quand-ne-pas-former-llc-us";
import { stripeConnectTunisiens } from "./articles/stripe-connect-platform-tunisiens";
import { bctTunisie2026Actualise } from "./articles/bct-tunisie-2026-actualise";
import { stripeAtlasVsNohoProcedureTechnique } from "./articles/stripe-atlas-vs-noho-procedure-technique";
import { mercuryFallbackWaterfall } from "./articles/mercury-fallback-waterfall-relay-brex-wise";
import { sarlTnVersLlcUs } from "./articles/sarl-tn-vers-llc-us-sans-dissoudre";
import { form5472SelfFiling } from "./articles/form-5472-self-filing-etape-par-etape";
import { diasporaReturneeTunisien } from "./articles/diaspora-returnee-tunisien-reformer-tunisie";
import { mercuryStatementForm5472PartieIv } from "./articles/mercury-statement-form-5472-partie-iv";
import { passerNohoVersStripeAtlas } from "./articles/passer-noho-wyoming-vers-stripe-atlas-cas-inverse";
import { itinW7VsCaa } from "./articles/itin-w7-vs-caa-fondateur-tunisien";
import { stripeAtlas5kCredits } from "./articles/stripe-atlas-5k-credits-valeur-reelle";
import { casPratiqueEcomTunisienAnnee1 } from "./articles/cas-pratique-ecom-tunisien-annee-1";
import { formW8BenLigneParLigne } from "./articles/form-w8ben-ligne-par-ligne";
import { nohoTeDitNonDiscoveryCall } from "./articles/noho-te-dit-non-discovery-call";
import { bctIdeDeclarationLlcUs } from "./articles/bct-ide-declaration-llc-us-tunisie";
import { tnFrBinationalFiscalite3Pays } from "./articles/tunisien-francais-binational-fiscalite-3-pays";
import { mercuryTreasuryVsChecking } from "./articles/mercury-treasury-vs-checking";
import { fermerLlcUsProprement } from "./articles/fermer-llc-us-proprement-sans-penalite";
import { premierSalarieUs1099VsW2 } from "./articles/premier-salarie-us-contractor-1099-vs-w2";
import { stripeExpressVsStandardCreatorsTunisiens } from "./articles/stripe-express-vs-standard-creators-tunisiens";
import { delaisReelsSolutionBusinessAuditHonnete } from "./articles/delais-reels-solution-business-audit-honnete";
import { visaE2TunisieInvestisseurProcedureDetaillee } from "./articles/visa-e2-tunisie-investisseur-procedure-detaillee";
import { nohoCabinetKhiariIntegrationHonnete } from "./articles/noho-cabinet-khiari-integration-honnete";
import { stripeAtlasCashMathYear1HonneteVsNoho } from "./articles/stripe-atlas-cash-math-year-1-honnete-vs-noho";
import { shopifyPaymentsTunisieVsLlcUsRoute } from "./articles/shopify-payments-tunisie-vs-llc-us-route";
import { amazonSellerCentralSetupTnDossier } from "./articles/amazon-seller-central-setup-tn-dossier";
import { wiseBusinessTunisie2026StatutReel } from "./articles/wise-business-tunisie-2026-statut-reel";
import { paddleLemonsqueezyVsStripeDirectSaasTunisiens } from "./articles/paddle-lemonsqueezy-vs-stripe-direct-saas-tunisiens";
import { upworkToptalFiverrLlcUsRouteFreelanceTunisien } from "./articles/upwork-toptal-fiverr-llc-us-route-freelance-tunisien";
import { apostilleTunisienneProcedureCompleteMae } from "./articles/apostille-tunisienne-procedure-complete-mae";
import { cinTunisienneMercuryKycDocumentsAcceptes } from "./articles/cin-tunisienne-mercury-kyc-documents-acceptes";
import { llcUsPourDeveloppeurTunisienStackComplet } from "./articles/llc-us-pour-developpeur-tunisien-stack-complet";
import { etudiantTunisienArriveeUsChecklist30Jours } from "./articles/etudiant-tunisien-arrivee-us-checklist-30-jours";
import { stripeAlternativesHighRiskVerticalsTunisien } from "./articles/stripe-alternatives-high-risk-verticals-tunisien";
import { itinW7WalkthroughComplet2026 } from "./articles/itin-w7-walkthrough-complet-2026";
import { carteTechnologiqueBusiness100kTnd2026 } from "./articles/carte-technologique-business-100k-tnd-2026";
import { mercuryPostAcquisitionStack2026Tunisien } from "./articles/mercury-post-acquisition-stack-2026-tunisien";
import { fatcaCrsImpactTunisienLlcUsOwner } from "./articles/fatca-crs-impact-tunisien-llc-us-owner";
import { choisirComptableFiscalisteTunisienLlcUs } from "./articles/choisir-comptable-fiscaliste-tunisien-llc-us";
import { diasporaTnCanadaFranceLlcUsStrategy } from "./articles/diaspora-tn-canada-france-llc-us-strategy";
import { youtubeAdsenseMonetizationTnLlcUsSetup } from "./articles/youtube-adsense-monetization-tn-llc-us-setup";
import { githubSponsorsPatreonCreatorEconomyLlcUs } from "./articles/github-sponsors-patreon-creator-economy-llc-us";
import { form1099kThresholds2026EvolutionTunisien } from "./articles/1099-k-thresholds-2026-evolution-tunisien";
import { wiseBusinessMultiCurrencyFlowOptimal } from "./articles/wise-business-multi-currency-flow-optimal";
import { appleDeveloperAppStoreTnLlcUsSetup } from "./articles/apple-developer-app-store-tn-llc-us-setup";
import { cloudflareR2WorkersPagesCreatorTunisien } from "./articles/cloudflare-r2-workers-pages-creator-tunisien";
import { stripeTaxVsTaxjarAvalaraComparison } from "./articles/stripe-tax-vs-taxjar-avalara-comparison";
import { tnExpatRetourFiscaliteAuditDgi } from "./articles/tn-expat-retour-fiscalite-audit-dgi";
import { linkedinAdsOutboundB2bLlcUsTunisien } from "./articles/linkedin-ads-outbound-b2b-llc-us-tunisien";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

const BODY: Record<string, () => React.ReactElement> = {
  "ouvrir-llc-tunisie-14-jours": ouvrirLlcTunisie14Jours,
  "mercury-bank-depuis-tunis-dossier-renforce": mercuryBankDepuisTunis,
  "stripe-tunisie-refuse-contourner-llc-us": stripeTunisieContourner,
  "form-5472-penalite-25000-usd": form5472Penalite,
  "wyoming-delaware-nouveau-mexique-choisir-etat-llc": wyomingDelawareNm,
  "apostille-tn-us-guide-complet": apostilleTnUs,
  "itin-w7-depuis-tunisie-sans-ssn": itinW7DepuisTunisie,
  "carte-technologique-tunisienne-plafond-1000-tnd": carteTechnologique,
  "autoentrepreneur-tunisien-vs-llc-americaine": autoentrepreneurVsLlc,
  "mercury-compte-ferme-plan-b": mercuryCompteFerme,
  "wyoming-annual-report-60-usd": wyomingAnnualReport,
  "bct-decembre-2025-compte-usd-resident": bctDecembre2025,
  "w8ben-vs-w9-non-us-person": w8benVsW9,
  "mercury-kyc-dossier-renforce-9-elements": mercuryKycDossier,
  "stripe-approval-9-item-stack-detail": stripeApproval9ItemStack,
  "registered-agent-piege-rappel": registeredAgentPiege,
  "traite-fiscal-tunisie-usa-1985": traiteTunisieUsa1985,
  "oss-eu-tva-saas-exporteurs": ossEuTvaSaas,
  "carte-technologique-business-vs-perso": carteTechnologiqueBusiness,
  "sales-tax-nexus-us-par-etat": salesTaxNexusEtat,
  "tunisian-american-operator-moat": tunisianAmericanMoat,
  "stripe-atlas-vs-noho-deep-dive": stripeAtlasVsNohoDeepDive,
  "operating-agreement-wyoming-smllc": operatingAgreementWyoming,
  "quand-ne-pas-former-llc-us": quandNePasFormerLlc,
  "stripe-connect-platform-tunisiens": stripeConnectTunisiens,
  "bct-tunisie-2026-actualise": bctTunisie2026Actualise,
  "stripe-atlas-vs-noho-procedure-technique": stripeAtlasVsNohoProcedureTechnique,
  "mercury-fallback-waterfall-relay-brex-wise": mercuryFallbackWaterfall,
  "sarl-tn-vers-llc-us-sans-dissoudre": sarlTnVersLlcUs,
  "form-5472-self-filing-etape-par-etape": form5472SelfFiling,
  "diaspora-returnee-tunisien-reformer-tunisie": diasporaReturneeTunisien,
  "mercury-statement-form-5472-partie-iv": mercuryStatementForm5472PartieIv,
  "passer-noho-wyoming-vers-stripe-atlas-cas-inverse": passerNohoVersStripeAtlas,
  "itin-w7-vs-caa-fondateur-tunisien": itinW7VsCaa,
  "stripe-atlas-5k-credits-valeur-reelle": stripeAtlas5kCredits,
  "cas-pratique-ecom-tunisien-annee-1": casPratiqueEcomTunisienAnnee1,
  "form-w8ben-ligne-par-ligne": formW8BenLigneParLigne,
  "noho-te-dit-non-discovery-call": nohoTeDitNonDiscoveryCall,
  "bct-ide-declaration-llc-us-tunisie": bctIdeDeclarationLlcUs,
  "tunisien-francais-binational-fiscalite-3-pays": tnFrBinationalFiscalite3Pays,
  "mercury-treasury-vs-checking": mercuryTreasuryVsChecking,
  "fermer-llc-us-proprement-sans-penalite": fermerLlcUsProprement,
  "premier-salarie-us-contractor-1099-vs-w2": premierSalarieUs1099VsW2,
  "stripe-express-vs-standard-creators-tunisiens": stripeExpressVsStandardCreatorsTunisiens,
  "delais-reels-solution-business-audit-honnete": delaisReelsSolutionBusinessAuditHonnete,
  "visa-e2-tunisie-investisseur-procedure-detaillee": visaE2TunisieInvestisseurProcedureDetaillee,
  "noho-cabinet-khiari-integration-honnete": nohoCabinetKhiariIntegrationHonnete,
  "stripe-atlas-cash-math-year-1-honnete-vs-noho": stripeAtlasCashMathYear1HonneteVsNoho,
  "shopify-payments-tunisie-vs-llc-us-route": shopifyPaymentsTunisieVsLlcUsRoute,
  "amazon-seller-central-setup-tn-dossier": amazonSellerCentralSetupTnDossier,
  "wise-business-tunisie-2026-statut-reel": wiseBusinessTunisie2026StatutReel,
  "paddle-lemonsqueezy-vs-stripe-direct-saas-tunisiens": paddleLemonsqueezyVsStripeDirectSaasTunisiens,
  "upwork-toptal-fiverr-llc-us-route-freelance-tunisien": upworkToptalFiverrLlcUsRouteFreelanceTunisien,
  "apostille-tunisienne-procedure-complete-mae": apostilleTunisienneProcedureCompleteMae,
  "cin-tunisienne-mercury-kyc-documents-acceptes": cinTunisienneMercuryKycDocumentsAcceptes,
  "llc-us-pour-developpeur-tunisien-stack-complet": llcUsPourDeveloppeurTunisienStackComplet,
  "etudiant-tunisien-arrivee-us-checklist-30-jours": etudiantTunisienArriveeUsChecklist30Jours,
  "stripe-alternatives-high-risk-verticals-tunisien": stripeAlternativesHighRiskVerticalsTunisien,
  "itin-w7-walkthrough-complet-2026": itinW7WalkthroughComplet2026,
  "carte-technologique-business-100k-tnd-2026": carteTechnologiqueBusiness100kTnd2026,
  "mercury-post-acquisition-stack-2026-tunisien": mercuryPostAcquisitionStack2026Tunisien,
  "fatca-crs-impact-tunisien-llc-us-owner": fatcaCrsImpactTunisienLlcUsOwner,
  "choisir-comptable-fiscaliste-tunisien-llc-us": choisirComptableFiscalisteTunisienLlcUs,
  "diaspora-tn-canada-france-llc-us-strategy": diasporaTnCanadaFranceLlcUsStrategy,
  "youtube-adsense-monetization-tn-llc-us-setup": youtubeAdsenseMonetizationTnLlcUsSetup,
  "github-sponsors-patreon-creator-economy-llc-us": githubSponsorsPatreonCreatorEconomyLlcUs,
  "1099-k-thresholds-2026-evolution-tunisien": form1099kThresholds2026EvolutionTunisien,
  "wise-business-multi-currency-flow-optimal": wiseBusinessMultiCurrencyFlowOptimal,
  "apple-developer-app-store-tn-llc-us-setup": appleDeveloperAppStoreTnLlcUsSetup,
  "cloudflare-r2-workers-pages-creator-tunisien": cloudflareR2WorkersPagesCreatorTunisien,
  "stripe-tax-vs-taxjar-avalara-comparison": stripeTaxVsTaxjarAvalaraComparison,
  "tn-expat-retour-fiscalite-audit-dgi": tnExpatRetourFiscaliteAuditDgi,
  "linkedin-ads-outbound-b2b-llc-us-tunisien": linkedinAdsOutboundB2bLlcUsTunisien,
};

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://nohomailboxtunis.com/blog/${article.slug}`,
      languages: {
        "fr-TN": `https://nohomailboxtunis.com/blog/${article.slug}`,
        "ar-TN": `https://nohomailboxtunis.com/ar/blog/${article.slug}`,
        "x-default": `https://nohomailboxtunis.com/blog/${article.slug}`,
      },
    },
    openGraph: {
    images: ["https://nohomailboxtunis.com/opengraph-image"],
      title: article.title,
      description: article.excerpt,
      url: `https://nohomailboxtunis.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const Body = BODY[slug];
  if (!Body) notFound();

  const url = `https://nohomailboxtunis.com/blog/${article.slug}`;
  const publisherGraph = {
    "@type": "Organization",
    "@id": "https://nohomailboxtunis.com/#org",
    name: "NOHO Mailbox",
    url: "https://nohomailboxtunis.com/fr",
    logo: { "@type": "ImageObject", url: "https://nohomailboxtunis.com/fr/icon.svg", width: 512, height: 512 },
    sameAs: ["https://nohomailbox.org"],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "fr-TN",
    articleSection: article.categoryLabel,
    wordCount: article.readingMinutes * 200,
    author: publisherGraph,
    publisher: publisherGraph,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@type": "Blog", "@id": "https://nohomailboxtunis.com/blog" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://nohomailboxtunis.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://nohomailboxtunis.com/blog" },
      { "@type": "ListItem", position: 3, name: article.categoryLabel, item: `https://nohomailboxtunis.com/blog/categorie/${article.category}` },
      { "@type": "ListItem", position: 4, name: article.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article>
        <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
              <Link href="/fr" className="hover:underline">Accueil</Link>
              <span className="mx-1.5">·</span>
              <Link href="/fr/blog" className="hover:underline">Blog</Link>
              <span className="mx-1.5">·</span>
              <span>{article.categoryLabel}</span>
            </div>
            <h1
              className="font-extrabold leading-[1.1] tracking-tight mb-4"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              {article.title}
            </h1>
            <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: "rgba(45,16,15,0.78)" }}>
              {article.excerpt}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-[12px]" style={{ color: "rgba(45,16,15,0.55)" }}>
              <span>{new Date(article.publishedAt).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>·</span>
              <span>{article.readingMinutes} min de lecture</span>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-6 py-10 sm:py-14" style={{ background: "#fff" }}>
          <div
            className="max-w-3xl mx-auto text-[15.5px] leading-[1.7] prose prose-noho"
            style={{ color: "#1F0807", fontFamily: "var(--font-baloo), sans-serif" }}
          >
            <Body />
          </div>
        </section>

        <section className="px-5 sm:px-6 py-12 text-center" style={{ background: CREAM }}>
          <div className="max-w-xl mx-auto">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-2" style={{ color: BLUE }}>
              On peut t&apos;aider
            </p>
            <h2
              className="font-extrabold mb-3"
              style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              Premier appel gratuit, 30 minutes
            </h2>
            <p className="text-[14px] leading-relaxed mb-6" style={{ color: "rgba(45,16,15,0.75)" }}>
              On regarde ton dossier ensemble. On te dit honnêtement si on
              peut aider — ou non.
            </p>
            <Link
              href="/fr/appel"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 24px rgba(45,16,15,0.24)" }}
            >
              Réserver l&apos;appel →
            </Link>
          </div>
        </section>

        <section className="px-5 sm:px-6 py-10" style={{ background: "#fff" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
              Autres articles
            </p>
            <ul className="space-y-3">
              {ARTICLES.filter((a) => a.slug !== article.slug).map((a) => (
                <li key={a.slug}>
                  <Link href={`/blog/${a.slug}`} className="block p-4 rounded-2xl transition-all hover:-translate-y-0.5" style={{ background: CREAM }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-1" style={{ color: BLUE }}>
                      {a.categoryLabel}
                    </p>
                    <h3 className="font-extrabold text-[15px] mb-1" style={{ color: INK }}>{a.title}</h3>
                    <p className="text-[13px]" style={{ color: "rgba(45,16,15,0.7)" }}>{a.excerpt.slice(0, 110)}…</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </>
  );
}
