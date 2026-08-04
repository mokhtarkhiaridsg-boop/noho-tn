import Link from "next/link";

export function mercuryBankDepuisTunis() {
  return (
    <>
      <p>
        Mercury est la banque préférée des fondateurs non-résidents
        opérant une LLC américaine. Elle ouvre des comptes USD pour des
        LLC contrôlées depuis l&apos;étranger — mais pas toujours, et pas
        toutes. Pour un fondateur tunisien, le taux de refus tourne
        autour de 20-35 % selon le dossier. Voici les 9 éléments qui
        font passer ton dossier en première lecture.
      </p>

      <h2>1. LLC bien constituée (pas une « shell » douteuse)</h2>
      <p>
        Mercury vérifie ta LLC sur le Secretary of State du Wyoming /
        Delaware / Nouveau-Mexique. Une LLC créée hier avec un nom
        bizarre style « XYZ Holdings 2024 LLC » lève les sourcils. Un
        nom qui décrit l&apos;activité réelle (« Karim Consulting LLC »,
        « Sahara Coffee Co LLC ») passe mieux.
      </p>

      <h2>2. EIN officiel de l&apos;IRS</h2>
      <p>
        Mercury exige la CP-575 letter ou la 147C confirmation letter de
        l&apos;IRS. Pas de capture d&apos;écran, pas de PDF retapé — le
        document officiel scanné. C&apos;est non-négociable.
      </p>

      <h2>3. Operating Agreement signé</h2>
      <p>
        Document qui prouve qui contrôle la LLC. Mercury veut savoir que
        tu es bien le sole member (ou la répartition exacte si plusieurs
        members). 5-10 pages, signé et daté. Sans Operating Agreement,
        Mercury renvoie le dossier.
      </p>

      <h2>4. Passeport tunisien scanné HD</h2>
      <p>
        Page principale, lisible. Pas de photo prise sur smartphone à
        l&apos;arrache. Un scan plat de 300 dpi. Si tu as déjà voyagé
        aux US, ajoute aussi la page avec ton dernier tampon
        d&apos;entrée — ça aide.
      </p>

      <h2>5. Preuve d&apos;adresse Tunis récente (≤ 90 jours)</h2>
      <p>
        Facture STEG / SONEDE / Tunisie Telecom / Topnet à ton nom, ou
        relevé bancaire BIAT / Attijari / STB. L&apos;adresse doit
        correspondre exactement à celle que tu déclares à Mercury.
        Différence d&apos;orthographe (rue/avenue, Manar vs Manar 1) =
        demande de clarification.
      </p>

      <h2>6. Site web actif sur ton domaine</h2>
      <p>
        Mercury cherche ton entreprise sur Google avant d&apos;approuver.
        Un domaine acquis ce mois-ci avec une landing 1-pager (logo,
        description, contact) est suffisant. Une LLC sans présence web =
        red flag.
      </p>

      <h2>7. Email professionnel sur ton domaine</h2>
      <p>
        Email Mercury depuis hello@toncompany.com plutôt que
        prenom.nom@gmail.com. Coûte 6-10 USD/mois (Google Workspace ou
        Microsoft 365) et change le signal.
      </p>

      <h2>8. Description d&apos;activité claire en 2 phrases</h2>
      <p>
        Mercury demande « What does your business do? ». Réponse vague
        (« consulting ») = friction. Réponse précise (« Software
        development services for US-based SaaS startups, billed
        hourly. ») = approuvée. Évite les mots qui activent
        l&apos;underwriting renforcé : crypto, gambling, adult, cannabis,
        firearms, marketplaces, MLM.
      </p>

      <h2>9. Plan B documenté avant même de soumettre Mercury</h2>
      <p>
        Si Mercury refuse, tu veux savoir tout de suite quelle est la
        suite — sans paniquer. Le fallback waterfall standard :
      </p>
      <ol>
        <li>
          <strong>Relay</strong> — banque US qui accepte un peu plus
          large que Mercury. Délai d&apos;ouverture : 1-3 jours.
        </li>
        <li>
          <strong>Brex</strong> — pour startups venture-backed (rare
          pour TN, mais possible si tu as un client US qui valide).
        </li>
        <li>
          <strong>Wise Business</strong> — pas une vraie banque US mais
          permet de recevoir USD via routing/account number, et de
          convertir à des taux quasi-spot.
        </li>
        <li>
          <strong>Payoneer</strong> — dernier recours pour collecter
          des USD si tout le reste a refusé. Moins propre pour Stripe
          mais ça permet de continuer à facturer.
        </li>
      </ol>

      <h2>Ce qui fait refuser sans appel</h2>
      <ul>
        <li>VPN qui te fait apparaître en Iran, Syrie, Cuba, Corée du Nord — Mercury voit l&apos;IP de soumission. Soumets en clair depuis Tunis.</li>
        <li>Identité incomplète (passeport flou, adresse non-vérifiable).</li>
        <li>Activité sensible (les 7 catégories listées plus haut).</li>
        <li>Réponses contradictoires entre Articles, Operating Agreement et la soumission Mercury (orthographe nom, adresse, date).</li>
      </ul>

      <h2>Combien de temps ça prend</h2>
      <p>
        Soumission propre = décision Mercury en 24h à 5 jours. Si
        Mercury demande des documents complémentaires (~15 % des
        dossiers), ajoute 3-7 jours. Si refusé puis Plan B Relay, compte
        7-10 jours supplémentaires.
      </p>

      <h2>Le seul vrai différenciateur</h2>
      <p>
        Tu peux soumettre Mercury seul, avec doola, ou avec n&apos;importe
        quel formation service. Ce qui change : la qualité du dossier
        soumis. NOHO prépare les 9 éléments avant de cliquer sur
        Submit. Si Mercury refuse, on bascule sur Relay / Brex / Wise
        sans que tu refasses tout le travail.{" "}
        <Link href="/fr/business" className="font-bold underline" style={{ color: "#337485" }}>
          Voir comment ça s&apos;intègre dans la Solution Business
        </Link>.
      </p>
    </>
  );
}
