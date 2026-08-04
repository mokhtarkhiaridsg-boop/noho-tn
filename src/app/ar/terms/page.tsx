import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/terms" },
  robots: { index: false, follow: true },
};

export default function ArTermsPage() {
  return <ArabicStub frHref="/fr/terms" frTitleAr="الشروط والأحكام" />;
}
