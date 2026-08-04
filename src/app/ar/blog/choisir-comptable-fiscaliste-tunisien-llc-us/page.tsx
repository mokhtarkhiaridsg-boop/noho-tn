import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "اختيار محاسبك الجبائي التونسي لـ LLC US — 7 معايير + 4 مكاتب مرجعية",
  description: "لماذا المحاسب العام لا يكفي. 7 معايير اختيار. 4 مكاتب: KHIARI (شريك NOHO)، Mazars (premium)، PwC (top)، FidExpert (medium). التكلفة الإجمالية للامتثال الضريبي السنوي ~700-1500 USD/سنة.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/choisir-comptable-fiscaliste-tunisien-llc-us" },
};

export default function ArChoisirComptablePage() {
  return (
    <ArabicStub
      frHref="/fr/blog/choisir-comptable-fiscaliste-tunisien-llc-us"
      frTitleAr="اختيار محاسبك الجبائي التونسي لـ LLC US"
    />
  );
}
