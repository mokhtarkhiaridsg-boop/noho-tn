{/* TODO: native derja review */}
import type { Metadata } from "next";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tarifs b dinar — Adresse US, Business, Suivi mensuel, Étudiants",
  description:
    "Tarifs wadh7in b dinar tounsi. Adresse US 35-150 TND/chhar. Business 4 000 TND marra barka. Suivi mensuel 1 200 TND/chhar. Portail Étudiants 1 800 TND/an. Bla frais mkhabbiin, bla scarcity mafabrkia.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/tarifs",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/tarifs",
      "ar-TN": "https://nohomailboxtunis.com/ar/tarifs",
      "aeb-TN": "https://nohomailboxtunis.com/tarifs",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

const PLANS = [
  {
    label: "Business",
    badge: "Marra barka",
    price: "4 000",
    currency: "TND",
    note: "Paiement we7ed. Yetsallem fi 14 jours.",
    description:
      "Société américaine wala tounsia, EIN, brand, site web, réseaux sociaux. Kol chay yetsallem fi 14 jours.",
    bullets: [
      "Société américaine wala tounsia",
      "EIN",
      "Brand w identité visuelle",
      "Site web",
      "Réseaux sociaux",
      "Yetsallem fi 14 jours",
    ],
    cta: { label: "En savoir plus", href: "/business" },
    color: INK,
    textColor: CREAM,
    accent: GOLD,
  },
  {
    label: "Suivi mensuel",
    badge: "Chhari · bla engagement",
    price: "1 200",
    currency: "TND",
    suffix: "/chhar",
    note: "Chhar b chhar. Bla engagement annuel.",
    description:
      "Conformité US kol chhar, courrier prioritaire, contenu, revue trimestrielle mta3 el business mte3ek.",
    bullets: [
      "Conformité US mensuelle",
      "Courrier prioritaire",
      "Contenu lel réseaux",
      "Revue trimestrielle",
    ],
    cta: { label: "En savoir plus", href: "/suivi-mensuel" },
    color: CREAM,
    textColor: INK,
    accent: BLUE,
  },
  {
    label: "Portail Étudiants",
    badge: "Année académique",
    price: "1 800",
    currency: "TND",
    suffix: "/an",
    note: "Lel étudiants Twensa elli 7abbin y9raw fi jam3a américaine.",
    description:
      "Admissions fel jam3at US + visa F-1 + el wsoul ghadi. End-to-end men Tounes.",
    bullets: [
      "Admissions US",
      "Visa F-1",
      "Arrivée sur place",
      "End-to-end men Tounes",
    ],
    cta: { label: "En savoir plus", href: "/etudiants" },
    color: "#C8A35A",
    textColor: INK,
    accent: INK,
  },
];

const MAILBOX_TIER = [
  {
    name: "Free",
    price: "0",
    note: "Pay-as-you-go — colis bla abonnement",
    bullets: [
      "Adresse bch testacbel el colis (Lankershim Blvd)",
      "Transporteurs privés bark — bla USPS (les politiques applicables)",
      "Tkhalles ki testa3mel — kol service yetna77a mel wallet 7asb el grille",
      "Wallet prépayé — recharge minimum 50 TND",
      "Dashboard en ligne, notification 3la kol colis",
    ],
  },
  { name: "Basic", price: "35", note: "Usage personnel khfif" },
  { name: "Standard", price: "75", note: "El plus populaire" },
  { name: "Premium", price: "150", note: "E-commerce + business actif" },
];

const ONE_OFFS = [
  { label: "Scan supplémentaire fou9 el forfait (couleur, recto-verso, A4)", price: "2 TND/page" },
  { label: "Stockage colis fou9 el mudda incluse (30 / 60 / 90 j 7asb el forfait)", price: "6 TND/semaine" },
  { label: "Réexpédition consolidée l Tounes (kol jom3a, DHL Express)", price: "140-280 TND + frais postaux" },
  { label: "Réexpédition urgente l Tounes (24-48h, DHL Worldwide Priority)", price: "200-470 TND + frais postaux" },
  { label: "Same-day NoHo (livraison a9al men 3h fi North Hollywood)", price: "15 TND" },
  { label: "Same-day LA County (0-6h, ay zone fi LA County)", price: "28-90 TND" },
  { label: "Repacking colis (n3awdou el emballage 9bal el expédition)", price: "8 TND/colis" },
  { label: "Retour lel expéditeur (US) ki trefes el livraison", price: "Frais postaux el 7a9i9iyin bark" },
  { label: "Destruction sécurisée (shredding crosscut + certificat)", price: "B latech" },
  { label: "Notariat supplémentaire (mch Form 1583, document ponctuel via notaire CA)", price: "50 TND/document" },
  { label: "Apostille TN (via partenaire KHIARI Tunis, MAE + traduction jurée)", price: "Facturé par KHIARI (~250 TND)" },
  { label: "Réactivation ba3d suspension (compte mgelé 3ala impayé)", price: "25 TND" },
];

