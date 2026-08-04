import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "البطاقة التكنولوجية للأعمال — حتى 100 000 د.ت/سنة Startup Act (دليل كامل 2026)",
  description: "البطاقة التكنولوجية الشخصية (1 000 د.ت/سنة) مقابل AE (5-10K)، SARL (10-50K)، Startup Act labellisée 2018 (100K د.ت/سنة). إجراءات الحصول، التفاوض على الحد الأقصى، التكاليف.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/carte-technologique-business-100k-tnd-2026" },
};

export default function ArCarteTechBusinessPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/carte-technologique-business-100k-tnd-2026"
      frTitleAr="البطاقة التكنولوجية للأعمال — Startup Act"
    />
  );
}
