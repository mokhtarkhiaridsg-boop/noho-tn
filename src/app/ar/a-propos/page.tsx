import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "من نحن",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/a-propos" },
  robots: { index: false, follow: true },
};

export default function ArAProposPage() {
  return <ArabicStub frHref="/fr/a-propos" frTitleAr="من نحن" />;
}
