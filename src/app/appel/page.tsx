import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Réserver l'appel — 30 minutes avec l'équipe NOHO",
  description:
    "30 minutes en visio avec l'équipe NOHO côté diaspora tunisienne. Cadrage honnête de ta situation — le Business (4 000 TND), Suivi mensuel (1 200 TND/mois), ou ni l'un ni l'autre. Gratuit, sans engagement.",
  alternates: { canonical: "https://noho.tn/appel" },
};

const CALL_SEGMENTS = [
  { minutes: "0-5", title: "Introduction", body: "On se présente. Tu me dis en 60 secondes qui tu es, où tu es basé, ce que tu fais." },
  { minutes: "5-12", title: "Découverte", body: "Je te pose les questions du diagnostic en version détaillée. Si tu l'as déjà fait en ligne, on saute aux nuances." },
  { minutes: "12-19", title: "Recommandation de structure", body: "Je te recommande honnêtement le Business, Suivi mensuel, ou ni l'un ni l'autre. Wyoming vs Delaware vs New Mexico selon ton cas." },
  { minutes: "19-24", title: "Banking strategy", body: "Mercury vs Relay vs Wise selon ton profil. Si historique de refus Mercury, on discute du Plan B documenté." },
  { minutes: "24-27", title: "Timeline", body: "Tu sors en sachant exactement quand chaque étape arrive si tu commandes la Solution aujourd'hui." },
  { minutes: "27-30", title: "Q&A libre", body: "Trois minutes pour les questions qui ne sont pas tombées naturellement. Souvent : situation fiscale tunisienne (référer fiscaliste TN), CIN, paiements." },
];

const FIVE_THINGS = [
  "Si une LLC américaine fait sens pour ta situation — oui, non, ou plus tard",
  "Quel État de formation est cohérent avec ton activité (Wyoming, Delaware, New Mexico) — et pourquoi pas l'autre",
  "Quelle séquence banking est réaliste pour TON profil (Mercury direct, Plan B Relay, Wise intermédiaire)",
  "Combien ça coûte réellement TOUT compris la première et la deuxième année",
  "Quels documents tunisiens sont nécessaires et lesquels ne le sont pas",
];

const HONEST_DISQUAL = [
  { profile: "Founder VC-track SaaS", why: "Si tu lèves Seed/Series A dans 18 mois, la bonne structure est Delaware C-Corp — pas une LLC. Je ne vais pas te vendre la mauvaise structure pour faire un chiffre." },
  { profile: "Résident américain", why: "NOHO est conçu pour les non-résidents. Si tu es résident US, forme ta LLC directement via le Secretary of State de ton État (50-300 USD)." },
  { profile: "Pré-revenu idée-stage", why: "Si tu n'as pas encore de premier client en USD/EUR, la Solution est un coût sans contrepartie. Trouve la première facture, puis reviens." },
  { profile: "Recherche d'évasion fiscale", why: "NOHO opère uniquement de la structure légale et déclarée. Si l'objectif est de ne pas déclarer en Tunisie, je ne suis pas le bon interlocuteur." },
];

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

