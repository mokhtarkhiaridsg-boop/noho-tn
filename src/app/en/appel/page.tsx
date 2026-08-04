import type { Metadata } from "next";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";

/*
 * English version of /appel. Slug stays /en/appel so the locale switcher's
 * prefix logic keeps working — only the copy is English.
 * All claims from the FR page: 30 min video call, free, no commitment,
 * Business 4 000 TND, Suivi Mensuel 1 200 TND/month, 3-7 day slot wait.
 */

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "30 minutes on video with the NOHO team on the Tunisian diaspora side. An honest read on your situation — the Business (4 000 TND), the Suivi Mensuel (1 200 TND/month), or neither. Free, no commitment.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/appel",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/appel",
      "ar-TN": "https://nohomailboxtunis.com/ar/appel",
      "aeb-TN": "https://nohomailboxtunis.com/appel",
      en: "https://nohomailboxtunis.com/en/appel",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";
const RED = "#C73E2D";

const CALL_SEGMENTS = [
  { minutes: "0-5", title: "Introductions", body: "We say hello. You tell me in 60 seconds who you are, where you're based, and what you do." },
  { minutes: "5-12", title: "Discovery", body: "I walk you through the diagnostic questions in detail. If you've already done it online, we skip straight to the nuances." },
  { minutes: "12-19", title: "Structure recommendation", body: "I give you an honest recommendation: the Business, the Suivi Mensuel, or neither one. Wyoming vs Delaware vs New Mexico, depending on your case." },
  { minutes: "19-24", title: "Banking strategy", body: "Mercury vs Relay vs Wise for your profile. If Mercury has turned you down before, we talk through the documented Plan B." },
  { minutes: "24-27", title: "Timeline", body: "You leave knowing exactly when each step lands if you order the Solution today." },
  { minutes: "27-30", title: "Open Q&A", body: "Three minutes for the questions that didn't come up naturally. Usually: your Tunisian tax situation (we point you to a TN tax advisor), CIN, payments." },
];

const FIVE_THINGS = [
  "Whether a US LLC makes sense for your situation — yes, no, or later",
  "Which formation state fits your business (Wyoming, Delaware, New Mexico) — and why not the others",
  "Which banking sequence is realistic for YOUR profile (Mercury direct, Plan B with Relay, Wise as a bridge)",
  "What it really costs, all in, for year one and year two",
  "Which Tunisian documents you actually need — and which ones you don't",
];

