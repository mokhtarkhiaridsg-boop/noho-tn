import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plafond carte technologique — l'alternative LLC américaine",
  description:
    "La carte technologique internationale plafonne les paiements en devises à 1 000 TND/an pour les particuliers tunisiens. Comment une LLC américaine + Mercury débloque durablement la conversation.",
  alternates: { canonical: "https://noho.tn/guides/plafond-carte-technologique" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";

export default function CartePage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <nav className="text-[12px] mb-5 opacity-60" style={{ color: INK }}>
            <Link href="/" className="hover:underline">Accueil</Link> · <span>Guides</span> · <span>Plafond carte technologique</span>
          </nav>
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5" style={{ background: INK, color: CREAM }}>
            Guide pratique · Banque & devises
          </span>
          <h1 className="font-extrabold leading-[1.1] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Plafond carte technologique — <span style={{ color: BLUE }}>l&apos;alternative LLC</span>
          </h1>
          <p className="text-[16px] leading-relaxed" style={{ color: "rgba(45,16,15,0.75)" }}>
            La carte technologique internationale plafonne tes paiements en
            devises à 1 000 TND par an si tu es résident tunisien personne
            physique. Pour un freelance qui paie SaaS, hébergement, outils, le
            plafond se vide en quelques semaines. Voici pourquoi la LLC
            américaine change la conversation.
          </p>
        </div>
      </section>

      <article className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#fff", color: INK }}>
        <div className="max-w-3xl mx-auto space-y-8 text-[15.5px] leading-[1.7]">
          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              1. Le chiffre qui bloque tout
            </h2>
            <p>
              <strong>1 000 TND par an.</strong> C&apos;est ce que tu peux
              payer en devises hors de Tunisie depuis ton compte personnel avec
              ta carte technologique internationale.
            </p>
            <p>
              Au taux du jour, ça fait environ 320 USD. Tout compris : SaaS
              (Adobe, Notion, ChatGPT, GitHub), hébergement (Vercel, AWS),
              outils freelance (Figma), commissions Stripe/Wise, achats Amazon.
              Le plafond se vide souvent en 2 à 4 semaines pour un freelance
              actif. Une fois épuisé, refus jusqu&apos;au 1<sup>er</sup>{" "}
              janvier suivant.
            </p>
          </div>

          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              2. Trois sorties possibles
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl" style={{ background: CREAM }}>
                <h3 className="font-black text-[17px] mb-2">Option 1 — Dérogation BCT</h3>
                <p className="text-[14px] leading-relaxed">
                  Dossier auprès de la BCT pour autorisation spécifique. Réaliste
                  pour projets d&apos;exportation structurés, beaucoup moins
                  pour paiements SaaS récurrents. Délai long, issue incertaine.
                </p>
              </div>
              <div className="p-5 rounded-xl" style={{ background: CREAM }}>
                <h3 className="font-black text-[17px] mb-2">Option 2 — Carte pro (SARL tunisienne)</h3>
                <p className="text-[14px] leading-relaxed">
                  Enregistrer une SARL/SUARL pour obtenir une carte pro avec
                  plafond plus élevé. Le plafond reste fini, et tu alourdis ta
                  structure tunisienne (capital, charges sociales, TVA). Utile
                  si marché principalement tunisien.
                </p>
              </div>
              <div className="p-5 rounded-xl" style={{ background: INK, color: CREAM, borderLeft: `4px solid ${BLUE}` }}>
                <h3 className="font-black text-[17px] mb-2">Option 3 — LLC américaine</h3>
                <p className="text-[14px] leading-relaxed opacity-90">
                  Le compte bancaire de la LLC est aux États-Unis (Mercury,
                  Relay) au nom de l&apos;entité — pas au nom de la personne
                  physique tunisienne. Les paiements ne sont pas comptabilisés
                  contre ton plafond carte technologique. La voie la plus
                  cohérente quand l&apos;activité est principalement internationale.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              3. Le mécanisme concret
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Entrée.</strong> Tes clients US/EU paient la LLC en USD/EUR sur Mercury. Aucun transit par ton compte tunisien.</li>
              <li><strong>Sortie internationale.</strong> Tes outils SaaS payés depuis la carte Mercury. Aucun plafond BCT applicable.</li>
              <li><strong>Repatriement.</strong> Quand tu fais rentrer une partie en Tunisie, ce virement-là devient déclarable — pas l&apos;ensemble.</li>
              <li><strong>Fiscal.</strong> La LLC dépose ses propres déclarations US. Le bénéficiaire effectif reste soumis à ses obligations en Tunisie.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-extrabold text-[24px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              4. Quand la LLC ne fait pas sens
            </h2>
            <p>Honest Self-Disclosure :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Si ton activité internationale fait moins de 5 000 USD/an, le coût de structuration (Solution Business 4 000 TND + maintenance annuelle) dépasse le bénéfice.</li>
              <li>Si ton marché est principalement tunisien, une carte technologique pro reste plus simple.</li>
              <li>Si tu n&apos;as pas la capacité de gérer Form 5472 annuel : ne crée pas la LLC.</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl mt-10 text-center" style={{ background: INK, color: CREAM }}>
            <h3 className="font-extrabold text-[22px] mb-3" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              Trente minutes pour décider
            </h3>
            <p className="text-[14px] opacity-85 mb-6 max-w-md mx-auto">
              Cinq questions, gratuit, sans engagement.
            </p>
            <Link href="/appel" className="inline-block font-black px-8 py-4 rounded-xl text-[15px] transition-all hover:scale-[1.02]" style={{ background: CREAM, color: INK }}>
              Réserver l&apos;appel →
            </Link>
          </div>

          <div className="text-[11px] leading-relaxed mt-8 pt-6 border-t" style={{ color: "rgba(45,16,15,0.55)", borderColor: "#e5dccb" }}>
            <p>
              <strong>Information générale, pas un conseil fiscal.</strong>{" "}
              Les seuils carte technologique peuvent évoluer selon les
              circulaires BCT. Consulte un fiscaliste agréé.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
