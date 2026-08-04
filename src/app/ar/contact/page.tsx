{/* TODO: native Arabic review */}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "اتصل بنا — NOHO Mailbox تونس",
  description:
    "ثلاث قنوات للتواصل معنا من تونس: واتساب (رد خلال ساعتين)، البريد الإلكتروني (رد خلال 24 ساعة)، نموذج الاتصال. متجر فعلي في لوس أنجلوس.",
  alternates: {
    canonical: "https://nohomailboxtunis.com/ar/contact",
    languages: {
      "fr-TN": "https://nohomailboxtunis.com/fr/contact",
      "ar-TN": "https://nohomailboxtunis.com/ar/contact",
    },
  },
  robots: { index: false, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GREEN = "#2D7A4A";

const IconChat = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M8 12 C8 9 10 7 13 7 L35 7 C38 7 40 9 40 12 L40 28 C40 31 38 33 35 33 L20 33 L12 40 L12 33 C10 33 8 31 8 28 Z" fill="#EBF2FA" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="18" cy="20" r="2" fill={BLUE} />
    <circle cx="24" cy="20" r="2" fill={BLUE} />
    <circle cx="30" cy="20" r="2" fill={BLUE} />
  </svg>
);

const IconEnvelope = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="12" width="36" height="24" rx="3" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M8 14 L24 26 L40 14" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const IconForm = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="10" y="6" width="28" height="36" rx="3" fill="#EBF2FA" stroke={INK} strokeWidth="2" />
    <path d="M16 14 H32 M16 20 H32 M16 26 H28" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 34 L20 38 L30 28" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ArabicContactPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 text-center" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-[11px] font-black px-3 py-1.5 rounded-full mb-5"
            style={{ background: INK, color: CREAM }}
          >
            ثلاث قنوات · رد مضمون
          </span>
          <h1
            className="font-extrabold leading-[1.15] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: INK }}
          >
            اتصل بنا
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            ثلاث طرق للتواصل معنا حسب قناتك المفضلة. كلها تؤدي إلى نفس
            مكالمة 30 دقيقة إن كان وضعك يستدعي ذلك.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href="https://wa.me/18185067744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%81%D8%B1%D9%8A%D9%82%20NOHO"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02] text-right"
            style={{ background: GREEN, color: "#fff", boxShadow: "0 8px 30px rgba(45,122,74,0.25)" }}
          >
            <div className="mb-3"><IconChat /></div>
            <h3 className="font-extrabold text-[20px] mb-2">واتساب</h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              القناة المفضلة لدى الجالية التونسية. متوسط الرد ساعتان خلال
              ساعات عمل LA (9 صباحاً - 6 مساءً بتوقيت لوس أنجلوس).
            </p>
            <p className="font-black text-[14px]" dir="ltr">+1 818 506 7744</p>
          </a>

          <a
            href="mailto:hello@nohomailbox.org?subject=%D8%B7%D9%84%D8%A8%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%85%D9%86%20nohomailboxtunis.com"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02] text-right"
            style={{ background: INK, color: CREAM, boxShadow: "0 8px 30px rgba(45,16,15,0.25)" }}
          >
            <div className="mb-3"><IconEnvelope /></div>
            <h3 className="font-extrabold text-[20px] mb-2">البريد الإلكتروني</h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              للطلبات المنظمة التي تتطلب رداً مكتوباً (امتثال، وثائق، عروض
              أسعار). رد خلال 24 ساعة.
            </p>
            <p className="font-black text-[14px]" dir="ltr">hello@nohomailbox.org</p>
          </a>

          <a
            href="https://nohomailbox.org/contact"
            className="block p-7 rounded-3xl transition-all hover:scale-[1.02] text-right"
            style={{ background: CREAM, color: INK, border: `1px solid ${INK}` }}
          >
            <div className="mb-3"><IconForm /></div>
            <h3 className="font-extrabold text-[20px] mb-2">نموذج الاتصال</h3>
            <p className="text-[13.5px] leading-relaxed opacity-90 mb-3">
              نموذج الاتصال الرسمي للموقع الرئيسي nohomailbox.org. رد
              خلال 48 ساعة. واتساب أفضل إن كان الأمر عاجلاً.
            </p>
            <p className="font-black text-[14px]" dir="ltr">nohomailbox.org/contact</p>
          </a>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl text-right" style={{ background: "#fff" }}>
              <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>
                المتجر الفعلي
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }} dir="ltr">
                5062 Lankershim Blvd<br />
                North Hollywood, CA 91601<br />
                USA
              </p>
              <p className="text-[12px] mt-3" style={{ color: "rgba(45,16,15,0.55)" }}>
                مفتوح للعموم. يمكنك زيارتنا إذا كنت تمر بلوس أنجلوس. إذا كنت
                في تونس، فالعنوان يمثّل ركيزة أمريكية لشركتك.
              </p>
            </div>
            <div className="p-6 rounded-2xl text-right" style={{ background: "#fff" }}>
              <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>
                ساعات الرد (بتوقيت تونس)
              </h3>
              <ul className="space-y-1.5 text-[14px] leading-relaxed" style={{ color: INK }}>
                <li><strong>واتساب :</strong> 17:00 - 03:00 (بتوقيت تونس)</li>
                <li><strong>البريد الإلكتروني :</strong> خلال 24 ساعة في أيام العمل</li>
                <li><strong>مكالمة فيديو :</strong> بحجز مسبق، 18:00 - 23:00 تونس</li>
              </ul>
              <p className="text-[12px] mt-3" style={{ color: "rgba(45,16,15,0.55)" }}>
                السعة محدودة بـ 4 مكالمات في اليوم. مهلة 3-7 أيام عند الامتلاء.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16 text-center" style={{ background: "#fff" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: INK }}
          >
            أسرع من ذلك — المكالمة المباشرة
          </h2>
          <p className="text-[15px] leading-relaxed mb-7" style={{ color: "rgba(45,16,15,0.75)" }}>
            إذا كنت تعرف بالفعل أنك تريد مناقشة شركة، أو المتابعة، أو بوابة
            الطلاب — احجز مكالمة 30 دقيقة مباشرة.
          </p>
          <Link
            href="/ar/appel"
            className="inline-block font-black px-10 py-5 rounded-2xl text-[16px] transition-all hover:scale-[1.02]"
            style={{ background: INK, color: CREAM, boxShadow: "0 6px 28px rgba(45,16,15,0.28)" }}
          >
            احجز مكالمة 30 دقيقة
          </Link>
        </div>
      </section>
    </>
  );
}
