import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Politique de confidentialité de NOHO Mailbox Tunisie.",
  alternates: { canonical: "https://noho.tn/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="px-5 sm:px-6 pt-12 pb-20" style={{ background: "#fff", color: "#2D100F" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-extrabold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontFamily: "var(--font-baloo), sans-serif" }}>
          Politique de confidentialité
        </h1>
        <div className="space-y-5 text-[14.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.85)" }}>
          <p>
            <strong>NOHO Mailbox (édition Tunisie)</strong> collecte uniquement les
            données strictement nécessaires à la livraison du service :
            identité (nom, prénom, CIN ou passeport pour Form 1583), adresse
            postale (en Tunisie pour la facturation, aux USA via la LLC), email
            et numéro WhatsApp pour la communication, et données bancaires
            associées aux paiements (traités via banque locale en TND).
          </p>
          <p>
            <strong>Aucune donnée n&apos;est revendue.</strong> Aucune
            donnée n&apos;est partagée avec des tiers en dehors de :
            (1) l&apos;administration américaine pour les déclarations IRS et
            Wyoming SoS strictement requises ; (2) les banques américaines
            (Mercury, Relay, Wise, Stripe) pour les candidatures bancaires
            que tu nous demandes de soumettre ; (3) les avocats américains
            partenaires sur les dossiers visa F-1 que tu nous demandes de
            coordonner.
          </p>
          <p>
            <strong>Stockage.</strong> Les documents sont stockés sur des
            serveurs sécurisés US et accessibles uniquement à l&apos;équipe
            NOHO. Tu peux demander la suppression de tes données à tout
            moment via hello@nohomailbox.org, sous réserve des obligations
            légales de conservation (5-7 ans pour les documents IRS).
          </p>
          <p>
            <strong>Cookies.</strong> Le site noho.tn n&apos;utilise pas de
            cookies de tracking comportemental ni de pixels publicitaires
            tiers. Aucun cookie tiers (Google Ads, Meta, etc.) n&apos;est
            déposé.
          </p>
          <p>
            <strong>Contact.</strong> Pour toute question relative à tes
            données personnelles : hello@nohomailbox.org.
          </p>
        </div>
      </div>
    </section>
  );
}
