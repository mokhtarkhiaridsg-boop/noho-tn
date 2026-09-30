/*
 * "Réexpédition de colis des États-Unis vers la Tunisie" — one template, two
 * languages (FR at /fr/…, AR at /ar/…). Both pages pass a COPY object with the
 * same shape, so the French and Arabic versions cannot drift apart in
 * structure, prices or promises.
 *
 * Every fact on it comes from the /tarifs grid (forwarding = carrier rate +
 * 4 TND handling, storage overage 6 TND per parcel per week, consolidation on
 * Standard and Premium) or from the USPS/carrier rules — nothing new is
 * promised here. Transit times are the carriers' own indicative ranges and
 * are labelled as such; customs is paid by the customer on arrival.
 *
 * Server component. No client JS beyond the shared analytics click listener.
 */
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const BODY = "#EBF2FA";

export type ReexpeditionCopy = {
  lang: "fr" | "ar";
  kicker: string;
  h1: string;
  intro: string;
  chips: string[];
  ctaSignup: string;
  ctaWhatsApp: string;
  stepsTitle: string;
  steps: { t: string; b: string }[];
  costTitle: string;
  costRows: { item: string; price: string }[];
  costNote: React.ReactNode;
  carriersTitle: string;
  carriersHead: [string, string, string];
  carriers: { name: string; time: string; price: string }[];
  carriersNote: string;
  notTitle: string;
  notList: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  endTitle: string;
  endBody: string;
  endSecondary: { href: string; label: string };
  trackFrom: string;
};

export function faqJsonLd(copy: ReexpeditionCopy) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: copy.lang,
    mainEntity: copy.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(copy: ReexpeditionCopy, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.h1,
    serviceType: "Package forwarding from the United States to Tunisia",
    inLanguage: copy.lang,
    url,
    areaServed: { "@type": "Country", name: "Tunisia" },
    provider: {
      "@type": "LocalBusiness",
      name: "NOHO Mailbox",
      telephone: "+1-818-506-7744",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5062 Lankershim Blvd",
        addressLocality: "North Hollywood",
        addressRegion: "CA",
        postalCode: "91601",
        addressCountry: "US",
      },
    },
  };
}

export default function ReexpeditionPage({ copy }: { copy: ReexpeditionCopy }) {
  const rtl = copy.lang === "ar";
  const align = rtl ? "text-right" : "text-left";
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-12" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[12px] font-black uppercase tracking-[0.14em] mb-3" style={{ color: BLUE }}>
            {copy.kicker}
          </p>
          <h1
            className="font-extrabold tracking-tight mb-5"
            style={{
              fontFamily: rtl ? undefined : "var(--font-baloo), sans-serif",
              fontSize: "clamp(1.9rem, 5vw, 3.3rem)",
              color: INK,
              lineHeight: rtl ? 1.3 : 1.1,
            }}
          >
            {copy.h1}
          </h1>
          <p className="text-[16px] leading-relaxed mb-6" style={{ color: "rgba(45,16,15,0.8)" }}>
            {copy.intro}
          </p>
          <ul className="flex flex-wrap justify-center gap-2 mb-7 text-[12.5px] font-bold" style={{ color: INK }}>
            {copy.chips.map((c) => (
              <li key={c} className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>
                {c}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              data-track="signup_click"
              data-track-from={`${copy.trackFrom}_hero`}
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px]"
              style={{ background: INK, color: CREAM }}
            >
              {copy.ctaSignup}
            </Link>
            <WhatsAppCTA intent="colis">{copy.ctaWhatsApp}</WhatsAppCTA>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.4rem)", color: INK }}>
            {copy.stepsTitle}
          </h2>
          <ol className="space-y-3">
            {copy.steps.map((s, i) => (
              <li key={s.t} className="flex gap-4 p-5 rounded-2xl" style={{ background: "#fff" }}>
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-[17px]"
                  style={{ background: INK, color: CREAM }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className={align}>
                  <h3 className="font-black text-[16px] mb-1" style={{ color: INK }}>{s.t}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.8)" }}>{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COSTS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-extrabold mb-8" style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.4rem)", color: INK }}>
            {copy.costTitle}
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid rgba(45,16,15,0.12)` }}>
            <table className={`w-full text-[14px] ${align}`}>
              <tbody>
                {copy.costRows.map((r, i) => (
                  <tr key={r.item} style={{ background: i % 2 ? "#fff" : BODY }}>
                    <th scope="row" className="p-4 font-bold align-top" style={{ color: INK, width: "45%" }}>{r.item}</th>
                    <td className="p-4 align-top" style={{ color: "rgba(45,16,15,0.85)" }}>{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-[13px] mt-4 ${align}`} style={{ color: "rgba(45,16,15,0.65)" }}>{copy.costNote}</p>
        </div>
      </section>

      {/* CARRIERS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-extrabold mb-8" style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.4rem)", color: INK }}>
            {copy.carriersTitle}
          </h2>
          <div className="rounded-2xl overflow-x-auto" style={{ background: "#fff" }}>
            <table className={`w-full text-[14px] ${align}`}>
              <thead>
                <tr style={{ background: INK, color: CREAM }}>
                  {copy.carriersHead.map((h) => (
                    <th key={h} scope="col" className="p-3 font-black">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.carriers.map((c) => (
                  <tr key={c.name} style={{ borderTop: "1px solid rgba(45,16,15,0.1)" }}>
                    <th scope="row" className="p-3 font-bold" style={{ color: INK }}>{c.name}</th>
                    <td className="p-3" style={{ color: "rgba(45,16,15,0.85)" }}>{c.time}</td>
                    <td className="p-3" style={{ color: "rgba(45,16,15,0.85)" }}>{c.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-[13px] mt-4 ${align}`} style={{ color: "rgba(45,16,15,0.7)" }}>{copy.carriersNote}</p>
        </div>
      </section>

      {/* WHAT WE DON'T DO */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-extrabold mb-6" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", color: INK }}>
            {copy.notTitle}
          </h2>
          <ul className={`space-y-2 text-[14.5px] leading-relaxed list-disc ${rtl ? "pr-5" : "pl-5"} ${align}`} style={{ color: "rgba(45,16,15,0.85)" }}>
            {copy.notList.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-extrabold mb-8" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK }}>
            {copy.faqTitle}
          </h2>
          <div className="space-y-3">
            {copy.faq.map((f) => (
              <details key={f.q} className={`p-4 rounded-xl ${align}`} style={{ background: "#fff" }}>
                <summary className="font-black text-[15.5px] cursor-pointer" style={{ color: INK }}>{f.q}</summary>
                <p className="text-[14px] leading-relaxed mt-3" style={{ color: "rgba(45,16,15,0.85)" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* END CTA */}
      <section className="px-5 sm:px-6 py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}>
            {copy.endTitle}
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-8" style={{ color: "rgba(45,16,15,0.78)" }}>{copy.endBody}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              data-track="signup_click"
              data-track-from={`${copy.trackFrom}_footer`}
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px]"
              style={{ background: INK, color: CREAM }}
            >
              {copy.ctaSignup}
            </Link>
            <Link
              href={copy.endSecondary.href}
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] border-2"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              {copy.endSecondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
