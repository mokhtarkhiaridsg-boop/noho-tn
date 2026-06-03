import Link from "next/link";

export function mercuryCompteFerme() {
  return (
    <>
      <p>
        Mercury vient de te notifier la fermeture de ton compte. 30 jours
        pour récupérer tes fonds. Pas de raison détaillée. Tu n&apos;es
        pas seul : Mercury a fermé plusieurs centaines de comptes
        MENA-region en 2024-2025 dans une vague de durcissement KYC.
        Voici exactement quoi faire dans les 72 prochaines heures.
      </p>

      <h2>Heure 1-4 : sécurise tes fonds</h2>
      <ul>
        <li>
          Connecte-toi à Mercury, télécharge un export CSV complet de
          toutes tes transactions (Bank → Statements → Export).
        </li>
        <li>
          Capture d&apos;écran : solde actuel, derniers wires entrants,
          beneficiary info (IBAN/SWIFT) de ta banque TN ou Wise.
        </li>
        <li>
          Lis la lettre de fermeture en détail. Cherche : (1) date butoir
          de récupération des fonds, (2) méthode de disbursement
          autorisée (ACH, wire, check), (3) si un appel/dispute est
          possible.
        </li>
        <li>
          Si tu as Stripe/PayPal/Wise/Mercredi connectés au compte,
          débranche-les avant que Mercury bloque les transferts
          sortants.
        </li>
      </ul>

      <h2>Jour 1 : ouvre Relay ou Wise Business en parallèle</h2>
      <p>
        Ne perds pas de temps à appeler Mercury. Le support refusera de
        rouvrir 95% des cas. Ouvre une banque alternative immédiatement
        en parallèle :
      </p>
      <ul>
        <li>
          <strong>Relay Financial</strong> (relayfi.com) — partenaire
          Thread Bank, accepte LLC US tunisiennes, 1-3 jours
          d&apos;approbation. Dossier identique à Mercury (LLC formation
          docs + EIN + ID + adresse réelle US).
        </li>
        <li>
          <strong>Wise Business</strong> — pas une vraie banque US mais
          fournit un account routing US + ACH. Plus rapide, moins
          stricte sur KYC.
        </li>
        <li>
          <strong>Brex</strong> — accessible mais exige généralement 50K
          USD/mois de revenus + secteur tech.
        </li>
      </ul>

      <h2>Jour 2-3 : transfère tes fonds proprement</h2>
      <ul>
        <li>
          Demande à Mercury un wire vers ta nouvelle banque (Relay/Wise).
          Coût : 5 USD chez Mercury, gratuit chez Relay incoming.
        </li>
        <li>
          Si Mercury bloque le wire international ou refuse Relay (pas
          encore vu en pratique), demande un wire vers ton compte
          personnel en banque TN (BIAT compte devises).
        </li>
        <li>
          NE demande PAS un chèque (paper check). Délai 30-60 jours,
          risqué côté livraison internationale.
        </li>
      </ul>

      <h2>Jour 7-14 : reconnecte ton stack</h2>
      <ul>
        <li>
          Met à jour les coordonnées bancaires dans Stripe (Dashboard →
          Settings → Payouts).
        </li>
        <li>
          Met à jour PayPal Business, Wise Business, tes fournisseurs
          (AWS, Vercel, Notion).
        </li>
        <li>
          Notifie tes clients récurrents par email avec ton nouveau wire
          info — particulièrement si tu factures B2B avec ACH pull.
        </li>
        <li>
          Met à jour ton operating agreement si tu mentionnais Mercury
          spécifiquement.
        </li>
      </ul>

      <h2>Pourquoi Mercury a fermé : raisons réelles</h2>
      <ul>
        <li>
          <strong>Geographic risk reweighting.</strong> Mercury a
          re-classifié plusieurs pays MENA (Tunisie incluse) en
          high-risk en 2024. Le compte est désactivé même si toi tu
          n&apos;as rien fait.
        </li>
        <li>
          <strong>Adresse virtuelle CMRA flaggée.</strong> Si ton
          adresse US est un PMB d&apos;iPostal1/Anytime Mailbox/Earth
          Class, Mercury scanne automatiquement et flagge. NOHO opère
          une vraie boutique enregistrée USPS — pas le même profil.
        </li>
        <li>
          <strong>Activité anormale.</strong> Wires entrants &gt; 10K
          USD sans documentation source-of-funds, ou wires sortants vers
          jurisdictions risquées (BCT TN sans pre-clearance).
        </li>
        <li>
          <strong>Industry change.</strong> Mercury a banni
          rétroactivement certains secteurs (crypto, paiements
          high-risk, certains services financiers).
        </li>
      </ul>

      <h2>Ce qu&apos;il NE faut PAS faire</h2>
      <ul>
        <li>Ne ré-applique pas immédiatement à Mercury sous un autre
          nom de LLC ou avec un autre EIN. Mercury cross-référence par
          beneficial owner ID et bannit.</li>
        <li>Ne réponds pas en panique au support Mercury en avouant des
          détails qui peuvent justifier la fermeture rétroactivement.
          Demande seulement la disbursement methodology.</li>
        <li>Ne tente pas de retirer les fonds en cash ou
          cryptomonnaie. Mercury bloque et signale au FinCEN.</li>
      </ul>

      <h2>Plan B durable : le multi-banking</h2>
      <p>
        La leçon : ne dépends jamais d&apos;une seule banque US. NOHO
        recommande désormais à tous nos clients Solution Business
        d&apos;ouvrir Mercury <strong>+</strong> Relay <strong>+</strong>{" "}
        Wise Business dans les 60 premiers jours.{" "}
        <Link href="/outils/comparateurs/banques-us" className="font-bold underline" style={{ color: "#337485" }}>
          Voir le comparateur banques US
        </Link>{" "}
        pour le détail.
      </p>

      <h2>Tu n&apos;es pas Mokhtar</h2>
      <p>
        Si Mercury te ferme et tu n&apos;as personne sur place aux US
        pour gérer (envoyer un chèque physique, signer un wire form,
        recevoir un appel verification), c&apos;est exactement ce que le
        Suivi mensuel NOHO couvre. Tu n&apos;es pas seul. Écris-nous{" "}
        <Link href="/contact" className="font-bold underline" style={{ color: "#337485" }}>
          ici
        </Link>{" "}
        — on regarde ton dossier dans les 24h.
      </p>
    </>
  );
}
