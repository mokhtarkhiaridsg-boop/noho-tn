import type { Metadata } from "next";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";

/*
 * Tounsi (derja, Latin script) version of /appel.
 * Mirrors the condensed /ar/appel structure, LTR, derja copy.
 * All claims from the FR page: 30 min visio, gratuit, sans engagement,
 * Business 4 000 TND, Suivi mensuel 1 200 TND/mois, 3-7 day slot delay.
 * Legal disclaimer stays in French on purpose (compliance text).
 */

export const metadata: Metadata = {
  title: "Réserver un appel — 30 d9i9a m3a l'équipe NOHO",
  description:
    "30 d9i9a visio m3a l'équipe NOHO côté diaspora tounsia. Cadrage honnête l wadh3ek — el Business (4 000 TND), Suivi mensuel (1 200 TND/chhar), wala 7atta wa7ed fihom. Gratuit, bla engagement.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/appel",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/appel",
      "ar-TN": "https://nohomailboxtunis.com/ar/appel",
      "aeb-TN": "https://nohomailboxtunis.com/appel",
    },
  },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

const CALL_SEGMENTS = [
  { minutes: "0-5", title: "Introduction", body: "Net3arfou. T9olli fi 60 seconde chkoun enti, win ba3eth, w chnowa ta3mel." },
  { minutes: "5-12", title: "Découverte", body: "Nas2lek as2elt el diagnostic b détail. Ken 3maltou déjà en ligne, n3addiw direct lel nuances." },
  { minutes: "12-19", title: "Recommandation de structure", body: "N9oulek b kol sara7a: el Business, Suivi mensuel, wala 7atta wa7ed fihom. Wyoming vs Delaware vs New Mexico 7asb el cas mte3ek." },
  { minutes: "19-24", title: "Banking strategy", body: "Mercury vs Relay vs Wise 7asb el profil mte3ek. Ken 3andek historique refus Mercury, na7kiw 3al Plan B documenté." },
  { minutes: "24-27", title: "Timeline", body: "Tokhrej ta3ref exactement wa9tech tji kol étape ken tcommandi la Solution el youm." },
  { minutes: "27-30", title: "Q&A libre", body: "Tlata d9aye9 lel as2la elli ma tal3ouch wa7adhom. Souvent: el wadh3 fiscal tounsi (nwajhouk l fiscaliste TN), CIN, paiements." },
];

const FIVE_THINGS = [
  "Ken LLC américaine ta3mel sens l wadh3ek — ey, le, wala ba3d",
  "Chnowa l'État de formation el mnaseb l activité mte3ek (Wyoming, Delaware, New Mexico) — w 3lech mouch l'okhrin",
  "Chnowa séquence banking réaliste lel profil MTE3EK (Mercury direct, Plan B Relay, Wise intermédiaire)",
  "9addech tkallef fel 7a9i9a kol chay, el 3am el awel w el theni",
  "Chnowa el documents el tounsia elli yelzmou w elli ma yelzmouch",
];

const HONEST_DISQUAL = [
  { profile: "Founder VC-track SaaS", why: "Ken bch tlevi Seed/Series A fi 18 chhar, el structure es7i7a hiya Delaware C-Corp — mouch LLC. Ma nbi3lekch structure ghalta bch na3mel chiffre." },
  { profile: "Résident américain", why: "NOHO ma3moul lel non-résidents. Ken enti résident US, forme el LLC mte3ek direct via el Secretary of State mta3 l'État mte3ek (50-300 USD)." },
  { profile: "Pré-revenu, idée-stage", why: "Ken mazelt ma 3andekch client awel b USD/EUR, la Solution tkoun kolfa bla contrepartie. L9a el facture el oula, w ba3d erja3." },
  { profile: "Yelawej 3ala évasion fiscale", why: "NOHO yekhdem kahaw b structure légale w déclarée. Ken el hadaf ma tsarra7ch fi Tounes, mouch ena el interlocuteur es7i7." },
];

