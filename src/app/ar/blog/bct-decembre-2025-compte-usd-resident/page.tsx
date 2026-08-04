import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "البنك المركزي ديسمبر 2025 — فتح حساب دولار مقيم في تونس",
  description: "في 2 ديسمبر 2025، أجاز برلمان تونس للمقيمين امتلاك حسابات بالعملات الأجنبية. هذا دليل عملي لأي بنك يقبل فعلاً وكيف تجمع الملف.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/bct-decembre-2025-compte-usd-resident" },
};

export default function ArBctDec2025Page() {
  return (
    <ArabicStub
      frHref="/fr/blog/bct-decembre-2025-compte-usd-resident"
      frTitleAr="البنك المركزي ديسمبر 2025 — حساب دولار مقيم"
    />
  );
}
