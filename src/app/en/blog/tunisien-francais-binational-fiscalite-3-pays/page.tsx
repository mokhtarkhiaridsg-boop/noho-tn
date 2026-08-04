import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Tunisian French Binational taxation 3 countries",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/tunisien-francais-binational-fiscalite-3-pays",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/tunisien-francais-binational-fiscalite-3-pays" title="Tunisian French Binational taxation 3 countries" />;
}
