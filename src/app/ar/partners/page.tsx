import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "برنامج الشركاء",
  alternates: { canonical: "https://noho.tn/ar/partners" },
  robots: { index: false, follow: true },
};

export default function ArPartnersPage() {
  return <ArabicStub frHref="/partners" frTitleAr="برنامج الشركاء" />;
}
