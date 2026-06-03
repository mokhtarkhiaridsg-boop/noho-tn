{/* TODO: native Arabic review */}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "احجز مكالمة — 30 دقيقة مع فريق NOHO",
  description:
    "30 دقيقة فيديو مع فريق NOHO من جانب الجالية التونسية. تأطير صريح لوضعك — حل الأعمال (4 000 دينار)، المتابعة الشهرية (1 200 دينار شهرياً)، أو لا شيء من ذلك. مجاني، بدون التزام.",
  alternates: {
    canonical: "https://noho.tn/ar/appel",
    languages: {
      "fr-TN": "https://noho.tn/appel",
      "ar-TN": "https://noho.tn/ar/appel",
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
  { minutes: "0-5", title: "التعريف", body: "نتعرف. تخبرني في 60 ثانية من أنت، أين تقيم، وماذا تعمل." },
  { minutes: "5-12", title: "الاستكشاف", body: "أطرح عليك أسئلة التشخيص بتفصيل. إذا كنت قد أكملته عبر الإنترنت، نقفز إلى التفاصيل." },
  { minutes: "12-19", title: "توصية الهيكل", body: "أوصيك بصدق: حل الأعمال، المتابعة، أو لا شيء. Wyoming مقابل Delaware مقابل New Mexico حسب حالتك." },
  { minutes: "19-24", title: "إستراتيجية البنوك", body: "Mercury مقابل Relay مقابل Wise حسب ملفك. إذا كان لديك تاريخ رفض Mercury، نناقش الخطة البديلة." },
  { minutes: "24-27", title: "الجدول الزمني", body: "تخرج وأنت تعرف بالضبط متى ستأتي كل خطوة إذا طلبت حل الأعمال اليوم." },
  { minutes: "27-30", title: "أسئلة وأجوبة", body: "ثلاث دقائق للأسئلة التي لم تطرح طبيعياً. غالباً: الوضع الضريبي التونسي (إحالة إلى محاسب ضرائب تونسي)، CIN، الدفع." },
];

const FIVE_THINGS = [
  "إذا كانت الشركة الأمريكية منطقية لوضعك — نعم، لا، أو لاحقاً",
  "أي ولاية تأسيس متناسقة مع نشاطك (Wyoming، Delaware، New Mexico) — ولماذا ليس الأخرى",
  "أي تسلسل بنكي واقعي لملفك (Mercury مباشر، خطة Relay البديلة، Wise وسيط)",
  "كم تكلفه فعلاً كل شيء في السنة الأولى والثانية",
  "ما الوثائق التونسية اللازمة وأيها ليست لازمة",
];

const HONEST_DISQUAL = [
  { profile: "مؤسس SaaS بمسار رأس مال مخاطر", why: "إذا كنت ستجمع تمويلاً Seed/Series A خلال 18 شهراً، الهيكل المناسب هو Delaware C-Corp — وليس LLC. لن أبيع لك الهيكل الخاطئ لتحقيق رقم." },
  { profile: "مقيم أمريكي", why: "NOHO مصمم لغير المقيمين. إذا كنت مقيماً في الولايات المتحدة، أسس LLC مباشرة عبر Secretary of State لولايتك (50-300 دولاراً)." },
  { profile: "ما قبل الإيرادات — مرحلة الفكرة", why: "إذا لم يكن لديك بعد عميل أول بالدولار/اليورو، فإن حل الأعمال تكلفة بدون مقابل. ابحث عن أول فاتورة، ثم عد." },
  { profile: "البحث عن التهرب الضريبي", why: "NOHO يعمل فقط من هيكل قانوني ومُعلن. إذا كان الهدف عدم التصريح في تونس، فأنا لست المُحاور الصحيح." },
];

export default function ArabicAppelPage() {
  return (
    <>
      <section className="px-5 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-12" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <nav className="text-[12px] mb-5 opacity-60" style={{ color: INK }}>
            <Link href="/ar" className="hover:underline">الرئيسية</Link> · <span>احجز مكالمة</span>
          </nav>
          <span className="inline-block text-[11px] font-black px-3 py-1.5 rounded-full mb-5" style={{ background: INK, color: CREAM }}>
            30 دقيقة · فيديو · مجاني · بدون التزام
          </span>
          <h1
            className="font-extrabold leading-[1.15] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: INK }}
          >
            ثلاثون دقيقة مع <span style={{ color: BLUE }}>فريق NOHO</span>
          </h1>
          <p className="text-[16px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(45,16,15,0.78)" }}>
            فريق NOHO من جانب الجالية التونسية. متجر فعلي في لوس أنجلوس (5062
            Lankershim). المكالمة مجانية، بدون التزام، وهدفها الوحيد إخبارك بصدق
            إن كانت الشركة الأمريكية تناسب وضعك.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-12 sm:py-14" style={{ background: "#fff" }}>
        <div className="max-w-2xl mx-auto">
          <div className="p-7 sm:p-10 rounded-3xl text-center" style={{ background: CREAM, boxShadow: "0 8px 40px rgba(45,16,15,0.10)" }}>
            <p className="text-[12px] font-black mb-3" style={{ color: BLUE }}>
              اختر قناة
            </p>
            <h2 className="font-extrabold mb-5" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK }}>
              احجز الآن
            </h2>
            <p className="text-[14px] leading-relaxed mb-7 max-w-md mx-auto" style={{ color: "rgba(45,16,15,0.7)" }}>
              ثلاث خيارات حسب قناتك المفضلة. كلها تؤدي إلى نفس مكالمة 30 دقيقة.
            </p>

            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <a
                href="https://wa.me/18185067744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9%2030%20%D8%AF%D9%82%D9%8A%D9%82%D8%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-black px-6 py-4 rounded-2xl text-[14.5px] transition-all hover:scale-[1.02]"
                style={{ background: GREEN, color: "#fff", boxShadow: "0 6px 24px rgba(45,122,74,0.32)" }}
              >
                WhatsApp — مفضّل (رد خلال ساعتين)
              </a>
              <a
                href="mailto:hello@nohomailbox.org?subject=%D8%AD%D8%AC%D8%B2%20%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9%2030%20%D8%AF%D9%82%D9%8A%D9%82%D8%A9"
                className="font-black px-6 py-4 rounded-2xl text-[14.5px] transition-all hover:scale-[1.02]"
                style={{ background: INK, color: CREAM }}
              >
                البريد الإلكتروني — رد خلال 24 ساعة
              </a>
              <a
                href="https://nohomailbox.org/contact"
                className="font-black px-6 py-4 rounded-2xl text-[14.5px] border-2 transition-all hover:scale-[1.02]"
                style={{ background: "transparent", color: INK, borderColor: INK }}
              >
                نموذج الاتصال
              </a>
            </div>

            <p className="text-[12px] mt-7 max-w-md mx-auto" style={{ color: "rgba(45,16,15,0.55)" }}>
              لمزيد من التفاصيل، <Link href="/ar/contact" className="underline font-black">اطلع على صفحة الاتصال</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-2 text-right" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK }}>
            كيف تجري الـ 30 دقيقة
          </h2>
          <p className="text-[14px] mb-7 text-right" style={{ color: "rgba(45,16,15,0.65)" }}>
            كل دقيقة لها موضوع. المكالمة ليست عرضاً ترويجياً، بل استشارة منظمة.
          </p>
          <div className="space-y-3">
            {CALL_SEGMENTS.map((seg) => (
              <div key={seg.minutes} className="p-5 rounded-2xl flex gap-4" style={{ background: "#fff" }}>
                <div
                  className="flex-shrink-0 font-black text-[12px] px-3 py-1.5 rounded-lg h-fit"
                  style={{ background: INK, color: CREAM }}
                  dir="ltr"
                >
                  {seg.minutes}
                </div>
                <div className="text-right flex-1">
                  <h3 className="font-black text-[15.5px] mb-1" style={{ color: INK }}>{seg.title}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(45,16,15,0.78)" }}>{seg.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto text-right">
          <p className="text-[12px] font-black mb-3" style={{ color: BLUE }}>
            ما ستخرج به
          </p>
          <h2 className="font-extrabold mb-6" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK }}>
            خمسة أشياء ستعرفها في نهاية المكالمة
          </h2>
          <ol className="space-y-3 list-none p-0">
            {FIVE_THINGS.map((item, idx) => (
              <li key={idx} className="p-4 rounded-xl flex items-start gap-3" style={{ background: CREAM, color: INK }}>
                <span
                  className="font-black text-[14px] flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: INK, color: CREAM }}
                  dir="ltr"
                >
                  {idx + 1}
                </span>
                <span className="text-[14.5px] leading-relaxed pt-0.5 flex-1">{item}</span>
              </li>
            ))}
          </ol>
          <p className="text-[13px] mt-5" style={{ color: "rgba(45,16,15,0.6)" }}>
            ستخرج بهذه الإجابات الخمس حتى لو لم تشترِ شيئاً من NOHO.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: INK, color: CREAM }}>
        <div className="max-w-3xl mx-auto text-right">
          <p className="text-[12px] font-black mb-3" style={{ color: GOLD }}>
            الصراحة المهنية
          </p>
          <h2 className="font-extrabold mb-2" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
            متى لا أقبل المكالمة
          </h2>
          <p className="text-[14px] mb-7 opacity-75">
            أربعة ملفات أفضل توجيهك فيها — حتى لا أضيع 30 دقيقة من وقتك.
          </p>
          <div className="space-y-3">
            {HONEST_DISQUAL.map((d, idx) => (
              <div key={idx} className="p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.08)", borderRight: `3px solid ${RED}` }}>
                <p className="font-black text-[15px] mb-1">{d.profile}</p>
                <p className="text-[13.5px] leading-relaxed opacity-90">{d.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-8" style={{ background: "#f5f1ea" }}>
        <div className="max-w-3xl mx-auto text-[11px] leading-relaxed text-right" style={{ color: "rgba(45,16,15,0.55)" }}>
          <p>
            <strong>معلومات عامة، وليست استشارة ضريبية.</strong> المكالمة
            استشارة هيكلية. لا تحل محل استشارة مع محاسب ضرائب تونسي معتمد،
            أو CPA أمريكي، أو محامي. NOHO Mailbox ليس مكتب محاماة، ولا CPA،
            ولا مستشار قانوني معتمد. موافقات Mercury و Stripe وأي مزود
            خارجي ليست مضمونة.
          </p>
        </div>
      </section>
    </>
  );
}
