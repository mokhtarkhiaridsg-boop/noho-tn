import Link from "next/link";

export function form1099kThresholds2026EvolutionTunisien() {
  return (
    <>
      <p>
        Le seuil Form 1099-K (déclaration IRS des revenus payment
        processors comme Stripe, PayPal, Square) a connu une évolution
        chaotique 2021-2026. Pour fondateur TN avec LLC US, comprendre
        où en est le seuil 2026 + 2027 prévisionnel est critique :
        détermine quand IRS reçoit info sur tes revenus, quand backup
        withholding s&apos;active, et comment structurer.
      </p>

      <h2>L&apos;histoire du seuil 1099-K</h2>
      <ul>
        <li>
          <strong>2008-2021</strong> : seuil 20 000 USD/an{" "}
          <em>ET</em> 200 transactions. Très high — Form 1099-K rare.
        </li>
        <li>
          <strong>American Rescue Plan Act 2021</strong> : Congrès
          abaisse à <strong>600 USD/an</strong> sans transaction
          floor. Applicable dès 2022. Tax season 2023 catastrophique.
        </li>
        <li>
          <strong>IRS retarde l&apos;application</strong> : Notice
          2023-10 et 2023-74 reportent le 600 USD à 2024+.
        </li>
        <li>
          <strong>2024 (transition)</strong> : seuil intermédiaire
          5 000 USD/an. Notice 2024-85.
        </li>
        <li>
          <strong>Juillet 2025 — renversement</strong> : le One Big
          Beautiful Bill Act (signé le 4 juillet 2025) abroge
          rétroactivement le seuil ARPA. Le seuil fédéral revient à{" "}
          <strong>20 000 USD/an ET 200 transactions</strong>.
        </li>
        <li>
          <strong>2026 (droit en vigueur)</strong> : le seuil 600 USD
          n&apos;existe plus. C&apos;est 20 000 USD + 200 transactions au
          niveau fédéral — mais certains États gardent leurs propres
          seuils plus bas, et les processeurs peuvent émettre un 1099-K
          plus tôt s&apos;ils le veulent.
        </li>
      </ul>

      <h2>Statut 2026 — ce qui s&apos;applique maintenant</h2>
      <ul>
        <li>
          <strong>Seuil fédéral 1099-K = 20 000 USD/an ET 200
          transactions</strong> par processeur (OBBBA, juillet 2025 —
          le seuil ARPA de 600 USD a été abrogé rétroactivement).
          Chaque processeur (Stripe, Square, PayPal, Amazon, Etsy,
          eBay) évalue son propre seuil et émet son propre formulaire.
        </li>
        <li>
          <strong>Pas de minimum transaction count</strong>. Même 1
          transaction de 700 USD = 1099-K émis.
        </li>
        <li>
          <strong>Émission</strong> : payment processors envoient
          1099-K au IRS + au payee (toi) avant le 31 janvier de
          l&apos;année suivante.
        </li>
        <li>
          <strong>Application aux LLC US</strong> : ta LLC reçoit
          1099-K à son EIN. Pas à ton ITIN personnel.
        </li>
      </ul>

      <h2>Impact pour ton LLC US (foreign person owner)</h2>
      <ul>
        <li>
          <strong>Form 1099-K est informatif au IRS</strong>. Ne
          déclenche pas backup withholding automatique <em>si</em>{" "}
          tu as bien rempli W-8BEN avec ITIN ou FTIN valide.
        </li>
        <li>
          <strong>Backup withholding 24% déclenchée</strong> si :
          <ul>
            <li>Tu n&apos;as pas fourni de tax form valide
            (W-8BEN, W-8BEN-E ou W-9)</li>
            <li>Tu as fourni un W-9 (faussement, comme US person)
            quand tu es non-US person</li>
            <li>Ton ITIN/EIN ne matche pas le nom légal</li>
          </ul>
        </li>
        <li>
          <strong>Pas de double imposition</strong> du fait du
          1099-K. Tu déclares ces revenus dans ton Form 5472 +
          1120 pro-forma annuel, et c&apos;est aligné.
        </li>
      </ul>

      <h2>1099-K par plateforme (2026)</h2>
      <ul>
        <li>
          <strong>Stripe</strong> : 1099-K émis selon le seuil fédéral (ou plus tôt, à sa discrétion). EIN
          de ta LLC US comme recipient.
        </li>
        <li>
          <strong>PayPal Business</strong> : 1099-K selon le seuil fédéral (des seuils d'État plus bas peuvent s'appliquer)
          via PayPal Business. Personal PayPal a règle différente
          (1099-NEC dès 600).
        </li>
        <li>
          <strong>Square</strong> : 1099-K si 600 USD/an.
        </li>
        <li>
          <strong>Amazon Seller Central</strong> : 1099-K aux
          sellers avec EIN US. Lié à ton EIN.
        </li>
        <li>
          <strong>Etsy / eBay / Walmart Marketplace</strong> :
          1099-K dès 600 USD/an.
        </li>
        <li>
          <strong>Cash App for Business</strong> : 1099-K.
        </li>
        <li>
          <strong>Venmo for Business</strong> : 1099-K.
        </li>
        <li>
          <strong>Zelle</strong> : <em>PAS</em> 1099-K (Zelle est
          bank-to-bank, pas processor). Une seule exception au
          paysage.
        </li>
      </ul>

      <h2>Conséquences pratiques pour fondateur TN</h2>
      <ul>
        <li>
          <strong>IRS connaît tous tes revenus US payment processors</strong>
          via 1099-K. Même si tu n&apos;as pas d&apos;ECI, ils ont la
          data.
        </li>
        <li>
          <strong>Tu DOIS filer Form 5472 + 1120 pro-forma</strong>{" "}
          chaque année, même sans ECI. Sinon, IRS te flag pour
          mismatch.
        </li>
        <li>
          <strong>Stripe / PayPal / etc. te demande W-8BEN valide</strong>{" "}
          chaque année. Le formulaire expire après 3 ans. Renouvelle-
          le proactivement.
        </li>
        <li>
          <strong>Si IRS détecte mismatch</strong> (1099-K reçu mais
          Form 5472 non-déposé) : notice IRS + potentiel backup
          withholding sur futurs payouts.
        </li>
      </ul>

      <h2>État vs Fédéral — distinction importante</h2>
      <ul>
        <li>
          <strong>1099-K fédéral</strong> : IRS reçoit, seuil 600
          USD/an national.
        </li>
        <li>
          <strong>1099-K état</strong> : certains états ont des
          seuils plus bas (Massachusetts, Virginia, Vermont : 600
          USD/an depuis 2020). Quelques états ont propres règles
          1099-K parallel.
        </li>
        <li>
          <strong>Pour LLC US Wyoming TN-owned</strong> : pas
          d&apos;état income tax (Wyoming 0%), donc pas de filing
          état pour ces revenus. Mais 1099-K reste émis au niveau
          fédéral.
        </li>
      </ul>

      <h2>Le piège classique — backup withholding sur Stripe</h2>
      <p>
        Scénario : ton Stripe LLC US a fourni W-8BEN avec ITIN il y a
        2 ans. Renouvellement obligatoire après 3 ans. Tu oublies. À
        l&apos;expiration, Stripe applique automatiquement{" "}
        <strong>24% backup withholding</strong> sur tous tes payouts.
      </p>
      <p>
        Conséquences :
      </p>
      <ul>
        <li>
          ~24% de tes Stripe payouts retenus, envoyés à l&apos;IRS.
        </li>
        <li>
          Récupération via Form 1040-NR ou Form 1120 pour ton LLC.
          Délai 3-9 mois pour refund.
        </li>
        <li>
          Cash flow significantly impacté.
        </li>
        <li>
          <strong>Solution préventive</strong> : alerte calendrier
          tous les 2.5 ans pour renouveler W-8BEN sur Stripe + PayPal
          + Square + tous processors actifs.
        </li>
      </ul>

      <h2>1099-K + Stripe Atlas / NOHO — divergence</h2>
      <ul>
        <li>
          <strong>Stripe Atlas C-Corp</strong> : Stripe gère le
          W-9 backend (puisque tu es entité US). 1099-K émis à ton
          C-Corp EIN. Compliance plus simple.
        </li>
        <li>
          <strong>NOHO Wyoming LLC SMLLC + foreign owner</strong> :
          W-8BEN ou W-8BEN-E pour le beneficial owner. 1099-K émis
          à l&apos;EIN de la LLC. Renouvellement tax form tous les
          3 ans plus délicat.
        </li>
      </ul>

      <h2>Projection 2027+ — ce qui pourrait changer</h2>
      <ul>
        <li>
          <strong>Stable au seuil 600 USD/an</strong> : peu probable
          que Congrès relève à nouveau. Le 600 USD est dans la loi
          (ARP 2021).
        </li>
        <li>
          <strong>Potentiel changement</strong> : si majorité
          parlementaire change 2025-2027, possibilité retour vers
          seuil 5K ou 10K. Mais aucun signal législatif en cours
          mai 2026.
        </li>
        <li>
          <strong>Forme du Form 1099-K</strong> : évolution potentielle
          vers e-filing only + aggregation cross-platform. Watch
          IRS.gov annual updates.
        </li>
        <li>
          <strong>CRS-equivalent US</strong> : pas en cours. Mais
          réformes G20 / OECD pourraient pousser US vers framework
          plus ouvert.
        </li>
      </ul>

      <h2>Stratégie de compliance — 6 actions concrètes</h2>
      <ol>
        <li>
          <strong>Vérifie ton W-8BEN sur chaque processor</strong>
          tous les ans. Note date d&apos;expiration (3 ans après
          signature).
        </li>
        <li>
          <strong>Tax form correct par entité</strong> : W-9 pour
          C-Corp US, W-8BEN-E pour LLC US owned by foreign person
          (entity), W-8BEN pour individual non-US person.
        </li>
        <li>
          <strong>EIN consistency</strong> : ton EIN sur W-8BEN-E
          doit matcher exact ton EIN dans Stripe / PayPal / Mercury.
        </li>
        <li>
          <strong>Adresse business cohérente</strong> : 5062
          Lankershim partout. Mismatch = flag IRS / processor.
        </li>
        <li>
          <strong>Form 5472 + 1120 pro-forma annuel</strong> : ne
          jamais skip, même si revenus US sont 0. Penalty 25 000
          USD.{" "}
          <Link href="/fr/blog/form-5472-self-filing-etape-par-etape">
            Self-filing guide
          </Link>
          .
        </li>
        <li>
          <strong>Reconciliation comptable annuelle</strong> : tes
          1099-K reçus de Stripe + autres = total qui doit matcher
          tes Mercury statements deposits. Si écart, identification
          source pour audit-proof.
        </li>
      </ol>

      <h2>NOHO Suivi mensuel et 1099-K</h2>
      <ul>
        <li>
          <strong>NOHO Suivi mensuel</strong> (1 200 TND/mois) inclut :
          monitoring W-8BEN expiration dates sur tous tes
          processors, alerte 90 jours avant expiration.
        </li>
        <li>
          <strong>Coordination Form 5472 annuel</strong> avec CPA US
          partenaire.
        </li>
        <li>
          <strong>Reconciliation 1099-K vs Mercury statements</strong>
          {" "}
          au moment du closing comptable annuel.
        </li>
      </ul>

      <h2>Verdict</h2>
      <p>
        Le seuil 1099-K 600 USD/an 2026+ signifie l&apos;IRS connaît
        TOUS tes revenus US payment processors dès le premier dollar.
        Ce n&apos;est pas un problème en soi (pas de double imposition,
        c&apos;est juste informatif), mais ça oblige à une compliance
        rigoureuse : W-8BEN renouvelé, Form 5472 annuel, reconciliation
        comptable annuelle. Fondateurs TN qui négligent ça = backup
        withholding 24% + amendes potentielles.
      </p>

      <h2>Et maintenant ?</h2>
      <p>
        Tu opères LLC US avec Stripe et tu veux audit ton W-8BEN +
        compliance 1099-K ?{" "}
        <Link href="/fr/appel">Réserve un appel</Link>. On audit ton
        setup actuel et on identifie les fixes (renewal W-8BEN, EIN
        consistency, reconciliation) avant qu&apos;ils deviennent
        amendes.
      </p>
    </>
  );
}
