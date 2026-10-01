{/* TODO: native derja review */}
import type { Metadata } from "next";
import Link from "next/link";
import { localeAlternates } from "@/lib/seo";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import PricingPending from "@/components/PricingPending";

const FROM_TUNISIA = [
  { n: 1, t: "Tsajjel en ligne", b: "Esmek, email w téléphone. Tjik email bech tedkhol l espace mte3ek, w l'équipe tkallmek bech tekhtar el forfait." },
  { n: 2, t: "L'éligibilité w Form 1583", b: "USPS tfardh el formulaire PS 1583 w zouz pièces d'identité. Tawa, el signature tsir 9odem l'équipe mte3na fel comptoir fi North Hollywood ; signature à distance mazelna ma na3mlouhech. Mel Tounes, l'équipe tconfirmi l'ewwel ken el ouverture possible, 9bal ay paiement." },
  { n: 3, t: "Nestacblou el courrier w el colis", b: "Jwabet w colis USPS, UPS, FedEx, DHL w Amazon (el forfait Free ma y9abbelch USPS). Kol 7aja twasel tetla3lek fel espace mte3ek." },
  { n: 4, t: "T9arrer mel Tounes", b: "Scan el courrier, réexpédition l Tounes b tarif el transporteur, tjami3 el colis 7asb el forfait, stockage wala destruction." },
];

const BILLED_SEPARATELY = [
  "El réexpédition : tarif el transporteur, + frais de service.",
  "Scans w stockage el colis elli yfoutou 3la chnowa inclus fel forfait.",
  "Droits w taxes mta3 el douane tounsiya, tkhallashom ki youslek el colis.",
];

export const metadata: Metadata = {
  title: "Adresse postale fel America mel Tounes — courrier w colis",
  description:
    "Adresse postale 7a9i9ia fel America (North Hollywood, Californie), tgérérha mel Tounes : scan courrier, colis Amazon, UPS, FedEx w DHL, réexpédition l Tounes. El tarif nconfirmiweh m3ak 9bal ay paiement.",
  alternates: localeAlternates("/virtual-mailbox", "tn", { ar: true }),
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";


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
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>Tarif mconfirmé 9bal ay paiement</li>
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
              Ab3ath demande →
            </Link>
            <WhatsAppCTA intent="adresse">3andek sou2el ? WhatsApp</WhatsAppCTA>
          </div>
        </div>
      </section>

      <PricingPending locale="tn" id="forfaits" />

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
            <p className="text-[13.5px] mb-3" style={{ color: "rgba(45,16,15,0.7)" }}>El montants nconfirmiwhom lek bel ktiba 9bal ay paiement.</p>
            <ul className="space-y-2 text-[14px] leading-relaxed list-disc pl-5" style={{ color: "rgba(45,16,15,0.82)" }}>
              {BILLED_SEPARATELY.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="text-[13px] mt-4" style={{ color: "rgba(45,16,15,0.65)" }}>
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
            Ab3ath demande en ligne bla paiement : l'équipe tconfirmi l'éligibilité,
            el forfait w el prix 9bal ay facturation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              data-track="signup_click"
              data-track-from="tn_virtual_mailbox_footer"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-transform hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              Ab3ath demande →
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
