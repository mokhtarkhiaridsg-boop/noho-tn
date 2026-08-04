{/* TODO: native Arabic review */}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "عنوان أمريكي حقيقي — مسح ضوئي، استلام طرود، شحن من 35 ديناراً شهرياً",
  description:
    "عنوان بريدي أمريكي حقيقي في لوس أنجلوس. مسح ضوئي للرسائل في نفس اليوم عبر لوحة التحكم. استلام طرود (Amazon، UPS، FedEx، DHL). شحن دولي إلى تونس. خطة Free بالدفع عند الاستعمال (محفظة، طرود بدون USPS) أو 35، 75، 150 ديناراً شهرياً.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/ar/virtual-mailbox",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/virtual-mailbox",
      "ar-TN": "https://nohomailboxtunis.com/ar/virtual-mailbox",
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
    name: "Free",
    price: "0",
    yearPrice: "",
    note: "الدفع عند الاستعمال — طرود بدون اشتراك",
    bullets: [
      ["عنوان استلام الطرود", "⁦5062 Lankershim Blvd⁩ — استلم مشترياتك الأمريكية"],
      ["ناقلون خاصّون فقط", "UPS، FedEx، DHL، Amazon — بدون USPS (تُطبَّق السياسات)"],
      ["الدفع عند الاستعمال", "كل خدمة تُخصم من المحفظة حسب جدول الأسعار"],
      ["محفظة مدفوعة مسبقاً", "شحن الرصيد بحد أدنى 50 ديناراً"],
      ["لوحة تحكم عبر الإنترنت", "إشعار عند كل طرد مستلم"],
    ],
  },
  {
    name: "Basic",
    price: "35",
    yearPrice: "350",
    note: "للاستخدام الشخصي الخفيف أو لتخزين العنوان",
    bullets: [
      ["عنوان بريدي أمريكي حقيقي", "⁦5062 Lankershim Blvd, North Hollywood, CA⁩"],
      ["5 عمليات مسح ضوئي مشمولة", "شهرياً. الزائد: 3 دنانير للمسح"],
      ["شحن حسب الطلب", "رسوم البريد الحقيقية + 4 دنانير معالجة"],
      ["تخزين 30 يوماً", "الزائد: 1 دينار للطرد لكل يوم"],
      ["لوحة تحكم عبر الإنترنت", "لمشاهدة جميع البريد المستلم"],
      ["توثيق Form 1583", "مشمول في الإعداد الأولي"],
    ],
  },
  {
    name: "Standard",
    price: "75",
    yearPrice: "750",
    note: "الأكثر شعبية لدى المستقلين ومشتري Amazon",
    bullets: [
      ["كل ما في Basic", "+ إضافات أدناه"],
      ["20 عملية مسح مشمولة", "شهرياً. الزائد: 2 دينار للمسح"],
      ["استلام طرود مشمول", "5 طرود شهرياً مشمولة"],
      ["شحن أسبوعي", "شحن تلقائي كل أسبوع"],
      ["دمج الطرود", "نجمع لتخفيض التكاليف"],
      ["تخزين 60 يوماً", "مثالي لمشتري Amazon"],
    ],
    primary: true,
  },
  {
    name: "Premium",
    price: "150",
    yearPrice: "1 500",
    note: "للتجارة الإلكترونية والأعمال النشطة والكميات الكبيرة",
    bullets: [
      ["كل ما في Standard", "+ إضافات أدناه"],
      ["مسح ضوئي غير محدود", "بدون حد شهري"],
      ["استلام طرود غير محدود", "بدون حد"],
      ["أولوية المسح", "أقل من ساعتين أثناء ساعات عمل LA"],
      ["إعادة تغليف مشمولة", "نعيد تغليف الطرود الهشة أو الكبيرة"],
      ["أرشيف سحابي للمسح", "أرشيف 3 سنوات قابل للوصول"],
      ["أسعار شحن تفضيلية", "خصومات USPS / UPS / FedEx بالحجم"],
    ],
  },
];

const USES = [
  { t: "الشراء من Amazon US، eBay، Shein، Nordstrom", b: "هذه المواقع غالباً لا تشحن إلى تونس. مع عنوان أمريكي، تطلب ما تريد." },
  { t: "تفعيل Stripe، Mercury، Wise Business", b: "هؤلاء المزودون يتطلبون عنواناً أمريكياً حقيقياً (وليس صندوق بريد مجهول سيء السمعة). NOHO يجتاز تحقّقهم." },
  { t: "استلام بريد الأعمال الأمريكية", b: "مصلحة الضرائب، البنوك، مزودو SaaS، الشركاء — كل مراسلات شركتك الأمريكية تصل هنا، ممسوحة ضوئياً ومُشعَر بها في الوقت الفعلي." },
  { t: "SEVIS وبريد الجامعة", b: "للطلاب: يصل I-20 هنا، مُمسوح في نفس اليوم. أثناء دراستك، بريد الحرم الجامعي يُدار بين الفصول." },
  { t: "مجلات واشتراكات ورقية", b: "The Economist، WSJ، Vogue، Wired — كل الاشتراكات الأمريكية تصل. مسح + شحن حسب التفضيل." },
  { t: "عنوان مرجعي مستقر", b: "للحصول على SSN، ITIN، رخصة قيادة أمريكية، البنوك — عنوان مستقر له قيمة كبيرة عند الانتقال المتكرر." },
];

