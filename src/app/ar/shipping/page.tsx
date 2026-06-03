import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الشحن الدولي",
  alternates: { canonical: "https://noho.tn/ar/shipping" },
  robots: { index: false, follow: true },
};

export default function ArShippingPage() {
  return <ArabicStub frHref="/shipping" frTitleAr="الشحن الدولي" />;
}
