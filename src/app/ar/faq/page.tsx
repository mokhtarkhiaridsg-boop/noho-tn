import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/faq" },
  robots: { index: false, follow: true },
};

export default function ArFaqPage() {
  return <ArabicStub frHref="/fr/faq" frTitleAr="الأسئلة الشائعة" />;
}
