import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "الطالب التونسي — قائمة وصول الولايات المتحدة 30 يومًا الكاملة (F-1 2026)",
  description: "قائمة أسبوع بأسبوع: ما قبل الوصول (SEVIS، صندوق بريد أمريكي، المال)، اليوم الأول الهجرة، الأسبوع 1 البنك + SSN، الأسبوع 2 SEVIS check-in + الفصول + التأمين الصحي، الأسبوع 3 السكن، الأسبوع 4 SSN مستلم + وظيفة في الحرم الجامعي.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/etudiant-tunisien-arrivee-us-checklist-30-jours" },
};

export default function ArEtudiantArriveeUsPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/etudiant-tunisien-arrivee-us-checklist-30-jours"
      frTitleAr="الطالب التونسي — قائمة وصول الولايات المتحدة 30 يومًا"
    />
  );
}
