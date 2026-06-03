import Link from "next/link";

export function carteTechnologique() {
  return (
    <>
      <p>
        La <strong>carte technologique</strong> est l&apos;outil que la
        BCT met à disposition des résidents tunisiens pour faire des
        paiements en ligne en devises auprès de fournisseurs étrangers
        de services technologiques. Sur le papier, c&apos;est bien
        pensé. En pratique, le plafond de 1 000 TND/an la rend
        inutilisable dès que tu démarres un vrai business.
      </p>

      <h2>Comment fonctionne la carte technologique</h2>
      <ul>
        <li>
          Délivrée par les banques tunisiennes (BIAT, Attijari, BNA,
          ATB, etc.) sur demande, à un résident fiscal tunisien.
        </li>
        <li>
          Permet uniquement des paiements en faveur de fournisseurs de
          services technologiques étrangers (hébergement, SaaS,
          formation en ligne, certaines marketplaces).
        </li>
        <li>
          Plafond annuel : <strong>1 000 TND</strong> (environ 320 USD
          en mai 2026). Réinitialisé chaque 1er janvier.
        </li>
        <li>
          Tu déclares chaque paiement à ta banque avec le motif et la
          facture du fournisseur.
        </li>
      </ul>

      <h2>Pourquoi 1 000 TND/an ne suffit pas</h2>
      <p>
        Voici un budget réaliste pour un freelance ou e-commerce qui
        veut opérer en ligne en 2026 :
      </p>
      <ul>
        <li>Hébergement Vercel Pro : 20 USD/mois × 12 = 240 USD/an ≈ 750 TND</li>
        <li>Google Workspace : 6 USD/mois × 12 = 72 USD ≈ 225 TND</li>
        <li>Domaine .com + email pro : ~50 USD/an ≈ 155 TND</li>
        <li>Outils SaaS (Notion, Linear, Figma) : ~30 USD/mois × 12 = 360 USD ≈ 1 120 TND</li>
        <li>Mercury setup via NOHO ou Stripe Atlas : 500-2 000 USD une fois</li>
      </ul>
      <p>
        Total annuel récurrent : <strong>~2 250 TND</strong>, deux fois
        et demi le plafond. Et ça n&apos;inclut pas les achats one-off
        (achat de domaine premium, paiement freelance étranger, etc.).
      </p>

      <h2>Pourquoi la BCT a fixé ce plafond</h2>
      <p>
        Politique de contrôle des changes héritée des années 90. La
        Tunisie ne dispose pas de réserves de devises infinies, donc la
        BCT limite les sorties pour les particuliers. Le plafond a été
        ajusté plusieurs fois mais reste insuffisant pour une activité
        professionnelle.
      </p>
      <p>
        Ce qui débloque, c&apos;est de basculer en{" "}
        <strong>profil business</strong> : régime auto-entrepreneur
        avec carte technologique business (plafond plus élevé sur
        justification), OU LLC américaine avec banque US (plus de
        contrôle BCT du tout puisque l&apos;argent ne sort pas de
        Tunisie).
      </p>

      <h2>Les trois voies de contournement</h2>
      <ol>
        <li>
          <strong>Régime AE business + carte tech business.</strong>{" "}
          Tu déclares ton activité, tu te paies en TND, tu peux
          demander une carte tech business avec un plafond négocié
          (généralement 3 000-10 000 TND/an selon ton CA déclaré).
          Inconvénient : tu paies l&apos;IRPP sur tout ton CA, même la
          partie en devises de tes clients étrangers.
        </li>
        <li>
          <strong>LLC américaine + Mercury.</strong> Tu factures depuis
          la LLC, tu reçois en USD sur Mercury, tu paies tes
          fournisseurs SaaS en USD direct. Aucun plafond BCT puisque
          l&apos;argent reste hors de Tunisie. C&apos;est la voie que
          NOHO opère via la{" "}
          <Link href="/business" className="font-bold underline" style={{ color: "#337485" }}>
            Solution Business
          </Link>.
        </li>
        <li>
          <strong>Combo SARL TN + LLC US.</strong> Tu factures tes
          clients TN/Maghreb depuis la SARL, tes clients US/EU depuis
          la LLC. Maximise l&apos;optimisation mais double la
          comptabilité.
        </li>
      </ol>

      <h2>Honest Self-Disclosure</h2>
      <p>
        NOHO ne te promet pas de contourner la BCT. La LLC américaine
        est une structure parfaitement légale, déclarée à l&apos;IRS,
        avec une comptabilité propre. Ton seul devoir BCT, c&apos;est
        de déclarer tes revenus mondiaux dans ta déclaration IRPP
        annuelle (article 6 de la loi 91-25 sur le contrôle des
        changes). Ne pas le faire est de la fraude — qu&apos;on
        n&apos;encourage jamais.
      </p>
    </>
  );
}
