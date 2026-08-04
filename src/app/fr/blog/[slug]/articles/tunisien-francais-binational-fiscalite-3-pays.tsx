import Link from "next/link";

export function tnFrBinationalFiscalite3Pays() {
  return (
    <>
      <p>
        Tu es binational franco-tunisien. Tu opères depuis Paris, ou tu
        partages ton temps entre Paris et Tunis. Tu décroches des
        clients US et tu envisages une LLC. Voilà comment se mélangent
        les obligations fiscales TN + FR + US — et comment ne pas
        finir taxé trois fois sur le même euro.
      </p>

      <h2>Le cadre des 3 résidences fiscales possibles</h2>
      <ul>
        <li>
          <strong>Tunisie</strong> : résident si présence ≥ 183 jours
          OU centre des intérêts économiques en TN OU domicile permanent
          en TN. Code IRPP article 2.
        </li>
        <li>
          <strong>France</strong> : résident si foyer d&apos;habitation
          permanent en FR OU séjour principal en FR OU activité
          professionnelle principale en FR OU centre des intérêts
          économiques en FR. Article 4 B du CGI. Critère unique
          suffisant.
        </li>
        <li>
          <strong>États-Unis</strong> : résident si Green Card OU
          Substantial Presence Test (31 jours année courante ET 183
          jours pondérés sur 3 ans). IRC §7701(b).
        </li>
      </ul>

      <h2>Cas typique 1 — Binational vivant à Paris, opérant pour clients US</h2>
      <ul>
        <li>
          <strong>Statut</strong> : 100% résident fiscal FR. Pas
          résident TN (pas présence 183 jours TN), pas résident US
          (pas substantial presence).
        </li>
        <li>
          <strong>Côté FR</strong> : tu déclares tes revenus mondiaux
          en France au taux IR progressif (jusqu&apos;à 45% +
          contributions sociales 17.2% ≈ 62% top marginal). Tes profits
          LLC US sont à déclarer en France.
        </li>
        <li>
          <strong>Côté US</strong> : SMLLC pass-through, 0% fed tax si
          pas d&apos;ECI (services depuis Paris = pas d&apos;ECI). Form
          5472 + 1120 pro-forma annuel.
        </li>
        <li>
          <strong>Côté TN</strong> : aucune obligation IRPP TN (tu
          n&apos;es pas résident TN). Si tu maintiens un compte TN
          (BIAT), c&apos;est juste un compte d&apos;épargne, déclaré
          sur ta déclaration 2042 française.
        </li>
        <li>
          <strong>Le traité Tunisie-France 1973</strong> tiebreakers
          appliquent si tu deviens résident des deux : foyer permanent
          → centre des intérêts → séjour habituel → nationalité.
        </li>
        <li>
          <strong>Le traité France-US 1994</strong> évite la double
          imposition sur l&apos;activité business : article 7 (business
          profits) — pas de US tax sans PE US.
        </li>
      </ul>

      <h2>Cas typique 2 — Binational vivant à Tunis, opérant pour clients US</h2>
      <ul>
        <li>
          <strong>Statut</strong> : résident fiscal TN. Pas FR (pas
          séjour principal en France). Pas US.
        </li>
        <li>
          <strong>Côté TN</strong> : IRPP TN sur revenus mondiaux
          (jusqu&apos;à 40% top marginal). Déclaration article 6 loi
          91-25.
        </li>
        <li>
          <strong>Côté FR</strong> : aucune obligation IR française
          (pas résident). Tu maintiens ta nationalité française mais
          pas d&apos;obligation déclarative en l&apos;absence de
          revenus FR-source.
        </li>
        <li>
          <strong>Côté US</strong> : SMLLC pass-through, 0% fed tax
          standard.
        </li>
        <li>
          <strong>Traité Tunisie-USA 1985</strong> évite la double
          imposition : article 7, no PE = no US tax.
        </li>
      </ul>

      <h2>Cas typique 3 — Binational entre Paris et Tunis (50/50)</h2>
      <p>
        Le cas le plus complexe :
      </p>
      <ul>
        <li>
          Tu passes 6 mois Paris + 6 mois Tunis. Aucune résidence
          dépasse 183 jours.
        </li>
        <li>
          La France peut te considérer résident via &quot;centre des
          intérêts économiques&quot; même sans 183 jours (article 4 B
          du CGI).
        </li>
        <li>
          La Tunisie peut te considérer résident via &quot;centre des
          intérêts économiques&quot; aussi.
        </li>
        <li>
          Tu te retrouves potentiellement résident des deux —
          activation des tiebreakers du traité Tunisie-France 1973.
        </li>
      </ul>
      <p>
        Tiebreakers article 4 du traité Tunisie-France :
      </p>
      <ol>
        <li>Foyer d&apos;habitation permanent (où as-tu une maison
          permanente disponible 365 jours/an).</li>
        <li>Centre des intérêts vitaux (où sont tes liens personnels +
          économiques — famille, business principal, comptes
          bancaires).</li>
        <li>Séjour habituel (où passes-tu le plus de temps en moyenne
          5 dernières années).</li>
        <li>Nationalité — si égalité, où es-tu citoyen.</li>
        <li>Accord mutuel entre administrations fiscales si tout égal.</li>
      </ol>
      <p>
        Cas typique : si tu as une famille à Paris, un loyer Paris, un
        compte BNP Paris, mais tu passes 5 mois à Tunis pour le climat
        — tu seras résident FR via centre intérêts vitaux. Si tu as
        ta famille à Tunis, propriété Tunis, compte BIAT principal,
        clients TN + US — résident TN.
      </p>

      <h2>Le scénario LLC US dans ce cas hybride</h2>
      <p>
        Une fois ta résidence fixée (FR ou TN selon tiebreakers) :
      </p>
      <ul>
        <li>
          Si résident FR : LLC US déclarée en France via 2042-C-PRO,
          taxée au taux IR + prélèvements sociaux. Forme particulière
          du tax wrapper LLC (translucent vs opaque) reste débattue en
          jurisprudence française (Artémis 2014 / CAA Nancy 2017).
          Consulte un avocat fiscaliste français.
        </li>
        <li>
          Si résident TN : LLC US déclarée en TN via IRPP article 6
          loi 91-25, taux progressif jusqu&apos;à 40%.
        </li>
      </ul>

      <h2>Le piège translucent vs opaque (côté France)</h2>
      <ul>
        <li>
          La jurisprudence française CAA Nancy 16-Nov-2017 et CE
          Artémis 2014 sont contradictoires sur le traitement fiscal
          d&apos;une LLC US par un résident fiscal français.
        </li>
        <li>
          Position pratique 2026 : les autorités fiscales françaises
          traitent souvent la SMLLC comme &quot;translucent&quot; (les
          profits remontent transparents au Member, taxés en IR). Mais
          si la LLC est requalifiée &quot;opaque&quot; (entité fiscale
          séparée), les distributions deviennent dividendes taxables
          séparément avec impossibilité de claim foreign tax credit
          (car LLC n&apos;a pas payé de US tax).
        </li>
        <li>
          Risque : double imposition partielle (IR France 30-45% +
          potentiel US withholding tax via Form 1042-S).
        </li>
        <li>
          Mitigation : consulte un avocat fiscaliste FR-US spécialisé
          AVANT de former la LLC si tu es résident FR.
        </li>
      </ul>

      <h2>Le scénario binational qui veut bouger</h2>
      <ul>
        <li>
          Si tu es actuellement résident FR mais tu envisages
          d&apos;établir résidence TN (move physiquement) :
          structuration possible. Forme la LLC US <strong>après</strong>{" "}
          ton move à Tunis, pas avant — sinon la requalification
          translucent/opaque jurisprudence FR risque de se déclencher
          rétroactivement.
        </li>
        <li>
          Si tu envisages move vers UAE / Cayman / Singapore — autre
          projet. Voir avocats spécialisés en residence relocation.
        </li>
      </ul>

      <h2>Tableau récapitulatif simplifié</h2>
      <ul>
        <li>
          <strong>Résident FR → LLC US</strong> : IR FR (jusqu&apos;à
          62% all-in) sur profits LLC. Risque translucent/opaque
          requalification. <strong>Conseil avocat fiscaliste FR
          obligatoire</strong>.
        </li>
        <li>
          <strong>Résident TN → LLC US</strong> : IRPP TN (jusqu&apos;à
          40% top marginal) sur profits LLC. Procédure standard
          NOHO + KHIARI.
        </li>
        <li>
          <strong>Résident FR/TN ambigu → LLC US</strong> : RÉSOUS
          d&apos;abord ta résidence via tiebreakers traité. NE
          forme PAS la LLC avant clarification résidentielle.
        </li>
        <li>
          <strong>Résident US (cas exceptionnel binational expat)</strong>
          : tu es soumis aux obligations US worldwide income. La LLC
          devient pass-through dans ton 1040, plus de protection
          fiscale.
        </li>
      </ul>

      <h2>Honest disclosure</h2>
      <p>
        Ce sujet est <strong>complexe</strong>. NOHO ne donne pas de
        conseil fiscal. Pour un binational franco-tunisien envisageant
        LLC US, le minimum vital est :
      </p>
      <ol>
        <li>
          Résous ta résidence fiscale clairement (audit traité
          tiebreakers).
        </li>
        <li>
          Consulte un avocat fiscaliste spécialisé FR-US-TN (pas
          juste un général).
        </li>
        <li>
          Documente proprement ta date de transition si tu changes de
          résidence.
        </li>
        <li>
          Garde tes comptes bancaires + factures + leases en évidence
          pour proof of residence en cas d&apos;audit.
        </li>
      </ol>
      <p>
        Pour la majorité des fondateurs tunisiens résidant en Tunisie,
        le cas est simple (Cas 2 ci-dessus). C&apos;est principalement
        les binationaux établis en France ou en transit qui doivent
        prendre conseil professionnel approfondi.
      </p>
    </>
  );
}
