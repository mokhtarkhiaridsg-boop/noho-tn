import type { Metadata } from "next";
import Link from "next/link";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

/*
 * English version of /contact.
 * Mirrors the condensed /tn/contact structure, neighborly American voice.
 * Claims sourced from the FR page: WhatsApp ~2h, email 24h, form 48h,
 * Tunis-time response windows, 4 calls/day capacity.
 */

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Three ways to reach us from Tunisia: WhatsApp (about 2 hours), email (within 24 hours), or the contact form. Physical storefront in Los Angeles.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/contact",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/contact",
      "ar-TN": "https://nohomailboxtunis.com/ar/contact",
      "aeb-TN": "https://nohomailboxtunis.com/contact",
      en: "https://nohomailboxtunis.com/en/contact",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";

const IconChat = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <path d="M8 12 C8 9 10 7 13 7 L35 7 C38 7 40 9 40 12 L40 28 C40 31 38 33 35 33 L20 33 L12 40 L12 33 C10 33 8 31 8 28 Z" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="18" cy="20" r="2" fill={BLUE} />
    <circle cx="24" cy="20" r="2" fill={BLUE} />
    <circle cx="30" cy="20" r="2" fill={BLUE} />
  </svg>
);

const IconEnvelope = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <rect x="6" y="12" width="36" height="24" rx="3" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M8 14 L24 26 L40 14" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const IconForm = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
    <rect x="10" y="6" width="28" height="36" rx="3" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M16 14 H32 M16 20 H32 M16 26 H28" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 34 L20 38 L30 28" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function EnglishContactPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            Three channels · guaranteed reply
          </span>
          <h1
            className="font-extrabold leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Contact
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            Three ways to reach us — pick whichever channel feels right to
            you. They all lead to the same 30-minute call if your situation
            calls for one.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href={waLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02]"
            style={{ background: GREEN, color: "#fff", boxShadow: "0 8px 30px rgba(45,122,74,0.25)" }}
          >
            <div className="mb-3"><IconChat /></div>
            <h3 className="font-extrabold text-[20px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              WhatsApp
            </h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              The channel most of the Tunisian diaspora prefers. We usually
              reply within 2 hours during LA business hours (9 am - 6 pm
              Los Angeles time).
            </p>
            <p className="font-black text-[14px]">{WHATSAPP_DISPLAY}</p>
          </a>

          <a
            href="mailto:hello@nohomailbox.org?subject=Question%20from%20nohomailboxtunis.com%2Fen"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 8px 30px rgba(45,16,15,0.25)" }}
          >
            <div className="mb-3"><IconEnvelope /></div>
            <h3 className="font-extrabold text-[20px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              Email
            </h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              For structured requests that deserve a written answer
              (compliance, documents, quotes). Reply within 24 hours.
            </p>
            <p className="font-black text-[14px]">hello@nohomailbox.org</p>
          </a>

          <a
            href="https://nohomailbox.org/contact"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02]"
            style={{ background: CREAM, color: INK, border: `1px solid ${INK}` }}
          >
            <div className="mb-3"><IconForm /></div>
            <h3 className="font-extrabold text-[20px] mb-2" style={{ fontFamily: "var(--font-baloo), sans-serif" }}>
              Contact form
            </h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              The official contact form on our main site, nohomailbox.org.
              Reply within 48 hours. If it&apos;s urgent, WhatsApp is your
              best bet.
            </p>
            <p className="font-black text-[14px]">nohomailbox.org/contact</p>
          </a>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl" style={{ background: "#fff" }}>
              <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>
                Physical storefront
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>
                5062 Lankershim Blvd<br />
                North Hollywood, CA 91601<br />
                USA
              </p>
              <p className="text-[12px] mt-3 italic" style={{ color: "rgba(45,16,15,0.55)" }}>
                Open to the public. If you&apos;re ever in Los Angeles, come
                say hello. If you&apos;re in Tunisia, this address is the US
                anchor for your LLC.
              </p>
            </div>
            <div className="p-6 rounded-2xl" style={{ background: "#fff" }}>
              <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>
                Response hours (Tunis time)
              </h3>
              <ul className="space-y-1.5 text-[14px] leading-relaxed" style={{ color: INK }}>
                <li><strong>WhatsApp:</strong> 5 pm - 3 am (Tunis time)</li>
                <li><strong>Email:</strong> within 24 hours on business days</li>
                <li><strong>Video call:</strong> by appointment, 6 pm - 11 pm Tunis slots</li>
              </ul>
              <p className="text-[12px] mt-3 italic" style={{ color: "rgba(45,16,15,0.55)" }}>
                We take at most 4 calls a day. When the calendar is full,
                the wait is 3-7 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK, fontFamily: "var(--font-baloo), sans-serif" }}
          >
            Even faster — book the call directly
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            If you already know you want to talk about an LLC, the monthly
            Suivi, or the Student Portal — go ahead and book the 30-minute
            call.
          </p>
          <Link
            href="/en/appel"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            Book the 30-minute call
          </Link>
        </div>
      </section>
    </>
  );
}
