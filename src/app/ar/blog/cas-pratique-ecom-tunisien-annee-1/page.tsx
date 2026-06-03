import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "كريم — مؤسس e-com تونسي السنة الأولى مع Solution Business (دراسة حالة مجهولة)",
  description: "تابع كريم من صفاقس، بائع Etsy للحرف التونسية، من الفكرة إلى نهاية السنة الأولى مع NOHO. إيرادات 34 500 دولار، ربح إجمالي 16 400 دولار، احتكاكات Stripe + Amazon + USPTO مدرجة.",
  alternates: { canonical: "https://noho.tn/ar/blog/cas-pratique-ecom-tunisien-annee-1" },
};

export default function ArCasPratiqueEcomPage() {
  return (
    <ArabicStub
      frHref="/blog/cas-pratique-ecom-tunisien-annee-1"
      frTitleAr="كريم — مؤسس e-com تونسي السنة الأولى"
    />
  );
}
