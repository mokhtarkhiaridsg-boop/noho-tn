import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  alternates: { canonical: "https://noho.tn/ar/privacy" },
  robots: { index: false, follow: true },
};

export default function ArPrivacyPage() {
  return <ArabicStub frHref="/privacy" frTitleAr="سياسة الخصوصية" />;
}
