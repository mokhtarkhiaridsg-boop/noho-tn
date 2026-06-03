import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales d'utilisation de NOHO Mailbox Tunisie.",
  alternates: { canonical: "https://noho.tn/terms" },
};

export default function TermsPage() {
  return (
    <section className="px-5 sm:px-6 pt-12 pb-20" style={{ background: "#fff", color: "#2D100F" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-extrabold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontFamily: "var(--font-baloo), sans-serif" }}>
          Conditions générales
        </h1>
        <div className="space-y-5 text-[14.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.85)" }}>
          <p>
            <strong>NOHO Mailbox Tunisie</strong> est l&apos;édition tunisienne
            (tarification en dinars, support en français/TN-arabizi) de NOHO
            Mailbox, opérée depuis le storefront physique au 5062 Lankershim
            Blvd, North Hollywood, CA 91601, USA.
          </p>
          <h2 className="font-black text-[20px] mt-7 mb-3" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
            1. Périmètre du service
          </h2>
          <p>
            NOHO accompagne la structure opérationnelle d&apos;une LLC
            américaine pour fondateurs non-résidents : formation entité,
            obtention EIN, adresse postale réelle US, Form 1583 USPS notarisé,
            identité de marque, site web, accompagnement candidatures
            bancaires et processeurs de paiement, accompagnement candidatures
            universitaires US (Portail Étudiants).
          </p>
          <h2 className="font-black text-[20px] mt-7 mb-3" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
            2. Ce que NOHO n&apos;est PAS
          </h2>
          <p>
            NOHO n&apos;est pas un cabinet d&apos;avocats, ni un CPA, ni un
            expert-comptable agréé en Tunisie ou aux États-Unis. NOHO ne
            fournit pas de conseil fiscal, juridique, ou comptable
            personnalisé. Chaque client doit consulter un fiscaliste tunisien
            agréé et/ou un CPA américain pour sa situation déclarative et
            fiscale personnelle.
          </p>
          <h2 className="font-black text-[20px] mt-7 mb-3" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
            3. Garanties
          </h2>
          <p>
            NOHO garantit la livraison contractuelle des éléments de la Solution
            (formation LLC, EIN, adresse, Form 1583, brand, site, social,
            stratégie) en 14 jours. NOHO ne garantit PAS : (a) le délai
            d&apos;émission de l&apos;EIN par l&apos;IRS (4-6 semaines
            typique, hors de notre contrôle) ; (b) l&apos;approbation Mercury,
            Stripe, ou tout autre fournisseur tiers ; (c) l&apos;admission
            dans une université US ; (d) l&apos;octroi du visa F-1 par le
            consulat des États-Unis.
          </p>
          <h2 className="font-black text-[20px] mt-7 mb-3" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
            4. Tarifs et remboursement
          </h2>
          <p>
            Les tarifs en dinars sont calibrés pour les résidents tunisiens.
            Le Business (4 000 TND) est non-remboursable une fois le filing
            Wyoming initié (jour 2). Le Suivi mensuel (1 200 TND/mois) est
            annulable à tout moment, le mois en cours reste dû. Le Portail
            Étudiants (1 800 TND/année) est annulable jusqu&apos;à la
            soumission de la première candidature.
          </p>
          <h2 className="font-black text-[20px] mt-7 mb-3" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
            5. Litiges
          </h2>
          <p>
            Tout litige sera traité en premier lieu par discussion directe
            (WhatsApp, email). À défaut d&apos;accord, le droit applicable
            est celui de l&apos;État de Californie (USA), juridiction
            compétente Los Angeles County, sauf disposition contraire
            d&apos;ordre public tunisien.
          </p>
          <h2 className="font-black text-[20px] mt-7 mb-3" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
            6. Modifications
          </h2>
          <p>
            Ces conditions peuvent évoluer. La dernière mise à jour est
            datée en bas de page. Les clients actifs sont notifiés par email
            de toute modification matérielle.
          </p>
          <p className="text-[12px] italic mt-7" style={{ color: "rgba(45,16,15,0.55)" }}>
            Dernière mise à jour : mai 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
