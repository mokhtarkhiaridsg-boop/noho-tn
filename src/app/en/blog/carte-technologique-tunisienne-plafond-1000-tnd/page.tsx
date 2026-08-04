import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Carte Technologique Tunisian cap 1000 TND",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/carte-technologique-tunisienne-plafond-1000-tnd",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/carte-technologique-tunisienne-plafond-1000-tnd" title="Carte Technologique Tunisian cap 1000 TND" />;
}
