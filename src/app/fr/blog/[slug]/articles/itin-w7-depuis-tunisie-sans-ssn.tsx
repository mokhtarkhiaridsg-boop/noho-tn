import Link from "next/link";

export function itinW7DepuisTunisie() {
  return (
    <>
      <p>
        L&apos;<strong>ITIN</strong> (Individual Taxpayer Identification
        Number) est l&apos;équivalent IRS du SSN américain, destiné aux
        non-US persons qui ont une obligation fiscale aux USA. Pour un
        fondateur tunisien, c&apos;est utile dans deux cas précis : tu
        remplis un W-8BEN et l&apos;ITIN va en ligne 5 pour réclamer le
        taux du traité Tunisie-USA, ou tu touches des revenus US-source
        qui déclenchent une déclaration. (Un non-US person ne signe
        jamais un W-9 — même avec un ITIN.)
      </p>

      <p>
        Voici comment l&apos;obtenir depuis Tunis sans mettre les pieds
        aux USA — et surtout, quand ne pas le demander.
      </p>

      <h2>Qui devrait demander un ITIN</h2>
      <ul>
        <li>
          <strong>Tu reçois des royalties US</strong> (Amazon KDP,
          Apple App Store, Spotify, YouTube) en tant que personne
          physique. Sans ITIN, retenue automatique de 30% à la source.
          Avec ITIN + W-8BEN bien rempli + traité fiscal Tunisie-USA,
          tu peux réduire ou éliminer cette retenue.
        </li>
        <li>
          <strong>Tu remplis un W-8BEN</strong> et tu veux le taux
          réduit du traité fiscal Tunisie-USA : l&apos;ITIN va en ligne 5.
          Sans ITIN, la retenue par défaut de 30% s&apos;applique souvent.
        </li>
        <li>
          <strong>Tu vas acheter de l&apos;immobilier US</strong> en
          ton nom personnel (pas via LLC). L&apos;ITIN devient
          obligatoire pour la transaction et les déclarations
          annuelles.
        </li>
      </ul>

      <h2>Qui n&apos;en a PAS besoin</h2>
      <ul>
        <li>
          Tu opères via une LLC américaine et tu n&apos;as pas de revenu
          personnel US-source. L&apos;EIN de ta LLC suffit, pas besoin
          d&apos;ITIN personnel.
        </li>
        <li>
          Tu factures du service depuis la Tunisie via Stripe / Mercury
          à des clients US. Tu signes un W-8BEN (sans ITIN, c&apos;est
          OK pour cette utilisation).
        </li>
        <li>
          Tu touches des dividendes ou intérêts US passifs &lt; 100
          USD/an. Le coût d&apos;administration ne vaut pas la peine.
        </li>
      </ul>

      <h2>Procédure exacte</h2>
      <ol>
        <li>
          <strong>Formulaire W-7.</strong> Téléchargeable sur irs.gov.
          Tu indiques ta raison d&apos;obtention (a-h selon ton cas),
          tes infos personnelles, et tu signes.
        </li>
        <li>
          <strong>Justification de l&apos;identité.</strong> L&apos;IRS
          demande l&apos;original (ou la copie certifiée) de ton
          passeport tunisien. <strong>Deux options</strong> :
          <ul>
            <li>
              Envoyer l&apos;original via DHL (récupéré ~3 mois plus
              tard avec ton ITIN). Risqué — la plupart des gens
              n&apos;acceptent pas de se séparer de leur passeport.
            </li>
            <li>
              Passer par un <strong>Certifying Acceptance Agent
              (CAA)</strong> agréé IRS qui vérifie ton passeport sur
              place et certifie une copie. Coût : 200-500 USD selon
              le CAA. C&apos;est la voie standard pour les
              non-résidents.
            </li>
          </ul>
        </li>
        <li>
          <strong>Justification du besoin fiscal.</strong> Tu dois
          joindre la pièce qui prouve pourquoi tu demandes un ITIN
          maintenant (extrait de royalties Amazon KDP, contrat
          immobilier, etc.). Sans cette pièce, l&apos;IRS refuse.
        </li>
        <li>
          <strong>Envoi au IRS Austin Service Center</strong> via DHL
          ou USPS. Adresse : ITIN Operation, P.O. Box 149342, Austin,
          TX 78714-9342.
        </li>
        <li>
          <strong>Réception de l&apos;ITIN.</strong> Délai officiel :
          7 semaines. Délai pratique 2026 : 6-11 semaines.
        </li>
      </ol>

      <h2>Combien ça coûte vraiment</h2>
      <ul>
        <li>Formulaire W-7 : gratuit (l&apos;IRS ne facture pas)</li>
        <li>CAA pour certification de passeport : 200-500 USD</li>
        <li>DHL aller-retour : ~150 TND</li>
        <li>Traduction certifiée si requise : 30-60 TND/page</li>
      </ul>
      <p>
        Total typique : <strong>300-600 USD</strong> tout compris.
      </p>

      <h2>Expiration de l&apos;ITIN</h2>
      <p>
        L&apos;ITIN expire <strong>après 3 années sans utilisation
        dans une déclaration fiscale US</strong>. Si tu ne fais pas de
        déclaration annuelle (1040-NR), ton ITIN devient inactif et tu
        dois le renouveler — même processus que la demande initiale.
      </p>

      <h2>Combien de temps avant que ça vaille la peine</h2>
      <p>
        Le calcul honnête : un ITIN coûte ~400 USD à obtenir, ~400 USD
        à renouveler tous les 3 ans (~130 USD/an amorti). Pour que ça
        rentabilise, il faut que la retenue US évitée soit supérieure
        à 130 USD/an. Pour quelqu&apos;un qui touche 1 000 USD/an de
        royalties Amazon, ne pas avoir d&apos;ITIN coûte 300 USD de
        retenue inutile par an. ITIN rentabilise.
      </p>
      <p>
        Pour quelqu&apos;un qui touche 200 USD/an de royalties,
        l&apos;ITIN coûte plus cher que la retenue évitée. Pas la
        peine.
      </p>

      <h2>NOHO et l&apos;ITIN</h2>
      <p>
        NOHO coordonne avec un CAA partenaire à Los Angeles si tu en as
        besoin. Le service n&apos;est pas inclus dans la Solution
        Business (4 000 TND) parce que la majorité des fondateurs
        tunisiens n&apos;en ont pas besoin — l&apos;EIN de la LLC
        suffit. Si ton cas particulier nécessite un ITIN, on facture la
        coordination à 600-800 TND + le coût du CAA.{" "}
        <Link href="/fr/appel" className="font-bold underline" style={{ color: "#337485" }}>
          Réserve un appel
        </Link>{" "}
        pour qu&apos;on regarde ton cas spécifique.
      </p>
    </>
  );
}
