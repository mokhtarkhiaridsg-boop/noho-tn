{/* TODO: native Arabic review */}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "NOHO Mailbox تونس — صندوق بريد أمريكي، شحن، توصيل، شركة",
  },
  description:
    "عنوان بريدي حقيقي في الولايات المتحدة ابتداءً من 35 دينار شهرياً. صندوق بريد افتراضي مع مسح ضوئي للرسائل، استلام طرود (UPS/FedEx/Amazon)، شحن دولي إلى تونس. شركة أمريكية، توثيق، شحن، توصيل. تسعير بالدينار.",
  alternates: {
    canonical: "https://noho.tn/ar",
    languages: {
      "fr-TN": "https://noho.tn",
      "ar-TN": "https://noho.tn/ar",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";
const GREEN = "#2D7A4A";

const IconMailbox = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="14" width="36" height="22" rx="4" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M6 22 L24 32 L42 22" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <rect x="40" y="10" width="3" height="14" rx="1" fill={BLUE} stroke={INK} strokeWidth="1.5" />
  </svg>
);

const IconBuilding = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="10" y="8" width="28" height="34" rx="2" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <rect x="15" y="14" width="5" height="5" fill={BLUE} />
    <rect x="22" y="14" width="5" height="5" fill={BLUE} opacity="0.7" />
    <rect x="29" y="14" width="5" height="5" fill={BLUE} opacity="0.5" />
    <rect x="20" y="30" width="8" height="12" fill={INK} />
  </svg>
);

const IconBox = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 8 L40 16 L40 34 L24 42 L8 34 L8 16 Z" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <path d="M8 16 L24 24 L40 16 M24 24 L24 42" stroke={INK} strokeWidth="1.5" />
    <path d="M16 12 L32 20" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconPlane = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M6 26 L20 22 L30 8 L34 10 L28 24 L42 28 L40 32 L24 30 L18 38 L14 36 L18 28 L8 30 Z" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const IconTruck = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="4" y="14" width="26" height="18" rx="2" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M30 20 L40 20 L44 26 L44 32 L30 32 Z" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="34" r="4" fill={INK} />
    <circle cx="36" cy="34" r="4" fill={INK} />
  </svg>
);

const IconStamp = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="8" y="10" width="32" height="28" rx="2" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeDasharray="3 2" />
    <circle cx="24" cy="22" r="6" fill={BLUE} opacity="0.4" stroke={INK} strokeWidth="1.5" />
    <path d="M14 30 H34" stroke={INK} strokeWidth="1.5" />
  </svg>
);

