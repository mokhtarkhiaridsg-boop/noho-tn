/**
 * Blog article registry. Single source of truth for /blog hub + /blog/[slug].
 * Each article lives in src/app/blog/[slug]/page.tsx and registers metadata here.
 */

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: "business" | "ecom" | "etudiants" | "jobs" | "bct" | "us-compliance" | "banque" | "diaspora" | "outils" | "cas";
  categoryLabel: string;
  publishedAt: string; // ISO date
  readingMinutes: number;
};

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "ouvrir-llc-tunisie-14-jours",
    title: "Ouvrir une LLC américaine depuis la Tunisie en 14 jours — guide complet",
    excerpt:
      "Étapes réelles, frais réels, délais réels. Wyoming vs Delaware vs Nouveau-Mexique selon ton activité. Form 1583, EIN, Mercury, Stripe — chaque pièce du puzzle expliquée pour un fondateur tunisien.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-05-18",
    readingMinutes: 9,
  },
  {
    slug: "mercury-bank-depuis-tunis-dossier-renforce",
    title: "Mercury bank depuis Tunis : le dossier qui maximise tes chances d'approbation",
    excerpt:
      "Mercury refuse ~30 % des dossiers MENA. Voici les 9 éléments qui font passer ton application en première lecture. Plan B documenté (Relay, Brex, Wise) si le premier choix échoue.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-05-19",
    readingMinutes: 7,
  },
  {
    slug: "stripe-tunisie-refuse-contourner-llc-us",
    title: "Stripe refusé en Tunisie : pourquoi, et comment contourner avec une LLC américaine",
    excerpt:
      "Stripe n'opère pas en Tunisie. Une LLC US bien structurée ouvre l'accès — mais pas n'importe comment. Le stack complet : adresse réelle, EIN, Mercury, dossier renforcé. Et le taux honnête : majorité approuvée, 20-35 % de frictions.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-05-20",
    readingMinutes: 8,
  },
  {
    slug: "form-5472-penalite-25000-usd",
    title: "Form 5472 — la pénalité de 25 000 USD qui guette ta LLC oubliée",
    excerpt:
      "Toute LLC américaine détenue par un non-US person doit déposer Form 5472 + 1120 chaque année — même sans revenu. Pénalité de base 25 000 USD, puis 25 000 USD par tranche de 30 jours après mise en demeure, sans plafond.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-05-21",
    readingMinutes: 6,
  },
  {
    slug: "wyoming-delaware-nouveau-mexique-choisir-etat-llc",
    title: "Wyoming vs Delaware vs Nouveau-Mexique — choisir le bon état pour ta LLC depuis Tunis",
    excerpt:
      "Trois états reviennent toujours pour les fondateurs non-résidents. Voici le vrai critère de choix : ce n'est pas la fiscalité (toutes les LLC pass-through paient zéro impôt fédéral au niveau LLC), c'est l'acceptation bancaire, les frais annuels, et l'anonymat.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-05-22",
    readingMinutes: 7,
  },
  {
    slug: "apostille-tn-us-guide-complet",
    title: "Apostille tunisienne pour usage aux USA — guide complet (depuis 2018)",
    excerpt:
      "Tunisie est signataire de la Convention de La Haye depuis 2018 — fini la légalisation consulaire. Procédure exacte : Ministère des Affaires Étrangères, délai 2-7 jours, frais ~20 TND. Pour Form 1583, mariage, diplôme, ou contrat US.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-05-23",
    readingMinutes: 5,
  },
  {
    slug: "itin-w7-depuis-tunisie-sans-ssn",
    title: "ITIN W-7 depuis la Tunisie — comment l'obtenir sans SSN américain",
    excerpt:
      "L'ITIN (Individual Taxpayer Identification Number) te permet de remplir un W-9 et d'éviter le 30% withholding. Procédure W-7 depuis Tunis : 6-11 semaines, original ou copie certifiée de passeport, deux options pour valider l'identité.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-05-24",
    readingMinutes: 6,
  },
  {
    slug: "carte-technologique-tunisienne-plafond-1000-tnd",
    title: "Carte technologique tunisienne — pourquoi le plafond de 1 000 TND/an te bloque, et comment contourner",
    excerpt:
      "La carte technologique BCT permet 1 000 TND/an de paiements internationaux pour services tech. Insuffisant pour héberger AWS, Vercel, Stripe Atlas, ou même Mercury setup. Voici comment une LLC américaine + Mercury résout le problème.",
    category: "bct",
    categoryLabel: "BCT & TN compliance",
    publishedAt: "2026-05-25",
    readingMinutes: 6,
  },
  {
    slug: "autoentrepreneur-tunisien-vs-llc-americaine",
    title: "Autoentrepreneur tunisien vs LLC américaine — la math honnête",
    excerpt:
      "Régime AE TN à 1 500 TND/an forfaitaire vs LLC US à 4 000 TND une fois + 60 USD/an. Quand passer de l'un à l'autre ? Le seuil de bascule, calculé avec frais, banques, et clients réels.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-05-26",
    readingMinutes: 7,
  },
  {
    slug: "mercury-compte-ferme-plan-b",
    title: "Mercury a fermé mon compte LLC — le plan B en 72 heures",
    excerpt:
      "Mercury durcit le KYC MENA en 2024-2025. Si tu reçois une notification de fermeture, voici exactement quoi faire heure par heure pour sécuriser tes fonds et ouvrir Relay ou Wise Business en parallèle.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-05-27",
    readingMinutes: 7,
  },
  {
    slug: "wyoming-annual-report-60-usd",
    title: "Wyoming annual report 60 USD — l'obligation qui peut dissoudre ta LLC",
    excerpt:
      "1 fondateur tunisien sur 4 oublie le Wyoming annual report. Conséquence : LLC administrativement dissoute, Mercury bloque, Stripe ferme. La cascade complète des obligations annuelles, démythifiée.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-05-28",
    readingMinutes: 6,
  },
  {
    slug: "bct-decembre-2025-compte-usd-resident",
    title: "BCT décembre 2025 — ouvrir un compte USD résident en Tunisie",
    excerpt:
      "Le 2 décembre 2025, l'ARP a autorisé les résidents tunisiens à détenir un compte en devises sans autorisation BCT. Voici quelle banque ouvre vraiment, le dossier KYC, et le combo avec Mercury US.",
    category: "bct",
    categoryLabel: "BCT & TN compliance",
    publishedAt: "2026-05-29",
    readingMinutes: 8,
  },
  {
    slug: "w8ben-vs-w9-non-us-person",
    title: "W-8BEN vs W-9 — quel formulaire signer comme fondateur tunisien",
    excerpt:
      "Tu n'es pas US person. Signer W-9 = retenue 30% + risque audit. Voici la règle stricte (W-8BEN pour ton SMLLC, W-8BEN-E pour multi-member, W-8ECI si ECI) et les pièges Stripe/Mercury/Upwork.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-05-30",
    readingMinutes: 7,
  },
  {
    slug: "mercury-kyc-dossier-renforce-9-elements",
    title: "Mercury KYC — les 9 éléments du dossier renforcé (deep-dive 2026)",
    excerpt:
      "Le facteur n°1 de rejet Mercury n'est pas le pays, c'est l'incohérence documentaire. Les 9 éléments à aligner avant soumission, plus l'élément bonus que les concurrents ne peuvent pas fabriquer.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-05-31",
    readingMinutes: 8,
  },
  {
    slug: "stripe-approval-9-item-stack-detail",
    title: "Comment Stripe approve une LLC tunisienne — le 9-item stack",
    excerpt:
      "Le scénario d'approval clean en 24-72h vs le scénario manual review. Les 9 éléments qui font passer la verification automatique, et ce qui déclenche un manual review (et son taux de rejection).",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-06-01",
    readingMinutes: 9,
  },
  {
    slug: "registered-agent-piege-rappel",
    title: "Le piège du registered agent qui ne te rappelle pas — anatomie d'un compte LLC dissous",
    excerpt:
      "Le RA reçoit le courrier officiel, te le forward, mais ne dépose PAS ton annual report. La cascade : Delinquent → Mercury bloqué → LLC dissoute. Les RA recommandés et l'option Suivi mensuel qui automatise.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-02",
    readingMinutes: 7,
  },
  {
    slug: "traite-fiscal-tunisie-usa-1985",
    title: "Traité fiscal Tunisie-USA 1985 — ce qu'il fait et ne fait pas pour ta LLC",
    excerpt:
      "Article 7 (business profits) élimine l'impôt fédéral US, article 10 réduit la retenue sur dividendes, article 24 évite double imposition. MAIS l'IRPP tunisien reste dû. Le faux marketing 'LLC = 0% taxes' démythifié.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-03",
    readingMinutes: 9,
  },
  {
    slug: "oss-eu-tva-saas-exporteurs",
    title: "OSS EU TVA pour SaaS — quand t'enregistrer si tu vends à des clients EU",
    excerpt:
      "Au-delà de 10 000 EUR/an de ventes B2C digitales aux clients EU, tu dois t'enregistrer One Stop Shop et facturer la TVA pays-par-pays. Procédure Non-Union Scheme, alternative MoR (Paddle/Lemon Squeezy), et coût caché.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-04",
    readingMinutes: 7,
  },
  {
    slug: "carte-technologique-business-vs-perso",
    title: "Carte technologique business — la voie 10 000 TND/an pour AE et SARL tunisiennes",
    excerpt:
      "Beaucoup connaissent la version perso à 1 000 TND/an. Très peu connaissent la version business à 5 000-10 000 TND/an négociable. Conditions, dossier, et quand passer LLC US à la place.",
    category: "bct",
    categoryLabel: "BCT & TN compliance",
    publishedAt: "2026-06-05",
    readingMinutes: 6,
  },
  {
    slug: "sales-tax-nexus-us-par-etat",
    title: "Sales tax nexus US — quand ta LLC tunisienne doit collecter par état",
    excerpt:
      "Post-Wayfair 2018, les seuils nexus économique (100K-500K USD/an) déclenchent l'obligation de collecte sales tax dans 45+ états US. Math par état, le piège CA, et marketplace facilitator laws qui simplifient.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-06",
    readingMinutes: 7,
  },
  {
    slug: "tunisian-american-operator-moat",
    title: "Le moat tunisien-américain — pourquoi NOHO bat doola/Stripe Atlas pour les Tunisiens",
    excerpt:
      "doola, Stripe Atlas, Firstbase forment des LLC. NOHO ajoute : storefront LA réel, opérateur tunisien-américain sur place, cabinet KHIARI Tunis pour lettre de crédibilité Mercury. La math d'approval en jours, pas en mois.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-06-07",
    readingMinutes: 9,
  },
  {
    slug: "stripe-atlas-vs-noho-deep-dive",
    title: "Stripe Atlas vs NOHO Solution Business — la comparaison honnête 2026",
    excerpt:
      "Atlas DE C-Corp à 500 USD vs NOHO Wyoming LLC à 4 000 TND. Quand Atlas est la bonne réponse (VC raise) vs quand NOHO l'est (brand+site+Suivi mensuel inclus). Le faux dilemme.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-06-08",
    readingMinutes: 10,
  },
  {
    slug: "operating-agreement-wyoming-smllc",
    title: "Operating Agreement Wyoming SMLLC — les 12 sections obligatoires pour fondateur tunisien",
    excerpt:
      "Wyoming n'exige pas l'OA pour le filing initial, mais Mercury, Stripe et l'IRS le demandent. Les 12 sections obligatoires, adaptées au profil SMLLC tunisien non-US person, et les 5 pièges les plus fréquents.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-09",
    readingMinutes: 8,
  },
  {
    slug: "quand-ne-pas-former-llc-us",
    title: "Quand NE PAS former une LLC US — les 5 cas où c'est l'erreur",
    excerpt:
      "Pas encore de client, tous clients TN, vouloir échapper à l'IRPP, business high-risk Stripe, ou levée VC dans 18 mois — voici les 5 scénarios où la LLC US est l'erreur. Test honnête en 5 questions.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-06-10",
    readingMinutes: 7,
  },
  {
    slug: "stripe-connect-platform-tunisiens",
    title: "Stripe Connect platform pour Tunisiens — peut-on devenir plateforme depuis Tunis ?",
    excerpt:
      "Stripe Connect permet d'orchestrer des paiements multi-vendeurs et de prélever une Application Fee. Marketplace, course platform, agency. Prérequis LLC US + Mercury + standard Stripe approuvé. Les complications fiscales marketplace facilitator + 1099-K.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-06-11",
    readingMinutes: 8,
  },
  {
    slug: "bct-tunisie-2026-actualise",
    title: "BCT Tunisie 2026 — le digest trimestriel pour fondateurs et freelances",
    excerpt:
      "Synthèse de 7 réformes BCT/IRPP/Code des Changes depuis décembre 2025. PPR USD résident, carte technologique business, CRS exchange septembre 2026, FATF off-list, IRPP brackets 2026, statut Wise/Revolut. Mise à jour 20 mai 2026.",
    category: "bct",
    categoryLabel: "BCT & TN compliance",
    publishedAt: "2026-06-12",
    readingMinutes: 8,
  },
  {
    slug: "stripe-atlas-vs-noho-procedure-technique",
    title: "Stripe Atlas vs NOHO — la procédure technique étape par étape (jour J+0 à J+60)",
    excerpt:
      "Au-delà du choix stratégique, voici exactement ce que tu cliques, signes, attends à chaque étape avec Stripe Atlas vs NOHO Solution Business. 8 étapes Atlas, 10 étapes NOHO, timelines J+45-60 vs J+25-35, cash flow Year 1 détaillé.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-06-13",
    readingMinutes: 11,
  },
  {
    slug: "mercury-fallback-waterfall-relay-brex-wise",
    title: "Mercury fallback waterfall — Relay → Brex → Wise → Airwallex, le Plan B documenté",
    excerpt:
      "6 rangs bancaires ordonnés par priorité : Mercury → Relay → Wise → Airwallex → Brex → Payoneer. Quand activer chaque, taux d'approval estimés par profil tunisien, plan recovery si Mercury ferme mid-activity. Le doc que toute LLC tunisienne devrait avoir.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-06-14",
    readingMinutes: 9,
  },
  {
    slug: "sarl-tn-vers-llc-us-sans-dissoudre",
    title: "SARL TN + LLC US en parallèle — le combo qui évite la dissolution prématurée",
    excerpt:
      "Tu as une SARL TN et tu veux ajouter une LLC US pour les clients Stripe — sans dissoudre. Voici le combo parallèle, comment répartir les clients, le piège du transfer pricing à éviter absolument, et quand vraiment dissoudre la SARL.",
    category: "bct",
    categoryLabel: "BCT & TN compliance",
    publishedAt: "2026-06-15",
    readingMinutes: 8,
  },
  {
    slug: "form-5472-self-filing-etape-par-etape",
    title: "Form 5472 self-filing — étape par étape pour SMLLC tunisienne sans CPA",
    excerpt:
      "Si tes revenus ne justifient pas 250-500 USD/an de CPA, voici comment filer Form 5472 + 1120 pro-forma toi-même. Quoi remplir, où soumettre, deadlines, et les 5 erreurs à éviter. Pour SMLLC tunisienne sans related-party transactions ni US-source ECI.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-16",
    readingMinutes: 9,
  },
  {
    slug: "diaspora-returnee-tunisien-reformer-tunisie",
    title: "Diaspora returnee — la transition US → Tunisie sans piège fiscal",
    excerpt:
      "Tu as vécu 5-15 ans aux US, tu rentres définitivement. Voici comment gérer ton statut résidentiel, ta LLC US, tes comptes bank US, le rapatriement de tes assets, et le piège du timing entre US-resident et TN-resident.",
    category: "diaspora",
    categoryLabel: "Diaspora & culture",
    publishedAt: "2026-06-17",
    readingMinutes: 10,
  },
  {
    slug: "mercury-statement-form-5472-partie-iv",
    title: "Lire ton Mercury statement et préparer Form 5472 Part IV — guide pratique",
    excerpt:
      "Form 5472 Part IV demande de déclarer les transactions entre toi et la LLC. Voici comment extraire de ton Mercury CSV les bons montants pour Lines 16 (Amounts loaned) et 17 (Amounts borrowed), avec un exemple concret pour fondateur tunisien année 1.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-18",
    readingMinutes: 8,
  },
  {
    slug: "passer-noho-wyoming-vers-stripe-atlas-cas-inverse",
    title: "Passer de NOHO Wyoming LLC à Stripe Atlas C-Corp — les 5 raisons légitimes",
    excerpt:
      "Le cas inverse : tu as une Wyoming LLC depuis 12-24 mois et ta situation a évolué. Les 5 raisons qui justifient la conversion en C-Corp Delaware (VC raise, ISO employees, profits > 200K, exit QSBS, compliance), les 3 voies techniques (statutory conversion, F-Reorg, asset purchase), et le piège côté IRPP TN.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-06-19",
    readingMinutes: 9,
  },
  {
    slug: "itin-w7-vs-caa-fondateur-tunisien",
    title: "ITIN W-7 vs CAA — choisir la voie d'application depuis la Tunisie",
    excerpt:
      "Deux voies pour obtenir ton ITIN depuis Tunis : envoi passeport original par DHL (gratuit + 8-12 sem sans passeport) OU Certifying Acceptance Agent (100-200 USD mais tu gardes ton passeport). Voie 3 hybride si tu voyages aux US.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-20",
    readingMinutes: 7,
  },
  {
    slug: "stripe-atlas-5k-credits-valeur-reelle",
    title: "Stripe Atlas $50K credits — combien tu utilises vraiment (math honnête)",
    excerpt:
      "Atlas annonce 50 000 USD de credits partners. Décomposition réelle : Stripe 5K, AWS 5K, GCP/Azure (un seul), Notion 2K, Carta 1.5K, Brex 3K, etc. Pour un fondateur tunisien early-stage typique, la vraie consommation Year 1 est 1 500-5 000 USD, pas 50K.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-06-21",
    readingMinutes: 8,
  },
  {
    slug: "cas-pratique-ecom-tunisien-annee-1",
    title: "Karim — fondateur e-com tunisien année 1 avec Solution Business (cas pratique anonymisé)",
    excerpt:
      "Suis Karim de Sfax, vendeur Etsy d'artisanat tunisien, de l'idée à la fin de Year 1 avec NOHO. CA 34 500 USD, gross profit 16 400 USD, frictions Stripe + Amazon + USPTO incluses. Cas réaliste, pas un cas de réussite parfait.",
    category: "cas",
    categoryLabel: "Études de cas",
    publishedAt: "2026-06-22",
    readingMinutes: 11,
  },
  {
    slug: "form-w8ben-ligne-par-ligne",
    title: "Form W-8BEN ligne par ligne — le remplir parfaitement pour Stripe, Mercury, AdSense",
    excerpt:
      "8 lignes pertinentes sur W-8BEN. Line 1 nom, Line 3 adresse résidentielle TN (pas LLC US), Line 5 ITIN optionnel, Line 6 FTIN TN, Line 10 article du traité Tunisie-USA. Les 6 erreurs les plus fréquentes à éviter.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-23",
    readingMinutes: 8,
  },
  {
    slug: "noho-te-dit-non-discovery-call",
    title: "Quand NOHO te dit non — les 5 profils refusés au discovery call",
    excerpt:
      "Dans 25-30% des cas, Mokhtar refuse le prospect au discovery call de 30min. Les 5 profils refusés systématiquement : idée stage, tous clients TN, vouloir échapper IRPP, business high-risk Stripe, vise VC dans 18 mois. Et la recommandation alternative pour chaque cas.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-06-24",
    readingMinutes: 7,
  },
  {
    slug: "bct-ide-declaration-llc-us-tunisie",
    title: "BCT IDE déclaration — quand la LLC US doit s'enregistrer en Tunisie",
    excerpt:
      "Toute participation d'un résident TN dans une entité étrangère est techniquement un IDE à déclarer à la BCT. Pratique 2026 : SMLLC capital symbolique non-enforce, capital > 10K USD recommandé via cabinet partenaire. Distinction IDE vs IRPP. Évolution attendue avec la réforme Code des Changes.",
    category: "bct",
    categoryLabel: "BCT & TN compliance",
    publishedAt: "2026-06-25",
    readingMinutes: 7,
  },
  {
    slug: "tunisien-francais-binational-fiscalite-3-pays",
    title: "Tunisien-français binational — fiscalité 3 pays TN / FR / US avec LLC",
    excerpt:
      "Tu es binational FR-TN. 3 résidences fiscales possibles, traités bilatéraux Tunisie-France 1973 et France-US 1994 avec tiebreakers, piège translucent/opaque jurisprudence FR sur LLC US. Le cas le plus complexe — consulte avocat fiscaliste spécialisé.",
    category: "diaspora",
    categoryLabel: "Diaspora & culture",
    publishedAt: "2026-06-26",
    readingMinutes: 9,
  },
  {
    slug: "mercury-treasury-vs-checking",
    title: "Mercury Treasury vs Checking — gagner 4-5% APY sur ton working capital LLC",
    excerpt:
      "Mercury Checking = 0% intérêts, default. Mercury Treasury = 4.3-4.7% APY sur Treasury bills. Sur 20K USD solde moyen, c'est ~900 USD/an d'intérêts gratuits. Configuration, allocation typique 70/30 Treasury/Checking, fiscalité TN, et quand NE PAS Treasury.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-06-27",
    readingMinutes: 7,
  },
  {
    slug: "fermer-llc-us-proprement-sans-penalite",
    title: "Fermer ta LLC US proprement — la procédure en 8 étapes sans pénalité IRS",
    excerpt:
      "Tu ne peux pas juste \"laisser mourir\" ta LLC. Pénalité Form 5472 25K/an + Wyoming annual fees s'accumulent. Les 8 étapes : finaliser transactions → drain Mercury → close Stripe → Certificate of Dissolution WY → Form 966 IRS → dernier 5472 final → archive 7 ans.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-28",
    readingMinutes: 8,
  },
  {
    slug: "premier-salarie-us-contractor-1099-vs-w2",
    title: "Premier salarié US — 1099-NEC vs W-2 vs corp-to-corp pour ta LLC tunisienne",
    excerpt:
      "Trois formes juridiques pour engager ton premier US worker : 1099 contractor (simple, risque classification IRS), W-2 employee (~15-30% au-dessus du brut en overhead), corp-to-corp (LLC-à-LLC hybride). Quand utiliser chaque + scénario hybride démarrer 1099 → basculer W-2 au mois 6.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-06-29",
    readingMinutes: 9,
  },
  {
    slug: "stripe-express-vs-standard-creators-tunisiens",
    title: "Stripe Express vs Stripe standard — quel modèle pour un créateur tunisien (Patreon, Substack, Teachable)",
    excerpt:
      "Stripe Express (la plateforme est merchant of record) vs Stripe standard (ta LLC est MoR). Pas deux versions du même produit — deux modèles juridiques et fiscaux opposés. Quand chaque est la bonne réponse, le piège retenue 24%/30% sans tax form, et la migration Express → standard sans perdre tes clients.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-06-30",
    readingMinutes: 10,
  },
  {
    slug: "delais-reels-solution-business-audit-honnete",
    title: "Délais réels Solution Business — combien de temps prend chaque étape (audit honnête J+0 à J+60)",
    excerpt:
      "Le marketing promet « LLC en quelques jours ». Réalité mesurée sur 50+ Solution Business depuis nov 2025 : J+25 à J+60 avant ton premier USD encaissé. Médiane et P90 par étape (LLC, EIN, Form 1583, Mercury, Stripe, brand, site). Les 7 causes les plus fréquentes de ralentissement.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-07-01",
    readingMinutes: 10,
  },
  {
    slug: "visa-e2-tunisie-investisseur-procedure-detaillee",
    title: "Visa E-2 investisseur — la voie tunisienne méconnue (procédure détaillée 2026)",
    excerpt:
      "Tunisie est pays signataire du traité E-2 avec les USA depuis 1990. Voie sous-utilisée pour vivre et opérer un business US sans green card. Procédure complète J-180 à J+60, montant investissement substantial (100K-200K USD typique), 5 critères consulate, 7 pièges à éviter, coûts complets ~7.5K-18K USD hors investissement.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-07-02",
    readingMinutes: 11,
  },
  {
    slug: "noho-cabinet-khiari-integration-honnete",
    title: "NOHO + cabinet KHIARI — la division du travail honnête entre US et TN",
    excerpt:
      "C'est quoi exactement la relation entre NOHO (LA, California) et le cabinet KHIARI (Tunis) ? Division concrète sur un dossier Solution Business, ce que NOHO ne fait pas (et te réfère à KHIARI), ce que KHIARI ne fait pas (et te réfère à NOHO), pricing séparé, et pourquoi ce combo est un moat structurel.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-07-03",
    readingMinutes: 9,
  },
  {
    slug: "stripe-atlas-cash-math-year-1-honnete-vs-noho",
    title: "Stripe Atlas $500 + 50K credits vs NOHO 4 000 TND — la math cash honnête Year 1",
    excerpt:
      "Atlas marketing met en avant « 50 000 USD de credits partners ». Décomposition réelle : Stripe 5K + AWS 5K + GCP 5K + Notion + Brex + Slack = 1 500-5 000 USD consommables Y1 médian, pas 50K. Comparaison Y1 + Y2+ cash out cash in pour fondateur tunisien. Atlas vs NOHO vs équivalents marché séparés.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-07-04",
    readingMinutes: 10,
  },
  {
    slug: "shopify-payments-tunisie-vs-llc-us-route",
    title: "Shopify Payments non disponible en Tunisie — la voie LLC US qui débloque (math 50K USD/an)",
    excerpt:
      "Shopify Payments est verrouillé pour business address Tunisie. Route 1 PayPal/Payoneer/Stripe = 4-8% perdus en fees+FX. Route 2 LLC US Shopify Payments natif = 2.9% économie 1 500-3 700 USD sur 50K USD/an. Quand chaque voie est gagnante, la migration sans perdre tes clients, et le piège sales-tax/TVA OSS.",
    category: "ecom",
    categoryLabel: "E-commerce",
    publishedAt: "2026-07-05",
    readingMinutes: 11,
  },
  {
    slug: "amazon-seller-central-setup-tn-dossier",
    title: "Amazon Seller Central US depuis Tunis — procédure KYC complète + 6 pièges (J+0 à J+90)",
    excerpt:
      "Amazon accepte les vendeurs internationaux mais le dossier KYC est le plus strict des marketplaces. LLC US, EIN, Mercury, W-8BEN (PAS W-8BEN-E), tax interview, identity verification Onfido/Persona. Les 6 pièges classiques (entity tax classification, adresse mismatch, EIN dans wrong field, carte tunisienne pour charge method, Gmail perso, tax interview rushé). Timeline J+0 à J+90 du Register à premières ventes FBA.",
    category: "ecom",
    categoryLabel: "E-commerce",
    publishedAt: "2026-07-06",
    readingMinutes: 11,
  },
  {
    slug: "wise-business-tunisie-2026-statut-reel",
    title: "Wise Business Tunisie 2026 — statut réel pour fondateur tunisien et combo Mercury+Wise+BCT PPR",
    excerpt:
      "Wise Business est disponible pour résidents tunisiens mais avec restrictions clés (USD inbound bloqué pour SARL TN, fonctionnel pour LLC US owned by TN person). 3 voies d'usage : SARL TN (EUR/GBP only), LLC US (compatible USD), Wise Personal (fallback). Comparaison directe avec Mercury — Wise gagne sur conversion vers TND (0.4% vs 1-2%), Mercury gagne sur Stripe integration. Le combo Mercury + Wise + BCT PPR USD devient standard 2026.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-07-07",
    readingMinutes: 10,
  },
  {
    slug: "paddle-lemonsqueezy-vs-stripe-direct-saas-tunisiens",
    title: "Paddle vs Lemon Squeezy vs Stripe direct — la math MoR vs sales tax pour SaaS tunisien",
    excerpt:
      "Paddle et Lemon Squeezy (acquis par Stripe 2024) sont Merchant of Record — ils collectent TVA/sales tax US/EU/UK/AU à ta place pour 5% + 50¢ par transaction vs Stripe 2.9% + 30¢ + 1 200-3 000 USD/an admin compliance. Break-even ~71K USD/an. Sous : Paddle/LS gagnent. Au-dessus : Stripe gagne. Choix selon archétype B2B enterprise vs indie creator.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-07-08",
    readingMinutes: 10,
  },
  {
    slug: "upwork-toptal-fiverr-llc-us-route-freelance-tunisien",
    title: "Upwork, Toptal, Fiverr — pourquoi avoir une LLC US débloque +30-50% pour freelance tunisien",
    excerpt:
      "État des 3 plateformes pour fondateur tunisien (mai 2026) : Upwork accepte avec ou sans LLC, Toptal préfère LLC, Fiverr Business tier exige entité. Math freelance 10K USD/mois Upwork : 666 USD/mois économisés en payouts ACH Mercury vs PayPal, soit 8K USD/an. Toptal rate négocié +30% avec LLC. Fiverr multi-seller agency débloqué. Pièges W-9 vs W-8BEN, sales tax marketplace facilitator, IRPP TN.",
    category: "jobs",
    categoryLabel: "Solution Jobs",
    publishedAt: "2026-07-09",
    readingMinutes: 11,
  },
  {
    slug: "apostille-tunisienne-procedure-complete-mae",
    title: "Apostille tunisienne pour usage US — procédure MAE complète + 5 pièges (mai 2026)",
    excerpt:
      "Tunisie signataire de la Convention de La Haye depuis le 30 mars 2018 — apostille suffit, plus de procédure consulaire. MAE Tunis 20 TND, délai 2-7 jours ouvrables. Documents : acte de naissance, diplôme, casier judiciaire, procuration, statuts SARL. Coûts complets 80-140 USD vs 200-400 USD procédure consulaire pré-2018. 5 pièges fréquents et chaîne complète vers USCIS/Mercury/université US.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-07-10",
    readingMinutes: 9,
  },
  {
    slug: "cin-tunisienne-mercury-kyc-documents-acceptes",
    title: "CIN tunisienne Mercury KYC — quels documents acceptés et refusés (mai 2026)",
    excerpt:
      "Mercury refuse la CIN tunisienne standalone — passeport biométrique requis. Stack documents complet (passeport + proof address + Articles + EIN + Operating Agreement + business plan + source of funds). Documents INACCEPTABLES : permis conduire, carte étudiant, passeport non-biométrique, CIN expirée. 4 voies fallback (Relay, Wise Business, Brex, Airwallex). Playbook recovery 48h si Mercury refuse.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-07-11",
    readingMinutes: 8,
  },
  {
    slug: "llc-us-pour-developpeur-tunisien-stack-complet",
    title: "LLC US pour développeur tunisien — le stack opérationnel complet 2026",
    excerpt:
      "Stack 7-niveaux pour dev TN qui facture clients internationaux : entité (LLC WY + EIN), banking (Mercury+Wise+Plan B), payments (Stripe direct W-8BEN), cloud (AWS+Vercel+Cloudflare LLC US), brand (Workspace+USPTO), compliance (5472+1120+WY annual), cybersécurité (1Password+YubiKey). Coûts récurrents Y1 ~1 500-2 500 USD. Quand passer C-Corp Delaware.",
    category: "business",
    categoryLabel: "Solution Business",
    publishedAt: "2026-07-12",
    readingMinutes: 9,
  },
  {
    slug: "etudiant-tunisien-arrivee-us-checklist-30-jours",
    title: "Étudiant tunisien — checklist arrivée US 30 jours complète (F-1 2026)",
    excerpt:
      "Checklist semaine par semaine : pré-arrivée (SEVIS, mailbox US, money), J+0 immigration CBP, semaine 1 banking (Chase/BofA/Wells Fargo) + SSN application + state ID, semaine 2 SEVIS check-in DSO + classes + health insurance, semaine 3 apartment hunting + lease + utilities + renters insurance, semaine 4 SSN reçu + on-campus job + credit bootstrap. Coût total M1 typique 3 400-7 150 USD. 5 pièges à éviter.",
    category: "etudiants",
    categoryLabel: "Solution Étudiants",
    publishedAt: "2026-07-13",
    readingMinutes: 11,
  },
  {
    slug: "stripe-alternatives-high-risk-verticals-tunisien",
    title: "Stripe te refuse — les 6 alternatives high-risk pour fondateur tunisien (2026)",
    excerpt:
      "Verticaux high-risk : info-products, supplements, CBD, adult, gambling, replica, crypto. Stripe ferme. 6 alternatives par vertical : Paddle MoR (5%+50¢), Lemon Squeezy (Stripe-owned), Authorize.net + EPD (high-risk MID 3.5-5% + reserve), Easy Pay Direct, Coinbase Commerce (1%, irreversible), Square (in-person). Combo recommandé par vertical.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-07-14",
    readingMinutes: 10,
  },
  {
    slug: "itin-w7-walkthrough-complet-2026",
    title: "ITIN W-7 — walkthrough complet 3 voies pour fondateur tunisien (2026)",
    excerpt:
      "Quand tu as besoin d'un ITIN (KDP royalties, AdSense, C-Corp Atlas, real estate US) et quand tu n'en as PAS besoin. 3 voies : envoi passport original DHL (8-12 sem), CAA Certifying Acceptance Agent (6-10 sem, garde passport), apply pendant voyage US TAC IRS (4-7 sem, le plus rapide). Form W-7 ligne par ligne, 6 pièges à éviter, comment NOHO coordonne.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-07-15",
    readingMinutes: 11,
  },
  {
    slug: "carte-technologique-business-100k-tnd-2026",
    title: "Carte technologique business — jusqu'à 100 000 TND/an Startup Act (guide complet 2026)",
    excerpt:
      "Carte tech perso (1 000 TND/an) vs business AE (5-10K TND), business SARL (10-50K TND), business Startup Act labellisée 2018 (100K TND/an). Procédure obtention, négociation plafond, coûts, workflow opérationnel SARL TN avec 30K TND/an, et quand passer à LLC US à la place. Combo carte tech + LLC US = optimal.",
    category: "bct",
    categoryLabel: "BCT & TN compliance",
    publishedAt: "2026-07-16",
    readingMinutes: 10,
  },
  {
    slug: "mercury-post-acquisition-stack-2026-tunisien",
    title: "Mercury 2026 — le stack post-vague de fermetures pour fondateur tunisien",
    excerpt:
      "Mercury Checking + Savings + Treasury 4.5% APY + Vault FDIC + Cards + Bill Pay + IO API. Produits NON-disponibles pour foreign person owner. Configuration recommandée + vague de fermetures fin 2024 (5-15% non-US closed). 9 signaux qui réduisent risque de fermeture. Plan B Relay 72h playbook. Combo Wise Business pour économiser ~1 000 USD/an sur conversion.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-07-17",
    readingMinutes: 10,
  },
  {
    slug: "fatca-crs-impact-tunisien-llc-us-owner",
    title: "FATCA + CRS — ce que la BCT, l'IRS et la DGI voient sur ton LLC US (résident tunisien 2026)",
    excerpt:
      "FATCA Tunisie depuis 2018 (US persons reported) — tu n'es PAS US person donc indirect. CRS Tunisie depuis 2018 — TES comptes EU/UK/Maroc/EAU reportés à DGI annuellement. US PAS signataire CRS donc Mercury non-reporté. 5 principes conformité fondateur TN avec LLC US + obligation IRPP article 16.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-07-18",
    readingMinutes: 11,
  },
  {
    slug: "choisir-comptable-fiscaliste-tunisien-llc-us",
    title: "Choisir ton comptable fiscaliste tunisien pour LLC US — 7 critères + 4 cabinets référence",
    excerpt:
      "Pourquoi comptable général ne suffit pas. 7 critères sélection (expérience LLC US, Convention TN-USA, Form 5472, tarif, langues, dispo année-ronde, coordination CPA US). 4 cabinets : KHIARI (partenaire NOHO 1 200-2 800 TND/an), Mazars (premium 3 500-8 000), PwC (top 4 000-12 000), FidExpert (medium 1 500-3 500). Coût total fiscal compliance annuel ~700-1 500 USD/an.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-07-19",
    readingMinutes: 11,
  },
  {
    slug: "diaspora-tn-canada-france-llc-us-strategy",
    title: "Diaspora tunisienne Canada/France — la stratégie LLC US (2026)",
    excerpt:
      "Statut résidence + conventions fiscales Canada-USA 1980 et France-USA 1994. Banking spécifique : Mercury accepté pour PR canadien + résident FR. Stripe FR direct vs LLC US (quand chaque gagne). Pièges TFSA, RRSP, T1135 (CA) + URSSAF, AE seuils, formulaire 3916 (FR). Combo SARL/AE FR + LLC US = optimal &gt; 30K USD/an US revenue.",
    category: "diaspora",
    categoryLabel: "Diaspora & culture",
    publishedAt: "2026-07-20",
    readingMinutes: 11,
  },
  {
    slug: "youtube-adsense-monetization-tn-llc-us-setup",
    title: "YouTube AdSense monétisation — setup LLC US pour creator tunisien (2026)",
    excerpt:
      "Sans LLC US : retenue 24% backup. Avec LLC US + ITIN + Article 7 traité : 0% retenue. Sample channel 5K USD/mois : économie 14 400 USD/an. Walkthrough YouTube Studio Payment + Tax Info, ITIN W-7, Article 12 (royalties 15%) vs Article 7 (business 0%). Channel memberships, Super Thanks, brand sponsorships via Stripe LLC US. Compliance IRPP TN + FTC.",
    category: "diaspora",
    categoryLabel: "Diaspora & culture",
    publishedAt: "2026-07-21",
    readingMinutes: 10,
  },
  {
    slug: "github-sponsors-patreon-creator-economy-llc-us",
    title: "GitHub Sponsors + Patreon + BMAC + Substack — setup LLC US creator economy (2026)",
    excerpt:
      "Plateformes par plateforme : GitHub Sponsors 0% fee + Stripe 2.9%, Patreon 13-17% total, BMAC 5%, Ko-fi 0%/5%, Substack 13%. Sans LLC US : limites + 24% backup withholding + flux fragmentés. Avec LLC US : consolidation, 0% backup, économie 17-22K USD/an sur revenus 30K USD/an combinés. Setup pas-à-pas par plateforme.",
    category: "diaspora",
    categoryLabel: "Diaspora & culture",
    publishedAt: "2026-07-22",
    readingMinutes: 10,
  },
  {
    slug: "1099-k-thresholds-2026-evolution-tunisien",
    title: "Form 1099-K — seuil 600 USD/an 2026, compliance fondateur tunisien LLC US",
    excerpt:
      "Historique 2008-2026 : 20 000 USD → 5 000 → 2 500 → 600 USD/an (cible ARP 2021). Émission Stripe + PayPal + Square + Amazon + Etsy + eBay (Zelle exception). Backup withholding 24% si W-8BEN expiré ou mauvais form. EIN consistency critique. 6 actions concrètes compliance + NOHO Suivi mensuel monitoring.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-07-23",
    readingMinutes: 9,
  },
  {
    slug: "wise-business-multi-currency-flow-optimal",
    title: "Wise Business + Mercury — le flow multi-currency optimal pour 50-200K USD/an (2026)",
    excerpt:
      "Wise Business multi-currency natif USD/EUR/GBP/AUD + Mercury Treasury USD = combo économie 2-3K USD/an vs Mercury seul sur 100K USD/an revenue mix 60% USD / 30% EUR / 10% GBP. Conversion 0.4-0.6% Wise vs 1-2% Mercury wire. Stack 2026 : Mercury + Wise + Stripe multi-currency + BCT PPR USD + banque TN.",
    category: "banque",
    categoryLabel: "Banking & finance",
    publishedAt: "2026-07-24",
    readingMinutes: 10,
  },
  {
    slug: "apple-developer-app-store-tn-llc-us-setup",
    title: "Apple Developer Program — setup App Store Connect via LLC US tunisien (2026)",
    excerpt:
      "Apple Developer Organization (99 USD/an) via LLC US débloque DUNS facile, Mercury USD payouts directs, 0% retenue US-source via W-8BEN-E Article 7 traité TN-USA. Vs Individual Developer limité nom perso + carte tech TN 1K TND/an plafonnée. Économie 7-15K USD/an sur 50K USD App Store revenues. Setup étape par étape 4-8 semaines.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-07-25",
    readingMinutes: 9,
  },
  {
    slug: "cloudflare-r2-workers-pages-creator-tunisien",
    title: "Cloudflare R2 + Workers + Pages — le stack creator anti-AWS pour fondateur tunisien (2026)",
    excerpt:
      "AWS Lambda + S3 + CloudFront + DynamoDB ~157 USD/mois vs Cloudflare Workers + R2 + D1 + KV ~25 USD/mois pour SaaS 100K users. Économie 1 560 USD/an. R2 = 0 USD egress (vs S3 0.09 USD/GB). Cloudflare for Startups credits 5K USD sur 2 ans. Stack setup étape par étape + migration AWS → Cloudflare 8-15 jours.",
    category: "business",
    categoryLabel: "Business",
    publishedAt: "2026-07-26",
    readingMinutes: 11,
  },
  {
    slug: "stripe-tax-vs-taxjar-avalara-comparison",
    title: "Stripe Tax vs TaxJar vs Avalara — quel outil sales tax compliance pour LLC US tunisien",
    excerpt:
      "Stripe Tax 0.5% transaction (intégré, pas filing) vs TaxJar 19-99 USD/mo + AutoFile (automation complète) vs Avalara 500-5K USD/mo (enterprise). Math comparative 3 scénarios : 100K USD/an = Stripe Tax, 500K = TaxJar Pro, 5M = Avalara. Setup transition + intégration Stripe + compliance IRPP TN.",
    category: "us-compliance",
    categoryLabel: "US compliance",
    publishedAt: "2026-07-27",
    readingMinutes: 10,
  },
  {
    slug: "tn-expat-retour-fiscalite-audit-dgi",
    title: "Retour expat Tunisie — fiscalité 18 mois préparation + audit DGI playbook (2026)",
    excerpt:
      "Tu rentres définitivement TN après 5-15 ans US/CA/FR/UAE. Timeline T-18 mois préparation : audit patrimoine, liquidations stratégiques (401k, condo, RSUs), documentation 4 ans rétrospective. Obligations DGI première année (compte étranger, immobilier, LLC ownership). Déclencheurs + procédure audit DGI. Garde LLC US opérationnelle post-retour. Cas type 800K USD net worth.",
    category: "diaspora",
    categoryLabel: "Diaspora & culture",
    publishedAt: "2026-07-28",
    readingMinutes: 12,
  },
  {
    slug: "linkedin-ads-outbound-b2b-llc-us-tunisien",
    title: "LinkedIn Ads + Outbound — setup B2B acquisition via LLC US pour fondateur tunisien",
    excerpt:
      "LinkedIn refuse account business sans EIN US. LLC US débloque LinkedIn Business Manager + Sales Navigator + Ads. Campaign structure 3 funnels (awareness 30-50 USD/jour + consideration 40-80 + decision 60-120). Outbound playbook 4-step sequence Day 1/7/14/21. Combo paid+outbound = 1-5 customers/mois acquis. Math 2 500-5 500 USD/mois stack complet.",
    category: "business",
    categoryLabel: "Business",
    publishedAt: "2026-07-29",
    readingMinutes: 11,
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function listArticles(): ArticleMeta[] {
  return [...ARTICLES].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
