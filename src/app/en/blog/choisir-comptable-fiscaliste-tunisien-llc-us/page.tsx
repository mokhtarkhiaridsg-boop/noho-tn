import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Choosing accountant tax advisor Tunisian LLC US",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/blog/choisir-comptable-fiscaliste-tunisien-llc-us",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/blog/choisir-comptable-fiscaliste-tunisien-llc-us" title="Choosing accountant tax advisor Tunisian LLC US" />;
}
