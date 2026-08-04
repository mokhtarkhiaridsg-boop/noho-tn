import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Mercury Treasury مقابل Checking — اربح 4-5٪ APY على رأس مالك التشغيلي LLC",
  description: "Mercury Checking = 0٪ فائدة، الافتراضي. Mercury Treasury = 4.3-4.7٪ APY على سندات الخزانة. على رصيد متوسط 20 ألف دولار، ذلك ~900 دولار/سنة فوائد مجانية. الإعداد، التخصيص النموذجي 70/30 Treasury/Checking، الضرائب التونسية.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/mercury-treasury-vs-checking" },
};

export default function ArMercuryTreasuryPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/mercury-treasury-vs-checking"
      frTitleAr="Mercury Treasury مقابل Checking"
    />
  );
}
