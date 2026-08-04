import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "BCT تونس 2026 — الموجز الفصلي للمؤسسين والمستقلين",
  description: "ملخص لـ 7 إصلاحات BCT/IRPP/Code des Changes منذ ديسمبر 2025. حساب USD للمقيم، البطاقة التكنولوجية للأعمال، CRS سبتمبر 2026، خروج FATF، IRPP 2026، وضع Wise/Revolut.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/bct-tunisie-2026-actualise" },
};

export default function ArBct2026Page() {
  return (
    <ArabicStub
      frHref="/fr/blog/bct-tunisie-2026-actualise"
      frTitleAr="BCT تونس 2026 — الموجز الفصلي"
    />
  );
}
