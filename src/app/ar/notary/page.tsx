import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "كاتب العدل الكاليفورني",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/notary" },
  robots: { index: false, follow: true },
};

export default function ArNotaryPage() {
  return <ArabicStub frHref="/fr/notary" frTitleAr="كاتب العدل" />;
}
