import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Mercury أغلق حسابك — خطة B في 72 ساعة",
  description: "Mercury يشدد KYC لمنطقة MENA في 2024-2025. إذا تلقيت إشعار إغلاق، إليك بالضبط ما يجب فعله ساعة بساعة لتأمين أموالك.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/mercury-compte-ferme-plan-b" },
};

export default function ArMercuryClosedPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/mercury-compte-ferme-plan-b"
      frTitleAr="Mercury أغلق حسابك — خطة B في 72 ساعة"
    />
  );
}
