/*
 * Mailbox pricing is being confirmed (2026-09-30).
 *
 * Traced end to end: a signup on this site becomes an account on
 * nohomailbox.org, which only knows the US plans and bills them in USD
 * (the one paid Tunisia account so far was charged 52.53 USD by Square for a
 * 6-month Solo). The TND grid that used to be shown here (Free / Basic 35 /
 * Standard 75 / Premium 150 TND, included scans, 4 TND or 140-280 TND
 * forwarding, 2 TND scans, 6 TND/week storage) exists nowhere in the system
 * that bills. Until the owner decides what a Tunisian customer is offered,
 * no page shows a mailbox price or a "choose this plan" button — only what
 * the service does, and a way to ask. Put prices back in ONE place when they
 * are decided, and make the signup form send the matching plan.
 *
 * Server component.
 */
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";

type Loc = "tn" | "fr" | "ar" | "en";

const COPY: Record<Loc, { kicker: string; title: string; body: string; points: string[]; call: string; callHref: string; wa: string }> = {
  fr: {
    kicker: "Forfaits et tarifs",
    title: "Tarifs confirmés avec toi avant tout paiement",
    body: "Nos forfaits d'adresse pour les clients en Tunisie sont en cours de mise à jour. Avant de payer quoi que ce soit, l'équipe te confirme par écrit le forfait, le prix, la devise et ce qui est inclus, et vérifie que ton ouverture est possible depuis la Tunisie (Form 1583).",
    points: [
      "Adresse de rue réelle au 5062 Lankershim Blvd, North Hollywood (Californie)",
      "Réception du courrier et des colis, scan sur demande",
      "Réexpédition vers la Tunisie au tarif du transporteur, plus frais de service",
      "Aucun paiement tant que ton éligibilité n'est pas confirmée",
    ],
    call: "Réserver un appel",
    callHref: "/fr/appel",
    wa: "Demander les tarifs sur WhatsApp",
  },
  tn: {
    kicker: "Forfaits w tarifs",
    title: "El tarif nconfirmiweh m3ak 9bal ay paiement",
    body: "Les forfaits mta3 l'adresse lel clients fi Tounes 9a3din yetbaddlou. 9bal ma tkhalles ay 7aja, l'équipe tconfirmilek bel ktiba el forfait, el prix, el devise w chnowa inclus, w tchouf ken el ouverture mte3ek possible mel Tounes (Form 1583).",
    points: [
      "Adresse de rue 7a9i9ia : 5062 Lankershim Blvd, North Hollywood (Californie)",
      "Nestacblou el courrier w el colis, scan ki t7eb",
      "Réexpédition l Tounes b tarif el transporteur, + frais de service",
      "Ma tkhalles chay 9bal ma nconfirmiw l'éligibilité mte3ek",
    ],
    call: "Réserver un appel",
    callHref: "/appel",
    wa: "Es2el 3al tarifs fel WhatsApp",
  },
  ar: {
    kicker: "الباقات والأسعار",
    title: "نؤكد لك السعر قبل أي دفع",
    body: "باقات العنوان للعملاء في تونس قيد التحديث. قبل أن تدفع أي شيء، يؤكد لك الفريق كتابياً الباقة والسعر والعملة وما هو مشمول، ويتحقق من إمكانية فتح صندوقك من تونس (النموذج 1583).",
    points: [
      "عنوان شارع حقيقي: ⁦5062 Lankershim Blvd, North Hollywood, CA⁩",
      "استلام الرسائل والطرود، والمسح الضوئي عند الطلب",
      "إعادة الشحن إلى تونس بسعر شركة النقل مع رسوم خدمة",
      "لا دفع قبل تأكيد أهليتك",
    ],
    call: "احجز مكالمة",
    callHref: "/ar/appel",
    wa: "اسأل عن الأسعار على واتساب",
  },
  en: {
    kicker: "Plans and prices",
    title: "Your price is confirmed before you pay anything",
    body: "Our address plans for customers in Tunisia are being updated. Before any payment, the team confirms in writing the plan, the price, the currency and what is included, and checks that you can be onboarded from Tunisia (Form 1583).",
    points: [
      "A real street address at 5062 Lankershim Blvd, North Hollywood, California",
      "Mail and package receiving, scans on request",
      "Forwarding to Tunisia at the carrier's rate, plus a service fee",
      "No payment until your eligibility is confirmed",
    ],
    call: "Book a call",
    callHref: "/en/appel",
    wa: "Ask about prices on WhatsApp",
  },
};

export default function PricingPending({ locale, id }: { locale: Loc; id?: string }) {
  const c = COPY[locale];
  const rtl = locale === "ar";
  return (
    <section id={id} className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: "#F7E6C2" }}>
      <div className={`max-w-3xl mx-auto rounded-3xl p-7 sm:p-9 ${rtl ? "text-right" : "text-left"}`} style={{ background: "#fff" }}>
        <p className="text-[12px] font-black uppercase tracking-[0.14em] mb-2" style={{ color: "#337485" }}>{c.kicker}</p>
        <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.2rem)", color: "#2D100F", lineHeight: 1.2 }}>{c.title}</h2>
        <p className="text-[15px] leading-relaxed mb-5" style={{ color: "rgba(45,16,15,0.8)" }}>{c.body}</p>
        <ul className={`space-y-2 text-[14.5px] mb-7 list-disc ${rtl ? "pr-5" : "pl-5"}`} style={{ color: "rgba(45,16,15,0.85)" }}>
          {c.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3">
          <WhatsAppCTA intent="adresse">{c.wa}</WhatsAppCTA>
          <Link
            href={c.callHref}
            className="inline-block text-center font-black px-7 py-4 rounded-2xl text-[15px] border-2"
            style={{ color: "#2D100F", borderColor: "#2D100F" }}
          >
            {c.call}
          </Link>
        </div>
      </div>
    </section>
  );
}
