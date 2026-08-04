{/* TODO: native derja review */}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adresse US 7a9i9ia — scan, colis, forwarding men 35 TND/chhar",
  description:
    "Adresse postale US 7a9i9ia fi Los Angeles. Scan mta3 courrier fi nefs enhar 3al dashboard. Colis (Amazon, UPS, FedEx, DHL). Ndezzouhom l Tounes. Forfait Free pay-as-you-go (wallet, colis bla USPS) wala 35, 75, 150 TND/chhar.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/virtual-mailbox",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/virtual-mailbox",
      "ar-TN": "https://nohomailboxtunis.com/ar/virtual-mailbox",
      "aeb-TN": "https://nohomailboxtunis.com/virtual-mailbox",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

const PLANS = [
  {
    name: "Free",
    price: "0",
    yearPrice: "",
    note: "Pay-as-you-go — colis bla abonnement",
    bullets: [
      ["Adresse bch testacbel el colis", "5062 Lankershim Blvd — testacbel les achats US mte3ek"],
      ["Transporteurs privés bark", "UPS, FedEx, DHL, Amazon. Bla USPS — les politiques applicables"],
      ["Tkhalles ki testa3mel", "Kol service yetna77a mel wallet 7asb el grille"],
      ["Wallet prépayé", "Recharge minimum 50 TND"],
      ["Dashboard en ligne", "Notification 3la kol colis yousel"],
    ],
  },
  {
    name: "Basic",
    price: "35",
    yearPrice: "350",
    note: "Usage personnel khfif wala ken t7eb t7ott adresse",
    bullets: [
      ["Adresse postale US 7a9i9ia", "5062 Lankershim Blvd, North Hollywood, CA"],
      ["5 scans inclus", "Fel chhar. Ekther men hakka : 3 TND lel scan"],
      ["Forwarding ki t7eb", "Frais postal el 7a9i9i + 4 TND handling"],
      ["Stockage colis 30 jours", "Courrier 90 jours inclus. Ekther : 1 TND 3al colis fel nhar"],
      ["Dashboard en ligne", "Tchouf el courrier elli wsellek el kol"],
      ["Notarisation Form 1583", "Incluse fel setup"],
    ],
  },
  {
    name: "Standard",
    price: "75",
    yearPrice: "750",
    note: "El plus populaire 3and les freelances w elli yechriw men Amazon",
    bullets: [
      ["Kol chay fel Basic", "+ extras louta"],
      ["20 scans inclus", "Fel chhar. Ekther : 2 TND lel scan"],
      ["Réception colis incluse", "5 colis fel chhar inclus"],
      ["Forwarding kol jom3a", "Auto-forward chaque semaine"],
      ["Consolidation mta3 colis", "Njam3ouhom bech tna99es el frais"],
      ["Stockage colis 60 jours", "Courrier 90 jours inclus. Mzyen lelli yechriw men Amazon"],
    ],
    primary: true,
  },
  {
    name: "Premium",
    price: "150",
    yearPrice: "1 500",
    note: "Lel e-commerce, business actif, volumes kbar",
    bullets: [
      ["Kol chay fel Standard", "+ extras louta"],
      ["Scans illimités", "Bla limite fel chhar"],
      ["Réception colis illimitée", "Bla limite"],
      ["Priorité scan", "A9al men 2h wa9t heures de bureau fi LA"],
      ["Repacking inclus", "N3awdou n3abbiw el colis el fragile wala el kbir"],
      ["Cloud storage lel scans", "Archive 3 snin accessible"],
      ["Tarifs préférentiels expédition", "Remise USPS / UPS / FedEx 3al volume"],
    ],
  },
];

const USES = [
  {
    t: "Techri men Amazon US, eBay, Shein, Nordstrom",
    b: "Les sites hedhom barcha marrat ma ywaslouch l Tounes. B adresse US, tcommandi elli t7eb.",
  },
  {
    t: "T7ell Stripe, Mercury, Wise Business",
    b: "El fournisseurs hedhom yelzemhom adresse US 7a9i9ia (mch boîte postale anonyme sm3etha khayba). NOHO y3addi el vérifications mte3hom.",
  },
  {
    t: "Testacbel courrier business US",
    b: "IRS, bnouk, fournisseurs SaaS, partenaires — courrier el LLC mte3ek el kol yousel lena, yetscanna w tjik notification fel wa9t.",
  },
  {
    t: "SEVIS w courrier el fac",
    b: "Lel étudiants : el I-20 mte3ek yousel lena, yetscanna fi nefs enhar. Wa9t 9raytek, courrier el campus yo93od mitgéré binet les semestres.",
  },
  {
    t: "Magazines w abonnements physiques",
    b: "The Economist, WSJ, Vogue, Wired — les abonnements US el kol youslou. Scan wala forwarding kima t7eb.",
  },
  {
    t: "Adresse stable mte3ek dima",
    b: "Lel SSN, ITIN, permis américain, el bnouk — adresse stable tesswa dheheb ki tbaddel dar barcha.",
  },
];