const IconTools = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M14 6 L20 12 L14 18 L8 12 Z" fill={BLUE} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 16 L36 36" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <path d="M34 28 L42 36 L36 42 L28 34 Z" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const IconHandshake = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M6 22 L14 18 L20 22 L26 18 L34 22 L42 22 L42 30 L34 32 L26 36 L20 32 L14 36 L6 30 Z" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <path d="M20 22 L26 28 M26 22 L20 28" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CORE_SERVICES = [
  {
    Icon: IconMailbox,
    title: "صندوق بريد افتراضي أمريكي",
    body: "عنوان بريدي حقيقي في لوس أنجلوس ابتداءً من 35 ديناراً شهرياً. مسح ضوئي للرسائل في نفس اليوم عبر لوحة تحكم. شحن إلى تونس أو أي مكان في العالم.",
    href: "/ar/virtual-mailbox",
    primary: true,
  },
  {
    Icon: IconHandshake,
    title: "الوكيل — يدك في الولايات المتحدة",
    body: "حلول مخصصة حسب وضعك: البيع، الدراسة، أو البحث عن عمل في أمريكا. NOHO يتصرف نيابةً عنك على الأرض.",
    href: "/ar",
    accent: GOLD,
  },
  {
    Icon: IconBuilding,
    title: "حل الأعمال",
    body: "شركة أمريكية أو تونسية + EIN + هوية بصرية + موقع ويب + مرافقة Mercury و Stripe. 4 000 دينار مرة واحدة.",
    href: "/ar/business",
  },
  {
    Icon: IconBox,
    title: "استلام الطرود (Amazon, UPS, FedEx)",
    body: "تطلب من Amazon أمريكا، eBay، Shein، أو أي مكان — يصل إلى 5062 Lankershim. ندمج، نغلف، ونشحن إلى تونس.",
    href: "/ar/virtual-mailbox",
  },
  {
    Icon: IconPlane,
    title: "الشحن الدولي",
    body: "بريد وطرود تُشحن إلى تونس، باريس، دبي، مونتريال — أسبوعياً أو حسب الطلب. دمج لتخفيض التكاليف.",
    href: "/ar/virtual-mailbox",
  },
  {
    Icon: IconTruck,
    title: "التوصيل في الولايات المتحدة",
    body: "إذا كانت لديك شركة أمريكية بعملاء أمريكيين — نتولى التوصيل المحلي في نفس اليوم بكامل لوس أنجلوس الكبرى.",
    href: "/ar",
  },
  {
    Icon: IconStamp,
    title: "موثق كاليفورنيا",
    body: "Form 1583 لـ USPS، توثيق عام، ترجمة معتمدة، أبوستيل. في المتجر أو عبر جلسة فيديو.",
    href: "/ar",
  },
  {
    Icon: IconTools,
    title: "أدوات وأدلة مجانية",
    body: "حاسبات Form 5472، مقارنات البنوك الأمريكية، أدلة PDF، بحث في الوقت الفعلي. كل شيء مجاني لفهم ملفك.",
    href: "/ar",
  },
];

const MAILBOX_PLANS = [
  {
    name: "Basic",
    price: "35",
    note: "للاستخدام الشخصي الخفيف",
    bullets: [
      "عنوان بريدي أمريكي حقيقي",
      "5 عمليات مسح ضوئي شهرياً",
      "شحن حسب الطلب (رسوم البريد إضافية)",
      "تخزين 30 يوماً",
    ],
  },
  {
    name: "Standard",
    price: "75",
    note: "الأكثر شعبية لدى المستقلين",
    bullets: [
      "كل ما في Basic",
      "20 عملية مسح شهرياً",
      "استلام طرود (5 شهرياً)",
      "شحن أسبوعي تلقائي",
      "دمج الطرود",
    ],
    primary: true,
  },
  {
    name: "Premium",
    price: "150",
    note: "للتجارة الإلكترونية والأعمال النشطة",
    bullets: [
      "كل ما في Standard",
      "مسح ضوئي غير محدود",
      "استلام طرود غير محدود",
      "أولوية المسح (أقل من ساعتين)",
      "إعادة تغليف مشمولة",
      "أرشيف سحابي للمسح (3 سنوات)",
    ],
  },
];

