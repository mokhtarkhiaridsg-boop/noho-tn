import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الأمن والخصوصية",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/security" },
  robots: { index: false, follow: true },
};

export default function ArSecurityPage() {
  return <ArabicStub frHref="/fr/security" frTitleAr="الأمن والخصوصية" />;
}
