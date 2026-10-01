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
    "اطلب من Amazon وeBay وأي متجر أمريكي على عنوان لدى NOHO Mailbox في كاليفورنيا. نستلم طرودك ونعيد شحنها إلى تونس عبر USPS أو UPS أو FedEx أو DHL بسعر شركة النقل. رسوم الخدمة والأهلية تُؤكَّد قبل أي دفع.",
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
  ctaSignup: "أرسل طلب الفتح",
  ctaWhatsApp: "اطرح سؤالك على واتساب",
  stepsTitle: "كيف تعمل الخدمة",
  steps: [
    { t: "تؤكد أهليتك أولاً", b: "ترسل طلبك على الإنترنت دون دفع (الاستمارة بالفرنسية). يتحقق الفريق من إمكانية فتح صندوقك من تونس (النموذج 1583 ووثائق الهوية) ويؤكد لك كتابياً الباقة والسعر والعملة." },
    { t: "تطلب مشترياتك", b: "عنوان التسليم: ⁦5062 Lankershim Blvd, Suite [رقمك], North Hollywood, CA 91601⁩ مع اسمك كما هو." },
    { t: "نستلم طردك", b: "يصل فعلياً إلى محلّنا ويظهر في حسابك مع صورة لغلافه الخارجي." },
    { t: "تختار طريقة الشحن", b: "شركة النقل والخدمة، وتجميع عدة طرود إذا كانت باقتك تشمله. ترى سعر الشحن قبل التأكيد." },
    { t: "ينطلق الطرد إلى تونس", b: "نُعدّ الوثائق الجمركية بالقيمة الحقيقية ويصلك رقم التتبع. الرسوم الجمركية إن وُجدت تُدفع عند الوصول إلى تونس." },
  ],
  costTitle: "ما الذي تدفعه",
  costRows: [
    { item: "العنوان", price: "الباقة والسعر يُؤكَّدان كتابياً قبل أي دفع" },
    { item: "إعادة الشحن", price: "سعر شركة النقل مع رسوم خدمة تُؤكَّد قبل الشحن" },
    { item: "التخزين بعد المدة المشمولة", price: "حسب باقتك، ويُؤكَّد قبل أي دفع" },
    { item: "الديوانة التونسية", price: "رسوم وضرائب محتملة تدفعها عند الوصول، ولا تدخل أبداً في أسعارنا" },
  ],
  costNote: (
    <>
      لا دفع قبل تأكيد أهليتك. لدفع مشترياتك من المواقع الأمريكية، للبطاقة التكنولوجية الدولية سقف سنوي يحدّده البنك المركزي التونسي.
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
    { q: "هل أحتاج إلى اشتراك؟", a: "نؤكد لك كتابياً الخيارات المتاحة لتونس وأسعارها وعملتها قبل أي دفع. لا يُفوتر أي شيء قبل تأكيد أهليتك." },
    { q: "هل أحتاج إلى النموذج 1583؟", a: "لاستلام الرسائل والطرود باسمك، نعم: تشترط USPS النموذج PS 1583 ووثيقتَي هوية، إحداهما بصورة (جواز السفر الأجنبي مقبول). حالياً توقّع NOHO Mailbox هذا النموذج أمام موظف في محلّنا بنورث هوليوود. تسمح قواعد USPS أيضاً بالتوقيع عبر فيديو مباشر أو أمام كاتب عدل معتمد في الولايات المتحدة، لكننا لا نوفّر هذين الخيارين بعد، وكاتب العدل التونسي غير مقبول. من تونس، اطلب تأكيد أهليتك قبل الدفع." },
    { q: "كم يكلّف شحن طرد إلى تونس؟", a: "سعر شركة النقل مع رسوم خدمة يؤكدها لك الفريق قبل الشحن. تقديرات شركات النقل لطرد 1 كغ: نحو 35 إلى 50 دولاراً عبر USPS Priority Mail International، ونحو 80 دولاراً عبر UPS، ونحو 110 دولارات عبر DHL Express. تجميع عدة طرود في شحنة واحدة يخفّض المجموع غالباً." },
    { q: "ماذا عن الديوانة التونسية؟", a: "قد تفرض الديوانة التونسية رسوماً وضرائب عند الوصول حسب طبيعة المحتوى وقيمته، وتدفعها عند الاستلام. القواعد الرسمية منشورة على douane.gov.tn." },
    { q: "كم مدة الاحتفاظ بطردي؟", a: "مدة التخزين المجانية والسعر بعدها يتوقفان على باقتك، ويؤكدهما لك الفريق كتابياً قبل أي دفع." },
  ],
  endTitle: "جاهز للطلب من أمريكا؟",
  endBody: "أرسل طلبك دون دفع، أو اطرح سؤالك على واتساب قبل الطلب.",
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