const IconChat = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M3 6 C3 4.5 4.5 3 6 3 L18 3 C19.5 3 21 4.5 21 6 L21 15 C21 16.5 19.5 18 18 18 L9 18 L4 22 L4 18 C3.4 18 3 17.5 3 17 Z" fill={CREAM} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="9" cy="10.5" r="1.2" fill={INK} />
    <circle cx="13" cy="10.5" r="1.2" fill={INK} />
    <circle cx="17" cy="10.5" r="1.2" fill={INK} />
  </svg>
);

const IconEnv = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="2" fill={CREAM} stroke={INK} strokeWidth="2" />
    <path d="M3 7 L12 14 L21 7" stroke={INK} strokeWidth="2" fill="none" strokeLinejoin="round" />
  </svg>
);

const IconForm = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <rect x="5" y="3" width="14" height="18" rx="2" fill={CREAM} stroke={INK} strokeWidth="2" />
    <rect x="8" y="2" width="8" height="3" rx="1" fill={CREAM} stroke={INK} strokeWidth="1.5" />
    <path d="M8 10 L16 10 M8 13 L16 13 M8 16 L13 16" stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function TounsiAppelPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <nav className="text-[12px] mb-5 opacity-60" style={{ color: INK }}>
            <Link href="/" className="hover:underline">Accueil</Link> · <span>A7jez l&apos;appel</span>
          </nav>
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5" style={{ background: INK, color: CREAM }}>
            30 d9i9a · Visio · Gratuit · Bla engagement
          </span>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Tlathin d9i9a m3a <span style={{ color: BLUE }}>l&apos;équipe NOHO</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            L&apos;équipe NOHO côté diaspora tounsia. Bureau fi Tounes (via
            cabinet partenaire KHIARI) w storefront physique fi Los Angeles
            (5062 Lankershim). L&apos;appel gratuit, bla engagement — el
            hadaf n9ouloulek b kol sara7a chnowa el structure (TN, US, wala
            combo) elli tnaseb wadh3ek.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto">
          <div className="p-7 sm:p-10 rounded-3xl text-center" style={{ background: CREAM, boxShadow: "0 8px 40px rgba(45,16,15,0.10)" }}>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
              Choisir un canal
            </p>
            <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              A7jez tawa
            </h2>
            <p className="text-[14px] leading-relaxed mb-7 max-w-md mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
              Tlata options 7asb el canal elli yerta7lek. El kol ywasslou
              l nafs l&apos;appel mta3 30 d9i9a.
            </p>

            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <a
                href={waLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-2xl text-[14.5px] transition-all hover:scale-[1.02]"
                style={{ background: GREEN, color: "#fff", boxShadow: "0 6px 24px rgba(45,122,74,0.32)" }}
              >
                <IconChat className="w-5 h-5" />
                WhatsApp — el mufadhal (réponse fi 2h)
              </a>
              <a
                href="mailto:hello@nohomailbox.org?subject=R%C3%A9servation%20appel%2030%20min%20depuis%20nohomailboxtunis.com%2Ftn"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-2xl text-[14.5px] transition-all hover:scale-[1.02]"
                style={{ background: INK, color: CREAM }}
              >
                <IconEnv className="w-5 h-5" />
                Email — réponse fi 24h
              </a>
              <a
                href="https://nohomailbox.org/contact"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-2xl text-[14.5px] border-2 transition-all hover:scale-[1.02]"
                style={{ background: "transparent", color: INK, borderColor: INK }}
              >
                <IconForm className="w-5 h-5" />
                Formulaire de contact
              </a>
            </div>

            <p className="text-[12px] mt-7 max-w-md mx-auto" style={{ color: "rgba(45,16,15,0.55)" }}>
              Ken mazelt ma 3maltech el diagnostic 5 questions,{" "}
              <Link href="/diagnostic" className="underline font-black">a3mlou 9bal</Link>{" "}
              — l&apos;appel ykoun adha9.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Kifech y3addiw el 30 d9i9a
          </h2>
          <p className="text-[14px] mb-7" style={{ color: "rgba(45,16,15,0.65)" }}>
            Kol d9i9a 3andha sujet. L&apos;appel mouch pitch — hiya consultation structurée.
          </p>
          <div className="space-y-3">
            {CALL_SEGMENTS.map((seg) => (
              <div key={seg.minutes} className="p-5 rounded-2xl flex gap-4" style={{ background: "#fff" }}>
                <div className="flex-shrink-0 font-black text-[12px] px-3 py-1.5 rounded-lg h-fit" style={{ background: INK, color: CREAM }}>
                  {seg.minutes}
                </div>
                <div>
                  <h3 className="font-black text-[15.5px] mb-1" style={{ color: INK }}>{seg.title}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{seg.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
            Chnowa tokhrej bih
          </p>
          <h2 className="font-extrabold mb-6" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Khamsa 7ajet bch ta3refhom fi ekher l&apos;appel
          </h2>
          <ol className="space-y-3 list-none p-0">
            {FIVE_THINGS.map((item, idx) => (
              <li key={idx} className="p-4 rounded-xl flex items-start gap-3" style={{ background: CREAM, color: INK }}>
                <span className="font-black text-[14px] flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: INK, color: CREAM }}>
                  {idx + 1}
                </span>
                <span className="text-[14.5px] leading-relaxed pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
          <p className="text-[13px] italic mt-5" style={{ color: "rgba(45,16,15,0.6)" }}>
            Tokhrej bel 5 réponses hedhom 7atta ken 3omrek ma techri chay men NOHO.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: INK, color: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: GOLD }}>
            Sara7a mihaniya
          </p>
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-baloo), sans-serif" }}>
            Wa9tech ma nekhdhech l&apos;appel
          </h2>
          <p className="text-[14px] mb-7 opacity-75">
            Arb3a profils nfadhel nwajehhom l blasa okhra — bch ma nkhassarlekch 30 d9i9a men wa9tek.
          </p>
          <div className="space-y-3">
            {HONEST_DISQUAL.map((d, idx) => (
              <div key={idx} className="p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", borderLeft: `3px solid ${RED}` }}>
                <p className="font-black text-[15px] mb-1">{d.profile}</p>
                <p className="text-[13.5px] leading-relaxed opacity-90">{d.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-4 text-center" style={{ color: BLUE }}>
            Mouch SDR offshore, mouch chatbot
          </p>
          <h2 className="font-extrabold mb-5 text-center" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            L&apos;équipe NOHO côté diaspora tounsia
          </h2>
          <div className="text-[15px] leading-relaxed space-y-4" style={{ color: "rgba(45,16,15,0.85)" }}>
            <p>
              L&apos;appel de cadrage yekhdhou l&apos;équipe NOHO en direct —
              mouch commercial externe, mouch chatbot, mouch SDR offshore.
              Cohérent 5ater ken tsigni el Business wala el Suivi mensuel,
              hiya nafs l&apos;équipe elli tjawbek en français / TN-arabizi
              ki tab3ath message m3a el 2h mta3 ellil.
            </p>
            <p>
              L&apos;appel de cadrage mouch filtre — houwa déjà el d9i9a
              el oula mel relation. Ykoun incohérent nbi3oulek relation w
              ba3d yekhdmek 7ad ekher côté diaspora.
            </p>
            <p>
              Conséquence pratique: capacité finie. Ki el calendrier y3abbi,
              testanna 3-7 iyem l créneau. Hedhi el vraie raison mta3 el
              délai — mouch scarcity masnou3a.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-8" style={{ background: "#f5f1ea" }}>
        <div className="max-w-3xl mx-auto text-[11px] leading-relaxed" style={{ color: "rgba(45,16,15,0.55)" }}>
          <p>
            <strong>Information générale, pas un conseil fiscal.</strong>{" "}
            L&apos;appel est une consultation structurelle. Il ne se
            substitue pas à une consultation avec un fiscaliste tunisien
            agréé, un CPA américain, ou un avocat. NOHO Mailbox n&apos;est
            ni cabinet d&apos;avocat, ni CPA, ni conseil juridique agréé.
            Les approbations Mercury, Stripe et tout fournisseur tiers ne
            sont pas garanties.
          </p>
        </div>
      </section>
    </>
  );
}
