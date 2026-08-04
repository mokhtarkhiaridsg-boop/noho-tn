import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "بنك Mercury من تونس — الملف الذي يزيد من فرص قبولك",
  description: "Mercury يرفض حوالي 30% من الملفات في منطقة الشرق الأوسط وشمال أفريقيا. تسعة عناصر تجعل ملفك يمرّ بسلاسة. خطة بديلة موثقة.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/mercury-bank-depuis-tunis-dossier-renforce" },
};

export default function ArMercuryPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/mercury-bank-depuis-tunis-dossier-renforce"
      frTitleAr="بنك Mercury من تونس — الملف القوي"
    />
  );
}
