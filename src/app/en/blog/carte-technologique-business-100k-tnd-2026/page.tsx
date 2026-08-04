import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Carte Technologique Business 100k TND 2026",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/carte-technologique-business-100k-tnd-2026",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/carte-technologique-business-100k-tnd-2026" title="Carte Technologique Business 100k TND 2026" />;
}
