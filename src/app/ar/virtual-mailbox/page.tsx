/*
 * Arabic US-address page — rewritten 2026-09-30 and INDEXABLE (the rest of
 * /ar is still noindex). It mirrors /fr/virtual-mailbox line for line: the
 * same plans, the same prices from the /tarifs grid, the same Form 1583 rule.
 * The previous Arabic copy had drifted (scans at 3 TND, storage at 1 TND per
 * day) and repeated claims the French page no longer makes. If you change a
 * price or a rule here, change /fr/virtual-mailbox and the derja page too.
 *
 * Research (2026-09-30): Arabic searches for a US address from Tunisia are
 * mostly "عنوان أمريكي" / "شحن من أمريكا إلى تونس"; French leads for
 * commercial queries, Arabic is the secondary language.
 */
import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import PricingPending from "@/components/PricingPending";
import { localeAlternates } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "عنوان بريدي في الولايات المتحدة من تونس — الرسائل والطرود",
  description:
    "عنوان بريدي حقيقي في الولايات المتحدة (نورث هوليوود، كاليفورنيا) تديره من تونس: مسح الرسائل، استلام طرود Amazon وUPS وFedEx وDHL، وإعادة شحنها إلى تونس. نؤكد لك السعر قبل أي دفع.",
  alternates: localeAlternates("/virtual-mailbox", "ar", { ar: true }),
  openGraph: {
    title: "عنوان بريدي في الولايات المتحدة من تونس",
    description: "عنوان شارع حقيقي في كاليفورنيا، مسح الرسائل، استلام الطرود وإعادة شحنها إلى تونس. نؤكد السعر قبل أي دفع.",
    url: "https://nohomailboxtunis.com/ar/virtual-mailbox",
    locale: "ar_TN",
    type: "website",
    images: ["https://nohomailboxtunis.com/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const CREAM = "#F7E6C2";
const INK = "#2D100F";
const BLUE = "#337485";
const GOLD = "#f8c84a";

const ADDRESS = "⁦5062 Lankershim Blvd, North Hollywood, CA 91601⁩";


const FROM_TUNISIA = [
  { n: 1, t: "تسجّل على الإنترنت", b: "الاسم والبريد الإلكتروني والهاتف. تصلك رسالة للدخول إلى حسابك، ويتواصل معك الفريق لاختيار الباقة. استمارة التسجيل بالفرنسية." },
  { n: 2, t: "الهوية والدفع والتفعيل", b: "تشترط هيئة البريد الأمريكية (USPS) النموذج PS 1583 ووثيقتَي هوية. تواصل معنا لتأكيد التحقق من الهوية وخيارات الدفع والتفعيل من تونس قبل الدفع." },
  { n: 3, t: "نستلم رسائلك وطرودك", b: "رسائل وطرود USPS وUPS وFedEx وDHL وAmazon (باقة Free لا تقبل USPS). تظهر كل شحنة واصلة في حسابك." },
  { n: 4, t: "تقرّر من تونس", b: "مسح الرسائل، إعادة الشحن إلى تونس بسعر شركة النقل، تجميع الطرود حسب الباقة، التخزين أو الإتلاف." },
];

const BILLED_SEPARATELY = [
  "إعادة الشحن: سعر شركة النقل مع رسوم خدمة.",
  "المسح الضوئي وتخزين الطرود بما يتجاوز ما تشمله باقتك.",
  "الرسوم والضرائب الجمركية التونسية، وتُدفع عند الاستلام.",
];

const USES = [
  { t: "الشراء من Amazon US وeBay وShein", b: "كثير من هذه المتاجر لا يشحن إلى تونس. بعنوان أمريكي تطلب ما تريد، ثم نعيد شحنه إليك." },
  { t: "بريد شركتك وحساباتك", b: "عنوان شارع حقيقي لمراسلات شركتك الأمريكية. لكل بنك أو مزوّد دفع قواعده الخاصة بالعناوين، ولا يمكننا ضمان قبوله." },
  { t: "مراسلات الإدارات والشركاء", b: "مصلحة الضرائب (IRS) والبنوك ومزوّدو البرمجيات والشركاء: تصلنا مراسلاتك، ونمسحها ضوئياً عند الطلب، ويصلك إشعار بها." },
  { t: "SEVIS وبريد الجامعة", b: "للطلاب: يصل ملف I-20 إلى عنوانك هنا ونمسحه ضوئياً، ويبقى بريد الجامعة مُداراً بين الفصول الدراسية." },
  { t: "المجلات والاشتراكات الورقية", b: "تصل الاشتراكات الأمريكية إلى عنوانك، ثم مسح أو إعادة شحن حسب اختيارك." },
  { t: "عنوان ثابت لا يتغيّر", b: "عنوان لا يتغيّر عند انتقالك: مفيد لمراسلات IRS أو ITIN أو الاشتراكات. لا يعوّض عنوان السكن عندما تشترط جهة ما عنوان إقامة." },
];

const PROCESS = [
  { n: 1, t: "تطلب على الإنترنت", b: `عنوان التسليم: ${"⁦5062 Lankershim Blvd, Suite [رقم صندوقك], North Hollywood, CA 91601⁩"}.` },
  { n: 2, t: "يصل الطرد إلى محلّنا", b: "نستلمه فعلياً (UPS وFedEx وUSPS وDHL وAmazon)، ويصلك إشعار في حسابك." },
  { n: 3, t: "تختار ما نفعله", b: "إعادة شحن، فتح ومسح المحتوى، تخزين، إتلاف أو إرجاع، من حسابك." },
  { n: 4, t: "تجميع الطرود (اختياري)", b: "عدة طرود؟ نجمعها في شحنة واحدة لتخفيض تكلفة الشحن الدولي." },
  { n: 5, t: "الشحن إلى تونس", b: "USPS Priority Mail International أو UPS أو FedEx أو DHL Express: تختار بين السعر والسرعة. المُهل تقديرية من شركات النقل، دون احتساب التخليص الجمركي ودون ضمان." },
];

const FAQ = [
  { q: "كم تكلّف إعادة الشحن إلى تونس؟", a: "سعر شركة النقل (USPS أو UPS أو FedEx أو DHL) مع رسوم خدمة يؤكدها لك الفريق قبل الشحن. تقديرات شركات النقل لطرد وزنه 1 كغ: نحو 35 إلى 50 دولاراً عبر USPS Priority Mail International، ونحو 80 دولاراً عبر UPS، ونحو 110 دولارات عبر DHL Express. يتحدد السعر الدقيق حسب الوزن والأبعاد والخدمة، وتراه قبل تأكيد الشحن." },
  { q: "كم يستغرق وصول الطرد إلى تونس؟", a: "يصل Amazon إلى محلّنا عادة خلال 1 إلى 3 أيام. إلى تونس، المُهل التقديرية لشركات النقل نحو 2 إلى 5 أيام عمل بالشحن السريع (DHL وUPS وFedEx)، ومن أسبوع إلى أسبوعين عبر USPS، يُضاف إليها وقت التخليص الجمركي في تونس. لا توجد مهلة مضمونة." },
  { q: "ماذا عن الديوانة التونسية؟", a: "قد تفرض الديوانة التونسية رسوماً وضرائب عند الوصول حسب طبيعة المحتوى وقيمته. تُدفع عند الاستلام في تونس ولا تدخل أبداً في أسعارنا. نصرّح دائماً بالقيمة الحقيقية في وثائق الجمارك. القواعد الرسمية منشورة على douane.gov.tn." },
  { q: "هل يجب أن أسافر إلى أمريكا لفتح الصندوق؟", a: "تشترط USPS النموذج PS 1583 ووثيقتَي هوية، إحداهما بصورة (جواز السفر الأجنبي مقبول). وفق قواعد USPS ‏(DMM 508.1.8.3)، يتم التوقيع بحضور موظف من مركز استلام البريد، حضورياً أو عبر فيديو مباشر، أو أمام كاتب عدل معتمد في الولايات المتحدة؛ كاتب العدل التونسي لا يستوفي هذا الشرط. تواصل معنا لتأكيد التحقق من الهوية وخيارات الدفع والتفعيل من تونس قبل الدفع." },
  { q: "متى يُفعَّل صندوقي؟", a: "بمجرد توقيع النموذج 1583 والتحقق منه، وفحص وثيقتَي الهوية، واستلام أول دفعة. عندها تحصل على رقم صندوقك. تواصل معنا لتأكيد التحقق من الهوية وخيارات الدفع والتفعيل من تونس قبل الدفع." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ar",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "الرئيسية", url: "https://nohomailboxtunis.com/ar" },
  { name: "عنوان بريدي في الولايات المتحدة", url: "https://nohomailboxtunis.com/ar/virtual-mailbox" },
]);

export default function ArabicVirtualMailboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-10" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[13px] font-black mb-3" style={{ color: BLUE }}>
            عنوان بريدي في الولايات المتحدة
          </p>
          <h1 className="font-extrabold tracking-tight mb-5" style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", color: INK, lineHeight: 1.25 }}>
            عنوانك البريدي الحقيقي في الولايات المتحدة، تديره من تونس
          </h1>
          <p className="text-[16.5px] leading-loose mb-6" style={{ color: "rgba(45,16,15,0.8)" }}>
            عنوان شارع حقيقي: {ADDRESS} مع رقم صندوقك. نستلم رسائلك وطرودك في محلّنا، وتظهر
            كل شحنة واصلة في حسابك على الإنترنت، وأنت تقرّر: مسح ضوئي، إعادة شحن إلى تونس،
            تخزين أو إتلاف.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 mb-7 text-[13px] font-bold" style={{ color: INK }}>
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>السعر يُؤكَّد قبل أي دفع</li>
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>التحقق من الهوية إلزامي حسب قواعد USPS</li>
            <li className="px-3 py-1.5 rounded-full" style={{ background: CREAM }}>إعادة الشحن بسعر شركة النقل</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              data-track="signup_click"
              data-track-from="ar_virtual_mailbox_hero"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px]"
              style={{ background: INK, color: CREAM }}
            >
              أرسل طلب الفتح
            </Link>
            <WhatsAppCTA intent="adresse">سؤال؟ واتساب</WhatsAppCTA>
          </div>
        </div>
      </section>

      <PricingPending locale="ar" id="forfaits" />

      {/* FROM TUNISIA */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.4rem)", color: INK }}>
            كيف تعمل الخدمة من تونس
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {FROM_TUNISIA.map((s) => (
              <li key={s.n} className="flex gap-4 p-5 rounded-2xl text-right" style={{ background: "#fff" }}>
                <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-extrabold" style={{ background: INK, color: CREAM }} aria-hidden="true">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-black text-[16px] mb-1" style={{ color: INK }}>{s.t}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.8)" }}>{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="p-6 rounded-3xl text-right" style={{ background: "#fff" }}>
            <h3 className="font-black text-[17px] mb-3" style={{ color: INK }}>ما يُدفع على حدة</h3>
            <p className="text-[13.5px] mb-3" style={{ color: "rgba(45,16,15,0.7)" }}>نؤكد لك المبالغ كتابياً قبل أي دفع.</p>
            <ul className="space-y-2 text-[14.5px] leading-relaxed list-disc pr-5" style={{ color: "rgba(45,16,15,0.85)" }}>
              {BILLED_SEPARATELY.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="text-[13.5px] mt-4" style={{ color: "rgba(45,16,15,0.65)" }}>
              للطرود التي تشتريها على الإنترنت، اطّلع أيضاً على{" "}
              <Link href="/ar/reexpedition-colis-usa-tunisie" className="underline font-bold">الشحن من أمريكا إلى تونس</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* USES */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}>
            ما الذي يمكنك فعله بعنوان أمريكي حقيقي
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USES.map((u) => (
              <div key={u.t} className="p-6 rounded-2xl text-right" style={{ background: CREAM }}>
                <h3 className="font-black text-[15.5px] mb-2" style={{ color: INK }}>{u.t}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.8)" }}>{u.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE PROCESS */}
      <section className="px-5 sm:px-6 py-16 sm:py-20" style={{ background: CREAM }} id="packages">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-extrabold mb-10" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: INK }}>
            كيف يصل طرد Amazon إلى تونس
          </h2>
          <div className="space-y-4">
            {PROCESS.map((s) => (
              <div key={s.n} className="flex gap-4 p-5 rounded-2xl" style={{ background: "#fff" }}>
                <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-[19px]" style={{ background: INK, color: CREAM }} aria-hidden="true">
                  {s.n}
                </div>
                <div className="text-right flex-1">
                  <h3 className="font-black text-[16px] mb-1" style={{ color: INK }}>{s.t}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(45,16,15,0.8)" }}>{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-6 py-14 sm:py-16" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-extrabold mb-8 text-center" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: INK }}>
            أسئلة شائعة
          </h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="p-4 rounded-xl text-right" style={{ background: CREAM }}>
                <summary className="font-black text-[15.5px] cursor-pointer" style={{ color: INK }}>{f.q}</summary>
                <p className="text-[14px] leading-relaxed mt-3" style={{ color: "rgba(45,16,15,0.85)" }}>{f.a}</p>
              </details>
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
          <p className="text-[15.5px] leading-relaxed mb-8" style={{ color: "rgba(45,16,15,0.78)" }}>
            أرسل طلبك على الإنترنت دون دفع: يؤكد الفريق أهليتك والباقة والسعر قبل أي فوترة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inscription"
              data-track="signup_click"
              data-track-from="ar_virtual_mailbox_footer"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px]"
              style={{ background: INK, color: CREAM }}
            >
              أرسل طلب الفتح
            </Link>
            <Link
              href="/ar/appel"
              className="inline-block font-black px-8 py-4 rounded-2xl text-[15px] border-2"
              style={{ background: "transparent", color: INK, borderColor: INK }}
            >
              احجز مكالمة
            </Link>
          </div>
          <p className="text-[13px] mt-6" style={{ color: "rgba(45,16,15,0.6)" }}>
            <Link href="/ar/contact" className="underline font-black">تواصل معنا</Link>
          </p>
        </div>
      </section>
    </>
  );
}
