import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "البطاقة التكنولوجية التونسية — لماذا سقف 1000 دينار يعيقك",
  description: "البطاقة التكنولوجية من البنك المركزي تتيح 1000 دينار سنوياً للمدفوعات الدولية للخدمات التقنية. غير كافٍ. شركة LLC أمريكية + Mercury يحلّان المشكلة.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/carte-technologique-tunisienne-plafond-1000-tnd" },
};

export default function ArCarteTechPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/carte-technologique-tunisienne-plafond-1000-tnd"
      frTitleAr="البطاقة التكنولوجية وسقف 1000 دينار"
    />
  );
}