function IconChat({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M3 6 C3 4.5 4.5 3 6 3 L18 3 C19.5 3 21 4.5 21 6 L21 15 C21 16.5 19.5 18 18 18 L9 18 L4 22 L4 18 C3.4 18 3 17.5 3 17 Z" fill={CREAM} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="9" cy="10.5" r="1.2" fill={INK} />
      <circle cx="13" cy="10.5" r="1.2" fill={INK} />
      <circle cx="17" cy="10.5" r="1.2" fill={INK} />
    </svg>
  );
}
function IconEnv({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" fill={CREAM} stroke={INK} strokeWidth="2" />
      <path d="M3 7 L12 14 L21 7" stroke={INK} strokeWidth="2" fill="none" strokeLinejoin="round" />
    </svg>
  );
}
function IconForm({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" fill={CREAM} stroke={INK} strokeWidth="2" />
      <rect x="8" y="2" width="8" height="3" rx="1" fill={CREAM} stroke={INK} strokeWidth="1.5" />
      <path d="M8 10 L16 10 M8 13 L16 13 M8 16 L13 16" stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function AppelPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <nav className="text-[12px] mb-5 opacity-60" style={{ color: INK }}>
            <Link href="/" className="hover:underline">Accueil</Link> · <span>Réserver l&apos;appel</span>
          </nav>
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5" style={{ background: INK, color: CREAM }}>
            30 minutes · Visio · Gratuit · Sans engagement
          </span>
          <h1 className="font-extrabold leading-[1.1] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Trente minutes avec <span style={{ color: BLUE }}>l&apos;équipe NOHO</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            L&apos;équipe NOHO côté diaspora tunisienne. Bureaux à Tunis
            (via cabinet partenaire KHIARI) et storefront physique à Los
            Angeles (5062 Lankershim). L&apos;appel est gratuit, sans
            engagement, et sert à te dire honnêtement quelle structure
            (TN, US, ou combo) correspond à ta situation.
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
              Réserver maintenant
            </h2>
            <p className="text-[14px] leading-relaxed mb-7 max-w-md mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
              Trois options selon ton canal préféré. Toutes mènent au même
              appel de 30 minutes.
            </p>

            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <a href="https://wa.me/18185067744?text=Bonjour%20l%27%C3%A9quipe%20NOHO%2C%20j%27aimerais%20r%C3%A9server%20l%27appel%20de%2030%20minutes."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-2xl text-[14.5px] transition-all hover:scale-[1.02]"
                style={{ background: GREEN, color: "#fff", boxShadow: "0 6px 24px rgba(45,122,74,0.32)" }}>
                <IconChat className="w-5 h-5" />
                WhatsApp — préféré (réponse sous 2h)
              </a>
              <a href="mailto:hello@nohomailbox.org?subject=R%C3%A9servation%20appel%2030%20min%20depuis%20noho.tn"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-2xl text-[14.5px] transition-all hover:scale-[1.02]"
                style={{ background: INK, color: CREAM }}>
                <IconEnv className="w-5 h-5" />
                Email — réponse sous 24h
              </a>
              <a href="https://nohomailbox.org/contact"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-2xl text-[14.5px] border-2 transition-all hover:scale-[1.02]"
                style={{ background: "transparent", color: INK, borderColor: INK }}>
                <IconForm className="w-5 h-5" />
                Formulaire de contact
              </a>
            </div>

            <p className="text-[12px] mt-7 max-w-md mx-auto" style={{ color: "rgba(45,16,15,0.55)" }}>
              Si tu n&apos;as pas encore fait le diagnostic 5 questions,{" "}
              <Link href="/diagnostic" className="underline font-black">fais-le d&apos;abord</Link>{" "}
              — l&apos;appel sera plus précis.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Comment se passent les 30 minutes
          </h2>
          <p className="text-[14px] mb-7" style={{ color: "rgba(45,16,15,0.65)" }}>
            Chaque minute a un sujet. L&apos;appel n&apos;est pas un pitch, c&apos;est une consultation structurée.
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
            Réciprocité — ce que tu repars avec
          </p>
          <h2 className="font-extrabold mb-6" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Cinq choses que tu sauras à la fin de l&apos;appel
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
            Tu repars avec ces 5 réponses même si tu n&apos;achètes jamais rien chez NOHO.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: INK, color: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: "#f8c84a" }}>
            Authority via Honest Self-Disclosure
          </p>
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-baloo), sans-serif" }}>
            Quand je ne prends pas l&apos;appel
          </h2>
          <p className="text-[14px] mb-7 opacity-75">
            Quatre profils pour lesquels je préfère te rediriger — pour ne pas te faire perdre 30 minutes.
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
            Pas un SDR offshore, pas un chatbot
          </p>
          <h2 className="font-extrabold mb-5 text-center" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            L&apos;équipe NOHO côté diaspora tunisienne
          </h2>
          <div className="text-[15px] leading-relaxed space-y-4" style={{ color: "rgba(45,16,15,0.85)" }}>
            <p>
              L&apos;appel de cadrage est pris par l&apos;équipe NOHO en
              direct — pas par un commercial externe, pas par un chatbot,
              pas par un SDR offshore. Cohérent parce que si tu signes le
              le Business ou le Suivi mensuel, c&apos;est la même équipe qui répond en
              français / TN-arabizi quand tu envoies un message à 2h du matin.
            </p>
            <p>
              L&apos;appel de cadrage n&apos;est pas un filtre — c&apos;est
              déjà la première minute de la relation. Ce serait incohérent
              de te vendre une relation puis de te délivrer par quelqu&apos;un
              d&apos;autre côté diaspora.
            </p>
            <p>
              Conséquence pratique : capacité finie. Quand le calendrier est
              plein, il faut attendre 3-7 jours pour un créneau. C&apos;est
              la vraie raison du délai — pas une scarcity manufacturée.
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
