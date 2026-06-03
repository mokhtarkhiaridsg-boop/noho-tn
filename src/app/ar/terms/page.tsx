import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  alternates: { canonical: "https://noho.tn/ar/terms" },
  robots: { index: false, follow: true },
};

export default function ArTermsPage() {
  return <ArabicStub frHref="/terms" frTitleAr="الشروط والأحكام" />;
}
