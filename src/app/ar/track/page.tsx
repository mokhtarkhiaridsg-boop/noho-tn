import type { Metadata } from "next";
import ArabicStub from "@/app/ar/_components/ArabicStub";

export const metadata: Metadata = {
  title: "تتبع بريدك",
  alternates: { canonical: "https://nohomailboxtunis.com/ar/track" },
  robots: { index: false, follow: true },
};

export default function ArTrackPage() {
  return <ArabicStub frHref="/fr/track" frTitleAr="تتبع البريد" />;
}
