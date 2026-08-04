import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "SARL تونسية + LLC أمريكية بالتوازي — الحل لتجنب الحل المبكر",
  description: "لديك SARL تونسية وتريد إضافة LLC أمريكية لعملاء Stripe — بدون حل. الحل المتوازي، كيفية توزيع العملاء، فخ transfer pricing، ومتى تحل فعلاً SARL.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/sarl-tn-vers-llc-us-sans-dissoudre" },
};

export default function ArSarlLlcParallelePage() {
  return (
    <ArabicStub
      frHref="/fr/blog/sarl-tn-vers-llc-us-sans-dissoudre"
      frTitleAr="SARL تونسية + LLC أمريكية بالتوازي"
    />
  );
}
