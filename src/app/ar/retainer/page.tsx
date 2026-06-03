import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "المتابعة الشهرية",
  alternates: { canonical: "https://noho.tn/ar/retainer" },
  robots: { index: false, follow: true },
};

export default function ArRetainerPage() {
  return <ArabicStub frHref="/retainer" frTitleAr="المتابعة الشهرية" />;
}
