import Link from "next/link";

export function bctDecembre2025() {
  return (
    <>
      <p>
        Le 2 décembre 2025, l&apos;ARP a adopté à 69 voix contre 17 un
        amendement à la Loi de Finances 2026 qui autorise pour la première
        fois depuis 50 ans les <strong>résidents fiscaux tunisiens</strong>{" "}
        à détenir un compte en devises (USD/EUR) ou en dinars convertibles
        chez n&apos;importe quel intermédiaire agréé,{" "}
        <strong>sans autorisation préalable de la BCT</strong>. Entrée en
        vigueur : 1er janvier 2026. Voici le guide pratique pour ouvrir le
        tien.
      </p>

      <h2>Ce que la loi autorise (et ce qu&apos;elle n&apos;autorise pas)</h2>
      <ul>
        <li>
          <strong>Autorisé</strong> : ouvrir un PPR (Compte Personne
          Physique Résidente) en devises USD/EUR ou en dinars
          convertibles auprès de BIAT, Attijari, BT, BNA, STB, UIB,
          Amen, Zitouna, ATB, QNB.
        </li>
        <li>
          <strong>Funding autorisé</strong> : virements depuis
          l&apos;étranger, intérêts sur le solde, allocation touristique
          annuelle (6 000 TND/an adulte, 3 000 TND enfant).
        </li>
        <li>
          <strong>Sortie autorisée</strong> : paiements internationaux,
          retraits en devises pour voyage, virement vers un autre compte
          PPR.
        </li>
        <li>
          <strong>Non autorisé</strong> : découvert (zéro tolérance),
          financement de propriété hors TN, achats spéculatifs sur les
          marchés. Le PPR n&apos;est pas un compte d&apos;investissement.
        </li>
        <li>
          Intérêts sur le solde soumis à un prélèvement libératoire
          symbolique de 0.01%.
        </li>
      </ul>

      <h2>Pourquoi cette réforme est massive</h2>
      <p>
        Pendant 50 ans, un résident tunisien recevant un virement en USD
        devait le convertir en TND à réception, au taux du jour de la
        banque (souvent défavorable de 3-5% vs marché). Pour les
        freelances, e-commerçants, et fondateurs de LLC US, c&apos;était
        une saignée systématique. Aujourd&apos;hui tu peux :
      </p>
      <ul>
        <li>Recevoir 5 000 USD de ton client US sur ton compte BIAT
          USD, garder le solde en USD.</li>
        <li>Payer ton fournisseur Vercel/AWS/Stripe directement depuis
          ce solde USD sans conversion.</li>
        <li>Ne convertir en TND que la partie que tu veux dépenser
          localement, au moment où tu choisis.</li>
        <li>Combiner avec Mercury USD : ton USD vit dans les deux pays,
          tu le déplaces au besoin.</li>
      </ul>

      <h2>Quelle banque ouvre vraiment le PPR en mai 2026</h2>
      <p>
        L&apos;application varie. Beaucoup de banques ont le produit sur
        leur site mais leurs guichetiers ne sont pas formés. Au moment où
        nous écrivons (mai 2026) :
      </p>
      <ul>
        <li>
          <strong>BIAT</strong> : leader. Procédure rodée, branches Lac
          2/Tunis Centre/Sfax acceptent le PPR sans friction. Délai
          d&apos;ouverture : 5-7 jours ouvrés.
        </li>
        <li>
          <strong>Attijari Bank</strong> : pratique sur les branches
          urbaines. Demande un dossier source-of-funds plus complet pour
          les wires &gt; 10K USD.
        </li>
        <li>
          <strong>UIB (Société Générale)</strong> : excellent pour les
          tunisiens recevant des wires de France/EU grâce aux rails BNP
          Paribas/SocGen. Pack &quot;Tunisiens du Monde&quot; intéressant.
        </li>
        <li>
          <strong>BT, BNA, STB</strong> : produit existe mais
          implémentation plus lente. À tester avec ta succursale locale.
        </li>
        <li>
          <strong>Banque Zitouna</strong> : version islamique du PPR
          (compatible Sharia). Procédure identique.
        </li>
      </ul>

      <h2>Le dossier KYC à présenter à ta banque</h2>
      <p>
        Vérifié sur les pages BIAT/Attijari/Zitouna en mai 2026 :
      </p>
      <ol>
        <li>CIN valide (recto-verso scannée).</li>
        <li>
          <strong>Déclaration sur l&apos;honneur</strong> certifiant
          qu&apos;il n&apos;existe aucun autre PPR ouvert à ton nom dans
          un autre intermédiaire agréé.
        </li>
        <li>
          <strong>Justificatif d&apos;origine des fonds</strong> : facture
          client US/EU + contrat freelance/SaaS, ou (mieux) certificat
          d&apos;immatriculation de ta LLC US + statement Mercury
          montrant l&apos;activité USD entrante.
        </li>
        <li>Justificatif d&apos;adresse en Tunisie (facture STEG/SONEDE,
          contrat de bail).</li>
        <li>Si déjà en activité freelance : attestation
          d&apos;autoentrepreneur ou matricule fiscal TN.</li>
      </ol>

      <h2>Pour les détenteurs de LLC US — le combo gagnant</h2>
      <p>
        Si tu opères une LLC US (Wyoming/Delaware/NM) avec compte Mercury,
        la chaîne est désormais :
      </p>
      <ol>
        <li>
          Client US paie ta LLC en USD → Mercury reçoit le wire.
        </li>
        <li>
          Tu wire-out depuis Mercury vers ton PPR BIAT USD (5-20 USD de
          frais, 1-3 jours ouvrés).
        </li>
        <li>
          Tu gardes l&apos;USD sur BIAT, tu paies tes fournisseurs TN en
          dinars en convertissant seulement la fraction nécessaire.
        </li>
        <li>
          Reste à déclarer ces revenus dans ta déclaration IRPP annuelle
          (article 6 loi 91-25 sur le contrôle des changes —
          obligation maintenue, ce n&apos;est pas l&apos;exemption).
        </li>
      </ol>

      <h2>Les pièges à éviter</h2>
      <ul>
        <li>
          <strong>Pas de découvert</strong>. Si tu débites plus que ton
          solde, la banque rejette la transaction. Pas
          d&apos;overdraft autorisé sur PPR.
        </li>
        <li>
          <strong>Conversion automatique forcée si tu changes de
          banque</strong>. Si tu fermes ton PPR, le solde est converti en
          TND au taux du jour. Vérifie avant de fermer.
        </li>
        <li>
          <strong>Plafond pratique non écrit</strong>. La loi ne définit
          pas de plafond annuel pour le PPR, mais chaque banque applique
          ses limites internes AML (souvent 50K-100K USD/an avant review
          enhanced).
        </li>
        <li>
          <strong>Justificatif source-of-funds requis pour
          chaque</strong> wire entrant &gt; 10K USD. Garde tes factures
          clients en PDF + tes contrats signés.
        </li>
        <li>
          <strong>Audit fiscal possible</strong>. La DGI peut désormais
          cross-référencer tes wires entrants PPR avec ta déclaration
          IRPP. Sous-déclarer = audit + redressement avec pénalités.
        </li>
      </ul>

      <h2>BCT vs IRPP — les obligations restent séparées</h2>
      <p>
        Ouvrir un PPR ne te dispense pas de :
      </p>
      <ul>
        <li>
          Déclarer tes revenus mondiaux dans ta déclaration IRPP annuelle.
        </li>
        <li>
          Payer l&apos;IRPP sur tes revenus de l&apos;autoentrepreneur ou
          ta LLC (selon ton régime).
        </li>
        <li>
          Si tu opères une LLC US : déposer{" "}
          <Link href="/blog/form-5472-penalite-25000-usd" className="font-bold underline" style={{ color: "#337485" }}>
            Form 5472 + 1120
          </Link>{" "}
          côté fédéral US chaque année.
        </li>
      </ul>

      <h2>Notre recommandation pour clients NOHO</h2>
      <p>
        Pour les clients Solution Business, on ouvre désormais
        systématiquement <strong>BIAT PPR USD + UIB PPR USD (backup)</strong>{" "}
        dès la formation LLC. Coût négligeable, mais ça donne 2 voies de
        rapatriement en cas de blocage d&apos;une banque. Le Suivi
        mensuel inclut la coordination du dossier auprès de ta succursale
        + le pack source-of-funds template.{" "}
        <Link href="/business" className="font-bold underline" style={{ color: "#337485" }}>
          Voir Solution Business
        </Link>{" "}
        pour les détails.
      </p>
    </>
  );
}
