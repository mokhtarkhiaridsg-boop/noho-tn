import type { Metadata } from "next";
import ArabicStub from "../../_components/ArabicStub";

export const metadata: Metadata = {
  title: "Mercury fallback waterfall — Relay → Brex → Wise → Airwallex، خطة B الموثقة",
  description: "6 صفوف مصرفية بترتيب الأولوية: Mercury → Relay → Wise → Airwallex → Brex → Payoneer. متى تفعل كل واحد، معدلات القبول المقدرة للملف التونسي، خطة التعافي.",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/blog/mercury-fallback-waterfall-relay-brex-wise" },
};

export default function ArMercuryFallbackPage() {
  return (
    <ArabicStub
      frHref="/fr/blog/mercury-fallback-waterfall-relay-brex-wise"
      frTitleAr="Mercury fallback waterfall — خطة B الموثقة"
    />
  );
}
