import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الأمن والخصوصية",
  alternates: { canonical: "https://noho.tn/ar/security" },
  robots: { index: false, follow: true },
};

export default function ArSecurityPage() {
  return <ArabicStub frHref="/security" frTitleAr="الأمن والخصوصية" />;
}
