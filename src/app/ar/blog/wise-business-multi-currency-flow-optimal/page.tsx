import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Wise Business + Mercury — التدفق متعدد العملات الأمثل لـ 50-200K USD/سنة (2026)",
  description: "Wise Business متعدد العملات الأصلي USD/EUR/GBP/AUD + Mercury Treasury USD = توفير 2-3K USD/سنة. التحويل 0.4-0.6% Wise مقابل 1-2% Mercury wire.",
  alternates: { canonical: "https://noho.tn/ar/blog/wise-business-multi-currency-flow-optimal" },
};

export default function ArWiseMultiCurrencyPage() {
  return (
    <ArabicStub
      frHref="/blog/wise-business-multi-currency-flow-optimal"
      frTitleAr="Wise Business + Mercury — التدفق الأمثل"
    />
  );
}
