import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "تقرير وايومنغ السنوي 60 دولار — الالتزام الذي قد يحلّ شركتك LLC",
  description: "واحد من كل 4 مؤسسين تونسيين ينسى تقرير وايومنغ السنوي. العواقب: حل LLC إدارياً، Mercury يحجب، Stripe يغلق. السلسلة الكاملة للالتزامات السنوية.",
  alternates: { canonical: "https://noho.tn/ar/blog/wyoming-annual-report-60-usd" },
};

export default function ArWyomingReportPage() {
  return (
    <ArabicStub
      frHref="/blog/wyoming-annual-report-60-usd"
      frTitleAr="تقرير وايومنغ السنوي 60 دولار"
    />
  );
}
