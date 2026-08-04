import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "Tax residency",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/calculateurs/residence-fiscale",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/calculateurs/residence-fiscale" title="Tax residency" />;
}
