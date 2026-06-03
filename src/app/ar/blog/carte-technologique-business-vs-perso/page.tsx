import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "البطاقة التكنولوجية للأعمال — مسار 10 000 دينار سنوياً للـ AE و SARL التونسية",
  description: "كثيرون يعرفون النسخة الشخصية بسقف 1000 دينار/سنة. قليلون يعرفون النسخة التجارية بسقف 5000-10000 دينار/سنة قابل للتفاوض. الشروط والملف ومتى تنتقل إلى LLC أمريكية.",
  alternates: { canonical: "https://noho.tn/ar/blog/carte-technologique-business-vs-perso" },
};

export default function ArCarteTechBusinessPage() {
  return (
    <ArabicStub
      frHref="/blog/carte-technologique-business-vs-perso"
      frTitleAr="البطاقة التكنولوجية للأعمال — 10 000 دينار سنوياً"
    />
  );
}
