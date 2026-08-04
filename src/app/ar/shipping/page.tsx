{/* TODO: native Arabic review */}
import type { Metadata } from "next";
import LabelClient, { type LabelClientLabels } from "@/components/LabelClient";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

/*
 * Arabic (fus7a / MSA only — no colloquialisms) version of /shipping — condensed.
 * Hero + live Shippo label generator + short carriers note.
 * RTL and Arabic font come from src/app/ar/layout.tsx.
 * Claims sourced from the FR page: real carrier rates, no hidden margin,
 * payment settled in dinars (wallet / Cabinet Khiari), label PDF by email.
 */

export const metadata: Metadata = {
  title: "الشحن — أنشئ ملصق الشحن وادفع بالدينار",
  description:
    "نشحن طردك من لوس أنجلوس — أنت تختار شركة الشحن وتدفع بالدينار. USPS وUPS وFedEx وDHL — أسعار الشركات الحقيقية من دون هامش مخفي.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/ar/shipping",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/shipping",
      "ar-TN": "https://nohomailboxtunis.com/ar/shipping",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";

const AR_LABELS: LabelClientLabels = {
  intro:
    "الوجهة + الطرد ← أسعار مباشرة من شركات الشحن. تختار السعر المناسب، ونصدر الملصق بعد الدفع بالدينار.",
  toName: "اسم المرسل إليه", street: "العنوان", city: "المدينة", state: "الولاية / المنطقة", zip: "الرمز البريدي", country: "الدولة (رمز — TN، FR، US…)",
  suite: "رقم صندوقك في NOHO (اختياري)", suiteHint: "مثال: 122 — إذا كان الطرد يخرج من صندوقك",
  length: "الطول (إنش)", width: "العرض (إنش)", height: "الارتفاع (إنش)", weight: "الوزن (رطل)",
  getRates: "اعرض الأسعار المباشرة", gettingRates: "جارٍ الاستعلام من شركات الشحن…",
  pickRate: "اختر السعر المناسب", days: "أيام",
  email: "بريدك الإلكتروني", phone: "الهاتف (اختياري)",
  order: "اطلب هذا الملصق", ordering: "جارٍ إرسال الطلب…",
  successTitle: "تم استلام الطلب.",
  successBody: "سنتواصل معك للدفع بالدينار ثم يصلك ملصق PDF عبر البريد الإلكتروني.",
  payNote: "الدفع بالدينار — عبر المحفظة أو مكتب الخياري (Cabinet Khiari) في تونس. لا دفع بالبطاقة على الموقع إطلاقاً.",
  back: "عدّل الطرد",
};

const WA_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "مرحباً فريق NOHO، أودّ الاستفسار عن شحن طرد من لوس أنجلوس إلى تونس."
)}`;

const CARRIERS_AR = [
  { name: "USPS Priority Mail International", note: "الأقل تكلفة. 6-10 أيام." },
  { name: "USPS Priority Express International", note: "3-5 أيام، تتبع كامل حتى تونس." },
  { name: "UPS Worldwide Expedited", note: "3-5 أيام، توقيع عند التسليم." },
  { name: "FedEx International Economy", note: "4-6 أيام، وسيط جمركي مشمول." },
  { name: "DHL Express Worldwide", note: "الأسرع — 2-3 أيام، تتبع لحظي." },
];

export default function ArShippingPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[11px] font-black px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            شحن أمريكي ودولي · من لوس أنجلوس
          </span>
          <h1
            className="font-extrabold leading-[1.15] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK }}
          >
            الشحن
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            نشحن طردك من لوس أنجلوس — أنت تختار شركة الشحن وتدفع بالدينار.
          </p>
        </div>
      </section>

      {/* LABEL GENERATOR — live Shippo rates, paid in dinars */}
      <section id="label" className="px-5 sm:px-6 py-12 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="grain relative rounded-[16px] p-5 sm:p-7"
            style={{ background: "#FDF6E4", border: "1.5px solid rgba(45,16,15,0.55)", boxShadow: "var(--shadow-md)" }}
          >
            <span className="west-frame absolute inset-[6px] rounded-[11px] pointer-events-none" aria-hidden="true" style={{ color: BLUE }} />
            <div className="relative z-[1]">
              <p className="text-[10px] font-bold mb-1" style={{ color: BLUE }}>
                ملصقات مباشرة · أسعار شركات الشحن الحقيقية
              </p>
              <h2 className="font-extrabold mb-3" style={{ fontSize: "24px", color: INK }}>
                أنشئ ملصق الشحن وادفع بالدينار
              </h2>
              <LabelClient locale="ar" L={AR_LABELS} />
            </div>
          </div>
        </div>
      </section>

      {/* CARRIERS NOTE */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-center font-extrabold mb-3"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK }}
          >
            خمس شركات شحن · لوس أنجلوس ← تونس
          </h2>
          <p className="text-center text-[14px] mb-8 max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.65)" }}>
            الأسعار التي تظهر في النموذج هي أسعار شركات الشحن الحقيقية — من
            دون أي هامش مخفي. أنت تختار بحسب السعر والسرعة.
          </p>
          <ul className="space-y-2.5 mb-8">
            {CARRIERS_AR.map((c) => (
              <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-2 p-4 rounded-2xl" style={{ background: CREAM }}>
                <span className="font-black text-[14px]" style={{ color: INK }} dir="ltr">{c.name}</span>
                <span className="text-[13px]" style={{ color: "rgba(45,16,15,0.7)" }}>{c.note}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <p className="text-[14px] mb-4" style={{ color: "rgba(45,16,15,0.75)" }}>
              حالة خاصة — طرد كبير، محتوى هش، أو جمارك معقدة؟ راسلنا وندرس
              وضعك ونرد عليك بالخيارات والأسعار الحقيقية.
            </p>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{ background: GREEN, color: "#fff", boxShadow: "0 6px 28px rgba(45,122,74,0.28)" }}
            >
              راسلنا عبر واتساب
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
