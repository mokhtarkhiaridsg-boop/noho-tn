import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "برنامج الشركاء",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/partners" },
  robots: { index: false, follow: true },
};

export default function ArPartnersPage() {
  return <ArabicStub frHref="/fr/partners" frTitleAr="برنامج الشركاء" />;
}
