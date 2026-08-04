import type { Metadata } from "next";
import ArabicStub from "../../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "حاسبة الضرائب الأمريكية حسب الولاية — CA, NY, TX, FL",
  description: "قدّر تعرضك الضريبي حسب الولاية الأمريكية إذا أطلقت nexus (e-com، موظف، مخزون). Income tax + franchise tax + sales tax.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/outils/calculateurs/taxes-us-etat" },
};

export default function ArTaxesUsEtatPage() {
  return <ArabicStub frHref="/fr/outils/calculateurs/taxes-us-etat" frTitleAr="الضرائب الأمريكية حسب الولاية" />;
}
