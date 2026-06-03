import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Mercury 2026 — المكدس بعد موجة الإغلاق للمؤسس التونسي",
  description: "Mercury Checking + Savings + Treasury 4.5% APY + Vault FDIC + Cards + Bill Pay + IO API. التكوين الموصى به + موجة إغلاقات نهاية 2024 (5-15% non-US مغلقة). 9 إشارات لتقليل خطر الإغلاق. خطة B Relay 72 ساعة.",
  alternates: { canonical: "https://noho.tn/ar/blog/mercury-post-acquisition-stack-2026-tunisien" },
};

export default function ArMercuryPostAcquisitionPage() {
  return (
    <ArabicStub
      frHref="/blog/mercury-post-acquisition-stack-2026-tunisien"
      frTitleAr="Mercury 2026 — المكدس بعد موجة الإغلاق"
    />
  );
}
