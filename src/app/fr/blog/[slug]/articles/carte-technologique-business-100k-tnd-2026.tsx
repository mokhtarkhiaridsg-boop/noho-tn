import Link from "next/link";

export function carteTechnologiqueBusiness100kTnd2026() {
  return (
    <>
      <p>
        La <strong>Carte Technologique Internationale (CTI)</strong>{" "}
        est l&apos;instrument BCT qui permet à un résident tunisien de
        payer en devises pour des services tech US/EU. Tout le monde
        connaît la version perso (1 000 TND/an). Très peu connaissent
        la version <strong>business</strong> qui plafonne à{" "}
        <strong>10 000-100 000 TND/an</strong> selon ton dossier.
        Voici le guide complet 2026 — quand l&apos;obtenir, comment
        négocier le plafond, et quand passer à LLC US à la place.
      </p>

      <h2>Carte technologique perso vs business — les chiffres</h2>
      <ul>
        <li>
          <strong>Perso résident</strong> : plafond 1 000 TND/an pour
          paiements internationaux (services SaaS, abonnements,
          formations). Obtenu via toute banque tunisienne en quelques
          jours.
        </li>
        <li>
          <strong>Business AE (Auto-Entrepreneur)</strong> : plafond
          5 000-10 000 TND/an selon dossier. Nécessite numéro AE actif.
        </li>
        <li>
          <strong>Business SARL/SUARL</strong> : plafond 10 000-50 000
          TND/an typique. Au-delà, dossier exceptionnel justifié.
        </li>
        <li>
          <strong>Business Tunisie startup déclarée (Startup Act 2018)</strong>{" "}
          : <strong>jusqu&apos;à 100 000 TND/an</strong>. Mai 2026 :
          quelques fintech / SaaS Tunis confirmées à ce plafond, mais
          le ratio est faible (peut-être 100-300 startups labellisées
          le maxent vraiment).
        </li>
      </ul>

      <h2>Pour qui la carte tech business est suffisante</h2>
      <ul>
        <li>
          <strong>AE freelance qui paie 5-8K TND/an SaaS tools</strong>{" "}
          (Adobe Creative, Figma, Notion, GitHub, etc.). La carte tech
          AE (5-10K TND plafond) couvre.
        </li>
        <li>
          <strong>SARL TN qui sous-traite à des freelancers US/EU
          avec petits contrats &lt; 20 000 TND/an totaux</strong>{" "}
          en agrégat. Carte tech SARL plafond 20-30K TND négocié
          suffit.
        </li>
        <li>
          <strong>Startup labellisée Startup Act 2018</strong> avec
          tech stack 50-80K TND/an (Vercel Pro, AWS, Stripe, etc.).
          Plafond 100K TND.
        </li>
      </ul>

      <h2>Quand la carte tech business NE SUFFIT PAS — passer à LLC US</h2>
      <ul>
        <li>
          <strong>Tu vises de RECEVOIR de l&apos;argent</strong> (pas
          juste payer). La carte tech est unidirectionnelle (paiement
          OUT). Pour recevoir USD de clients US, tu as besoin d&apos;un
          compte US (Mercury via LLC US).
        </li>
        <li>
          <strong>Plafond pas suffisant</strong>. Si tu prévois &gt;
          100 000 TND/an de paiements internationaux ET tu n&apos;es
          pas Startup Act, tu vas hitter le plafond. LLC US + Mercury
          débloque sans limite (sous réserve de KYC).
        </li>
        <li>
          <strong>Stripe / Mercury / Wise refuse adresse Tunisie</strong>{" "}
          : payment processors majeurs US ne supportent pas la TN comme
          merchant country. LLC US obligatoire pour accès.
        </li>
        <li>
          <strong>Tu veux acheter Amazon Seller Central, Shopify
          Payments, ou opérer e-commerce US</strong>. Nécessite LLC
          US + EIN + Mercury, carte tech non-suffisante.
        </li>
      </ul>

      <h2>Comment obtenir la carte tech business — étape par étape</h2>
      <ol>
        <li>
          <strong>Vérifie ton éligibilité</strong>. Tu dois être :
          <ul>
            <li>Auto-Entrepreneur déclaré (matricule AE actif), OU</li>
            <li>Gérant de SARL/SUARL tunisienne, OU</li>
            <li>Salarié d&apos;une SARL/SUARL avec autorisation
            employeur, OU</li>
            <li>Founder d&apos;une startup labellisée Startup Act
            2018 (label délivré par CNI/MNT).</li>
          </ul>
        </li>
        <li>
          <strong>Dossier banque</strong>. Prépare :
          <ul>
            <li>Demande de carte tech business (formulaire BIAT /
            Attijari / STB / UIB selon banque).</li>
            <li>Extrait RCS de moins de 3 mois.</li>
            <li>Statuts à jour de la société.</li>
            <li>Patente / matricule fiscal valide.</li>
            <li>Bilans des 2 dernières années (si applicable).</li>
            <li>Justificatifs des besoins en devises (factures
            estimées, contrats fournisseurs US/EU).</li>
            <li>Si Startup Act : copie certifiée du label CNI.</li>
          </ul>
        </li>
        <li>
          <strong>Soumission + négociation plafond</strong>. La banque
          propose un plafond initial (souvent 10-15K TND). Si tes
          justificatifs supportent plus, demande une négociation. Pour
          Startup Act, présente projection 2-3 ans + business plan.
        </li>
        <li>
          <strong>Délai d&apos;obtention</strong> : 2-6 semaines selon
          banque. BIAT et Attijari les plus rapides (~3 semaines).
          Banques publiques (STB, BNA) plus lentes (4-6 semaines).
        </li>
        <li>
          <strong>Activation et premier paiement</strong>. La carte
          arrive par courrier. Activation via app mobile bancaire.
          Premier paiement test à un service connu (ex : 1 USD via
          Stripe checkout test) pour vérifier qu&apos;elle fonctionne.
        </li>
      </ol>

      <h2>Coût de la carte tech business</h2>
      <ul>
        <li>
          <strong>Frais d&apos;émission</strong> : 30-60 TND une fois.
        </li>
        <li>
          <strong>Cotisation annuelle</strong> : 40-100 TND/an selon
          banque et type.
        </li>
        <li>
          <strong>Frais par paiement</strong> : 1-3% du montant +
          spread FX (~1-2% au-dessus du taux interbank).
        </li>
        <li>
          <strong>Plafond mensuel</strong> : variable selon
          autorisation. Souvent 25-30% du plafond annuel par mois.
        </li>
      </ul>

      <h2>Workflow opérationnel typique (SARL TN avec carte tech 30K TND/an)</h2>
      <p>
        Tu opères une SARL tunisienne. Tu paies tes outils SaaS et tes
        contractors US/EU avec la carte tech 30K TND/an. Cela couvre :
      </p>
      <ul>
        <li>AWS Activate ou Vercel Pro : ~2 400 TND/an</li>
        <li>GitHub Team + Cloudflare Pro : ~1 200 TND/an</li>
        <li>Stripe Atlas fee (si tu en avais besoin, one-time) : ~1
        550 TND</li>
        <li>Sentry, Datadog, LogRocket : ~3 600 TND/an</li>
        <li>Google Workspace + Microsoft 365 : ~600 TND/an</li>
        <li>Designer freelance Upwork US : ~12 000 TND/an</li>
        <li>Marketing tools (Mailchimp, ConvertKit) : ~2 400 TND/an</li>
        <li>
          <strong>Total : ~23 750 TND/an</strong> — confort dans le
          plafond 30K.
        </li>
      </ul>

      <h2>Cas où la carte tech ne suffit plus — l&apos;upgrade vers LLC US</h2>
      <p>
        Tu vises :
      </p>
      <ul>
        <li>
          Lever 200K USD ARR via Stripe (recevoir, pas juste payer).
          Carte tech ne fait pas ça.
        </li>
        <li>
          Payer 80K TND/an de tech stack + 50K TND/an de contractors.
          Carte tech 30K dépassée.
        </li>
        <li>
          Opérer SaaS B2B avec clients US enterprise qui paient sur
          contrat. Stripe direct via LLC US.
        </li>
        <li>
          Engager 2-3 contractors US régulièrement. Mercury wires
          plus économiques que carte tech FX spread.
        </li>
      </ul>
      <p>
        Dans ces cas : LLC US + Mercury débloque les paiements
        bidirectionnels, sans plafond annuel. Le coût d&apos;entrée
        (4 000 TND une fois) est rapidement amorti.
      </p>

      <h2>Combo cartes tech + LLC US (le plus économique)</h2>
      <p>
        Si tu vises 50-100K USD/an et tu opères depuis Tunis avec une
        SARL existante :
      </p>
      <ul>
        <li>
          <strong>Garde la carte tech SARL 30K TND/an</strong> pour
          les petits paiements quotidiens (SaaS subscriptions, petits
          contractors). Pratique, déjà familier de l&apos;équipe.
        </li>
        <li>
          <strong>Ouvre une LLC US + Mercury en parallèle</strong>{" "}
          pour les clients US qui paient (Stripe), les gros contractors
          US (wires Mercury), et l&apos;achat de matériel US (carte
          Mercury debit).
        </li>
        <li>
          <strong>Réconciliation comptable</strong> : la SARL TN
          déclare ses dépenses, la LLC US fait son Form 5472 + 1120
          pro-forma. Tu conserves la flexibilité opérationnelle des
          deux.
        </li>
      </ul>

      <h2>Pièges classiques carte tech business</h2>
      <ol>
        <li>
          <strong>Plafond annuel hit en milieu d&apos;année</strong>.
          Tu ne peux plus payer rien du tout en devise jusqu&apos;à
          l&apos;année suivante. Anticipe : si tu approches 80% du
          plafond en T3, demande extension ou bascule sur LLC US.
        </li>
        <li>
          <strong>Banque limite l&apos;usage à certaines catégories
          MCC</strong>. Ex : refuse les paiements crypto, gambling,
          adult. Limite informelle mais réelle.
        </li>
        <li>
          <strong>FX spread caché élevé</strong>. Ton paiement en USD
          est facturé à taux interbank + 1.5-2.5% spread. Pour gros
          volumes, ajoute 600-1500 TND/an en coût caché.
        </li>
        <li>
          <strong>Pas d&apos;autorisation BCT pour certains pays</strong>{" "}
          (Iran, Corée du Nord). Si ton fournisseur SaaS est basé là,
          paiement bloqué.
        </li>
        <li>
          <strong>Carte refusée par Stripe / Mercury / Apple
          Developer</strong> souvent. Ces processors flag les cartes
          tunisiennes même business. Pour ces, LLC US + carte Mercury
          debit reste la meilleure voie.
        </li>
      </ol>

      <h2>NOHO et la carte tech business</h2>
      <ul>
        <li>
          <strong>NOHO ne demande pas la carte tech à ta place</strong>{" "}
          — c&apos;est ton dossier bancaire tunisien.
        </li>
        <li>
          <strong>Cabinet partenaire KHIARI peut</strong> rédiger le
          business plan + projection devise pour ton dossier banque,
          renforçant ta négociation de plafond.
        </li>
        <li>
          <strong>NOHO conseille sur le choix carte tech vs LLC
          US</strong> selon ton profil. Pour 80% des fondateurs
          tunisiens qu&apos;on rencontre, LLC US est plus stratégique
          long-terme. Pour 20% qui n&apos;ont besoin que de paiements
          OUT modestes, carte tech AE/SARL suffit.
        </li>
      </ul>

      <h2>Verdict</h2>
      <p>
        La carte technologique business est un excellent outil pour
        opérations TN-centric jusqu&apos;à 30-50K TND/an de paiements
        sortants. Au-delà, ou si tu reçois aussi de l&apos;argent
        international, LLC US débloque sans plafond. Combo cartes tech
        + LLC US = optimal pour la majorité des fondateurs TN actifs.
      </p>

      <h2>CTA</h2>
      <p>
        Tu hésites entre carte tech business et LLC US (ou les deux) ?{" "}
        <Link href="/fr/appel">Réserve un appel</Link>. On math l&apos;économie
        attendue selon tes projections paiements OUT + IN, et on te dit
        franchement quelle voie est la plus adaptée.
      </p>
    </>
  );
}
