import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "ITIN W-7 من تونس — كيف تحصل عليه بدون SSN أمريكي",
  description: "ITIN يتيح لك ملء W-9 وتفادي اقتطاع 30%. إجراء W-7 من تونس: 6-11 أسبوعاً، أصل أو نسخة موثقة من جواز السفر.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/itin-w7-depuis-tunisie-sans-ssn" },
};

export default function ArItinPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/itin-w7-depuis-tunisie-sans-ssn"
      frTitleAr="ITIN W-7 من تونس"
    />
  );
}