const PROCESS = [
  {
    n: 1,
    t: "Tcommandi en ligne",
    b: "Adresse de livraison : 5062 Lankershim Blvd, Suite [numéro el boîte mte3ek], North Hollywood, CA 91601.",
  },
  {
    n: 2,
    t: "El colis yousel lel storefront",
    b: "Nestacblou physiquement (UPS, FedEx, USPS, DHL, Amazon). Signature ma3neha maqboula. Notification fissa3 fel dashboard.",
  },
  {
    n: 3,
    t: "Tekhtar chnowa na3mlou",
    b: "Forward, na7allou w nscannou, nkhabbiw, nrecycliw, retour. 9arrer mel dashboard mte3ek.",
  },
  {
    n: 4,
    t: "Consolidation (optionnel)",
    b: "3andek barcha colis ? Njam3ouhom fi envoi we7ed bech tna99es el frais postaux internationaux.",
  },
  {
    n: 5,
    t: "Ndezzou l Tounes",
    b: "USPS Priority Mail International (~7-10 iyem), UPS Worldwide Expedited (~3-5 iyem), DHL Express (~2-3 iyem). Enti tekhtar el délai vs el prix.",
  },
];

export default function TounsiVirtualMailboxPage() {
  return (
    <>
      {/* PLANS */}
      <section className="px-5 sm:px-6 py-14 sm:py-20" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="font-black mb-2"
              style={{ fontFamily: "var(--font-pacifico), cursive", fontSize: "1.2rem", color: BLUE }}
            >
              Ekhtar el forfait mte3ek
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: "var(--font-baloo), sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: INK,
              }}
            >
              Domiciliation fi les USA
            </h2>
            <p className="mt-3 text-[15px]" style={{ color: "rgba(45,16,15,0.5)" }}>
              Tnajjem twa99ef wa9telli t7eb. Forfait annuel = zouz chhoura offerts. Free = tkhalles ki testa3mel.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="p-7 rounded-3xl flex flex-col"
                style={{
                  background: plan.primary ? INK : CREAM,
                  color: plan.primary ? CREAM : INK,
                  boxShadow: plan.primary
                    ? "0 12px 50px rgba(45,16,15,0.25)"
                    : "0 4px 18px rgba(45,16,15,0.08)",
                  transform: plan.primary ? "scale(1.03)" : "none",
                }}
              >
                {plan.primary && (
                  <p className="text-[11px] font-black mb-2" style={{ color: GOLD }}>
                    El plus populaire
                  </p>
                )}
                <h3 className="font-extrabold text-[22px] mb-3" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-extrabold" style={{ fontSize: "48px", lineHeight: 1 }}>
                    {plan.price}
                  </span>
                  <span className="text-[16px] font-black opacity-80">TND/chhar</span>
                </div>
                <p className="text-[11.5px] opacity-65 mb-2">
                  {plan.yearPrice
                    ? `wela ${plan.yearPrice} TND/an (zouz chhoura offerts)`
                    : "Pay-as-you-go · wallet prépayé"}
                </p>
                <p className="text-[12.5px] opacity-70 mb-5">{plan.note}</p>
                <ul className="space-y-3 text-[13px] mb-6 flex-1">
                  {plan.bullets.map((b, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5">
                      <span className="font-black leading-snug">{b[0]}</span>
                      <span className="opacity-70 text-[12px] leading-snug">{b[1]}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inscription"
                  className="block w-full text-center font-black px-5 py-3 rounded-xl text-[14px]"
                  style={{
                    background: plan.primary ? CREAM : INK,
                    color: plan.primary ? INK : CREAM,
                  }}
                >
                  Choisir {plan.name}
                </Link>
              </div>
            ))}
          </div>
          <p
            className="text-center text-[12px] mt-7 max-w-xl mx-auto"
            style={{ color: "rgba(45,16,15,0.55)" }}
          >
            Notarisation Form 1583 mta3 USPS incluse fel setup mta3 el forfaits
            payants lkol. El forfait Free bla USPS — donc bla Form 1583.
            Tnajjem twa99ef wa9telli t7eb.
          </p>
        </div>
      </section>

      {/* USES */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="font-extrabold mb-3"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              Chnowa ta3mel b adresse US 7a9i9ia
            </h2>
            <p className="text-[14.5px] max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
              Sett 7ajet elli les clients Twensa ya3mlouhom bel adresse.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USES.map((u) => (
              <div key={u.t} className="p-6 rounded-2xl" style={{ background: "#fff" }}>
                <h3 className="font-black text-[15.5px] mb-2" style={{ color: INK }}>{u.t}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{u.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE PROCESS */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#fff" }} id="packages">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Réception colis — kifech tekhdem
          </h2>
          <p className="text-center text-[14.5px] mb-10 max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
            Mel commande lel livraison fi Tounes. Kol étape wadh7a.
          </p>
          <div className="space-y-4">
            {PROCESS.map((s) => (
              <div key={s.n} className="flex gap-4 p-5 rounded-2xl" style={{ background: CREAM }}>
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[20px]"
                  style={{ background: INK, color: CREAM, fontFamily: "var(--font-baloo), sans-serif" }}
                >
                  {s.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-[16px] mb-1" style={{ color: INK }}>{s.t}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-16 sm:py-20 text-center" style={{ background: CREAM }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            7adher tebda ?
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(45,16,15,0.75)" }}>
            Ekhtar el forfait mte3ek w kallamna. El setup el kemel yekhou 48h
            ba3d ma yousel Form 1583 notarisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              Kallamna
            </Link>
          </div>
          <p className="text-[13px] mt-6" style={{ color: "rgba(45,16,15,0.6)" }}>
            <Link href="/tarifs" className="underline font-black">
              Voir la grille tarifaire complète
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
