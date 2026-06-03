import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Sales tax nexus الأمريكي — متى يجب على شركتك LLC التونسية الجمع حسب الولاية",
  description: "بعد قرار Wayfair 2018، عتبات nexus الاقتصادي (100K-500K دولار/سنة) تطلق التزام جمع sales tax في أكثر من 45 ولاية أمريكية.",
  alternates: { canonical: "https://noho.tn/ar/blog/sales-tax-nexus-us-par-etat" },
};

export default function ArSalesTaxPage() {
  return (
    <ArabicStub
      frHref="/blog/sales-tax-nexus-us-par-etat"
      frTitleAr="Sales tax nexus الأمريكي حسب الولاية"
    />
  );
}
