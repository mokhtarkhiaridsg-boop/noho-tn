import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  alternates: { canonical: "https://noho.tn/ar/faq" },
  robots: { index: false, follow: true },
};

export default function ArFaqPage() {
  return <ArabicStub frHref="/faq" frTitleAr="الأسئلة الشائعة" />;
}
