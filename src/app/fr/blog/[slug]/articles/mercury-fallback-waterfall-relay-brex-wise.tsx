import Link from "next/link";

export function mercuryFallbackWaterfall() {
  return (
    <>
      <p>
        Mercury reste la première option pour ouvrir un compte bancaire US
        depuis une LLC tunisienne, mais le taux d&apos;approval ~30% des
        dossiers MENA-region est rejeté ou ferment dans les 6-12 mois. Tu
        as besoin d&apos;un Plan B documenté, pas d&apos;improviser à
        18h00 un mardi quand Mercury te ferme ton compte. Voici la
        waterfall complète Relay → Brex → Wise Business → Airwallex,
        avec critères d&apos;activation pour chaque rang.
      </p>

      <h2>Le principe waterfall</h2>
      <p>
        Une waterfall = ordre de priorité documenté à l&apos;avance. Tu
        applies au rang 1 d&apos;abord. Si reject, passe au rang 2. Si
        reject, rang 3. Continue jusqu&apos;à approval. C&apos;est la
        stratégie qu&apos;une équipe finance enterprise utilise pour ses
        banking partners — adaptée ici à un fondateur tunisien LLC.
      </p>

      <h2>Rang 1 — Mercury (default)</h2>
      <ul>
        <li>
          <strong>Pourquoi en premier</strong> : best UX, best customer
          support en cas de problèmes, intégrations natives Stripe / QuickBooks,
          credit card Mercury IO disponible après 6 mois d&apos;activity.
        </li>
        <li>
          <strong>Taux approval Tunisien estimé</strong> : ~65-75% avec
          dossier renforcé (voir{" "}
          <Link href="/fr/blog/mercury-kyc-dossier-renforce-9-elements" className="font-bold underline" style={{ color: "#337485" }}>
            Mercury KYC 9 éléments
          </Link>
          ).
        </li>
        <li>
          <strong>Délai onboarding</strong> : 1-3 semaines.
        </li>
        <li>
          <strong>Critères refus</strong> : adresse virtual mailbox flaggée
          (iPostal1, Anytime Mailbox), industry high-risk (crypto,
          adult, gambling), inconsistance documentaire.
        </li>
        <li>
          <strong>Quand passer au Rang 2</strong> : Mercury reject email
          formel reçu. NE PAS réapply Mercury dans les 90 jours (cross-référencé
          par EIN + beneficial owner).
        </li>
      </ul>

      <h2>Rang 2 — Relay Financial</h2>
      <ul>
        <li>
          <strong>Pourquoi</strong> : Mercury-like sans le branding,
          tolérance similaire pour non-US founders, sweep account
          intégré, multi-account natif (plusieurs comptes virtuels pour
          ta même LLC).
        </li>
        <li>
          <strong>Taux approval Tunisien estimé</strong> : ~55-65% — un
          peu moins permissif que Mercury sur les profiles risque
          extrême, mais accepte des cases où Mercury a rejected for
          industry.
        </li>
        <li>
          <strong>Délai onboarding</strong> : 5-10 jours typique.
        </li>
        <li>
          <strong>Avantage particulier</strong> : si tu as déjà un EIN
          + Wyoming Certificate de Mercury rejection, Relay accepte
          ces docs sans repetition.
        </li>
        <li>
          <strong>Frais</strong> : free up to 200 transactions/mois sur
          le plan Standard. ATM fees reimbursés up to 25 USD/mois.
        </li>
        <li>
          <strong>Quand passer au Rang 3</strong> : Relay rejection ou
          freeze post-approval.
        </li>
      </ul>

      <h2>Rang 3 — Wise Business</h2>
      <ul>
        <li>
          <strong>Pourquoi</strong> : pas une banque US au sens strict,
          mais une institution e-money UK régulée avec un US business
          account + Mercury-like routing/account numbers. Acceptation
          plus ouverte aux profils non-US.
        </li>
        <li>
          <strong>Taux approval Tunisien estimé</strong> : ~70-80% — plus
          permissif que Mercury et Relay sur le profil tunisien parce
          que Wise est UK-based, moins de scrutiny US AML.
        </li>
        <li>
          <strong>Délai onboarding</strong> : 3-7 jours.
        </li>
        <li>
          <strong>Limitation majeure</strong> : Wise n&apos;émet pas de
          carte de débit physique aux US (digital uniquement). Et pas de
          credit card. Pour les achats SaaS récurrents ça marche, pour
          les frais imprévus en cash c&apos;est limité.
        </li>
        <li>
          <strong>Frais</strong> : ouverture 31 USD (one-time). Wise FX
          rates ~0.4% (mid-market + 0.4%).
        </li>
        <li>
          <strong>Quand passer au Rang 4</strong> : Wise rejection
          (rare) ou besoin de carte physique US.
        </li>
      </ul>

      <h2>Rang 4 — Airwallex Business</h2>
      <ul>
        <li>
          <strong>Pourquoi</strong> : Hong Kong-based, multi-currency
          natif, business accounts US disponibles avec US routing/account
          numbers via leur partner US bank. Acceptation très ouverte pour
          founders internationaux.
        </li>
        <li>
          <strong>Taux approval Tunisien estimé</strong> : ~75-85%.
          L&apos;option la plus permissive de la waterfall.
        </li>
        <li>
          <strong>Délai onboarding</strong> : 5-14 jours.
        </li>
        <li>
          <strong>Avantages</strong> : carte débit physique disponible,
          payouts multi-devise faciles (USD, EUR, GBP, HKD, SGD, etc.).
        </li>
        <li>
          <strong>Inconvénients</strong> : moins connue côté US donc
          friction parfois avec partners (certains clients US ACH
          can&apos;t recognize Airwallex routing). FX fees ~0.6% (plus
          que Wise).
        </li>
        <li>
          <strong>Quand passer au Rang 5</strong> : Airwallex reject ou
          friction client persistante avec routing.
        </li>
      </ul>

      <h2>Rang 5 — Brex</h2>
      <ul>
        <li>
          <strong>Pourquoi</strong> : startup-focused US business
          banking + corporate cards + expense management. Excellent UX
          mais critères stricts.
        </li>
        <li>
          <strong>Taux approval Tunisien estimé</strong> : ~15-25%.
          Brex exige typiquement 50 000 USD+ de revenu mensuel
          documenté OU une LLC qui a déjà 100 000 USD+ sur le compte.
          Difficile pour early-stage.
        </li>
        <li>
          <strong>Délai onboarding</strong> : 5-10 jours si tu passes les
          critères revenue.
        </li>
        <li>
          <strong>Sweet spot</strong> : à considérer SEULEMENT après que
          ton business a passé 50K USD/mois récurrent. Avant, c&apos;est
          fishing en eaux profondes.
        </li>
        <li>
          <strong>Quand passer au Rang 6</strong> : Brex inactive
          (revenue trop bas) ou reject.
        </li>
      </ul>

      <h2>Rang 6 — Payoneer Business (last resort)</h2>
      <ul>
        <li>
          <strong>Pourquoi en dernier</strong> : Payoneer est
          historiquement la solution last-resort pour les freelances
          MENA. Acceptation très ouverte mais frais énormes (3% on
          incoming, 1-2% on FX, 30 USD/year card fee). Reputation
          déclinante depuis 2023.
        </li>
        <li>
          <strong>Taux approval Tunisien estimé</strong> : ~90%+. Plus
          ouvert que tous les autres.
        </li>
        <li>
          <strong>Délai onboarding</strong> : 2-5 jours.
        </li>
        <li>
          <strong>Limitations</strong> : pas un &quot;vrai&quot; US bank
          account (routing/account numbers Payoneer-owned, certains
          clients US refusent de payer via Payoneer routing). Frais
          significativement plus élevés que Wise.
        </li>
        <li>
          <strong>Quand l&apos;utiliser</strong> : si tu as exhausté les
          5 rangs précédents et tu DOIS avoir un US-routing pour
          recevoir ton premier client. Lance avec Payoneer le temps de
          se stabiliser, puis retente Wise ou Airwallex à 6 mois.
        </li>
      </ul>

      <h2>Le plan d&apos;activation step-by-step</h2>
      <ol>
        <li>
          <strong>Avant Mercury application</strong> : prépare tous tes
          docs (CP 575 EIN letter, Wyoming Certificate, Operating
          Agreement, passeport + CIN scans, address proof TN, business
          plan 1 page). Tu vas réutiliser ces mêmes docs aux rangs
          2-6.
        </li>
        <li>
          <strong>Apply Mercury</strong>. Si approval en 1-3 semaines,
          ne touche pas aux autres rangs. Lance ton activité.
        </li>
        <li>
          <strong>Si Mercury reject</strong>, attends 24h (le temps
          d&apos;encaisser et réfléchir). NE PAS réapply immédiatement
          chez Mercury — cross-référencé.
        </li>
        <li>
          <strong>Apply Relay</strong>. Re-utilise les mêmes docs +
          add Mercury rejection email (pas obligatoire mais donne
          contexte).
        </li>
        <li>
          <strong>Si Relay reject</strong>, apply Wise Business en
          parallèle (Wise est UK-based donc pas de risque de
          cross-reference avec Mercury/Relay).
        </li>
        <li>
          <strong>Si Wise approuvé</strong>, lance avec Wise même si
          tu préfèrerais Mercury. Stripe accepte Wise routing comme
          payout destination.
        </li>
        <li>
          <strong>3-6 mois plus tard, après tu as activity</strong>{" "}
          stable sur Wise, retente Mercury avec un nouveau dossier qui
          montre activity. Souvent approuvé en seconde tentative grâce
          à la trace d&apos;activity.
        </li>
      </ol>

      <h2>Recovery — Mercury ferme ton compte mid-activity</h2>
      <p>
        Le scenario le plus stressant : Mercury approve, tu opères 6-12
        mois, puis email matin &quot;your account has been closed&quot;
        avec 30 jours pour récupérer tes fonds.
      </p>
      <ol>
        <li>
          <strong>Heure 0-4</strong> : screenshot tout (statements,
          activity, balances). Download CSV. Save physique + cloud.
        </li>
        <li>
          <strong>Jour 1</strong> : applique Relay + Wise Business EN
          PARALLÈLE le même jour. Plus tu va vite, plus tu réduis la
          fenêtre où Stripe pourrait suspendre tes payouts faute de
          destination bancaire.
        </li>
        <li>
          <strong>Jour 1-2</strong> : Mercury supports&apos; demande
          la disbursement methodology (wire vers la nouvelle banque,
          PAS de chèque physique).
        </li>
        <li>
          <strong>Jour 5-10</strong> : Relay ou Wise approuve.
        </li>
        <li>
          <strong>Jour 10</strong> : tu donnes les nouvelles routing
          info à Mercury pour wire-out de tes fonds restants.
        </li>
        <li>
          <strong>Jour 14-21</strong> : tu mets à jour ton routing
          chez Stripe / PayPal / tes clients récurrents pour qu&apos;ils
          paient sur le nouveau compte.
        </li>
      </ol>

      <h2>Le coût psychologique du Plan B</h2>
      <p>
        Le vrai coût n&apos;est pas l&apos;argent — c&apos;est l&apos;émotion.
        Un fondateur tunisien qui voit son compte Mercury fermé sans
        explication peut perdre 5-10 jours de travail à essayer de
        comprendre &quot;pourquoi moi&quot;. La réponse est : Mercury
        fait un re-pricing périodique de son risk-profile et certains
        comptes sont arbitrairement déprioritisés. Ce n&apos;est pas
        personnel. Le Plan B documenté ci-dessus te fait économiser ce
        traumatisme.
      </p>

      <h2>Le Suivi mensuel NOHO et la waterfall</h2>
      <p>
        Le{" "}
        <Link href="/fr/suivi-mensuel" className="font-bold underline" style={{ color: "#337485" }}>
          Suivi mensuel à 1 200 TND/mois
        </Link>{" "}
        inclut explicitement la gestion de cette waterfall : on tient
        à jour les profils Mercury + Relay + Wise même quand tu opères
        principalement sur un seul, on coordonne la migration le jour
        où Mercury ferme, on draft les KYC responses si Relay ou Wise
        demande des clarifications. C&apos;est exactement le genre de
        travail back-office qui prend 2-3 heures par semaine et que tu
        ne devrais pas faire toi-même quand tu pourrais facturer un
        client à la place.
      </p>
    </>
  );
}
