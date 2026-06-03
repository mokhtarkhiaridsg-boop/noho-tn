import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "كل الخدمات",
  alternates: { canonical: "https://noho.tn/ar/services" },
  robots: { index: false, follow: true },
};

export default function ArServicesPage() {
  return <ArabicStub frHref="/services" frTitleAr="كل الخدمات" />;
}
