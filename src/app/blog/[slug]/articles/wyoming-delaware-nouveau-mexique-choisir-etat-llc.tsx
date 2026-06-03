import Link from "next/link";

export function wyomingDelawareNm() {
  return (
    <>
      <p>
        Trois états reviennent toujours quand on parle de LLC pour
        fondateur non-résident : Wyoming, Delaware, Nouveau-Mexique.
        Voici ce qui les distingue vraiment — et pourquoi le critère
        principal n&apos;est <em>pas</em> ce que la plupart des guides
        en ligne te font croire.
      </p>

      <h2>Ce qui ne distingue pas les trois</h2>
      <p>
        La <strong>fiscalité fédérale</strong> est identique dans les
        trois cas : une LLC pass-through paie zéro impôt fédéral au
        niveau LLC. Les revenus passent directement à toi en tant
        qu&apos;owner non-résident — qui n&apos;as pas d&apos;obligation
        IRS si ton activité n&apos;est pas <em>effectively connected</em>
        {" "}avec le territoire US.
      </p>
      <p>
        La <strong>fiscalité de l&apos;État</strong> est aussi à zéro
        dans les trois cas pour un non-résident :
      </p>
      <ul>
        <li>Wyoming — pas d&apos;impôt sur le revenu d&apos;État, pour personne.</li>
        <li>Delaware — impôt sur le revenu d&apos;État ne s&apos;applique qu&apos;aux résidents DE ; pas à toi.</li>
        <li>Nouveau-Mexique — pareil, pas d&apos;impôt si tu n&apos;es pas résident NM.</li>
      </ul>
      <p>
        Conclusion : la fiscalité n&apos;est <strong>pas</strong> un
        critère de choix entre les trois. Ce qui distingue, c&apos;est
        les frais annuels, l&apos;anonymat, et la perception bancaire.
      </p>

      <h2>Wyoming — le choix par défaut</h2>
      <ul>
        <li>
          <strong>Frais de création :</strong> 100 USD au Wyoming Secretary
          of State.
        </li>
        <li>
          <strong>Frais annuels :</strong> 60 USD/an de rapport annuel (le
          plus bas des 50 États).
        </li>
        <li>
          <strong>Anonymat :</strong> Le nom du beneficial owner n&apos;apparaît
          pas dans le registre public. Seul le registered agent figure.
        </li>
        <li>
          <strong>Acceptation bancaire :</strong> Mercury, Relay, Brex,
          Wise Business, Stripe — tous acceptent Wyoming sans friction.
        </li>
        <li>
          <strong>Préférence des plateformes :</strong> Amazon Brand
          Registry, Etsy seller, Shopify Payments — Wyoming passe tous
          les filtres.
        </li>
      </ul>
      <p>
        C&apos;est le choix pour 80 % des fondateurs tunisiens.
      </p>

      <h2>Delaware — uniquement si tu vises VC</h2>
      <ul>
        <li>
          <strong>Frais de création :</strong> 90 USD.
        </li>
        <li>
          <strong>Frais annuels :</strong> 300 USD/an de franchise tax
          minimum, indépendamment de tes revenus. Cinq fois plus
          qu&apos;au Wyoming.
        </li>
        <li>
          <strong>Anonymat :</strong> Comparable à Wyoming — beneficial
          owner pas public.
        </li>
        <li>
          <strong>Légalité de référence :</strong> 60 % des entreprises
          du Fortune 500 sont incorporées au DE. Court of Chancery,
          jurisprudence corporate la plus dense des US. Les fonds VC
          n&apos;investissent presque jamais dans une LLC hors DE.
        </li>
      </ul>
      <p>
        Conclusion : Delaware n&apos;a de sens que si tu vises une levée
        de fonds VC dans les 18 mois. Pour une activité bootstrappée,
        c&apos;est 240 USD/an de plus pour zéro bénéfice pratique.
      </p>

      <h2>Nouveau-Mexique — anonymat maximal</h2>
      <ul>
        <li>
          <strong>Frais de création :</strong> 50 USD.
        </li>
        <li>
          <strong>Frais annuels :</strong> <em>Zéro</em>. Aucun rapport
          annuel obligatoire, aucune franchise tax. Le seul des 50
          États sans aucun frais annuel.
        </li>
        <li>
          <strong>Anonymat :</strong> Le plus strict des trois. Ni le
          beneficial owner ni le manager n&apos;apparaissent dans le
          registre public. Tu peux opérer la LLC sans qu&apos;aucune
          recherche publique ne mène à toi.
        </li>
        <li>
          <strong>Acceptation bancaire :</strong> Plus mitigée. Mercury
          accepte mais avec questions supplémentaires. Certains
          processeurs (Stripe Atlas, par exemple) refusent les LLC NM
          par défaut.
        </li>
      </ul>
      <p>
        Conclusion : Nouveau-Mexique a du sens si l&apos;anonymat est un
        critère fort (activité sensible, achat immobilier discret, etc.)
        et que tu acceptes une friction bancaire supplémentaire.
      </p>

      <h2>Tableau de décision rapide</h2>
      <ul>
        <li>
          <strong>Tu factures du service / freelance / consulting</strong>
          {" "}— Wyoming.
        </li>
        <li>
          <strong>Tu vends du e-commerce (Amazon, Etsy, Shopify)</strong>
          {" "}— Wyoming.
        </li>
        <li>
          <strong>Tu lèves des fonds VC dans les 18 mois</strong> —
          Delaware (en C-Corp via Stripe Atlas, pas en LLC).
        </li>
        <li>
          <strong>Tu veux investir dans l&apos;immobilier US discrètement</strong>
          {" "}— Nouveau-Mexique.
        </li>
        <li>
          <strong>Tu lances une marque consumer high-profile</strong>
          {" "}— Wyoming + dépôt trademark USPTO en parallèle.
        </li>
      </ul>

      <h2>Combien ça change vraiment</h2>
      <p>
        Sur 5 ans, la différence cumulée entre Wyoming et Delaware,
        c&apos;est 240 USD × 5 = 1 200 USD. Sur 5 ans entre Wyoming et
        Nouveau-Mexique : 60 USD × 5 = 300 USD d&apos;économies. Ce
        n&apos;est pas la fiscalité qui justifie ton choix, c&apos;est
        la fluidité opérationnelle.
      </p>
      <p>
        Pour la majorité des fondateurs tunisiens, on recommande{" "}
        <strong>Wyoming par défaut</strong>. Si tu hésites,{" "}
        <Link href="/diagnostic" className="font-bold underline" style={{ color: "#337485" }}>
          le diagnostic 5 questions
        </Link>{" "}
        confirme la recommandation en 60 secondes.
      </p>
    </>
  );
}
