import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "قراءة كشف Mercury وتحضير Form 5472 الجزء الرابع — دليل عملي",
  description: "Form 5472 الجزء IV يطلب الإفصاح عن المعاملات بينك وبين LLC. كيف تستخرج من CSV حساب Mercury المبالغ الصحيحة للأسطر 16 (المبالغ المُقرضة) و17 (المبالغ المُقترضة).",
  alternates: { canonical: "https://noho.tn/ar/blog/mercury-statement-form-5472-partie-iv" },
};

export default function ArMercuryStatementPage() {
  return (
    <ArabicStub
      frHref="/blog/mercury-statement-form-5472-partie-iv"
      frTitleAr="قراءة كشف Mercury وتحضير Form 5472 الجزء الرابع"
    />
  );
}
