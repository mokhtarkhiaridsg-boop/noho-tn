{/* TODO: native derja review */}
import type { Metadata } from "next";
import Link from "next/link";
import { localeAlternates } from "@/lib/seo";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const FROM_TUNISIA = [
  { n: 1, t: "Tsajjel en ligne", b: "Esmek, email w téléphone. Tjik email bech tedkhol l espace mte3ek, w l'équipe tkallmek bech tekhtar el forfait." },
  { n: 2, t: "El identité w Form 1583", b: "USPS tfardh el formulaire PS 1583 w zouz pièces d'identité, wa7da fiha taswira (el passeport maqboul). El signature lazemha tsir 9odem employé mta3 NOHO Mailbox wala 9odem notaire commissionné fel USA. Notaire tounsi mouch maqboul 3and USPS." },
  { n: 3, t: "Nestacblou el courrier w el colis", b: "Jwabet w colis USPS, UPS, FedEx, DHL w Amazon (el forfait Free ma y9abbelch USPS). Kol 7aja twasel tetla3lek fel espace mte3ek." },
  { n: 4, t: "T9arrer mel Tounes", b: "Scan el courrier, réexpédition l Tounes b tarif el transporteur, tjami3 el colis 7asb el forfait, stockage wala destruction." },
];

const BILLED_SEPARATELY = [
  "El réexpédition 3al demande : tarif el transporteur + 4 TND handling 3al envoi (formules hebdo w urgente : chouf page tarifs).",
  "Scans zeydin 3al quota mta3 forfaitek : 2 TND lel page.",
  "Stockage el colis ba3d el modda el incluse : 6 TND lel colis fel jem3a.",
  "Droits w taxes mta3 el douane tounsiya, tkhallashom ki youslek el colis.",
  "Frais el notaire, ken tsigni Form 1583 9odem notaire commissionné fel USA.",
];

export const metadata: Metadata = {
  title: "Adresse postale fel America mel Tounes — men 35 TND/chhar",
  description:
    "Adresse postale 7a9i9ia fel America (North Hollywood, Californie), tgérérha mel Tounes : scan courrier, colis Amazon, UPS, FedEx w DHL, réexpédition l Tounes. Forfaits 35, 75 wala 150 TND/chhar, wala Free ki testa3mel.",
  alternates: localeAlternates("/virtual-mailbox", "tn", { ar: true }),
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
      ["5 scans inclus", "Fel chhar. Ekther men hakka : 2 TND lel page"],
      ["Forwarding ki t7eb", "Frais postal el 7a9i9i + 4 TND handling"],
      ["Stockage colis 30 jours", "Courrier 90 jours inclus. Ekther : 6 TND 3al colis fel jem3a"],
      ["Dashboard en ligne", "Tchouf el courrier elli wsellek el kol"],
      ["Form 1583 (USPS)", "Nhadhrouh m3ak fel setup"],
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
    t: "Testacbel courrier el LLC w el comptes mte3ek",
    b: "Adresse de rue 7a9i9ia lel correspondance mta3 charikatek el américaine. Kol bank wala prestataire paiement 3andou règles mte3ou 3al adresse : ma najmouch ngarantiw elli y9abbelha.",
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
    b: "Adresse ma titbaddelch ki tbaddel dar : mli7a lel IRS, courrier el ITIN wala abonnements. Ma t3awadhch adresse de résidence ki organisme yotlob wa7da.",
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
    b: "USPS Priority Mail International, UPS, FedEx wala DHL Express : enti tekhtar bin el prix w el sor3a. Délais indicatifs mta3 el transporteurs, bla dédouanement w bla garantie.",
  },
];

export default function TounsiVirtualMailboxPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-6" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Adresse postale fel USA
          </p>
          <h1
            className="font-extrabold tracking-tight mb-5"
            style={{ fontFamily: "var(--font-baloo), sans-serif", fontSize: "clamp(2rem, 5vw, 3.4rem)", color: INK, lineHeight: 1.1 }}
          >
            Adresse postale 7a9i9ia fel America, tgérérha mel Tounes
          </h1>
          <p className="text-[16px] leading-relaxed mb-6" style={{ color: "rgba(45,16,15,0.78)" }}>
            Adresse de rue 7a9i9ia : 5062 Lankershim Blvd, North Hollywood (Californie), m3a
            numéro el boîte mte3ek. Nestacblou el courrier w el colis mte3ek fel local mte3na,
            tchouf kol 7aja twasel fel espace mte3ek en ligne, w enti t9arrer : scan,
            réexpédition l Tounes, stockage wala destruction.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 mb-7 text-[12.5px] font-bold" style={{ color: INK }}>
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>Tarifs b dinar tounsi (TND)</li>
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>Vérification d&apos;identité — USPS tfardhha</li>
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>Réexpédition b tarif el transporteur</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              data-track="signup_click"
              data-track-from="tn_virtual_mailbox_hero"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px]"
              style={{ background: INK, color: CREAM }}
            >
              N7ell el boîte mte3i →
            </Link>
            <WhatsAppCTA intent="adresse">3andek sou2el ? WhatsApp</WhatsAppCTA>
          </div>
        </div>
      </section>

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
                  data-track="plan_select"
                  data-track-plan={plan.name}
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
            Form 1583 mta3 USPS nhadhrouh m3ak fel setup mta3 el forfaits
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
      {/* FROM TUNISIA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Kifech temchi mel Tounes
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {FROM_TUNISIA.map((s) => (
              <li key={s.n} className="flex gap-4 p-5 rounded-2xl" style={{ background: CREAM }}>
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-extrabold"
                  style={{ background: INK, color: CREAM, fontFamily: "var(--font-baloo), sans-serif" }}
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="font-black text-[15.5px] mb-1" style={{ color: INK }}>{s.t}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="p-6 rounded-3xl" style={{ background: "#EBF2FA" }}>
            <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>Chnowa yetkhalles wa7dou</h3>
            <ul className="space-y-2 text-[14px] leading-relaxed list-disc pl-5" style={{ color: "rgba(45,16,15,0.82)" }}>
              {BILLED_SEPARATELY.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="text-[13px] mt-4" style={{ color: "rgba(45,16,15,0.65)" }}>
              El grille el kemla fi <Link href="/tarifs" className="underline font-bold">page tarifs</Link>.
              Lel colis elli techrihom en ligne, chouf zeda{" "}
              <Link href="/fr/reexpedition-colis-usa-tunisie" className="underline font-bold">réexpédition colis USA → Tounes</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-16 sm:py-20 text-center" style={{ background: CREAM }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            7adher tebda ?
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(45,16,15,0.75)" }}>
            Tsajjel en ligne, wala kallamna bech tekhtar el forfait w nhadhrou
            Form 1583 m3a b3adhna.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              data-track="signup_click"
              data-track-from="tn_virtual_mailbox_footer"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-transform hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              N7ell el boîte mte3i →
            </Link>
            <Link
              href="/contact"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-transform hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
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
