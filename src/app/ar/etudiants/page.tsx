import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "بوابة الطلاب",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/etudiants" },
  robots: { index: false, follow: true },
};

export default function ArEtudiantsPage() {
  return <ArabicStub frHref="/fr/etudiants" frTitleAr="بوابة الطلاب" />;
}
