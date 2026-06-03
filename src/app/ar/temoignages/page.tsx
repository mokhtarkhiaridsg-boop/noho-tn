import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الشهادات",
  alternates: { canonical: "https://noho.tn/ar/temoignages" },
  robots: { index: false, follow: true },
};

export default function ArTemoignagesPage() {
  return <ArabicStub frHref="/temoignages" frTitleAr="الشهادات" />;
}