const PROCESS = [
  { n: 1, t: "تطلب عبر الإنترنت", b: "عنوان التسليم: ⁦5062 Lankershim Blvd, Suite [رقم صندوقك], North Hollywood, CA 91601⁩." },
  { n: 2, t: "الوصول إلى المتجر", b: "نستلم فعلياً (UPS، FedEx، USPS، DHL، Amazon). توقيع مقبول. إشعار فوري في لوحة التحكم." },
  { n: 3, t: "تختار الإجراء", b: "شحن، فتح ومسح، تخزين، تدوير، إرجاع. قرر من لوحة التحكم." },
  { n: 4, t: "الدمج (اختياري)", b: "عدة طرود؟ نجمعها في شحنة واحدة لتخفيض رسوم البريد الدولي." },
  { n: 5, t: "الشحن إلى تونس", b: "USPS Priority Mail International (~7-10 أيام)، UPS Worldwide Expedited (~3-5 أيام)، DHL Express (~2-3 أيام). تختار المهلة مقابل السعر." },
];

export default function ArabicVirtualMailboxPage() {
  return (
    <>
      {/* PLANS */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-14 sm:pb-20" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-black mb-2 text-[15px]" style={{ color: BLUE }}>
              اختر خطتك
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: INK }}
            >
              أربع خطط، عنوان حقيقي واحد
            </h2>
            <p className="mt-3 text-[15px]" style={{ color: "rgba(45,16,15,0.5)" }}>
              قابلة للإلغاء في أي وقت. الخطة السنوية = شهران مجاناً. Free = الدفع عند الاستعمال.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="p-7 rounded-3xl flex flex-col text-right"
                style={{
                  background: plan.primary ? INK : CREAM,
                  color: plan.primary ? CREAM : INK,
                  boxShadow: plan.primary
                    ? "0 12px 50px rgba(45,16,15,0.25)"
                    : "0 4px 18px rgba(45,16,15,0.08)",
                  transform: plan.primary ? "scale(1.03)" : "none",
                }}
              >
                {plan.primary && (
                  <p className="text-[11px] font-black mb-2" style={{ color: GOLD }}>
                    موصى به
                  </p>
                )}
                <h3 className="font-extrabold text-[22px] mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1" dir="ltr">
                  <span className="font-extrabold" style={{ fontSize: "48px", lineHeight: 1 }}>
                    {plan.price}
                  </span>
                  <span className="text-[16px] font-black opacity-80">TND/شهر</span>
                </div>
                <p className="text-[11.5px] opacity-65 mb-2">
                  {plan.yearPrice ? `أو ${plan.yearPrice} TND/سنة (شهران مجاناً)` : "الدفع عند الاستعمال · محفظة مدفوعة مسبقاً"}
                </p>
                <p className="text-[12.5px] opacity-70 mb-5">{plan.note}</p>
                <ul className="space-y-3 text-[13px] mb-6 flex-1">
                  {plan.bullets.map((b, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5">
                      <span className="font-black leading-snug">{b[0]}</span>
                      <span className="opacity-70 text-[12px] leading-snug">{b[1]}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ar/contact"
                  className="block w-full text-center font-black px-5 py-3 rounded-xl text-[14px]"
                  style={{
                    background: plan.primary ? CREAM : INK,
                    color: plan.primary ? INK : CREAM,
                  }}
                >
                  اختر {plan.name}
                </Link>
              </div>
            ))}
          </div>
          <p
            className="text-center text-[12px] mt-7 max-w-xl mx-auto"
            style={{ color: "rgba(45,16,15,0.55)" }}
          >
            توثيق Form 1583 من USPS مشمول في إعداد الخطط الشهرية (Basic، Standard، Premium).
          </p>
        </div>
      </section>

      {/* USES */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}>
              ما الذي يمكنك فعله بعنوان أمريكي حقيقي
            </h2>
            <p className="text-[14.5px] max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
              ست استخدامات شائعة بين العملاء التونسيين.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USES.map((u) => (
              <div key={u.t} className="p-6 rounded-2xl text-right" style={{ background: "#fff" }}>
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
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}
          >
            استلام الطرود — كيف تعمل
          </h2>
          <p className="text-center text-[14.5px] mb-10 max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
            من الطلب إلى التسليم في تونس. كل خطوة شفافة.
          </p>
          <div className="space-y-4">
            {PROCESS.map((s) => (
              <div key={s.n} className="flex gap-4 p-5 rounded-2xl" style={{ background: CREAM }}>
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[20px]"
                  style={{ background: INK, color: CREAM }}
                  dir="ltr"
                >
                  {s.n}
                </div>
                <div className="text-right flex-1">
                  <h3 className="font-black text-[16px] mb-1" style={{ color: INK }}>{s.t}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-16 sm:py-20 text-center" style={{ background: CREAM }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}>
            جاهز للبدء؟
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(45,16,15,0.75)" }}>
            اختر خطتك واتصل بنا. الإعداد الكامل يستغرق 48 ساعة بعد استلام
            Form 1583.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ar/contact"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              اتصل بنا
            </Link>
            <Link
              href="/ar/appel"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              احجز مكالمة
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
