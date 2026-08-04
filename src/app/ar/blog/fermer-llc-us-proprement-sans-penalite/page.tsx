import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "إغلاق LLC الأمريكية بشكل صحيح — الإجراء في 8 خطوات بدون عقوبة IRS",
  description: "لا يمكنك ببساطة 'ترك LLC تموت'. عقوبة Form 5472 25K/سنة + رسوم وايومنغ السنوية تتراكم. الخطوات الـ 8: إنهاء المعاملات → تصريف Mercury → إغلاق Stripe → شهادة الحل WY → Form 966 IRS → آخر 5472 نهائي → أرشيف 7 سنوات.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/fermer-llc-us-proprement-sans-penalite" },
};

export default function ArFermerLlcPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/fermer-llc-us-proprement-sans-penalite"
      frTitleAr="إغلاق LLC الأمريكية بشكل صحيح"
    />
  );
}
