import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "الأدوات",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/outils" },
  robots: { index: false, follow: true },
};

export default function ArOutilsPage() {
  return <ArabicStub frHref="/fr/outils" frTitleAr="الأدوات" />;
}
