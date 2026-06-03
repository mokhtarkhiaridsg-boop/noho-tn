{/* TODO: native Arabic review */}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "حل الأعمال — شركة أمريكية أو تونسية في 14 يوماً",
  description:
    "إعداد شركة أمريكية (LLC) أو تونسية (SARL) كاملاً: شركة، EIN، عنوان، هوية بصرية، موقع، مرافقة بنكية. 4 000 دينار مرة واحدة. متابعة شهرية اختيارية 1 200 دينار شهرياً.",
  alternates: {
    canonical: "https://noho.tn/ar/business",
    languages: {
      "fr-TN": "https://noho.tn/business",
      "ar-TN": "https://noho.tn/ar/business",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";

const IconLLC = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="8" width="36" height="32" rx="5" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M13 20 H35 M13 27 H28" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
    <circle cx="36" cy="14" r="7" fill={BLUE} stroke={INK} strokeWidth="1.5" />
    <path d="M33 14 L35.5 16.5 L39 11.5" stroke="#EBF2FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconEIN = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="8" y="6" width="32" height="36" rx="4" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <rect x="12" y="12" width="24" height="6" rx="2" fill={BLUE} opacity="0.25" />
    <text x="24" y="33" textAnchor="middle" fill={BLUE} fontSize="13" fontWeight="bold">EIN</text>
    <path d="M12 22 H36" stroke={INK} strokeWidth="1" opacity="0.15" />
  </svg>
);

const IconBrand = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="18" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M18 18 L24 14 L30 18 L30 30 L24 34 L18 30 Z" fill={BLUE} opacity="0.2" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="4" fill={BLUE} />
  </svg>
);

const IconWebsite = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="8" width="40" height="28" rx="4" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M4 15 H44" stroke={INK} strokeWidth="1.5" />
    <circle cx="10" cy="11.5" r="2" fill={BLUE} />
    <circle cx="16" cy="11.5" r="2" fill={BLUE} opacity="0.5" />
    <rect x="8" y="18" width="14" height="8" rx="2" fill={BLUE} opacity="0.2" />
    <path d="M26 19 H40 M26 23 H36 M26 27 H32" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const IconBank = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 6 L42 16 L6 16 Z" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <rect x="6" y="18" width="36" height="2" fill={INK} />
    <rect x="10" y="22" width="3" height="14" fill={BLUE} opacity="0.5" />
    <rect x="17" y="22" width="3" height="14" fill={BLUE} opacity="0.5" />
    <rect x="28" y="22" width="3" height="14" fill={BLUE} opacity="0.5" />
    <rect x="35" y="22" width="3" height="14" fill={BLUE} opacity="0.5" />
    <rect x="6" y="38" width="36" height="3" fill={INK} />
  </svg>
);

