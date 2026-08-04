import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "البحث عن حالة EIN في IRS — التحقق من CP 575 و Form 147C",
  description: "IRS لا تملك بوابة عامة للتحقق من EIN. إليك كيف تتحقق عبر CP 575، Form 147C، والاتصال بالرقم 800-829-4933.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/outils/lookups/ein-status" },
};

export default function ArEinLookupPage() {
  return <ArabicStub frHref="/fr/outils/lookups/ein-status" frTitleAr="التحقق من حالة EIN في IRS" />;
}