export default function ArabicHomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-5 sm:px-6 pt-12 pb-14 sm:pt-20 sm:pb-20 min-h-[78vh]"
        style={{ background: CREAM }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(45,16,15,0.1) 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span
            className="inline-flex items-center text-[11px] font-black px-3 sm:px-4 py-2 rounded-full mb-6 leading-tight"
            style={{ background: INK, color: CREAM }}
          >
            <span>النسخة التونسية</span>
            <span className="mx-1">·</span>
            <span dir="ltr">5062 Lankershim, North Hollywood, CA</span>
          </span>

          <h1
            className="font-extrabold leading-[1.15] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2.25rem, 7vw, 5rem)",
              color: INK,
            }}
          >
            عنوانك الأمريكي.
            <br />
            <span style={{ color: BLUE }}>من 35 ديناراً شهرياً.</span>
          </h1>

          <p
            className="leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontSize: "17px", color: "rgba(45,16,15,0.78)" }}
          >
            صندوق بريد افتراضي في محل تجاري حقيقي بلوس أنجلوس. مسح ضوئي للرسائل،
            استلام طرود Amazon/UPS/FedEx، شحن دولي إلى تونس. بالإضافة إلى: شركة
            أمريكية، توثيق، شحن، وتوصيل. تسعير بالدينار.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ar/virtual-mailbox"
              className="font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2"
              style={{
                background: INK,
                color: CREAM,
                boxShadow: "0 6px 28px rgba(45,16,15,0.28)",
              }}
            >
              <span>عرض الصناديق الافتراضية</span>
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 rtl:-scale-x-100" fill="none" aria-hidden="true">
                <path d="M3 8 H13 M10 5 L13 8 L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/ar/contact"
              className="font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              طلب عرض سعر
            </Link>
          </div>

          <p className="text-[12px] mt-6" style={{ color: "rgba(45,16,15,0.55)" }}>
            متجر فعلي مفتوح · مسجل لدى USPS كـ CMRA · موثق كاليفورنيا في الموقع
          </p>
        </div>
      </section>

      {/* MAILBOX PRICING */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[12px] font-black mb-3" style={{ color: BLUE }}>
              المنتج الرئيسي
            </p>
            <h2
              className="font-extrabold mb-3"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: INK }}
            >
              صناديق افتراضية — 3 خطط بالدينار
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.65)" }}>
              عنوان بريدي أمريكي حقيقي، مسح ضوئي عبر لوحة التحكم، استلام طرود.
              خطط شهرية، قابلة للإلغاء في أي وقت.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MAILBOX_PLANS.map((plan) => (
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
                  <span className="font-extrabold" style={{ fontSize: "44px", lineHeight: 1 }}>
                    {plan.price}
                  </span>
                  <span className="text-[16px] font-black opacity-80">TND/mois</span>
                </div>
                <p className="text-[12.5px] opacity-70 mb-5">{plan.note}</p>
                <ul className="space-y-2 text-[13.5px] mb-6 flex-1">
                  {plan.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 opacity-60">·</span>
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ar/virtual-mailbox"
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
            توثيق Form 1583 من USPS مشمول في جميع الخطط. الخطة السنوية = شهران مجاناً.
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[12px] font-black mb-3" style={{ color: BLUE }}>
              كل شيء تحت سقف واحد
            </p>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: INK }}>
              خدماتنا
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="block p-5 rounded-2xl transition-all hover:-translate-y-1 text-right"
                style={{
                  background: s.primary ? INK : s.accent ?? "#fff",
                  color: s.primary ? CREAM : INK,
                  border: s.primary || s.accent ? "none" : "1px solid rgba(45,16,15,0.08)",
                  boxShadow: s.primary
                    ? "0 10px 40px rgba(45,16,15,0.25)"
                    : "0 4px 18px rgba(45,16,15,0.06)",
                }}
              >
                <div className="mb-3"><s.Icon className="w-10 h-10" /></div>
                <h3 className="font-extrabold text-[16px] mb-2 leading-tight">{s.title}</h3>
                <p className="text-[13px] leading-relaxed opacity-85 mb-3">{s.body}</p>
                <p
                  className="text-[12px] font-black inline-flex items-center gap-1"
                  style={{ color: s.primary ? GOLD : BLUE }}
                >
                  <span>اعرف المزيد</span>
                  <svg viewBox="0 0 16 16" className="w-3 h-3 rtl:-scale-x-100" fill="none" aria-hidden="true">
                    <path d="M3 8 H13 M10 5 L13 8 L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center font-extrabold mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}
          >
            كيف يعمل
          </h2>
          <div className="space-y-4">
            {[
              { n: 1, t: "اختر خطتك", b: "صندوق افتراضي Basic/Standard/Premium، أو خدمة لمرة واحدة (شحن، توثيق، شركة)." },
              { n: 2, t: "Form 1583 + الدفع", b: "نرسل لك Form 1583 من USPS. توقع أمام موثق في تونس. تدفع بالدينار عبر تحويل بنكي." },
              { n: 3, t: "تفعيل العنوان خلال 48 ساعة", b: "بمجرد استلام Form 1583 لدينا، يصبح عنوانك الأمريكي نشطاً. يمكنك تقديمه لـ Amazon، لبنكك، ولعملائك." },
              { n: 4, t: "نستلم، نمسح، نشحن", b: "كل رسالة أو طرد يُمسح ضوئياً ويظهر في لوحة تحكمك. تختار: شحن، فتح ومسح، تدوير، أو تخزين." },
              { n: 5, t: "شحن إلى تونس", b: "أسبوعي أو حسب الطلب. دمج الطرود لتخفيض الرسوم. تدفع رسوم البريد الحقيقية — بدون هوامش خفية." },
            ].map((s) => (
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

      {/* AUTHORITY */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-extrabold mb-5"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK }}
          >
            ليس مجرد صندوق بريد افتراضي آخر
          </h2>
          <p className="text-[15.5px] leading-relaxed max-w-2xl mx-auto mb-7" style={{ color: "rgba(45,16,15,0.78)" }}>
            5062 Lankershim Blvd, North Hollywood, كاليفورنيا. متجر فعلي حقيقي،
            فريق على الأرض، موثق كاليفورنيا حاضر، مسجل لدى USPS كـ CMRA.
            يمكنك زيارتنا إذا كنت في لوس أنجلوس.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[12px]">
            {[
              "مسجل لدى USPS كـ CMRA",
              "موثق كاليفورنيا في الموقع",
              "استلام UPS / FedEx / DHL / Amazon",
              "متجر مفتوح للعموم",
              "لوحة تحكم للمسح عبر الإنترنت",
              "شحن دولي",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full font-black"
                style={{ background: "#fff", color: INK, border: `1px solid ${INK}` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS FEATURE */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/ar/business"
            className="block p-8 sm:p-10 rounded-3xl transition-all hover:scale-[1.01]"
            style={{
              background: "linear-gradient(135deg, #F7E6C2 0%, #F0DBA9 100%)",
              boxShadow: "0 4px 18px rgba(45,16,15,0.10)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center text-right">
              <div>
                <p className="text-[12px] font-black mb-2" style={{ color: BLUE }}>
                  حل الأعمال
                </p>
                <h2
                  className="font-extrabold mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK }}
                >
                  شركة أمريكية أو تونسية، جاهزة في 14 يوماً.
                </h2>
                <p className="text-[14.5px] leading-relaxed mb-4" style={{ color: "rgba(45,16,15,0.78)" }}>
                  شركة أمريكية (Wyoming / Delaware / NM) <strong>أو</strong> شركة
                  تونسية SARL عبر مكتب KHIARI. EIN، هوية بصرية، موقع، مرافقة
                  Mercury و Stripe. متابعة شهرية اختيارية.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-baseline gap-1 justify-center md:justify-start mb-1" dir="ltr">
                  <span className="font-extrabold" style={{ fontSize: "44px", lineHeight: 1, color: INK }}>
                    4 000
                  </span>
                  <span className="font-black opacity-70" style={{ color: INK }}>TND</span>
                </div>
                <p className="text-[12px] opacity-70 mb-3" style={{ color: INK }}>مرة واحدة · بدون اشتراك</p>
                <span className="inline-flex items-center gap-2 font-black px-6 py-3 rounded-xl text-[13px]" style={{ background: INK, color: CREAM }}>
                  <span>عرض الحل</span>
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 rtl:-scale-x-100" fill="none" aria-hidden="true">
                    <path d="M3 8 H13 M10 5 L13 8 L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-5 sm:px-6 py-16 sm:py-20 text-center"
        style={{ background: CREAM }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}
          >
            البدء
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(45,16,15,0.75)" }}>
            ثلاث نقاط دخول حسب ما تحتاجه الآن.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ar/virtual-mailbox"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] transition-all hover:scale-[1.02]"
              style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
            >
              صندوق افتراضي
            </Link>
            <Link
              href="/ar/appel"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              احجز مكالمة
            </Link>
            <Link
              href="/ar/contact"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] border-2 transition-all hover:scale-[1.02]"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
