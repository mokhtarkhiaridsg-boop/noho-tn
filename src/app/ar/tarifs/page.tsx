{/* TODO: native Arabic review */}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الأسعار بالدينار — حل الأعمال، المتابعة، بوابة الطلاب",
  description:
    "أسعار شفافة بالدينار التونسي. حل الأعمال 4 000 دينار، المتابعة الشهرية 1 200 دينار شهرياً، بوابة الطلاب 1 800 دينار سنوياً. بدون ندرة مفتعلة، بدون خصومات وهمية.",
  alternates: {
    canonical: "https://noho.tn/ar/tarifs",
    languages: {
      "fr-TN": "https://noho.tn/tarifs",
      "ar-TN": "https://noho.tn/ar/tarifs",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

const PLANS = [
  {
    label: "حل الأعمال",
    badge: "مرة واحدة",
    price: "4 000",
    currency: "TND",
    note: "دفعة واحدة. يُسلَّم تعاقدياً في 14 يوماً.",
    description:
      "نقطة البداية. إعداد كامل لشركة أمريكية يُسلَّم دفعة واحدة: شركة، EIN، عنوان، هوية بصرية، موقع، شبكات اجتماعية، مرافقة بنكية.",
    bullets: [
      "تأسيس شركة LLC في Wyoming",
      "EIN من مصلحة الضرائب",
      "عنوان بريدي أمريكي حقيقي (12 شهراً)",
      "توثيق Form 1583 من USPS",
      "هوية بصرية",
      "موقع ويب صفحة واحدة",
      "حسابات اجتماعية احترافية",
      "وثيقة إستراتيجية 30 يوماً",
      "مرافقة Mercury + Stripe",
    ],
    cta: { label: "تفاصيل الحل", href: "/ar/business" },
    color: INK,
    textColor: CREAM,
    accent: GOLD,
  },
  {
    label: "المتابعة الشهرية",
    badge: "شهري · بدون التزام",
    price: "1 200",
    currency: "TND",
    suffix: "/mois",
    note: "شهرياً. قابل للإلغاء في أي وقت.",
    description:
      "الشريك التشغيلي الشهري. امتثال أمريكي، بريد ذو أولوية، هوية بصرية، محتوى، مراجعة فصلية. أنت تبيع وتفوتر — نحن نتولى الإدارة الخلفية.",
    bullets: [
      "الامتثال الأمريكي (Form 5472، Wyoming، RA)",
      "بريد ذو أولوية، مسح في نفس اليوم",
      "تنسيق Mercury / Stripe / Wise",
      "تحديثات الموقع وأصول العلامة",
      "محتوى مبرمج للشبكات الاجتماعية",
      "مراجعة فصلية للأعمال",
      "وصول WhatsApp ذو أولوية",
    ],
    cta: { label: "تفاصيل المتابعة", href: "/ar/business" },
    color: CREAM,
    textColor: INK,
    accent: BLUE,
  },
  {
    label: "بوابة الطلاب",
    badge: "سنة دراسية",
    price: "1 800",
    currency: "TND",
    suffix: "/an",
    note: "للطلاب التونسيين الذين يستهدفون جامعة أمريكية (Top 50).",
    description:
      "مساعدة الترشيح للجامعات الأمريكية + عنوان لـ SEVIS و I-20 + تنسيق تأشيرة F-1. عرض سنوي واحد، قابل للتجديد.",
    bullets: [
      "قائمة قصيرة 8-12 جامعة",
      "مرافقة كتابة مقالات Common App",
      "عنوان أمريكي لـ SEVIS + I-20",
      "تنسيق تأشيرة F-1 (محامي أمريكي شريك)",
      "تحضير مقابلة القنصلية",
      "بريد الحرم الجامعي أثناء الدراسة",
    ],
    cta: { label: "بوابة الطلاب", href: "/ar" },
    color: "#C8A35A",
    textColor: INK,
    accent: INK,
  },
];

const MAILBOX_TIER = [
  { name: "Basic", price: "35", note: "استخدام شخصي خفيف" },
  { name: "Standard", price: "75", note: "الأكثر شعبية" },
  { name: "Premium", price: "150", note: "للتجارة الإلكترونية" },
];

const ONE_OFFS = [
  { label: "تجديد العنوان البريدي الأمريكي (سنوي بعد السنة الأولى)", price: "600 TND/an" },
  { label: "تجديد الوكيل المسجل Wyoming (سنوي)", price: "200 TND/an" },
  { label: "التقرير السنوي Wyoming SoS", price: "200 TND/an" },
  { label: "Form 5472 + Form 1120 (سنوي، خارج المتابعة)", price: "800 TND/an" },
  { label: "إعادة توثيق Form 1583 (تغيير عنوان، إلخ)", price: "150 TND" },
  { label: "أبوستيل وثيقة أمريكية للاستخدام في تونس", price: "300 TND/doc" },
  { label: "ترجمة معتمدة AR/FR ↔ EN", price: "120 TND/page" },
  { label: "تنسيق محامي هجرة أمريكي (ساعات إضافية)", price: "بسعر الساعة للمكتب الأمريكي" },
];

export default function ArabicTarifsPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[11px] font-black px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            أسعار شفافة · بالدينار
          </span>
          <h1
            className="font-extrabold leading-[1.15] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK }}
          >
            الأسعار
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            ثلاثة عروض رئيسية. بدون ندرة مفتعلة. بدون خصومات وهمية. بدون
            استعجال مصطنع. السعر بالدينار لأنها عملة عملائك التونسيين.
          </p>
        </div>
      </section>

      {/* MAIN PLANS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map((p) => (
              <div
                key={p.label}
                className="p-7 rounded-3xl text-right"
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
                <h3 className="font-black text-[18px] mb-4">{p.label}</h3>
                <div className="flex items-baseline gap-1 mb-1" dir="ltr">
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
        </div>
      </section>

      {/* MAILBOX TIER PRICING */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK }}>
              الصندوق الافتراضي — 3 خطط
            </h2>
            <p className="text-[14px]" style={{ color: "rgba(45,16,15,0.65)" }}>
              الخطط الشهرية للعنوان الأمريكي وحده، بدون باقة الأعمال.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MAILBOX_TIER.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl text-center" style={{ background: "#fff" }}>
                <h3 className="font-black text-[18px] mb-2" style={{ color: INK }}>{m.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1" dir="ltr">
                  <span className="font-extrabold" style={{ fontSize: "36px", lineHeight: 1, color: INK }}>{m.price}</span>
                  <span className="text-[14px] font-black opacity-70" style={{ color: INK }}>TND/mois</span>
                </div>
                <p className="text-[12.5px]" style={{ color: "rgba(45,16,15,0.65)" }}>{m.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] mt-6" style={{ color: "rgba(45,16,15,0.65)" }}>
            <Link href="/ar/virtual-mailbox" className="underline font-black">
              عرض تفاصيل الصناديق الافتراضية
            </Link>
          </p>
        </div>
      </section>

      {/* ONE-OFFS */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-extrabold mb-3 text-center"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK }}
          >
            خدمات لمرة واحدة
          </h2>
          <p className="text-center text-[14px] mb-8" style={{ color: "rgba(45,16,15,0.65)" }}>
            أسعار الوحدة للاحتياجات الفردية خارج باقات الأعمال والمتابعة.
          </p>
          <div className="space-y-2.5">
            {ONE_OFFS.map((o) => (
              <div
                key={o.label}
                className="p-4 rounded-xl flex justify-between gap-4 items-center"
                style={{ background: CREAM }}
              >
                <span className="text-[14px] font-semibold flex-1" style={{ color: INK }}>{o.label}</span>
                <span className="text-[14px] font-black whitespace-nowrap" style={{ color: BLUE }} dir="ltr">{o.price}</span>
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
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}
          >
            أي خطة تناسبك؟
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            مكالمة 30 دقيقة تخبرك بالخطة المناسبة لوضعك.
          </p>
          <Link
            href="/ar/appel"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            احجز مكالمة
          </Link>
        </div>
      </section>
    </>
  );
}