export default function TounsiTarifsPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[11px] font-black px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            Tarifs wadh7in · b dinar
          </span>
          <h1
            className="font-extrabold leading-[1.15] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Tarifs b dinar,{" "}
            <span style={{ fontFamily: "var(--font-pacifico), cursive", color: BLUE, fontWeight: 400 }}>
              bla surprise
            </span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Bla frais mkhabbiin. Bla scarcity mafabriké. Bla remise fausse.
            Tkhalles elli fel grille — w chay ekher le. El prix b dinar 5ater
            houma flous el clients mte3na Twensa.
          </p>
        </div>
      </section>

      {/* MAIN PLANS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANS.map((p) => (
              <div
                key={p.label}
                className="p-7 rounded-3xl"
                style={{
                  background: p.color,
                  color: p.textColor,
                  boxShadow: "0 8px 30px rgba(45,16,15,0.10)",
                }}
              >
                <p
                  className="text-[11px] font-black mb-3"
                  style={{ color: p.accent }}
                >
                  {p.badge}
                </p>
                <h3 className="font-black text-[18px] mb-4" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
                  {p.label}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-extrabold" style={{ fontSize: "44px", lineHeight: 1 }}>
                    {p.price}
                  </span>
                  <span className="text-[16px] font-black opacity-80">
                    {p.currency}
                    {p.suffix ?? ""}
                  </span>
                </div>
                <p className="text-[12.5px] opacity-70 mb-3">{p.note}</p>
                <p className="text-[14px] leading-relaxed mb-5 opacity-90">{p.description}</p>
                <ul className="space-y-1.5 text-[13.5px] mb-6">
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 opacity-60">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.cta.href}
                  className="block w-full text-center font-black px-5 py-3 rounded-xl text-[14px]"
                  style={{ background: p.textColor, color: p.color }}
                >
                  {p.cta.label}
                </Link>
              </div>
            ))}
          </div>
          <p
            className="text-center text-[13px] mt-7 max-w-xl mx-auto"
            style={{ color: "rgba(45,16,15,0.6)" }}
          >
            Notariat (Form 1583) : inclus m3a el adresse US. Notariat ponctuel
            mawjoud zeda —{" "}
            <Link href="/notary" className="underline font-black">
              chouf el notariat
            </Link>
            .
          </p>
        </div>
      </section>

      {/* MAILBOX TIER PRICING */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="font-extrabold mb-3"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
            >
              Adresse US 7a9i9ia — 3 forfaits
            </h2>
            <p className="text-[14px]" style={{ color: "rgba(45,16,15,0.65)" }}>
              El forfaits el chhariya lel adresse US wa7adha, bla pack business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MAILBOX_TIER.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl text-center" style={{ background: "#fff" }}>
                <h3 className="font-black text-[18px] mb-2" style={{ color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
                  {m.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="font-extrabold" style={{ fontSize: "36px", lineHeight: 1, color: INK }}>{m.price}</span>
                  <span className="text-[14px] font-black opacity-70" style={{ color: INK }}>TND/chhar</span>
                </div>
                <p className="text-[12.5px]" style={{ color: "rgba(45,16,15,0.65)" }}>{m.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] mt-6" style={{ color: "rgba(45,16,15,0.65)" }}>
            Forfait annuel = zouz chhoura offerts. Tnajjem twa99ef wa9telli t7eb.{" "}
            <Link href="/virtual-mailbox" className="underline font-black">
              Voir les détails
            </Link>
          </p>
        </div>
      </section>

      {/* ONE-OFFS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-extrabold mb-3 text-center"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Grille tarifaire — à la carte
          </h2>
          <p className="text-center text-[14px] mb-8" style={{ color: "rgba(45,16,15,0.65)" }}>
            Tkhalles ken elli testa3melou. Bla surprise, bla markup.
          </p>
          <div className="space-y-2.5">
            {ONE_OFFS.map((o) => (
              <div
                key={o.label}
                className="p-4 rounded-xl flex justify-between gap-4 items-center"
                style={{ background: CREAM }}
              >
                <span className="text-[14px] font-semibold flex-1" style={{ color: INK }}>{o.label}</span>
                <span className="text-[14px] font-black whitespace-nowrap text-right" style={{ color: BLUE }}>{o.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: CREAM }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Ama forfait ynasbek ?
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            Consultation 30 d9i9a b latech. Nchoufou el dossier mte3ek m3ak —
            mch robot, mch formulaire.
          </p>
          <a
            href={waLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
