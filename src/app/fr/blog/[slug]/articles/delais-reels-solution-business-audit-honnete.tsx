import Link from "next/link";

export function delaisReelsSolutionBusinessAuditHonnete() {
  return (
    <>
      <p>
        Le marketing de doola, Firstbase, Stripe Atlas et NOHO promet
        des LLCs <em>&laquo; en quelques jours &raquo;</em>. La réalité :{" "}
        <strong>J+25 à J+60</strong> avant que tu puisses encaisser ton
        premier USD de client US, selon ton dossier et la chance.
        Voici, étape par étape, les délais que nous mesurons en interne
        sur les 50+ Solution Business shippées depuis novembre 2025. Pas
        de moyennes optimistes — la médiane et le P90 (cas lent).
      </p>

      <h2>Méthodologie — comment on mesure</h2>
      <ul>
        <li>
          <strong>J+0</strong> = jour où le client paie le deposit
          Solution Business (4 000 TND ou 2 000 TND si paiement en 2x).
        </li>
        <li>
          <strong>Médiane</strong> = 50% des clients sont en-dessous.
        </li>
        <li>
          <strong>P90</strong> = 90% des clients sont en-dessous (les
          10% lents sortent du graph). Si tu es dans les 10% les plus
          lents, c&apos;est un signal — vérifier les pièces du dossier.
        </li>
        <li>
          <strong>Échantillon</strong> = 50+ Solution Business depuis
          novembre 2025, ~80% Wyoming, ~15% Delaware, ~5%
          Nouveau-Mexique. Hors cas SARL/SUARL TN qui ont leur propre
          calendrier.
        </li>
      </ul>

      <h2>Étape 1 — Discovery call → signature</h2>
      <ul>
        <li>
          <strong>Médiane : J+2 à J+5.</strong> Le client réfléchit 1-3
          jours après le call de 30 min. Refuse ou accepte par WhatsApp.
        </li>
        <li>
          <strong>P90 : J+14.</strong> Cas où le client veut consulter
          un avocat tunisien (souvent KHIARI), discuter avec sa
          famille (Persona &laquo; Frustrated Middle-Class Dad &raquo;), comparer à
          doola/Atlas.
        </li>
        <li>
          <strong>Que tu peux faire pour accélérer</strong> : arriver
          au call avec ton CIN + business plan 1-pager déjà préparé,
          et tes 2-3 questions clés écrites.
        </li>
      </ul>

      <h2>Étape 2 — Formation LLC état (Wyoming/Delaware/NM)</h2>
      <ul>
        <li>
          <strong>Wyoming médiane : J+3 (online filing same-day, état
          stamps J+2 à J+3).</strong>
        </li>
        <li>
          <strong>Wyoming P90 : J+10.</strong> Si filing rejeté pour
          nom de LLC en conflit, on doit re-soumettre. Vérifier la
          disponibilité du nom avant filing évite ce piège.
        </li>
        <li>
          <strong>Delaware médiane : J+2.</strong> Plus rapide que WY
          si on paie le 24h expedited (50 USD supplémentaire).
        </li>
        <li>
          <strong>New Mexico médiane : J+5.</strong> Plus lent que WY,
          mais 0 USD annual report.
        </li>
        <li>
          <strong>Inputs à ne pas oublier</strong> : nom LLC final
          choisi (3 backup names), adresse 5062 Lankershim signée,
          registered agent confirmation lettre. Articles of
          Organization filed = J+3 typiquement.
        </li>
      </ul>

      <h2>Étape 3 — EIN auprès de l&apos;IRS</h2>
      <p>
        L&apos;EIN est le goulot d&apos;étranglement #1 du calendrier
        pour un fondateur non-US person.
      </p>
      <ul>
        <li>
          <strong>Si tu es US person (SSN/ITIN existant)</strong> :
          médiane J+1 (online form SS-4). P90 J+3.
        </li>
        <li>
          <strong>Si tu es non-US person sans ITIN</strong> : pas de
          voie online, faut faire par <strong>fax au IRS</strong>{" "}
          (numéro 855-641-6935). Médiane J+15 (réception EIN par fax
          ou par lettre courrier). P90 J+45.
        </li>
        <li>
          <strong>NOHO Solution Business inclut</strong> le filing fax
          SS-4 par notre équipe à LA. Une ligne fax dédiée. Réduction
          médiane à J+12, P90 à J+30.
        </li>
        <li>
          Si tu nous passes ton Articles of Organization à J+3 et qu&apos;on
          file le SS-4 le même jour, ton EIN arrive en médiane à
          J+15.
        </li>
      </ul>

      <h2>Étape 4 — Form 1583 USPS notarisation</h2>
      <ul>
        <li>
          <strong>Médiane : J+5.</strong> On envoie le PDF Form 1583,
          tu signes, on notarise à LA via Mokhtar California Notary.
          Ton mailbox est officiellement actif J+5 à J+7.
        </li>
        <li>
          <strong>P90 : J+14.</strong> Si tu ne peux pas signer
          immédiatement (voyage, attente CIN, etc.).
        </li>
        <li>
          <strong>Parallélisation</strong> : Form 1583 peut être
          signé avant l&apos;EIN. On parallelise les deux étapes —
          gain ~5 jours sur le calendrier total.
        </li>
      </ul>

      <h2>Étape 5 — Mercury bank application</h2>
      <p>
        L&apos;étape la plus variable. Médiane et P90 divergent
        beaucoup.
      </p>
      <ul>
        <li>
          <strong>Médiane application → décision : J+7.</strong>{" "}
          Application soumise avec EIN + Articles + Operating
          Agreement + ID + Form 1583 + business plan. Décision sous 7
          jours typique.
        </li>
        <li>
          <strong>P90 : J+30.</strong> Si Mercury demande
          documentation supplémentaire (proof of revenue, bank
          statements TN, customer contracts, etc.). 1-2 round-trips
          de back-and-forth.
        </li>
        <li>
          <strong>Pire scénario</strong> : refus + activation Plan B
          via{" "}
          <Link href="/fr/blog/mercury-fallback-waterfall-relay-brex-wise">
            waterfall Relay/Brex/Wise/Airwallex
          </Link>
          . Ajoute J+10 à J+30.
        </li>
        <li>
          Si on totalise EIN J+15 + Mercury J+7 séquentiel = J+22
          médiane pour avoir le compte bancaire fonctionnel. Avec
          fluctuations Mercury, P90 J+45.
        </li>
      </ul>

      <h2>Étape 6 — Stripe activation</h2>
      <ul>
        <li>
          <strong>Médiane application → live : J+3.</strong> Avec EIN
          + Mercury + adresse 5062 Lankershim + site démo. Décision
          automatique Stripe risk algo.
        </li>
        <li>
          <strong>P90 : J+21.</strong> Si Stripe envoie manual review
          (typique pour MENA ownership). Demande documentation
          additionnelle.
        </li>
        <li>
          <strong>Cas honnête</strong> : ~20-35% des fondateurs
          Tunisiens passent en manual review au moins une fois. Pas
          un signal de rejection, juste un délai supplémentaire.
        </li>
        <li>
          Si on totalise depuis J+0 : Stripe live médiane J+25, P90
          J+50.
        </li>
      </ul>

      <h2>Étape 7 — Brand identity (logo + brand book + cartes)</h2>
      <ul>
        <li>
          <strong>Médiane : J+10.</strong> 3 propositions logo, choix
          client, finalisation. Brand book 1-pager ready.
        </li>
        <li>
          <strong>P90 : J+25.</strong> Si client demande 2+ rounds
          de revisions au-delà du scope inclus, on charge en
          standalone.
        </li>
        <li>
          <strong>Cartes business imprimées + expédiées Tunis</strong> :
          médiane J+18, P90 J+30. DHL Express depuis LA prend 5-7
          jours.
        </li>
        <li>
          Cette étape est <em>parallèle</em> aux étapes LLC/EIN/bank.
          Pas dans le chemin critique.
        </li>
      </ul>

      <h2>Étape 8 — Site web (build + Stripe integration + domain)</h2>
      <ul>
        <li>
          <strong>Médiane : J+14.</strong> 5 sections de base (hero,
          services, about, pricing, contact), Stripe integration,
          domain pointé.
        </li>
        <li>
          <strong>P90 : J+28.</strong> Si client demande beaucoup de
          custom content, copy review tournants, ou si Stripe
          integration nécessite des refactos sur la connexion.
        </li>
        <li>
          Cette étape est aussi <em>parallèle</em>. Mais elle dépend
          de Stripe live (étape 6) pour la connexion paiement
          fonctionnelle.
        </li>
      </ul>

      <h2>Étape 9 — Social media setup (Instagram Biz + TikTok Biz + Email Pro)</h2>
      <ul>
        <li>
          <strong>Médiane : J+5.</strong> Création comptes, branding,
          bio optimisée, premier post template.
        </li>
        <li>
          <strong>P90 : J+10.</strong> Si Instagram demande
          verification business (rare mais arrive).
        </li>
        <li>
          Étape <em>parallèle</em>, pas critique.
        </li>
      </ul>

      <h2>Étape 10 — Go-to-market doc + handoff final</h2>
      <ul>
        <li>
          <strong>Médiane : J+25 (fin du Solution Business).</strong>{" "}
          GTM plan 30-day, login credentials remis, formation Notion
          dashboard, premier call mensuel scheduled.
        </li>
        <li>
          <strong>P90 : J+45.</strong>
        </li>
      </ul>

      <h2>Récap timeline en chemin critique</h2>
      <ul>
        <li>
          <strong>J+0</strong> — Paiement deposit + kickoff WhatsApp.
        </li>
        <li>
          <strong>J+3</strong> — LLC formed (Wyoming SoS).
        </li>
        <li>
          <strong>J+5</strong> — Form 1583 notarisé, mailbox active.
        </li>
        <li>
          <strong>J+15</strong> — EIN reçu (median, P90 J+30).
        </li>
        <li>
          <strong>J+22</strong> — Mercury approuvé, compte fonctionnel
          (médian, P90 J+45).
        </li>
        <li>
          <strong>J+25</strong> — Stripe live, premier USD encaissable
          (médian, P90 J+50).
        </li>
        <li>
          <strong>J+25 à J+30</strong> — Solution Business handover
          complete avec brand, site, GTM.
        </li>
      </ul>

      <h2>Comparaison honnête vs concurrents</h2>
      <ul>
        <li>
          <strong>Stripe Atlas DE C-Corp</strong> : Atlas claim
          &laquo; first dollar in &lt; 24h &raquo;. Réel pour Atlas (parce que
          Atlas crée DC + EIN + Mercury + Stripe d&apos;un coup
          backend-side, ils ne sont pas dépendants du fax IRS). Mais
          tu paies 500 USD + tu dois gérer le C-Corp annual filings
          delaware franchise tax 300+ USD/an.
        </li>
        <li>
          <strong>doola Total Compliance</strong> : marketing claim
          &laquo; LLC in 24 hours &raquo;. Réel pour le filing Articles.
          Mais l&apos;EIN est toujours 4-6 semaines pour non-US
          person en backend (même fax au même IRS). Donc &laquo;
          jusqu&apos;à live &raquo; = J+30 à J+50, pareil que NOHO.
        </li>
        <li>
          <strong>Firstbase</strong> : ~même timeline que doola.
          Pas de différenciateur structural sur les délais.
        </li>
        <li>
          <strong>NOHO Solution Business</strong> : J+25 médian
          jusqu&apos;à Stripe live. Pas plus rapide que les
          concurrents <em>en raw timeline</em>. Différenciateur :
          inclut brand + site + GTM dans le forfait, et tu as un
          opérateur Tunisien-Américain qui répond WhatsApp en
          français/Arabizi.
        </li>
      </ul>

      <h2>Ce qui ralentit ton dossier — les 7 causes les plus fréquentes</h2>
      <ol>
        <li>
          <strong>Nom LLC en conflit</strong> — sauter la pre-check
          coûte 5-7 jours.
        </li>
        <li>
          <strong>Adresse passport CIN différente</strong> — Mercury
          renvoie pour clarification. 7-14 jours perdus.
        </li>
        <li>
          <strong>Business plan trop vague</strong> — Mercury demande
          précision sur revenue model, customer base, transaction
          volumes. 1 round-trip = 5-10 jours.
        </li>
        <li>
          <strong>Stripe risk manual review pour MENA</strong> — pas
          de cause spécifique, juste algo. Patience requise.
        </li>
        <li>
          <strong>Client met du temps à signer Form 1583</strong> —
          surtout si voyage, absence, attente CIN. Bloque mailbox
          activation.
        </li>
        <li>
          <strong>IRS lenteur fax SS-4</strong> — variable. Janvier
          (tax season) lent. Mai-juin plus rapide.
        </li>
        <li>
          <strong>Client demande des revisions logo/site
          au-delà du scope</strong> — décale la livraison finale
          mais pas le chemin critique business.
        </li>
      </ol>

      <h2>Cas accélérés — quand le timeline tombe à J+18</h2>
      <p>
        ~20% de nos clients ont un Solution Business shippé en J+18
        au lieu de J+25. Caractéristiques communes :
      </p>
      <ul>
        <li>
          Dossier ultra-clean au discovery call (CIN, business plan,
          nom LLC ready).
        </li>
        <li>
          ITIN déjà existant (évite le fax SS-4 lent).
        </li>
        <li>
          Pas de manual review Stripe (algo automatique pass).
        </li>
        <li>
          Disponibilité immédiate pour signer Form 1583 et brand
          reviews (réponse WhatsApp &lt; 4h).
        </li>
      </ul>

      <h2>Cas lents — quand le timeline va à J+60+</h2>
      <p>
        ~10% des clients (P90+). Causes types :
      </p>
      <ul>
        <li>
          Mercury refuse, on active Plan B (Relay ou Wise) =
          +14 à +30 jours.
        </li>
        <li>
          IRS fax SS-4 perdu, on doit ré-envoyer = +20 jours.
        </li>
        <li>
          Stripe manual review enchaîne 2 rounds de questions =
          +14 à +21 jours.
        </li>
        <li>
          Client en voyage 2 semaines, ne peut pas signer documents
          critiques.
        </li>
      </ul>

      <h2>Comment NOHO communique le délai dès le discovery call</h2>
      <p>
        On dit au client : <em>&laquo; Médiane J+25 à Stripe live.
        Worst case J+60. Si tu as une deadline business
        (ex : lancement produit, deadline client US), planifie le
        kickoff 8 semaines avant. &raquo;</em> On ne promet jamais
        moins. Si on shippe en J+18, c&apos;est un bonus client. Si on
        prend J+45, le client n&apos;est pas surpris.
      </p>

      <h2>Honnêteté sur le marketing</h2>
      <p>
        La plupart des LLC formation services marketent &laquo; en
        quelques jours &raquo;. C&apos;est vrai uniquement pour la
        partie Articles of Organization (qui est l&apos;étape la plus
        rapide). Le vrai goulot — EIN pour non-US + Mercury approval
        + Stripe activation — prend 3-6 semaines incompressibles, même
        avec un opérateur excellent. Tout marketing qui te promet
        Stripe live en 7 jours pour un fondateur Tunisien non-US
        person ment, ou utilise une voie alternative (Atlas
        prepay) qu&apos;il ne te facture pas explicitement.
      </p>

      <h2>CTA</h2>
      <p>
        Tu as une deadline business spécifique (lancement produit,
        deadline contrat client US, etc.) ?{" "}
        <Link href="/fr/appel">Réserve un appel</Link>. On checke la
        compatibilité timeline et on t&apos;explique exactement ce que
        ton dossier doit contenir pour rester dans la médiane J+25 vs
        le P90 J+50. Si la deadline n&apos;est pas réaliste, on te le
        dit avant que tu paies.
      </p>
    </>
  );
}
