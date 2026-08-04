import Link from "next/link";

export function fermerLlcUsProprement() {
  return (
    <>
      <p>
        Le moment où tu veux fermer ta LLC US arrive — soit parce que
        ton business a pivoté, soit parce que tu rentres définitivement
        en Tunisie, soit parce que tu convertis en C-Corp pour une
        levée VC. Tu ne peux pas juste &quot;arrêter de l&apos;utiliser&quot;.
        Sans dissolution formelle, tu accumules des pénalités jusqu&apos;à
        25 000 USD/an (Form 5472) + Wyoming annual fees. Voici la
        procédure exacte en 8 étapes.
      </p>

      <h2>Pourquoi tu ne peux pas juste &quot;laisser mourir&quot;</h2>
      <ul>
        <li>
          Form 5472 + 1120 obligatoire chaque année tant que la LLC
          existe formellement, même sans revenu. Pénalité 25K USD si
          oubli.
        </li>
        <li>
          Wyoming annual report 60 USD + 50 USD pénalité par année
          oubliée. La LLC est dissoute administrativement après 18-24
          mois d&apos;oubli — mais l&apos;IRS continue de t&apos;attendre
          jusqu&apos;à dissolution IRS formelle (Form 966).
        </li>
        <li>
          Registered agent contract qui se renouvelle automatiquement —
          50-125 USD/an, prélevé sur ta carte si tu l&apos;as renseignée.
        </li>
        <li>
          Mercury / Stripe accounts qui peuvent geler tes fonds si tu
          arrêtes d&apos;y répondre.
        </li>
      </ul>

      <h2>Étape 1 — Décide quand fermer (timing)</h2>
      <ul>
        <li>
          Idéal : fermer entre 1er janvier et 30 juin. La dissolution
          devient effective dans l&apos;année fiscale en cours, simplifie
          ton dernier Form 5472.
        </li>
        <li>
          Évite octobre-décembre : tu risques de manquer la deadline
          15 avril suivante pour ton dernier Form 5472 + 1120.
        </li>
        <li>
          Annonce 90 jours à l&apos;avance à tes clients / partenaires
          pour leur laisser le temps de migrer leur billing.
        </li>
      </ul>

      <h2>Étape 2 — Finalise toutes les transactions business</h2>
      <ul>
        <li>
          Émets les dernières factures pendantes.
        </li>
        <li>
          Encaisse tous les paiements clients (laisse Stripe drain
          complet 7-30 jours).
        </li>
        <li>
          Paie tous tes fournisseurs / contractors restants.
        </li>
        <li>
          Cancel tes abonnements SaaS récurrents qui débitent Mercury
          (AWS, Vercel, Notion, etc.). Évite des charges sur un compte
          en cours de fermeture.
        </li>
      </ul>

      <h2>Étape 3 — Wire-out les fonds restants vers compte personnel</h2>
      <ul>
        <li>
          Total Mercury balance → wire vers ton compte BIAT PPR USD (ou
          autre).
        </li>
        <li>
          Classification : owner distribution finale. Sera reportée sur
          Form 5472 Part IV Line 17 du dernier filing.
        </li>
        <li>
          Garde le screenshot wire confirmation + balance Mercury à 0
          USD.
        </li>
        <li>
          Si tu as des fonds bloqués Stripe (chargeback hold, etc.),
          attends qu&apos;ils libèrent avant de fermer Mercury. Stripe
          délais : 90-180 jours typique.
        </li>
      </ul>

      <h2>Étape 4 — Ferme les comptes business externes</h2>
      <ol>
        <li>
          <strong>Stripe</strong> : Dashboard → Settings → Close
          account. Tu indiques que tu n&apos;auras plus d&apos;activité
          processing. Stripe garde les statements 7 ans (obligatoire
          IRS).
        </li>
        <li>
          <strong>Mercury</strong> : Customer Support → Request account
          closure. Mercury demande de drain le balance à zéro d&apos;abord.
          Délai : 7-14 jours pour close formel.
        </li>
        <li>
          <strong>Other payment processors</strong> (Paddle, Wise, etc.)
          : même procédure, drain + close.
        </li>
        <li>
          <strong>Hosting / SaaS</strong> : transfer domain vers ton
          compte personnel (Google Domains, Namecheap), cancel le reste.
        </li>
      </ol>

      <h2>Étape 5 — File le Certificate of Dissolution Wyoming</h2>
      <ul>
        <li>
          Va sur wyobiz.wy.gov → ton entité → &quot;Dissolve&quot;.
        </li>
        <li>
          Frais : 60 USD via online filing. Plus 10-15 USD si tu
          commandes Certificate of Dissolution physique.
        </li>
        <li>
          Délai : 24-48h online.
        </li>
        <li>
          Tu reçois un Certificate of Dissolution officiel.
        </li>
        <li>
          État Wyoming = LLC officiellement dissoute. Mais IRS ne sait
          pas encore — voir Étape 6.
        </li>
      </ul>

      <h2>Étape 6 — File Form 966 avec IRS (Corporate Dissolution)</h2>
      <ul>
        <li>
          Form 966 = &quot;Corporate Dissolution or Liquidation&quot;.
          Notification formelle à l&apos;IRS que la LLC est dissoute.
        </li>
        <li>
          À filer dans les <strong>30 jours</strong> suivant la
          dissolution Wyoming.
        </li>
        <li>
          Soumis par mail à l&apos;adresse IRS appropriée (mêmes IRS
          service centers que Form 5472).
        </li>
        <li>
          Pas de frais IRS. Pas de extension possible.
        </li>
        <li>
          Tu joins le Certificate of Dissolution Wyoming en pièce jointe.
        </li>
      </ul>

      <h2>Étape 7 — File ton DERNIER Form 5472 + 1120 (year of dissolution)</h2>
      <ul>
        <li>
          Form 1120 cochée &quot;FINAL RETURN&quot; en haut.
        </li>
        <li>
          Form 5472 attached.
        </li>
        <li>
          Coverage : Jan 1 → date de dissolution Wyoming.
        </li>
        <li>
          Part IV : déclare toute distribution finale (le wire final
          vers ton compte personnel = Line 17).
        </li>
        <li>
          Deadline : 15 avril de l&apos;année suivante (même règle).
        </li>
        <li>
          Submission par fax (855-887-7737) ou mail Ogden UT — comme un
          Form 5472 régulier.
        </li>
      </ul>

      <h2>Étape 8 — Cancel le registered agent + archive tout</h2>
      <ul>
        <li>
          Cancel ton contrat RA (Northwest Registered Agent / autre).
          Mail-in cancellation request avec mention dissolution Wyoming
          + date.
        </li>
        <li>
          Cancel ton mailbox NOHO 5062 Lankershim — Mokhtar te
          recommande de garder 6-12 mois supplémentaires au cas où IRS
          envoie une lettre de questionnement (rare mais possible).
        </li>
        <li>
          Archive en physique + cloud : Wyoming Certificate of Dissolution,
          Form 966 confirmation, dernier Form 5472 + 1120, EIN letter
          original (pour reference), Operating Agreement, statements
          Mercury / Stripe complete history.
        </li>
        <li>
          Garde 7 ans minimum (IRS audit lookback window).
        </li>
      </ul>

      <h2>Le piège du EIN — il reste assigné à toi</h2>
      <ul>
        <li>
          L&apos;EIN n&apos;est pas &quot;libéré&quot; après dissolution.
          Il reste associé à ton nom dans la base IRS, mais marqué
          &quot;dissolved entity&quot;.
        </li>
        <li>
          Tu peux PAS réutiliser l&apos;EIN pour une nouvelle LLC. Tu
          dois appliquer pour un nouvel EIN si tu reformes une entité.
        </li>
        <li>
          L&apos;IRS peut envoyer du courrier à l&apos;EIN dissolved
          jusqu&apos;à 3-5 ans après dissolution (typiquement des
          notices automatiques de Form 5472 réminders qui sont devenues
          obsolètes — tu peux les ignorer mais garde-les en archive).
        </li>
      </ul>

      <h2>Le piège côté TN — pas vraiment</h2>
      <ul>
        <li>
          Côté TN, la fermeture de ta LLC US n&apos;a aucune obligation
          déclarative auprès de la DGI ni de la BCT.
        </li>
        <li>
          Le wire de distribution finale est juste un revenu mondial à
          déclarer dans ton IRPP annuel (article 6 loi 91-25). Taux
          progressif normal.
        </li>
      </ul>

      <h2>Reformation future — la procédure</h2>
      <ul>
        <li>
          Si tu veux reformer une nouvelle LLC dans 2-5 ans, tu repars
          de zéro :
          <ul>
            <li>Nouveau Wyoming Articles of Organization</li>
            <li>Nouvel EIN (le précédent est dissolved, pas
              réutilisable)</li>
            <li>Nouveau Operating Agreement</li>
            <li>Nouvelle application Mercury + Stripe</li>
            <li>Nouveau Form 1583 USPS</li>
          </ul>
        </li>
        <li>
          Bonne nouvelle : Mercury/Stripe gardent ton historique
          beneficial owner. Le re-approval est plus rapide (déjà
          vérifié ton ID).
        </li>
      </ul>

      <h2>Coût total de la dissolution</h2>
      <ul>
        <li>
          Wyoming Certificate of Dissolution : 60 USD
        </li>
        <li>
          Form 966 + Form 5472 final + 1120 final : gratuit IRS, ~250
          USD CPA si tu engages.
        </li>
        <li>
          Mailbox NOHO 6 mois extra (sécurité) : ~150 TND
        </li>
        <li>
          DHL Form 966 envoi IRS : ~30 USD
        </li>
        <li>
          <strong>Total</strong> : ~500-900 USD selon options.
        </li>
      </ul>

      <h2>L&apos;option NOHO pour la dissolution</h2>
      <p>
        Le Suivi mensuel accompagne la dissolution si tu y arrives. On
        coordonne Wyoming SoS + IRS Form 966 + dernier 5472 via CPA
        partenaire + archive. Coût additionnel : 600 TND une fois
        (sortant du Suivi mensuel régulier). Tu fermes proprement en
        45-60 jours sans risque de pénalité IRS résiduelle.
      </p>

      <h2>Le scénario à éviter absolument</h2>
      <p>
        &quot;Je vais juste arrêter de répondre aux emails IRS et de
        renouveler Wyoming&quot;. Mauvaise idée. Form 5472 pénalité
        s&apos;accumule (25K/an + 25K/30 jours après notice). Si IRS
        envoie une lettre que tu rates parce que ton mailbox est
        cancelled, tu te retrouves avec un dossier de pénalités
        rétroactif qui peut atteindre 100-300K USD au moment où
        l&apos;IRS te contacte 5 ans plus tard via les autorités fiscales
        tunisiennes. Suite à l&apos;échange CRS Sept 2026, le risque
        de notification cross-border augmente. Ferme proprement.
      </p>
    </>
  );
}