const IconMail = ({ className = "w-11 h-11" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="12" width="40" height="26" rx="5" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M6 14 L24 26 L42 14" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="38" cy="12" r="7" fill={BLUE} stroke={INK} strokeWidth="1.5" />
    <text x="38" y="15.5" textAnchor="middle" fill="#EBF2FA" fontSize="9" fontWeight="bold">12</text>
  </svg>
);

const PACKAGE_SERVICES = [
  { Icon: IconLLC, label: "تأسيس شركة أمريكية (LLC في Wyoming/Delaware/NM) أو شركة تونسية SARL/SUARL عبر مكتب KHIARI" },
  { Icon: IconEIN, label: "الحصول على EIN من مصلحة الضرائب الأمريكية (أو معرف ضريبي تونسي)، إجراءات كاملة" },
  { Icon: IconBrand, label: "كتاب هوية بصرية مخصص — شعار، لوحة ألوان، طباعة" },
  { Icon: IconWebsite, label: "موقع ويب يعمل أولاً على الجوال بنطاقك الخاص، استضافة مشمولة" },
  { Icon: IconBank, label: "مرافقة Mercury + Stripe + Wise لفتح حساب بنكي أمريكي بالكامل" },
  { Icon: IconMail, label: "12 شهراً من استلام البريد التجاري ومسحه وإعادة شحنه" },
];

const MONTHLY_FOLLOWUP = [
  { title: "الامتثال الأمريكي", desc: "Form 5472، Wyoming، الوكيل المسجل، رسوم الولاية — كل شيء يُدار في الوقت المناسب." },
  { title: "بريد ذو أولوية", desc: "مسح ضوئي في نفس اليوم للبريد الحساس. تنبيهات WhatsApp فورية على الوثائق الحرجة." },
  { title: "تنسيق Mercury / Stripe / Wise", desc: "إذا تم تجميد حساب، إذا طُلبت وثائق إضافية، إذا انتهت صلاحية بطاقة — نحن نتولى التنسيق." },
  { title: "محتوى وهوية بصرية مستمرة", desc: "تحديثات الموقع، أصول الهوية البصرية، محتوى منتظم لوسائل التواصل الاجتماعي." },
  { title: "مراجعة فصلية للأعمال", desc: "مكالمة 60 دقيقة كل ثلاثة أشهر لمراجعة الأرقام والإستراتيجية والخطوات التالية." },
  { title: "وصول WhatsApp ذو أولوية", desc: "خط مباشر للفريق. لا روبوتات، لا مندوبي مبيعات خارجيين." },
];

export default function ArabicBusinessPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden px-5 sm:px-6 pt-12 pb-14 sm:pt-20 sm:pb-20"
        style={{ background: "radial-gradient(ellipse at top, #F7E6C2 0%, #F0DBA9 45%, #E8DDD0 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-[11px] font-black px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            فريق عائلي في NoHo · منذ 2017
          </span>
          <h1
            className="font-extrabold leading-[1.15] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 6vw, 3.75rem)", color: INK }}
          >
            الحل الصحيح لـ
            <br />
            <span style={{ color: BLUE }}>أعمالك</span>
          </h1>
          <p
            className="leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ fontSize: "15.5px", color: "rgba(45,16,15,0.78)" }}
          >
            فريق محلي حقيقي، ليس سوقاً إلكترونياً. شركة (تونسية أو أمريكية)،
            هوية بصرية، موقع، بريد — كل ذلك عندنا، يُفوتر مرة واحدة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ar/appel"
              className="font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{
                background: INK,
                color: CREAM,
                boxShadow: "0 6px 28px rgba(45,16,15,0.28)",
              }}
            >
              احجز مكالمة 30 دقيقة
            </Link>
            <Link
              href="/ar/tarifs"
              className="font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              عرض الأسعار
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGE SUMMARY */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[12px] font-black mb-3" style={{ color: BLUE }}>
              الباقة الشاملة
            </p>
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}>
              كل ما تحتاجه لإطلاق شركتك
            </h2>
            <p className="text-[14.5px] max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
              لا تجزئة. لا اشتراكات خفية. سعر واحد، باقة كاملة، تسليم في 14 يوماً.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PACKAGE_SERVICES.map((s) => (
              <div
                key={s.label}
                className="flex items-start gap-4 p-5 rounded-2xl text-right"
                style={{ background: CREAM, border: `1px solid rgba(45,16,15,0.08)` }}
              >
                <div className="flex-shrink-0"><s.Icon /></div>
                <p className="text-[14.5px] leading-relaxed flex-1" style={{ color: INK }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-7 sm:p-9 rounded-3xl text-center" style={{ background: INK, color: CREAM }}>
            <p className="text-[12px] font-black mb-3" style={{ color: GOLD }}>
              السعر الكامل
            </p>
            <div className="flex items-baseline gap-2 justify-center mb-3" dir="ltr">
              <span className="font-extrabold" style={{ fontSize: "60px", lineHeight: 1 }}>
                4 000
              </span>
              <span className="text-[20px] font-black opacity-80">TND</span>
            </div>
            <p className="text-[14px] opacity-80 mb-6">دفعة واحدة · لا اشتراك · تسليم في 14 يوماً</p>
            <Link
              href="/ar/appel"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{ background: GOLD, color: INK }}
            >
              احجز مكالمة لتأطير المشروع
            </Link>
          </div>
        </div>
      </section>

      {/* MONTHLY FOLLOWUP */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[12px] font-black mb-3" style={{ color: BLUE }}>
              المتابعة الشهرية · اختياري
            </p>
            <h2 className="font-extrabold mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}>
              شريك تشغيلي شهري
            </h2>
            <p className="text-[14.5px] max-w-2xl mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
              بعد تسليم الباقة، يمكنك الاشتراك في المتابعة الشهرية بـ 1 200 دينار شهرياً.
              قابل للإلغاء في أي وقت.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MONTHLY_FOLLOWUP.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl text-right" style={{ background: "#fff" }}>
                <h3 className="font-black text-[16px] mb-2" style={{ color: INK }}>{f.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-baseline gap-2" dir="ltr">
              <span className="font-extrabold" style={{ fontSize: "44px", lineHeight: 1, color: INK }}>
                1 200
              </span>
              <span className="text-[16px] font-black" style={{ color: INK }}>TND/mois</span>
            </div>
            <p className="text-[13px] mt-2 mb-6" style={{ color: "rgba(45,16,15,0.65)" }}>
              شهرياً · بدون التزام · قابل للإلغاء في أي وقت
            </p>
            <Link
              href="/ar/tarifs"
              className="inline-block font-black px-8 py-3.5 rounded-2xl text-[14px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM }}
            >
              تفاصيل المتابعة
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 py-16 sm:py-20 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-extrabold mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}>
            هل هذا مناسب لك؟
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(45,16,15,0.75)" }}>
            مكالمة 30 دقيقة لتقول لك بصدق إذا كانت الشركة الأمريكية تناسب وضعك.
            مجانية، بدون التزام.
          </p>
          <Link
            href="/ar/appel"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            احجز المكالمة
          </Link>
        </div>
      </section>
    </>
  );
}
