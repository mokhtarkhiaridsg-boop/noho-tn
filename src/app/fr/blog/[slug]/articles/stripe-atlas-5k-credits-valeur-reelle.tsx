import Link from "next/link";

export function stripeAtlas5kCredits() {
  return (
    <>
      <p>
        Stripe Atlas met en avant &quot;50 000 USD de partner credits&quot;
        pour les founders qui s&apos;inscrivent. Marketing alléchant.
        Mais quand tu fais la math réelle pour un fondateur tunisien
        SaaS early-stage en 2026, qu&apos;est-ce qui est vraiment
        utilisable et qu&apos;est-ce qui est du vapeur ? Voici la
        décomposition honnête.
      </p>

      <h2>Ce qui est annoncé sur stripe.com/atlas</h2>
      <p>
        Marketing 2026 : &quot;Get over $50,000 in credits and discounts
        from leading services&quot;. Incluant :
      </p>
      <ul>
        <li>5 000 USD Stripe processing fee credits</li>
        <li>5 000 USD AWS credits (Activate program)</li>
        <li>5 000 USD GCP credits (Google for Startups)</li>
        <li>5 000 USD Microsoft Azure credits</li>
        <li>2 000 USD Notion credits</li>
        <li>1 500 USD Carta cap table free + premium discount</li>
        <li>3 000 USD Brex credits + intro</li>
        <li>1 000 USD HubSpot credits</li>
        <li>~25 000 USD assorted (mailgun, Linear, Figma, Webflow, OpenAI, ElevenLabs, etc.)</li>
      </ul>

      <h2>La math honnête — ce qui est utilisable pour fondateur tunisien</h2>

      <h3>1. Stripe processing fee credits (5 000 USD)</h3>
      <ul>
        <li>
          <strong>Réel</strong> : Stripe te crédite jusqu&apos;à 5 000
          USD de processing fees après ton activation Atlas. Si tu fais
          100K USD de revenue Year 1, tu paies ~2 900 USD de fees Stripe
          normalement. Le crédit Atlas couvre TOUT.
        </li>
        <li>
          <strong>Catch</strong> : limite annuelle, expire si tu ne
          process pas vite. Si tu fais 5K USD/mois pendant 5 mois (25K
          total), tu utilises ~725 USD du crédit. Les 4 275 USD
          restants expirent souvent au bout de 12 mois.
        </li>
        <li>
          <strong>Vraie valeur</strong> : ~500-1 500 USD pour un
          early-stage typique. Pas 5 000 USD complets.
        </li>
      </ul>

      <h3>2. AWS Activate (5 000 USD)</h3>
      <ul>
        <li>
          <strong>Réel</strong> : valid 1 an, applicable EC2/RDS/S3/etc.
          Bonne nouvelle si tu héberges sur AWS.
        </li>
        <li>
          <strong>Catch</strong> : pour un SaaS early-stage qui démarre,
          les coûts AWS sont &lt;100 USD/mois typique (Vercel + Postgres
          managé est moins cher que AWS direct). Tu n&apos;utilises pas
          5K USD/an.
        </li>
        <li>
          <strong>Vraie valeur</strong> : 500-2 000 USD utilisés sur les
          12 premiers mois pour la majorité des early-stage. Devient
          significatif si tu scale fort.
        </li>
      </ul>

      <h3>3. GCP credits (5 000 USD)</h3>
      <ul>
        <li>
          <strong>Réel</strong> : program &quot;Google for Startups&quot;
          si tu te qualifies (souvent demande criteria de Atlas already
          satisfait).
        </li>
        <li>
          <strong>Catch</strong> : si tu utilises AWS, tu n&apos;utilises
          pas GCP. Tu choisis un cloud, pas deux.
        </li>
        <li>
          <strong>Vraie valeur</strong> : 0 si tu fais AWS, OU 500-2K
          si tu fais GCP. Pas additif aux 5K AWS.
        </li>
      </ul>

      <h3>4. Azure credits (5 000 USD)</h3>
      <ul>
        <li>
          Même logique GCP. Tu choisis un cloud principal. Azure = 0 si
          tu fais AWS ou GCP.
        </li>
      </ul>

      <h3>5. Notion (2 000 USD)</h3>
      <ul>
        <li>
          <strong>Réel</strong> : Notion offre 6-12 mois gratuits via le
          programme startup. Atlas a son canal direct.
        </li>
        <li>
          <strong>Vraie valeur</strong> : Notion Plus coûte 10 USD/user/mois.
          Pour un fondateur seul, 120 USD/an. Le crédit 2K USD =
          ~16 ans de Notion Plus. Tu ne consommes jamais ça.
        </li>
        <li>
          <strong>Vraie valeur</strong> : 120-500 USD utiles.
        </li>
      </ul>

      <h3>6. Carta (1 500 USD)</h3>
      <ul>
        <li>
          <strong>Réel</strong> : cap table management gratuit + premium
          discount.
        </li>
        <li>
          <strong>Catch</strong> : utile UNIQUEMENT si tu as plusieurs
          shareholders avec equity. Pour un sole-founder Wyoming SMLLC,
          aucune valeur.
        </li>
        <li>
          <strong>Vraie valeur</strong> : 0 si solo founder. 500-1 500
          si tu as 2-3 cofounders + ISOs.
        </li>
      </ul>

      <h3>7. Brex (3 000 USD)</h3>
      <ul>
        <li>
          <strong>Réel</strong> : intro Brex avec credits.
        </li>
        <li>
          <strong>Catch</strong> : Brex exige 50K+ USD/mois revenue OU
          startup VC-backed pour approuver. Pour early-stage tunisien
          sans VC, refus probable.
        </li>
        <li>
          <strong>Vraie valeur</strong> : 0 pour 80% des fondateurs
          tunisiens early-stage.
        </li>
      </ul>

      <h3>8-N. HubSpot, Mailgun, Linear, Figma, OpenAI, ElevenLabs, etc.</h3>
      <ul>
        <li>
          Crédits 100-1 000 USD chacun, valid 6-12 mois.
        </li>
        <li>
          Utile si tu utilises déjà ces tools. Pas utile si tu n&apos;en
          as pas besoin.
        </li>
        <li>
          <strong>Vraie valeur</strong> : 500-2 000 USD réellement
          consommés pour un early-stage qui utilise 3-5 de ces tools.
        </li>
      </ul>

      <h2>Total réel utilisé en Year 1 (fondateur tunisien typique)</h2>
      <ul>
        <li>
          Stripe processing : 500-1 500 USD
        </li>
        <li>
          AWS (si AWS user) : 500-2 000 USD
        </li>
        <li>
          GCP / Azure : 0 (tu en choisis un)
        </li>
        <li>
          Notion : 120 USD
        </li>
        <li>
          Carta : 0 (solo founder typique)
        </li>
        <li>
          Brex : 0 (pas approuvé early)
        </li>
        <li>
          Autres outils (Linear, Figma, HubSpot) : 500-1 500 USD
        </li>
        <li>
          <strong>TOTAL RÉEL Year 1</strong> : <strong>1 500-5 000 USD</strong>
          {" "}vraiment consommés. Pas 50 000 USD.
        </li>
      </ul>

      <h2>Total réel utilisé en Year 2-3</h2>
      <ul>
        <li>
          Si tu scale (50K+ MRR), AWS/GCP credits déjà épuisés Year 1.
        </li>
        <li>
          Stripe processing credit épuisé.
        </li>
        <li>
          La majorité des crédits one-time sont expirés.
        </li>
        <li>
          <strong>Year 2-3 ROI Atlas credits</strong> : 0.
        </li>
      </ul>

      <h2>Le vrai value d&apos;Atlas (au-delà des credits)</h2>
      <ul>
        <li>
          <strong>Speed of incorporation + EIN + Mercury</strong> : ~45
          jours vs DIY ~60-75 jours.
        </li>
        <li>
          <strong>Stripe approval canal facilité</strong> : 24-72h
          typique vs application cold 1-7 jours.
        </li>
        <li>
          <strong>Cooley LLP-drafted operating docs</strong> : worth ~2
          000 USD si tu hiriais cooley directement (mais worth ~200 USD
          de generic template équivalent).
        </li>
        <li>
          <strong>Future VC-ready C-Corp DE</strong> : pas de conversion
          LLC → C-Corp future à payer.
        </li>
      </ul>

      <h2>Conclusion — credits marketing vs vraie valeur</h2>
      <ul>
        <li>
          Les &quot;50 000 USD&quot; sont du marketing. La vraie
          consommation est ~1 500-5 000 USD pour un fondateur tunisien
          typique Year 1.
        </li>
        <li>
          Atlas reste utile pour ses raisons structurelles (C-Corp DE,
          Stripe direct, Cooley docs) — pas pour les credits eux-mêmes.
        </li>
        <li>
          Si tu choisis Atlas, planifie d&apos;utiliser les credits dans
          les 12 mois sinon ils expirent.
        </li>
        <li>
          Si tu choisis NOHO Wyoming LLC, tu n&apos;as pas accès à ces
          credits — mais tu économises 500 USD setup + Solution Business
          inclut brand + site qui ne sont PAS inclus dans Atlas.
        </li>
        <li>
          Compare via le calculateur{" "}
          <Link href="/fr/outils/calculateurs/bundle-vs-diy" className="font-bold underline" style={{ color: "#337485" }}>
            Bundle vs DIY
          </Link>
          .
        </li>
      </ul>

      <h2>Le piège marketing — &quot;50 000 USD&quot; sur la landing page</h2>
      <p>
        La technique est classique en marketing US : addition de prix
        catalogue de partners en supposant utilisation max. Ton vrai
        usage est typiquement 10-15% du chiffre annoncé. Apple fait
        pareil avec &quot;$50K of free tools&quot; pour Apple
        Developer. Spotify pareil. Personne ne consomme jamais le total
        annoncé.
      </p>
      <p>
        Cela ne veut pas dire qu&apos;Atlas est moins bon — juste que
        le facteur de décision Atlas vs NOHO ne devrait PAS être les
        credits annoncés. Ça devrait être : besoin de C-Corp ?
        besoin de VC raise ? besoin de brand+site géré ?
      </p>
    </>
  );
}