const HONEST_DISQUAL = [
  { profile: "VC-track SaaS founder", why: "If you're raising a Seed or Series A within 18 months, the right structure is a Delaware C-Corp — not an LLC. I won't sell you the wrong structure to hit a number." },
  { profile: "US resident", why: "NOHO is built for non-residents. If you live in the US, form your LLC directly through your state's Secretary of State (50-300 USD)." },
  { profile: "Pre-revenue, idea stage", why: "If you don't have your first USD/EUR client yet, the Solution is a cost with nothing behind it. Land that first invoice, then come back." },
  { profile: "Looking for tax evasion", why: "NOHO only works with legal, declared structures. If the goal is to not declare in Tunisia, I'm not the right person to talk to." },
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

export default function EnglishAppelPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <nav className="text-[12px] mb-5 opacity-60" style={{ color: INK }}>
            <Link href="/en" className="hover:underline">Home</Link> · <span>Book a call</span>
          </nav>
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5" style={{ background: INK, color: CREAM }}>
            30 minutes · Video · Free · No commitment
          </span>
          <h1
            className="font-extrabold leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Thirty minutes with <span style={{ color: BLUE }}>the NOHO team</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            The NOHO team on the Tunisian diaspora side. Offices in Tunis
            (through partner law office KHIARI) and a physical storefront in
            Los Angeles (5062 Lankershim). The call is free, no strings
            attached — its whole point is to tell you honestly which
            structure (TN, US, or a combo) actually fits your situation.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto">
          <div className="p-7 sm:p-10 rounded-3xl text-center" style={{ background: CREAM, boxShadow: "0 8px 40px rgba(45,16,15,0.10)" }}>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
              Pick a channel
            </p>
            <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
              Book now
            </h2>
            <p className="text-[14px] leading-relaxed mb-7 max-w-md mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
              Three options, whichever channel suits you. They all lead to
              the same 30-minute call.
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
                WhatsApp — preferred (reply within 2 hours)
              </a>
              <a
                href="mailto:hello@nohomailbox.org?subject=Booking%20the%2030-minute%20call%20from%20nohomailboxtunis.com%2Fen"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-2xl text-[14.5px] transition-all hover:scale-[1.02]"
                style={{ background: INK, color: CREAM }}
              >
                <IconEnv className="w-5 h-5" />
                Email — reply within 24 hours
              </a>
              <a
                href="https://nohomailbox.org/contact"
                className="inline-flex items-center justify-center gap-2 font-black px-6 py-4 rounded-2xl text-[14.5px] border-2 transition-all hover:scale-[1.02]"
                style={{ background: "transparent", color: INK, borderColor: INK }}
              >
                <IconForm className="w-5 h-5" />
                Contact form
              </a>
            </div>

            <p className="text-[12px] mt-7 max-w-md mx-auto" style={{ color: "rgba(45,16,15,0.55)" }}>
              If you haven&apos;t done the 5-question diagnostic yet,{" "}
              <Link href="/en/diagnostic" className="underline font-black">do it first</Link>{" "}
              — the call will be sharper for it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            How the 30 minutes go
          </h2>
          <p className="text-[14px] mb-7" style={{ color: "rgba(45,16,15,0.65)" }}>
            Every minute has a job. The call is not a pitch — it&apos;s a structured consultation.
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
            What you walk away with
          </p>
          <h2 className="font-extrabold mb-6" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            Five things you&apos;ll know by the end of the call
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
            You leave with these 5 answers even if you never buy a thing from NOHO.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: INK, color: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: GOLD }}>
            Straight talk
          </p>
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontFamily: "var(--font-baloo), sans-serif" }}>
            When I won&apos;t take the call
          </h2>
          <p className="text-[14px] mb-7 opacity-75">
            Four profiles I&apos;d rather point somewhere else — so you don&apos;t lose 30 minutes of your day.
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
            Not an offshore SDR, not a chatbot
          </p>
          <h2 className="font-extrabold mb-5 text-center" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}>
            The NOHO team on the Tunisian diaspora side
          </h2>
          <div className="text-[15px] leading-relaxed space-y-4" style={{ color: "rgba(45,16,15,0.85)" }}>
            <p>
              The scoping call is taken by the NOHO team directly — not an
              outside salesperson, not a chatbot, not an offshore SDR. That
              matters, because if you sign the Business or the Suivi
              Mensuel, it&apos;s the same team answering in French /
              TN-arabizi when you message us at 2 in the morning.
            </p>
            <p>
              The scoping call is not a filter — it&apos;s already the first
              minute of the relationship. It would make no sense to sell you
              a relationship and then hand you off to someone else on the
              diaspora side.
            </p>
            <p>
              The practical consequence: finite capacity. When the calendar
              fills up, the wait for a slot is 3-7 days. That&apos;s the
              real reason for the delay — not manufactured scarcity.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-8" style={{ background: "#f5f1ea" }}>
        <div className="max-w-3xl mx-auto text-[11px] leading-relaxed" style={{ color: "rgba(45,16,15,0.55)" }}>
          <p>
            <strong>General information, not tax advice.</strong>{" "}
            The call is a structural consultation. It does not replace a
            consultation with a licensed Tunisian tax advisor, an American
            CPA, or a lawyer. NOHO Mailbox is not a law firm, not a CPA,
            and not licensed legal counsel. Approvals from Mercury, Stripe,
            or any third-party provider are never guaranteed.
          </p>
        </div>
      </section>
    </>
  );
}
