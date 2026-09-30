/*
 * Arabic twin of /fr/reexpedition-colis-usa-tunisie (2026-09-30). Indexable,
 * unlike most of /ar. Same template, same facts — keep the two COPY objects
 * in step. Targets "شحن من أمريكا إلى تونس" / "عنوان أمريكي للشحن", the
 * Arabic phrasings that returned real results in the SERP research.
 */
import type { Metadata } from "next";
import Link from "next/link";
import ReexpeditionPage, { faqJsonLd, serviceJsonLd, type ReexpeditionCopy } from "@/components/landing/ReexpeditionPage";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const URL = "https://nohomailboxtunis.com/ar/reexpedition-colis-usa-tunisie";
const FR_URL = "https://nohomailboxtunis.com/fr/reexpedition-colis-usa-tunisie";

export const metadata: Metadata = {
  title: "الشحن من أمريكا إلى تونس — عنوان أمريكي حقيقي لطرودك",
  description:
    "اطلب من Amazon وeBay وأي متجر أمريكي على عنوانك لدى NOHO Mailbox في كاليفورنيا. نستلم طرودك ونعيد شحنها إلى تونس عبر USPS أو UPS أو FedEx أو DHL بسعر شركة النقل مع 4 دنانير رسوم معالجة.",
  alternates: { canonical: URL, languages: { fr: FR_URL, ar: URL, "x-default": FR_URL } },
  openGraph: {
    title: "الشحن من أمريكا إلى تونس",
    description: "عنوان أمريكي حقيقي لمشترياتك على الإنترنت، مع إعادة شحنها إلى تونس بسعر شركة النقل.",
    url: URL,
    locale: "ar_TN",
    type: "website",
    images: ["https://nohomailboxtunis.com/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const COPY: ReexpeditionCopy = {
  lang: "ar",
  kicker: "طرود من أمريكا إلى تونس",
  h1: "الشحن من أمريكا إلى تونس بعنوان أمريكي حقيقي",
  intro:
    "اطلب من Amazon أو eBay أو أي موقع أمريكي على عنوانك لدى NOHO Mailbox في نورث هوليوود (كاليفورنيا). نستلم الطرد في محلّنا، ويظهر في حسابك على الإنترنت، ثم نعيد شحنه إلى تونس مع شركة النقل التي تختارها وبسعرها.",
  chips: ["عنوان شارع حقيقي وليس صندوق بريد", "USPS · UPS · FedEx · DHL", "سعر الشحن يظهر قبل الإرسال"],
  ctaSignup: "افتح عنواني الأمريكي",
  ctaWhatsApp: "اطرح سؤالك على واتساب",
  stepsTitle: "كيف تعمل الخدمة",
  steps: [
    { t: "تفتح عنوانك", b: "تسجيل على الإنترنت (الاستمارة بالفرنسية). لطرود UPS وFedEx وDHL وAmazon تكفي باقة Free؛ ولاستلام USPS والرسائل أيضاً اختر باقة مدفوعة (تشترط USPS النموذج 1583)." },
    { t: "تطلب مشترياتك", b: "عنوان التسليم: ⁦5062 Lankershim Blvd, Suite [رقمك], North Hollywood, CA 91601⁩ مع اسمك كما هو." },
    { t: "نستلم طردك", b: "يصل فعلياً إلى محلّنا ويظهر في حسابك مع صورة لغلافه الخارجي." },
    { t: "تختار طريقة الشحن", b: "شركة النقل والخدمة، وتجميع عدة طرود إذا كانت باقتك تشمله. ترى سعر الشحن قبل التأكيد." },
    { t: "ينطلق الطرد إلى تونس", b: "نُعدّ الوثائق الجمركية بالقيمة الحقيقية ويصلك رقم التتبع. الرسوم الجمركية إن وُجدت تُدفع عند الوصول إلى تونس." },
  ],
  costTitle: "ما الذي تدفعه",
  costRows: [
    { item: "العنوان", price: "⁨Free⁩ مجاناً حسب الاستعمال، ⁨Basic⁩ بـ35، ⁨Standard⁩ بـ75، ⁨Premium⁩ بـ150 ديناراً شهرياً" },
    { item: "إعادة الشحن عند الطلب", price: "سعر شركة النقل + 4 دنانير رسوم معالجة لكل شحنة" },
    { item: "تجميع الطرود", price: "مشمول في Standard وPremium" },
    { item: "التخزين بعد المدة المشمولة", price: "6 دنانير للطرد في الأسبوع" },
    { item: "الديوانة التونسية", price: "رسوم وضرائب محتملة تدفعها عند الوصول، ولا تدخل أبداً في أسعارنا" },
  ],
  costNote: (
    <>
      تُفوتر الباقات بالدينار التونسي. لإعادة الشحن الأسبوعية والعاجلة أسعار خاصة، مفصّلة في{" "}
      <Link href="/tarifs" className="underline font-bold">صفحة الأسعار</Link>. لدفع مشترياتك من المواقع الأمريكية،
      للبطاقة التكنولوجية الدولية سقف سنوي يحدّده البنك المركزي التونسي.
    </>
  ),
  carriersTitle: "شركات النقل والمُهل التقديرية",
  carriersHead: ["شركة النقل", "المهلة التقديرية", "تقدير لطرد 1 كغ"],
  carriers: [
    { name: "USPS Priority Mail International", time: "من أسبوع إلى أسبوعين", price: "نحو 35 إلى 50 دولاراً" },
    { name: "UPS", time: "2 إلى 5 أيام عمل", price: "نحو 80 دولاراً" },
    { name: "FedEx", time: "2 إلى 5 أيام عمل", price: "حسب عرض السعر" },
    { name: "DHL Express", time: "2 إلى 5 أيام عمل", price: "نحو 110 دولارات" },
  ],
  carriersNote:
    "مُهل وأسعار تقديرية من شركات النقل، دون احتساب التخليص الجمركي في تونس. يتحدد السعر الفعلي حسب الوزن والأبعاد والخدمة، وتراه قبل التأكيد. لا توجد مهلة مضمونة.",
  notTitle: "ما لا نقوم به",
  notList: [
    "ليس لدينا مستودع في تونس: يُستلم طردك ويُشحن من محلّنا في نورث هوليوود.",
    "لا نتولّى التخليص الجمركي ولا ندفع الرسوم نيابة عنك.",
    "لا نصرّح أبداً بقيمة أقل من القيمة الحقيقية.",
    "بعض المواد لا يمكن شحنها (المواد الخطرة، والمواد الممنوع توريدها): كل شحنة تمرّ بفحص قبل عرض السعر.",
    "لا توجد مهلة تسليم مضمونة.",
  ],
  faqTitle: "أسئلة شائعة",
  faq: [
    { q: "لماذا أحتاج عنواناً في أمريكا؟", a: "كثير من البائعين الأمريكيين لا يشحنون إلى تونس. بعنوان في الولايات المتحدة تطلب كأي زبون أمريكي، ثم نعيد شحن الطرد إليك." },
    { q: "هل أحتاج إلى اشتراك؟", a: "لا. باقة Free تقبل طرود UPS وFedEx وDHL وAmazon دون اشتراك، وتُخصم كل خدمة من محفظتك المسبقة الدفع. لاستلام USPS والرسائل تحتاج إلى باقة مدفوعة." },
    { q: "هل أحتاج إلى النموذج 1583؟", a: "للباقات المدفوعة نعم: تشترطه USPS مع وثيقتَي هوية، ويجب أن يتم التوقيع أمام موظف من NOHO Mailbox أو أمام كاتب عدل معتمد في الولايات المتحدة (العدل التونسي غير مقبول). باقة Free، دون USPS، لا تشترط النموذج 1583، لكن التحقق من الهوية يبقى ضرورياً. راسلنا لمعرفة الخطوات." },
    { q: "كم يكلّف شحن طرد إلى تونس؟", a: "سعر شركة النقل مع 4 دنانير رسوم معالجة لكل شحنة. على سبيل التقدير لطرد 1 كغ: نحو 35 إلى 50 دولاراً عبر USPS Priority Mail International، ونحو 80 دولاراً عبر UPS، ونحو 110 دولارات عبر DHL Express. تجميع عدة طرود في شحنة واحدة يخفّض المجموع غالباً." },
    { q: "ماذا عن الديوانة التونسية؟", a: "قد تفرض الديوانة التونسية رسوماً وضرائب عند الوصول حسب طبيعة المحتوى وقيمته، وتدفعها عند الاستلام. القواعد الرسمية منشورة على douane.gov.tn." },
    { q: "كم مدة الاحتفاظ بطردي؟", a: "30 يوماً مع Basic و60 مع Standard و90 مع Premium، ثم 6 دنانير للطرد في الأسبوع. بالنسبة لباقة Free يوضّح لك الفريق المدة عند التسجيل." },
  ],
  endTitle: "جاهز للطلب من أمريكا؟",
  endBody: "افتح عنوانك على الإنترنت، أو اطرح سؤالك على واتساب قبل الطلب.",
  endSecondary: { href: "/ar/virtual-mailbox", label: "باقات العنوان" },
  trackFrom: "ar_reexpedition",
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "الرئيسية", url: "https://nohomailboxtunis.com/ar" },
  { name: "الشحن من أمريكا إلى تونس", url: URL },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(COPY, URL)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(COPY)) }} />
      <ReexpeditionPage copy={COPY} />
    </>
  );
}
