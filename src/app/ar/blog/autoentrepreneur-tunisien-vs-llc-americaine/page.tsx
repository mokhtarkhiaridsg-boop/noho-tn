import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "نظام المستثمر المستقل التونسي مقابل LLC أمريكية — الحساب الصادق",
  description: "AE تونسي بـ 1500 دينار سنوياً مقابل LLC أمريكية بـ 4000 دينار مرة واحدة + 60 دولار سنوياً. متى تنتقل من أحدهما إلى الآخر؟",
  alternates: { canonical: "https://noho.tn/ar/blog/autoentrepreneur-tunisien-vs-llc-americaine" },
};

export default function ArAeVsLlcPage() {
  return (
    <ArabicStub
      frHref="/blog/autoentrepreneur-tunisien-vs-llc-americaine"
      frTitleAr="المستثمر المستقل التونسي مقابل LLC أمريكية"
    />
  );
}
