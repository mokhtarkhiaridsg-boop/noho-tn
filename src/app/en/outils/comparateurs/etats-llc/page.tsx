import type { Metadata } from "next";
import EnglishStub from "@/app/en/_components/EnglishStub";

export const metadata: Metadata = {
  title: "LLC states",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://nohomailboxtunis.com/en/outils/comparateurs/etats-llc",
  },
};

export default function Page() {
  return <EnglishStub frHref="/fr/outils/comparateurs/etats-llc" title="LLC states" />;
}
