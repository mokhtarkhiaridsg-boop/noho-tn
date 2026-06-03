import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "ميزة المشغل التونسي-الأمريكي — لماذا NOHO يتفوق على doola/Stripe Atlas للتونسيين",
  description: "doola وStripe Atlas وFirstbase ينشئون LLC. NOHO يضيف: متجر LA حقيقي، مشغل تونسي-أمريكي على الأرض، مكتب KHIARI في تونس للحصول على رسالة مصداقية Mercury.",
  alternates: { canonical: "https://noho.tn/ar/blog/tunisian-american-operator-moat" },
};

export default function ArMoatPage() {
  return (
    <ArabicStub
      frHref="/blog/tunisian-american-operator-moat"
      frTitleAr="ميزة المشغل التونسي-الأمريكي"
    />
  );
}
