import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Form 1583 USPS depuis la Tunisie — qui peut vérifier ta signature",
  description:
    "Le Form 1583 autorise NOHO Mailbox à recevoir ton courrier en ton nom. Ce que l'USPS permet, ce que NOHO Mailbox propose aujourd'hui depuis la Tunisie, et pourquoi confirmer ton éligibilité avant de payer.",
  alternates: { canonical: "https://nohomailboxtunis.com/fr/outils/lookups/form-1583" },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

export default function Form1583LookupPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-8" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[12px] mb-3" style={{ color: "rgba(45,16,15,0.55)" }}>
            <Link href="/fr" className="hover:underline">Accueil</Link>
            <span className="mx-1.5">·</span>
            <Link href="/fr/outils" className="hover:underline">Outils</Link>
            <span className="mx-1.5">·</span>
            <span>Lookup Form 1583</span>
          </div>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Form 1583 USPS —{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              vérification
            </span>{" "}
            et signature
          </h1>
          <p className="text-[15px] leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Le Form 1583 est le document USPS qui autorise NOHO à
            recevoir le courrier en ton nom à 5062 Lankershim. Voici tout
            ce qu&apos;il faut savoir.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl" style={{ background: CREAM, border: "1px solid rgba(45,16,15,0.08)" }}>
            <h2 className="font-extrabold text-[20px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Ce qu&apos;est exactement le Form 1583
            </h2>
            <ul className="space-y-1.5 text-[13.5px]" style={{ color: INK }}>
              <li>• <strong>Formulaire officiel USPS</strong> (PS Form 1583), encadré par le Domestic Mail Manual, section 508.1.8</li>
              <li>• Autorise un CMRA (Commercial Mail Receiving Agency) à recevoir le courrier en ton nom</li>
              <li>• Sans Form 1583 signé et vérifié selon la règle USPS, le CMRA ne peut pas recevoir ton courrier</li>
              <li>• Obligation à vie de la LLC tant que l&apos;adresse mailbox est active</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#FFF4E5", borderLeft: `4px solid ${RED}` }}>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: RED }}>
              Depuis la Tunisie : confirme ton éligibilité avant de payer
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: INK }}>
              Aujourd&apos;hui, NOHO Mailbox fait signer le Form 1583 <strong>devant un employé, à notre
              comptoir de North Hollywood</strong>. Nous ne proposons pas encore de signature à distance.
              Si tu es en Tunisie, écris-nous avant tout paiement : l&apos;équipe te dit si ton ouverture
              est possible et comment.
            </p>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)" }}>
            <h2 className="font-extrabold text-[20px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Ce que les règles USPS permettent
            </h2>
            <p className="text-[13.5px] leading-relaxed mb-3" style={{ color: INK }}>
              Le Domestic Mail Manual de l&apos;USPS, section{" "}
              <a href="https://pe.usps.com/text/dmm300/508.htm" className="underline font-bold" rel="noopener noreferrer" target="_blank">508.1.8.3</a>,
              dit que tu signes ou confirmes ta signature en présence, physique ou par vidéo en temps réel,
              du propriétaire, du gérant ou d&apos;un employé autorisé du CMRA, ou que tu la reconnais devant
              un notaire commissionné dans un État, territoire ou possession des États-Unis, ou dans le
              District of Columbia.
            </p>
            <ul className="space-y-1.5 text-[13.5px]" style={{ color: INK }}>
              <li>• <strong>Proposé par NOHO Mailbox aujourd&apos;hui :</strong> signature devant un employé, en personne, à notre comptoir.</li>
              <li>• <strong>Permis par l&apos;USPS, pas encore proposé par NOHO Mailbox :</strong> signature devant un employé par vidéo en temps réel, ou devant un notaire commissionné aux États-Unis.</li>
              <li>• <strong>Non valable :</strong> un notaire tunisien, ou une signature électronique sans cette vérification.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-extrabold text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Les 2 pièces d&apos;identité
            </h2>
            <ol className="space-y-1.5 text-[13.5px]" style={{ color: INK }}>
              <li><strong>1.</strong> Une pièce avec photo. L&apos;USPS accepte un passeport étranger (<a href="https://pe.usps.com/text/dmm300/608.htm" className="underline" rel="noopener noreferrer" target="_blank">DMM 608.10.3</a>).</li>
              <li><strong>2.</strong> Une deuxième pièce. L&apos;USPS cite par exemple un bail, un prêt immobilier, une carte d&apos;électeur ou une police d&apos;assurance (DMM 608.10.4). L&apos;équipe te confirme laquelle est acceptée avant la signature. Une facture n&apos;est pas une pièce valable.</li>
              <li><strong>3.</strong> Les deux pièces portent <strong>exactement le même nom</strong> que le formulaire.</li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(45,16,15,0.08)" }}>
            <h2 className="font-extrabold text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Que vérifier avant de signer
            </h2>
            <ul className="space-y-1 text-[13px]" style={{ color: INK }}>
              <li>• Box 7 : adresse complète NOHO Mailbox &quot;5062 Lankershim Blvd, Suite {`{ta suite}`}, North Hollywood, CA 91601&quot;</li>
              <li>• Box 12 : ton nom légal exact (matching passeport)</li>
              <li>• Box 14 : nom légal de ta LLC (matching Articles of Organization)</li>
              <li>• Si l&apos;orthographe diffère entre le Form 1583 et le passeport, corrige avant de signer.</li>
              <li>• Date de signature et nom de l&apos;employé qui a vérifié ta signature figurent sur le formulaire.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: CREAM }}>
            <h2 className="font-extrabold text-[18px] mb-3" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Renouvellement et changement
            </h2>
            <ul className="space-y-1 text-[13.5px]" style={{ color: INK }}>
              <li>• Form 1583 reste valable tant que ton mailbox NOHO est actif.</li>
              <li>• Si tu changes de nom (mariage, etc.), tu signes un nouveau Form 1583.</li>
              <li>• Si tu changes l&apos;adresse de ta LLC (move out of CMRA), tu dois notifier USPS via Change of Address.</li>
              <li>• Si tu fermes ton mailbox NOHO, le Form 1583 expire automatiquement.</li>
            </ul>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/fr/notary"
              className="inline-block font-black px-7 py-3.5 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM }}
            >
              Voir le service notary →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
