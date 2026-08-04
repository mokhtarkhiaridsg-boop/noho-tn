import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "سقف بطاقة التكنولوجيا",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/guides/plafond-carte-technologique" },
  robots: { index: false, follow: true },
};

export default function ArGuidePlafondPage() {
  return <ArabicStub frHref="/fr/guides/plafond-carte-technologique" frTitleAr="سقف البطاقة التكنولوجية" />;
}
